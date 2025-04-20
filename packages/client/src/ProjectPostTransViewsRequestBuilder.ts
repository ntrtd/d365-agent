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
import { ProjectPostTransViews } from './ProjectPostTransViews';

/**
 * Request builder class for operations supported on the {@link ProjectPostTransViews} entity.
 */
export class ProjectPostTransViewsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectPostTransViews<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectPostTransViews` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectPostTransViews` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectPostTransViews<T>, T> {
    return new GetAllRequestBuilder<ProjectPostTransViews<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectPostTransViews` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectPostTransViews`.
   */
  create(
    entity: ProjectPostTransViews<T>
  ): CreateRequestBuilder<ProjectPostTransViews<T>, T> {
    return new CreateRequestBuilder<ProjectPostTransViews<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectPostTransViews` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectPostTransViews.dataAreaId}.
   * @param transactionId Key property. See {@link ProjectPostTransViews.transactionId}.
   * @returns A request builder for creating requests to retrieve one `ProjectPostTransViews` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectPostTransViews<T>, T> {
    return new GetByKeyRequestBuilder<ProjectPostTransViews<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransactionId: transactionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectPostTransViews`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectPostTransViews`.
   */
  update(
    entity: ProjectPostTransViews<T>
  ): UpdateRequestBuilder<ProjectPostTransViews<T>, T> {
    return new UpdateRequestBuilder<ProjectPostTransViews<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectPostTransViews`.
   * @param dataAreaId Key property. See {@link ProjectPostTransViews.dataAreaId}.
   * @param transactionId Key property. See {@link ProjectPostTransViews.transactionId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectPostTransViews`.
   */
  delete(
    dataAreaId: string,
    transactionId: string
  ): DeleteRequestBuilder<ProjectPostTransViews<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectPostTransViews`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectPostTransViews` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectPostTransViews<T>
  ): DeleteRequestBuilder<ProjectPostTransViews<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transactionId?: string
  ): DeleteRequestBuilder<ProjectPostTransViews<T>, T> {
    return new DeleteRequestBuilder<ProjectPostTransViews<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectPostTransViews
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransactionId: transactionId!
          }
    );
  }
}
