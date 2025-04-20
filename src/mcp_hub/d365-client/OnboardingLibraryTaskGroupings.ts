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
import type { OnboardingLibraryTaskGroupingsApi } from './OnboardingLibraryTaskGroupingsApi';
import {
  OnboardingLibraryTaskGroups,
  OnboardingLibraryTaskGroupsType
} from './OnboardingLibraryTaskGroups';
import {
  OnboardingLibraryTasks,
  OnboardingLibraryTasksType
} from './OnboardingLibraryTasks';

/**
 * This class represents the entity "OnboardingLibraryTaskGroupings" of service "d365_metadata".
 */
export class OnboardingLibraryTaskGroupings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OnboardingLibraryTaskGroupingsType<T>
{
  /**
   * Technical entity name for OnboardingLibraryTaskGroupings.
   */
  static override _entityName = 'OnboardingLibraryTaskGroupings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OnboardingLibraryTaskGroupings entity.
   */
  static _keys = ['TaskName', 'TaskGroupName'];
  /**
   * Task Name.
   */
  declare taskName: DeserializedType<T, 'Edm.String'>;
  /**
   * Task Group Name.
   */
  declare taskGroupName: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link OnboardingLibraryTaskGroups} entity.
   */
  declare libraryTaskGroup?: OnboardingLibraryTaskGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link OnboardingLibraryTasks} entity.
   */
  declare libraryTask?: OnboardingLibraryTasks<T> | null;

  constructor(_entityApi: OnboardingLibraryTaskGroupingsApi<T>) {
    super(_entityApi);
  }
}

export interface OnboardingLibraryTaskGroupingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  taskName: DeserializedType<T, 'Edm.String'>;
  taskGroupName: DeserializedType<T, 'Edm.String'>;
  libraryTaskGroup?: OnboardingLibraryTaskGroupsType<T> | null;
  libraryTask?: OnboardingLibraryTasksType<T> | null;
}
