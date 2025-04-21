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
import type { AssetMajorTypesApi } from './AssetMajorTypesApi';
import { AssetTypeJp } from './AssetTypeJp';
import { FixedAssetGroups, FixedAssetGroupsType } from './FixedAssetGroups';

/**
 * This class represents the entity "AssetMajorTypes" of service "d365_metadata".
 */
export class AssetMajorTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AssetMajorTypesType<T>
{
  /**
   * Technical entity name for AssetMajorTypes.
   */
  static override _entityName = 'AssetMajorTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMajorTypes entity.
   */
  static _keys = ['dataAreaId', 'MajorTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Major Type Id.
   */
  declare majorTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Type Jp.
   * @nullable
   */
  declare assetTypeJp?: AssetTypeJp | null;
  /**
   * One-to-one navigation property to the {@link FixedAssetGroups} entity.
   */
  declare fixedAssetGroup?: FixedAssetGroups<T> | null;

  constructor(_entityApi: AssetMajorTypesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMajorTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  majorTypeId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  assetTypeJp?: AssetTypeJp | null;
  fixedAssetGroup?: FixedAssetGroupsType<T> | null;
}
