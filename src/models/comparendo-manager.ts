import { calculateFine } from '../calculators/fine-calculator.js';
import { calculateLegalDeadlines } from '../calculators/legal-deadlines.js';
import { Comparendo, ComparendoStatus, CourseRecord, DetectionType, PaymentRecord } from '../types/comparendo.js';
import { getInfractionOrThrow, normalizeInfractionCode } from '../validators/code-validator.js';
import { normalizePlate, validatePlate } from '../validators/plate-validator.js';

export interface CreateComparendoInput {
  comparendoNumber: string;
  infractionCode: string;
  detectionType: DetectionType;
  infractionDate: string; // ISO string
  notificationDate?: string;
  department: string;
  municipality: string;
  locationAddress: string;
  plate: string;
  vehicleClass?: string;
  serviceType?: string;
  driverDocument?: string;
  driverName?: string;
  ownerDocument: string;
  ownerName: string;
  officerPlateOrCameraId: string;
  observations?: string;
  isImmobilized?: boolean;
  towPlate?: string;
  patioName?: string;
  year?: number;
}

/**
 * Crea e inicializa una orden de comparendo nacional con montos, fechas y estados auditados.
 */
export function createComparendo(input: CreateComparendoInput): Comparendo {
  const normalizedCode = normalizeInfractionCode(input.infractionCode);
  const infraction = getInfractionOrThrow(normalizedCode);
  const plateAudit = validatePlate(input.plate);

  const infractionYear = input.year || new Date(input.infractionDate).getUTCFullYear();
  const fine = calculateFine(normalizedCode, { year: infractionYear });

  const notificationDate = input.notificationDate || (input.detectionType === 'AGENTE_EN_VIA' ? input.infractionDate : undefined);

  let initialStatus: ComparendoStatus = 'PENDIENTE_NOTIFICACION';
  if (notificationDate) {
    initialStatus = 'DESCUENTO_50_VIGENTE';
  }

  const isImmob = input.isImmobilized ?? infraction.immobilization;

  return {
    comparendoNumber: input.comparendoNumber.trim(),
    infractionCode: infraction.code,
    category: infraction.category,
    detectionType: input.detectionType,
    infractionDate: input.infractionDate,
    notificationDate,
    department: input.department.trim(),
    municipality: input.municipality.trim(),
    locationAddress: input.locationAddress.trim(),
    plate: plateAudit.isValid ? plateAudit.normalizedPlate : normalizePlate(input.plate),
    vehicleClass: input.vehicleClass || plateAudit.suggestedVehicleClass,
    serviceType: input.serviceType || plateAudit.suggestedService,
    driverDocument: input.driverDocument?.trim(),
    driverName: input.driverName?.trim(),
    ownerDocument: input.ownerDocument.trim(),
    ownerName: input.ownerName.trim(),
    officerPlateOrCameraId: input.officerPlateOrCameraId.trim(),
    status: initialStatus,
    observations: input.observations,
    isImmobilized: isImmob,
    towPlate: input.towPlate,
    patioName: input.patioName,
    baseAmountCop: fine.baseAmountCop,
    amountDueCop: fine.baseAmountCop
  };
}

/**
 * Registra y aplica el pago de un comparendo, validando si cumple las condiciones
 * de pronto pago con curso pedagógico (50% o 25%) o pago pleno.
 */
export function applyPaymentToComparendo(
  comparendo: Comparendo,
  payment: {
    amount: number;
    date: string;
    reference: string;
    channel?: string;
  }
): Comparendo {
  if (['PAGADO_TOTAL', 'PAGADO_DESCUENTO_50', 'PAGADO_DESCUENTO_25'].includes(comparendo.status)) {
    throw new Error(`El comparendo ${comparendo.comparendoNumber} ya se encuentra pagado.`);
  }

  const deadlines = calculateLegalDeadlines({
    infractionDate: comparendo.infractionDate,
    detectionType: comparendo.detectionType,
    notificationDate: comparendo.notificationDate,
    calculationDate: payment.date
  });

  const hasCourse = !!comparendo.course;
  let discountApplied: 0 | 25 | 50 = 0;
  let newStatus: ComparendoStatus = 'PAGADO_TOTAL';

  if (deadlines.discount50.isCurrentlyValid && hasCourse) {
    discountApplied = 50;
    newStatus = 'PAGADO_DESCUENTO_50';
  } else if (deadlines.discount25.isCurrentlyValid && hasCourse) {
    discountApplied = 25;
    newStatus = 'PAGADO_DESCUENTO_25';
  }

  const paymentRecord: PaymentRecord = {
    amount: payment.amount,
    date: payment.date,
    reference: payment.reference,
    discountApplied,
    channel: payment.channel
  };

  return {
    ...comparendo,
    status: newStatus,
    amountDueCop: 0,
    payment: paymentRecord
  };
}

/**
 * Registra el certificado de asistencia y aprobación del curso vial en un CIA.
 */
export function registerCourseCompletion(
  comparendo: Comparendo,
  course: CourseRecord
): Comparendo {
  return {
    ...comparendo,
    course
  };
}

/**
 * Actualiza el estado legal y los montos de un comparendo con respecto a una fecha de corte.
 */
export function refreshComparendoStatus(
  comparendo: Comparendo,
  currentDateInput: string | Date = new Date()
): Comparendo {
  // Si ya está en un estado final de pago, exoneración o anulación, se conserva
  if (
    [
      'PAGADO_TOTAL',
      'PAGADO_DESCUENTO_50',
      'PAGADO_DESCUENTO_25',
      'EXONERADO_FALLO',
      'ANULADO',
      'EN_AUDIENCIA_IMPUGNADO'
    ].includes(comparendo.status)
  ) {
    return comparendo;
  }

  const deadlines = calculateLegalDeadlines({
    infractionDate: comparendo.infractionDate,
    detectionType: comparendo.detectionType,
    notificationDate: comparendo.notificationDate,
    calculationDate: currentDateInput
  });

  let nextStatus: ComparendoStatus = comparendo.status;

  if (deadlines.prescripcion.isPrescrito) {
    nextStatus = 'PRESCRITO';
  } else if (deadlines.caducidad.isCaducado) {
    nextStatus = 'CADUCADO';
  } else if (deadlines.discount50.isCurrentlyValid) {
    nextStatus = 'DESCUENTO_50_VIGENTE';
  } else if (deadlines.discount25.isCurrentlyValid) {
    nextStatus = 'DESCUENTO_25_VIGENTE';
  } else {
    nextStatus = 'COBRO_PLENO';
  }

  return {
    ...comparendo,
    status: nextStatus
  };
}
