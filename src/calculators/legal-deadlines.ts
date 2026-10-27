import { isColombianHoliday } from '../data/colombian-holidays.js';
import { DetectionType } from '../types/comparendo.js';
import { LegalDeadlines } from '../types/legal-terms.js';

function parseDate(input: string | Date): Date {
  if (input instanceof Date) return new Date(input.getTime());
  // Handle YYYY-MM-DD or ISO string
  const parts = input.split('T')[0].split('-');
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);
  return new Date(Date.UTC(year, month, day));
}

function formatDateKey(d: Date): string {
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, '0');
  const day = String(d.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

/**
 * Determina si una fecha es día hábil en Colombia (no es sábado, domingo ni festivo).
 */
export function isBusinessDay(date: Date | string): boolean {
  const d = parseDate(date);
  const dayOfWeek = d.getUTCDay();
  if (dayOfWeek === 0 || dayOfWeek === 6) return false; // Sábado o Domingo
  return !isColombianHoliday(d);
}

/**
 * Añade un número determinado de días hábiles a una fecha de partida,
 * omitiendo sábados, domingos y festivos oficiales en Colombia.
 */
export function addBusinessDays(startDateInput: Date | string, businessDaysCount: number): Date {
  const current = parseDate(startDateInput);
  let added = 0;

  while (added < businessDaysCount) {
    current.setUTCDate(current.getUTCDate() + 1);
    if (isBusinessDay(current)) {
      added++;
    }
  }

  return current;
}

/**
 * Cuenta la cantidad exacta de días hábiles transcurridos entre dos fechas.
 */
export function countBusinessDaysBetween(
  startDateInput: Date | string,
  endDateInput: Date | string
): number {
  const start = parseDate(startDateInput);
  const end = parseDate(endDateInput);

  if (start.getTime() > end.getTime()) return 0;

  const current = new Date(start);
  let count = 0;

  while (current.getTime() < end.getTime()) {
    current.setUTCDate(current.getUTCDate() + 1);
    if (isBusinessDay(current)) {
      count++;
    }
  }

  return count;
}

/**
 * Calcula todos los plazos procesales legales y debido proceso de un comparendo de tránsito en Colombia:
 * - Descuentos del 50% y 25% (con curso pedagógico).
 * - Plazo para solicitar comparecencia / audiencia pública.
 * - Caducidad de la acción contravencional (1 año - Art. 161 Ley 769 / Ley 1843).
 * - Prescripción de la sanción de tránsito (3 años - Art. 159 Ley 769).
 */
export function calculateLegalDeadlines(params: {
  infractionDate: string | Date;
  detectionType: DetectionType;
  notificationDate?: string | Date;
  calculationDate?: string | Date;
  interruptedByCoactivo?: boolean;
}): LegalDeadlines {
  const infractionD = parseDate(params.infractionDate);
  const notificationD = params.notificationDate
    ? parseDate(params.notificationDate)
    : infractionD; // Para agente en vía la notificación es inmediata

  const calcD = params.calculationDate ? parseDate(params.calculationDate) : new Date();

  const isPhoto = params.detectionType === 'FOTODETECCION';

  // Plazos legales en días hábiles
  // Agente en vía: 5 días hábiles para 50%, hasta 20 días hábiles para 25%
  // Fotomulta: 11 días hábiles para 50%, hasta 26 días hábiles para 25%
  const maxDays50 = isPhoto ? 11 : 5;
  const maxDays25 = isPhoto ? 26 : 20;

  const deadline50D = addBusinessDays(notificationD, maxDays50);
  const deadline25D = addBusinessDays(notificationD, maxDays25);
  const hearingDeadlineD = addBusinessDays(notificationD, maxDays50);

  // Caducidad: 1 año calendario desde la fecha de ocurrencia del hecho (Art. 161 Ley 769)
  const caducidadD = new Date(infractionD);
  caducidadD.setUTCFullYear(caducidadD.getUTCFullYear() + 1);

  // Prescripción: 3 años calendario desde la fecha de los hechos o firmeza
  const prescripcionYears = params.interruptedByCoactivo ? 6 : 3;
  const prescripcionD = new Date(infractionD);
  prescripcionD.setUTCFullYear(prescripcionD.getUTCFullYear() + prescripcionYears);

  const calcTime = calcD.getTime();
  const isCaducado = calcTime > caducidadD.getTime();
  const isPrescrito = calcTime > prescripcionD.getTime();

  const is50Valid = calcTime <= deadline50D.getTime() && !isCaducado && !isPrescrito;
  const is25Valid =
    !is50Valid && calcTime <= deadline25D.getTime() && !isCaducado && !isPrescrito;

  // Días calendario restantes
  const oneDayMs = 24 * 60 * 60 * 1000;
  const daysRemCaducidad = Math.max(
    0,
    Math.ceil((caducidadD.getTime() - calcTime) / oneDayMs)
  );
  const daysRemPrescripcion = Math.max(
    0,
    Math.ceil((prescripcionD.getTime() - calcTime) / oneDayMs)
  );

  let currentStatus: LegalDeadlines['currentStatus'] = 'PLENO';
  if (isPrescrito) {
    currentStatus = 'PRESCRITO';
  } else if (isCaducado) {
    currentStatus = 'CADUCADO';
  } else if (is50Valid) {
    currentStatus = 'DESCUENTO_50';
  } else if (is25Valid) {
    currentStatus = 'DESCUENTO_25';
  } else if (calcTime > deadline25D.getTime() + 10 * oneDayMs) {
    currentStatus = 'INTERESES_MORA';
  }

  return {
    detectionType: params.detectionType,
    infractionDate: formatDateKey(infractionD),
    notificationDate: formatDateKey(notificationD),
    calculationDate: formatDateKey(calcD),
    discount50: {
      percentage: 50,
      maxBusinessDays: maxDays50,
      requiresCourse: true,
      deadlineDate: formatDateKey(deadline50D),
      isCurrentlyValid: is50Valid
    },
    discount25: {
      percentage: 25,
      maxBusinessDays: maxDays25,
      requiresCourse: true,
      deadlineDate: formatDateKey(deadline25D),
      isCurrentlyValid: is25Valid
    },
    hearingDeadline: {
      maxBusinessDays: maxDays50,
      deadlineDate: formatDateKey(hearingDeadlineD),
      isCurrentlyValid: calcTime <= hearingDeadlineD.getTime()
    },
    caducidad: {
      deadlineDate: formatDateKey(caducidadD),
      isCaducado,
      daysRemaining: daysRemCaducidad,
      legalBasis:
        'Ley 769 de 2002 Art. 161 (modificado por Ley 1843 de 2017): La acción por contravención a las normas de tránsito caduca al año (1) de haber sido cometida la infracción si no se celebra audiencia y emite fallo sancionatorio.'
    },
    prescripcion: {
      deadlineDate: formatDateKey(prescripcionD),
      isPrescrito,
      daysRemaining: daysRemPrescripcion,
      legalBasis:
        'Ley 769 de 2002 Art. 159: Las sanciones impuestas por infracciones a las normas de tránsito prescriben en tres (3) años contados a partir de la ocurrencia del hecho.',
      interruptedByCoactivo: !!params.interruptedByCoactivo
    },
    currentStatus
  };
}
