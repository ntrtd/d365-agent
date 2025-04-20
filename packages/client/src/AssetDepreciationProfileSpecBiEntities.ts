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
import type { AssetDepreciationProfileSpecBiEntitiesApi } from './AssetDepreciationProfileSpecBiEntitiesApi';

/**
 * This class represents the entity "AssetDepreciationProfileSpecBiEntities" of service "d365_metadata".
 */
export class AssetDepreciationProfileSpecBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetDepreciationProfileSpecBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetDepreciationProfileSpecBiEntities.
   */
  static override _entityName = 'AssetDepreciationProfileSpecBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetDepreciationProfileSpecBiEntities entity.
   */
  static _keys = ['dataAreaId', 'Profile', 'Interval'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Profile.
   */
  declare profile: DeserializedType<T, 'Edm.String'>;
  /**
   * Interval.
   */
  declare interval: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Percentage.
   */
  declare percentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: AssetDepreciationProfileSpecBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetDepreciationProfileSpecBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  profile: DeserializedType<T, 'Edm.String'>;
  interval: DeserializedType<T, 'Edm.Int32'>;
  percentage: DeserializedType<T, 'Edm.Decimal'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
}
