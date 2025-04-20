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
import { RatingsAndReviewsConnectors } from './RatingsAndReviewsConnectors';

/**
 * Request builder class for operations supported on the {@link RatingsAndReviewsConnectors} entity.
 */
export class RatingsAndReviewsConnectorsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RatingsAndReviewsConnectors<T>, T> {
  /**
   * Returns a request builder for querying all `RatingsAndReviewsConnectors` entities.
   * @returns A request builder for creating requests to retrieve all `RatingsAndReviewsConnectors` entities.
   */
  getAll(): GetAllRequestBuilder<RatingsAndReviewsConnectors<T>, T> {
    return new GetAllRequestBuilder<RatingsAndReviewsConnectors<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RatingsAndReviewsConnectors` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RatingsAndReviewsConnectors`.
   */
  create(
    entity: RatingsAndReviewsConnectors<T>
  ): CreateRequestBuilder<RatingsAndReviewsConnectors<T>, T> {
    return new CreateRequestBuilder<RatingsAndReviewsConnectors<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RatingsAndReviewsConnectors` entity based on its keys.
   * @param name Key property. See {@link RatingsAndReviewsConnectors.name}.
   * @returns A request builder for creating requests to retrieve one `RatingsAndReviewsConnectors` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RatingsAndReviewsConnectors<T>, T> {
    return new GetByKeyRequestBuilder<RatingsAndReviewsConnectors<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RatingsAndReviewsConnectors`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RatingsAndReviewsConnectors`.
   */
  update(
    entity: RatingsAndReviewsConnectors<T>
  ): UpdateRequestBuilder<RatingsAndReviewsConnectors<T>, T> {
    return new UpdateRequestBuilder<RatingsAndReviewsConnectors<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RatingsAndReviewsConnectors`.
   * @param name Key property. See {@link RatingsAndReviewsConnectors.name}.
   * @returns A request builder for creating requests that delete an entity of type `RatingsAndReviewsConnectors`.
   */
  delete(name: string): DeleteRequestBuilder<RatingsAndReviewsConnectors<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RatingsAndReviewsConnectors`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RatingsAndReviewsConnectors` by taking the entity as a parameter.
   */
  delete(
    entity: RatingsAndReviewsConnectors<T>
  ): DeleteRequestBuilder<RatingsAndReviewsConnectors<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<RatingsAndReviewsConnectors<T>, T> {
    return new DeleteRequestBuilder<RatingsAndReviewsConnectors<T>, T>(
      this.entityApi,
      nameOrEntity instanceof RatingsAndReviewsConnectors
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
