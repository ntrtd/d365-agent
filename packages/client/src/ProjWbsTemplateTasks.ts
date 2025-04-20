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
import type { ProjWbsTemplateTasksApi } from './ProjWbsTemplateTasksApi';
import { SmmActivityTaskTimeType } from './SmmActivityTaskTimeType';
import { NoYes } from './NoYes';
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
 * This class represents the entity "ProjWBSTemplateTasks" of service "d365_metadata".
 */
export class ProjWbsTemplateTasks<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjWbsTemplateTasksType<T>
{
  /**
   * Technical entity name for ProjWbsTemplateTasks.
   */
  static override _entityName = 'ProjWBSTemplateTasks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjWbsTemplateTasks entity.
   */
  static _keys = ['dataAreaId', 'HierarchyId', 'WBSId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Hierarchy Id.
   */
  declare hierarchyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Wbs Id.
   */
  declare wbsId: DeserializedType<T, 'Edm.String'>;
  /**
   * Effort.
   */
  declare effort: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Role.
   * @nullable
   */
  declare role?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Predecessors.
   * @nullable
   */
  declare predecessors?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Task.
   * @nullable
   */
  declare task?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Status.
   * @nullable
   */
  declare activityStatus?: SmmActivityTaskTimeType | null;
  /**
   * Is Category Mandatory.
   * @nullable
   */
  declare isCategoryMandatory?: NoYes | null;
  /**
   * Category.
   * @nullable
   */
  declare category?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Of Resources.
   */
  declare numberOfResources: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Task Priority.
   * @nullable
   */
  declare taskPriority?: SmmActivityPriority | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ProjectCategoryEntities} entity.
   */
  declare projectCategories?: ProjectCategoryEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link ResourceCategories} entity.
   */
  declare resourceCategory?: ResourceCategories<T> | null;

  constructor(_entityApi: ProjWbsTemplateTasksApi<T>) {
    super(_entityApi);
  }
}

export interface ProjWbsTemplateTasksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  hierarchyId: DeserializedType<T, 'Edm.String'>;
  wbsId: DeserializedType<T, 'Edm.String'>;
  effort: DeserializedType<T, 'Edm.Decimal'>;
  role?: DeserializedType<T, 'Edm.String'> | null;
  predecessors?: DeserializedType<T, 'Edm.String'> | null;
  task?: DeserializedType<T, 'Edm.String'> | null;
  activityStatus?: SmmActivityTaskTimeType | null;
  isCategoryMandatory?: NoYes | null;
  category?: DeserializedType<T, 'Edm.String'> | null;
  numberOfResources: DeserializedType<T, 'Edm.Decimal'>;
  taskPriority?: SmmActivityPriority | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  projectCategories?: ProjectCategoryEntitiesType<T> | null;
  resourceCategory?: ResourceCategoriesType<T> | null;
}
