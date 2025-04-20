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
import type { AssetUndepreciatedBalanceSchedulesApi } from './AssetUndepreciatedBalanceSchedulesApi';
import { AssetDepreciationMethod } from './AssetDepreciationMethod';

/**
 * This class represents the entity "AssetUndepreciatedBalanceSchedules" of service "d365_metadata".
 */
export class AssetUndepreciatedBalanceSchedules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetUndepreciatedBalanceSchedulesType<T>
{
  /**
   * Technical entity name for AssetUndepreciatedBalanceSchedules.
   */
  static override _entityName = 'AssetUndepreciatedBalanceSchedules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetUndepreciatedBalanceSchedules entity.
   */
  static _keys = [
    'dataAreaId',
    'FromMethod',
    'ToMethod',
    'ServiceLife',
    'YearsPassed'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * From Method.
   * @nullable
   */
  declare fromMethod?: AssetDepreciationMethod | null;
  /**
   * To Method.
   * @nullable
   */
  declare toMethod?: AssetDepreciationMethod | null;
  /**
   * Service Life.
   */
  declare serviceLife: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Years Passed.
   */
  declare yearsPassed: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Upper Limit Rate.
   */
  declare upperLimitRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Schedule Description.
   * @nullable
   */
  declare scheduleDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lower Limit Rate.
   */
  declare lowerLimitRate: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: AssetUndepreciatedBalanceSchedulesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetUndepreciatedBalanceSchedulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fromMethod?: AssetDepreciationMethod | null;
  toMethod?: AssetDepreciationMethod | null;
  serviceLife: DeserializedType<T, 'Edm.Decimal'>;
  yearsPassed: DeserializedType<T, 'Edm.Decimal'>;
  upperLimitRate: DeserializedType<T, 'Edm.Decimal'>;
  scheduleDescription?: DeserializedType<T, 'Edm.String'> | null;
  lowerLimitRate: DeserializedType<T, 'Edm.Decimal'>;
}
