/**
 * Algoritmo oficial de cálculo de días festivos en Colombia (Ley 51 de 1983 - Ley Emiliani).
 * Incluye festivos fijos, festivos trasladados al siguiente lunes y festivos dependientes de la Pascua.
 */

function getEasterDate(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31) - 1; // 0-indexed month
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(Date.UTC(year, month, day));
}

function nextMonday(date: Date): Date {
  const day = date.getUTCDay();
  if (day === 1) return date; // Already Monday
  const daysToAdd = day === 0 ? 1 : 8 - day;
  const result = new Date(date);
  result.setUTCDate(result.getUTCDate() + daysToAdd);
  return result;
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setUTCDate(result.getUTCDate() + days);
  return result;
}

function formatDateKey(d: Date): string {
  const year = d.getUTCFullYear();
  const month = String(d.getUTCMonth() + 1).padStart(2, '0');
  const day = String(d.getUTCDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export interface ColombianHoliday {
  date: string; // YYYY-MM-DD
  name: string;
}

export function getColombianHolidays(year: number): ColombianHoliday[] {
  const easter = getEasterDate(year);
  const holidays: ColombianHoliday[] = [];

  // 1. Festivos Fijos (no se trasladan)
  holidays.push({ date: `${year}-01-01`, name: 'Año Nuevo' });
  holidays.push({ date: `${year}-05-01`, name: 'Día del Trabajo' });
  holidays.push({ date: `${year}-07-20`, name: 'Día de la Independencia' });
  holidays.push({ date: `${year}-08-07`, name: 'Batalla de Boyacá' });
  holidays.push({ date: `${year}-12-08`, name: 'Inmaculada Concepción' });
  holidays.push({ date: `${year}-12-25`, name: 'Navidad' });

  // 2. Festivos Ley Emiliani (se trasladan al siguiente lunes)
  holidays.push({
    date: formatDateKey(nextMonday(new Date(Date.UTC(year, 0, 6)))),
    name: 'Reyes Magos'
  });
  holidays.push({
    date: formatDateKey(nextMonday(new Date(Date.UTC(year, 2, 19)))),
    name: 'Día de San José'
  });
  holidays.push({
    date: formatDateKey(nextMonday(new Date(Date.UTC(year, 5, 29)))),
    name: 'San Pedro y San Pablo'
  });
  holidays.push({
    date: formatDateKey(nextMonday(new Date(Date.UTC(year, 7, 15)))),
    name: 'Asunción de la Virgen'
  });
  holidays.push({
    date: formatDateKey(nextMonday(new Date(Date.UTC(year, 9, 12)))),
    name: 'Día de la Raza'
  });
  holidays.push({
    date: formatDateKey(nextMonday(new Date(Date.UTC(year, 10, 1)))),
    name: 'Todos los Santos'
  });
  holidays.push({
    date: formatDateKey(nextMonday(new Date(Date.UTC(year, 10, 11)))),
    name: 'Independencia de Cartagena'
  });

  // 3. Festivos dependientes de Pascua
  holidays.push({
    date: formatDateKey(addDays(easter, -3)),
    name: 'Jueves Santo'
  });
  holidays.push({
    date: formatDateKey(addDays(easter, -2)),
    name: 'Viernes Santo'
  });
  holidays.push({
    date: formatDateKey(nextMonday(addDays(easter, 43))),
    name: 'Ascensión del Señor'
  });
  holidays.push({
    date: formatDateKey(nextMonday(addDays(easter, 64))),
    name: 'Corpus Christi'
  });
  holidays.push({
    date: formatDateKey(nextMonday(addDays(easter, 71))),
    name: 'Sagrado Corazón de Jesús'
  });

  return holidays.sort((a, b) => a.date.localeCompare(b.date));
}

const holidayCache = new Map<number, Set<string>>();

export function isColombianHoliday(date: Date): boolean {
  const year = date.getUTCFullYear();
  if (!holidayCache.has(year)) {
    const list = getColombianHolidays(year);
    holidayCache.set(year, new Set(list.map((h) => h.date)));
  }
  const dateStr = formatDateKey(date);
  return holidayCache.get(year)!.has(dateStr);
}
