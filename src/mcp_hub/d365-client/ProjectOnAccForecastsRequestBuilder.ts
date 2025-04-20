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
import { ProjectOnAccForecasts } from './ProjectOnAccForecasts';

/**
 * Request builder class for operations supported on the {@link ProjectOnAccForecasts} entity.
 */
export class ProjectOnAccForecastsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectOnAccForecasts<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectOnAccForecasts` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectOnAccForecasts` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectOnAccForecasts<T>, T> {
    return new GetAllRequestBuilder<ProjectOnAccForecasts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectOnAccForecasts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectOnAccForecasts`.
   */
  create(
    entity: ProjectOnAccForecasts<T>
  ): CreateRequestBuilder<ProjectOnAccForecasts<T>, T> {
    return new CreateRequestBuilder<ProjectOnAccForecasts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectOnAccForecasts` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectOnAccForecasts.dataAreaId}.
   * @param transactionId Key property. See {@link ProjectOnAccForecasts.transactionId}.
   * @returns A request builder for creating requests to retrieve one `ProjectOnAccForecasts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectOnAccForecasts<T>, T> {
    return new GetByKeyRequestBuilder<ProjectOnAccForecasts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransactionID: transactionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectOnAccForecasts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectOnAccForecasts`.
   */
  update(
    entity: ProjectOnAccForecasts<T>
  ): UpdateRequestBuilder<ProjectOnAccForecasts<T>, T> {
    return new UpdateRequestBuilder<ProjectOnAccForecasts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectOnAccForecasts`.
   * @param dataAreaId Key property. See {@link ProjectOnAccForecasts.dataAreaId}.
   * @param transactionId Key property. See {@link ProjectOnAccForecasts.transactionId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectOnAccForecasts`.
   */
  delete(
    dataAreaId: string,
    transactionId: string
  ): DeleteRequestBuilder<ProjectOnAccForecasts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectOnAccForecasts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectOnAccForecasts` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectOnAccForecasts<T>
  ): DeleteRequestBuilder<ProjectOnAccForecasts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transactionId?: string
  ): DeleteRequestBuilder<ProjectOnAccForecasts<T>, T> {
    return new DeleteRequestBuilder<ProjectOnAccForecasts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectOnAccForecasts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransactionID: transactionId!
          }
    );
  }
}
