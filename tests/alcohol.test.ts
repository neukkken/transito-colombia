import { describe, it, expect } from 'vitest';
import {
  ALCOHOL_SANCTIONS_MATRIX,
  determineAlcoholGrade,
  evaluateAlcoholSanction
} from '../src/index.js';

describe('Matriz de Alcoholemia (Ley 1696 de 2013)', () => {
  it('debe contener las 13 combinaciones normativas oficiales', () => {
    // Grado 0 (3) + Grado 1 (3) + Grado 2 (3) + Grado 3 (3) + Negativa (1) = 13
    expect(ALCOHOL_SANCTIONS_MATRIX.length).toBe(13);
  });

  it('debe determinar correctamente los grados según concentración en sangre', () => {
    expect(determineAlcoholGrade(15)).toBe('NEGATIVO_SIN_SANCION');
    expect(determineAlcoholGrade(20)).toBe('CERO');
    expect(determineAlcoholGrade(39)).toBe('CERO');
    expect(determineAlcoholGrade(40)).toBe('UNO');
    expect(determineAlcoholGrade(99)).toBe('UNO');
    expect(determineAlcoholGrade(100)).toBe('DOS');
    expect(determineAlcoholGrade(149)).toBe('DOS');
    expect(determineAlcoholGrade(150)).toBe('TRES');
    expect(determineAlcoholGrade(250)).toBe('TRES');
    expect(determineAlcoholGrade(0, true)).toBe('NEGATIVA');
  });

  it('debe calcular las sanciones para Grado 0', () => {
    // 1a vez
    const g0_1 = evaluateAlcoholSanction({ mgPer100ml: 25, reincidenceCount: 0, year: 2024 });
    expect(g0_1.isSanctionable).toBe(true);
    expect(g0_1.grade).toBe('CERO');
    expect(g0_1.sanction?.smldv).toBe(90);
    expect(g0_1.sanction?.licenseSuspensionYears).toBe(1);
    expect(g0_1.sanction?.immobilizationDays).toBe(1);
    expect(g0_1.sanction?.communityServiceHours).toBe(20);

    // 2a vez
    const g0_2 = evaluateAlcoholSanction({ mgPer100ml: 25, reincidenceCount: 1, year: 2024 });
    expect(g0_2.sanction?.smldv).toBe(135);

    // 3a vez
    const g0_3 = evaluateAlcoholSanction({ mgPer100ml: 25, reincidenceCount: 2, year: 2024 });
    expect(g0_3.sanction?.smldv).toBe(180);
    expect(g0_3.sanction?.licenseSuspensionYears).toBe(3);
  });

  it('debe sancionar con cancelación de licencia en casos de reincidencia grave y negativa', () => {
    // Grado 1 - 3a vez -> Cancelación
    const g1_3 = evaluateAlcoholSanction({ mgPer100ml: 60, reincidenceCount: 2, year: 2024 });
    expect(g1_3.sanction?.licenseAction).toBe('CANCELACION');
    expect(g1_3.sanction?.smldv).toBe(360);

    // Grado 3 - 3a vez -> 1440 SMLDV y Cancelación
    const g3_3 = evaluateAlcoholSanction({ mgPer100ml: 160, reincidenceCount: 2, year: 2024 });
    expect(g3_3.sanction?.smldv).toBe(1440);
    expect(g3_3.sanction?.licenseAction).toBe('CANCELACION');
    expect(g3_3.sanction?.communityServiceHours).toBe(90);

    // Negativa / Renuencia a la prueba -> 1440 SMLDV y Cancelación inmediata
    const refusal = evaluateAlcoholSanction({ isRefusal: true, year: 2024 });
    expect(refusal.grade).toBe('NEGATIVA');
    expect(refusal.sanction?.smldv).toBe(1440);
    expect(refusal.sanction?.licenseAction).toBe('CANCELACION');
    expect(refusal.sanction?.immobilizationDays).toBe(20);
  });
});
