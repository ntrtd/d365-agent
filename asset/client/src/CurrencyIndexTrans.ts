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
import type { CurrencyIndexTransApi } from './CurrencyIndexTransApi';

/**
 * This class represents the entity "CurrencyIndexTrans" of service "d365_metadata".
 */
export class CurrencyIndexTrans<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CurrencyIndexTransType<T>
{
  /**
   * Technical entity name for CurrencyIndexTrans.
   */
  static override _entityName = 'CurrencyIndexTrans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CurrencyIndexTrans entity.
   */
  static _keys = ['dataAreaId', 'RuleGroup', 'InflationIndex', 'FromDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rule Group.
   */
  declare ruleGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Inflation Index.
   */
  declare inflationIndex: DeserializedType<T, 'Edm.String'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: CurrencyIndexTransApi<T>) {
    super(_entityApi);
  }
}

export interface CurrencyIndexTransType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  ruleGroup: DeserializedType<T, 'Edm.String'>;
  inflationIndex: DeserializedType<T, 'Edm.String'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
}
