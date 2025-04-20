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
import type { AssetMaintenanceCriticalitiesApi } from './AssetMaintenanceCriticalitiesApi';
import {
  AssetMaintenanceWorkOrderTablesV2,
  AssetMaintenanceWorkOrderTablesV2Type
} from './AssetMaintenanceWorkOrderTablesV2';

/**
 * This class represents the entity "AssetMaintenanceCriticalities" of service "d365_metadata".
 */
export class AssetMaintenanceCriticalities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceCriticalitiesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceCriticalities.
   */
  static override _entityName = 'AssetMaintenanceCriticalities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceCriticalities entity.
   */
  static _keys = ['dataAreaId', 'Criticality', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Criticality.
   */
  declare criticality: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Rating Factor.
   */
  declare ratingFactor: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderTablesV2} entity.
   */
  declare criticalityMaintenanceWorkOrderHeaders: AssetMaintenanceWorkOrderTablesV2<T>[];

  constructor(_entityApi: AssetMaintenanceCriticalitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceCriticalitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  criticality: DeserializedType<T, 'Edm.Int32'>;
  name: DeserializedType<T, 'Edm.String'>;
  ratingFactor: DeserializedType<T, 'Edm.Int32'>;
  criticalityMaintenanceWorkOrderHeaders: AssetMaintenanceWorkOrderTablesV2Type<T>[];
}
