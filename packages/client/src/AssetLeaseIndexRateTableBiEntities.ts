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
import type { AssetLeaseIndexRateTableBiEntitiesApi } from './AssetLeaseIndexRateTableBiEntitiesApi';

/**
 * This class represents the entity "AssetLeaseIndexRateTableBiEntities" of service "d365_metadata".
 */
export class AssetLeaseIndexRateTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetLeaseIndexRateTableBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetLeaseIndexRateTableBiEntities.
   */
  static override _entityName = 'AssetLeaseIndexRateTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetLeaseIndexRateTableBiEntities entity.
   */
  static _keys = ['IndexRateType', 'ValidFrom', 'ValidTo'];
  /**
   * Index Rate Type.
   */
  declare indexRateType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Index Rate.
   */
  declare indexRate: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: AssetLeaseIndexRateTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetLeaseIndexRateTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  indexRateType: DeserializedType<T, 'Edm.Int64'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  indexRate: DeserializedType<T, 'Edm.Decimal'>;
}
