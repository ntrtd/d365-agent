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
import type { PayIntV1EmploymentsV2Api } from './PayIntV1EmploymentsV2Api';
import { HcmEmploymentType } from './HcmEmploymentType';

/**
 * This class represents the entity "PayIntV1EmploymentsV2" of service "d365_metadata".
 */
export class PayIntV1EmploymentsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1EmploymentsV2Type<T>
{
  /**
   * Technical entity name for PayIntV1EmploymentsV2.
   */
  static override _entityName = 'PayIntV1EmploymentsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1EmploymentsV2 entity.
   */
  static _keys = ['PersonnelNumber', 'LegalEntityId', 'EmploymentId'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Employment Id.
   */
  declare employmentId: DeserializedType<T, 'Edm.String'>;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Regulatory Establishment Id.
   * @nullable
   */
  declare regulatoryEstablishmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employment Start Date.
   */
  declare employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Worker Type.
   * @nullable
   */
  declare workerType?: HcmEmploymentType | null;
  /**
   * Employment End Date.
   */
  declare employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: PayIntV1EmploymentsV2Api<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1EmploymentsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  employmentId: DeserializedType<T, 'Edm.String'>;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  regulatoryEstablishmentId?: DeserializedType<T, 'Edm.String'> | null;
  employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerType?: HcmEmploymentType | null;
  employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
