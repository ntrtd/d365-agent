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
import type { CertificationsV2Api } from './CertificationsV2Api';
import { NoYes } from './NoYes';
import { CertificationOrigin } from './CertificationOrigin';
import { CertificationReviewed } from './CertificationReviewed';

/**
 * This class represents the entity "CertificationsV2" of service "d365_metadata".
 */
export class CertificationsV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CertificationsV2Type<T>
{
  /**
   * Technical entity name for CertificationsV2.
   */
  static override _entityName = 'CertificationsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CertificationsV2 entity.
   */
  static _keys = [];
  /**
   * Certification Number.
   * @nullable
   */
  declare certificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Name.
   * @nullable
   */
  declare vendorName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Certificate Received.
   * @nullable
   */
  declare certificateReceived?: NoYes | null;
  /**
   * Valid From Date.
   */
  declare validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Comments Psn.
   * @nullable
   */
  declare commentsPsn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Area Id.
   * @nullable
   */
  declare dataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Certification Origin.
   * @nullable
   */
  declare certificationOrigin?: CertificationOrigin | null;
  /**
   * Certification Date.
   */
  declare certificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vendor Party Number.
   * @nullable
   */
  declare vendorPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Process Psn.
   * @nullable
   */
  declare inProcessPsn?: NoYes | null;
  /**
   * Certification Type.
   * @nullable
   */
  declare certificationType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Due Date Psn.
   */
  declare dueDatePsn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Liability Amount Psn.
   */
  declare liabilityAmountPsn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reviewed.
   * @nullable
   */
  declare reviewed?: CertificationReviewed | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To Date.
   */
  declare validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Issuer Party Party Number.
   * @nullable
   */
  declare issuerPartyPartyNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CertificationsV2Api<T>) {
    super(_entityApi);
  }
}

export interface CertificationsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  certificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  vendorName?: DeserializedType<T, 'Edm.String'> | null;
  certificateReceived?: NoYes | null;
  validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  commentsPsn?: DeserializedType<T, 'Edm.String'> | null;
  dataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  certificationOrigin?: CertificationOrigin | null;
  certificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendorPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  inProcessPsn?: NoYes | null;
  certificationType?: DeserializedType<T, 'Edm.String'> | null;
  dueDatePsn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  liabilityAmountPsn: DeserializedType<T, 'Edm.Decimal'>;
  reviewed?: CertificationReviewed | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  issuerPartyPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
}
