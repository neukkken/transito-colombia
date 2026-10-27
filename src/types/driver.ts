export type LicenseCategory =
  | 'A1'
  | 'A2'
  | 'B1'
  | 'B2'
  | 'B3'
  | 'C1'
  | 'C2'
  | 'C3';

export type DocumentType =
  | 'CC'
  | 'CE'
  | 'PASAPORTE'
  | 'TI'
  | 'PPT'
  | 'NIT';

export type LicenseStatus =
  | 'ACTIVA'
  | 'SUSPENDIDA'
  | 'CANCELADA'
  | 'VENCIDA';

export interface LicenseRecord {
  category: LicenseCategory;
  expeditionDate: string;
  expirationDate: string;
  issuingAgency?: string;
  status: LicenseStatus;
}

export interface DriverUser {
  documentType: DocumentType;
  documentNumber: string;
  fullName: string;
  email?: string;
  phone?: string;
  address?: string;
  notificationCity?: string;
  birthDate?: string;
  licenses: LicenseRecord[];
  isSuspended: boolean;
  suspensionEndDate?: string;
  activeViolationsCount: number;
}

export interface LicenseValidityCalculation {
  isValid: boolean;
  yearsGranted: number;
  expectedExpirationDate: string;
  requiresRenewal: boolean;
  ageAtIssuance: number;
  reason: string;
}
