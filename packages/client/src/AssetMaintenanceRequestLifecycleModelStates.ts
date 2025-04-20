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
import type { AssetMaintenanceRequestLifecycleModelStatesApi } from './AssetMaintenanceRequestLifecycleModelStatesApi';
import {
  AssetMaintenanceRequestLifecycleModelStateNextsV2,
  AssetMaintenanceRequestLifecycleModelStateNextsV2Type
} from './AssetMaintenanceRequestLifecycleModelStateNextsV2';
import {
  AssetMaintenanceRequestLifecycleModels,
  AssetMaintenanceRequestLifecycleModelsType
} from './AssetMaintenanceRequestLifecycleModels';
import {
  AssetMaintenanceRequestLifecycleStates,
  AssetMaintenanceRequestLifecycleStatesType
} from './AssetMaintenanceRequestLifecycleStates';

/**
 * This class represents the entity "AssetMaintenanceRequestLifecycleModelStates" of service "d365_metadata".
 */
export class AssetMaintenanceRequestLifecycleModelStates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceRequestLifecycleModelStatesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceRequestLifecycleModelStates.
   */
  static override _entityName = 'AssetMaintenanceRequestLifecycleModelStates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceRequestLifecycleModelStates entity.
   */
  static _keys = ['dataAreaId', 'LifecycleStateId', 'LifecycleModelId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Lifecycle State Id.
   */
  declare lifecycleStateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Lifecycle Model Id.
   */
  declare lifecycleModelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line.
   */
  declare line: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestLifecycleModelStateNextsV2} entity.
   */
  declare nextLifecycleModelStateRequestLifecycleModelStateSequence: AssetMaintenanceRequestLifecycleModelStateNextsV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestLifecycleModelStateNextsV2} entity.
   */
  declare lifecycleModelStateRequestLifecycleModelStateSequence: AssetMaintenanceRequestLifecycleModelStateNextsV2<T>[];
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceRequestLifecycleModels} entity.
   */
  declare assetMaintenanceRequestLifecycleModel?: AssetMaintenanceRequestLifecycleModels<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceRequestLifecycleStates} entity.
   */
  declare assetMaintenanceRequestLifecycleState?: AssetMaintenanceRequestLifecycleStates<T> | null;

  constructor(_entityApi: AssetMaintenanceRequestLifecycleModelStatesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceRequestLifecycleModelStatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lifecycleStateId: DeserializedType<T, 'Edm.String'>;
  lifecycleModelId: DeserializedType<T, 'Edm.String'>;
  line: DeserializedType<T, 'Edm.Int32'>;
  nextLifecycleModelStateRequestLifecycleModelStateSequence: AssetMaintenanceRequestLifecycleModelStateNextsV2Type<T>[];
  lifecycleModelStateRequestLifecycleModelStateSequence: AssetMaintenanceRequestLifecycleModelStateNextsV2Type<T>[];
  assetMaintenanceRequestLifecycleModel?: AssetMaintenanceRequestLifecycleModelsType<T> | null;
  assetMaintenanceRequestLifecycleState?: AssetMaintenanceRequestLifecycleStatesType<T> | null;
}
