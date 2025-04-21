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
import type { ExchangeRateCurrencyPairBiEntitiesApi } from './ExchangeRateCurrencyPairBiEntitiesApi';
import { ExchangeRateDisplayFactor } from './ExchangeRateDisplayFactor';

/**
 * This class represents the entity "ExchangeRateCurrencyPairBiEntities" of service "d365_metadata".
 */
export class ExchangeRateCurrencyPairBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExchangeRateCurrencyPairBiEntitiesType<T>
{
  /**
   * Technical entity name for ExchangeRateCurrencyPairBiEntities.
   */
  static override _entityName = 'ExchangeRateCurrencyPairBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExchangeRateCurrencyPairBiEntities entity.
   */
  static _keys = ['FromCurrencyCode', 'ToCurrencyCode', 'ExchangeRateType'];
  /**
   * From Currency Code.
   */
  declare fromCurrencyCode: DeserializedType<T, 'Edm.String'>;
  /**
   * To Currency Code.
   */
  declare toCurrencyCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Exchange Rate Type.
   */
  declare exchangeRateType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Exchange Rate Display Factor.
   * @nullable
   */
  declare exchangeRateDisplayFactor?: ExchangeRateDisplayFactor | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: ExchangeRateCurrencyPairBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ExchangeRateCurrencyPairBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  fromCurrencyCode: DeserializedType<T, 'Edm.String'>;
  toCurrencyCode: DeserializedType<T, 'Edm.String'>;
  exchangeRateType: DeserializedType<T, 'Edm.Int64'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  exchangeRateDisplayFactor?: ExchangeRateDisplayFactor | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
