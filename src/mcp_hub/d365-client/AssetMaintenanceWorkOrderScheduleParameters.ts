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
import type { AssetMaintenanceWorkOrderScheduleParametersApi } from './AssetMaintenanceWorkOrderScheduleParametersApi';
import { EntAssetWorkOrderDefaultScheduledStart } from './EntAssetWorkOrderDefaultScheduledStart';

/**
 * This class represents the entity "AssetMaintenanceWorkOrderScheduleParameters" of service "d365_metadata".
 */
export class AssetMaintenanceWorkOrderScheduleParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkOrderScheduleParametersType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkOrderScheduleParameters.
   */
  static override _entityName = 'AssetMaintenanceWorkOrderScheduleParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkOrderScheduleParameters entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Location.
   */
  declare maintenanceAssetLocation: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Work Order Criticality.
   */
  declare workOrderCriticality: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Worker Start Date.
   */
  declare workerStartDate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Req Plan Id Sched.
   * @nullable
   */
  declare reqPlanIdSched?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Order Priority.
   */
  declare workOrderPriority: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Responsible Worker Group.
   */
  declare responsibleWorkerGroup: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Work Order Start Date.
   */
  declare workOrderStartDate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Preferred Worker Group.
   */
  declare preferredWorkerGroup: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Responsible Worker.
   */
  declare responsibleWorker: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Scheduled Start Date.
   * @nullable
   */
  declare defaultScheduledStartDate?: EntAssetWorkOrderDefaultScheduledStart | null;
  /**
   * Preferred Worker.
   */
  declare preferredWorker: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Time Fence Schedule.
   */
  declare timeFenceSchedule: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: AssetMaintenanceWorkOrderScheduleParametersApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkOrderScheduleParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetLocation: DeserializedType<T, 'Edm.Decimal'>;
  workOrderCriticality: DeserializedType<T, 'Edm.Decimal'>;
  workerStartDate: DeserializedType<T, 'Edm.Decimal'>;
  reqPlanIdSched?: DeserializedType<T, 'Edm.String'> | null;
  workOrderPriority: DeserializedType<T, 'Edm.Decimal'>;
  responsibleWorkerGroup: DeserializedType<T, 'Edm.Decimal'>;
  workOrderStartDate: DeserializedType<T, 'Edm.Decimal'>;
  preferredWorkerGroup: DeserializedType<T, 'Edm.Decimal'>;
  responsibleWorker: DeserializedType<T, 'Edm.Decimal'>;
  defaultScheduledStartDate?: EntAssetWorkOrderDefaultScheduledStart | null;
  preferredWorker: DeserializedType<T, 'Edm.Decimal'>;
  timeFenceSchedule: DeserializedType<T, 'Edm.Int32'>;
}
