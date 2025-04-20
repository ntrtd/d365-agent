/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { EducationDisciplineCategories } from './EducationDisciplineCategories';

/**
 * Request builder class for operations supported on the {@link EducationDisciplineCategories} entity.
 */
export class EducationDisciplineCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EducationDisciplineCategories<T>, T> {
  /**
   * Returns a request builder for querying all `EducationDisciplineCategories` entities.
   * @returns A request builder for creating requests to retrieve all `EducationDisciplineCategories` entities.
   */
  getAll(): GetAllRequestBuilder<EducationDisciplineCategories<T>, T> {
    return new GetAllRequestBuilder<EducationDisciplineCategories<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EducationDisciplineCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EducationDisciplineCategories`.
   */
  create(
    entity: EducationDisciplineCategories<T>
  ): CreateRequestBuilder<EducationDisciplineCategories<T>, T> {
    return new CreateRequestBuilder<EducationDisciplineCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EducationDisciplineCategories` entity based on its keys.
   * @param educationDisciplineCategory Key property. See {@link EducationDisciplineCategories.educationDisciplineCategory}.
   * @returns A request builder for creating requests to retrieve one `EducationDisciplineCategories` entity based on its keys.
   */
  getByKey(
    educationDisciplineCategory: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EducationDisciplineCategories<T>, T> {
    return new GetByKeyRequestBuilder<EducationDisciplineCategories<T>, T>(
      this.entityApi,
      { EducationDisciplineCategory: educationDisciplineCategory }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EducationDisciplineCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EducationDisciplineCategories`.
   */
  update(
    entity: EducationDisciplineCategories<T>
  ): UpdateRequestBuilder<EducationDisciplineCategories<T>, T> {
    return new UpdateRequestBuilder<EducationDisciplineCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EducationDisciplineCategories`.
   * @param educationDisciplineCategory Key property. See {@link EducationDisciplineCategories.educationDisciplineCategory}.
   * @returns A request builder for creating requests that delete an entity of type `EducationDisciplineCategories`.
   */
  delete(
    educationDisciplineCategory: string
  ): DeleteRequestBuilder<EducationDisciplineCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EducationDisciplineCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EducationDisciplineCategories` by taking the entity as a parameter.
   */
  delete(
    entity: EducationDisciplineCategories<T>
  ): DeleteRequestBuilder<EducationDisciplineCategories<T>, T>;
  delete(
    educationDisciplineCategoryOrEntity: any
  ): DeleteRequestBuilder<EducationDisciplineCategories<T>, T> {
    return new DeleteRequestBuilder<EducationDisciplineCategories<T>, T>(
      this.entityApi,
      educationDisciplineCategoryOrEntity instanceof
      EducationDisciplineCategories
        ? educationDisciplineCategoryOrEntity
        : { EducationDisciplineCategory: educationDisciplineCategoryOrEntity! }
    );
  }
}
