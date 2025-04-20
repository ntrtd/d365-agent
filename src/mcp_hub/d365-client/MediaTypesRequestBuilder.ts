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
import { MediaTypes } from './MediaTypes';

/**
 * Request builder class for operations supported on the {@link MediaTypes} entity.
 */
export class MediaTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MediaTypes<T>, T> {
  /**
   * Returns a request builder for querying all `MediaTypes` entities.
   * @returns A request builder for creating requests to retrieve all `MediaTypes` entities.
   */
  getAll(): GetAllRequestBuilder<MediaTypes<T>, T> {
    return new GetAllRequestBuilder<MediaTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MediaTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MediaTypes`.
   */
  create(entity: MediaTypes<T>): CreateRequestBuilder<MediaTypes<T>, T> {
    return new CreateRequestBuilder<MediaTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MediaTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link MediaTypes.dataAreaId}.
   * @param mediaTypeId Key property. See {@link MediaTypes.mediaTypeId}.
   * @returns A request builder for creating requests to retrieve one `MediaTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    mediaTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MediaTypes<T>, T> {
    return new GetByKeyRequestBuilder<MediaTypes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      MediaTypeId: mediaTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MediaTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MediaTypes`.
   */
  update(entity: MediaTypes<T>): UpdateRequestBuilder<MediaTypes<T>, T> {
    return new UpdateRequestBuilder<MediaTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MediaTypes`.
   * @param dataAreaId Key property. See {@link MediaTypes.dataAreaId}.
   * @param mediaTypeId Key property. See {@link MediaTypes.mediaTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `MediaTypes`.
   */
  delete(
    dataAreaId: string,
    mediaTypeId: string
  ): DeleteRequestBuilder<MediaTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MediaTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MediaTypes` by taking the entity as a parameter.
   */
  delete(entity: MediaTypes<T>): DeleteRequestBuilder<MediaTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    mediaTypeId?: string
  ): DeleteRequestBuilder<MediaTypes<T>, T> {
    return new DeleteRequestBuilder<MediaTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MediaTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MediaTypeId: mediaTypeId!
          }
    );
  }
}
