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
import { RatingModels } from './RatingModels';

/**
 * Request builder class for operations supported on the {@link RatingModels} entity.
 */
export class RatingModelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RatingModels<T>, T> {
  /**
   * Returns a request builder for querying all `RatingModels` entities.
   * @returns A request builder for creating requests to retrieve all `RatingModels` entities.
   */
  getAll(): GetAllRequestBuilder<RatingModels<T>, T> {
    return new GetAllRequestBuilder<RatingModels<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RatingModels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RatingModels`.
   */
  create(entity: RatingModels<T>): CreateRequestBuilder<RatingModels<T>, T> {
    return new CreateRequestBuilder<RatingModels<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RatingModels` entity based on its keys.
   * @param ratingModelId Key property. See {@link RatingModels.ratingModelId}.
   * @returns A request builder for creating requests to retrieve one `RatingModels` entity based on its keys.
   */
  getByKey(
    ratingModelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RatingModels<T>, T> {
    return new GetByKeyRequestBuilder<RatingModels<T>, T>(this.entityApi, {
      RatingModelId: ratingModelId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RatingModels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RatingModels`.
   */
  update(entity: RatingModels<T>): UpdateRequestBuilder<RatingModels<T>, T> {
    return new UpdateRequestBuilder<RatingModels<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RatingModels`.
   * @param ratingModelId Key property. See {@link RatingModels.ratingModelId}.
   * @returns A request builder for creating requests that delete an entity of type `RatingModels`.
   */
  delete(ratingModelId: string): DeleteRequestBuilder<RatingModels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RatingModels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RatingModels` by taking the entity as a parameter.
   */
  delete(entity: RatingModels<T>): DeleteRequestBuilder<RatingModels<T>, T>;
  delete(ratingModelIdOrEntity: any): DeleteRequestBuilder<RatingModels<T>, T> {
    return new DeleteRequestBuilder<RatingModels<T>, T>(
      this.entityApi,
      ratingModelIdOrEntity instanceof RatingModels
        ? ratingModelIdOrEntity
        : { RatingModelId: ratingModelIdOrEntity! }
    );
  }
}
