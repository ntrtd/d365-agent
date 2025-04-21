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
import type { PayIntV1HcmEmploymentTermsApi } from './PayIntV1HcmEmploymentTermsApi';

/**
 * This class represents the entity "PayIntV1HcmEmploymentTerms" of service "d365_metadata".
 */
export class PayIntV1HcmEmploymentTerms<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1HcmEmploymentTermsType<T>
{
  /**
   * Technical entity name for PayIntV1HcmEmploymentTerms.
   */
  static override _entityName = 'PayIntV1HcmEmploymentTerms';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1HcmEmploymentTerms entity.
   */
  static _keys = [
    'ValidTo',
    'AgreementTermId',
    'LegalEntityId',
    'PersonnelNumber',
    'EmploymentStartDate',
    'EmploymentEndDate',
    'ValidFrom'
  ];
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Agreement Term Id.
   */
  declare agreementTermId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Employment Start Date.
   */
  declare employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Employment End Date.
   */
  declare employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: PayIntV1HcmEmploymentTermsApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1HcmEmploymentTermsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  agreementTermId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
