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
import type { ProjectTransactionCategoriesApi } from './ProjectTransactionCategoriesApi';

/**
 * This class represents the entity "ProjectTransactionCategories" of service "d365_metadata".
 */
export class ProjectTransactionCategories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectTransactionCategoriesType<T>
{
  /**
   * Technical entity name for ProjectTransactionCategories.
   */
  static override _entityName = 'ProjectTransactionCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectTransactionCategories entity.
   */
  static _keys = ['CategoryId'];
  /**
   * Category Id.
   */
  declare categoryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProjectTransactionCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectTransactionCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  categoryId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
