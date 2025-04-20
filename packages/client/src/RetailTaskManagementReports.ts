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
import type { RetailTaskManagementReportsApi } from './RetailTaskManagementReportsApi';
import { BusinessProcessHeaderStatus } from './BusinessProcessHeaderStatus';
import { BusinessProcessTaskStatus } from './BusinessProcessTaskStatus';

/**
 * This class represents the entity "RetailTaskManagementReports" of service "d365_metadata".
 */
export class RetailTaskManagementReports<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTaskManagementReportsType<T>
{
  /**
   * Technical entity name for RetailTaskManagementReports.
   */
  static override _entityName = 'RetailTaskManagementReports';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTaskManagementReports entity.
   */
  static _keys = ['Process_ProcessId', 'TaskId'];
  /**
   * Process Process Id.
   */
  declare processProcessId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Task Id.
   */
  declare taskId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Store Number.
   * @nullable
   */
  declare storeNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Process Name.
   * @nullable
   */
  declare processName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Process Target Date.
   */
  declare processTargetDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Process Status.
   * @nullable
   */
  declare processStatus?: BusinessProcessHeaderStatus | null;
  /**
   * Assigned Worker.
   * @nullable
   */
  declare assignedWorker?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Completion Date Time.
   */
  declare completionDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Resolved By.
   * @nullable
   */
  declare resolvedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Process Worker.
   * @nullable
   */
  declare processWorker?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: BusinessProcessTaskStatus | null;

  constructor(_entityApi: RetailTaskManagementReportsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTaskManagementReportsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  processProcessId: DeserializedType<T, 'Edm.Guid'>;
  taskId: DeserializedType<T, 'Edm.Guid'>;
  storeNumber?: DeserializedType<T, 'Edm.String'> | null;
  processName?: DeserializedType<T, 'Edm.String'> | null;
  processTargetDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  processStatus?: BusinessProcessHeaderStatus | null;
  assignedWorker?: DeserializedType<T, 'Edm.String'> | null;
  completionDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  resolvedBy?: DeserializedType<T, 'Edm.String'> | null;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  processWorker?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  status?: BusinessProcessTaskStatus | null;
}
