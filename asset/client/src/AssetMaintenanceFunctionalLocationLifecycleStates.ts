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
import type { AssetMaintenanceFunctionalLocationLifecycleStatesApi } from './AssetMaintenanceFunctionalLocationLifecycleStatesApi';
import { NoYes } from './NoYes';
import {
  AssetMaintenanceFunctionalLocations,
  AssetMaintenanceFunctionalLocationsType
} from './AssetMaintenanceFunctionalLocations';

/**
 * This class represents the entity "AssetMaintenanceFunctionalLocationLifecycleStates" of service "d365_metadata".
 */
export class AssetMaintenanceFunctionalLocationLifecycleStates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceFunctionalLocationLifecycleStatesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceFunctionalLocationLifecycleStates.
   */
  static override _entityName =
    'AssetMaintenanceFunctionalLocationLifecycleStates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceFunctionalLocationLifecycleStates entity.
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
   * Allow New Sub Locations.
   * @nullable
   */
  declare allowNewSubLocations?: NoYes | null;
  /**
   * Allow Delete Location.
   * @nullable
   */
  declare allowDeleteLocation?: NoYes | null;
  /**
   * Create Location Maintenance Asset.
   * @nullable
   */
  declare createLocationMaintenanceAsset?: NoYes | null;
  /**
   * Functional Location Active.
   * @nullable
   */
  declare functionalLocationActive?: NoYes | null;
  /**
   * Allow Rename Location.
   * @nullable
   */
  declare allowRenameLocation?: NoYes | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Install Maintenance Assets.
   * @nullable
   */
  declare allowInstallMaintenanceAssets?: NoYes | null;
  /**
   * Maintenance Asset Lifecycle State Id.
   * @nullable
   */
  declare maintenanceAssetLifecycleStateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFunctionalLocations} entity.
   */
  declare assetMaintenanceFunctionalLocation?: AssetMaintenanceFunctionalLocations<T> | null;

  constructor(
    _entityApi: AssetMaintenanceFunctionalLocationLifecycleStatesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceFunctionalLocationLifecycleStatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lifecycleStateId: DeserializedType<T, 'Edm.String'>;
  allowNewSubLocations?: NoYes | null;
  allowDeleteLocation?: NoYes | null;
  createLocationMaintenanceAsset?: NoYes | null;
  functionalLocationActive?: NoYes | null;
  allowRenameLocation?: NoYes | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  allowInstallMaintenanceAssets?: NoYes | null;
  maintenanceAssetLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceFunctionalLocation?: AssetMaintenanceFunctionalLocationsType<T> | null;
}
