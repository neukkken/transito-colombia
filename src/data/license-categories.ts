import { LicenseCategory } from '../types/driver.js';
import { ServiceType, VehicleClass } from '../types/index.js';

export interface LicenseCategoryDefinition {
  category: LicenseCategory;
  serviceType: ServiceType;
  minimumAgeYears: number;
  description: string;
  authorizedVehicleClasses: VehicleClass[];
  hierarchySubsumes: LicenseCategory[];
  validityRules: {
    under60YearsInterval: number; // in years
    sixtyTo79YearsInterval?: number; // in years
    over60YearsInterval?: number; // in years
    over80YearsInterval?: number; // in years
  };
}

export const LICENSE_CATEGORIES: Readonly<Record<LicenseCategory, LicenseCategoryDefinition>> = {
  A1: {
    category: 'A1',
    serviceType: 'PARTICULAR',
    minimumAgeYears: 16,
    description: 'Motocicletas de conducción particular con cilindraje hasta 125 c.c.',
    authorizedVehicleClasses: ['MOTOCICLETA'],
    hierarchySubsumes: ['A1'],
    validityRules: {
      under60YearsInterval: 10,
      sixtyTo79YearsInterval: 5,
      over80YearsInterval: 1
    }
  },
  A2: {
    category: 'A2',
    serviceType: 'PARTICULAR',
    minimumAgeYears: 16,
    description: 'Motocicletas, motociclos y mototriciclos de servicio particular con cilindraje mayor a 125 c.c.',
    authorizedVehicleClasses: ['MOTOCICLETA', 'MOTOTRICICLO'],
    hierarchySubsumes: ['A2', 'A1'],
    validityRules: {
      under60YearsInterval: 10,
      sixtyTo79YearsInterval: 5,
      over80YearsInterval: 1
    }
  },
  B1: {
    category: 'B1',
    serviceType: 'PARTICULAR',
    minimumAgeYears: 16,
    description: 'Automóviles, motocarros, cuatrimotos, camperos, camionetas y microbuses de servicio particular.',
    authorizedVehicleClasses: [
      'AUTOMOVIL',
      'CAMIONETA',
      'CAMPERO',
      'MICROBUS',
      'MOTOCARRO',
      'CUATRIMOTO'
    ],
    hierarchySubsumes: ['B1'],
    validityRules: {
      under60YearsInterval: 10,
      sixtyTo79YearsInterval: 5,
      over80YearsInterval: 1
    }
  },
  B2: {
    category: 'B2',
    serviceType: 'PARTICULAR',
    minimumAgeYears: 18,
    description: 'Camiones rígidos, busetas y buses de servicio particular.',
    authorizedVehicleClasses: [
      'AUTOMOVIL',
      'CAMIONETA',
      'CAMPERO',
      'MICROBUS',
      'MOTOCARRO',
      'CUATRIMOTO',
      'CAMION',
      'BUS',
      'BUSETA',
      'VOLQUETA'
    ],
    hierarchySubsumes: ['B2', 'B1'],
    validityRules: {
      under60YearsInterval: 10,
      sixtyTo79YearsInterval: 5,
      over80YearsInterval: 1
    }
  },
  B3: {
    category: 'B3',
    serviceType: 'PARTICULAR',
    minimumAgeYears: 18,
    description: 'Vehículos articulados o tractocamiones de servicio particular.',
    authorizedVehicleClasses: [
      'AUTOMOVIL',
      'CAMIONETA',
      'CAMPERO',
      'MICROBUS',
      'MOTOCARRO',
      'CUATRIMOTO',
      'CAMION',
      'BUS',
      'BUSETA',
      'VOLQUETA',
      'TRACTOCAMION',
      'REMOLQUE',
      'SEMIRREMOLQUE'
    ],
    hierarchySubsumes: ['B3', 'B2', 'B1'],
    validityRules: {
      under60YearsInterval: 10,
      sixtyTo79YearsInterval: 5,
      over80YearsInterval: 1
    }
  },
  C1: {
    category: 'C1',
    serviceType: 'PUBLICO',
    minimumAgeYears: 18,
    description: 'Automóviles, camperos, camionetas y microbuses de servicio público (taxis, especial, etc.).',
    authorizedVehicleClasses: [
      'AUTOMOVIL',
      'CAMIONETA',
      'CAMPERO',
      'MICROBUS',
      'MOTOCARRO',
      'CUATRIMOTO'
    ],
    hierarchySubsumes: ['C1', 'B1'],
    validityRules: {
      under60YearsInterval: 3,
      over60YearsInterval: 1
    }
  },
  C2: {
    category: 'C2',
    serviceType: 'PUBLICO',
    minimumAgeYears: 18,
    description: 'Camiones rígidos, busetas y buses de servicio público.',
    authorizedVehicleClasses: [
      'AUTOMOVIL',
      'CAMIONETA',
      'CAMPERO',
      'MICROBUS',
      'MOTOCARRO',
      'CUATRIMOTO',
      'CAMION',
      'BUS',
      'BUSETA',
      'VOLQUETA'
    ],
    hierarchySubsumes: ['C2', 'C1', 'B2', 'B1'],
    validityRules: {
      under60YearsInterval: 3,
      over60YearsInterval: 1
    }
  },
  C3: {
    category: 'C3',
    serviceType: 'PUBLICO',
    minimumAgeYears: 19,
    description: 'Vehículos articulados de servicio público (tractocamiones de carga pesada).',
    authorizedVehicleClasses: [
      'AUTOMOVIL',
      'CAMIONETA',
      'CAMPERO',
      'MICROBUS',
      'MOTOCARRO',
      'CUATRIMOTO',
      'CAMION',
      'BUS',
      'BUSETA',
      'VOLQUETA',
      'TRACTOCAMION',
      'REMOLQUE',
      'SEMIRREMOLQUE'
    ],
    hierarchySubsumes: ['C3', 'C2', 'C1', 'B3', 'B2', 'B1'],
    validityRules: {
      under60YearsInterval: 3,
      over60YearsInterval: 1
    }
  }
};
