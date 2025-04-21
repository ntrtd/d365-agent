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
import type { BankPaymentTransactionCodesApi } from './BankPaymentTransactionCodesApi';

/**
 * This class represents the entity "BankPaymentTransactionCodes" of service "d365_metadata".
 */
export class BankPaymentTransactionCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BankPaymentTransactionCodesType<T>
{
  /**
   * Technical entity name for BankPaymentTransactionCodes.
   */
  static override _entityName = 'BankPaymentTransactionCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BankPaymentTransactionCodes entity.
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
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BankPaymentTransactionCodesApi<T>) {
    super(_entityApi);
  }
}

export interface BankPaymentTransactionCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  code: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
