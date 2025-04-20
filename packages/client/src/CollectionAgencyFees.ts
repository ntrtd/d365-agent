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
import type { CollectionAgencyFeesApi } from './CollectionAgencyFeesApi';

/**
 * This class represents the entity "CollectionAgencyFees" of service "d365_metadata".
 */
export class CollectionAgencyFees<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CollectionAgencyFeesType<T>
{
  /**
   * Technical entity name for CollectionAgencyFees.
   */
  static override _entityName = 'CollectionAgencyFees';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CollectionAgencyFees entity.
   */
  static _keys = ['CurrencyCode', 'ValidFrom', 'ValidTo'];
  /**
   * Currency Code.
   */
  declare currencyCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * To Amount.
   */
  declare toAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * From Amount.
   */
  declare fromAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Minimum Fee.
   */
  declare minimumFee: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Percent.
   */
  declare percent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Fee.
   */
  declare maximumFee: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: CollectionAgencyFeesApi<T>) {
    super(_entityApi);
  }
}

export interface CollectionAgencyFeesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  currencyCode: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  toAmount: DeserializedType<T, 'Edm.Decimal'>;
  fromAmount: DeserializedType<T, 'Edm.Decimal'>;
  minimumFee: DeserializedType<T, 'Edm.Decimal'>;
  percent: DeserializedType<T, 'Edm.Decimal'>;
  maximumFee: DeserializedType<T, 'Edm.Decimal'>;
}
