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
import type { CashBalancesApi } from './CashBalancesApi';

/**
 * This class represents the entity "CashBalances" of service "d365_metadata".
 */
export class CashBalances<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CashBalancesType<T>
{
  /**
   * Technical entity name for CashBalances.
   */
  static override _entityName = 'CashBalances';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CashBalances entity.
   */
  static _keys = ['dataAreaId', 'Cash', 'Currency'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cash.
   */
  declare cash: DeserializedType<T, 'Edm.String'>;
  /**
   * Currency.
   */
  declare currency: DeserializedType<T, 'Edm.String'>;
  /**
   * Amount In Transaction Currency.
   */
  declare amountInTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Main Account Id.
   */
  declare mainAccountId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exchange Rate Adjustment Amount.
   */
  declare exchangeRateAdjustmentAmount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: CashBalancesApi<T>) {
    super(_entityApi);
  }
}

export interface CashBalancesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  cash: DeserializedType<T, 'Edm.String'>;
  currency: DeserializedType<T, 'Edm.String'>;
  amountInTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  mainAccountId: DeserializedType<T, 'Edm.Int64'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  exchangeRateAdjustmentAmount: DeserializedType<T, 'Edm.Decimal'>;
}
