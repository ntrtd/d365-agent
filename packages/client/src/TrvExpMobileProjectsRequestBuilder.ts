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
import { TrvExpMobileProjects } from './TrvExpMobileProjects';

/**
 * Request builder class for operations supported on the {@link TrvExpMobileProjects} entity.
 */
export class TrvExpMobileProjectsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TrvExpMobileProjects<T>, T> {
  /**
   * Returns a request builder for querying all `TrvExpMobileProjects` entities.
   * @returns A request builder for creating requests to retrieve all `TrvExpMobileProjects` entities.
   */
  getAll(): GetAllRequestBuilder<TrvExpMobileProjects<T>, T> {
    return new GetAllRequestBuilder<TrvExpMobileProjects<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TrvExpMobileProjects` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TrvExpMobileProjects`.
   */
  create(
    entity: TrvExpMobileProjects<T>
  ): CreateRequestBuilder<TrvExpMobileProjects<T>, T> {
    return new CreateRequestBuilder<TrvExpMobileProjects<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TrvExpMobileProjects` entity based on its keys.
   * @param dataAreaId Key property. See {@link TrvExpMobileProjects.dataAreaId}.
   * @param projectId Key property. See {@link TrvExpMobileProjects.projectId}.
   * @returns A request builder for creating requests to retrieve one `TrvExpMobileProjects` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TrvExpMobileProjects<T>, T> {
    return new GetByKeyRequestBuilder<TrvExpMobileProjects<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjectID: projectId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TrvExpMobileProjects`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TrvExpMobileProjects`.
   */
  update(
    entity: TrvExpMobileProjects<T>
  ): UpdateRequestBuilder<TrvExpMobileProjects<T>, T> {
    return new UpdateRequestBuilder<TrvExpMobileProjects<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TrvExpMobileProjects`.
   * @param dataAreaId Key property. See {@link TrvExpMobileProjects.dataAreaId}.
   * @param projectId Key property. See {@link TrvExpMobileProjects.projectId}.
   * @returns A request builder for creating requests that delete an entity of type `TrvExpMobileProjects`.
   */
  delete(
    dataAreaId: string,
    projectId: string
  ): DeleteRequestBuilder<TrvExpMobileProjects<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TrvExpMobileProjects`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TrvExpMobileProjects` by taking the entity as a parameter.
   */
  delete(
    entity: TrvExpMobileProjects<T>
  ): DeleteRequestBuilder<TrvExpMobileProjects<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectId?: string
  ): DeleteRequestBuilder<TrvExpMobileProjects<T>, T> {
    return new DeleteRequestBuilder<TrvExpMobileProjects<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TrvExpMobileProjects
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectID: projectId!
          }
    );
  }
}
