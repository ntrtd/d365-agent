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
import type { OnboardingLibraryTaskGroupsApi } from './OnboardingLibraryTaskGroupsApi';
import {
  OnboardingLibraryTaskGroupings,
  OnboardingLibraryTaskGroupingsType
} from './OnboardingLibraryTaskGroupings';

/**
 * This class represents the entity "OnboardingLibraryTaskGroups" of service "d365_metadata".
 */
export class OnboardingLibraryTaskGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OnboardingLibraryTaskGroupsType<T>
{
  /**
   * Technical entity name for OnboardingLibraryTaskGroups.
   */
  static override _entityName = 'OnboardingLibraryTaskGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OnboardingLibraryTaskGroups entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link OnboardingLibraryTaskGroupings} entity.
   */
  declare libraryTaskGroupings: OnboardingLibraryTaskGroupings<T>[];

  constructor(_entityApi: OnboardingLibraryTaskGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface OnboardingLibraryTaskGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  libraryTaskGroupings: OnboardingLibraryTaskGroupingsType<T>[];
}
