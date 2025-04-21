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
import type { SalesTaxExchangeRateTypeCurrenciesApi } from './SalesTaxExchangeRateTypeCurrenciesApi';
import { TransactionType } from './TransactionType';

/**
 * This class represents the entity "SalesTaxExchangeRateTypeCurrencies" of service "d365_metadata".
 */
export class SalesTaxExchangeRateTypeCurrencies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesTaxExchangeRateTypeCurrenciesType<T>
{
  /**
   * Technical entity name for SalesTaxExchangeRateTypeCurrencies.
   */
  static override _entityName = 'SalesTaxExchangeRateTypeCurrencies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesTaxExchangeRateTypeCurrencies entity.
   */
  static _keys = ['dataAreaId', 'Ledger', 'Currency', 'TransactionType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ledger.
   */
  declare ledger: DeserializedType<T, 'Edm.String'>;
  /**
   * Currency.
   */
  declare currency: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: TransactionType | null;
  /**
   * Exchange Rate Type.
   * @nullable
   */
  declare exchangeRateType?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SalesTaxExchangeRateTypeCurrenciesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesTaxExchangeRateTypeCurrenciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  ledger: DeserializedType<T, 'Edm.String'>;
  currency: DeserializedType<T, 'Edm.String'>;
  transactionType?: TransactionType | null;
  exchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
}
