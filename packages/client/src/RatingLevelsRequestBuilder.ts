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
import { RatingLevels } from './RatingLevels';

/**
 * Request builder class for operations supported on the {@link RatingLevels} entity.
 */
export class RatingLevelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RatingLevels<T>, T> {
  /**
   * Returns a request builder for querying all `RatingLevels` entities.
   * @returns A request builder for creating requests to retrieve all `RatingLevels` entities.
   */
  getAll(): GetAllRequestBuilder<RatingLevels<T>, T> {
    return new GetAllRequestBuilder<RatingLevels<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RatingLevels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RatingLevels`.
   */
  create(entity: RatingLevels<T>): CreateRequestBuilder<RatingLevels<T>, T> {
    return new CreateRequestBuilder<RatingLevels<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RatingLevels` entity based on its keys.
   * @param ratingLevelId Key property. See {@link RatingLevels.ratingLevelId}.
   * @param ratingModelId Key property. See {@link RatingLevels.ratingModelId}.
   * @returns A request builder for creating requests to retrieve one `RatingLevels` entity based on its keys.
   */
  getByKey(
    ratingLevelId: DeserializedType<T, 'Edm.String'>,
    ratingModelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RatingLevels<T>, T> {
    return new GetByKeyRequestBuilder<RatingLevels<T>, T>(this.entityApi, {
      RatingLevelId: ratingLevelId,
      RatingModelId: ratingModelId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RatingLevels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RatingLevels`.
   */
  update(entity: RatingLevels<T>): UpdateRequestBuilder<RatingLevels<T>, T> {
    return new UpdateRequestBuilder<RatingLevels<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RatingLevels`.
   * @param ratingLevelId Key property. See {@link RatingLevels.ratingLevelId}.
   * @param ratingModelId Key property. See {@link RatingLevels.ratingModelId}.
   * @returns A request builder for creating requests that delete an entity of type `RatingLevels`.
   */
  delete(
    ratingLevelId: string,
    ratingModelId: string
  ): DeleteRequestBuilder<RatingLevels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RatingLevels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RatingLevels` by taking the entity as a parameter.
   */
  delete(entity: RatingLevels<T>): DeleteRequestBuilder<RatingLevels<T>, T>;
  delete(
    ratingLevelIdOrEntity: any,
    ratingModelId?: string
  ): DeleteRequestBuilder<RatingLevels<T>, T> {
    return new DeleteRequestBuilder<RatingLevels<T>, T>(
      this.entityApi,
      ratingLevelIdOrEntity instanceof RatingLevels
        ? ratingLevelIdOrEntity
        : {
            RatingLevelId: ratingLevelIdOrEntity!,
            RatingModelId: ratingModelId!
          }
    );
  }
}
