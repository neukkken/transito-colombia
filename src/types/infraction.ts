export type InfractionCategory =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J';

export type ActorType =
  | 'CONDUCTOR'
  | 'PROPIETARIO'
  | 'PEATON'
  | 'PASAJERO'
  | 'EMPRESA'
  | 'CENTRO_ENSENANZA'
  | 'PARQUEADERO'
  | 'ORGANISMO_TRANSITO';

export type VehicleClass =
  | 'AUTOMOVIL'
  | 'CAMIONETA'
  | 'CAMPERO'
  | 'MICROBUS'
  | 'BUS'
  | 'BUSETA'
  | 'CAMION'
  | 'TRACTOCAMION'
  | 'VOLQUETA'
  | 'MOTOCICLETA'
  | 'MOTOTRICICLO'
  | 'MOTOCARRO'
  | 'CUATRIMOTO'
  | 'REMOLQUE'
  | 'SEMIRREMOLQUE'
  | 'BICICLETA'
  | 'TRACCION_ANIMAL'
  | 'MAQUINARIA'
  | 'TRANSPORTE_ESCOLAR'
  | 'TODOS';

export type ImmobilizationType =
  | 'NONE'
  | 'IMMEDIATE'
  | 'PREVENTATIVE_60_MIN'
  | 'CONDITIONAL'
  | 'ABSENCE_OF_DRIVER'
  | 'MOTORCYCLES_ONLY';

export type SmldvType =
  | 'EXACT'
  | 'VARIABLE'
  | 'NONE'
  | 'PEDAGOGICAL'
  | 'MONTHLY_SALARY';

export interface TrafficInfraction {
  /** Código normalizado (ej. "C02", "D04", "A01") */
  code: string;
  /** Código oficial original (ej. "C.02") */
  rawCode: string;
  /** Categoría de la infracción según Ley 769 / Res. 3027 de 2010 */
  category: InfractionCategory;
  /** Fundamento legal de la infracción */
  legalBasis: string;
  /** Descripción legal completa oficial */
  description: string;
  /** Descripción corta resumida para interfaces y apps móviles */
  shortDescription: string;
  /** Sanción base en Salarios Mínimos Diarios Legales Vigentes (SMLDV) */
  smldv: number;
  /** Tipo de tasación de la multa */
  smldvType: SmldvType;
  /** Equivalencia base en UVT para referencia legal */
  uvtDefault: number;
  /** Indica si la conducta da lugar a la inmovilización del vehículo */
  immobilization: boolean;
  /** Tipo o modalidad de inmovilización */
  immobilizationType: ImmobilizationType;
  /** Detalle o condición de la inmovilización */
  immobilizationDetails?: string;
  /** Indica si conlleva la suspensión o cancelación de la licencia de conducción */
  licenseSuspension: boolean;
  /** Detalles de la suspensión de licencia si aplica */
  licenseSuspensionDetails?: string;
  /** Actores de la vía a los que aplica la infracción */
  appliesTo: ActorType[];
  /** Clases de vehículos a los que aplica */
  vehicleTypes: VehicleClass[];
  /** Indica si esta infracción es apta para detección electrónica (Fotomulta / SAST) */
  isPhotomultasEligible: boolean;
  /** Indica si la infracción exige o se subsana asistiendo a curso vial */
  requiresCourse: boolean;
  /** Indica si permite acceder al descuento por curso pedagógico (50% / 25%) */
  courseDiscountAllowed: boolean;
  /** Palabras clave y etiquetas para búsqueda difusa */
  tags: string[];
}
