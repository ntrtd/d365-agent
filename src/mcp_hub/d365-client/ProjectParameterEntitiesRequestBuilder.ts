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
import { ProjectParameterEntities } from './ProjectParameterEntities';

/**
 * Request builder class for operations supported on the {@link ProjectParameterEntities} entity.
 */
export class ProjectParameterEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectParameterEntities<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectParameterEntities` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectParameterEntities` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectParameterEntities<T>, T> {
    return new GetAllRequestBuilder<ProjectParameterEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectParameterEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectParameterEntities`.
   */
  create(
    entity: ProjectParameterEntities<T>
  ): CreateRequestBuilder<ProjectParameterEntities<T>, T> {
    return new CreateRequestBuilder<ProjectParameterEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectParameterEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectParameterEntities.dataAreaId}.
   * @param id Key property. See {@link ProjectParameterEntities.id}.
   * @returns A request builder for creating requests to retrieve one `ProjectParameterEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    id: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ProjectParameterEntities<T>, T> {
    return new GetByKeyRequestBuilder<ProjectParameterEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ID: id
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectParameterEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectParameterEntities`.
   */
  update(
    entity: ProjectParameterEntities<T>
  ): UpdateRequestBuilder<ProjectParameterEntities<T>, T> {
    return new UpdateRequestBuilder<ProjectParameterEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectParameterEntities`.
   * @param dataAreaId Key property. See {@link ProjectParameterEntities.dataAreaId}.
   * @param id Key property. See {@link ProjectParameterEntities.id}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectParameterEntities`.
   */
  delete(
    dataAreaId: string,
    id: number
  ): DeleteRequestBuilder<ProjectParameterEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectParameterEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectParameterEntities` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectParameterEntities<T>
  ): DeleteRequestBuilder<ProjectParameterEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    id?: number
  ): DeleteRequestBuilder<ProjectParameterEntities<T>, T> {
    return new DeleteRequestBuilder<ProjectParameterEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectParameterEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ID: id!
          }
    );
  }
}
