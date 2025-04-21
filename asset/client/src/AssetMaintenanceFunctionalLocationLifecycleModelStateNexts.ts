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
import type { AssetMaintenanceFunctionalLocationLifecycleModelStateNextsApi } from './AssetMaintenanceFunctionalLocationLifecycleModelStateNextsApi';

/**
 * This class represents the entity "AssetMaintenanceFunctionalLocationLifecycleModelStateNexts" of service "d365_metadata".
 */
export class AssetMaintenanceFunctionalLocationLifecycleModelStateNexts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceFunctionalLocationLifecycleModelStateNextsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceFunctionalLocationLifecycleModelStateNexts.
   */
  static override _entityName =
    'AssetMaintenanceFunctionalLocationLifecycleModelStateNexts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceFunctionalLocationLifecycleModelStateNexts entity.
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

  constructor(
    _entityApi: AssetMaintenanceFunctionalLocationLifecycleModelStateNextsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceFunctionalLocationLifecycleModelStateNextsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lifecycleModelId: DeserializedType<T, 'Edm.String'>;
  lifecycleStateId: DeserializedType<T, 'Edm.String'>;
  nextLifecycleModelId: DeserializedType<T, 'Edm.String'>;
  nextLifecycleStateId: DeserializedType<T, 'Edm.String'>;
}
