import { normalizeInfractionCode } from './code-validator.js';

export interface PhotomultaLegalAudit {
  isEligibleForPhotoDetection: boolean;
  requiresDriverIdentification: boolean;
  ownerIsStrictlyLiable: boolean;
  legalStandard: string;
  isPotentiallyAppeallable: boolean;
  groundsForAppeal: string[];
}

/**
 * Evalúa la validez jurídica de un comparendo por fotodetección (SAST) en Colombia
 * conforme a la Ley 1843 de 2017, la Sentencia C-038 de 2020 y la Sentencia C-321 de 2022.
 */
export function auditPhotomultaNotice(
  code: string,
  options: {
    driverWasIdentified: boolean;
    businessDaysToSendNotification?: number;
    cameraIsApprovedByANSV?: boolean;
  }
): PhotomultaLegalAudit {
  const normalized = normalizeInfractionCode(code);
  const groundsForAppeal: string[] = [];

  // Infracciones autorizadas comúnmente para detección por cámaras
  const authorizedPhotoCodes = new Set(['C29', 'C35', 'D02', 'D04', 'C14', 'C02']);
  const isEligible = authorizedPhotoCodes.has(normalized);

  if (!isEligible) {
    groundsForAppeal.push(
      `La infracción ${normalized} no está tipificada como susceptible de imposición automática mediante cámaras de fotodetección sin intervención de un agente presencial.`
    );
  }

  // Sentencia C-321 de 2022: Responsabilidad objetiva del propietario SOLO para SOAT y Tecnomecánica
  const ownerStrictLiable = normalized === 'D02' || normalized === 'C35';

  // Sentencia C-038 de 2020: Para conductas de conducción activa (C29 velocidad, D04 semáforo, C14 pico y placa)
  // el Estado tiene la carga de identificar plenamente al conductor infractor.
  const requiresDriverId = !ownerStrictLiable;

  if (requiresDriverId && !options.driverWasIdentified) {
    groundsForAppeal.push(
      'Falta de plena identificación del conductor (Sentencia C-038 de 2020 de la Corte Constitucional): No se puede sancionar al propietario por el solo hecho de ser titular del vehículo para conductas como exceso de velocidad, semáforo en rojo o pico y placa.'
    );
  }

  // Notificación extemporánea (Art. 8 Ley 1843 de 2017: 3 días hábiles para el envío)
  if (
    options.businessDaysToSendNotification !== undefined &&
    options.businessDaysToSendNotification > 3
  ) {
    groundsForAppeal.push(
      `Violación al debido proceso por notificación extemporánea: La citación fue enviada a los ${options.businessDaysToSendNotification} días hábiles, superando el límite legal de 3 días hábiles establecido en el Artículo 8 de la Ley 1843 de 2017.`
    );
  }

  // Cámara no autorizada o sin calibración vigente
  if (options.cameraIsApprovedByANSV === false) {
    groundsForAppeal.push(
      'Cámara o radar no autorizado: El dispositivo de fotodetección no cuenta con la autorización o calibración vigente de la Agencia Nacional de Seguridad Vial (ANSV).'
    );
  }

  let legalStandard = '';
  if (ownerStrictLiable) {
    legalStandard =
      'Responsabilidad del propietario (Ley 2161 de 2021 y Sentencia C-321 de 2022): El propietario debe velar porque el vehículo circule con SOAT y RTM vigentes.';
  } else {
    legalStandard =
      'Principio de personalidad de las sanciones (Sentencia C-038 de 2020): La autoridad debe individualizar e identificar al conductor real antes de imponer la sanción.';
  }

  return {
    isEligibleForPhotoDetection: isEligible,
    requiresDriverIdentification: requiresDriverId,
    ownerIsStrictlyLiable: ownerStrictLiable,
    legalStandard,
    isPotentiallyAppeallable: groundsForAppeal.length > 0,
    groundsForAppeal
  };
}
