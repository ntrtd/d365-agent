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
import type { AssetMaintenanceAssetLifecycleModelsApi } from './AssetMaintenanceAssetLifecycleModelsApi';
import {
  AssetMaintenanceAssetLifecycleModelStates,
  AssetMaintenanceAssetLifecycleModelStatesType
} from './AssetMaintenanceAssetLifecycleModelStates';

/**
 * This class represents the entity "AssetMaintenanceAssetLifecycleModels" of service "d365_metadata".
 */
export class AssetMaintenanceAssetLifecycleModels<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetLifecycleModelsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetLifecycleModels.
   */
  static override _entityName = 'AssetMaintenanceAssetLifecycleModels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetLifecycleModels entity.
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
   * In Storage Lifecycle State Id.
   * @nullable
   */
  declare inStorageLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active Lifecycle State Id.
   * @nullable
   */
  declare activeLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inbound Lifecycle State Id.
   * @nullable
   */
  declare inboundLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * On Loan Lifecycle State Id.
   * @nullable
   */
  declare onLoanLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Received Lifecycle State Id.
   * @nullable
   */
  declare receivedLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Outbound Lifecycle State Id.
   * @nullable
   */
  declare outboundLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetLifecycleModelStates} entity.
   */
  declare assetMaintenanceAssetLifecycleModelState: AssetMaintenanceAssetLifecycleModelStates<T>[];

  constructor(_entityApi: AssetMaintenanceAssetLifecycleModelsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetLifecycleModelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lifecycleModelId: DeserializedType<T, 'Edm.String'>;
  inStorageLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  activeLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  inboundLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  onLoanLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  receivedLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  outboundLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceAssetLifecycleModelState: AssetMaintenanceAssetLifecycleModelStatesType<T>[];
}
