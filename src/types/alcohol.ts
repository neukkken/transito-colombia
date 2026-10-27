export type AlcoholGrade =
  | 'CERO'
  | 'UNO'
  | 'DOS'
  | 'TRES'
  | 'NEGATIVA';

export type AlcoholReincidence =
  | 'PRIMERA_VEZ'
  | 'SEGUNDA_VEZ'
  | 'TERCERA_VEZ_O_MAS';

export type LicenseAction = 'SUSPENSION' | 'CANCELACION';

export interface AlcoholSanction {
  /** Grado de alcoholemia detectado o negativa a la prueba */
  grade: AlcoholGrade;
  /** Rango en mg de etanol por cada 100 ml de sangre total */
  bloodAlcoholRange: string;
  /** Nivel de reincidencia */
  reincidence: AlcoholReincidence;
  /** Multa en Salarios Mínimos Diarios Legales Vigentes (SMLDV) */
  smldv: number;
  /** Acción sobre la licencia de conducción */
  licenseAction: LicenseAction;
  /** Años de suspensión (0 si es cancelación definitiva) */
  licenseSuspensionYears: number;
  /** Días hábiles de inmovilización en patios oficiales */
  immobilizationDays: number;
  /** Horas de trabajo comunitario / acciones comunitarias */
  communityServiceHours: number;
  /** Curso obligatorio de prevención y reeducación sobre alcohol y drogas */
  mandatoryPedagogicalCourse: boolean;
  /** Fundamento legal específico */
  legalArticle: string;
}
