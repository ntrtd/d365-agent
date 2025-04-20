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
import type { ProcessGroupAssignmentsApi } from './ProcessGroupAssignmentsApi';
import { NoYes } from './NoYes';
import {
  ProcessTemplateTasks,
  ProcessTemplateTasksType
} from './ProcessTemplateTasks';
import { ProcessTasks, ProcessTasksType } from './ProcessTasks';
import {
  ProcessGroupAssignmentMembers,
  ProcessGroupAssignmentMembersType
} from './ProcessGroupAssignmentMembers';

/**
 * This class represents the entity "ProcessGroupAssignments" of service "d365_metadata".
 */
export class ProcessGroupAssignments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProcessGroupAssignmentsType<T>
{
  /**
   * Technical entity name for ProcessGroupAssignments.
   */
  static override _entityName = 'ProcessGroupAssignments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProcessGroupAssignments entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ProcessTemplateTasks} entity.
   */
  declare assignedTemplateTasks: ProcessTemplateTasks<T>[];
  /**
   * One-to-many navigation property to the {@link ProcessTasks} entity.
   */
  declare assignedTasks: ProcessTasks<T>[];
  /**
   * One-to-many navigation property to the {@link ProcessGroupAssignmentMembers} entity.
   */
  declare members: ProcessGroupAssignmentMembers<T>[];

  constructor(_entityApi: ProcessGroupAssignmentsApi<T>) {
    super(_entityApi);
  }
}

export interface ProcessGroupAssignmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  isActive?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  assignedTemplateTasks: ProcessTemplateTasksType<T>[];
  assignedTasks: ProcessTasksType<T>[];
  members: ProcessGroupAssignmentMembersType<T>[];
}
