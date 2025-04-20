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
import type { AssetMaintenanceWorkOrderLineSchedulesApi } from './AssetMaintenanceWorkOrderLineSchedulesApi';
import { EntAssetScheduleType } from './EntAssetScheduleType';
import { NoYes } from './NoYes';
import { EntAssetScheduleStatus } from './EntAssetScheduleStatus';

/**
 * This class represents the entity "AssetMaintenanceWorkOrderLineSchedules" of service "d365_metadata".
 */
export class AssetMaintenanceWorkOrderLineSchedules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkOrderLineSchedulesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkOrderLineSchedules.
   */
  static override _entityName = 'AssetMaintenanceWorkOrderLineSchedules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkOrderLineSchedules entity.
   */
  static _keys = [
    'dataAreaId',
    'WorkOrderId',
    'WorkOrderLineNumber',
    'ScheduleType',
    'WorkerPersonnelNumber',
    'MaintenanceAssetId',
    'WrkCtrId',
    'ScheduledStartDateTime'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Order Id.
   */
  declare workOrderId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Order Line Number.
   */
  declare workOrderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Schedule Type.
   * @nullable
   */
  declare scheduleType?: EntAssetScheduleType | null;
  /**
   * Worker Personnel Number.
   */
  declare workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Id.
   */
  declare maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  /**
   * Wrk Ctr Id.
   */
  declare wrkCtrId: DeserializedType<T, 'Edm.String'>;
  /**
   * Scheduled Start Date Time.
   */
  declare scheduledStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Conflict.
   * @nullable
   */
  declare conflict?: NoYes | null;
  /**
   * Scheduled End Date Time.
   */
  declare scheduledEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: EntAssetScheduleStatus | null;
  /**
   * Time Sec.
   */
  declare timeSec: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Actual Start Date Time.
   */
  declare actualStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Hours.
   */
  declare hours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Actual End Date Time.
   */
  declare actualEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: AssetMaintenanceWorkOrderLineSchedulesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkOrderLineSchedulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workOrderId: DeserializedType<T, 'Edm.String'>;
  workOrderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  scheduleType?: EntAssetScheduleType | null;
  workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  wrkCtrId: DeserializedType<T, 'Edm.String'>;
  scheduledStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  conflict?: NoYes | null;
  scheduledEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  status?: EntAssetScheduleStatus | null;
  timeSec: DeserializedType<T, 'Edm.Int32'>;
  actualStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  hours: DeserializedType<T, 'Edm.Decimal'>;
  actualEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
