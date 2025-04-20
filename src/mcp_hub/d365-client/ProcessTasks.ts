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
import type { ProcessTasksApi } from './ProcessTasksApi';
import { BusinessProcessAssignmentType } from './BusinessProcessAssignmentType';
import { BusinessProcessTaskStatus } from './BusinessProcessTaskStatus';
import { NoYes } from './NoYes';
import { MenuItemType } from './MenuItemType';
import {
  ProcessGroupAssignments,
  ProcessGroupAssignmentsType
} from './ProcessGroupAssignments';
import { ProcessHeaders, ProcessHeadersType } from './ProcessHeaders';
import {
  OnboardProcessTasksDualWrite,
  OnboardProcessTasksDualWriteType
} from './OnboardProcessTasksDualWrite';
import {
  HcmProcessTaskAssignments,
  HcmProcessTaskAssignmentsType
} from './HcmProcessTaskAssignments';

/**
 * This class represents the entity "ProcessTasks" of service "d365_metadata".
 */
export class ProcessTasks<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProcessTasksType<T>
{
  /**
   * Technical entity name for ProcessTasks.
   */
  static override _entityName = 'ProcessTasks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProcessTasks entity.
   */
  static _keys = ['TaskId'];
  /**
   * Task Id.
   */
  declare taskId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Assigned Group Name.
   * @nullable
   */
  declare assignedGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Assignment Type.
   * @nullable
   */
  declare assignmentType?: BusinessProcessAssignmentType | null;
  /**
   * Assigned Worker Personnel Number.
   * @nullable
   */
  declare assignedWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: BusinessProcessTaskStatus | null;
  /**
   * Process Name.
   * @nullable
   */
  declare processName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Optional.
   * @nullable
   */
  declare isOptional?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructions.
   * @nullable
   */
  declare instructions?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resolved By Personnel Number.
   * @nullable
   */
  declare resolvedByPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Menu Item.
   * @nullable
   */
  declare menuItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Template Task Id.
   */
  declare templateTaskId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Contact Person Party Number.
   * @nullable
   */
  declare contactPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Completion Date Time.
   */
  declare completionDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Assigned Position Position Id.
   * @nullable
   */
  declare assignedPositionPositionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Process Id.
   */
  declare processId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Menu Item Type.
   * @nullable
   */
  declare menuItemType?: MenuItemType | null;
  /**
   * One-to-one navigation property to the {@link ProcessGroupAssignments} entity.
   */
  declare assignedGroup?: ProcessGroupAssignments<T> | null;
  /**
   * One-to-one navigation property to the {@link ProcessHeaders} entity.
   */
  declare process?: ProcessHeaders<T> | null;
  /**
   * One-to-many navigation property to the {@link OnboardProcessTasksDualWrite} entity.
   */
  declare onboardTasks: OnboardProcessTasksDualWrite<T>[];
  /**
   * One-to-many navigation property to the {@link HcmProcessTaskAssignments} entity.
   */
  declare assignments: HcmProcessTaskAssignments<T>[];

  constructor(_entityApi: ProcessTasksApi<T>) {
    super(_entityApi);
  }
}

export interface ProcessTasksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  taskId: DeserializedType<T, 'Edm.Guid'>;
  assignedGroupName?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  assignmentType?: BusinessProcessAssignmentType | null;
  assignedWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  status?: BusinessProcessTaskStatus | null;
  processName?: DeserializedType<T, 'Edm.String'> | null;
  isOptional?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  instructions?: DeserializedType<T, 'Edm.String'> | null;
  resolvedByPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  menuItem?: DeserializedType<T, 'Edm.String'> | null;
  templateTaskId: DeserializedType<T, 'Edm.Guid'>;
  contactPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  completionDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  assignedPositionPositionId?: DeserializedType<T, 'Edm.String'> | null;
  processId: DeserializedType<T, 'Edm.Guid'>;
  menuItemType?: MenuItemType | null;
  assignedGroup?: ProcessGroupAssignmentsType<T> | null;
  process?: ProcessHeadersType<T> | null;
  onboardTasks: OnboardProcessTasksDualWriteType<T>[];
  assignments: HcmProcessTaskAssignmentsType<T>[];
}
