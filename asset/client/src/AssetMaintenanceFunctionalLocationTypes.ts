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
import type { AssetMaintenanceFunctionalLocationTypesApi } from './AssetMaintenanceFunctionalLocationTypesApi';
import { NoYes } from './NoYes';
import {
  AssetMaintenanceFunctionalLocationLifecycleModels,
  AssetMaintenanceFunctionalLocationLifecycleModelsType
} from './AssetMaintenanceFunctionalLocationLifecycleModels';
import {
  AssetMaintenanceAssetTypes,
  AssetMaintenanceAssetTypesType
} from './AssetMaintenanceAssetTypes';
import {
  AssetMaintenanceFunctionalLocations,
  AssetMaintenanceFunctionalLocationsType
} from './AssetMaintenanceFunctionalLocations';
import {
  AssetMaintenanceFunctionalLocationTypeAttributeRequirements,
  AssetMaintenanceFunctionalLocationTypeAttributeRequirementsType
} from './AssetMaintenanceFunctionalLocationTypeAttributeRequirements';
import {
  AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses,
  AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesType
} from './AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses';
import {
  AssetMaintenanceFunctionalLocationAllowedByObjectTypes,
  AssetMaintenanceFunctionalLocationAllowedByObjectTypesType
} from './AssetMaintenanceFunctionalLocationAllowedByObjectTypes';
import {
  AssetMaintenanceFunctionalLocationTypePermittedSubTypes,
  AssetMaintenanceFunctionalLocationTypePermittedSubTypesType
} from './AssetMaintenanceFunctionalLocationTypePermittedSubTypes';

/**
 * This class represents the entity "AssetMaintenanceFunctionalLocationTypes" of service "d365_metadata".
 */
export class AssetMaintenanceFunctionalLocationTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceFunctionalLocationTypesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceFunctionalLocationTypes.
   */
  static override _entityName = 'AssetMaintenanceFunctionalLocationTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceFunctionalLocationTypes entity.
   */
  static _keys = ['dataAreaId', 'FunctionalLocationTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Functional Location Type Id.
   */
  declare functionalLocationTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Type Id.
   * @nullable
   */
  declare maintenanceAssetTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Update Asset Dimension.
   * @nullable
   */
  declare updateAssetDimension?: NoYes | null;
  /**
   * Allow Multiple Installed Assets.
   * @nullable
   */
  declare allowMultipleInstalledAssets?: NoYes | null;
  /**
   * Lifecycle Model Id.
   * @nullable
   */
  declare lifecycleModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFunctionalLocationLifecycleModels} entity.
   */
  declare assetMaintenanceFunctionalLocationLifecycleModel?: AssetMaintenanceFunctionalLocationLifecycleModels<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetTypes} entity.
   */
  declare assetMaintenanceAssetType?: AssetMaintenanceAssetTypes<T> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocations} entity.
   */
  declare assetMaintenanceFunctionalLocation: AssetMaintenanceFunctionalLocations<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocationTypeAttributeRequirements} entity.
   */
  declare assetMaintenanceFunctionalLocationTypeAttributeRequirement: AssetMaintenanceFunctionalLocationTypeAttributeRequirements<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses} entity.
   */
  declare assetMaintenanceFunctionalLocationTypeMaintenanceSequense: AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocationAllowedByObjectTypes} entity.
   */
  declare assetMaintenanceFunctionalLocationAllowedByObjectType: AssetMaintenanceFunctionalLocationAllowedByObjectTypes<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocationTypePermittedSubTypes} entity.
   */
  declare assetMaintenanceFunctionalLocationTypePermittedSubType: AssetMaintenanceFunctionalLocationTypePermittedSubTypes<T>[];

  constructor(_entityApi: AssetMaintenanceFunctionalLocationTypesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceFunctionalLocationTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  functionalLocationTypeId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetTypeId?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  updateAssetDimension?: NoYes | null;
  allowMultipleInstalledAssets?: NoYes | null;
  lifecycleModelId?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceFunctionalLocationLifecycleModel?: AssetMaintenanceFunctionalLocationLifecycleModelsType<T> | null;
  assetMaintenanceAssetType?: AssetMaintenanceAssetTypesType<T> | null;
  assetMaintenanceFunctionalLocation: AssetMaintenanceFunctionalLocationsType<T>[];
  assetMaintenanceFunctionalLocationTypeAttributeRequirement: AssetMaintenanceFunctionalLocationTypeAttributeRequirementsType<T>[];
  assetMaintenanceFunctionalLocationTypeMaintenanceSequense: AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesType<T>[];
  assetMaintenanceFunctionalLocationAllowedByObjectType: AssetMaintenanceFunctionalLocationAllowedByObjectTypesType<T>[];
  assetMaintenanceFunctionalLocationTypePermittedSubType: AssetMaintenanceFunctionalLocationTypePermittedSubTypesType<T>[];
}
