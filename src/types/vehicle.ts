import { VehicleClass } from './infraction.js';

export type ServiceType =
  | 'PARTICULAR'
  | 'PUBLICO'
  | 'OFICIAL'
  | 'DIPLOMATICO'
  | 'ESPECIAL'
  | 'ENSENANZA';

export type PlateFormat =
  | 'AUTOMOVIL_PARTICULAR'
  | 'AUTOMOVIL_PUBLICO'
  | 'MOTOCICLETA_NUEVA'
  | 'MOTOCICLETA_ANTIGUA'
  | 'REMOLQUE'
  | 'DIPLOMATICO'
  | 'CLASICO_ANTIGUO'
  | 'MAQUINARIA'
  | 'DESCONOCIDO';

export interface PlateValidationResult {
  isValid: boolean;
  normalizedPlate: string;
  formattedPlate: string;
  plateFormat: PlateFormat;
  suggestedService: ServiceType;
  suggestedVehicleClass: VehicleClass;
  lastDigit: number | null;
  error?: string;
}

export interface SoatRecord {
  policyNumber: string;
  insurer: string;
  validUntil: string; // ISO date string (YYYY-MM-DD)
  isValid: boolean;
}

export interface TechnicalInspectionRecord {
  cdaName: string;
  certificateNumber: string;
  validUntil: string; // ISO date string (YYYY-MM-DD)
  isValid: boolean;
}

export interface VehicleRecord {
  plate: string;
  vehicleClass: VehicleClass;
  serviceType: ServiceType;
  brand?: string;
  line?: string;
  modelYear?: number;
  engineDisplacementCc?: number;
  chassisNumber?: string;
  engineNumber?: string;
  soat?: SoatRecord;
  technicalInspection?: TechnicalInspectionRecord;
  ownerDocument: string;
  ownerName: string;
  isImmobilized: boolean;
  immobilizationDetails?: {
    patioName: string;
    impoundDate: string;
    towTruckPlate?: string;
    inventoryNumber?: string;
  };
}
