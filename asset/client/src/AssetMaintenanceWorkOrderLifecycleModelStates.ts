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
import type { AssetMaintenanceWorkOrderLifecycleModelStatesApi } from './AssetMaintenanceWorkOrderLifecycleModelStatesApi';
import {
  AssetMaintenanceWorkOrderLifecycleModels,
  AssetMaintenanceWorkOrderLifecycleModelsType
} from './AssetMaintenanceWorkOrderLifecycleModels';
import {
  AssetMaintenanceWorkOrderLifecycleStates,
  AssetMaintenanceWorkOrderLifecycleStatesType
} from './AssetMaintenanceWorkOrderLifecycleStates';

/**
 * This class represents the entity "AssetMaintenanceWorkOrderLifecycleModelStates" of service "d365_metadata".
 */
export class AssetMaintenanceWorkOrderLifecycleModelStates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkOrderLifecycleModelStatesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkOrderLifecycleModelStates.
   */
  static override _entityName = 'AssetMaintenanceWorkOrderLifecycleModelStates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkOrderLifecycleModelStates entity.
   */
  static _keys = ['dataAreaId', 'LifecycleModelId', 'LifecycleStateId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Lifecycle Model Id.
   */
  declare lifecycleModelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Lifecycle State Id.
   */
  declare lifecycleStateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line.
   */
  declare line: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderLifecycleModels} entity.
   */
  declare assetMaintenanceWorkOrderLifecycleModel?: AssetMaintenanceWorkOrderLifecycleModels<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderLifecycleStates} entity.
   */
  declare assetMaintenanceWorkOrderLifecycleState?: AssetMaintenanceWorkOrderLifecycleStates<T> | null;

  constructor(_entityApi: AssetMaintenanceWorkOrderLifecycleModelStatesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkOrderLifecycleModelStatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lifecycleModelId: DeserializedType<T, 'Edm.String'>;
  lifecycleStateId: DeserializedType<T, 'Edm.String'>;
  line: DeserializedType<T, 'Edm.Int32'>;
  assetMaintenanceWorkOrderLifecycleModel?: AssetMaintenanceWorkOrderLifecycleModelsType<T> | null;
  assetMaintenanceWorkOrderLifecycleState?: AssetMaintenanceWorkOrderLifecycleStatesType<T> | null;
}
