import { VehicleRecord } from '../types/vehicle.js';
import { validatePlate } from '../validators/plate-validator.js';

export interface DocumentStatus {
  isExpired: boolean;
  isExpiringSoon: boolean; // Menos de 30 días
  daysRemaining: number;
  validUntil: string;
}

export function checkDocumentStatus(
  validUntilStr?: string,
  referenceDateInput: Date | string = new Date()
): DocumentStatus {
  if (!validUntilStr) {
    return {
      isExpired: true,
      isExpiringSoon: false,
      daysRemaining: 0,
      validUntil: ''
    };
  }

  const validUntil = new Date(validUntilStr);
  const refDate =
    typeof referenceDateInput === 'string'
      ? new Date(referenceDateInput)
      : referenceDateInput;

  const diffMs = validUntil.getTime() - refDate.getTime();
  const daysRemaining = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  return {
    isExpired: daysRemaining < 0,
    isExpiringSoon: daysRemaining >= 0 && daysRemaining <= 30,
    daysRemaining: Math.max(0, daysRemaining),
    validUntil: validUntilStr
  };
}

/**
 * Crea un registro de vehículo validado para el sistema de control contravencional.
 */
export function createVehicleRecord(data: Partial<VehicleRecord> & { plate: string; ownerDocument: string; ownerName: string }): VehicleRecord {
  const plateAudit = validatePlate(data.plate);
  if (!plateAudit.isValid) {
    throw new Error(`Placa vehicular inválida: ${data.plate}. ${plateAudit.error}`);
  }

  return {
    plate: plateAudit.normalizedPlate,
    vehicleClass: data.vehicleClass || plateAudit.suggestedVehicleClass,
    serviceType: data.serviceType || plateAudit.suggestedService,
    brand: data.brand,
    line: data.line,
    modelYear: data.modelYear,
    engineDisplacementCc: data.engineDisplacementCc,
    chassisNumber: data.chassisNumber,
    engineNumber: data.engineNumber,
    soat: data.soat,
    technicalInspection: data.technicalInspection,
    ownerDocument: data.ownerDocument,
    ownerName: data.ownerName,
    isImmobilized: !!data.isImmobilized,
    immobilizationDetails: data.immobilizationDetails
  };
}

/**
 * Evalúa si un vehículo tiene restricción de circulación por Pico y Placa
 * para una fecha y esquema de dígitos determinados.
 */
export function isRestrictedByPicoYPlaca(
  plate: string,
  restrictedDigits: number[]
): boolean {
  const audit = validatePlate(plate);
  if (!audit.isValid || audit.lastDigit === null) return false;
  return restrictedDigits.includes(audit.lastDigit);
}
