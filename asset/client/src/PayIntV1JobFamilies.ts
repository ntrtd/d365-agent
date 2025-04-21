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
import type { PayIntV1JobFamiliesApi } from './PayIntV1JobFamiliesApi';

/**
 * This class represents the entity "PayIntV1JobFamilies" of service "d365_metadata".
 */
export class PayIntV1JobFamilies<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PayIntV1JobFamiliesType<T>
{
  /**
   * Technical entity name for PayIntV1JobFamilies.
   */
  static override _entityName = 'PayIntV1JobFamilies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1JobFamilies entity.
   */
  static _keys = ['JobFamilyId'];
  /**
   * Job Family Id.
   */
  declare jobFamilyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PayIntV1JobFamiliesApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1JobFamiliesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobFamilyId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
