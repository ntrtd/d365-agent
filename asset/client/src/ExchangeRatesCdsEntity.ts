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
import type { ExchangeRatesCdsEntityApi } from './ExchangeRatesCdsEntityApi';
import { ExchangeRateTypes, ExchangeRateTypesType } from './ExchangeRateTypes';
import { Currencies, CurrenciesType } from './Currencies';
import {
  ExchangeRateCurrencyPairs,
  ExchangeRateCurrencyPairsType
} from './ExchangeRateCurrencyPairs';

/**
 * This class represents the entity "ExchangeRatesCDSEntity" of service "d365_metadata".
 */
export class ExchangeRatesCdsEntity<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExchangeRatesCdsEntityType<T>
{
  /**
   * Technical entity name for ExchangeRatesCdsEntity.
   */
  static override _entityName = 'ExchangeRatesCDSEntity';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExchangeRatesCdsEntity entity.
   */
  static _keys = [
    'ExchangeRateTypeName',
    'FromCurrencyCode',
    'ToCurrencyCode',
    'ValidFrom'
  ];
  /**
   * Exchange Rate Type Name.
   */
  declare exchangeRateTypeName: DeserializedType<T, 'Edm.String'>;
  /**
   * From Currency Code.
   */
  declare fromCurrencyCode: DeserializedType<T, 'Edm.String'>;
  /**
   * To Currency Code.
   */
  declare toCurrencyCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Rate.
   */
  declare rate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link ExchangeRateTypes} entity.
   */
  declare exchangeRateExchangeRateType?: ExchangeRateTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link ExchangeRateCurrencyPairs} entity.
   */
  declare exchangeRateCurrencyPair?: ExchangeRateCurrencyPairs<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare fromCurrencies?: Currencies<T> | null;

  constructor(_entityApi: ExchangeRatesCdsEntityApi<T>) {
    super(_entityApi);
  }
}

export interface ExchangeRatesCdsEntityType<
  T extends DeSerializers = DefaultDeSerializers
> {
  exchangeRateTypeName: DeserializedType<T, 'Edm.String'>;
  fromCurrencyCode: DeserializedType<T, 'Edm.String'>;
  toCurrencyCode: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  rate: DeserializedType<T, 'Edm.Decimal'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exchangeRateExchangeRateType?: ExchangeRateTypesType<T> | null;
  currency?: CurrenciesType<T> | null;
  exchangeRateCurrencyPair?: ExchangeRateCurrencyPairsType<T> | null;
  fromCurrencies?: CurrenciesType<T> | null;
}
