import { CURRENT_DEFAULT_YEAR, HISTORICAL_TARIFFS } from '../data/tariffs-history.js';
import { getInfractionOrThrow } from '../validators/code-validator.js';
import { FineCalculationOptions, FineCalculationResult, YearlyTariffConfig } from '../types/calculation.js';
import { calculateLegalDeadlines } from './legal-deadlines.js';

export function getTariffForYear(
  year: number,
  customTariff?: Partial<YearlyTariffConfig>
): YearlyTariffConfig {
  const baseTariff =
    HISTORICAL_TARIFFS[year] ||
    HISTORICAL_TARIFFS[CURRENT_DEFAULT_YEAR] || {
      year,
      smmlv: 1300000,
      smldv: Math.round(1300000 / 30),
      uvt: 47065,
      monthlyUsuryInterestRate: 2.5
    };

  if (!customTariff) return baseTariff;

  return {
    year: customTariff.year ?? baseTariff.year,
    smmlv: customTariff.smmlv ?? baseTariff.smmlv,
    smldv: customTariff.smldv ?? baseTariff.smldv,
    uvt: customTariff.uvt ?? baseTariff.uvt,
    uvb: customTariff.uvb ?? baseTariff.uvb,
    monthlyUsuryInterestRate:
      customTariff.monthlyUsuryInterestRate ?? baseTariff.monthlyUsuryInterestRate
  };
}

/**
 * Calcula con precisión legal el valor de una multa de tránsito en pesos colombianos (COP),
 * aplicando el año de vigencia, salarios mínimos, UVT, descuentos por pronto pago
 * y curso pedagógico (50% o 25%) e intereses moratorios si aplican.
 */
export function calculateFine(
  code: string,
  options: FineCalculationOptions = {}
): FineCalculationResult {
  const infraction = getInfractionOrThrow(code);
  const year = options.year || CURRENT_DEFAULT_YEAR;
  const tariff = getTariffForYear(year, options.customTariff);

  // Infracciones pedagógicas o de amonestación
  if (infraction.category === 'G') {
    return {
      code: infraction.code,
      category: infraction.category,
      year,
      smldvCount: 0,
      baseAmountCop: 0,
      discount50Cop: 0,
      discount25Cop: 0,
      uvtEquivalent: 0,
      interestAmountCop: 0,
      totalToPayCop: 0,
      effectiveDiscount: 0,
      reason: 'Infracción formativa/educativa. No genera sanción pecuniaria en dinero sino asistencia a curso vial.'
    };
  }

  // Base calculation
  const smldvCount = infraction.smldv;
  // Redondeo estándar oficial a múltiplos de 100 pesos según práctica de tránsito en Colombia
  const rawBase = smldvCount * tariff.smldv;
  const baseAmountCop = Math.round(rawBase / 100) * 100;

  const discount50Cop = Math.round((baseAmountCop * 0.5) / 100) * 100;
  const discount25Cop = Math.round((baseAmountCop * 0.75) / 100) * 100;

  let effectiveDiscount: 0 | 25 | 50 = 0;
  let totalToPayCop = baseAmountCop;
  let interestAmountCop = 0;
  let reason = `Tarifa plena aplicable para el año ${year} (${smldvCount} SMLDV).`;

  // Si se proveen fechas de notificación y de pago para evaluar descuentos en tiempo real
  if (options.notificationDate && options.paymentDate) {
    const deadlines = calculateLegalDeadlines({
      infractionDate: options.notificationDate,
      detectionType: options.detectionType || 'AGENTE_EN_VIA',
      notificationDate: options.notificationDate,
      calculationDate: options.paymentDate
    });

    const hasCourse = options.hasCourseCertificate ?? true; // Si asiste al curso en CIA

    if (deadlines.discount50.isCurrentlyValid && hasCourse && infraction.courseDiscountAllowed) {
      effectiveDiscount = 50;
      totalToPayCop = discount50Cop;
      reason = `Descuento del 50% aplicado por pronto pago dentro de los ${deadlines.discount50.maxBusinessDays} días hábiles y realización del curso pedagógico.`;
    } else if (
      deadlines.discount25.isCurrentlyValid &&
      hasCourse &&
      infraction.courseDiscountAllowed
    ) {
      effectiveDiscount = 25;
      totalToPayCop = discount25Cop;
      reason = `Descuento del 25% aplicado por pago entre el día hábil siguiente al límite del 50% y el día ${deadlines.discount25.maxBusinessDays} hábil, con realización del curso.`;
    } else if (deadlines.currentStatus === 'INTERESES_MORA') {
      // Calcular intereses moratorios sobre el valor base
      const daysOverdue = Math.max(
        1,
        Math.floor(
          (new Date(options.paymentDate).getTime() -
            new Date(deadlines.discount25.deadlineDate).getTime()) /
            (1000 * 60 * 60 * 24)
        )
      );
      const monthlyRate = (tariff.monthlyUsuryInterestRate ?? 2.5) / 100;
      const dailyRate = monthlyRate / 30;
      interestAmountCop = Math.round((baseAmountCop * dailyRate * daysOverdue) / 100) * 100;
      totalToPayCop = baseAmountCop + interestAmountCop;
      reason = `Comparendo en mora con ${daysOverdue} días de retraso. Se calculan intereses moratorios a la tasa de usura vigente.`;
    }
  }

  const uvtEquivalent = Number((baseAmountCop / tariff.uvt).toFixed(2));

  return {
    code: infraction.code,
    category: infraction.category,
    year,
    smldvCount,
    baseAmountCop,
    discount50Cop,
    discount25Cop,
    uvtEquivalent,
    interestAmountCop,
    totalToPayCop,
    effectiveDiscount,
    reason
  };
}
