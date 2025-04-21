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
import type { AssetMaintenanceFunctionalLocationRoundsApi } from './AssetMaintenanceFunctionalLocationRoundsApi';
import { DayWeekMonthQuarterYear } from './DayWeekMonthQuarterYear';
import {
  AssetMaintenanceRounds,
  AssetMaintenanceRoundsType
} from './AssetMaintenanceRounds';
import {
  AssetMaintenanceJobTypes,
  AssetMaintenanceJobTypesType
} from './AssetMaintenanceJobTypes';
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
  AssetMaintenanceFunctionalLocations,
  AssetMaintenanceFunctionalLocationsType
} from './AssetMaintenanceFunctionalLocations';
import {
  AssetMaintenanceAssetTypes,
  AssetMaintenanceAssetTypesType
} from './AssetMaintenanceAssetTypes';

/**
 * This class represents the entity "AssetMaintenanceFunctionalLocationRounds" of service "d365_metadata".
 */
export class AssetMaintenanceFunctionalLocationRounds<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceFunctionalLocationRoundsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceFunctionalLocationRounds.
   */
  static override _entityName = 'AssetMaintenanceFunctionalLocationRounds';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceFunctionalLocationRounds entity.
   */
  static _keys = [
    'dataAreaId',
    'FunctionalLocationId',
    'MaintenanceAssetTypeId',
    'ProductId',
    'ModelProductId',
    'ModelId',
    'RoundId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Functional Location Id.
   */
  declare functionalLocationId: DeserializedType<T, 'Edm.String'>;
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
   * Round Id.
   */
  declare roundId: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Type.
   * @nullable
   */
  declare periodType?: DayWeekMonthQuarterYear | null;
  /**
   * Job Variant Id.
   * @nullable
   */
  declare jobVariantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period Length.
   */
  declare periodLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Job Type Id.
   * @nullable
   */
  declare jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Trade Id.
   * @nullable
   */
  declare jobTradeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceRounds} entity.
   */
  declare assetMaintenanceRound?: AssetMaintenanceRounds<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceJobTypes} entity.
   */
  declare assetMaintenanceJobType?: AssetMaintenanceJobTypes<T> | null;
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
   * One-to-one navigation property to the {@link AssetMaintenanceFunctionalLocations} entity.
   */
  declare assetMaintenanceFunctionalLocation?: AssetMaintenanceFunctionalLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetTypes} entity.
   */
  declare assetMaintenanceAssetType?: AssetMaintenanceAssetTypes<T> | null;

  constructor(_entityApi: AssetMaintenanceFunctionalLocationRoundsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceFunctionalLocationRoundsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  functionalLocationId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  productId: DeserializedType<T, 'Edm.String'>;
  modelProductId: DeserializedType<T, 'Edm.String'>;
  modelId: DeserializedType<T, 'Edm.String'>;
  roundId: DeserializedType<T, 'Edm.String'>;
  periodType?: DayWeekMonthQuarterYear | null;
  jobVariantId?: DeserializedType<T, 'Edm.String'> | null;
  periodLength: DeserializedType<T, 'Edm.Int32'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  jobTradeId?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceRound?: AssetMaintenanceRoundsType<T> | null;
  assetMaintenanceJobType?: AssetMaintenanceJobTypesType<T> | null;
  assetMaintenanceProduct?: AssetMaintenanceProductsType<T> | null;
  assetMaintenanceJobTrade?: AssetMaintenanceJobTradesType<T> | null;
  assetMaintenanceModel?: AssetMaintenanceModelsType<T> | null;
  assetMaintenanceJobVariant?: AssetMaintenanceJobVariantsType<T> | null;
  assetMaintenanceFunctionalLocation?: AssetMaintenanceFunctionalLocationsType<T> | null;
  assetMaintenanceAssetType?: AssetMaintenanceAssetTypesType<T> | null;
}
