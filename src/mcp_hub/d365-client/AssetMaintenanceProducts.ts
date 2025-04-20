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
import type { AssetMaintenanceProductsApi } from './AssetMaintenanceProductsApi';
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
  AssetMaintenanceModels,
  AssetMaintenanceModelsType
} from './AssetMaintenanceModels';
import {
  AssetMaintenanceAssetTypeDefaults,
  AssetMaintenanceAssetTypeDefaultsType
} from './AssetMaintenanceAssetTypeDefaults';
import {
  AssetMaintenanceFunctionalLocationMaintenancePlans,
  AssetMaintenanceFunctionalLocationMaintenancePlansType
} from './AssetMaintenanceFunctionalLocationMaintenancePlans';

/**
 * This class represents the entity "AssetMaintenanceProducts" of service "d365_metadata".
 */
export class AssetMaintenanceProducts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceProductsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceProducts.
   */
  static override _entityName = 'AssetMaintenanceProducts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceProducts entity.
   */
  static _keys = ['dataAreaId', 'ProductId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Id.
   */
  declare productId: DeserializedType<T, 'Edm.String'>;
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
  declare maintenanceAssetServiceLevelsProduct: AssetMaintenanceAssetPrioritiesV2<T>[];
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
  declare entAssetObjectTableEntityProduct: AssetMaintenanceAssetsV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetsV3} entity.
   */
  declare entAssetObjectTableV3EntityProduct: AssetMaintenanceAssetsV3<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetCriticalities} entity.
   */
  declare assetMaintenanceAssetCriticality: AssetMaintenanceAssetCriticalities<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceJobTypeDefaults} entity.
   */
  declare assetMaintenanceJobTypeDefault: AssetMaintenanceJobTypeDefaults<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceModels} entity.
   */
  declare assetMaintenanceModel: AssetMaintenanceModels<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetTypeDefaults} entity.
   */
  declare assetMaintenanceAssetTypeDefault: AssetMaintenanceAssetTypeDefaults<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocationMaintenancePlans} entity.
   */
  declare assetMaintenanceFunctionalLocationMaintenancePlan: AssetMaintenanceFunctionalLocationMaintenancePlans<T>[];

  constructor(_entityApi: AssetMaintenanceProductsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceProductsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceFunctionalLocationRound: AssetMaintenanceFunctionalLocationRoundsType<T>[];
  maintenanceAssetServiceLevelsProduct: AssetMaintenanceAssetPrioritiesV2Type<T>[];
  assetMaintenanceAsset: AssetMaintenanceAssetsType<T>[];
  assetMaintenanceScheduledExecution: AssetMaintenanceScheduledExecutionsType<T>[];
  assetMaintenanceAssetPriority: AssetMaintenanceAssetPrioritiesType<T>[];
  entAssetObjectTableEntityProduct: AssetMaintenanceAssetsV2Type<T>[];
  entAssetObjectTableV3EntityProduct: AssetMaintenanceAssetsV3Type<T>[];
  assetMaintenanceAssetCriticality: AssetMaintenanceAssetCriticalitiesType<T>[];
  assetMaintenanceJobTypeDefault: AssetMaintenanceJobTypeDefaultsType<T>[];
  assetMaintenanceModel: AssetMaintenanceModelsType<T>[];
  assetMaintenanceAssetTypeDefault: AssetMaintenanceAssetTypeDefaultsType<T>[];
  assetMaintenanceFunctionalLocationMaintenancePlan: AssetMaintenanceFunctionalLocationMaintenancePlansType<T>[];
}
