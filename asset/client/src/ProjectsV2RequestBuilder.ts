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
import { ProjectsV2 } from './ProjectsV2';

/**
 * Request builder class for operations supported on the {@link ProjectsV2} entity.
 */
export class ProjectsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectsV2<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectsV2` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectsV2` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectsV2<T>, T> {
    return new GetAllRequestBuilder<ProjectsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjectsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectsV2`.
   */
  create(entity: ProjectsV2<T>): CreateRequestBuilder<ProjectsV2<T>, T> {
    return new CreateRequestBuilder<ProjectsV2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProjectsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectsV2.dataAreaId}.
   * @param projectId Key property. See {@link ProjectsV2.projectId}.
   * @returns A request builder for creating requests to retrieve one `ProjectsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectsV2<T>, T> {
    return new GetByKeyRequestBuilder<ProjectsV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ProjectId: projectId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectsV2`.
   */
  update(entity: ProjectsV2<T>): UpdateRequestBuilder<ProjectsV2<T>, T> {
    return new UpdateRequestBuilder<ProjectsV2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectsV2`.
   * @param dataAreaId Key property. See {@link ProjectsV2.dataAreaId}.
   * @param projectId Key property. See {@link ProjectsV2.projectId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectsV2`.
   */
  delete(
    dataAreaId: string,
    projectId: string
  ): DeleteRequestBuilder<ProjectsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectsV2` by taking the entity as a parameter.
   */
  delete(entity: ProjectsV2<T>): DeleteRequestBuilder<ProjectsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectId?: string
  ): DeleteRequestBuilder<ProjectsV2<T>, T> {
    return new DeleteRequestBuilder<ProjectsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectId: projectId!
          }
    );
  }
}
