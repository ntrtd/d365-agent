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
import type { AssetLeaseLocationDetailsBiEntitiesApi } from './AssetLeaseLocationDetailsBiEntitiesApi';

/**
 * This class represents the entity "AssetLeaseLocationDetailsBiEntities" of service "d365_metadata".
 */
export class AssetLeaseLocationDetailsBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetLeaseLocationDetailsBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetLeaseLocationDetailsBiEntities.
   */
  static override _entityName = 'AssetLeaseLocationDetailsBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetLeaseLocationDetailsBiEntities entity.
   */
  static _keys = ['dataAreaId', 'LocationNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Location Number.
   */
  declare locationNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Location Name.
   * @nullable
   */
  declare locationName?: DeserializedType<T, 'Edm.String'> | null;
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

  constructor(_entityApi: AssetLeaseLocationDetailsBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetLeaseLocationDetailsBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  locationNumber: DeserializedType<T, 'Edm.String'>;
  locationName?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
}
