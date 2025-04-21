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
import type { AssetMaintenanceScheduledExecutionsApi } from './AssetMaintenanceScheduledExecutionsApi';
import { EntAssetScheduledExecutionTimePeriod } from './EntAssetScheduledExecutionTimePeriod';
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
  AssetMaintenanceWorkOrderTypes,
  AssetMaintenanceWorkOrderTypesType
} from './AssetMaintenanceWorkOrderTypes';
import {
  AssetMaintenanceModels,
  AssetMaintenanceModelsType
} from './AssetMaintenanceModels';
import {
  AssetMaintenanceJobVariants,
  AssetMaintenanceJobVariantsType
} from './AssetMaintenanceJobVariants';
import {
  AssetMaintenanceJobGroups,
  AssetMaintenanceJobGroupsType
} from './AssetMaintenanceJobGroups';

/**
 * This class represents the entity "AssetMaintenanceScheduledExecutions" of service "d365_metadata".
 */
export class AssetMaintenanceScheduledExecutions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceScheduledExecutionsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceScheduledExecutions.
   */
  static override _entityName = 'AssetMaintenanceScheduledExecutions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceScheduledExecutions entity.
   */
  static _keys = [
    'dataAreaId',
    'WorkOrderTypeId',
    'MaintenanceAssetTypeId',
    'JobGroupId',
    'JobTypeId',
    'JobTradeId',
    'JobVariantId',
    'ServiceLevel',
    'ScheduledExecution',
    'ModelId',
    'ModelProductId',
    'ProductId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Order Type Id.
   */
  declare workOrderTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Type Id.
   */
  declare maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Group Id.
   */
  declare jobGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Type Id.
   */
  declare jobTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Trade Id.
   */
  declare jobTradeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Variant Id.
   */
  declare jobVariantId: DeserializedType<T, 'Edm.String'>;
  /**
   * Service Level.
   */
  declare serviceLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Scheduled Execution.
   * @nullable
   */
  declare scheduledExecution?: EntAssetScheduledExecutionTimePeriod | null;
  /**
   * Model Id.
   */
  declare modelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Model Product Id.
   */
  declare modelProductId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Id.
   */
  declare productId: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderTypes} entity.
   */
  declare assetMaintenanceWorkOrderType?: AssetMaintenanceWorkOrderTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceModels} entity.
   */
  declare assetMaintenanceModel?: AssetMaintenanceModels<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceJobVariants} entity.
   */
  declare assetMaintenanceJobVariant?: AssetMaintenanceJobVariants<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceJobGroups} entity.
   */
  declare assetMaintenanceJobGroup?: AssetMaintenanceJobGroups<T> | null;

  constructor(_entityApi: AssetMaintenanceScheduledExecutionsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceScheduledExecutionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workOrderTypeId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>;
  jobGroupId: DeserializedType<T, 'Edm.String'>;
  jobTypeId: DeserializedType<T, 'Edm.String'>;
  jobTradeId: DeserializedType<T, 'Edm.String'>;
  jobVariantId: DeserializedType<T, 'Edm.String'>;
  serviceLevel: DeserializedType<T, 'Edm.Int32'>;
  scheduledExecution?: EntAssetScheduledExecutionTimePeriod | null;
  modelId: DeserializedType<T, 'Edm.String'>;
  modelProductId: DeserializedType<T, 'Edm.String'>;
  productId: DeserializedType<T, 'Edm.String'>;
  assetMaintenanceJobType?: AssetMaintenanceJobTypesType<T> | null;
  assetMaintenanceProduct?: AssetMaintenanceProductsType<T> | null;
  assetMaintenanceJobTrade?: AssetMaintenanceJobTradesType<T> | null;
  assetMaintenanceWorkOrderType?: AssetMaintenanceWorkOrderTypesType<T> | null;
  assetMaintenanceModel?: AssetMaintenanceModelsType<T> | null;
  assetMaintenanceJobVariant?: AssetMaintenanceJobVariantsType<T> | null;
  assetMaintenanceJobGroup?: AssetMaintenanceJobGroupsType<T> | null;
}
