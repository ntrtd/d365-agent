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
import type { ValidationTaskAreasApi } from './ValidationTaskAreasApi';
import {
  ValidationProjectTasks,
  ValidationProjectTasksType
} from './ValidationProjectTasks';

/**
 * This class represents the entity "ValidationTaskAreas" of service "d365_metadata".
 */
export class ValidationTaskAreas<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ValidationTaskAreasType<T>
{
  /**
   * Technical entity name for ValidationTaskAreas.
   */
  static override _entityName = 'ValidationTaskAreas';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ValidationTaskAreas entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Order.
   */
  declare displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ValidationProjectTasks} entity.
   */
  declare validationProjectTask: ValidationProjectTasks<T>[];

  constructor(_entityApi: ValidationTaskAreasApi<T>) {
    super(_entityApi);
  }
}

export interface ValidationTaskAreasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  validationProjectTask: ValidationProjectTasksType<T>[];
}
