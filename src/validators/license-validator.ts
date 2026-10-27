import { LICENSE_CATEGORIES } from '../data/license-categories.js';
import { LicenseCategory, LicenseValidityCalculation } from '../types/driver.js';
import { ServiceType, VehicleClass } from '../types/index.js';

/**
 * Comprueba si un conductor con una categoría de licencia específica está facultado
 * legalmente para operar una determinada clase de vehículo y tipo de servicio en Colombia.
 * Aplica la jerarquía legal establecida en el Código Nacional de Tránsito.
 */
export function canDriverOperateVehicle(
  driverCategory: LicenseCategory,
  vehicleClass: VehicleClass,
  serviceType: ServiceType = 'PARTICULAR'
): { authorized: boolean; reason: string } {
  const categoryDef = LICENSE_CATEGORIES[driverCategory];
  if (!categoryDef) {
    return {
      authorized: false,
      reason: `Categoría de licencia desconocida: ${driverCategory}`
    };
  }

  // Si el servicio es PÚBLICO, se requiere obligatoriamente una licencia de servicio público (C1, C2 o C3)
  if (serviceType === 'PUBLICO') {
    if (!['C1', 'C2', 'C3'].includes(driverCategory)) {
      return {
        authorized: false,
        reason: `Para operar un vehículo de servicio público se requiere licencia categoría C1, C2 o C3. La licencia ${driverCategory} es de servicio particular.`
      };
    }
  }

  // Verificar si la clase de vehículo está autorizada directamente o por jerarquía
  // Obtenemos todas las categorías subsumidas por la licencia del conductor
  const subsumedCategories = categoryDef.hierarchySubsumes;
  const authorizedClasses = new Set<VehicleClass>();

  for (const cat of subsumedCategories) {
    const def = LICENSE_CATEGORIES[cat];
    if (def) {
      def.authorizedVehicleClasses.forEach((cls) => authorizedClasses.add(cls));
    }
  }

  if (authorizedClasses.has(vehicleClass) || authorizedClasses.has('TODOS')) {
    return {
      authorized: true,
      reason: `La licencia categoría ${driverCategory} autoriza legalmente operar ${vehicleClass} en modalidad ${serviceType}.`
    };
  }

  return {
    authorized: false,
    reason: `La licencia categoría ${driverCategory} no autoriza la conducción de vehículos de clase ${vehicleClass}. Clases permitidas: ${Array.from(authorizedClasses).join(', ')}.`
  };
}

/**
 * Calcula la vigencia y fecha de expiración legal de una licencia de conducción
 * según la edad del titular a la fecha de expedición, conforme a la Ley 2161 de 2021 y Art. 22 Ley 769.
 */
export function calculateLicenseValidity(
  category: LicenseCategory,
  expeditionDateInput: string | Date,
  birthDateInput: string | Date
): LicenseValidityCalculation {
  const expeditionDate =
    typeof expeditionDateInput === 'string'
      ? new Date(expeditionDateInput)
      : expeditionDateInput;

  const birthDate =
    typeof birthDateInput === 'string' ? new Date(birthDateInput) : birthDateInput;

  // Calcular edad al momento de expedición
  let age = expeditionDate.getUTCFullYear() - birthDate.getUTCFullYear();
  const m = expeditionDate.getUTCMonth() - birthDate.getUTCMonth();
  if (m < 0 || (m === 0 && expeditionDate.getUTCDate() < birthDate.getUTCDate())) {
    age--;
  }

  const categoryDef = LICENSE_CATEGORIES[category];
  const isPublicService = categoryDef.serviceType === 'PUBLICO';

  let yearsGranted = 10;
  let reason = '';

  if (isPublicService) {
    if (age < 60) {
      yearsGranted = categoryDef.validityRules.under60YearsInterval; // 3 años
      reason = 'Servicio público menor de 60 años: vigencia de 3 años.';
    } else {
      yearsGranted = categoryDef.validityRules.over60YearsInterval ?? 1; // 1 año
      reason = 'Servicio público de 60 años o más: vigencia de 1 año (examen anual).';
    }
  } else {
    // Servicio particular (A1, A2, B1, B2, B3)
    if (age < 60) {
      yearsGranted = categoryDef.validityRules.under60YearsInterval; // 10 años
      reason = 'Servicio particular menor de 60 años: vigencia de 10 años (Ley 2161 de 2021).';
    } else if (age < 80) {
      yearsGranted = categoryDef.validityRules.sixtyTo79YearsInterval ?? 5; // 5 años
      reason = 'Servicio particular entre 60 y 79 años: vigencia de 5 años.';
    } else {
      yearsGranted = categoryDef.validityRules.over80YearsInterval ?? 1; // 1 año
      reason = 'Servicio particular mayor de 80 años: vigencia de 1 año.';
    }
  }

  const expectedExp = new Date(expeditionDate);
  expectedExp.setUTCFullYear(expectedExp.getUTCFullYear() + yearsGranted);

  const now = new Date();
  const isCurrentlyValid = expectedExp.getTime() > now.getTime();

  return {
    isValid: isCurrentlyValid,
    yearsGranted,
    expectedExpirationDate: expectedExp.toISOString().split('T')[0],
    requiresRenewal: !isCurrentlyValid,
    ageAtIssuance: age,
    reason
  };
}
