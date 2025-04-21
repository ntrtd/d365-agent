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
import type { ValidationProjectTasksApi } from './ValidationProjectTasksApi';
import { MenuItemType } from './MenuItemType';
import {
  ValidationTaskAreas,
  ValidationTaskAreasType
} from './ValidationTaskAreas';
import {
  ValidationProjects,
  ValidationProjectsType
} from './ValidationProjects';

/**
 * This class represents the entity "ValidationProjectTasks" of service "d365_metadata".
 */
export class ValidationProjectTasks<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ValidationProjectTasksType<T>
{
  /**
   * Technical entity name for ValidationProjectTasks.
   */
  static override _entityName = 'ValidationProjectTasks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ValidationProjectTasks entity.
   */
  static _keys = ['DataValidationProject_Name', 'LineNumber'];
  /**
   * Data Validation Project Name.
   */
  declare dataValidationProjectName: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Display Order.
   */
  declare displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Menu Item Type.
   * @nullable
   */
  declare menuItemType?: MenuItemType | null;
  /**
   * Menu Item.
   * @nullable
   */
  declare menuItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Area Name.
   * @nullable
   */
  declare areaName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ValidationTaskAreas} entity.
   */
  declare validationTaskArea?: ValidationTaskAreas<T> | null;
  /**
   * One-to-one navigation property to the {@link ValidationProjects} entity.
   */
  declare validationProject?: ValidationProjects<T> | null;

  constructor(_entityApi: ValidationProjectTasksApi<T>) {
    super(_entityApi);
  }
}

export interface ValidationProjectTasksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataValidationProjectName: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  menuItemType?: MenuItemType | null;
  menuItem?: DeserializedType<T, 'Edm.String'> | null;
  areaName?: DeserializedType<T, 'Edm.String'> | null;
  validationTaskArea?: ValidationTaskAreasType<T> | null;
  validationProject?: ValidationProjectsType<T> | null;
}
