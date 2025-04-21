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
import type { AssetLeaseIndexRateTypeBiEntitiesApi } from './AssetLeaseIndexRateTypeBiEntitiesApi';
import { AssetLeaseIndexRateMethod } from './AssetLeaseIndexRateMethod';

/**
 * This class represents the entity "AssetLeaseIndexRateTypeBiEntities" of service "d365_metadata".
 */
export class AssetLeaseIndexRateTypeBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetLeaseIndexRateTypeBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetLeaseIndexRateTypeBiEntities.
   */
  static override _entityName = 'AssetLeaseIndexRateTypeBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetLeaseIndexRateTypeBiEntities entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Index Rate Method.
   * @nullable
   */
  declare indexRateMethod?: AssetLeaseIndexRateMethod | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AssetLeaseIndexRateTypeBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetLeaseIndexRateTypeBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  indexRateMethod?: AssetLeaseIndexRateMethod | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
