import { describe, it, expect } from 'vitest';
import { calculateFine, getTariffForYear } from '../src/index.js';

describe('Calculadora de Multas y Tarifas (fine-calculator)', () => {
  it('debe obtener las tarifas históricas correctas por año', () => {
    const t2024 = getTariffForYear(2024);
    expect(t2024.smmlv).toBe(1300000);
    expect(t2024.smldv).toBe(43333);

    const t2023 = getTariffForYear(2023);
    expect(t2023.smmlv).toBe(1160000);
    expect(t2023.smldv).toBe(38667);

    // Salario Mínimo 2026 según Decreto 159 de 2026 ($1.750.905 COP)
    const t2026 = getTariffForYear(2026);
    expect(t2026.smmlv).toBe(1750905);
    expect(t2026.smldv).toBe(58364);
  });

  it('debe calcular correctamente el valor base para categorías C y D en 2026 con SMMLV $1.750.905', () => {
    // Categoría C (15 SMLDV): 15 * 58364 = 875.460 COP -> redondeado a centenas: 875.500 COP
    const c02_2026 = calculateFine('C02', { year: 2026 });
    expect(c02_2026.smldvCount).toBe(15);
    expect(c02_2026.baseAmountCop).toBe(875500);
    expect(c02_2026.discount50Cop).toBe(437800);
    expect(c02_2026.discount25Cop).toBe(656600);

    // Categoría D (30 SMLDV): 30 * 58364 = 1.750.920 COP -> redondeado a centenas: 1.750.900 COP
    const d02_2026 = calculateFine('D02', { year: 2026 });
    expect(d02_2026.smldvCount).toBe(30);
    expect(d02_2026.baseAmountCop).toBe(1750900);
    expect(d02_2026.discount50Cop).toBe(875500);
    expect(d02_2026.discount25Cop).toBe(1313200);
  });

  it('debe calcular correctamente el valor base para categorías C y D en 2024', () => {
    // Categoría C: 15 SMLDV -> 15 * 43333 = 649.995 aprox 650.000 COP
    const c02 = calculateFine('C02', { year: 2024 });
    expect(c02.smldvCount).toBe(15);
    expect(c02.baseAmountCop).toBe(650000);
    expect(c02.discount50Cop).toBe(325000);
    expect(c02.discount25Cop).toBe(487500);

    // Categoría D: 30 SMLDV -> 30 * 43333 = 1.300.000 COP
    const d02 = calculateFine('D02', { year: 2024 });
    expect(d02.smldvCount).toBe(30);
    expect(d02.baseAmountCop).toBe(1300000);
    expect(d02.discount50Cop).toBe(650000);
    expect(d02.discount25Cop).toBe(975000);
  });

  it('debe aplicar descuento del 50% con curso pedagógico dentro del plazo de 5 días hábiles', () => {
    // Infracción en vía el 1 de octubre de 2024 (martes), pagada el 3 de octubre (jueves)
    const result = calculateFine('C02', {
      year: 2024,
      detectionType: 'AGENTE_EN_VIA',
      notificationDate: '2024-10-01',
      paymentDate: '2024-10-03',
      hasCourseCertificate: true
    });

    expect(result.effectiveDiscount).toBe(50);
    expect(result.totalToPayCop).toBe(325000);
  });

  it('debe aplicar tarifa plena para infracciones pedagógicas', () => {
    const g01 = calculateFine('G01', { year: 2024 });
    expect(g01.smldvCount).toBe(0);
    expect(g01.baseAmountCop).toBe(0);
    expect(g01.totalToPayCop).toBe(0);
  });
});
