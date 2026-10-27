import { AlcoholSanction } from '../types/alcohol.js';

export const ALCOHOL_SANCTIONS_MATRIX: readonly AlcoholSanction[] = [
  // Grado 0: 20 - 39 mg etanol / 100 ml de sangre
  {
    grade: 'CERO',
    bloodAlcoholRange: '20 a 39 mg etanol / 100 ml de sangre',
    reincidence: 'PRIMERA_VEZ',
    smldv: 90,
    licenseAction: 'SUSPENSION',
    licenseSuspensionYears: 1,
    immobilizationDays: 1,
    communityServiceHours: 20,
    mandatoryPedagogicalCourse: true,
    legalArticle: 'Ley 1696 de 2013 Art. 5 (numeral 1.1)'
  },
  {
    grade: 'CERO',
    bloodAlcoholRange: '20 a 39 mg etanol / 100 ml de sangre',
    reincidence: 'SEGUNDA_VEZ',
    smldv: 135,
    licenseAction: 'SUSPENSION',
    licenseSuspensionYears: 1,
    immobilizationDays: 1,
    communityServiceHours: 20,
    mandatoryPedagogicalCourse: true,
    legalArticle: 'Ley 1696 de 2013 Art. 5 (numeral 1.2)'
  },
  {
    grade: 'CERO',
    bloodAlcoholRange: '20 a 39 mg etanol / 100 ml de sangre',
    reincidence: 'TERCERA_VEZ_O_MAS',
    smldv: 180,
    licenseAction: 'SUSPENSION',
    licenseSuspensionYears: 3,
    immobilizationDays: 3,
    communityServiceHours: 30,
    mandatoryPedagogicalCourse: true,
    legalArticle: 'Ley 1696 de 2013 Art. 5 (numeral 1.3)'
  },

  // Grado 1: 40 - 99 mg etanol / 100 ml de sangre
  {
    grade: 'UNO',
    bloodAlcoholRange: '40 a 99 mg etanol / 100 ml de sangre',
    reincidence: 'PRIMERA_VEZ',
    smldv: 180,
    licenseAction: 'SUSPENSION',
    licenseSuspensionYears: 3,
    immobilizationDays: 3,
    communityServiceHours: 30,
    mandatoryPedagogicalCourse: true,
    legalArticle: 'Ley 1696 de 2013 Art. 5 (numeral 2.1)'
  },
  {
    grade: 'UNO',
    bloodAlcoholRange: '40 a 99 mg etanol / 100 ml de sangre',
    reincidence: 'SEGUNDA_VEZ',
    smldv: 270,
    licenseAction: 'SUSPENSION',
    licenseSuspensionYears: 6,
    immobilizationDays: 5,
    communityServiceHours: 50,
    mandatoryPedagogicalCourse: true,
    legalArticle: 'Ley 1696 de 2013 Art. 5 (numeral 2.2)'
  },
  {
    grade: 'UNO',
    bloodAlcoholRange: '40 a 99 mg etanol / 100 ml de sangre',
    reincidence: 'TERCERA_VEZ_O_MAS',
    smldv: 360,
    licenseAction: 'CANCELACION',
    licenseSuspensionYears: 0,
    immobilizationDays: 10,
    communityServiceHours: 60,
    mandatoryPedagogicalCourse: true,
    legalArticle: 'Ley 1696 de 2013 Art. 5 (numeral 2.3)'
  },

  // Grado 2: 100 - 149 mg etanol / 100 ml de sangre
  {
    grade: 'DOS',
    bloodAlcoholRange: '100 a 149 mg etanol / 100 ml de sangre',
    reincidence: 'PRIMERA_VEZ',
    smldv: 360,
    licenseAction: 'SUSPENSION',
    licenseSuspensionYears: 5,
    immobilizationDays: 6,
    communityServiceHours: 40,
    mandatoryPedagogicalCourse: true,
    legalArticle: 'Ley 1696 de 2013 Art. 5 (numeral 3.1)'
  },
  {
    grade: 'DOS',
    bloodAlcoholRange: '100 a 149 mg etanol / 100 ml de sangre',
    reincidence: 'SEGUNDA_VEZ',
    smldv: 540,
    licenseAction: 'SUSPENSION',
    licenseSuspensionYears: 10,
    immobilizationDays: 10,
    communityServiceHours: 60,
    mandatoryPedagogicalCourse: true,
    legalArticle: 'Ley 1696 de 2013 Art. 5 (numeral 3.2)'
  },
  {
    grade: 'DOS',
    bloodAlcoholRange: '100 a 149 mg etanol / 100 ml de sangre',
    reincidence: 'TERCERA_VEZ_O_MAS',
    smldv: 720,
    licenseAction: 'CANCELACION',
    licenseSuspensionYears: 0,
    immobilizationDays: 20,
    communityServiceHours: 80,
    mandatoryPedagogicalCourse: true,
    legalArticle: 'Ley 1696 de 2013 Art. 5 (numeral 3.3)'
  },

  // Grado 3: 150 mg o más de etanol / 100 ml de sangre
  {
    grade: 'TRES',
    bloodAlcoholRange: '150 mg o más de etanol / 100 ml de sangre',
    reincidence: 'PRIMERA_VEZ',
    smldv: 720,
    licenseAction: 'SUSPENSION',
    licenseSuspensionYears: 10,
    immobilizationDays: 10,
    communityServiceHours: 50,
    mandatoryPedagogicalCourse: true,
    legalArticle: 'Ley 1696 de 2013 Art. 5 (numeral 4.1)'
  },
  {
    grade: 'TRES',
    bloodAlcoholRange: '150 mg o más de etanol / 100 ml de sangre',
    reincidence: 'SEGUNDA_VEZ',
    smldv: 1080,
    licenseAction: 'CANCELACION',
    licenseSuspensionYears: 0,
    immobilizationDays: 20,
    communityServiceHours: 80,
    mandatoryPedagogicalCourse: true,
    legalArticle: 'Ley 1696 de 2013 Art. 5 (numeral 4.2)'
  },
  {
    grade: 'TRES',
    bloodAlcoholRange: '150 mg o más de etanol / 100 ml de sangre',
    reincidence: 'TERCERA_VEZ_O_MAS',
    smldv: 1440,
    licenseAction: 'CANCELACION',
    licenseSuspensionYears: 0,
    immobilizationDays: 20,
    communityServiceHours: 90,
    mandatoryPedagogicalCourse: true,
    legalArticle: 'Ley 1696 de 2013 Art. 5 (numeral 4.3)'
  },

  // Negativa o Renuencia a la prueba
  {
    grade: 'NEGATIVA',
    bloodAlcoholRange: 'Renuencia o negativa del conductor a la práctica del examen',
    reincidence: 'PRIMERA_VEZ',
    smldv: 1440,
    licenseAction: 'CANCELACION',
    licenseSuspensionYears: 0,
    immobilizationDays: 20,
    communityServiceHours: 50,
    mandatoryPedagogicalCourse: true,
    legalArticle: 'Ley 1696 de 2013 Art. 5 (parágrafo 3)'
  }
];
