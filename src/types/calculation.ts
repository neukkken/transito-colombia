export interface YearlyTariffConfig {
  year: number;
  smmlv: number;
  smldv: number;
  uvt: number;
  uvb?: number;
  monthlyUsuryInterestRate?: number;
}

export interface FineCalculationOptions {
  year?: number;
  customTariff?: Partial<YearlyTariffConfig>;
  detectionType?: 'AGENTE_EN_VIA' | 'FOTODETECCION';
  notificationDate?: string | Date;
  paymentDate?: string | Date;
  hasCourseCertificate?: boolean;
}

export interface FineCalculationResult {
  code: string;
  category: string;
  year: number;
  smldvCount: number;
  baseAmountCop: number;
  discount50Cop: number;
  discount25Cop: number;
  uvtEquivalent: number;
  interestAmountCop: number;
  totalToPayCop: number;
  effectiveDiscount: 0 | 25 | 50;
  reason: string;
}
