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
import type { ExchangeRatesNonIsoApi } from './ExchangeRatesNonIsoApi';
import { ExchangeRateDisplayFactor } from './ExchangeRateDisplayFactor';
import { ExchangeRateTypes, ExchangeRateTypesType } from './ExchangeRateTypes';
import { CurrenciesNonIso, CurrenciesNonIsoType } from './CurrenciesNonIso';

/**
 * This class represents the entity "ExchangeRatesNonISO" of service "d365_metadata".
 */
export class ExchangeRatesNonIso<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExchangeRatesNonIsoType<T>
{
  /**
   * Technical entity name for ExchangeRatesNonIso.
   */
  static override _entityName = 'ExchangeRatesNonISO';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExchangeRatesNonIso entity.
   */
  static _keys = ['RateTypeName', 'FromCurrency', 'ToCurrency', 'StartDate'];
  /**
   * Rate Type Name.
   */
  declare rateTypeName: DeserializedType<T, 'Edm.String'>;
  /**
   * From Currency.
   */
  declare fromCurrency: DeserializedType<T, 'Edm.String'>;
  /**
   * To Currency.
   */
  declare toCurrency: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Rate Type Description.
   * @nullable
   */
  declare rateTypeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rate.
   */
  declare rate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Conversion Factor.
   * @nullable
   */
  declare conversionFactor?: ExchangeRateDisplayFactor | null;
  /**
   * One-to-one navigation property to the {@link ExchangeRateTypes} entity.
   */
  declare exchangeRateExchangeRateType?: ExchangeRateTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link CurrenciesNonIso} entity.
   */
  declare currencyNonIso?: CurrenciesNonIso<T> | null;
  /**
   * One-to-one navigation property to the {@link CurrenciesNonIso} entity.
   */
  declare fromCurrencies?: CurrenciesNonIso<T> | null;

  constructor(_entityApi: ExchangeRatesNonIsoApi<T>) {
    super(_entityApi);
  }
}

export interface ExchangeRatesNonIsoType<
  T extends DeSerializers = DefaultDeSerializers
> {
  rateTypeName: DeserializedType<T, 'Edm.String'>;
  fromCurrency: DeserializedType<T, 'Edm.String'>;
  toCurrency: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  rateTypeDescription?: DeserializedType<T, 'Edm.String'> | null;
  rate: DeserializedType<T, 'Edm.Decimal'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  conversionFactor?: ExchangeRateDisplayFactor | null;
  exchangeRateExchangeRateType?: ExchangeRateTypesType<T> | null;
  currencyNonIso?: CurrenciesNonIsoType<T> | null;
  fromCurrencies?: CurrenciesNonIsoType<T> | null;
}
