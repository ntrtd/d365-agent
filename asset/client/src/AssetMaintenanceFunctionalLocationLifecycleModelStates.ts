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
import type { AssetMaintenanceFunctionalLocationLifecycleModelStatesApi } from './AssetMaintenanceFunctionalLocationLifecycleModelStatesApi';

/**
 * This class represents the entity "AssetMaintenanceFunctionalLocationLifecycleModelStates" of service "d365_metadata".
 */
export class AssetMaintenanceFunctionalLocationLifecycleModelStates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceFunctionalLocationLifecycleModelStatesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceFunctionalLocationLifecycleModelStates.
   */
  static override _entityName =
    'AssetMaintenanceFunctionalLocationLifecycleModelStates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceFunctionalLocationLifecycleModelStates entity.
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

  constructor(
    _entityApi: AssetMaintenanceFunctionalLocationLifecycleModelStatesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceFunctionalLocationLifecycleModelStatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lifecycleModelId: DeserializedType<T, 'Edm.String'>;
  lifecycleStateId: DeserializedType<T, 'Edm.String'>;
  line: DeserializedType<T, 'Edm.Int32'>;
}
