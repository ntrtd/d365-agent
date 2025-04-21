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
import type { AssetMaintenanceJobTypesApi } from './AssetMaintenanceJobTypesApi';
import { NoYes } from './NoYes';
import {
  AssetMaintenanceFunctionalLocationRounds,
  AssetMaintenanceFunctionalLocationRoundsType
} from './AssetMaintenanceFunctionalLocationRounds';
import {
  AssetMaintenanceJobTypeSucceedJobTypes,
  AssetMaintenanceJobTypeSucceedJobTypesType
} from './AssetMaintenanceJobTypeSucceedJobTypes';
import {
  AssetMaintenanceJobGroups,
  AssetMaintenanceJobGroupsType
} from './AssetMaintenanceJobGroups';
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
  AssetMaintenanceJobTypeVariants,
  AssetMaintenanceJobTypeVariantsType
} from './AssetMaintenanceJobTypeVariants';
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
 * This class represents the entity "AssetMaintenanceJobTypes" of service "d365_metadata".
 */
export class AssetMaintenanceJobTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceJobTypesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceJobTypes.
   */
  static override _entityName = 'AssetMaintenanceJobTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceJobTypes entity.
   */
  static _keys = ['dataAreaId', 'JobTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Type Id.
   */
  declare jobTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Stop Required.
   * @nullable
   */
  declare maintenanceStopRequired?: NoYes | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Group Id.
   * @nullable
   */
  declare jobGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Of Workers.
   */
  declare numberOfWorkers: DeserializedType<T, 'Edm.Int32'>;
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
   * One-to-one navigation property to the {@link AssetMaintenanceJobGroups} entity.
   */
  declare assetMaintenanceJobGroup?: AssetMaintenanceJobGroups<T> | null;
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
  declare jobTypeMaintenancePlanWorkOrderJobs: AssetMaintenancePlanWorkOrderLines<T>[];
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
  declare jobTypeMaintenanceWorkOrderJobs: AssetMaintenanceWorkOrderLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetCriticalities} entity.
   */
  declare assetMaintenanceAssetCriticality: AssetMaintenanceAssetCriticalities<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceJobTypeDefaults} entity.
   */
  declare assetMaintenanceJobTypeDefault: AssetMaintenanceJobTypeDefaults<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceJobTypeVariants} entity.
   */
  declare assetMaintenanceJobTypeVariant: AssetMaintenanceJobTypeVariants<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceUnplannedWorkOrderLines} entity.
   */
  declare jobTypeMaintenanceUnplannedWorkOrderJobs: AssetMaintenanceUnplannedWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRoundWorkOrderLines} entity.
   */
  declare jobTypeMaintenanceRoundWorkOrderJobs: AssetMaintenanceRoundWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkersResponsible} entity.
   */
  declare assetMaintenanceWorkerResponsible: AssetMaintenanceWorkersResponsible<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestWorkOrderLines} entity.
   */
  declare jobTypeMaintenanceRequestWorkOrderJobs: AssetMaintenanceRequestWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetCalendars} entity.
   */
  declare assetMaintenanceAssetCalendar: AssetMaintenanceAssetCalendars<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestsV2} entity.
   */
  declare maintenanceRequestsMaintenanceJobType: AssetMaintenanceRequestsV2<T>[];

  constructor(_entityApi: AssetMaintenanceJobTypesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceJobTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  jobTypeId: DeserializedType<T, 'Edm.String'>;
  maintenanceStopRequired?: NoYes | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  jobGroupId?: DeserializedType<T, 'Edm.String'> | null;
  numberOfWorkers: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceFunctionalLocationRound: AssetMaintenanceFunctionalLocationRoundsType<T>[];
  assetMaintenanceJobTypeSucceedJobType: AssetMaintenanceJobTypeSucceedJobTypesType<T>[];
  assetMaintenanceJobGroup?: AssetMaintenanceJobGroupsType<T> | null;
  maintenanceRequests: AssetMaintenanceRequestsType<T>[];
  assetMaintenanceAssetRound: AssetMaintenanceAssetRoundsType<T>[];
  jobTypeMaintenancePlanWorkOrderJobs: AssetMaintenancePlanWorkOrderLinesType<T>[];
  assetMaintenanceWorkOrderLine: AssetMaintenanceWorkOrderLinesType<T>[];
  assetMaintenanceScheduledExecution: AssetMaintenanceScheduledExecutionsType<T>[];
  jobTypeMaintenanceWorkOrderJobs: AssetMaintenanceWorkOrderLinesV2Type<T>[];
  assetMaintenanceAssetCriticality: AssetMaintenanceAssetCriticalitiesType<T>[];
  assetMaintenanceJobTypeDefault: AssetMaintenanceJobTypeDefaultsType<T>[];
  assetMaintenanceJobTypeVariant: AssetMaintenanceJobTypeVariantsType<T>[];
  jobTypeMaintenanceUnplannedWorkOrderJobs: AssetMaintenanceUnplannedWorkOrderLinesType<T>[];
  jobTypeMaintenanceRoundWorkOrderJobs: AssetMaintenanceRoundWorkOrderLinesType<T>[];
  assetMaintenanceWorkerResponsible: AssetMaintenanceWorkersResponsibleType<T>[];
  jobTypeMaintenanceRequestWorkOrderJobs: AssetMaintenanceRequestWorkOrderLinesType<T>[];
  assetMaintenanceAssetCalendar: AssetMaintenanceAssetCalendarsType<T>[];
  maintenanceRequestsMaintenanceJobType: AssetMaintenanceRequestsV2Type<T>[];
}
