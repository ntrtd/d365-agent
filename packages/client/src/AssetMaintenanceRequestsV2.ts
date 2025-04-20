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
import type { AssetMaintenanceRequestsV2Api } from './AssetMaintenanceRequestsV2Api';
import { NoYes } from './NoYes';
import {
  MaintenanceRequestDocumentAttachments,
  MaintenanceRequestDocumentAttachmentsType
} from './MaintenanceRequestDocumentAttachments';
import {
  AssetMaintenanceRequestAssetFaults,
  AssetMaintenanceRequestAssetFaultsType
} from './AssetMaintenanceRequestAssetFaults';
import {
  AssetMaintenanceAssetCalendars,
  AssetMaintenanceAssetCalendarsType
} from './AssetMaintenanceAssetCalendars';
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

/**
 * This class represents the entity "AssetMaintenanceRequestsV2" of service "d365_metadata".
 */
export class AssetMaintenanceRequestsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceRequestsV2Type<T>
{
  /**
   * Technical entity name for AssetMaintenanceRequestsV2.
   */
  static override _entityName = 'AssetMaintenanceRequestsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceRequestsV2 entity.
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
   * Production Stop From.
   */
  declare productionStopFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Request Active.
   * @nullable
   */
  declare isRequestActive?: NoYes | null;
  /**
   * Actual Start.
   */
  declare actualStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Started By Worker Personnel Number.
   * @nullable
   */
  declare startedByWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Job Variant Id.
   * @nullable
   */
  declare jobVariantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Order Priority.
   */
  declare workOrderPriority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Order Id.
   * @nullable
   */
  declare workOrderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Functional Location Id.
   * @nullable
   */
  declare functionalLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Latitude.
   */
  declare addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Request Type Id.
   * @nullable
   */
  declare requestTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maintenance Asset Verified.
   * @nullable
   */
  declare maintenanceAssetVerified?: NoYes | null;
  /**
   * Job Trade Id.
   * @nullable
   */
  declare jobTradeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Type Id.
   * @nullable
   */
  declare jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Responsible Worker Personnel Number.
   * @nullable
   */
  declare responsibleWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Actual End.
   */
  declare actualEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Next Request Lifecycle State Id.
   * @nullable
   */
  declare nextRequestLifecycleStateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Worker Group Id.
   * @nullable
   */
  declare workerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Longitude.
   */
  declare addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maintenance Asset Verified By Worker Personnel Number.
   * @nullable
   */
  declare maintenanceAssetVerifiedByWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Request Lifecycle State Id.
   * @nullable
   */
  declare requestLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maintenance Asset Id.
   * @nullable
   */
  declare maintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link MaintenanceRequestDocumentAttachments} entity.
   */
  declare maintenanceRequest?: MaintenanceRequestDocumentAttachments<T> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestAssetFaults} entity.
   */
  declare requestMaintenanceRequestAssetFaults: AssetMaintenanceRequestAssetFaults<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetCalendars} entity.
   */
  declare maintenanceAssetCalendarsMaintenanceRequest: AssetMaintenanceAssetCalendars<T>[];
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderTables} entity.
   */
  declare maintenanceWorkOrder?: AssetMaintenanceWorkOrderTables<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceRequestTypes} entity.
   */
  declare maintenanceRequestType?: AssetMaintenanceRequestTypes<T> | null;
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
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare assetVerificationWorker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceJobVariants} entity.
   */
  declare maintenanceJobVariant?: AssetMaintenanceJobVariants<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetsV3} entity.
   */
  declare asset?: AssetMaintenanceAssetsV3<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFunctionalLocations} entity.
   */
  declare maintenanceFunctionalLocation?: AssetMaintenanceFunctionalLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkers} entity.
   */
  declare maintenanceRequestResponsibleWorker?: AssetMaintenanceWorkers<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderPriorities} entity.
   */
  declare serviceLevel?: AssetMaintenanceWorkOrderPriorities<T> | null;

  constructor(_entityApi: AssetMaintenanceRequestsV2Api<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceRequestsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  requestId: DeserializedType<T, 'Edm.String'>;
  productionStopFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isRequestActive?: NoYes | null;
  actualStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  startedByWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  jobVariantId?: DeserializedType<T, 'Edm.String'> | null;
  workOrderPriority: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  workOrderId?: DeserializedType<T, 'Edm.String'> | null;
  functionalLocationId?: DeserializedType<T, 'Edm.String'> | null;
  addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  requestTypeId?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceAssetVerified?: NoYes | null;
  jobTradeId?: DeserializedType<T, 'Edm.String'> | null;
  jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  responsibleWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  actualEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  nextRequestLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  workerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceAssetVerifiedByWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  requestLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceRequest?: MaintenanceRequestDocumentAttachmentsType<T> | null;
  requestMaintenanceRequestAssetFaults: AssetMaintenanceRequestAssetFaultsType<T>[];
  maintenanceAssetCalendarsMaintenanceRequest: AssetMaintenanceAssetCalendarsType<T>[];
  maintenanceWorkOrder?: AssetMaintenanceWorkOrderTablesType<T> | null;
  maintenanceRequestType?: AssetMaintenanceRequestTypesType<T> | null;
  maintenanceJobType?: AssetMaintenanceJobTypesType<T> | null;
  lifecycleState?: AssetMaintenanceRequestLifecycleStatesType<T> | null;
  maintenanceJobTrade?: AssetMaintenanceJobTradesType<T> | null;
  startingWorker?: WorkersType<T> | null;
  requestResponsibleWorkerGroup?: AssetMaintenanceWorkerGroupsType<T> | null;
  assetVerificationWorker?: WorkersType<T> | null;
  maintenanceJobVariant?: AssetMaintenanceJobVariantsType<T> | null;
  asset?: AssetMaintenanceAssetsV3Type<T> | null;
  maintenanceFunctionalLocation?: AssetMaintenanceFunctionalLocationsType<T> | null;
  maintenanceRequestResponsibleWorker?: AssetMaintenanceWorkersType<T> | null;
  serviceLevel?: AssetMaintenanceWorkOrderPrioritiesType<T> | null;
}
