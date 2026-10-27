import { YearlyTariffConfig } from '../types/calculation.js';

export const HISTORICAL_TARIFFS: Readonly<Record<number, YearlyTariffConfig>> = {
  2020: {
    year: 2020,
    smmlv: 877803,
    smldv: Math.round(877803 / 30),
    uvt: 35607,
    monthlyUsuryInterestRate: 2.2
  },
  2021: {
    year: 2021,
    smmlv: 908526,
    smldv: Math.round(908526 / 30),
    uvt: 36308,
    monthlyUsuryInterestRate: 2.1
  },
  2022: {
    year: 2022,
    smmlv: 1000000,
    smldv: Math.round(1000000 / 30),
    uvt: 38004,
    monthlyUsuryInterestRate: 2.5
  },
  2023: {
    year: 2023,
    smmlv: 1160000,
    smldv: Math.round(1160000 / 30),
    uvt: 42412,
    uvb: 9530,
    monthlyUsuryInterestRate: 3.1
  },
  2024: {
    year: 2024,
    smmlv: 1300000,
    smldv: Math.round(1300000 / 30), // 43333 COP
    uvt: 47065,
    uvb: 10951,
    monthlyUsuryInterestRate: 2.8
  },
  2025: {
    year: 2025,
    smmlv: 1423500,
    smldv: Math.round(1423500 / 30), // 47450 COP
    uvt: 49799,
    uvb: 11550,
    monthlyUsuryInterestRate: 2.6
  },
  2026: {
    year: 2026,
    smmlv: 1750905, // Fijado mediante Decreto 159 de 2026 ($1.750.905 COP)
    smldv: Math.round(1750905 / 30), // 58364 COP ($58.363,50 COP)
    uvt: 52800,
    uvb: 12200,
    monthlyUsuryInterestRate: 2.5
  }
};

export const CURRENT_DEFAULT_YEAR = 2026;
