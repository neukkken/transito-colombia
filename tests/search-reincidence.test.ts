import { describe, it, expect } from 'vitest';
import {
  checkReincidence,
  evaluateSpeed,
  getImmobilizingInfractions,
  getPhotomultasEligibleInfractions,
  searchInfractions
} from '../src/index.js';

describe('Búsqueda de Infracciones, Reincidencia y Límites de Velocidad', () => {
  it('debe buscar infracciones por texto libre y palabras clave', () => {
    const resultsSoat = searchInfractions({ query: 'soat' });
    expect(resultsSoat.some((inf) => inf.code === 'D02')).toBe(true);

    const resultsPicoYPlaca = searchInfractions({ query: 'pico y placa' });
    expect(resultsPicoYPlaca.some((inf) => inf.code === 'C14')).toBe(true);

    const resultsCasco = searchInfractions({ query: 'casco' });
    expect(resultsCasco.some((inf) => inf.code === 'C24')).toBe(true);

    const resultsSemaforo = searchInfractions({ query: 'semaforo rojo' });
    expect(resultsSemaforo.some((inf) => inf.code === 'D04')).toBe(true);
  });

  it('debe filtrar infracciones que inmovilizan o son de fotomulta', () => {
    const immobilizing = getImmobilizingInfractions();
    expect(immobilizing.length).toBeGreaterThanOrEqual(30);

    const photos = getPhotomultasEligibleInfractions();
    expect(photos.some((inf) => inf.code === 'C29')).toBe(true);
    expect(photos.some((inf) => inf.code === 'C35')).toBe(true);
    expect(photos.some((inf) => inf.code === 'D02')).toBe(true);
  });

  it('debe evaluar la reincidencia en ventana de 6 meses (Art. 124 Ley 769)', () => {
    const history = [
      { code: 'C02', date: '2024-05-10' },
      { code: 'C29', date: '2024-07-15' }
    ];

    // Nueva infracción el 20 de agosto (dentro de los 6 meses de la primera)
    const res = checkReincidence(history, '2024-08-20');
    expect(res.hasReincidence).toBe(true);
    expect(res.requiresLicenseSuspension).toBe(true);
    expect(res.suspensionMonths).toBe(6);

    // Si ya tuvo suspensiones previas -> se duplica a 12 meses
    const resSubsequent = checkReincidence(history, '2024-08-20', 1);
    expect(resSubsequent.suspensionMonths).toBe(12);

    // Infracción fuera de la ventana de 6 meses (ej. 2025-03-01)
    const resOutside = checkReincidence(history, '2025-03-01');
    expect(resOutside.hasReincidence).toBe(false);
  });

  it('debe evaluar los límites de velocidad (Ley 2251 de 2022 - Ley Julián Esteban)', () => {
    // Zona urbana: máx 50 km/h
    const urbanOk = evaluateSpeed(48, 'URBANA', 'AUTOMOVIL');
    expect(urbanOk.isSpeeding).toBe(false);

    const urbanSpeeding = evaluateSpeed(65, 'URBANA', 'AUTOMOVIL');
    expect(urbanSpeeding.isSpeeding).toBe(true);
    expect(urbanSpeeding.excessKmh).toBe(15);
    expect(urbanSpeeding.applicableInfractionCode).toBe('C29');

    // Zona escolar: máx 30 km/h
    const schoolSpeeding = evaluateSpeed(38, 'ESCOLAR', 'AUTOMOVIL');
    expect(schoolSpeeding.isSpeeding).toBe(true);
    expect(schoolSpeeding.excessKmh).toBe(8);

    // Transporte escolar a exceso de velocidad -> infracción D10
    const schoolBus = evaluateSpeed(60, 'URBANA', 'TRANSPORTE_ESCOLAR');
    expect(schoolBus.isSpeeding).toBe(true);
    expect(schoolBus.applicableInfractionCode).toBe('D10');
  });
});
