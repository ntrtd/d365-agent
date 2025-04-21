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
import type { AssetLocationBiEntitiesApi } from './AssetLocationBiEntitiesApi';

/**
 * This class represents the entity "AssetLocationBiEntities" of service "d365_metadata".
 */
export class AssetLocationBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetLocationBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetLocationBiEntities.
   */
  static override _entityName = 'AssetLocationBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetLocationBiEntities entity.
   */
  static _keys = ['dataAreaId', 'Location'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Location.
   */
  declare location: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Registration Jp.
   */
  declare taxRegistrationJp: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Logistics Location.
   */
  declare logisticsLocation: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AssetLocationBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetLocationBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  location: DeserializedType<T, 'Edm.String'>;
  taxRegistrationJp: DeserializedType<T, 'Edm.Int64'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  logisticsLocation: DeserializedType<T, 'Edm.Int64'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
