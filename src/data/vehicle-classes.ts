import { VehicleClass } from '../types/infraction.js';

export interface VehicleClassDefinition {
  classType: VehicleClass;
  name: string;
  description: string;
  requiresRTM: boolean;
  requiresSOAT: boolean;
  requiresHelmet: boolean;
  requiresReflectiveVest: boolean;
  minTireTreadDepthMm: number;
}

export const VEHICLE_CLASSES_DEFINITIONS: Readonly<Record<VehicleClass, VehicleClassDefinition>> = {
  AUTOMOVIL: {
    classType: 'AUTOMOVIL',
    name: 'Automóvil',
    description: 'Vehículo automotor destinado al transporte de hasta cinco (5) personas.',
    requiresRTM: true,
    requiresSOAT: true,
    requiresHelmet: false,
    requiresReflectiveVest: false,
    minTireTreadDepthMm: 1.6
  },
  CAMIONETA: {
    classType: 'CAMIONETA',
    name: 'Camioneta',
    description: 'Vehículo automotor destinado al transporte de pasajeros y/o carga con capacidad de hasta 9 personas o 5 toneladas.',
    requiresRTM: true,
    requiresSOAT: true,
    requiresHelmet: false,
    requiresReflectiveVest: false,
    minTireTreadDepthMm: 1.6
  },
  CAMPERO: {
    classType: 'CAMPERO',
    name: 'Campero',
    description: 'Vehículo automotor con tracción en todas sus ruedas (4x4), adecuado para circular en terrenos difíciles.',
    requiresRTM: true,
    requiresSOAT: true,
    requiresHelmet: false,
    requiresReflectiveVest: false,
    minTireTreadDepthMm: 1.6
  },
  MICROBUS: {
    classType: 'MICROBUS',
    name: 'Microbús',
    description: 'Vehículo automotor destinado al transporte de personas con capacidad entre 10 y 19 pasajeros.',
    requiresRTM: true,
    requiresSOAT: true,
    requiresHelmet: false,
    requiresReflectiveVest: false,
    minTireTreadDepthMm: 2.0
  },
  BUS: {
    classType: 'BUS',
    name: 'Bus',
    description: 'Vehículo automotor destinado al transporte de personas con capacidad de más de 30 pasajeros.',
    requiresRTM: true,
    requiresSOAT: true,
    requiresHelmet: false,
    requiresReflectiveVest: false,
    minTireTreadDepthMm: 2.0
  },
  BUSETA: {
    classType: 'BUSETA',
    name: 'Buseta',
    description: 'Vehículo automotor destinado al transporte de personas con capacidad de entre 20 y 30 pasajeros.',
    requiresRTM: true,
    requiresSOAT: true,
    requiresHelmet: false,
    requiresReflectiveVest: false,
    minTireTreadDepthMm: 2.0
  },
  CAMION: {
    classType: 'CAMION',
    name: 'Camión',
    description: 'Vehículo automotor rígido destinado al transporte de carga superior a 5 toneladas.',
    requiresRTM: true,
    requiresSOAT: true,
    requiresHelmet: false,
    requiresReflectiveVest: false,
    minTireTreadDepthMm: 2.0
  },
  TRACTOCAMION: {
    classType: 'TRACTOCAMION',
    name: 'Tractocamión',
    description: 'Vehículo automotor destinado a arrastrar uno o varios semirremolques.',
    requiresRTM: true,
    requiresSOAT: true,
    requiresHelmet: false,
    requiresReflectiveVest: false,
    minTireTreadDepthMm: 2.0
  },
  VOLQUETA: {
    classType: 'VOLQUETA',
    name: 'Volqueta',
    description: 'Vehículo automotor con platón basculante para transporte y volteo de escombros y materiales de construcción.',
    requiresRTM: true,
    requiresSOAT: true,
    requiresHelmet: false,
    requiresReflectiveVest: false,
    minTireTreadDepthMm: 2.0
  },
  MOTOCICLETA: {
    classType: 'MOTOCICLETA',
    name: 'Motocicleta',
    description: 'Vehículo automotor de dos ruedas en línea con capacidad para conductor y acompañante.',
    requiresRTM: true,
    requiresSOAT: true,
    requiresHelmet: true,
    requiresReflectiveVest: true,
    minTireTreadDepthMm: 1.0
  },
  MOTOTRICICLO: {
    classType: 'MOTOTRICICLO',
    name: 'Mototriciclo',
    description: 'Vehículo automotor de tres ruedas con estabilidad propia destinado al transporte de personas o carga.',
    requiresRTM: true,
    requiresSOAT: true,
    requiresHelmet: true,
    requiresReflectiveVest: true,
    minTireTreadDepthMm: 1.0
  },
  MOTOCARRO: {
    classType: 'MOTOCARRO',
    name: 'Motocarro',
    description: 'Vehículo automotor de tres ruedas con chasis y carrocería cerrado o semi-cerrado.',
    requiresRTM: true,
    requiresSOAT: true,
    requiresHelmet: false,
    requiresReflectiveVest: false,
    minTireTreadDepthMm: 1.6
  },
  CUATRIMOTO: {
    classType: 'CUATRIMOTO',
    name: 'Cuatrimoto',
    description: 'Vehículo automotor de cuatro ruedas con manubrio tipo moto para circular en terrenos no pavimentados.',
    requiresRTM: false,
    requiresSOAT: true,
    requiresHelmet: true,
    requiresReflectiveVest: true,
    minTireTreadDepthMm: 1.6
  },
  REMOLQUE: {
    classType: 'REMOLQUE',
    name: 'Remolque',
    description: 'Vehículo no motorizado halado por una unidad tractora.',
    requiresRTM: true,
    requiresSOAT: false,
    requiresHelmet: false,
    requiresReflectiveVest: false,
    minTireTreadDepthMm: 2.0
  },
  SEMIRREMOLQUE: {
    classType: 'SEMIRREMOLQUE',
    name: 'Semirremolque',
    description: 'Vehículo sin motor acoplado a un tractocamión sobre el cual descansa parte de su peso.',
    requiresRTM: true,
    requiresSOAT: false,
    requiresHelmet: false,
    requiresReflectiveVest: false,
    minTireTreadDepthMm: 2.0
  },
  BICICLETA: {
    classType: 'BICICLETA',
    name: 'Bicicleta',
    description: 'Vehículo no automotor propulsado por la fuerza muscular del usuario mediante pedales.',
    requiresRTM: false,
    requiresSOAT: false,
    requiresHelmet: true,
    requiresReflectiveVest: true,
    minTireTreadDepthMm: 0.5
  },
  TRACCION_ANIMAL: {
    classType: 'TRACCION_ANIMAL',
    name: 'Vehículo de Tracción Animal',
    description: 'Vehículo no motorizado halado por animales de tiro o tiro pesado.',
    requiresRTM: false,
    requiresSOAT: false,
    requiresHelmet: false,
    requiresReflectiveVest: false,
    minTireTreadDepthMm: 0
  },
  MAQUINARIA: {
    classType: 'MAQUINARIA',
    name: 'Maquinaria Agrícola o Industrial',
    description: 'Vehículo automotor autopropulsado destinado a faenas agrícolas o de construcción.',
    requiresRTM: false,
    requiresSOAT: true,
    requiresHelmet: false,
    requiresReflectiveVest: false,
    minTireTreadDepthMm: 2.0
  },
  TRANSPORTE_ESCOLAR: {
    classType: 'TRANSPORTE_ESCOLAR',
    name: 'Vehículo de Transporte Escolar',
    description: 'Vehículo especial habilitado para la movilización exclusiva de estudiantes con distintivos y permisos.',
    requiresRTM: true,
    requiresSOAT: true,
    requiresHelmet: false,
    requiresReflectiveVest: false,
    minTireTreadDepthMm: 2.0
  },
  TODOS: {
    classType: 'TODOS',
    name: 'Cualquier Clase',
    description: 'Aplica a cualquier clase de vehículo en general.',
    requiresRTM: false,
    requiresSOAT: false,
    requiresHelmet: false,
    requiresReflectiveVest: false,
    minTireTreadDepthMm: 1.0
  }
};
