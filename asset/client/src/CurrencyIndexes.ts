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
import type { CurrencyIndexesApi } from './CurrencyIndexesApi';

/**
 * This class represents the entity "CurrencyIndexes" of service "d365_metadata".
 */
export class CurrencyIndexes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CurrencyIndexesType<T>
{
  /**
   * Technical entity name for CurrencyIndexes.
   */
  static override _entityName = 'CurrencyIndexes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CurrencyIndexes entity.
   */
  static _keys = ['dataAreaId', 'RuleGroup', 'InflationIndex'];
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
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CurrencyIndexesApi<T>) {
    super(_entityApi);
  }
}

export interface CurrencyIndexesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  ruleGroup: DeserializedType<T, 'Edm.String'>;
  inflationIndex: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
