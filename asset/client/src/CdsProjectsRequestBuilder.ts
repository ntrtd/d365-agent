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
import { CdsProjects } from './CdsProjects';

/**
 * Request builder class for operations supported on the {@link CdsProjects} entity.
 */
export class CdsProjectsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsProjects<T>, T> {
  /**
   * Returns a request builder for querying all `CdsProjects` entities.
   * @returns A request builder for creating requests to retrieve all `CdsProjects` entities.
   */
  getAll(): GetAllRequestBuilder<CdsProjects<T>, T> {
    return new GetAllRequestBuilder<CdsProjects<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CdsProjects` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsProjects`.
   */
  create(entity: CdsProjects<T>): CreateRequestBuilder<CdsProjects<T>, T> {
    return new CreateRequestBuilder<CdsProjects<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CdsProjects` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsProjects.dataAreaId}.
   * @param projectId Key property. See {@link CdsProjects.projectId}.
   * @returns A request builder for creating requests to retrieve one `CdsProjects` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CdsProjects<T>, T> {
    return new GetByKeyRequestBuilder<CdsProjects<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ProjectID: projectId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CdsProjects`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsProjects`.
   */
  update(entity: CdsProjects<T>): UpdateRequestBuilder<CdsProjects<T>, T> {
    return new UpdateRequestBuilder<CdsProjects<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsProjects`.
   * @param dataAreaId Key property. See {@link CdsProjects.dataAreaId}.
   * @param projectId Key property. See {@link CdsProjects.projectId}.
   * @returns A request builder for creating requests that delete an entity of type `CdsProjects`.
   */
  delete(
    dataAreaId: string,
    projectId: string
  ): DeleteRequestBuilder<CdsProjects<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsProjects`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsProjects` by taking the entity as a parameter.
   */
  delete(entity: CdsProjects<T>): DeleteRequestBuilder<CdsProjects<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectId?: string
  ): DeleteRequestBuilder<CdsProjects<T>, T> {
    return new DeleteRequestBuilder<CdsProjects<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsProjects
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectID: projectId!
          }
    );
  }
}
