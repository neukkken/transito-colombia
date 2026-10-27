import { describe, it, expect } from 'vitest';
import {
  applyPaymentToComparendo,
  checkDocumentStatus,
  checkDriverAuthorizationForVehicle,
  createComparendo,
  createDriverRecord,
  createVehicleRecord,
  isRestrictedByPicoYPlaca,
  refreshComparendoStatus,
  registerCourseCompletion
} from '../src/index.js';

describe('Modelos de Dominio para Control de Infracciones, Vehículos y Usuarios', () => {
  it('debe crear un vehículo y verificar estado de documentos y pico y placa', () => {
    const vehicle = createVehicleRecord({
      plate: 'col123',
      ownerDocument: '1020304050',
      ownerName: 'Juan Pérez',
      vehicleClass: 'AUTOMOVIL',
      serviceType: 'PARTICULAR',
      soat: {
        policyNumber: 'SOAT-999',
        insurer: 'Seguros del Estado',
        validUntil: '2025-12-31',
        isValid: true
      }
    });

    expect(vehicle.plate).toBe('COL123');

    // Pico y placa para dígitos [2, 3] -> placa termina en 3
    expect(isRestrictedByPicoYPlaca(vehicle.plate, [2, 3])).toBe(true);
    expect(isRestrictedByPicoYPlaca(vehicle.plate, [4, 5])).toBe(false);

    // Document status
    const docStatus = checkDocumentStatus('2028-12-31');
    expect(docStatus.isExpired).toBe(false);
  });

  it('debe gestionar un conductor y validar autorizaciones sobre vehículos', () => {
    const driver = createDriverRecord({
      documentType: 'CC',
      documentNumber: '1020304050',
      fullName: 'Carlos Rodríguez',
      licenses: [
        {
          category: 'B1',
          expeditionDate: '2020-01-10',
          expirationDate: '2030-01-10',
          status: 'ACTIVA'
        }
      ]
    });

    // B1 puede conducir automóvil particular
    const authAuto = checkDriverAuthorizationForVehicle(driver, 'AUTOMOVIL', 'PARTICULAR');
    expect(authAuto.authorized).toBe(true);

    // B1 NO puede conducir camión particular
    const authCamion = checkDriverAuthorizationForVehicle(driver, 'CAMION', 'PARTICULAR');
    expect(authCamion.authorized).toBe(false);

    // B1 NO puede conducir taxi (público)
    const authTaxi = checkDriverAuthorizationForVehicle(driver, 'AUTOMOVIL', 'PUBLICO');
    expect(authTaxi.authorized).toBe(false);
  });

  it('debe gestionar el ciclo de vida completo de un comparendo', () => {
    // 1. Crear comparendo por C02 (estacionamiento prohibido) en 2024
    let comparendo = createComparendo({
      comparendoNumber: '11001000000012345678',
      infractionCode: 'C02',
      detectionType: 'AGENTE_EN_VIA',
      infractionDate: '2024-10-01T08:30:00Z',
      department: 'BOGOTA D.C.',
      municipality: 'BOGOTA',
      locationAddress: 'Carrera 7 con Calle 72',
      plate: 'ABC123',
      ownerDocument: '1020304050',
      ownerName: 'Juan Pérez',
      officerPlateOrCameraId: 'POL-78945',
      year: 2024
    });

    expect(comparendo.category).toBe('C');
    expect(comparendo.baseAmountCop).toBe(650000);
    expect(comparendo.status).toBe('DESCUENTO_50_VIGENTE');

    // 2. Registrar curso vial en un CIA
    comparendo = registerCourseCompletion(comparendo, {
      ciaName: 'CIA AutoNorte Bogotá',
      certificateNumber: 'CERT-CIA-8854',
      date: '2024-10-02',
      attendedHours: 2
    });
    expect(comparendo.course?.certificateNumber).toBe('CERT-CIA-8854');

    // 3. Aplicar pago dentro del plazo de 5 días hábiles con curso -> 50% descuento
    comparendo = applyPaymentToComparendo(comparendo, {
      amount: 325000,
      date: '2024-10-03',
      reference: 'PSE-TRX-998822'
    });

    expect(comparendo.status).toBe('PAGADO_DESCUENTO_50');
    expect(comparendo.amountDueCop).toBe(0);
    expect(comparendo.payment?.discountApplied).toBe(50);
  });

  it('debe actualizar el comparendo a caducado o prescrito según el tiempo transcurrido', () => {
    const oldNotice = createComparendo({
      comparendoNumber: '11001000000099999999',
      infractionCode: 'C02',
      detectionType: 'AGENTE_EN_VIA',
      infractionDate: '2022-01-01T00:00:00Z',
      department: 'MEDELLIN',
      municipality: 'MEDELLIN',
      locationAddress: 'El Poblado',
      plate: 'XYZ789',
      ownerDocument: '708090100',
      ownerName: 'Empresa Demo SAS',
      officerPlateOrCameraId: 'AG-1234'
    });

    const updated = refreshComparendoStatus(oldNotice, '2024-05-01');
    expect(updated.status).toBe('CADUCADO');
  });
});
