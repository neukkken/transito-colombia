import { PlateFormat, PlateValidationResult, ServiceType } from '../types/vehicle.js';
import { VehicleClass } from '../types/infraction.js';

export function normalizePlate(rawPlate: string): string {
  if (!rawPlate || typeof rawPlate !== 'string') return '';
  return rawPlate.trim().toUpperCase().replace(/[\s\-_.]/g, '');
}

/**
 * Valida y analiza una placa vehicular colombiana según la reglamentación del Ministerio de Transporte.
 */
export function validatePlate(rawPlate: string): PlateValidationResult {
  const normalized = normalizePlate(rawPlate);

  if (!normalized) {
    return {
      isValid: false,
      normalizedPlate: '',
      formattedPlate: '',
      plateFormat: 'DESCONOCIDO',
      suggestedService: 'PARTICULAR',
      suggestedVehicleClass: 'AUTOMOVIL',
      lastDigit: null,
      error: 'La placa no puede estar vacía.'
    };
  }

  // 1. Automóvil estándar (particular o público): 3 letras + 3 números (ej. ABC123)
  const carMatch = normalized.match(/^([A-Z]{3})(\d{3})$/);
  if (carMatch) {
    const letters = carMatch[1];
    const numbers = carMatch[2];
    const lastDigit = parseInt(numbers[2], 10);
    return {
      isValid: true,
      normalizedPlate: normalized,
      formattedPlate: `${letters}-${numbers}`,
      plateFormat: 'AUTOMOVIL_PARTICULAR',
      suggestedService: 'PARTICULAR',
      suggestedVehicleClass: 'AUTOMOVIL',
      lastDigit
    };
  }

  // 2. Motocicleta moderna: 3 letras + 2 números + 1 letra (ej. ABC12D)
  const motoModernMatch = normalized.match(/^([A-Z]{3})(\d{2})([A-Z])$/);
  if (motoModernMatch) {
    const letters = motoModernMatch[1];
    const digits = motoModernMatch[2];
    const suffix = motoModernMatch[3];
    const lastDigit = parseInt(digits[1], 10);
    return {
      isValid: true,
      normalizedPlate: normalized,
      formattedPlate: `${letters}-${digits}${suffix}`,
      plateFormat: 'MOTOCICLETA_NUEVA',
      suggestedService: 'PARTICULAR',
      suggestedVehicleClass: 'MOTOCICLETA',
      lastDigit
    };
  }

  // 3. Motocicleta antigua: 2 letras + 3 números (ej. AB123) o 3 letras + 2 números (ej. ABC12)
  const motoOldMatch = normalized.match(/^([A-Z]{2})(\d{3})$/);
  if (motoOldMatch) {
    const letters = motoOldMatch[1];
    const digits = motoOldMatch[2];
    return {
      isValid: true,
      normalizedPlate: normalized,
      formattedPlate: `${letters}-${digits}`,
      plateFormat: 'MOTOCICLETA_ANTIGUA',
      suggestedService: 'PARTICULAR',
      suggestedVehicleClass: 'MOTOCICLETA',
      lastDigit: parseInt(digits[2], 10)
    };
  }

  const motoShortMatch = normalized.match(/^([A-Z]{3})(\d{2})$/);
  if (motoShortMatch) {
    const letters = motoShortMatch[1];
    const digits = motoShortMatch[2];
    return {
      isValid: true,
      normalizedPlate: normalized,
      formattedPlate: `${letters}-${digits}`,
      plateFormat: 'MOTOCICLETA_ANTIGUA',
      suggestedService: 'PARTICULAR',
      suggestedVehicleClass: 'MOTOCICLETA',
      lastDigit: parseInt(digits[1], 10)
    };
  }

  // 4. Remolques y Semirremolques: 1 letra (R o S) + 5 números (ej. R12345 o S12345)
  const trailerMatch = normalized.match(/^([RS])(\d{5})$/);
  if (trailerMatch) {
    const prefix = trailerMatch[1];
    const digits = trailerMatch[2];
    return {
      isValid: true,
      normalizedPlate: normalized,
      formattedPlate: `${prefix}-${digits}`,
      plateFormat: 'REMOLQUE',
      suggestedService: 'PARTICULAR',
      suggestedVehicleClass: prefix === 'R' ? 'REMOLQUE' : 'SEMIRREMOLQUE',
      lastDigit: parseInt(digits[4], 10)
    };
  }

  // 5. Cuerpo Diplomático / Consular / Misiones Internacionales: 2 letras (CD, CC, MI, OI, AT) + 4 dígitos
  const diplomaticMatch = normalized.match(/^(CD|CC|MI|OI|AT)(\d{4})$/);
  if (diplomaticMatch) {
    const code = diplomaticMatch[1];
    const digits = diplomaticMatch[2];
    return {
      isValid: true,
      normalizedPlate: normalized,
      formattedPlate: `${code}-${digits}`,
      plateFormat: 'DIPLOMATICO',
      suggestedService: 'DIPLOMATICO',
      suggestedVehicleClass: 'AUTOMOVIL',
      lastDigit: parseInt(digits[3], 10)
    };
  }

  return {
    isValid: false,
    normalizedPlate: normalized,
    formattedPlate: normalized,
    plateFormat: 'DESCONOCIDO',
    suggestedService: 'PARTICULAR',
    suggestedVehicleClass: 'AUTOMOVIL',
    lastDigit: null,
    error: `Formato de placa colombiana inválido: "${rawPlate}". Formatos válidos: AAA123, AAA12D, AB123, R12345, CD1234.`
  };
}
