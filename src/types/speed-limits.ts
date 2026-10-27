import { VehicleClass } from './infraction.js';

export type SpeedZone =
  | 'URBANA'
  | 'ESCOLAR'
  | 'RESIDENCIAL'
  | 'RURAL_SENCILLA'
  | 'RURAL_DOBLE_CALZADA';

export interface SpeedRule {
  zone: SpeedZone;
  description: string;
  defaultMaxKmh: number;
  publicAndFreightMaxKmh: number;
  schoolTransportMaxKmh: number;
  legalNote: string;
}

export interface SpeedEvaluationResult {
  isSpeeding: boolean;
  measuredSpeedKmh: number;
  maxAllowedSpeedKmh: number;
  excessKmh: number;
  applicableInfractionCode?: 'C29' | 'D10';
  vehicleClass: VehicleClass;
  zone: SpeedZone;
  legalArticle: string;
}
