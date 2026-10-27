import { INFRACTIONS_BY_CODE } from '../data/infractions.js';
import { TrafficInfraction } from '../types/infraction.js';

/**
 * Normaliza cualquier formato común de código de infracción (ej. "c-02", "C.2", "c 2", "c02")
 * al formato estándar en mayúsculas de 3 caracteres (ej. "C02").
 */
export function normalizeInfractionCode(rawCode: string): string {
  if (!rawCode || typeof rawCode !== 'string') return '';
  const trimmed = rawCode.trim().toUpperCase();

  // Match pattern letter followed by 1 or 2 digits, optional dot/dash/spaces
  const match = trimmed.match(/^([A-J])[\s.\-_]*(\d{1,2})$/);
  if (!match) return trimmed.replace(/[^A-Z0-9]/g, '');

  const letter = match[1];
  const number = parseInt(match[2], 10);
  const paddedNumber = String(number).padStart(2, '0');
  return `${letter}${paddedNumber}`;
}

/**
 * Verifica si un código de infracción existe y es válido dentro del Código Nacional de Tránsito.
 */
export function isValidInfractionCode(code: string): boolean {
  const normalized = normalizeInfractionCode(code);
  return normalized in INFRACTIONS_BY_CODE;
}

/**
 * Obtiene la infracción del catálogo o lanza un error descriptivo si no existe.
 */
export function getInfractionOrThrow(code: string): TrafficInfraction {
  const normalized = normalizeInfractionCode(code);
  const infraction = INFRACTIONS_BY_CODE[normalized];
  if (!infraction) {
    throw new Error(
      `Código de infracción inválido: "${code}" (normalizado: "${normalized}"). Debe pertenecer al catálogo oficial de Tránsito (A01 a J06).`
    );
  }
  return infraction;
}

/**
 * Obtiene la infracción del catálogo o retorna null si no existe.
 */
export function getInfraction(code: string): TrafficInfraction | null {
  const normalized = normalizeInfractionCode(code);
  return INFRACTIONS_BY_CODE[normalized] || null;
}
