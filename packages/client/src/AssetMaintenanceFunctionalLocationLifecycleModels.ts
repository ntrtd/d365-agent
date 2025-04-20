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
import type { AssetMaintenanceFunctionalLocationLifecycleModelsApi } from './AssetMaintenanceFunctionalLocationLifecycleModelsApi';
import {
  AssetMaintenanceFunctionalLocationTypes,
  AssetMaintenanceFunctionalLocationTypesType
} from './AssetMaintenanceFunctionalLocationTypes';

/**
 * This class represents the entity "AssetMaintenanceFunctionalLocationLifecycleModels" of service "d365_metadata".
 */
export class AssetMaintenanceFunctionalLocationLifecycleModels<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceFunctionalLocationLifecycleModelsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceFunctionalLocationLifecycleModels.
   */
  static override _entityName =
    'AssetMaintenanceFunctionalLocationLifecycleModels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceFunctionalLocationLifecycleModels entity.
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
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocationTypes} entity.
   */
  declare assetMaintenanceFunctionalLocationType: AssetMaintenanceFunctionalLocationTypes<T>[];

  constructor(
    _entityApi: AssetMaintenanceFunctionalLocationLifecycleModelsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceFunctionalLocationLifecycleModelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lifecycleModelId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceFunctionalLocationType: AssetMaintenanceFunctionalLocationTypesType<T>[];
}
