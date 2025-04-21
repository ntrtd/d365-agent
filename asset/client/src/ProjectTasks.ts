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
import type { ProjectTasksApi } from './ProjectTasksApi';
import { SmmShowTimeAs } from './SmmShowTimeAs';
import { SmmActivityTaskTimeType } from './SmmActivityTaskTimeType';

/**
 * This class represents the entity "ProjectTasks" of service "d365_metadata".
 */
export class ProjectTasks<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjectTasksType<T>
{
  /**
   * Technical entity name for ProjectTasks.
   */
  static override _entityName = 'ProjectTasks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectTasks entity.
   */
  static _keys = ['dataAreaId', 'ProjectId', 'TaskId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Id.
   */
  declare projectId: DeserializedType<T, 'Edm.String'>;
  /**
   * Task Id.
   */
  declare taskId: DeserializedType<T, 'Edm.String'>;
  /**
   * Task Element Id.
   * @nullable
   */
  declare taskElementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Task Outline Level.
   */
  declare taskOutlineLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Parent Task Element Id.
   * @nullable
   */
  declare parentTaskElementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Task Status.
   * @nullable
   */
  declare taskStatus?: SmmShowTimeAs | null;
  /**
   * Task Time Type.
   * @nullable
   */
  declare taskTimeType?: SmmActivityTaskTimeType | null;
  /**
   * Task Display Sequence.
   */
  declare taskDisplaySequence: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Task Name.
   * @nullable
   */
  declare taskName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProjectTasksApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectTasksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectId: DeserializedType<T, 'Edm.String'>;
  taskId: DeserializedType<T, 'Edm.String'>;
  taskElementId?: DeserializedType<T, 'Edm.String'> | null;
  taskOutlineLevel: DeserializedType<T, 'Edm.Int32'>;
  parentTaskElementId?: DeserializedType<T, 'Edm.String'> | null;
  taskStatus?: SmmShowTimeAs | null;
  taskTimeType?: SmmActivityTaskTimeType | null;
  taskDisplaySequence: DeserializedType<T, 'Edm.Decimal'>;
  taskName?: DeserializedType<T, 'Edm.String'> | null;
}
