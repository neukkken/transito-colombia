import { describe, it, expect } from 'vitest';
import {
  INFRACTIONS_CATALOG,
  INFRACTIONS_BY_CODE,
  getInfraction,
  getInfractionOrThrow,
  isValidInfractionCode,
  normalizeInfractionCode
} from '../src/index.js';

describe('Catálogo Oficial de Infracciones de Tránsito', () => {
  it('debe contener exactamente 131 infracciones oficiales codificadas', () => {
    expect(INFRACTIONS_CATALOG.length).toBe(131);
    expect(Object.keys(INFRACTIONS_BY_CODE).length).toBe(131);
  });

  it('debe contener la cantidad exacta por cada grupo normativo (A-J)', () => {
    const counts: Record<string, number> = {};
    for (const inf of INFRACTIONS_CATALOG) {
      counts[inf.category] = (counts[inf.category] || 0) + 1;
    }

    expect(counts['A']).toBe(12); // Vehículos no automotores (4 SMLDV)
    expect(counts['B']).toBe(23); // Automotores leves (8 SMLDV)
    expect(counts['C']).toBe(40); // Automotores medias (15 SMLDV)
    expect(counts['D']).toBe(17); // Automotores graves (30 SMLDV)
    expect(counts['E']).toBe(4);  // Muy graves (45 SMLDV)
    expect(counts['F']).toBe(12); // Peatones (1 SMLDV)
    expect(counts['G']).toBe(2);  // Pedagógicas
    expect(counts['H']).toBe(13); // Amonestación
    expect(counts['I']).toBe(2);  // Especiales
    expect(counts['J']).toBe(6);  // Administrativas y patios
  });

  it('debe normalizar correctamente códigos con diferentes formatos', () => {
    expect(normalizeInfractionCode('c-02')).toBe('C02');
    expect(normalizeInfractionCode('C.2')).toBe('C02');
    expect(normalizeInfractionCode('c 2')).toBe('C02');
    expect(normalizeInfractionCode('c02')).toBe('C02');
    expect(normalizeInfractionCode('d-04')).toBe('D04');
    expect(normalizeInfractionCode('a1')).toBe('A01');
    expect(normalizeInfractionCode('j-6')).toBe('J06');
  });

  it('debe validar existencia de códigos con isValidInfractionCode', () => {
    expect(isValidInfractionCode('C02')).toBe(true);
    expect(isValidInfractionCode('c-02')).toBe(true);
    expect(isValidInfractionCode('D04')).toBe(true);
    expect(isValidInfractionCode('Z99')).toBe(false);
    expect(isValidInfractionCode('')).toBe(false);
  });

  it('debe recuperar infracciones con getInfraction y getInfractionOrThrow', () => {
    const c02 = getInfractionOrThrow('c-02');
    expect(c02.code).toBe('C02');
    expect(c02.category).toBe('C');
    expect(c02.smldv).toBe(15);
    expect(c02.immobilization).toBe(true);
    expect(c02.isPhotomultasEligible).toBe(true);

    const nonExistent = getInfraction('Z99');
    expect(nonExistent).toBeNull();

    expect(() => getInfractionOrThrow('Z99')).toThrowError(/inválido/i);
  });

  it('debe incluir infracciones emblemáticas con sus propiedades clave', () => {
    // C14 Pico y placa
    const c14 = getInfractionOrThrow('C14');
    expect(c14.smldv).toBe(15);
    expect(c14.isPhotomultasEligible).toBe(true);
    expect(c14.immobilization).toBe(true);

    // C29 Exceso de velocidad
    const c29 = getInfractionOrThrow('C29');
    expect(c29.smldv).toBe(15);
    expect(c29.isPhotomultasEligible).toBe(true);

    // C35 Tecnomecánica
    const c35 = getInfractionOrThrow('C35');
    expect(c35.smldv).toBe(15);
    expect(c35.immobilization).toBe(true);
    expect(c35.isPhotomultasEligible).toBe(true);

    // D02 SOAT
    const d02 = getInfractionOrThrow('D02');
    expect(d02.smldv).toBe(30);
    expect(d02.immobilization).toBe(true);
    expect(d02.isPhotomultasEligible).toBe(true);

    // D04 Semáforo en rojo
    const d04 = getInfractionOrThrow('D04');
    expect(d04.smldv).toBe(30);
    expect(d04.isPhotomultasEligible).toBe(true);
  });
});
