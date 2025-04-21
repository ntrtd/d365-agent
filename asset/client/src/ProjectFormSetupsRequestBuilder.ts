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
import { ProjectFormSetups } from './ProjectFormSetups';

/**
 * Request builder class for operations supported on the {@link ProjectFormSetups} entity.
 */
export class ProjectFormSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectFormSetups<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectFormSetups` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectFormSetups` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectFormSetups<T>, T> {
    return new GetAllRequestBuilder<ProjectFormSetups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjectFormSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectFormSetups`.
   */
  create(
    entity: ProjectFormSetups<T>
  ): CreateRequestBuilder<ProjectFormSetups<T>, T> {
    return new CreateRequestBuilder<ProjectFormSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectFormSetups` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectFormSetups.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `ProjectFormSetups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectFormSetups<T>, T> {
    return new GetByKeyRequestBuilder<ProjectFormSetups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectFormSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectFormSetups`.
   */
  update(
    entity: ProjectFormSetups<T>
  ): UpdateRequestBuilder<ProjectFormSetups<T>, T> {
    return new UpdateRequestBuilder<ProjectFormSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectFormSetups`.
   * @param dataAreaId Key property. See {@link ProjectFormSetups.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectFormSetups`.
   */
  delete(dataAreaId: string): DeleteRequestBuilder<ProjectFormSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectFormSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectFormSetups` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectFormSetups<T>
  ): DeleteRequestBuilder<ProjectFormSetups<T>, T>;
  delete(
    dataAreaIdOrEntity: any
  ): DeleteRequestBuilder<ProjectFormSetups<T>, T> {
    return new DeleteRequestBuilder<ProjectFormSetups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectFormSetups
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
