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
import type { ProcessLibraryTaskGroupingsApi } from './ProcessLibraryTaskGroupingsApi';
import { BusinessProcessType } from './BusinessProcessType';

/**
 * This class represents the entity "ProcessLibraryTaskGroupings" of service "d365_metadata".
 */
export class ProcessLibraryTaskGroupings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProcessLibraryTaskGroupingsType<T>
{
  /**
   * Technical entity name for ProcessLibraryTaskGroupings.
   */
  static override _entityName = 'ProcessLibraryTaskGroupings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProcessLibraryTaskGroupings entity.
   */
  static _keys = [
    'LibraryTask_ProcessType',
    'LibraryTask_Name',
    'LibraryTaskGroup_ProcessType',
    'LibraryTaskGroup_Name'
  ];
  /**
   * Library Task Process Type.
   * @nullable
   */
  declare libraryTaskProcessType?: BusinessProcessType | null;
  /**
   * Library Task Name.
   */
  declare libraryTaskName: DeserializedType<T, 'Edm.String'>;
  /**
   * Library Task Group Process Type.
   * @nullable
   */
  declare libraryTaskGroupProcessType?: BusinessProcessType | null;
  /**
   * Library Task Group Name.
   */
  declare libraryTaskGroupName: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: ProcessLibraryTaskGroupingsApi<T>) {
    super(_entityApi);
  }
}

export interface ProcessLibraryTaskGroupingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  libraryTaskProcessType?: BusinessProcessType | null;
  libraryTaskName: DeserializedType<T, 'Edm.String'>;
  libraryTaskGroupProcessType?: BusinessProcessType | null;
  libraryTaskGroupName: DeserializedType<T, 'Edm.String'>;
}
