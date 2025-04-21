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
import { RetailImages } from './RetailImages';

/**
 * Request builder class for operations supported on the {@link RetailImages} entity.
 */
export class RetailImagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailImages<T>, T> {
  /**
   * Returns a request builder for querying all `RetailImages` entities.
   * @returns A request builder for creating requests to retrieve all `RetailImages` entities.
   */
  getAll(): GetAllRequestBuilder<RetailImages<T>, T> {
    return new GetAllRequestBuilder<RetailImages<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailImages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailImages`.
   */
  create(entity: RetailImages<T>): CreateRequestBuilder<RetailImages<T>, T> {
    return new CreateRequestBuilder<RetailImages<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailImages` entity based on its keys.
   * @param pictureId Key property. See {@link RetailImages.pictureId}.
   * @returns A request builder for creating requests to retrieve one `RetailImages` entity based on its keys.
   */
  getByKey(
    pictureId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<RetailImages<T>, T> {
    return new GetByKeyRequestBuilder<RetailImages<T>, T>(this.entityApi, {
      PictureId: pictureId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailImages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailImages`.
   */
  update(entity: RetailImages<T>): UpdateRequestBuilder<RetailImages<T>, T> {
    return new UpdateRequestBuilder<RetailImages<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailImages`.
   * @param pictureId Key property. See {@link RetailImages.pictureId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailImages`.
   */
  delete(pictureId: number): DeleteRequestBuilder<RetailImages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailImages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailImages` by taking the entity as a parameter.
   */
  delete(entity: RetailImages<T>): DeleteRequestBuilder<RetailImages<T>, T>;
  delete(pictureIdOrEntity: any): DeleteRequestBuilder<RetailImages<T>, T> {
    return new DeleteRequestBuilder<RetailImages<T>, T>(
      this.entityApi,
      pictureIdOrEntity instanceof RetailImages
        ? pictureIdOrEntity
        : { PictureId: pictureIdOrEntity! }
    );
  }
}
