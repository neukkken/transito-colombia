import { DriverUser, LicenseCategory, LicenseRecord } from '../types/driver.js';
import { canDriverOperateVehicle } from '../validators/license-validator.js';
import { ServiceType, VehicleClass } from '../types/index.js';
import { checkReincidence, HistoricalInfraction, ReincidenceCheckResult } from '../calculators/reincidence.js';

export function createDriverRecord(data: Partial<DriverUser> & {
  documentType: DriverUser['documentType'];
  documentNumber: string;
  fullName: string;
}): DriverUser {
  return {
    documentType: data.documentType,
    documentNumber: data.documentNumber.trim(),
    fullName: data.fullName.trim(),
    email: data.email,
    phone: data.phone,
    address: data.address,
    notificationCity: data.notificationCity,
    birthDate: data.birthDate,
    licenses: data.licenses || [],
    isSuspended: !!data.isSuspended,
    suspensionEndDate: data.suspensionEndDate,
    activeViolationsCount: data.activeViolationsCount || 0
  };
}

/**
 * Valida si el conductor tiene al menos una licencia activa que le permita operar el vehículo indicado.
 */
export function checkDriverAuthorizationForVehicle(
  driver: DriverUser,
  vehicleClass: VehicleClass,
  serviceType: ServiceType = 'PARTICULAR'
): { authorized: boolean; reason: string; matchingLicense?: LicenseRecord } {
  if (driver.isSuspended) {
    return {
      authorized: false,
      reason: `El conductor tiene la licencia actualmente SUSPENDIDA (hasta ${driver.suspensionEndDate || 'indefinido'}). Incurre en infracción grave si conduce.`
    };
  }

  const activeLicenses = driver.licenses.filter((lic) => lic.status === 'ACTIVA');
  if (activeLicenses.length === 0) {
    return {
      authorized: false,
      reason: 'El conductor no tiene ninguna licencia de conducción activa registrada.'
    };
  }

  for (const lic of activeLicenses) {
    const auth = canDriverOperateVehicle(lic.category, vehicleClass, serviceType);
    if (auth.authorized) {
      return {
        authorized: true,
        reason: auth.reason,
        matchingLicense: lic
      };
    }
  }

  return {
    authorized: false,
    reason: `Ninguna de las licencias activas del conductor (${activeLicenses.map((l) => l.category).join(', ')}) autoriza conducir ${vehicleClass} en modalidad ${serviceType}.`
  };
}

/**
 * Evalúa si la imposición de una nueva infracción a un conductor genera reincidencia
 * y suspensión obligatoria de la licencia de conducción conforme al Art. 124 Ley 769.
 */
export function evaluateDriverReincidence(
  infractionHistory: HistoricalInfraction[],
  newDate: string | Date = new Date(),
  priorSuspensions: number = 0
): ReincidenceCheckResult {
  return checkReincidence(infractionHistory, newDate, priorSuspensions);
}
