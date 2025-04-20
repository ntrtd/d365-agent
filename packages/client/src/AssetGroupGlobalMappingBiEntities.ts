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
import type { AssetGroupGlobalMappingBiEntitiesApi } from './AssetGroupGlobalMappingBiEntitiesApi';

/**
 * This class represents the entity "AssetGroupGlobalMappingBiEntities" of service "d365_metadata".
 */
export class AssetGroupGlobalMappingBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetGroupGlobalMappingBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetGroupGlobalMappingBiEntities.
   */
  static override _entityName = 'AssetGroupGlobalMappingBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetGroupGlobalMappingBiEntities entity.
   */
  static _keys = ['SourceKey'];
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Group Id.
   * @nullable
   */
  declare groupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Asset Group Global.
   */
  declare assetGroupGlobal: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Group Data Area Id.
   * @nullable
   */
  declare groupDataAreaId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AssetGroupGlobalMappingBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetGroupGlobalMappingBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  groupId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  legalEntity: DeserializedType<T, 'Edm.Int64'>;
  assetGroupGlobal: DeserializedType<T, 'Edm.Int64'>;
  groupDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
}
