import { InfractionCategory } from './infraction.js';

export type DetectionType = 'AGENTE_EN_VIA' | 'FOTODETECCION';

export type ComparendoStatus =
  | 'PENDIENTE_NOTIFICACION'
  | 'NOTIFICADO'
  | 'DESCUENTO_50_VIGENTE'
  | 'DESCUENTO_25_VIGENTE'
  | 'COBRO_PLENO'
  | 'EN_AUDIENCIA_IMPUGNADO'
  | 'SANCIONADO_RESOLUCION'
  | 'COBRO_COACTIVO'
  | 'PAGADO_TOTAL'
  | 'PAGADO_DESCUENTO_50'
  | 'PAGADO_DESCUENTO_25'
  | 'EXONERADO_FALLO'
  | 'CADUCADO'
  | 'PRESCRITO'
  | 'ANULADO';

export interface PaymentRecord {
  amount: number;
  date: string;
  reference: string;
  discountApplied: 0 | 25 | 50;
  channel?: string;
}

export interface CourseRecord {
  ciaName: string; // Centro Integral de Atención
  certificateNumber: string;
  date: string;
  attendedHours: number;
}

export interface AudienciaRecord {
  requestedDate: string;
  scheduledDate?: string;
  status: 'PROGRAMADA' | 'REALIZADA' | 'SUSPENDIDA' | 'CANCELADA';
  result?: 'EXONERADO' | 'SANCIONADO' | 'PENDIENTE';
  resolutionNumber?: string;
  decisionDate?: string;
  notes?: string;
}

export interface Comparendo {
  comparendoNumber: string;
  infractionCode: string;
  category: InfractionCategory;
  detectionType: DetectionType;
  infractionDate: string; // ISO 8601
  notificationDate?: string; // ISO 8601
  department: string;
  municipality: string;
  locationAddress: string;
  plate: string;
  vehicleClass: string;
  serviceType: string;
  driverDocument?: string;
  driverName?: string;
  ownerDocument: string;
  ownerName: string;
  officerPlateOrCameraId: string;
  status: ComparendoStatus;
  observations?: string;
  isImmobilized: boolean;
  towPlate?: string;
  patioName?: string;
  baseAmountCop: number;
  amountDueCop: number;
  payment?: PaymentRecord;
  course?: CourseRecord;
  audiencia?: AudienciaRecord;
}
