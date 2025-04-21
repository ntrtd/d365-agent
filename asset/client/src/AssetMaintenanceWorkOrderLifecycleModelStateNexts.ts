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
import type { AssetMaintenanceWorkOrderLifecycleModelStateNextsApi } from './AssetMaintenanceWorkOrderLifecycleModelStateNextsApi';

/**
 * This class represents the entity "AssetMaintenanceWorkOrderLifecycleModelStateNexts" of service "d365_metadata".
 */
export class AssetMaintenanceWorkOrderLifecycleModelStateNexts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkOrderLifecycleModelStateNextsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkOrderLifecycleModelStateNexts.
   */
  static override _entityName =
    'AssetMaintenanceWorkOrderLifecycleModelStateNexts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkOrderLifecycleModelStateNexts entity.
   */
  static _keys = [
    'dataAreaId',
    'LifecycleModelId',
    'LifecycleStateId',
    'NextLifecycleModelId',
    'NextLifecycleStateId'
  ];
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
   * Next Lifecycle Model Id.
   */
  declare nextLifecycleModelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Next Lifecycle State Id.
   */
  declare nextLifecycleStateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Lifecycle State Line Number.
   */
  declare lifecycleStateLineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Next Lifecycle State Line Number.
   */
  declare nextLifecycleStateLineNumber: DeserializedType<T, 'Edm.Int32'>;

  constructor(
    _entityApi: AssetMaintenanceWorkOrderLifecycleModelStateNextsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkOrderLifecycleModelStateNextsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lifecycleModelId: DeserializedType<T, 'Edm.String'>;
  lifecycleStateId: DeserializedType<T, 'Edm.String'>;
  nextLifecycleModelId: DeserializedType<T, 'Edm.String'>;
  nextLifecycleStateId: DeserializedType<T, 'Edm.String'>;
  lifecycleStateLineNumber: DeserializedType<T, 'Edm.Int32'>;
  nextLifecycleStateLineNumber: DeserializedType<T, 'Edm.Int32'>;
}
