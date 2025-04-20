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
import type { AssetMaintenanceRequestLifecycleModelStateNextsApi } from './AssetMaintenanceRequestLifecycleModelStateNextsApi';

/**
 * This class represents the entity "AssetMaintenanceRequestLifecycleModelStateNexts" of service "d365_metadata".
 */
export class AssetMaintenanceRequestLifecycleModelStateNexts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceRequestLifecycleModelStateNextsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceRequestLifecycleModelStateNexts.
   */
  static override _entityName =
    'AssetMaintenanceRequestLifecycleModelStateNexts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceRequestLifecycleModelStateNexts entity.
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

  constructor(
    _entityApi: AssetMaintenanceRequestLifecycleModelStateNextsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceRequestLifecycleModelStateNextsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lifecycleStateId: DeserializedType<T, 'Edm.String'>;
  lifecycleModelId: DeserializedType<T, 'Edm.String'>;
  nextLifecycleStateId: DeserializedType<T, 'Edm.String'>;
  nextLifecycleModelId: DeserializedType<T, 'Edm.String'>;
}
