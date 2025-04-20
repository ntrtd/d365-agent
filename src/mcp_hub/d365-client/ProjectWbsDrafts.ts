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
import type { ProjectWbsDraftsApi } from './ProjectWbsDraftsApi';
import { NoYes } from './NoYes';
import { SmmActivityTaskTimeType } from './SmmActivityTaskTimeType';
import { SmmActivityPriority } from './SmmActivityPriority';
import {
  ProjectCategoryEntities,
  ProjectCategoryEntitiesType
} from './ProjectCategoryEntities';
import { Projects, ProjectsType } from './Projects';
import {
  ResourceCategories,
  ResourceCategoriesType
} from './ResourceCategories';

/**
 * This class represents the entity "ProjectWBSDrafts" of service "d365_metadata".
 */
export class ProjectWbsDrafts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjectWbsDraftsType<T>
{
  /**
   * Technical entity name for ProjectWbsDrafts.
   */
  static override _entityName = 'ProjectWBSDrafts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectWbsDrafts entity.
   */
  static _keys = ['dataAreaId', 'ProjectId', 'WBSId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Id.
   */
  declare projectId: DeserializedType<T, 'Edm.String'>;
  /**
   * Wbs Id.
   */
  declare wbsId: DeserializedType<T, 'Edm.String'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Category.
   * @nullable
   */
  declare category?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Task Closed.
   * @nullable
   */
  declare isTaskClosed?: NoYes | null;
  /**
   * Task.
   * @nullable
   */
  declare task?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Of Resources.
   */
  declare numberOfResources: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Task Effort At Complete.
   */
  declare taskEffortAtComplete: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Task Cost At Complete.
   */
  declare taskCostAtComplete: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Effort.
   */
  declare effort: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Category Mandatory.
   * @nullable
   */
  declare isCategoryMandatory?: NoYes | null;
  /**
   * Role.
   * @nullable
   */
  declare role?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Task Time Type.
   * @nullable
   */
  declare activityTaskTimeType?: SmmActivityTaskTimeType | null;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Duration.
   */
  declare duration: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Task Mandatory.
   * @nullable
   */
  declare isTaskMandatory?: NoYes | null;
  /**
   * Activity Status.
   * @nullable
   */
  declare activityStatus?: SmmActivityTaskTimeType | null;
  /**
   * Predecessors.
   * @nullable
   */
  declare predecessors?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Task Priority.
   * @nullable
   */
  declare taskPriority?: SmmActivityPriority | null;
  /**
   * One-to-one navigation property to the {@link ProjectCategoryEntities} entity.
   */
  declare projectCategories?: ProjectCategoryEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  declare projects?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link ResourceCategories} entity.
   */
  declare roles?: ResourceCategories<T> | null;

  constructor(_entityApi: ProjectWbsDraftsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectWbsDraftsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectId: DeserializedType<T, 'Edm.String'>;
  wbsId: DeserializedType<T, 'Edm.String'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  category?: DeserializedType<T, 'Edm.String'> | null;
  isTaskClosed?: NoYes | null;
  task?: DeserializedType<T, 'Edm.String'> | null;
  numberOfResources: DeserializedType<T, 'Edm.Decimal'>;
  taskEffortAtComplete: DeserializedType<T, 'Edm.Decimal'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taskCostAtComplete: DeserializedType<T, 'Edm.Decimal'>;
  effort: DeserializedType<T, 'Edm.Decimal'>;
  isCategoryMandatory?: NoYes | null;
  role?: DeserializedType<T, 'Edm.String'> | null;
  activityTaskTimeType?: SmmActivityTaskTimeType | null;
  note?: DeserializedType<T, 'Edm.String'> | null;
  duration: DeserializedType<T, 'Edm.Decimal'>;
  isTaskMandatory?: NoYes | null;
  activityStatus?: SmmActivityTaskTimeType | null;
  predecessors?: DeserializedType<T, 'Edm.String'> | null;
  taskPriority?: SmmActivityPriority | null;
  projectCategories?: ProjectCategoryEntitiesType<T> | null;
  projects?: ProjectsType<T> | null;
  roles?: ResourceCategoriesType<T> | null;
}
