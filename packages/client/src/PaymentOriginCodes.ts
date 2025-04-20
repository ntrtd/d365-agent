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
import type { PaymentOriginCodesApi } from './PaymentOriginCodesApi';

/**
 * This class represents the entity "PaymentOriginCodes" of service "d365_metadata".
 */
export class PaymentOriginCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PaymentOriginCodesType<T>
{
  /**
   * Technical entity name for PaymentOriginCodes.
   */
  static override _entityName = 'PaymentOriginCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PaymentOriginCodes entity.
   */
  static _keys = ['dataAreaId', 'Code'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Code.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PaymentOriginCodesApi<T>) {
    super(_entityApi);
  }
}

export interface PaymentOriginCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
