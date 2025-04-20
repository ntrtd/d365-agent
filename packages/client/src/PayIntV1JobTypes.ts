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
import type { PayIntV1JobTypesApi } from './PayIntV1JobTypesApi';
import { NoYes } from './NoYes';
import { HcmJobTypeExemptStatus } from './HcmJobTypeExemptStatus';

/**
 * This class represents the entity "PayIntV1JobTypes" of service "d365_metadata".
 */
export class PayIntV1JobTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PayIntV1JobTypesType<T>
{
  /**
   * Technical entity name for PayIntV1JobTypes.
   */
  static override _entityName = 'PayIntV1JobTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1JobTypes entity.
   */
  static _keys = ['JobTypeId'];
  /**
   * Job Type Id.
   */
  declare jobTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * System Modified Date Time.
   */
  declare systemModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * System Modified By.
   * @nullable
   */
  declare systemModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * System Created By.
   * @nullable
   */
  declare systemCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paid Hourly.
   * @nullable
   */
  declare paidHourly?: NoYes | null;
  /**
   * System Created Date Time.
   */
  declare systemCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Exempt Status.
   * @nullable
   */
  declare exemptStatus?: HcmJobTypeExemptStatus | null;

  constructor(_entityApi: PayIntV1JobTypesApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1JobTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobTypeId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  systemModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  systemModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  systemCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  paidHourly?: NoYes | null;
  systemCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exemptStatus?: HcmJobTypeExemptStatus | null;
}
