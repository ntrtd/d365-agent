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
import { Media } from './Media';

/**
 * Request builder class for operations supported on the {@link Media} entity.
 */
export class MediaRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Media<T>, T> {
  /**
   * Returns a request builder for querying all `Media` entities.
   * @returns A request builder for creating requests to retrieve all `Media` entities.
   */
  getAll(): GetAllRequestBuilder<Media<T>, T> {
    return new GetAllRequestBuilder<Media<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Media` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Media`.
   */
  create(entity: Media<T>): CreateRequestBuilder<Media<T>, T> {
    return new CreateRequestBuilder<Media<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Media` entity based on its keys.
   * @param dataAreaId Key property. See {@link Media.dataAreaId}.
   * @param media Key property. See {@link Media.media}.
   * @returns A request builder for creating requests to retrieve one `Media` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    media: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Media<T>, T> {
    return new GetByKeyRequestBuilder<Media<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Media: media
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Media`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Media`.
   */
  update(entity: Media<T>): UpdateRequestBuilder<Media<T>, T> {
    return new UpdateRequestBuilder<Media<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Media`.
   * @param dataAreaId Key property. See {@link Media.dataAreaId}.
   * @param media Key property. See {@link Media.media}.
   * @returns A request builder for creating requests that delete an entity of type `Media`.
   */
  delete(dataAreaId: string, media: string): DeleteRequestBuilder<Media<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Media`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Media` by taking the entity as a parameter.
   */
  delete(entity: Media<T>): DeleteRequestBuilder<Media<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    media?: string
  ): DeleteRequestBuilder<Media<T>, T> {
    return new DeleteRequestBuilder<Media<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Media
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Media: media!
          }
    );
  }
}
