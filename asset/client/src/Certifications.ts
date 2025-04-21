/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { CertificationsApi } from './CertificationsApi';
import { NoYes } from './NoYes';
import { CertificationOrigin } from './CertificationOrigin';
import { CertificationReviewed } from './CertificationReviewed';

/**
 * This class represents the entity "Certifications" of service "d365_metadata".
 */
export class Certifications<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CertificationsType<T>
{
  /**
   * Technical entity name for Certifications.
   */
  static override _entityName = 'Certifications';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Certifications entity.
   */
  static _keys = [];
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Liability Amount Psn.
   */
  declare liabilityAmountPsn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Valid From Date.
   */
  declare validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Certification Type.
   * @nullable
   */
  declare certificationType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Certification Date.
   */
  declare certificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Certification Number.
   * @nullable
   */
  declare certificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Issuer Party Party Number.
   * @nullable
   */
  declare issuerPartyPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Due Date Psn.
   */
  declare dueDatePsn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Certificate Received.
   * @nullable
   */
  declare certificateReceived?: NoYes | null;
  /**
   * Certification Origin.
   * @nullable
   */
  declare certificationOrigin?: CertificationOrigin | null;
  /**
   * Valid To Date.
   */
  declare validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Comments Psn.
   * @nullable
   */
  declare commentsPsn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Party.
   */
  declare vendParty: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reviewed.
   * @nullable
   */
  declare reviewed?: CertificationReviewed | null;
  /**
   * Data Area Id.
   * @nullable
   */
  declare dataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Process Psn.
   * @nullable
   */
  declare inProcessPsn?: NoYes | null;

  constructor(_entityApi: CertificationsApi<T>) {
    super(_entityApi);
  }
}

export interface CertificationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name?: DeserializedType<T, 'Edm.String'> | null;
  liabilityAmountPsn: DeserializedType<T, 'Edm.Decimal'>;
  validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  certificationType?: DeserializedType<T, 'Edm.String'> | null;
  certificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  certificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  issuerPartyPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  dueDatePsn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  certificateReceived?: NoYes | null;
  certificationOrigin?: CertificationOrigin | null;
  validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  commentsPsn?: DeserializedType<T, 'Edm.String'> | null;
  vendParty: DeserializedType<T, 'Edm.Int64'>;
  reviewed?: CertificationReviewed | null;
  dataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  inProcessPsn?: NoYes | null;
}
