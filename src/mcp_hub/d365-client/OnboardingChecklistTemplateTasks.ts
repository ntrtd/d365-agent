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
import type { OnboardingChecklistTemplateTasksApi } from './OnboardingChecklistTemplateTasksApi';
import { BusinessProcessAssignmentType } from './BusinessProcessAssignmentType';
import { MenuItemType } from './MenuItemType';
import { NoYes } from './NoYes';
import { People, PeopleType } from './People';
import { PositionsV2, PositionsV2Type } from './PositionsV2';
import { Workers, WorkersType } from './Workers';
import {
  OnboardingChecklistTemplateHeaders,
  OnboardingChecklistTemplateHeadersType
} from './OnboardingChecklistTemplateHeaders';
import {
  OnboardingLibraryTasks,
  OnboardingLibraryTasksType
} from './OnboardingLibraryTasks';

/**
 * This class represents the entity "OnboardingChecklistTemplateTasks" of service "d365_metadata".
 */
export class OnboardingChecklistTemplateTasks<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OnboardingChecklistTemplateTasksType<T>
{
  /**
   * Technical entity name for OnboardingChecklistTemplateTasks.
   */
  static override _entityName = 'OnboardingChecklistTemplateTasks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OnboardingChecklistTemplateTasks entity.
   */
  static _keys = ['TaskId'];
  /**
   * Task Id.
   */
  declare taskId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Party Number.
   * @nullable
   */
  declare contactPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructions.
   * @nullable
   */
  declare instructions?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Library Task.
   * @nullable
   */
  declare libraryTask?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Assigned Position Id.
   * @nullable
   */
  declare assignedPositionId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Task Link Type.
   * @nullable
   */
  declare taskLinkType?: MenuItemType | null;
  /**
   * Checklist Template Header Name.
   * @nullable
   */
  declare checklistTemplateHeaderName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Optional.
   * @nullable
   */
  declare isOptional?: NoYes | null;
  /**
   * Use Url For Task Link.
   * @nullable
   */
  declare useUrlForTaskLink?: NoYes | null;
  /**
   * Due Date Offset Days.
   */
  declare dueDateOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Task Link.
   * @nullable
   */
  declare taskLink?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Task.
   * @nullable
   */
  declare task?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-one navigation property to the {@link OnboardingChecklistTemplateHeaders} entity.
   */
  declare templateChecklist?: OnboardingChecklistTemplateHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link OnboardingLibraryTasks} entity.
   */
  declare libraryTasks?: OnboardingLibraryTasks<T> | null;

  constructor(_entityApi: OnboardingChecklistTemplateTasksApi<T>) {
    super(_entityApi);
  }
}

export interface OnboardingChecklistTemplateTasksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  taskId: DeserializedType<T, 'Edm.Guid'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  instructions?: DeserializedType<T, 'Edm.String'> | null;
  libraryTask?: DeserializedType<T, 'Edm.String'> | null;
  assignedPositionId?: DeserializedType<T, 'Edm.String'> | null;
  assignmentType?: BusinessProcessAssignmentType | null;
  assignedWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  taskLinkType?: MenuItemType | null;
  checklistTemplateHeaderName?: DeserializedType<T, 'Edm.String'> | null;
  isOptional?: NoYes | null;
  useUrlForTaskLink?: NoYes | null;
  dueDateOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  taskLink?: DeserializedType<T, 'Edm.String'> | null;
  task?: DeserializedType<T, 'Edm.String'> | null;
  person?: PeopleType<T> | null;
  position?: PositionsV2Type<T> | null;
  worker?: WorkersType<T> | null;
  templateChecklist?: OnboardingChecklistTemplateHeadersType<T> | null;
  libraryTasks?: OnboardingLibraryTasksType<T> | null;
}
