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
import type { AssetLeaseBookGroupRelationBiEntitiesApi } from './AssetLeaseBookGroupRelationBiEntitiesApi';

/**
 * This class represents the entity "AssetLeaseBookGroupRelationBiEntities" of service "d365_metadata".
 */
export class AssetLeaseBookGroupRelationBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetLeaseBookGroupRelationBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetLeaseBookGroupRelationBiEntities.
   */
  static override _entityName = 'AssetLeaseBookGroupRelationBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetLeaseBookGroupRelationBiEntities entity.
   */
  static _keys = ['dataAreaId', 'Key'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
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
  /**
   * Group Table.
   */
  declare groupTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Book Table.
   */
  declare bookTable: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: AssetLeaseBookGroupRelationBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetLeaseBookGroupRelationBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  key: DeserializedType<T, 'Edm.Int32'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  groupTable: DeserializedType<T, 'Edm.Int64'>;
  bookTable: DeserializedType<T, 'Edm.Int64'>;
}
