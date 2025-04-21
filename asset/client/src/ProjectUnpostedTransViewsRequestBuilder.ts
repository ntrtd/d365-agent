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
import { ProjectUnpostedTransViews } from './ProjectUnpostedTransViews';

/**
 * Request builder class for operations supported on the {@link ProjectUnpostedTransViews} entity.
 */
export class ProjectUnpostedTransViewsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectUnpostedTransViews<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectUnpostedTransViews` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectUnpostedTransViews` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectUnpostedTransViews<T>, T> {
    return new GetAllRequestBuilder<ProjectUnpostedTransViews<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectUnpostedTransViews` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectUnpostedTransViews`.
   */
  create(
    entity: ProjectUnpostedTransViews<T>
  ): CreateRequestBuilder<ProjectUnpostedTransViews<T>, T> {
    return new CreateRequestBuilder<ProjectUnpostedTransViews<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectUnpostedTransViews` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectUnpostedTransViews.dataAreaId}.
   * @param transactionId Key property. See {@link ProjectUnpostedTransViews.transactionId}.
   * @returns A request builder for creating requests to retrieve one `ProjectUnpostedTransViews` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectUnpostedTransViews<T>, T> {
    return new GetByKeyRequestBuilder<ProjectUnpostedTransViews<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransactionId: transactionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectUnpostedTransViews`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectUnpostedTransViews`.
   */
  update(
    entity: ProjectUnpostedTransViews<T>
  ): UpdateRequestBuilder<ProjectUnpostedTransViews<T>, T> {
    return new UpdateRequestBuilder<ProjectUnpostedTransViews<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectUnpostedTransViews`.
   * @param dataAreaId Key property. See {@link ProjectUnpostedTransViews.dataAreaId}.
   * @param transactionId Key property. See {@link ProjectUnpostedTransViews.transactionId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectUnpostedTransViews`.
   */
  delete(
    dataAreaId: string,
    transactionId: string
  ): DeleteRequestBuilder<ProjectUnpostedTransViews<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectUnpostedTransViews`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectUnpostedTransViews` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectUnpostedTransViews<T>
  ): DeleteRequestBuilder<ProjectUnpostedTransViews<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transactionId?: string
  ): DeleteRequestBuilder<ProjectUnpostedTransViews<T>, T> {
    return new DeleteRequestBuilder<ProjectUnpostedTransViews<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectUnpostedTransViews
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransactionId: transactionId!
          }
    );
  }
}
