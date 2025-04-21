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
import type { AssetMaintenanceWorkOrderTablesV2Api } from './AssetMaintenanceWorkOrderTablesV2Api';
import { NoYes } from './NoYes';
import { EntAssetCostType } from './EntAssetCostType';
import {
  AssetMaintenanceWorkOrderUserReferences,
  AssetMaintenanceWorkOrderUserReferencesType
} from './AssetMaintenanceWorkOrderUserReferences';
import {
  AssetMaintenanceWorkOrderAssetFaults,
  AssetMaintenanceWorkOrderAssetFaultsType
} from './AssetMaintenanceWorkOrderAssetFaults';
import {
  MaintenanceWorkOrderTableAttachments,
  MaintenanceWorkOrderTableAttachmentsType
} from './MaintenanceWorkOrderTableAttachments';
import {
  AssetMaintenancePlanWorkOrderLines,
  AssetMaintenancePlanWorkOrderLinesType
} from './AssetMaintenancePlanWorkOrderLines';
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
  AssetMaintenanceCriticalities,
  AssetMaintenanceCriticalitiesType
} from './AssetMaintenanceCriticalities';
import {
  AssetMaintenanceWorkers,
  AssetMaintenanceWorkersType
} from './AssetMaintenanceWorkers';
import {
  AssetMaintenanceWorkOrderTypes,
  AssetMaintenanceWorkOrderTypesType
} from './AssetMaintenanceWorkOrderTypes';
import {
  AssetMaintenanceWorkerGroups,
  AssetMaintenanceWorkerGroupsType
} from './AssetMaintenanceWorkerGroups';
import {
  ProjectContractHeaders,
  ProjectContractHeadersType
} from './ProjectContractHeaders';
import { CustomersV3, CustomersV3Type } from './CustomersV3';
import {
  AssetMaintenanceWorkOrderStandardDescriptions,
  AssetMaintenanceWorkOrderStandardDescriptionsType
} from './AssetMaintenanceWorkOrderStandardDescriptions';
import {
  AssetMaintenanceWorkOrderLifecycleStates,
  AssetMaintenanceWorkOrderLifecycleStatesType
} from './AssetMaintenanceWorkOrderLifecycleStates';
import {
  AssetMaintenanceWorkOrderPriorities,
  AssetMaintenanceWorkOrderPrioritiesType
} from './AssetMaintenanceWorkOrderPriorities';
import {
  AssetMaintenanceRequestWorkOrderLines,
  AssetMaintenanceRequestWorkOrderLinesType
} from './AssetMaintenanceRequestWorkOrderLines';

/**
 * This class represents the entity "AssetMaintenanceWorkOrderTablesV2" of service "d365_metadata".
 */
export class AssetMaintenanceWorkOrderTablesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkOrderTablesV2Type<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkOrderTablesV2.
   */
  static override _entityName = 'AssetMaintenanceWorkOrderTablesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkOrderTablesV2 entity.
   */
  static _keys = ['dataAreaId', 'WorkOrderId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Order Id.
   */
  declare workOrderId: DeserializedType<T, 'Edm.String'>;
  /**
   * Parent Work Order Id.
   * @nullable
   */
  declare parentWorkOrderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active.
   * @nullable
   */
  declare active?: NoYes | null;
  /**
   * Is Work Order Scheduled For Single Worker.
   * @nullable
   */
  declare isWorkOrderScheduledForSingleWorker?: NoYes | null;
  /**
   * Order Billing Customer Account Number.
   * @nullable
   */
  declare orderBillingCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Scheduled End.
   */
  declare scheduledEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Worker Group Id.
   * @nullable
   */
  declare workerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Actual Start.
   */
  declare actualStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Scheduled Start.
   */
  declare scheduledStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Work Order Lifecycle State Id.
   * @nullable
   */
  declare workOrderLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Order Maintenance Asset Criticality Name.
   * @nullable
   */
  declare workOrderMaintenanceAssetCriticalityName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Work Order Type Id.
   * @nullable
   */
  declare workOrderTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Actual End.
   */
  declare actualEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Responsible Worker Personnel Number.
   * @nullable
   */
  declare responsibleWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Next Work Order Lifecycle State Id.
   * @nullable
   */
  declare nextWorkOrderLifecycleStateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Expected End.
   */
  declare expectedEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Work Order Maintenance Asset Criticality Value.
   */
  declare workOrderMaintenanceAssetCriticalityValue: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Cost Type.
   * @nullable
   */
  declare costType?: EntAssetCostType | null;
  /**
   * Service Level.
   */
  declare serviceLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Order Project Contract Id.
   * @nullable
   */
  declare orderProjectContractId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expected Start.
   */
  declare expectedStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Scheduled Worker Personnel Number.
   * @nullable
   */
  declare scheduledWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderUserReferences} entity.
   */
  declare maintenanceWorkOrderUserReferencesMaintenanceWorkOrderHeader: AssetMaintenanceWorkOrderUserReferences<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderAssetFaults} entity.
   */
  declare workOrderMaintenanceWorkOrderAssetFaults: AssetMaintenanceWorkOrderAssetFaults<T>[];
  /**
   * One-to-one navigation property to the {@link MaintenanceWorkOrderTableAttachments} entity.
   */
  declare workOrder?: MaintenanceWorkOrderTableAttachments<T> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenancePlanWorkOrderLines} entity.
   */
  declare workOrderHeaderMaintenancePlanWorkOrderJobs: AssetMaintenancePlanWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderLinesV2} entity.
   */
  declare workOrderHeaderMaintenanceWorkOrderJobs: AssetMaintenanceWorkOrderLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceUnplannedWorkOrderLines} entity.
   */
  declare workOrderHeaderMaintenanceUnplannedWorkOrderJobs: AssetMaintenanceUnplannedWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRoundWorkOrderLines} entity.
   */
  declare workOrderHeaderMaintenanceRoundWorkOrderJobs: AssetMaintenanceRoundWorkOrderLines<T>[];
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceCriticalities} entity.
   */
  declare maintenanceAssetCriticality?: AssetMaintenanceCriticalities<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkers} entity.
   */
  declare maintenanceWorkOrderScheduledWorker?: AssetMaintenanceWorkers<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderTypes} entity.
   */
  declare maintenanceWorkOrderType?: AssetMaintenanceWorkOrderTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkerGroups} entity.
   */
  declare maintenanceResponsibleWorkerGroup?: AssetMaintenanceWorkerGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link ProjectContractHeaders} entity.
   */
  declare projectContract?: ProjectContractHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare billingCustomer?: CustomersV3<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkers} entity.
   */
  declare maintenanceWorkOrderResponsibleWorker?: AssetMaintenanceWorkers<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderStandardDescriptions} entity.
   */
  declare maintenanceWorkOrderDescription?: AssetMaintenanceWorkOrderStandardDescriptions<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderLifecycleStates} entity.
   */
  declare maintenanceWorkOrderLifecycleState?: AssetMaintenanceWorkOrderLifecycleStates<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderTablesV2} entity.
   */
  declare parentMaintenanceWorkOrderHeader?: AssetMaintenanceWorkOrderTablesV2<T> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderTablesV2} entity.
   */
  declare parentWorkOrderHeaderMaintenanceWorkOrderHeaders: AssetMaintenanceWorkOrderTablesV2<T>[];
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderPriorities} entity.
   */
  declare maintenanceWorkOrderServiceLevel?: AssetMaintenanceWorkOrderPriorities<T> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestWorkOrderLines} entity.
   */
  declare workOrderHeaderMaintenanceRequestWorkOrderJobs: AssetMaintenanceRequestWorkOrderLines<T>[];

  constructor(_entityApi: AssetMaintenanceWorkOrderTablesV2Api<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkOrderTablesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workOrderId: DeserializedType<T, 'Edm.String'>;
  parentWorkOrderId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  active?: NoYes | null;
  isWorkOrderScheduledForSingleWorker?: NoYes | null;
  orderBillingCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  scheduledEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  actualStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  scheduledStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workOrderLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  workOrderMaintenanceAssetCriticalityName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  workOrderTypeId?: DeserializedType<T, 'Edm.String'> | null;
  actualEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  responsibleWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  nextWorkOrderLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  expectedEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workOrderMaintenanceAssetCriticalityValue: DeserializedType<T, 'Edm.Int32'>;
  costType?: EntAssetCostType | null;
  serviceLevel: DeserializedType<T, 'Edm.Int32'>;
  orderProjectContractId?: DeserializedType<T, 'Edm.String'> | null;
  expectedStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  scheduledWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceWorkOrderUserReferencesMaintenanceWorkOrderHeader: AssetMaintenanceWorkOrderUserReferencesType<T>[];
  workOrderMaintenanceWorkOrderAssetFaults: AssetMaintenanceWorkOrderAssetFaultsType<T>[];
  workOrder?: MaintenanceWorkOrderTableAttachmentsType<T> | null;
  workOrderHeaderMaintenancePlanWorkOrderJobs: AssetMaintenancePlanWorkOrderLinesType<T>[];
  workOrderHeaderMaintenanceWorkOrderJobs: AssetMaintenanceWorkOrderLinesV2Type<T>[];
  workOrderHeaderMaintenanceUnplannedWorkOrderJobs: AssetMaintenanceUnplannedWorkOrderLinesType<T>[];
  workOrderHeaderMaintenanceRoundWorkOrderJobs: AssetMaintenanceRoundWorkOrderLinesType<T>[];
  maintenanceAssetCriticality?: AssetMaintenanceCriticalitiesType<T> | null;
  maintenanceWorkOrderScheduledWorker?: AssetMaintenanceWorkersType<T> | null;
  maintenanceWorkOrderType?: AssetMaintenanceWorkOrderTypesType<T> | null;
  maintenanceResponsibleWorkerGroup?: AssetMaintenanceWorkerGroupsType<T> | null;
  projectContract?: ProjectContractHeadersType<T> | null;
  billingCustomer?: CustomersV3Type<T> | null;
  maintenanceWorkOrderResponsibleWorker?: AssetMaintenanceWorkersType<T> | null;
  maintenanceWorkOrderDescription?: AssetMaintenanceWorkOrderStandardDescriptionsType<T> | null;
  maintenanceWorkOrderLifecycleState?: AssetMaintenanceWorkOrderLifecycleStatesType<T> | null;
  parentMaintenanceWorkOrderHeader?: AssetMaintenanceWorkOrderTablesV2Type<T> | null;
  parentWorkOrderHeaderMaintenanceWorkOrderHeaders: AssetMaintenanceWorkOrderTablesV2Type<T>[];
  maintenanceWorkOrderServiceLevel?: AssetMaintenanceWorkOrderPrioritiesType<T> | null;
  workOrderHeaderMaintenanceRequestWorkOrderJobs: AssetMaintenanceRequestWorkOrderLinesType<T>[];
}
