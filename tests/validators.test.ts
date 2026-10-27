import { describe, it, expect } from 'vitest';
import {
  auditPhotomultaNotice,
  calculateLicenseValidity,
  canDriverOperateVehicle,
  validatePlate
} from '../src/index.js';

describe('Validadores Normativos de Tránsito', () => {
  describe('Validador de Placas Vehiculares Colombianas', () => {
    it('debe validar placas de automóvil particular y público (ABC123)', () => {
      const res = validatePlate('abc123');
      expect(res.isValid).toBe(true);
      expect(res.normalizedPlate).toBe('ABC123');
      expect(res.formattedPlate).toBe('ABC-123');
      expect(res.plateFormat).toBe('AUTOMOVIL_PARTICULAR');
      expect(res.lastDigit).toBe(3);
    });

    it('debe validar placas de moto moderna (ABC12D)', () => {
      const res = validatePlate('ABC-12D');
      expect(res.isValid).toBe(true);
      expect(res.normalizedPlate).toBe('ABC12D');
      expect(res.plateFormat).toBe('MOTOCICLETA_NUEVA');
      expect(res.suggestedVehicleClass).toBe('MOTOCICLETA');
      expect(res.lastDigit).toBe(2);
    });

    it('debe validar placas de remolques y diplomáticos', () => {
      const trailer = validatePlate('R12345');
      expect(trailer.isValid).toBe(true);
      expect(trailer.plateFormat).toBe('REMOLQUE');

      const cd = validatePlate('CD1234');
      expect(cd.isValid).toBe(true);
      expect(cd.plateFormat).toBe('DIPLOMATICO');
    });

    it('debe rechazar formatos inválidos', () => {
      expect(validatePlate('123456').isValid).toBe(false);
      expect(validatePlate('ABCD123').isValid).toBe(false);
      expect(validatePlate('').isValid).toBe(false);
    });
  });

  describe('Validador de Licencias de Conducción y Jerarquías', () => {
    it('debe permitir que una licencia C3 conduzca todas las clases particulares y públicas', () => {
      expect(canDriverOperateVehicle('C3', 'AUTOMOVIL', 'PARTICULAR').authorized).toBe(true);
      expect(canDriverOperateVehicle('C3', 'CAMION', 'PUBLICO').authorized).toBe(true);
      expect(canDriverOperateVehicle('C3', 'TRACTOCAMION', 'PUBLICO').authorized).toBe(true);
    });

    it('no debe permitir que una licencia particular opere servicio público', () => {
      const res = canDriverOperateVehicle('B1', 'AUTOMOVIL', 'PUBLICO');
      expect(res.authorized).toBe(false);
      expect(res.reason).toMatch(/servicio público/i);
    });

    it('no debe permitir que una licencia B1 opere camiones o buses', () => {
      const res = canDriverOperateVehicle('B1', 'CAMION', 'PARTICULAR');
      expect(res.authorized).toBe(false);
    });

    it('debe calcular la vigencia por edad conforme a Ley 2161 de 2021', () => {
      // Conductor menor de 60 años particular: 10 años
      const young = calculateLicenseValidity('B1', '2024-01-01', '1995-05-15');
      expect(young.yearsGranted).toBe(10);
      expect(young.expectedExpirationDate).toBe('2034-01-01');

      // Conductor de 65 años particular: 5 años
      const senior = calculateLicenseValidity('B1', '2024-01-01', '1959-05-15');
      expect(senior.yearsGranted).toBe(5);
      expect(senior.expectedExpirationDate).toBe('2029-01-01');

      // Conductor de servicio público menor de 60 años: 3 años
      const publicYoung = calculateLicenseValidity('C1', '2024-01-01', '1995-05-15');
      expect(publicYoung.yearsGranted).toBe(3);
    });
  });

  describe('Auditoría Legal de Fotomultas (Sentencias C-038/2020 y C-321/2022)', () => {
    it('debe exigir plena identificación del conductor en exceso de velocidad (C29)', () => {
      const audit = auditPhotomultaNotice('C29', {
        driverWasIdentified: false,
        businessDaysToSendNotification: 2
      });
      expect(audit.requiresDriverIdentification).toBe(true);
      expect(audit.ownerIsStrictlyLiable).toBe(false);
      expect(audit.isPotentiallyAppeallable).toBe(true);
      expect(audit.groundsForAppeal.some((g) => g.includes('C-038'))).toBe(true);
    });

    it('debe aplicar responsabilidad objetiva al propietario para SOAT (D02) y RTM (C35)', () => {
      const audit = auditPhotomultaNotice('D02', {
        driverWasIdentified: false,
        businessDaysToSendNotification: 2
      });
      expect(audit.requiresDriverIdentification).toBe(false);
      expect(audit.ownerIsStrictlyLiable).toBe(true);
    });

    it('debe detectar notificación extemporánea superior a 3 días hábiles', () => {
      const audit = auditPhotomultaNotice('C35', {
        driverWasIdentified: true,
        businessDaysToSendNotification: 5
      });
      expect(audit.isPotentiallyAppeallable).toBe(true);
      expect(audit.groundsForAppeal.some((g) => g.includes('extemporánea'))).toBe(true);
    });
  });
});
