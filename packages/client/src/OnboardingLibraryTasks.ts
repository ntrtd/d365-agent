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
import type { OnboardingLibraryTasksApi } from './OnboardingLibraryTasksApi';
import { BusinessProcessAssignmentType } from './BusinessProcessAssignmentType';
import { MenuItemType } from './MenuItemType';
import { NoYes } from './NoYes';
import {
  OnboardingChecklistTemplateTasks,
  OnboardingChecklistTemplateTasksType
} from './OnboardingChecklistTemplateTasks';
import { PositionsV2, PositionsV2Type } from './PositionsV2';
import { Workers, WorkersType } from './Workers';
import {
  OnboardingLibraryTaskGroupings,
  OnboardingLibraryTaskGroupingsType
} from './OnboardingLibraryTaskGroupings';

/**
 * This class represents the entity "OnboardingLibraryTasks" of service "d365_metadata".
 */
export class OnboardingLibraryTasks<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OnboardingLibraryTasksType<T>
{
  /**
   * Technical entity name for OnboardingLibraryTasks.
   */
  static override _entityName = 'OnboardingLibraryTasks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OnboardingLibraryTasks entity.
   */
  static _keys = ['Task'];
  /**
   * Task.
   */
  declare task: DeserializedType<T, 'Edm.String'>;
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
   * One-to-many navigation property to the {@link OnboardingChecklistTemplateTasks} entity.
   */
  declare tasks: OnboardingChecklistTemplateTasks<T>[];
  /**
   * One-to-one navigation property to the {@link PositionsV2} entity.
   */
  declare position?: PositionsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-many navigation property to the {@link OnboardingLibraryTaskGroupings} entity.
   */
  declare libraryTaskGroupings: OnboardingLibraryTaskGroupings<T>[];

  constructor(_entityApi: OnboardingLibraryTasksApi<T>) {
    super(_entityApi);
  }
}

export interface OnboardingLibraryTasksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  task: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  instructions?: DeserializedType<T, 'Edm.String'> | null;
  assignedPositionId?: DeserializedType<T, 'Edm.String'> | null;
  assignmentType?: BusinessProcessAssignmentType | null;
  assignedWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  taskLinkType?: MenuItemType | null;
  isOptional?: NoYes | null;
  useUrlForTaskLink?: NoYes | null;
  dueDateOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  taskLink?: DeserializedType<T, 'Edm.String'> | null;
  tasks: OnboardingChecklistTemplateTasksType<T>[];
  position?: PositionsV2Type<T> | null;
  worker?: WorkersType<T> | null;
  libraryTaskGroupings: OnboardingLibraryTaskGroupingsType<T>[];
}
