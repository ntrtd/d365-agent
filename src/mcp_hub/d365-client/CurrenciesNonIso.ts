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
import type { CurrenciesNonIsoApi } from './CurrenciesNonIsoApi';
import { RoundOffType } from './RoundOffType';
import { NoYes } from './NoYes';
import { GenderMaleFemale } from './GenderMaleFemale';
import {
  ExchangeRatesNonIso,
  ExchangeRatesNonIsoType
} from './ExchangeRatesNonIso';

/**
 * This class represents the entity "CurrenciesNonISO" of service "d365_metadata".
 */
export class CurrenciesNonIso<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CurrenciesNonIsoType<T>
{
  /**
   * Technical entity name for CurrenciesNonIso.
   */
  static override _entityName = 'CurrenciesNonISO';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CurrenciesNonIso entity.
   */
  static _keys = ['CurrencyCode'];
  /**
   * Currency Code.
   */
  declare currencyCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Rounding Method Purchase Orders.
   * @nullable
   */
  declare roundingMethodPurchaseOrders?: RoundOffType | null;
  /**
   * Rounding Method Prices.
   * @nullable
   */
  declare roundingMethodPrices?: RoundOffType | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rounding Method Sales Orders.
   * @nullable
   */
  declare roundingMethodSalesOrders?: RoundOffType | null;
  /**
   * Symbol.
   * @nullable
   */
  declare symbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rounding Rule Fixed Asset Depreciation.
   */
  declare roundingRuleFixedAssetDepreciation: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Reference Currency For Triangulation.
   * @nullable
   */
  declare referenceCurrencyForTriangulation?: NoYes | null;
  /**
   * Currency Gender.
   * @nullable
   */
  declare currencyGender?: GenderMaleFemale | null;
  /**
   * Rounding Rule Purchase Orders.
   */
  declare roundingRulePurchaseOrders: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * General Rounding Rule.
   */
  declare generalRoundingRule: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rounding Method Fixed Asset Depreciation.
   * @nullable
   */
  declare roundingMethodFixedAssetDepreciation?: RoundOffType | null;
  /**
   * Rounding Rule Sales Orders.
   */
  declare roundingRuleSalesOrders: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rounding Rule Prices.
   */
  declare roundingRulePrices: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link ExchangeRatesNonIso} entity.
   */
  declare exchangeRateNonIso?: ExchangeRatesNonIso<T> | null;
  /**
   * One-to-one navigation property to the {@link ExchangeRatesNonIso} entity.
   */
  declare exchangeRateFromCurrencies?: ExchangeRatesNonIso<T> | null;

  constructor(_entityApi: CurrenciesNonIsoApi<T>) {
    super(_entityApi);
  }
}

export interface CurrenciesNonIsoType<
  T extends DeSerializers = DefaultDeSerializers
> {
  currencyCode: DeserializedType<T, 'Edm.String'>;
  roundingMethodPurchaseOrders?: RoundOffType | null;
  roundingMethodPrices?: RoundOffType | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  roundingMethodSalesOrders?: RoundOffType | null;
  symbol?: DeserializedType<T, 'Edm.String'> | null;
  roundingRuleFixedAssetDepreciation: DeserializedType<T, 'Edm.Decimal'>;
  referenceCurrencyForTriangulation?: NoYes | null;
  currencyGender?: GenderMaleFemale | null;
  roundingRulePurchaseOrders: DeserializedType<T, 'Edm.Decimal'>;
  generalRoundingRule: DeserializedType<T, 'Edm.Decimal'>;
  roundingMethodFixedAssetDepreciation?: RoundOffType | null;
  roundingRuleSalesOrders: DeserializedType<T, 'Edm.Decimal'>;
  roundingRulePrices: DeserializedType<T, 'Edm.Decimal'>;
  exchangeRateNonIso?: ExchangeRatesNonIsoType<T> | null;
  exchangeRateFromCurrencies?: ExchangeRatesNonIsoType<T> | null;
}
