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
import type { CustBalanceStatsApi } from './CustBalanceStatsApi';

/**
 * This class represents the entity "CustBalanceStats" of service "d365_metadata".
 */
export class CustBalanceStats<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustBalanceStatsType<T>
{
  /**
   * Technical entity name for CustBalanceStats.
   */
  static override _entityName = 'CustBalanceStats';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustBalanceStats entity.
   */
  static _keys = ['dataAreaId', 'CustAccount', 'BalanceDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cust Account.
   */
  declare custAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Balance Date.
   */
  declare balanceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Credit Limit.
   */
  declare creditLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exposure.
   */
  declare exposure: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Balance.
   */
  declare balance: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: CustBalanceStatsApi<T>) {
    super(_entityApi);
  }
}

export interface CustBalanceStatsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  custAccount: DeserializedType<T, 'Edm.String'>;
  balanceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  creditLimit: DeserializedType<T, 'Edm.Decimal'>;
  exposure: DeserializedType<T, 'Edm.Decimal'>;
  balance: DeserializedType<T, 'Edm.Decimal'>;
}
