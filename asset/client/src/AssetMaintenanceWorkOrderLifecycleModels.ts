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
import type { AssetMaintenanceWorkOrderLifecycleModelsApi } from './AssetMaintenanceWorkOrderLifecycleModelsApi';
import {
  AssetMaintenanceWorkOrderLifecycleModelStates,
  AssetMaintenanceWorkOrderLifecycleModelStatesType
} from './AssetMaintenanceWorkOrderLifecycleModelStates';

/**
 * This class represents the entity "AssetMaintenanceWorkOrderLifecycleModels" of service "d365_metadata".
 */
export class AssetMaintenanceWorkOrderLifecycleModels<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkOrderLifecycleModelsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkOrderLifecycleModels.
   */
  static override _entityName = 'AssetMaintenanceWorkOrderLifecycleModels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkOrderLifecycleModels entity.
   */
  static _keys = ['dataAreaId', 'LifecycleModelId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Lifecycle Model Id.
   */
  declare lifecycleModelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scheduled Lifecycle State Id.
   * @nullable
   */
  declare scheduledLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderLifecycleModelStates} entity.
   */
  declare assetMaintenanceWorkOrderLifecycleModelState: AssetMaintenanceWorkOrderLifecycleModelStates<T>[];

  constructor(_entityApi: AssetMaintenanceWorkOrderLifecycleModelsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkOrderLifecycleModelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lifecycleModelId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  scheduledLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceWorkOrderLifecycleModelState: AssetMaintenanceWorkOrderLifecycleModelStatesType<T>[];
}
