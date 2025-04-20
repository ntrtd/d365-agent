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
import { ProjectFeeForecasts } from './ProjectFeeForecasts';

/**
 * Request builder class for operations supported on the {@link ProjectFeeForecasts} entity.
 */
export class ProjectFeeForecastsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectFeeForecasts<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectFeeForecasts` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectFeeForecasts` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectFeeForecasts<T>, T> {
    return new GetAllRequestBuilder<ProjectFeeForecasts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjectFeeForecasts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectFeeForecasts`.
   */
  create(
    entity: ProjectFeeForecasts<T>
  ): CreateRequestBuilder<ProjectFeeForecasts<T>, T> {
    return new CreateRequestBuilder<ProjectFeeForecasts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectFeeForecasts` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectFeeForecasts.dataAreaId}.
   * @param transactionId Key property. See {@link ProjectFeeForecasts.transactionId}.
   * @returns A request builder for creating requests to retrieve one `ProjectFeeForecasts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectFeeForecasts<T>, T> {
    return new GetByKeyRequestBuilder<ProjectFeeForecasts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransactionID: transactionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectFeeForecasts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectFeeForecasts`.
   */
  update(
    entity: ProjectFeeForecasts<T>
  ): UpdateRequestBuilder<ProjectFeeForecasts<T>, T> {
    return new UpdateRequestBuilder<ProjectFeeForecasts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectFeeForecasts`.
   * @param dataAreaId Key property. See {@link ProjectFeeForecasts.dataAreaId}.
   * @param transactionId Key property. See {@link ProjectFeeForecasts.transactionId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectFeeForecasts`.
   */
  delete(
    dataAreaId: string,
    transactionId: string
  ): DeleteRequestBuilder<ProjectFeeForecasts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectFeeForecasts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectFeeForecasts` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectFeeForecasts<T>
  ): DeleteRequestBuilder<ProjectFeeForecasts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transactionId?: string
  ): DeleteRequestBuilder<ProjectFeeForecasts<T>, T> {
    return new DeleteRequestBuilder<ProjectFeeForecasts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectFeeForecasts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransactionID: transactionId!
          }
    );
  }
}
