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
import type { RateCurrencyPairCalculationRulesApi } from './RateCurrencyPairCalculationRulesApi';
import { TableAll } from './TableAll';

/**
 * This class represents the entity "RateCurrencyPairCalculationRules" of service "d365_metadata".
 */
export class RateCurrencyPairCalculationRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RateCurrencyPairCalculationRulesType<T>
{
  /**
   * Technical entity name for RateCurrencyPairCalculationRules.
   */
  static override _entityName = 'RateCurrencyPairCalculationRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RateCurrencyPairCalculationRules entity.
   */
  static _keys = ['ExchangeRateType', 'Company', 'FromCurrency', 'ToCurrency'];
  /**
   * Exchange Rate Type.
   */
  declare exchangeRateType: DeserializedType<T, 'Edm.String'>;
  /**
   * Company.
   */
  declare company: DeserializedType<T, 'Edm.String'>;
  /**
   * From Currency.
   */
  declare fromCurrency: DeserializedType<T, 'Edm.String'>;
  /**
   * To Currency.
   */
  declare toCurrency: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid For Company.
   * @nullable
   */
  declare validForCompany?: TableAll | null;
  /**
   * Valid For Exchange Rate Type.
   * @nullable
   */
  declare validForExchangeRateType?: TableAll | null;
  /**
   * Triangulation Currency.
   * @nullable
   */
  declare triangulationCurrency?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RateCurrencyPairCalculationRulesApi<T>) {
    super(_entityApi);
  }
}

export interface RateCurrencyPairCalculationRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  exchangeRateType: DeserializedType<T, 'Edm.String'>;
  company: DeserializedType<T, 'Edm.String'>;
  fromCurrency: DeserializedType<T, 'Edm.String'>;
  toCurrency: DeserializedType<T, 'Edm.String'>;
  validForCompany?: TableAll | null;
  validForExchangeRateType?: TableAll | null;
  triangulationCurrency?: DeserializedType<T, 'Edm.String'> | null;
}
