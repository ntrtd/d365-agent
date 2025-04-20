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
import type { AssetMaintenanceWorkOrderPoolRelationsApi } from './AssetMaintenanceWorkOrderPoolRelationsApi';

/**
 * This class represents the entity "AssetMaintenanceWorkOrderPoolRelations" of service "d365_metadata".
 */
export class AssetMaintenanceWorkOrderPoolRelations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkOrderPoolRelationsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkOrderPoolRelations.
   */
  static override _entityName = 'AssetMaintenanceWorkOrderPoolRelations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkOrderPoolRelations entity.
   */
  static _keys = ['dataAreaId', 'WorkOrderPoolId', 'WorkOrderId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Order Pool Id.
   */
  declare workOrderPoolId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Order Id.
   */
  declare workOrderId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sorting Number.
   */
  declare sortingNumber: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: AssetMaintenanceWorkOrderPoolRelationsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkOrderPoolRelationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workOrderPoolId: DeserializedType<T, 'Edm.String'>;
  workOrderId: DeserializedType<T, 'Edm.String'>;
  sortingNumber: DeserializedType<T, 'Edm.Int32'>;
}
