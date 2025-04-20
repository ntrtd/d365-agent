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
import type { ProjectCostTemplateLineCategoriesApi } from './ProjectCostTemplateLineCategoriesApi';
import { ProjCostType } from './ProjCostType';

/**
 * This class represents the entity "ProjectCostTemplateLineCategories" of service "d365_metadata".
 */
export class ProjectCostTemplateLineCategories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectCostTemplateLineCategoriesType<T>
{
  /**
   * Technical entity name for ProjectCostTemplateLineCategories.
   */
  static override _entityName = 'ProjectCostTemplateLineCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectCostTemplateLineCategories entity.
   */
  static _keys = [
    'dataAreaId',
    'ControlId',
    'CostGroupId',
    'ProjectCategoryId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Control Id.
   */
  declare controlId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Group Id.
   */
  declare costGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Category Id.
   */
  declare projectCategoryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: ProjCostType | null;

  constructor(_entityApi: ProjectCostTemplateLineCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectCostTemplateLineCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  controlId: DeserializedType<T, 'Edm.String'>;
  costGroupId: DeserializedType<T, 'Edm.String'>;
  projectCategoryId: DeserializedType<T, 'Edm.String'>;
  transactionType?: ProjCostType | null;
}
