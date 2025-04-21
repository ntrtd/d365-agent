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
import type { AssetMaintenanceAssetLifecycleModelStatesApi } from './AssetMaintenanceAssetLifecycleModelStatesApi';
import {
  AssetMaintenanceAssetLifecycleStates,
  AssetMaintenanceAssetLifecycleStatesType
} from './AssetMaintenanceAssetLifecycleStates';
import {
  AssetMaintenanceAssetLifecycleModels,
  AssetMaintenanceAssetLifecycleModelsType
} from './AssetMaintenanceAssetLifecycleModels';

/**
 * This class represents the entity "AssetMaintenanceAssetLifecycleModelStates" of service "d365_metadata".
 */
export class AssetMaintenanceAssetLifecycleModelStates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetLifecycleModelStatesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetLifecycleModelStates.
   */
  static override _entityName = 'AssetMaintenanceAssetLifecycleModelStates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetLifecycleModelStates entity.
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
   * One-to-one navigation property to the {@link AssetMaintenanceAssetLifecycleStates} entity.
   */
  declare assetMaintenanceAssetLifecycleState?: AssetMaintenanceAssetLifecycleStates<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetLifecycleModels} entity.
   */
  declare assetMaintenanceAssetLifecycleModel?: AssetMaintenanceAssetLifecycleModels<T> | null;

  constructor(_entityApi: AssetMaintenanceAssetLifecycleModelStatesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetLifecycleModelStatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lifecycleModelId: DeserializedType<T, 'Edm.String'>;
  lifecycleStateId: DeserializedType<T, 'Edm.String'>;
  line: DeserializedType<T, 'Edm.Int32'>;
  assetMaintenanceAssetLifecycleState?: AssetMaintenanceAssetLifecycleStatesType<T> | null;
  assetMaintenanceAssetLifecycleModel?: AssetMaintenanceAssetLifecycleModelsType<T> | null;
}
