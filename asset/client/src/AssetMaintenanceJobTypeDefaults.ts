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
import type { AssetMaintenanceJobTypeDefaultsApi } from './AssetMaintenanceJobTypeDefaultsApi';
import {
  AssetMaintenanceJobTypeDefaultDescriptions,
  AssetMaintenanceJobTypeDefaultDescriptionsType
} from './AssetMaintenanceJobTypeDefaultDescriptions';
import {
  AssetMaintenanceChecklistTemplates,
  AssetMaintenanceChecklistTemplatesType
} from './AssetMaintenanceChecklistTemplates';
import {
  AssetMaintenanceJobTypes,
  AssetMaintenanceJobTypesType
} from './AssetMaintenanceJobTypes';
import {
  AssetMaintenanceAssetsV3,
  AssetMaintenanceAssetsV3Type
} from './AssetMaintenanceAssetsV3';
import {
  AssetMaintenanceProducts,
  AssetMaintenanceProductsType
} from './AssetMaintenanceProducts';
import {
  AssetMaintenanceJobTrades,
  AssetMaintenanceJobTradesType
} from './AssetMaintenanceJobTrades';
import {
  AssetMaintenanceModels,
  AssetMaintenanceModelsType
} from './AssetMaintenanceModels';
import {
  AssetMaintenanceJobVariants,
  AssetMaintenanceJobVariantsType
} from './AssetMaintenanceJobVariants';
import {
  AssetMaintenanceAssets,
  AssetMaintenanceAssetsType
} from './AssetMaintenanceAssets';
import {
  AssetMaintenanceFunctionalLocations,
  AssetMaintenanceFunctionalLocationsType
} from './AssetMaintenanceFunctionalLocations';
import {
  AssetMaintenanceAssetTypes,
  AssetMaintenanceAssetTypesType
} from './AssetMaintenanceAssetTypes';

/**
 * This class represents the entity "AssetMaintenanceJobTypeDefaults" of service "d365_metadata".
 */
export class AssetMaintenanceJobTypeDefaults<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceJobTypeDefaultsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceJobTypeDefaults.
   */
  static override _entityName = 'AssetMaintenanceJobTypeDefaults';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceJobTypeDefaults entity.
   */
  static _keys = [
    'dataAreaId',
    'MaintenanceAssetTypeId',
    'ProductId',
    'ModelProductId',
    'ModelId',
    'MaintenanceAssetId',
    'JobTypeId',
    'JobVariantId',
    'JobTradeId',
    'FunctionalLocationId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Type Id.
   */
  declare maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Id.
   */
  declare productId: DeserializedType<T, 'Edm.String'>;
  /**
   * Model Product Id.
   */
  declare modelProductId: DeserializedType<T, 'Edm.String'>;
  /**
   * Model Id.
   */
  declare modelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Id.
   */
  declare maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Type Id.
   */
  declare jobTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Variant Id.
   */
  declare jobVariantId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Trade Id.
   */
  declare jobTradeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Functional Location Id.
   */
  declare functionalLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Hour Qty.
   */
  declare forecastHourQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceJobTypeDefaultDescriptions} entity.
   */
  declare assetMaintenanceJobTypeDefaultDescription: AssetMaintenanceJobTypeDefaultDescriptions<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceChecklistTemplates} entity.
   */
  declare assetMaintenanceChecklistTemplate: AssetMaintenanceChecklistTemplates<T>[];
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceJobTypes} entity.
   */
  declare assetMaintenanceJobType?: AssetMaintenanceJobTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetsV3} entity.
   */
  declare maintenanceAssetV3?: AssetMaintenanceAssetsV3<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceProducts} entity.
   */
  declare assetMaintenanceProduct?: AssetMaintenanceProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceJobTrades} entity.
   */
  declare assetMaintenanceJobTrade?: AssetMaintenanceJobTrades<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceModels} entity.
   */
  declare assetMaintenanceModel?: AssetMaintenanceModels<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceJobVariants} entity.
   */
  declare assetMaintenanceJobVariant?: AssetMaintenanceJobVariants<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssets} entity.
   */
  declare assetMaintenanceAsset?: AssetMaintenanceAssets<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFunctionalLocations} entity.
   */
  declare assetMaintenanceFunctionalLocation?: AssetMaintenanceFunctionalLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetTypes} entity.
   */
  declare assetMaintenanceAssetType?: AssetMaintenanceAssetTypes<T> | null;

  constructor(_entityApi: AssetMaintenanceJobTypeDefaultsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceJobTypeDefaultsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  productId: DeserializedType<T, 'Edm.String'>;
  modelProductId: DeserializedType<T, 'Edm.String'>;
  modelId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  jobTypeId: DeserializedType<T, 'Edm.String'>;
  jobVariantId: DeserializedType<T, 'Edm.String'>;
  jobTradeId: DeserializedType<T, 'Edm.String'>;
  functionalLocationId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  forecastHourQty: DeserializedType<T, 'Edm.Decimal'>;
  assetMaintenanceJobTypeDefaultDescription: AssetMaintenanceJobTypeDefaultDescriptionsType<T>[];
  assetMaintenanceChecklistTemplate: AssetMaintenanceChecklistTemplatesType<T>[];
  assetMaintenanceJobType?: AssetMaintenanceJobTypesType<T> | null;
  maintenanceAssetV3?: AssetMaintenanceAssetsV3Type<T> | null;
  assetMaintenanceProduct?: AssetMaintenanceProductsType<T> | null;
  assetMaintenanceJobTrade?: AssetMaintenanceJobTradesType<T> | null;
  assetMaintenanceModel?: AssetMaintenanceModelsType<T> | null;
  assetMaintenanceJobVariant?: AssetMaintenanceJobVariantsType<T> | null;
  assetMaintenanceAsset?: AssetMaintenanceAssetsType<T> | null;
  assetMaintenanceFunctionalLocation?: AssetMaintenanceFunctionalLocationsType<T> | null;
  assetMaintenanceAssetType?: AssetMaintenanceAssetTypesType<T> | null;
}
