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
import type { RAssetUsesApi } from './RAssetUsesApi';

/**
 * This class represents the entity "RAssetUses" of service "d365_metadata".
 */
export class RAssetUses<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RAssetUsesType<T>
{
  /**
   * Technical entity name for RAssetUses.
   */
  static override _entityName = 'RAssetUses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RAssetUses entity.
   */
  static _keys = ['dataAreaId', 'FAInventoryNumber', 'Period'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fa Inventory Number.
   */
  declare faInventoryNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Period.
   */
  declare period: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Output Run Nontaxable.
   */
  declare outputRunNontaxable: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Output Run Export.
   */
  declare outputRunExport: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Output Mileage.
   */
  declare outputMileage: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RAssetUsesApi<T>) {
    super(_entityApi);
  }
}

export interface RAssetUsesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  faInventoryNumber: DeserializedType<T, 'Edm.String'>;
  period: DeserializedType<T, 'Edm.DateTimeOffset'>;
  outputRunNontaxable: DeserializedType<T, 'Edm.Decimal'>;
  outputRunExport: DeserializedType<T, 'Edm.Decimal'>;
  outputMileage: DeserializedType<T, 'Edm.Decimal'>;
}
