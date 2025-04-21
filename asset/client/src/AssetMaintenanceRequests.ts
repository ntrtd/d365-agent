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
import type { AssetMaintenanceRequestsApi } from './AssetMaintenanceRequestsApi';
import { NoYes } from './NoYes';
import {
  AssetMaintenanceWorkOrderTables,
  AssetMaintenanceWorkOrderTablesType
} from './AssetMaintenanceWorkOrderTables';
import {
  AssetMaintenanceRequestTypes,
  AssetMaintenanceRequestTypesType
} from './AssetMaintenanceRequestTypes';
import {
  AssetMaintenanceJobTypes,
  AssetMaintenanceJobTypesType
} from './AssetMaintenanceJobTypes';
import {
  AssetMaintenanceRequestLifecycleStates,
  AssetMaintenanceRequestLifecycleStatesType
} from './AssetMaintenanceRequestLifecycleStates';
import {
  AssetMaintenanceJobTrades,
  AssetMaintenanceJobTradesType
} from './AssetMaintenanceJobTrades';
import { Workers, WorkersType } from './Workers';
import {
  AssetMaintenanceWorkerGroups,
  AssetMaintenanceWorkerGroupsType
} from './AssetMaintenanceWorkerGroups';
import {
  AssetMaintenanceJobVariants,
  AssetMaintenanceJobVariantsType
} from './AssetMaintenanceJobVariants';
import {
  AssetMaintenanceAssetsV3,
  AssetMaintenanceAssetsV3Type
} from './AssetMaintenanceAssetsV3';
import {
  AssetMaintenanceFunctionalLocations,
  AssetMaintenanceFunctionalLocationsType
} from './AssetMaintenanceFunctionalLocations';
import {
  AssetMaintenanceWorkers,
  AssetMaintenanceWorkersType
} from './AssetMaintenanceWorkers';
import {
  AssetMaintenanceWorkOrderPriorities,
  AssetMaintenanceWorkOrderPrioritiesType
} from './AssetMaintenanceWorkOrderPriorities';
import {
  AssetMaintenanceRequestWorkOrderLines,
  AssetMaintenanceRequestWorkOrderLinesType
} from './AssetMaintenanceRequestWorkOrderLines';
import {
  AssetMaintenanceAssetCalendars,
  AssetMaintenanceAssetCalendarsType
} from './AssetMaintenanceAssetCalendars';

/**
 * This class represents the entity "AssetMaintenanceRequests" of service "d365_metadata".
 */
