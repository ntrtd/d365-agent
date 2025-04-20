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
import type { ValidationProjectsApi } from './ValidationProjectsApi';
import {
  ValidationProjectTasks,
  ValidationProjectTasksType
} from './ValidationProjectTasks';

/**
 * This class represents the entity "ValidationProjects" of service "d365_metadata".
 */
export class ValidationProjects<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ValidationProjectsType<T>
{
  /**
   * Technical entity name for ValidationProjects.
   */
  static override _entityName = 'ValidationProjects';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ValidationProjects entity.
   */
  static _keys = ['Name', 'LegalEntity'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-many navigation property to the {@link ValidationProjectTasks} entity.
   */
  declare validationProjectTask: ValidationProjectTasks<T>[];

  constructor(_entityApi: ValidationProjectsApi<T>) {
    super(_entityApi);
  }
}

export interface ValidationProjectsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  legalEntity: DeserializedType<T, 'Edm.String'>;
  validationProjectTask: ValidationProjectTasksType<T>[];
}
