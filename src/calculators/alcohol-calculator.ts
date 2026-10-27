import { ALCOHOL_SANCTIONS_MATRIX } from '../data/alcohol-matrix.js';
import { AlcoholGrade, AlcoholReincidence, AlcoholSanction } from '../types/alcohol.js';
import { CURRENT_DEFAULT_YEAR, HISTORICAL_TARIFFS } from '../data/tariffs-history.js';

export interface AlcoholEvaluationResult {
  isSanctionable: boolean;
  grade: AlcoholGrade | 'NEGATIVO_SIN_SANCION';
  mgPer100ml?: number;
  reincidence: AlcoholReincidence;
  sanction?: AlcoholSanction;
  fineAmountCop: number;
  year: number;
  summary: string;
}

/**
 * Determina el grado de alcoholemia en Colombia a partir de los miligramos de etanol
 * por cada 100 mililitros de sangre (o alcohosensor) según la Ley 1696 de 2013.
 */
export function determineAlcoholGrade(
  mgPer100ml: number,
  isRefusal: boolean = false
): AlcoholGrade | 'NEGATIVO_SIN_SANCION' {
  if (isRefusal) return 'NEGATIVA';
  if (mgPer100ml < 20) return 'NEGATIVO_SIN_SANCION';
  if (mgPer100ml <= 39) return 'CERO';
  if (mgPer100ml <= 99) return 'UNO';
  if (mgPer100ml <= 149) return 'DOS';
  return 'TRES';
}

/**
 * Evalúa y calcula la sanción integral por conducción bajo el influjo del alcohol o drogas
 * conforme a la Ley 1696 de 2013 que modificó el Artículo 152 del Código Nacional de Tránsito.
 */
export function evaluateAlcoholSanction(options: {
  mgPer100ml?: number;
  isRefusal?: boolean;
  reincidenceCount?: number; // 0 = 1a vez, 1 = 2a vez, >= 2 = 3a vez o más
  year?: number;
}): AlcoholEvaluationResult {
  const year = options.year || CURRENT_DEFAULT_YEAR;
  const tariff = HISTORICAL_TARIFFS[year] || HISTORICAL_TARIFFS[CURRENT_DEFAULT_YEAR];

  const grade = determineAlcoholGrade(options.mgPer100ml || 0, !!options.isRefusal);

  if (grade === 'NEGATIVO_SIN_SANCION') {
    return {
      isSanctionable: false,
      grade: 'NEGATIVO_SIN_SANCION',
      mgPer100ml: options.mgPer100ml,
      reincidence: 'PRIMERA_VEZ',
      fineAmountCop: 0,
      year,
      summary:
        'Prueba de alcoholemia negativa (inferior a 20 mg etanol/100 ml de sangre). No genera sanción contravencional ni inmovilización.'
    };
  }

  // Resolver reincidencia
  const count = options.reincidenceCount || 0;
  let reincidence: AlcoholReincidence = 'PRIMERA_VEZ';
  if (count === 1) reincidence = 'SEGUNDA_VEZ';
  else if (count >= 2) reincidence = 'TERCERA_VEZ_O_MAS';

  // Buscar en la matriz de Ley 1696
  const sanction = ALCOHOL_SANCTIONS_MATRIX.find(
    (s) => s.grade === grade && s.reincidence === reincidence
  );

  if (!sanction) {
    throw new Error(
      `No se encontró sanción para el grado ${grade} y nivel de reincidencia ${reincidence}.`
    );
  }

  const rawCop = sanction.smldv * tariff.smldv;
  const fineAmountCop = Math.round(rawCop / 100) * 100;

  const licenseText =
    sanction.licenseAction === 'CANCELACION'
      ? 'CANCELACIÓN DEFINITIVA de la licencia de conducción'
      : `SUSPENSIÓN de la licencia por ${sanction.licenseSuspensionYears} año(s)`;

  const summary = `Sanción por Alcoholemia Grado ${grade} (${reincidence}): Multa de ${sanction.smldv} SMLDV ($${fineAmountCop.toLocaleString('es-CO')} COP), ${licenseText}, ${sanction.immobilizationDays} días hábiles de inmovilización en patios y ${sanction.communityServiceHours} horas de acciones comunitarias.`;

  return {
    isSanctionable: true,
    grade,
    mgPer100ml: options.mgPer100ml,
    reincidence,
    sanction,
    fineAmountCop,
    year,
    summary
  };
}