export class AssetMaintenanceRequests<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceRequestsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceRequests.
   */
  static override _entityName = 'AssetMaintenanceRequests';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceRequests entity.
   */
  static _keys = ['dataAreaId', 'RequestId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Request Id.
   */
  declare requestId: DeserializedType<T, 'Edm.String'>;
  /**
   * Functional Location Id.
   * @nullable
   */
  declare functionalLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maintenance Asset Id.
   * @nullable
   */
  declare maintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Actual End.
   */
  declare actualEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Request Type Id.
   * @nullable
   */
  declare requestTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Actual Start.
   */
  declare actualStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Production Stop From.
   */
  declare productionStopFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Work Order Priority.
   */
  declare workOrderPriority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Maintenance Asset Verified.
   * @nullable
   */
  declare maintenanceAssetVerified?: NoYes | null;
  /**
   * Job Type Id.
   * @nullable
   */
  declare jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maintenance Asset Verified By Worker Personnel Number.
   * @nullable
   */
  declare maintenanceAssetVerifiedByWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Address Latitude.
   */
  declare addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Responsible Worker Personnel Number.
   * @nullable
   */
  declare responsibleWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Job Variant Id.
   * @nullable
   */
  declare jobVariantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Trade Id.
   * @nullable
   */
  declare jobTradeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Request Active.
   * @nullable
   */
  declare isRequestActive?: NoYes | null;
  /**
   * Started By Worker Personnel Number.
   * @nullable
   */
  declare startedByWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Work Order Id.
   * @nullable
   */
  declare workOrderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Longitude.
   */
  declare addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Worker Group Id.
   * @nullable
   */
  declare workerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Request Lifecycle State Id.
   * @nullable
   */
  declare requestLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderTables} entity.
   */
  declare maintenanceWorkOrder?: AssetMaintenanceWorkOrderTables<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceRequestTypes} entity.
   */
  declare assetMaintenanceRequestType?: AssetMaintenanceRequestTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceJobTypes} entity.
   */
  declare maintenanceJobType?: AssetMaintenanceJobTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceRequestLifecycleStates} entity.
   */
  declare lifecycleState?: AssetMaintenanceRequestLifecycleStates<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceJobTrades} entity.
   */
  declare maintenanceJobTrade?: AssetMaintenanceJobTrades<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare startingWorker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkerGroups} entity.
   */
  declare requestResponsibleWorkerGroup?: AssetMaintenanceWorkerGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceJobVariants} entity.
   */
  declare maintenanceJobVariant?: AssetMaintenanceJobVariants<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetsV3} entity.
   */
  declare assetMaintenanceAssetV3?: AssetMaintenanceAssetsV3<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFunctionalLocations} entity.
   */
  declare assetMaintenanceFunctionalLocation?: AssetMaintenanceFunctionalLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkers} entity.
   */
  declare maintenanceRequestResponsibleWorker?: AssetMaintenanceWorkers<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderPriorities} entity.
   */
  declare serviceLevel?: AssetMaintenanceWorkOrderPriorities<T> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestWorkOrderLines} entity.
   */
  declare requestMaintnenaceRequestWorkOrderJobs: AssetMaintenanceRequestWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetCalendars} entity.
   */
  declare assetMaintenanceAssetCalendar: AssetMaintenanceAssetCalendars<T>[];

  constructor(_entityApi: AssetMaintenanceRequestsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceRequestsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  requestId: DeserializedType<T, 'Edm.String'>;
  functionalLocationId?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;
  actualEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  requestTypeId?: DeserializedType<T, 'Edm.String'> | null;
  actualStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productionStopFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workOrderPriority: DeserializedType<T, 'Edm.Int32'>;
  maintenanceAssetVerified?: NoYes | null;
  jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceAssetVerifiedByWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  responsibleWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  jobVariantId?: DeserializedType<T, 'Edm.String'> | null;
  jobTradeId?: DeserializedType<T, 'Edm.String'> | null;
  isRequestActive?: NoYes | null;
  startedByWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  workOrderId?: DeserializedType<T, 'Edm.String'> | null;
  addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  workerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  requestLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceWorkOrder?: AssetMaintenanceWorkOrderTablesType<T> | null;
  assetMaintenanceRequestType?: AssetMaintenanceRequestTypesType<T> | null;
  maintenanceJobType?: AssetMaintenanceJobTypesType<T> | null;
  lifecycleState?: AssetMaintenanceRequestLifecycleStatesType<T> | null;
  maintenanceJobTrade?: AssetMaintenanceJobTradesType<T> | null;
  startingWorker?: WorkersType<T> | null;
  requestResponsibleWorkerGroup?: AssetMaintenanceWorkerGroupsType<T> | null;
  maintenanceJobVariant?: AssetMaintenanceJobVariantsType<T> | null;
  assetMaintenanceAssetV3?: AssetMaintenanceAssetsV3Type<T> | null;
  assetMaintenanceFunctionalLocation?: AssetMaintenanceFunctionalLocationsType<T> | null;
  maintenanceRequestResponsibleWorker?: AssetMaintenanceWorkersType<T> | null;
  serviceLevel?: AssetMaintenanceWorkOrderPrioritiesType<T> | null;
  requestMaintnenaceRequestWorkOrderJobs: AssetMaintenanceRequestWorkOrderLinesType<T>[];
  assetMaintenanceAssetCalendar: AssetMaintenanceAssetCalendarsType<T>[];
}
