import { describe, it, expect } from 'vitest';
import {
  addBusinessDays,
  calculateLegalDeadlines,
  countBusinessDaysBetween,
  getColombianHolidays,
  isBusinessDay,
  isColombianHoliday
} from '../src/index.js';

describe('Cálculo de Días Hábiles y Plazos Legales Colombianos', () => {
  it('debe calcular los días festivos de Colombia con Ley Emiliani', () => {
    const holidays2024 = getColombianHolidays(2024);
    // Colombia tiene 18 festivos anuales en promedio
    expect(holidays2024.length).toBeGreaterThanOrEqual(18);

    // Año nuevo (fijo)
    expect(holidays2024.some((h) => h.date === '2024-01-01')).toBe(true);
    // Independencia (20 julio)
    expect(holidays2024.some((h) => h.date === '2024-07-20')).toBe(true);
    // Batalla de Boyacá (7 agosto)
    expect(holidays2024.some((h) => h.date === '2024-08-07')).toBe(true);
    // Navidad (25 diciembre)
    expect(holidays2024.some((h) => h.date === '2024-12-25')).toBe(true);
  });

  it('debe identificar si una fecha es día hábil u festivo', () => {
    // 2024-01-01 fue lunes festivo (Año Nuevo)
    expect(isBusinessDay('2024-01-01')).toBe(false);
    expect(isColombianHoliday(new Date('2024-01-01T12:00:00Z'))).toBe(true);

    // 2024-01-06 fue sábado (Reyes Magos se trasladó al lunes 8 de enero)
    expect(isBusinessDay('2024-01-06')).toBe(false); // Sábado
    expect(isBusinessDay('2024-01-08')).toBe(false); // Lunes festivo trasladado
    expect(isBusinessDay('2024-01-09')).toBe(true);  // Martes hábil
  });

  it('debe sumar días hábiles omitiendo fines de semana y festivos', () => {
    // Viernes 2024-10-11
    // Lunes 2024-10-14 fue festivo (Día de la Raza trasladado)
    // Martes 15 (día hábil 1)
    // Miércoles 16 (día hábil 2)
    // Jueves 17 (día hábil 3)
    const result = addBusinessDays('2024-10-11', 3);
    const dateStr = result.toISOString().split('T')[0];
    expect(dateStr).toBe('2024-10-17');
  });

  it('debe calcular los plazos de comparendo en vía pública (5 y 20 días hábiles)', () => {
    const deadlines = calculateLegalDeadlines({
      infractionDate: '2024-10-01',
      detectionType: 'AGENTE_EN_VIA',
      notificationDate: '2024-10-01',
      calculationDate: '2024-10-03'
    });

    expect(deadlines.discount50.maxBusinessDays).toBe(5);
    expect(deadlines.discount25.maxBusinessDays).toBe(20);
    expect(deadlines.discount50.isCurrentlyValid).toBe(true);
    expect(deadlines.caducidad.isCaducado).toBe(false);
    expect(deadlines.prescripcion.isPrescrito).toBe(false);
  });

  it('debe calcular los plazos de fotomultas (11 y 26 días hábiles)', () => {
    const deadlines = calculateLegalDeadlines({
      infractionDate: '2024-10-01',
      detectionType: 'FOTODETECCION',
      notificationDate: '2024-10-05',
      calculationDate: '2024-10-10'
    });

    expect(deadlines.discount50.maxBusinessDays).toBe(11);
    expect(deadlines.discount25.maxBusinessDays).toBe(26);
    expect(deadlines.discount50.isCurrentlyValid).toBe(true);
  });

  it('debe detectar la caducidad (1 año) y la prescripción (3 años)', () => {
    // Comparendo de hace 2 años sin fallo sancionatorio -> Caducado
    const caducado = calculateLegalDeadlines({
      infractionDate: '2022-01-10',
      detectionType: 'AGENTE_EN_VIA',
      calculationDate: '2024-01-15'
    });
    expect(caducado.caducidad.isCaducado).toBe(true);

    // Comparendo de hace 4 años -> Prescrito
    const prescrito = calculateLegalDeadlines({
      infractionDate: '2020-01-10',
      detectionType: 'AGENTE_EN_VIA',
      calculationDate: '2024-01-15'
    });
    expect(prescrito.prescripcion.isPrescrito).toBe(true);
  });
});
