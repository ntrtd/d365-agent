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
import type { AssetMaintenanceAssetLifecycleStatesApi } from './AssetMaintenanceAssetLifecycleStatesApi';
import { NoYes } from './NoYes';
import {
  AssetMaintenanceAssetLifecycleModelStates,
  AssetMaintenanceAssetLifecycleModelStatesType
} from './AssetMaintenanceAssetLifecycleModelStates';
import {
  AssetMaintenanceAssets,
  AssetMaintenanceAssetsType
} from './AssetMaintenanceAssets';
import {
  AssetMaintenanceWorkOrderLifecycleStates,
  AssetMaintenanceWorkOrderLifecycleStatesType
} from './AssetMaintenanceWorkOrderLifecycleStates';
import {
  AssetMaintenanceAssetsV2,
  AssetMaintenanceAssetsV2Type
} from './AssetMaintenanceAssetsV2';
import {
  AssetMaintenanceAssetsV3,
  AssetMaintenanceAssetsV3Type
} from './AssetMaintenanceAssetsV3';

/**
 * This class represents the entity "AssetMaintenanceAssetLifecycleStates" of service "d365_metadata".
 */
export class AssetMaintenanceAssetLifecycleStates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetLifecycleStatesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetLifecycleStates.
   */
  static override _entityName = 'AssetMaintenanceAssetLifecycleStates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetLifecycleStates entity.
   */
  static _keys = ['dataAreaId', 'LifecycleStateId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Lifecycle State Id.
   */
  declare lifecycleStateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maintenance Asset Active.
   * @nullable
   */
  declare maintenanceAssetActive?: NoYes | null;
  /**
   * Delete Open Calendar Lines.
   * @nullable
   */
  declare deleteOpenCalendarLines?: NoYes | null;
  /**
   * Line.
   */
  declare line: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetLifecycleModelStates} entity.
   */
  declare assetMaintenanceAssetLifecycleModelState: AssetMaintenanceAssetLifecycleModelStates<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssets} entity.
   */
  declare assetMaintenanceAsset: AssetMaintenanceAssets<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderLifecycleStates} entity.
   */
  declare assetMaintenanceWorkOrderLifecycleState: AssetMaintenanceWorkOrderLifecycleStates<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetsV2} entity.
   */
  declare entAssetObjectTableEntityLifecycleState: AssetMaintenanceAssetsV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetsV3} entity.
   */
  declare entAssetObjectTableV3EntityLifecycleState: AssetMaintenanceAssetsV3<T>[];

  constructor(_entityApi: AssetMaintenanceAssetLifecycleStatesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetLifecycleStatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lifecycleStateId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceAssetActive?: NoYes | null;
  deleteOpenCalendarLines?: NoYes | null;
  line: DeserializedType<T, 'Edm.Int32'>;
  assetMaintenanceAssetLifecycleModelState: AssetMaintenanceAssetLifecycleModelStatesType<T>[];
  assetMaintenanceAsset: AssetMaintenanceAssetsType<T>[];
  assetMaintenanceWorkOrderLifecycleState: AssetMaintenanceWorkOrderLifecycleStatesType<T>[];
  entAssetObjectTableEntityLifecycleState: AssetMaintenanceAssetsV2Type<T>[];
  entAssetObjectTableV3EntityLifecycleState: AssetMaintenanceAssetsV3Type<T>[];
}
