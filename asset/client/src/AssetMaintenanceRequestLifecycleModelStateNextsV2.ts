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
import type { AssetMaintenanceRequestLifecycleModelStateNextsV2Api } from './AssetMaintenanceRequestLifecycleModelStateNextsV2Api';
import {
  AssetMaintenanceRequestLifecycleModelStates,
  AssetMaintenanceRequestLifecycleModelStatesType
} from './AssetMaintenanceRequestLifecycleModelStates';

/**
 * This class represents the entity "AssetMaintenanceRequestLifecycleModelStateNextsV2" of service "d365_metadata".
 */
export class AssetMaintenanceRequestLifecycleModelStateNextsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceRequestLifecycleModelStateNextsV2Type<T>
{
  /**
   * Technical entity name for AssetMaintenanceRequestLifecycleModelStateNextsV2.
   */
  static override _entityName =
    'AssetMaintenanceRequestLifecycleModelStateNextsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceRequestLifecycleModelStateNextsV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'LifecycleStateId',
    'LifecycleModelId',
    'NextLifecycleStateId',
    'NextLifecycleModelId'
  ];
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
   * Next Lifecycle State Id.
   */
  declare nextLifecycleStateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Next Lifecycle Model Id.
   */
  declare nextLifecycleModelId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceRequestLifecycleModelStates} entity.
   */
  declare nextRequestLifecycleModelState?: AssetMaintenanceRequestLifecycleModelStates<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceRequestLifecycleModelStates} entity.
   */
  declare currentRequestLifecycleModelState?: AssetMaintenanceRequestLifecycleModelStates<T> | null;

  constructor(
    _entityApi: AssetMaintenanceRequestLifecycleModelStateNextsV2Api<T>
  ) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceRequestLifecycleModelStateNextsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lifecycleStateId: DeserializedType<T, 'Edm.String'>;
  lifecycleModelId: DeserializedType<T, 'Edm.String'>;
  nextLifecycleStateId: DeserializedType<T, 'Edm.String'>;
  nextLifecycleModelId: DeserializedType<T, 'Edm.String'>;
  nextRequestLifecycleModelState?: AssetMaintenanceRequestLifecycleModelStatesType<T> | null;
  currentRequestLifecycleModelState?: AssetMaintenanceRequestLifecycleModelStatesType<T> | null;
}
