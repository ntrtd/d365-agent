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
import { ProjectEmplForecasts } from './ProjectEmplForecasts';

/**
 * Request builder class for operations supported on the {@link ProjectEmplForecasts} entity.
 */
export class ProjectEmplForecastsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectEmplForecasts<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectEmplForecasts` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectEmplForecasts` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectEmplForecasts<T>, T> {
    return new GetAllRequestBuilder<ProjectEmplForecasts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjectEmplForecasts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectEmplForecasts`.
   */
  create(
    entity: ProjectEmplForecasts<T>
  ): CreateRequestBuilder<ProjectEmplForecasts<T>, T> {
    return new CreateRequestBuilder<ProjectEmplForecasts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectEmplForecasts` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectEmplForecasts.dataAreaId}.
   * @param transactionId Key property. See {@link ProjectEmplForecasts.transactionId}.
   * @returns A request builder for creating requests to retrieve one `ProjectEmplForecasts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectEmplForecasts<T>, T> {
    return new GetByKeyRequestBuilder<ProjectEmplForecasts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransactionID: transactionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectEmplForecasts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectEmplForecasts`.
   */
  update(
    entity: ProjectEmplForecasts<T>
  ): UpdateRequestBuilder<ProjectEmplForecasts<T>, T> {
    return new UpdateRequestBuilder<ProjectEmplForecasts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectEmplForecasts`.
   * @param dataAreaId Key property. See {@link ProjectEmplForecasts.dataAreaId}.
   * @param transactionId Key property. See {@link ProjectEmplForecasts.transactionId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectEmplForecasts`.
   */
  delete(
    dataAreaId: string,
    transactionId: string
  ): DeleteRequestBuilder<ProjectEmplForecasts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectEmplForecasts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectEmplForecasts` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectEmplForecasts<T>
  ): DeleteRequestBuilder<ProjectEmplForecasts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transactionId?: string
  ): DeleteRequestBuilder<ProjectEmplForecasts<T>, T> {
    return new DeleteRequestBuilder<ProjectEmplForecasts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectEmplForecasts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransactionID: transactionId!
          }
    );
  }
}
