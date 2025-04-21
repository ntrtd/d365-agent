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
import type { PaymTransCodesApi } from './PaymTransCodesApi';

/**
 * This class represents the entity "PaymTransCodes" of service "d365_metadata".
 */
export class PaymTransCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PaymTransCodesType<T>
{
  /**
   * Technical entity name for PaymTransCodes.
   */
  static override _entityName = 'PaymTransCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PaymTransCodes entity.
   */
  static _keys = ['dataAreaId', 'PaymentTransactionCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Transaction Code.
   */
  declare paymentTransactionCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PaymTransCodesApi<T>) {
    super(_entityApi);
  }
}

export interface PaymTransCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  paymentTransactionCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
