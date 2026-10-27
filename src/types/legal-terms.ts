import { DetectionType } from './comparendo.js';

export interface DiscountPeriod {
  percentage: number;
  maxBusinessDays: number;
  requiresCourse: boolean;
  deadlineDate: string; // YYYY-MM-DD
  isCurrentlyValid: boolean;
}

export interface LegalDeadlines {
  detectionType: DetectionType;
  infractionDate: string;
  notificationDate: string;
  calculationDate: string;
  discount50: DiscountPeriod;
  discount25: DiscountPeriod;
  hearingDeadline: {
    maxBusinessDays: number;
    deadlineDate: string;
    isCurrentlyValid: boolean;
  };
  caducidad: {
    deadlineDate: string;
    isCaducado: boolean;
    daysRemaining: number;
    legalBasis: string;
  };
  prescripcion: {
    deadlineDate: string;
    isPrescrito: boolean;
    daysRemaining: number;
    legalBasis: string;
    interruptedByCoactivo: boolean;
  };
  currentStatus:
    | 'DESCUENTO_50'
    | 'DESCUENTO_25'
    | 'PLENO'
    | 'INTERESES_MORA'
    | 'CADUCADO'
    | 'PRESCRITO';
}
