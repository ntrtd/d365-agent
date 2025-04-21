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
import type { AssetMaintenanceJobTradesApi } from './AssetMaintenanceJobTradesApi';
import {
  AssetMaintenanceFunctionalLocationRounds,
  AssetMaintenanceFunctionalLocationRoundsType
} from './AssetMaintenanceFunctionalLocationRounds';
import {
  AssetMaintenanceJobTypeSucceedJobTypes,
  AssetMaintenanceJobTypeSucceedJobTypesType
} from './AssetMaintenanceJobTypeSucceedJobTypes';
import {
  AssetMaintenanceRequests,
  AssetMaintenanceRequestsType
} from './AssetMaintenanceRequests';
import {
  AssetMaintenanceAssetRounds,
  AssetMaintenanceAssetRoundsType
} from './AssetMaintenanceAssetRounds';
import {
  AssetMaintenancePlanWorkOrderLines,
  AssetMaintenancePlanWorkOrderLinesType
} from './AssetMaintenancePlanWorkOrderLines';
import {
  AssetMaintenanceWorkOrderLines,
  AssetMaintenanceWorkOrderLinesType
} from './AssetMaintenanceWorkOrderLines';
import {
  AssetMaintenanceScheduledExecutions,
  AssetMaintenanceScheduledExecutionsType
} from './AssetMaintenanceScheduledExecutions';
import {
  AssetMaintenanceWorkOrderLinesV2,
  AssetMaintenanceWorkOrderLinesV2Type
} from './AssetMaintenanceWorkOrderLinesV2';
import {
  AssetMaintenanceAssetCriticalities,
  AssetMaintenanceAssetCriticalitiesType
} from './AssetMaintenanceAssetCriticalities';
import {
  AssetMaintenanceJobTypeDefaults,
  AssetMaintenanceJobTypeDefaultsType
} from './AssetMaintenanceJobTypeDefaults';
import {
  AssetMaintenanceUnplannedWorkOrderLines,
  AssetMaintenanceUnplannedWorkOrderLinesType
} from './AssetMaintenanceUnplannedWorkOrderLines';
import {
  AssetMaintenanceRoundWorkOrderLines,
  AssetMaintenanceRoundWorkOrderLinesType
} from './AssetMaintenanceRoundWorkOrderLines';
import {
  AssetMaintenanceWorkersResponsible,
  AssetMaintenanceWorkersResponsibleType
} from './AssetMaintenanceWorkersResponsible';
import {
  AssetMaintenanceRequestWorkOrderLines,
  AssetMaintenanceRequestWorkOrderLinesType
} from './AssetMaintenanceRequestWorkOrderLines';
import {
  AssetMaintenanceAssetCalendars,
  AssetMaintenanceAssetCalendarsType
} from './AssetMaintenanceAssetCalendars';
import {
  AssetMaintenanceRequestsV2,
  AssetMaintenanceRequestsV2Type
} from './AssetMaintenanceRequestsV2';

/**
 * This class represents the entity "AssetMaintenanceJobTrades" of service "d365_metadata".
 */
export class AssetMaintenanceJobTrades<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceJobTradesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceJobTrades.
   */
  static override _entityName = 'AssetMaintenanceJobTrades';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceJobTrades entity.
   */
  static _keys = ['dataAreaId', 'JobTradeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Trade Id.
   */
  declare jobTradeId: DeserializedType<T, 'Edm.String'>;
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
   * One-to-many navigation property to the {@link AssetMaintenanceJobTypeSucceedJobTypes} entity.
   */
  declare assetMaintenanceJobTypeSucceedJobType: AssetMaintenanceJobTypeSucceedJobTypes<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequests} entity.
   */
  declare maintenanceRequests: AssetMaintenanceRequests<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetRounds} entity.
   */
  declare assetMaintenanceAssetRound: AssetMaintenanceAssetRounds<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenancePlanWorkOrderLines} entity.
   */
  declare jobTradeMaintenancePlanWorkOrderJobs: AssetMaintenancePlanWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderLines} entity.
   */
  declare assetMaintenanceWorkOrderLine: AssetMaintenanceWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceScheduledExecutions} entity.
   */
  declare assetMaintenanceScheduledExecution: AssetMaintenanceScheduledExecutions<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderLinesV2} entity.
   */
  declare jobTradeMaintenanceWorkOrderJobs: AssetMaintenanceWorkOrderLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetCriticalities} entity.
   */
  declare assetMaintenanceAssetCriticality: AssetMaintenanceAssetCriticalities<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceJobTypeDefaults} entity.
   */
  declare assetMaintenanceJobTypeDefault: AssetMaintenanceJobTypeDefaults<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceUnplannedWorkOrderLines} entity.
   */
  declare jobTradeMaintenanceUnplannedWorkOrderJobs: AssetMaintenanceUnplannedWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRoundWorkOrderLines} entity.
   */
  declare jobTradeMaintenanceRoundWorkOrderJobs: AssetMaintenanceRoundWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkersResponsible} entity.
   */
  declare assetMaintenanceWorkerResponsible: AssetMaintenanceWorkersResponsible<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestWorkOrderLines} entity.
   */
  declare jobTradeMaintenanceRequestWorkOrderJobs: AssetMaintenanceRequestWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetCalendars} entity.
   */
  declare assetMaintenanceAssetCalendar: AssetMaintenanceAssetCalendars<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestsV2} entity.
   */
  declare maintenanceRequestsMaintenanceJobTrade: AssetMaintenanceRequestsV2<T>[];

  constructor(_entityApi: AssetMaintenanceJobTradesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceJobTradesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  jobTradeId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceFunctionalLocationRound: AssetMaintenanceFunctionalLocationRoundsType<T>[];
  assetMaintenanceJobTypeSucceedJobType: AssetMaintenanceJobTypeSucceedJobTypesType<T>[];
  maintenanceRequests: AssetMaintenanceRequestsType<T>[];
  assetMaintenanceAssetRound: AssetMaintenanceAssetRoundsType<T>[];
  jobTradeMaintenancePlanWorkOrderJobs: AssetMaintenancePlanWorkOrderLinesType<T>[];
  assetMaintenanceWorkOrderLine: AssetMaintenanceWorkOrderLinesType<T>[];
  assetMaintenanceScheduledExecution: AssetMaintenanceScheduledExecutionsType<T>[];
  jobTradeMaintenanceWorkOrderJobs: AssetMaintenanceWorkOrderLinesV2Type<T>[];
  assetMaintenanceAssetCriticality: AssetMaintenanceAssetCriticalitiesType<T>[];
  assetMaintenanceJobTypeDefault: AssetMaintenanceJobTypeDefaultsType<T>[];
  jobTradeMaintenanceUnplannedWorkOrderJobs: AssetMaintenanceUnplannedWorkOrderLinesType<T>[];
  jobTradeMaintenanceRoundWorkOrderJobs: AssetMaintenanceRoundWorkOrderLinesType<T>[];
  assetMaintenanceWorkerResponsible: AssetMaintenanceWorkersResponsibleType<T>[];
  jobTradeMaintenanceRequestWorkOrderJobs: AssetMaintenanceRequestWorkOrderLinesType<T>[];
  assetMaintenanceAssetCalendar: AssetMaintenanceAssetCalendarsType<T>[];
  maintenanceRequestsMaintenanceJobTrade: AssetMaintenanceRequestsV2Type<T>[];
}
