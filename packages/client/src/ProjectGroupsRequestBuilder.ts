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
import { ProjectGroups } from './ProjectGroups';

/**
 * Request builder class for operations supported on the {@link ProjectGroups} entity.
 */
export class ProjectGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectGroups<T>, T> {
    return new GetAllRequestBuilder<ProjectGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjectGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectGroups`.
   */
  create(entity: ProjectGroups<T>): CreateRequestBuilder<ProjectGroups<T>, T> {
    return new CreateRequestBuilder<ProjectGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectGroups.dataAreaId}.
   * @param projectGroup Key property. See {@link ProjectGroups.projectGroup}.
   * @returns A request builder for creating requests to retrieve one `ProjectGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectGroups<T>, T> {
    return new GetByKeyRequestBuilder<ProjectGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ProjectGroup: projectGroup
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectGroups`.
   */
  update(entity: ProjectGroups<T>): UpdateRequestBuilder<ProjectGroups<T>, T> {
    return new UpdateRequestBuilder<ProjectGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectGroups`.
   * @param dataAreaId Key property. See {@link ProjectGroups.dataAreaId}.
   * @param projectGroup Key property. See {@link ProjectGroups.projectGroup}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectGroups`.
   */
  delete(
    dataAreaId: string,
    projectGroup: string
  ): DeleteRequestBuilder<ProjectGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectGroups` by taking the entity as a parameter.
   */
  delete(entity: ProjectGroups<T>): DeleteRequestBuilder<ProjectGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectGroup?: string
  ): DeleteRequestBuilder<ProjectGroups<T>, T> {
    return new DeleteRequestBuilder<ProjectGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectGroup: projectGroup!
          }
    );
  }
}
