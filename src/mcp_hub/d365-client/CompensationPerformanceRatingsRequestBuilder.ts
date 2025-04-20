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
import { CompensationPerformanceRatings } from './CompensationPerformanceRatings';

/**
 * Request builder class for operations supported on the {@link CompensationPerformanceRatings} entity.
 */
export class CompensationPerformanceRatingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CompensationPerformanceRatings<T>, T> {
  /**
   * Returns a request builder for querying all `CompensationPerformanceRatings` entities.
   * @returns A request builder for creating requests to retrieve all `CompensationPerformanceRatings` entities.
   */
  getAll(): GetAllRequestBuilder<CompensationPerformanceRatings<T>, T> {
    return new GetAllRequestBuilder<CompensationPerformanceRatings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CompensationPerformanceRatings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompensationPerformanceRatings`.
   */
  create(
    entity: CompensationPerformanceRatings<T>
  ): CreateRequestBuilder<CompensationPerformanceRatings<T>, T> {
    return new CreateRequestBuilder<CompensationPerformanceRatings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CompensationPerformanceRatings` entity based on its keys.
   * @param dataAreaId Key property. See {@link CompensationPerformanceRatings.dataAreaId}.
   * @param rating Key property. See {@link CompensationPerformanceRatings.rating}.
   * @returns A request builder for creating requests to retrieve one `CompensationPerformanceRatings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rating: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CompensationPerformanceRatings<T>, T> {
    return new GetByKeyRequestBuilder<CompensationPerformanceRatings<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Rating: rating
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CompensationPerformanceRatings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompensationPerformanceRatings`.
   */
  update(
    entity: CompensationPerformanceRatings<T>
  ): UpdateRequestBuilder<CompensationPerformanceRatings<T>, T> {
    return new UpdateRequestBuilder<CompensationPerformanceRatings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CompensationPerformanceRatings`.
   * @param dataAreaId Key property. See {@link CompensationPerformanceRatings.dataAreaId}.
   * @param rating Key property. See {@link CompensationPerformanceRatings.rating}.
   * @returns A request builder for creating requests that delete an entity of type `CompensationPerformanceRatings`.
   */
  delete(
    dataAreaId: string,
    rating: string
  ): DeleteRequestBuilder<CompensationPerformanceRatings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CompensationPerformanceRatings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompensationPerformanceRatings` by taking the entity as a parameter.
   */
  delete(
    entity: CompensationPerformanceRatings<T>
  ): DeleteRequestBuilder<CompensationPerformanceRatings<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rating?: string
  ): DeleteRequestBuilder<CompensationPerformanceRatings<T>, T> {
    return new DeleteRequestBuilder<CompensationPerformanceRatings<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CompensationPerformanceRatings
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Rating: rating!
          }
    );
  }
}
