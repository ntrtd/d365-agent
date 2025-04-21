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
import type { ProcessTemplateTasksApi } from './ProcessTemplateTasksApi';
import { MenuItemType } from './MenuItemType';
import { BusinessProcessType } from './BusinessProcessType';
import { BusinessProcessAssignmentType } from './BusinessProcessAssignmentType';
import { NoYes } from './NoYes';
import { BusinessProcessGenericSubtype } from './BusinessProcessGenericSubtype';
import {
  ProcessGroupAssignments,
  ProcessGroupAssignmentsType
} from './ProcessGroupAssignments';
import {
  ProcessTemplateHeaders,
  ProcessTemplateHeadersType
} from './ProcessTemplateHeaders';

/**
 * This class represents the entity "ProcessTemplateTasks" of service "d365_metadata".
 */
export class ProcessTemplateTasks<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProcessTemplateTasksType<T>
{
  /**
   * Technical entity name for ProcessTemplateTasks.
   */
  static override _entityName = 'ProcessTemplateTasks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProcessTemplateTasks entity.
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
   * Menu Item Type.
   * @nullable
   */
  declare menuItemType?: MenuItemType | null;
  /**
   * Instructions.
   * @nullable
   */
  declare instructions?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Library Task Name.
   * @nullable
   */
  declare libraryTaskName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Assigned Position Position Id.
   * @nullable
   */
  declare assignedPositionPositionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Library Task Process Type.
   * @nullable
   */
  declare libraryTaskProcessType?: BusinessProcessType | null;
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
   * Is Optional.
   * @nullable
   */
  declare isOptional?: NoYes | null;
  /**
   * Contact Person Party Number.
   * @nullable
   */
  declare contactPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Template Header Generic Subtype.
   * @nullable
   */
  declare templateHeaderGenericSubtype?: BusinessProcessGenericSubtype | null;
  /**
   * Due Date Offset Days.
   */
  declare dueDateOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Template Header Name.
   * @nullable
   */
  declare templateHeaderName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Personnel Number.
   * @nullable
   */
  declare contactPersonPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Template Header Process Type.
   * @nullable
   */
  declare templateHeaderProcessType?: BusinessProcessType | null;
  /**
   * Menu Item.
   * @nullable
   */
  declare menuItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Assigned Group Name.
   * @nullable
   */
  declare assignedGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ProcessGroupAssignments} entity.
   */
  declare assignedGroup?: ProcessGroupAssignments<T> | null;
  /**
   * One-to-one navigation property to the {@link ProcessTemplateHeaders} entity.
   */
  declare template?: ProcessTemplateHeaders<T> | null;

  constructor(_entityApi: ProcessTemplateTasksApi<T>) {
    super(_entityApi);
  }
}

export interface ProcessTemplateTasksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  taskId: DeserializedType<T, 'Edm.Guid'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  menuItemType?: MenuItemType | null;
  instructions?: DeserializedType<T, 'Edm.String'> | null;
  libraryTaskName?: DeserializedType<T, 'Edm.String'> | null;
  assignedPositionPositionId?: DeserializedType<T, 'Edm.String'> | null;
  libraryTaskProcessType?: BusinessProcessType | null;
  assignmentType?: BusinessProcessAssignmentType | null;
  assignedWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  isOptional?: NoYes | null;
  contactPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  templateHeaderGenericSubtype?: BusinessProcessGenericSubtype | null;
  dueDateOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  templateHeaderName?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  templateHeaderProcessType?: BusinessProcessType | null;
  menuItem?: DeserializedType<T, 'Edm.String'> | null;
  assignedGroupName?: DeserializedType<T, 'Edm.String'> | null;
  assignedGroup?: ProcessGroupAssignmentsType<T> | null;
  template?: ProcessTemplateHeadersType<T> | null;
}
