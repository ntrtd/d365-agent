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
import { ProjectCategoryEntities } from './ProjectCategoryEntities';

/**
 * Request builder class for operations supported on the {@link ProjectCategoryEntities} entity.
 */
export class ProjectCategoryEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectCategoryEntities<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectCategoryEntities` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectCategoryEntities` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectCategoryEntities<T>, T> {
    return new GetAllRequestBuilder<ProjectCategoryEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectCategoryEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectCategoryEntities`.
   */
  create(
    entity: ProjectCategoryEntities<T>
  ): CreateRequestBuilder<ProjectCategoryEntities<T>, T> {
    return new CreateRequestBuilder<ProjectCategoryEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectCategoryEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectCategoryEntities.dataAreaId}.
   * @param category Key property. See {@link ProjectCategoryEntities.category}.
   * @returns A request builder for creating requests to retrieve one `ProjectCategoryEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    category: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectCategoryEntities<T>, T> {
    return new GetByKeyRequestBuilder<ProjectCategoryEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Category: category
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectCategoryEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectCategoryEntities`.
   */
  update(
    entity: ProjectCategoryEntities<T>
  ): UpdateRequestBuilder<ProjectCategoryEntities<T>, T> {
    return new UpdateRequestBuilder<ProjectCategoryEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectCategoryEntities`.
   * @param dataAreaId Key property. See {@link ProjectCategoryEntities.dataAreaId}.
   * @param category Key property. See {@link ProjectCategoryEntities.category}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectCategoryEntities`.
   */
  delete(
    dataAreaId: string,
    category: string
  ): DeleteRequestBuilder<ProjectCategoryEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectCategoryEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectCategoryEntities` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectCategoryEntities<T>
  ): DeleteRequestBuilder<ProjectCategoryEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    category?: string
  ): DeleteRequestBuilder<ProjectCategoryEntities<T>, T> {
    return new DeleteRequestBuilder<ProjectCategoryEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectCategoryEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Category: category!
          }
    );
  }
}
