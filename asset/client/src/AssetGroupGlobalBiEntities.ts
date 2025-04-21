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
import type { AssetGroupGlobalBiEntitiesApi } from './AssetGroupGlobalBiEntitiesApi';

/**
 * This class represents the entity "AssetGroupGlobalBiEntities" of service "d365_metadata".
 */
export class AssetGroupGlobalBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetGroupGlobalBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetGroupGlobalBiEntities.
   */
  static override _entityName = 'AssetGroupGlobalBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetGroupGlobalBiEntities entity.
   */
  static _keys = ['GroupId'];
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: AssetGroupGlobalBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetGroupGlobalBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  groupId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
}
