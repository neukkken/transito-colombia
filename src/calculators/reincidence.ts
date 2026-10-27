export interface HistoricalInfraction {
  code: string;
  date: string | Date; // ISO string or Date
  comparendoNumber?: string;
}

export interface ReincidenceCheckResult {
  hasReincidence: boolean;
  infractionsInWindowCount: number;
  suspensionMonths: number;
  requiresLicenseSuspension: boolean;
  applicableLawArticle: string;
  violationsInWindow: HistoricalInfraction[];
  explanation: string;
}

function parseTime(input: string | Date): number {
  return typeof input === 'string' ? new Date(input).getTime() : input.getTime();
}

/**
 * Evalúa la reincidencia contravencional según el Artículo 124 de la Ley 769 de 2002:
 * Cometer más de una infracción de tránsito en un periodo de seis (6) meses
 * acarrea la suspensión obligatoria de la licencia de conducción por seis (6) meses.
 * En caso de una subsiguiente reincidencia, la suspensión se duplicará a doce (12) meses.
 */
export function checkReincidence(
  history: HistoricalInfraction[],
  newInfractionDate: string | Date = new Date(),
  priorSuspensionsCount: number = 0
): ReincidenceCheckResult {
  const newTime = parseTime(newInfractionDate);
  // Ventana de 6 meses (aproximadamente 183 días)
  const sixMonthsMs = 183 * 24 * 60 * 60 * 1000;
  const windowStartTime = newTime - sixMonthsMs;

  // Filtrar infracciones ocurridas dentro de la ventana de 6 meses previa
  const inWindow = history.filter((item) => {
    const itemTime = parseTime(item.date);
    return itemTime >= windowStartTime && itemTime <= newTime;
  });

  const infractionsInWindowCount = inWindow.length + 1; // Sumando la nueva infracción

  if (infractionsInWindowCount >= 2) {
    // Hay reincidencia
    const isSubsequent = priorSuspensionsCount > 0;
    const suspensionMonths = isSubsequent ? 12 : 6;

    const explanation = isSubsequent
      ? `Reincidencia subsiguiente detectada (más de 1 infracción en 6 meses con antecedentes de suspensión previa). Aplica suspensión duplicada de la licencia de conducción por ${suspensionMonths} meses.`
      : `Reincidencia detectada: El conductor ha cometido ${infractionsInWindowCount} infracciones en un lapso menor a seis (6) meses. Conforme al Art. 124 Ley 769, procede la suspensión de la licencia por ${suspensionMonths} meses.`;

    return {
      hasReincidence: true,
      infractionsInWindowCount,
      suspensionMonths,
      requiresLicenseSuspension: true,
      applicableLawArticle:
        'Ley 769 de 2002 Artículo 124: Reincidencia. En caso de cometer más de una infracción en un periodo de seis meses se suspenderá la licencia por 6 meses; ante nueva reincidencia se doblará la sanción.',
      violationsInWindow: inWindow,
      explanation
    };
  }

  return {
    hasReincidence: false,
    infractionsInWindowCount: 1,
    suspensionMonths: 0,
    requiresLicenseSuspension: false,
    applicableLawArticle: 'Ley 769 de 2002 Artículo 124',
    violationsInWindow: [],
    explanation: 'No se detecta reincidencia dentro del periodo de seis (6) meses.'
  };
}
