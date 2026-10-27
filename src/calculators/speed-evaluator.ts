import { SPEED_RULES } from '../data/speed-limits.js';
import { VehicleClass } from '../types/infraction.js';
import { SpeedEvaluationResult, SpeedZone } from '../types/speed-limits.js';

export function evaluateSpeed(
  measuredSpeedKmh: number,
  zone: SpeedZone,
  vehicleClass: VehicleClass = 'AUTOMOVIL'
): SpeedEvaluationResult {
  const rule = SPEED_RULES[zone];
  if (!rule) {
    throw new Error(`Zona de velocidad desconocida: ${zone}`);
  }

  let maxAllowed = rule.defaultMaxKmh;

  if (vehicleClass === 'TRANSPORTE_ESCOLAR') {
    maxAllowed = rule.schoolTransportMaxKmh;
  } else if (
    ['BUS', 'BUSETA', 'MICROBUS', 'CAMION', 'TRACTOCAMION', 'VOLQUETA'].includes(
      vehicleClass
    )
  ) {
    maxAllowed = rule.publicAndFreightMaxKmh;
  }

  const excess = Math.max(0, measuredSpeedKmh - maxAllowed);
  const isSpeeding = excess > 0;

  let applicableInfractionCode: 'C29' | 'D10' | undefined = undefined;
  if (isSpeeding) {
    applicableInfractionCode =
      vehicleClass === 'TRANSPORTE_ESCOLAR' ? 'D10' : 'C29';
  }

  return {
    isSpeeding,
    measuredSpeedKmh,
    maxAllowedSpeedKmh: maxAllowed,
    excessKmh: excess,
    applicableInfractionCode,
    vehicleClass,
    zone,
    legalArticle: rule.legalNote
  };
}
