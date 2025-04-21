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
import type { OnboardingWorkerChecklistTasksApi } from './OnboardingWorkerChecklistTasksApi';
import { BusinessProcessAssignmentType } from './BusinessProcessAssignmentType';
import { NoYes } from './NoYes';
import { MenuItemType } from './MenuItemType';
import { BusinessProcessTaskStatus } from './BusinessProcessTaskStatus';
import { People, PeopleType } from './People';
import { PositionsV2, PositionsV2Type } from './PositionsV2';
import { Workers, WorkersType } from './Workers';
import {
  OnboardingWorkerChecklistHeaders,
  OnboardingWorkerChecklistHeadersType
} from './OnboardingWorkerChecklistHeaders';

/**
 * This class represents the entity "OnboardingWorkerChecklistTasks" of service "d365_metadata".
 */
export class OnboardingWorkerChecklistTasks<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OnboardingWorkerChecklistTasksType<T>
{
  /**
   * Technical entity name for OnboardingWorkerChecklistTasks.
   */
  static override _entityName = 'OnboardingWorkerChecklistTasks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OnboardingWorkerChecklistTasks entity.
   */
  static _keys = ['ChecklistHeaderId', 'TaskId'];
  /**
   * Checklist Header Id.
   */
  declare checklistHeaderId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Task Id.
   */
  declare taskId: DeserializedType<T, 'Edm.Guid'>;
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
   * Assigned Group Id.
   * @nullable
   */
  declare assignedGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructions.
   * @nullable
   */
  declare instructions?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Assigned Worker Personnel Number.
   * @nullable
   */
  declare assignedWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Contact Person Party Number.
   * @nullable
   */
  declare contactPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Assigned Position Id.
   * @nullable
   */
  declare assignedPositionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Url For Task Link.
   * @nullable
   */
  declare useUrlForTaskLink?: NoYes | null;
  /**
   * Task Link Type.
   * @nullable
   */
  declare taskLinkType?: MenuItemType | null;
  /**
   * Checklist Name.
   * @nullable
   */
  declare checklistName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Task Resolved By.
   * @nullable
   */
  declare taskResolvedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Task Completion Date.
   */
  declare taskCompletionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Task Link.
   * @nullable
   */
  declare taskLink?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Task Status.
   * @nullable
   */
  declare taskStatus?: BusinessProcessTaskStatus | null;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare person?: People<T> | null;
  /**
   * One-to-one navigation property to the {@link PositionsV2} entity.
   */
  declare position?: PositionsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare resolvingWorker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link OnboardingWorkerChecklistHeaders} entity.
   */
  declare checklist?: OnboardingWorkerChecklistHeaders<T> | null;

  constructor(_entityApi: OnboardingWorkerChecklistTasksApi<T>) {
    super(_entityApi);
  }
}

export interface OnboardingWorkerChecklistTasksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  checklistHeaderId: DeserializedType<T, 'Edm.Guid'>;
  taskId: DeserializedType<T, 'Edm.Guid'>;
  assignmentType?: BusinessProcessAssignmentType | null;
  task?: DeserializedType<T, 'Edm.String'> | null;
  isOptional?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  assignedGroupId?: DeserializedType<T, 'Edm.String'> | null;
  instructions?: DeserializedType<T, 'Edm.String'> | null;
  assignedWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  assignedPositionId?: DeserializedType<T, 'Edm.String'> | null;
  useUrlForTaskLink?: NoYes | null;
  taskLinkType?: MenuItemType | null;
  checklistName?: DeserializedType<T, 'Edm.String'> | null;
  taskResolvedBy?: DeserializedType<T, 'Edm.String'> | null;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taskCompletionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taskLink?: DeserializedType<T, 'Edm.String'> | null;
  taskStatus?: BusinessProcessTaskStatus | null;
  person?: PeopleType<T> | null;
  position?: PositionsV2Type<T> | null;
  worker?: WorkersType<T> | null;
  resolvingWorker?: WorkersType<T> | null;
  checklist?: OnboardingWorkerChecklistHeadersType<T> | null;
}
