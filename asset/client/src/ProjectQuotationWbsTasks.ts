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
import type { ProjectQuotationWbsTasksApi } from './ProjectQuotationWbsTasksApi';
import { NoYes } from './NoYes';
import { SmmActivityTaskTimeType } from './SmmActivityTaskTimeType';
import { SmmActivityPriority } from './SmmActivityPriority';
import {
  ProjectCategoryEntities,
  ProjectCategoryEntitiesType
} from './ProjectCategoryEntities';
import {
  ResourceCategories,
  ResourceCategoriesType
} from './ResourceCategories';

/**
 * This class represents the entity "ProjectQuotationWbsTasks" of service "d365_metadata".
 */
export class ProjectQuotationWbsTasks<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectQuotationWbsTasksType<T>
{
  /**
   * Technical entity name for ProjectQuotationWbsTasks.
   */
  static override _entityName = 'ProjectQuotationWbsTasks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectQuotationWbsTasks entity.
   */
  static _keys = ['dataAreaId', 'QuotationId', 'WBSId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Quotation Id.
   */
  declare quotationId: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link ResourceCategories} entity.
   */
  declare resourceCategory?: ResourceCategories<T> | null;

  constructor(_entityApi: ProjectQuotationWbsTasksApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectQuotationWbsTasksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  quotationId: DeserializedType<T, 'Edm.String'>;
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
  resourceCategory?: ResourceCategoriesType<T> | null;
}
