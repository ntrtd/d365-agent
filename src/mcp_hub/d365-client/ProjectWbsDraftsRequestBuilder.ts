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
import { ProjectWbsDrafts } from './ProjectWbsDrafts';

/**
 * Request builder class for operations supported on the {@link ProjectWbsDrafts} entity.
 */
export class ProjectWbsDraftsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectWbsDrafts<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectWbsDrafts` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectWbsDrafts` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectWbsDrafts<T>, T> {
    return new GetAllRequestBuilder<ProjectWbsDrafts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjectWbsDrafts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectWbsDrafts`.
   */
  create(
    entity: ProjectWbsDrafts<T>
  ): CreateRequestBuilder<ProjectWbsDrafts<T>, T> {
    return new CreateRequestBuilder<ProjectWbsDrafts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectWbsDrafts` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectWbsDrafts.dataAreaId}.
   * @param projectId Key property. See {@link ProjectWbsDrafts.projectId}.
   * @param wbsId Key property. See {@link ProjectWbsDrafts.wbsId}.
   * @returns A request builder for creating requests to retrieve one `ProjectWbsDrafts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectId: DeserializedType<T, 'Edm.String'>,
    wbsId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectWbsDrafts<T>, T> {
    return new GetByKeyRequestBuilder<ProjectWbsDrafts<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ProjectId: projectId,
      WBSId: wbsId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectWbsDrafts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectWbsDrafts`.
   */
  update(
    entity: ProjectWbsDrafts<T>
  ): UpdateRequestBuilder<ProjectWbsDrafts<T>, T> {
    return new UpdateRequestBuilder<ProjectWbsDrafts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectWbsDrafts`.
   * @param dataAreaId Key property. See {@link ProjectWbsDrafts.dataAreaId}.
   * @param projectId Key property. See {@link ProjectWbsDrafts.projectId}.
   * @param wbsId Key property. See {@link ProjectWbsDrafts.wbsId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectWbsDrafts`.
   */
  delete(
    dataAreaId: string,
    projectId: string,
    wbsId: string
  ): DeleteRequestBuilder<ProjectWbsDrafts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectWbsDrafts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectWbsDrafts` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectWbsDrafts<T>
  ): DeleteRequestBuilder<ProjectWbsDrafts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectId?: string,
    wbsId?: string
  ): DeleteRequestBuilder<ProjectWbsDrafts<T>, T> {
    return new DeleteRequestBuilder<ProjectWbsDrafts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectWbsDrafts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectId: projectId!,
            WBSId: wbsId!
          }
    );
  }
}
