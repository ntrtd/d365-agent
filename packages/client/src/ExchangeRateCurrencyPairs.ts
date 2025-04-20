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
import type { ExchangeRateCurrencyPairsApi } from './ExchangeRateCurrencyPairsApi';
import { ExchangeRateDisplayFactor } from './ExchangeRateDisplayFactor';
import { ExchangeRateTypes, ExchangeRateTypesType } from './ExchangeRateTypes';
import {
  ExchangeRatesCdsEntity,
  ExchangeRatesCdsEntityType
} from './ExchangeRatesCdsEntity';

/**
 * This class represents the entity "ExchangeRateCurrencyPairs" of service "d365_metadata".
 */
export class ExchangeRateCurrencyPairs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExchangeRateCurrencyPairsType<T>
{
  /**
   * Technical entity name for ExchangeRateCurrencyPairs.
   */
  static override _entityName = 'ExchangeRateCurrencyPairs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExchangeRateCurrencyPairs entity.
   */
  static _keys = ['FromCurrencyCode', 'ToCurrencyCode', 'ExchangeRateTypeName'];
  /**
   * From Currency Code.
   */
  declare fromCurrencyCode: DeserializedType<T, 'Edm.String'>;
  /**
   * To Currency Code.
   */
  declare toCurrencyCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Exchange Rate Type Name.
   */
  declare exchangeRateTypeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Exchange Rate Display Factor.
   * @nullable
   */
  declare exchangeRateDisplayFactor?: ExchangeRateDisplayFactor | null;
  /**
   * One-to-one navigation property to the {@link ExchangeRateTypes} entity.
   */
  declare exchangeRateType?: ExchangeRateTypes<T> | null;
  /**
   * One-to-many navigation property to the {@link ExchangeRatesCdsEntity} entity.
   */
  declare exchangeRateCurrencyPairExchangeRate: ExchangeRatesCdsEntity<T>[];

  constructor(_entityApi: ExchangeRateCurrencyPairsApi<T>) {
    super(_entityApi);
  }
}

export interface ExchangeRateCurrencyPairsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  fromCurrencyCode: DeserializedType<T, 'Edm.String'>;
  toCurrencyCode: DeserializedType<T, 'Edm.String'>;
  exchangeRateTypeName: DeserializedType<T, 'Edm.String'>;
  exchangeRateDisplayFactor?: ExchangeRateDisplayFactor | null;
  exchangeRateType?: ExchangeRateTypesType<T> | null;
  exchangeRateCurrencyPairExchangeRate: ExchangeRatesCdsEntityType<T>[];
}
