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
import type { HcmProcessTaskAssignmentsApi } from './HcmProcessTaskAssignmentsApi';
import { HcmEmploymentType } from './HcmEmploymentType';
import { BusinessProcessAssignmentType } from './BusinessProcessAssignmentType';
import { BusinessProcessTaskStatus } from './BusinessProcessTaskStatus';
import { BusinessProcessGenericSubtype } from './BusinessProcessGenericSubtype';
import { NoYes } from './NoYes';
import { BusinessProcessType } from './BusinessProcessType';
import { BaseWorkers, BaseWorkersType } from './BaseWorkers';
import { ProcessTasks, ProcessTasksType } from './ProcessTasks';

/**
 * This class represents the entity "HcmProcessTaskAssignments" of service "d365_metadata".
 */
export class HcmProcessTaskAssignments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements HcmProcessTaskAssignmentsType<T>
{
  /**
   * Technical entity name for HcmProcessTaskAssignments.
   */
  static override _entityName = 'HcmProcessTaskAssignments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the HcmProcessTaskAssignments entity.
   */
  static _keys = ['AssignedWorkerPersonnelNumber', 'TaskId'];
  /**
   * Assigned Worker Personnel Number.
   */
  declare assignedWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Task Id.
   */
  declare taskId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Worker Type.
   * @nullable
   */
  declare workerType?: HcmEmploymentType | null;
  /**
   * Assignment Type.
   * @nullable
   */
  declare assignmentType?: BusinessProcessAssignmentType | null;
  /**
   * Task.
   * @nullable
   */
  declare task?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: BusinessProcessTaskStatus | null;
  /**
   * Employment Id.
   * @nullable
   */
  declare employmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Party Number.
   * @nullable
   */
  declare contactPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Process.
   * @nullable
   */
  declare process?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Generic Subtype.
   * @nullable
   */
  declare genericSubtype?: BusinessProcessGenericSubtype | null;
  /**
   * Is Optional.
   * @nullable
   */
  declare isOptional?: NoYes | null;
  /**
   * Contact Name.
   * @nullable
   */
  declare contactName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Onboarded Employee Name.
   * @nullable
   */
  declare onboardedEmployeeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employment Start Date.
   */
  declare employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Instructions.
   * @nullable
   */
  declare instructions?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Email.
   * @nullable
   */
  declare contactEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Assigned Worker Name.
   * @nullable
   */
  declare assignedWorkerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resolved By Email.
   * @nullable
   */
  declare resolvedByEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resolved By Name.
   * @nullable
   */
  declare resolvedByName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Url For Task Link.
   * @nullable
   */
  declare useUrlForTaskLink?: NoYes | null;
  /**
   * Onboarded Employee Personnel Number.
   * @nullable
   */
  declare onboardedEmployeePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Link To Task.
   * @nullable
   */
  declare linkToTask?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Entity Id.
   * @nullable
   */
  declare legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Completion Date Time.
   */
  declare completionDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Assigned Worker Email.
   * @nullable
   */
  declare assignedWorkerEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employment End Date.
   */
  declare employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Process Type.
   * @nullable
   */
  declare processType?: BusinessProcessType | null;
  /**
   * Resolved By Personnel Number.
   * @nullable
   */
  declare resolvedByPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Process Id.
   */
  declare processId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Onboarded Employee Email.
   * @nullable
   */
  declare onboardedEmployeeEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BaseWorkers} entity.
   */
  declare assignedWorker?: BaseWorkers<T> | null;
  /**
   * One-to-one navigation property to the {@link BaseWorkers} entity.
   */
  declare resolvedByWorker?: BaseWorkers<T> | null;
  /**
   * One-to-one navigation property to the {@link ProcessTasks} entity.
   */
  declare processTask?: ProcessTasks<T> | null;

  constructor(_entityApi: HcmProcessTaskAssignmentsApi<T>) {
    super(_entityApi);
  }
}

export interface HcmProcessTaskAssignmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  assignedWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  taskId: DeserializedType<T, 'Edm.Guid'>;
  workerType?: HcmEmploymentType | null;
  assignmentType?: BusinessProcessAssignmentType | null;
  task?: DeserializedType<T, 'Edm.String'> | null;
  status?: BusinessProcessTaskStatus | null;
  employmentId?: DeserializedType<T, 'Edm.String'> | null;
  contactPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  process?: DeserializedType<T, 'Edm.String'> | null;
  genericSubtype?: BusinessProcessGenericSubtype | null;
  isOptional?: NoYes | null;
  contactName?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  onboardedEmployeeName?: DeserializedType<T, 'Edm.String'> | null;
  employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  instructions?: DeserializedType<T, 'Edm.String'> | null;
  contactEmail?: DeserializedType<T, 'Edm.String'> | null;
  assignedWorkerName?: DeserializedType<T, 'Edm.String'> | null;
  resolvedByEmail?: DeserializedType<T, 'Edm.String'> | null;
  resolvedByName?: DeserializedType<T, 'Edm.String'> | null;
  useUrlForTaskLink?: NoYes | null;
  onboardedEmployeePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  linkToTask?: DeserializedType<T, 'Edm.String'> | null;
  legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  completionDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  assignedWorkerEmail?: DeserializedType<T, 'Edm.String'> | null;
  employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  processType?: BusinessProcessType | null;
  resolvedByPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  processId: DeserializedType<T, 'Edm.Guid'>;
  onboardedEmployeeEmail?: DeserializedType<T, 'Edm.String'> | null;
  assignedWorker?: BaseWorkersType<T> | null;
  resolvedByWorker?: BaseWorkersType<T> | null;
  processTask?: ProcessTasksType<T> | null;
}
