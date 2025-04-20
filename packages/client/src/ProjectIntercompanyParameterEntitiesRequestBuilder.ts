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
import { ProjectIntercompanyParameterEntities } from './ProjectIntercompanyParameterEntities';

/**
 * Request builder class for operations supported on the {@link ProjectIntercompanyParameterEntities} entity.
 */
export class ProjectIntercompanyParameterEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectIntercompanyParameterEntities<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectIntercompanyParameterEntities` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectIntercompanyParameterEntities` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectIntercompanyParameterEntities<T>, T> {
    return new GetAllRequestBuilder<ProjectIntercompanyParameterEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectIntercompanyParameterEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectIntercompanyParameterEntities`.
   */
  create(
    entity: ProjectIntercompanyParameterEntities<T>
  ): CreateRequestBuilder<ProjectIntercompanyParameterEntities<T>, T> {
    return new CreateRequestBuilder<ProjectIntercompanyParameterEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectIntercompanyParameterEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectIntercompanyParameterEntities.dataAreaId}.
   * @param borrowingLegalEntity Key property. See {@link ProjectIntercompanyParameterEntities.borrowingLegalEntity}.
   * @returns A request builder for creating requests to retrieve one `ProjectIntercompanyParameterEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    borrowingLegalEntity: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectIntercompanyParameterEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      ProjectIntercompanyParameterEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      BorrowingLegalEntity: borrowingLegalEntity
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectIntercompanyParameterEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectIntercompanyParameterEntities`.
   */
  update(
    entity: ProjectIntercompanyParameterEntities<T>
  ): UpdateRequestBuilder<ProjectIntercompanyParameterEntities<T>, T> {
    return new UpdateRequestBuilder<ProjectIntercompanyParameterEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectIntercompanyParameterEntities`.
   * @param dataAreaId Key property. See {@link ProjectIntercompanyParameterEntities.dataAreaId}.
   * @param borrowingLegalEntity Key property. See {@link ProjectIntercompanyParameterEntities.borrowingLegalEntity}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectIntercompanyParameterEntities`.
   */
  delete(
    dataAreaId: string,
    borrowingLegalEntity: string
  ): DeleteRequestBuilder<ProjectIntercompanyParameterEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectIntercompanyParameterEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectIntercompanyParameterEntities` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectIntercompanyParameterEntities<T>
  ): DeleteRequestBuilder<ProjectIntercompanyParameterEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    borrowingLegalEntity?: string
  ): DeleteRequestBuilder<ProjectIntercompanyParameterEntities<T>, T> {
    return new DeleteRequestBuilder<ProjectIntercompanyParameterEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectIntercompanyParameterEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BorrowingLegalEntity: borrowingLegalEntity!
          }
    );
  }
}
