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
import type { AssetMaintenanceWorkOrderStandardDescriptionsApi } from './AssetMaintenanceWorkOrderStandardDescriptionsApi';
import {
  AssetMaintenanceWorkOrderTablesV2,
  AssetMaintenanceWorkOrderTablesV2Type
} from './AssetMaintenanceWorkOrderTablesV2';

/**
 * This class represents the entity "AssetMaintenanceWorkOrderStandardDescriptions" of service "d365_metadata".
 */
export class AssetMaintenanceWorkOrderStandardDescriptions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkOrderStandardDescriptionsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkOrderStandardDescriptions.
   */
  static override _entityName = 'AssetMaintenanceWorkOrderStandardDescriptions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkOrderStandardDescriptions entity.
   */
  static _keys = ['dataAreaId', 'Description'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   */
  declare description: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderTablesV2} entity.
   */
  declare descriptionMaintenanceWorkOrderHeaders: AssetMaintenanceWorkOrderTablesV2<T>[];

  constructor(_entityApi: AssetMaintenanceWorkOrderStandardDescriptionsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkOrderStandardDescriptionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  description: DeserializedType<T, 'Edm.String'>;
  descriptionMaintenanceWorkOrderHeaders: AssetMaintenanceWorkOrderTablesV2Type<T>[];
}
