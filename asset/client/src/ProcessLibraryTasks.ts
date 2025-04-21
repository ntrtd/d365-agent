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
import type { ProcessLibraryTasksApi } from './ProcessLibraryTasksApi';
import { BusinessProcessType } from './BusinessProcessType';
import { BusinessProcessAssignmentType } from './BusinessProcessAssignmentType';
import { MenuItemType } from './MenuItemType';
import { NoYes } from './NoYes';
import { People, PeopleType } from './People';

/**
 * This class represents the entity "ProcessLibraryTasks" of service "d365_metadata".
 */
export class ProcessLibraryTasks<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProcessLibraryTasksType<T>
{
  /**
   * Technical entity name for ProcessLibraryTasks.
   */
  static override _entityName = 'ProcessLibraryTasks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProcessLibraryTasks entity.
   */
  static _keys = ['Task', 'ProcessType'];
  /**
   * Task.
   */
  declare task: DeserializedType<T, 'Edm.String'>;
  /**
   * Process Type.
   * @nullable
   */
  declare processType?: BusinessProcessType | null;
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
   * Assigned Group.
   */
  declare assignedGroup: DeserializedType<T, 'Edm.Int64'>;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare contactPerson?: People<T> | null;

  constructor(_entityApi: ProcessLibraryTasksApi<T>) {
    super(_entityApi);
  }
}

export interface ProcessLibraryTasksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  task: DeserializedType<T, 'Edm.String'>;
  processType?: BusinessProcessType | null;
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
  assignedGroup: DeserializedType<T, 'Edm.Int64'>;
  contactPerson?: PeopleType<T> | null;
}
