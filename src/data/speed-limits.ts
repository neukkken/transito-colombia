import { SpeedRule, SpeedZone } from '../types/speed-limits.js';

export const SPEED_RULES: Readonly<Record<SpeedZone, SpeedRule>> = {
  URBANA: {
    zone: 'URBANA',
    description: 'Vías urbanas y carreteras municipales en perímetros de ciudades o poblados.',
    defaultMaxKmh: 50,
    publicAndFreightMaxKmh: 50,
    schoolTransportMaxKmh: 50,
    legalNote: 'Ley 2251 de 2022 (Art. 106 Ley 769): En vías urbanas las velocidades máximas y mínimas permitidas para vehículos no podrán sobrepasar los 50 kilómetros por hora.'
  },
  ESCOLAR: {
    zone: 'ESCOLAR',
    description: 'Zonas escolares, proximidades de colegios, jardines infantiles o universidades.',
    defaultMaxKmh: 30,
    publicAndFreightMaxKmh: 30,
    schoolTransportMaxKmh: 30,
    legalNote: 'Ley 2251 de 2022: En zonas escolares y residenciales la velocidad máxima permitida no podrá sobrepasar los 30 kilómetros por hora.'
  },
  RESIDENCIAL: {
    zone: 'RESIDENCIAL',
    description: 'Zonas residenciales y vías de pacificación de tránsito.',
    defaultMaxKmh: 30,
    publicAndFreightMaxKmh: 30,
    schoolTransportMaxKmh: 30,
    legalNote: 'Ley 2251 de 2022: Límite estricto de 30 km/h para salvaguardar peatones y residentes.'
  },
  RURAL_SENCILLA: {
    zone: 'RURAL_SENCILLA',
    description: 'Carreteras nacionales y departamentales en calzada sencilla o con pasos peatonales.',
    defaultMaxKmh: 90,
    publicAndFreightMaxKmh: 80,
    schoolTransportMaxKmh: 80,
    legalNote: 'Ley 2251 de 2022 (Art. 107 Ley 769): Límite máximo de 90 km/h para servicio particular y 80 km/h para servicio público y carga.'
  },
  RURAL_DOBLE_CALZADA: {
    zone: 'RURAL_DOBLE_CALZADA',
    description: 'Carreteras nacionales en doble calzada que no contengan pasos peatonales.',
    defaultMaxKmh: 120,
    publicAndFreightMaxKmh: 80,
    schoolTransportMaxKmh: 80,
    legalNote: 'Ley 2251 de 2022: Hasta 120 km/h para particulares en vías que cumplan especificaciones técnicas de doble calzada.'
  }
};
