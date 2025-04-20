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
import type { AssetMaintenanceModelsApi } from './AssetMaintenanceModelsApi';
import {
  AssetMaintenanceFunctionalLocationRounds,
  AssetMaintenanceFunctionalLocationRoundsType
} from './AssetMaintenanceFunctionalLocationRounds';
import {
  AssetMaintenanceAssetPrioritiesV2,
  AssetMaintenanceAssetPrioritiesV2Type
} from './AssetMaintenanceAssetPrioritiesV2';
import {
  AssetMaintenanceAssets,
  AssetMaintenanceAssetsType
} from './AssetMaintenanceAssets';
import {
  AssetMaintenanceScheduledExecutions,
  AssetMaintenanceScheduledExecutionsType
} from './AssetMaintenanceScheduledExecutions';
import {
  AssetMaintenanceAssetPriorities,
  AssetMaintenanceAssetPrioritiesType
} from './AssetMaintenanceAssetPriorities';
import {
  AssetMaintenanceAssetsV2,
  AssetMaintenanceAssetsV2Type
} from './AssetMaintenanceAssetsV2';
import {
  AssetMaintenanceAssetsV3,
  AssetMaintenanceAssetsV3Type
} from './AssetMaintenanceAssetsV3';
import {
  AssetMaintenanceAssetCriticalities,
  AssetMaintenanceAssetCriticalitiesType
} from './AssetMaintenanceAssetCriticalities';
import {
  AssetMaintenanceJobTypeDefaults,
  AssetMaintenanceJobTypeDefaultsType
} from './AssetMaintenanceJobTypeDefaults';
import {
  AssetMaintenanceProducts,
  AssetMaintenanceProductsType
} from './AssetMaintenanceProducts';
import {
  AssetMaintenanceAssetTypes,
  AssetMaintenanceAssetTypesType
} from './AssetMaintenanceAssetTypes';
import {
  AssetMaintenanceAssetTypeDefaults,
  AssetMaintenanceAssetTypeDefaultsType
} from './AssetMaintenanceAssetTypeDefaults';
import {
  AssetMaintenanceFunctionalLocationMaintenancePlans,
  AssetMaintenanceFunctionalLocationMaintenancePlansType
} from './AssetMaintenanceFunctionalLocationMaintenancePlans';

/**
 * This class represents the entity "AssetMaintenanceModels" of service "d365_metadata".
 */
export class AssetMaintenanceModels<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceModelsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceModels.
   */
  static override _entityName = 'AssetMaintenanceModels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceModels entity.
   */
  static _keys = ['dataAreaId', 'ProductId', 'ModelId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Id.
   */
  declare productId: DeserializedType<T, 'Edm.String'>;
  /**
   * Model Id.
   */
  declare modelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Type Id.
   * @nullable
   */
  declare maintenanceAssetTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocationRounds} entity.
   */
  declare assetMaintenanceFunctionalLocationRound: AssetMaintenanceFunctionalLocationRounds<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetPrioritiesV2} entity.
   */
  declare maintenanceAssetServiceLevelsModel: AssetMaintenanceAssetPrioritiesV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssets} entity.
   */
  declare assetMaintenanceAsset: AssetMaintenanceAssets<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceScheduledExecutions} entity.
   */
  declare assetMaintenanceScheduledExecution: AssetMaintenanceScheduledExecutions<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetPriorities} entity.
   */
  declare assetMaintenanceAssetPriority: AssetMaintenanceAssetPriorities<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetsV2} entity.
   */
  declare entAssetObjectTableEntityModel: AssetMaintenanceAssetsV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetsV3} entity.
   */
  declare entAssetObjectTableV3EntityModel: AssetMaintenanceAssetsV3<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetCriticalities} entity.
   */
  declare assetMaintenanceAssetCriticality: AssetMaintenanceAssetCriticalities<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceJobTypeDefaults} entity.
   */
  declare assetMaintenanceJobTypeDefault: AssetMaintenanceJobTypeDefaults<T>[];
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceProducts} entity.
   */
  declare assetMaintenanceProduct?: AssetMaintenanceProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetTypes} entity.
   */
  declare assetMaintenanceAssetType?: AssetMaintenanceAssetTypes<T> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetTypeDefaults} entity.
   */
  declare assetMaintenanceAssetTypeDefault: AssetMaintenanceAssetTypeDefaults<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocationMaintenancePlans} entity.
   */
  declare assetMaintenanceFunctionalLocationMaintenancePlan: AssetMaintenanceFunctionalLocationMaintenancePlans<T>[];

  constructor(_entityApi: AssetMaintenanceModelsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceModelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productId: DeserializedType<T, 'Edm.String'>;
  modelId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetTypeId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceFunctionalLocationRound: AssetMaintenanceFunctionalLocationRoundsType<T>[];
  maintenanceAssetServiceLevelsModel: AssetMaintenanceAssetPrioritiesV2Type<T>[];
  assetMaintenanceAsset: AssetMaintenanceAssetsType<T>[];
  assetMaintenanceScheduledExecution: AssetMaintenanceScheduledExecutionsType<T>[];
  assetMaintenanceAssetPriority: AssetMaintenanceAssetPrioritiesType<T>[];
  entAssetObjectTableEntityModel: AssetMaintenanceAssetsV2Type<T>[];
  entAssetObjectTableV3EntityModel: AssetMaintenanceAssetsV3Type<T>[];
  assetMaintenanceAssetCriticality: AssetMaintenanceAssetCriticalitiesType<T>[];
  assetMaintenanceJobTypeDefault: AssetMaintenanceJobTypeDefaultsType<T>[];
  assetMaintenanceProduct?: AssetMaintenanceProductsType<T> | null;
  assetMaintenanceAssetType?: AssetMaintenanceAssetTypesType<T> | null;
  assetMaintenanceAssetTypeDefault: AssetMaintenanceAssetTypeDefaultsType<T>[];
  assetMaintenanceFunctionalLocationMaintenancePlan: AssetMaintenanceFunctionalLocationMaintenancePlansType<T>[];
}
