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
import type { AssetMaintenanceWorkersApi } from './AssetMaintenanceWorkersApi';
import { NoYes } from './NoYes';
import {
  AssetMaintenanceRequests,
  AssetMaintenanceRequestsType
} from './AssetMaintenanceRequests';
import {
  AssetMaintenancePlanWorkOrderLines,
  AssetMaintenancePlanWorkOrderLinesType
} from './AssetMaintenancePlanWorkOrderLines';
import {
  AssetMaintenanceFunctionalLocationWorkers,
  AssetMaintenanceFunctionalLocationWorkersType
} from './AssetMaintenanceFunctionalLocationWorkers';
import {
  AssetMaintenanceWorkOrderLineChecklists,
  AssetMaintenanceWorkOrderLineChecklistsType
} from './AssetMaintenanceWorkOrderLineChecklists';
import {
  AssetMaintenanceWorkOrderLinesV2,
  AssetMaintenanceWorkOrderLinesV2Type
} from './AssetMaintenanceWorkOrderLinesV2';
import {
  AssetMaintenanceUnplannedWorkOrderLines,
  AssetMaintenanceUnplannedWorkOrderLinesType
} from './AssetMaintenanceUnplannedWorkOrderLines';
import {
  AssetMaintenanceRoundWorkOrderLines,
  AssetMaintenanceRoundWorkOrderLinesType
} from './AssetMaintenanceRoundWorkOrderLines';
import {
  AssetMaintenanceWorkOrderTablesV2,
  AssetMaintenanceWorkOrderTablesV2Type
} from './AssetMaintenanceWorkOrderTablesV2';
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
 * This class represents the entity "AssetMaintenanceWorkers" of service "d365_metadata".
 */
export class AssetMaintenanceWorkers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkersType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkers.
   */
  static override _entityName = 'AssetMaintenanceWorkers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkers entity.
   */
  static _keys = ['dataAreaId', 'WorkerPersonnelNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Worker Personnel Number.
   */
  declare workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Worker Active.
   * @nullable
   */
  declare workerActive?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequests} entity.
   */
  declare maintenanceRequests: AssetMaintenanceRequests<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenancePlanWorkOrderLines} entity.
   */
  declare scheduledWorkerMaintenancePlanWorkOrderJobs: AssetMaintenancePlanWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocationWorkers} entity.
   */
  declare assetMaintenanceFunctionalLocationWorker: AssetMaintenanceFunctionalLocationWorkers<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderLineChecklists} entity.
   */
  declare jobChecklistLinesMaintenanceAssetWorker: AssetMaintenanceWorkOrderLineChecklists<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderLinesV2} entity.
   */
  declare scheduledWorkerMaintenanceWorkOrderJobs: AssetMaintenanceWorkOrderLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceUnplannedWorkOrderLines} entity.
   */
  declare scheduledWorkerMaintenanceUnplannedWorkOrderJobs: AssetMaintenanceUnplannedWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRoundWorkOrderLines} entity.
   */
  declare scheduledWorkerMaintenanceRoundWorkOrderJobs: AssetMaintenanceRoundWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderTablesV2} entity.
   */
  declare scheduledWorkerMaintenanceWorkOrderHeaders: AssetMaintenanceWorkOrderTablesV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderTablesV2} entity.
   */
  declare workerMaintenanceWorkOrderHeaders: AssetMaintenanceWorkOrderTablesV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkersResponsible} entity.
   */
  declare assetMaintenanceWorkerResponsible: AssetMaintenanceWorkersResponsible<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestWorkOrderLines} entity.
   */
  declare scheduledWorkerMaintnenaceRequestWorkOrderJobs: AssetMaintenanceRequestWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetCalendars} entity.
   */
  declare assetMaintenanceAssetCalendar: AssetMaintenanceAssetCalendars<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestsV2} entity.
   */
  declare maintenanceRequestsMaintenanceRequestResponsibleWorker: AssetMaintenanceRequestsV2<T>[];

  constructor(_entityApi: AssetMaintenanceWorkersApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  workerActive?: NoYes | null;
  maintenanceRequests: AssetMaintenanceRequestsType<T>[];
  scheduledWorkerMaintenancePlanWorkOrderJobs: AssetMaintenancePlanWorkOrderLinesType<T>[];
  assetMaintenanceFunctionalLocationWorker: AssetMaintenanceFunctionalLocationWorkersType<T>[];
  jobChecklistLinesMaintenanceAssetWorker: AssetMaintenanceWorkOrderLineChecklistsType<T>[];
  scheduledWorkerMaintenanceWorkOrderJobs: AssetMaintenanceWorkOrderLinesV2Type<T>[];
  scheduledWorkerMaintenanceUnplannedWorkOrderJobs: AssetMaintenanceUnplannedWorkOrderLinesType<T>[];
  scheduledWorkerMaintenanceRoundWorkOrderJobs: AssetMaintenanceRoundWorkOrderLinesType<T>[];
  scheduledWorkerMaintenanceWorkOrderHeaders: AssetMaintenanceWorkOrderTablesV2Type<T>[];
  workerMaintenanceWorkOrderHeaders: AssetMaintenanceWorkOrderTablesV2Type<T>[];
  assetMaintenanceWorkerResponsible: AssetMaintenanceWorkersResponsibleType<T>[];
  scheduledWorkerMaintnenaceRequestWorkOrderJobs: AssetMaintenanceRequestWorkOrderLinesType<T>[];
  assetMaintenanceAssetCalendar: AssetMaintenanceAssetCalendarsType<T>[];
  maintenanceRequestsMaintenanceRequestResponsibleWorker: AssetMaintenanceRequestsV2Type<T>[];
}
