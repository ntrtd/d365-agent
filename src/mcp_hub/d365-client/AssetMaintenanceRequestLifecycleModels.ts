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
import type { AssetMaintenanceRequestLifecycleModelsApi } from './AssetMaintenanceRequestLifecycleModelsApi';
import {
  AssetMaintenanceRequestTypes,
  AssetMaintenanceRequestTypesType
} from './AssetMaintenanceRequestTypes';
import {
  AssetMaintenanceRequestLifecycleStates,
  AssetMaintenanceRequestLifecycleStatesType
} from './AssetMaintenanceRequestLifecycleStates';
import {
  AssetMaintenanceRequestLifecycleModelStates,
  AssetMaintenanceRequestLifecycleModelStatesType
} from './AssetMaintenanceRequestLifecycleModelStates';

/**
 * This class represents the entity "AssetMaintenanceRequestLifecycleModels" of service "d365_metadata".
 */
export class AssetMaintenanceRequestLifecycleModels<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceRequestLifecycleModelsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceRequestLifecycleModels.
   */
  static override _entityName = 'AssetMaintenanceRequestLifecycleModels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceRequestLifecycleModels entity.
   */
  static _keys = ['dataAreaId', 'RequestLifecycleModelId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Request Lifecycle Model Id.
   */
  declare requestLifecycleModelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Received Maintenance Assets Lifecycle State Id.
   * @nullable
   */
  declare receivedMaintenanceAssetsLifecycleStateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivered Maintenance Assets Lifecycle State Id.
   * @nullable
   */
  declare deliveredMaintenanceAssetsLifecycleStateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestTypes} entity.
   */
  declare assetMaintenanceRequestType: AssetMaintenanceRequestTypes<T>[];
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceRequestLifecycleStates} entity.
   */
  declare deliveredAssetRequestLifecycleState?: AssetMaintenanceRequestLifecycleStates<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceRequestLifecycleStates} entity.
   */
  declare receivedAssetRequestLifecycleState?: AssetMaintenanceRequestLifecycleStates<T> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestLifecycleModelStates} entity.
   */
  declare assetMaintenanceRequestLifecycleModelState: AssetMaintenanceRequestLifecycleModelStates<T>[];

  constructor(_entityApi: AssetMaintenanceRequestLifecycleModelsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceRequestLifecycleModelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  requestLifecycleModelId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  receivedMaintenanceAssetsLifecycleStateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  deliveredMaintenanceAssetsLifecycleStateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  assetMaintenanceRequestType: AssetMaintenanceRequestTypesType<T>[];
  deliveredAssetRequestLifecycleState?: AssetMaintenanceRequestLifecycleStatesType<T> | null;
  receivedAssetRequestLifecycleState?: AssetMaintenanceRequestLifecycleStatesType<T> | null;
  assetMaintenanceRequestLifecycleModelState: AssetMaintenanceRequestLifecycleModelStatesType<T>[];
}
