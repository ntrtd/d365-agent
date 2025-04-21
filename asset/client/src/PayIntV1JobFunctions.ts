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
import type { PayIntV1JobFunctionsApi } from './PayIntV1JobFunctionsApi';
import { HcmRegulatoryJobCategory } from './HcmRegulatoryJobCategory';

/**
 * This class represents the entity "PayIntV1JobFunctions" of service "d365_metadata".
 */
export class PayIntV1JobFunctions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1JobFunctionsType<T>
{
  /**
   * Technical entity name for PayIntV1JobFunctions.
   */
  static override _entityName = 'PayIntV1JobFunctions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1JobFunctions entity.
   */
  static _keys = ['JobFunctionId'];
  /**
   * Job Function Id.
   */
  declare jobFunctionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Regulatory Job Category.
   * @nullable
   */
  declare regulatoryJobCategory?: HcmRegulatoryJobCategory | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PayIntV1JobFunctionsApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1JobFunctionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobFunctionId: DeserializedType<T, 'Edm.String'>;
  regulatoryJobCategory?: HcmRegulatoryJobCategory | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
