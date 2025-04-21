/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { MediaResourceTranslations } from './MediaResourceTranslations';

/**
 * Request builder class for operations supported on the {@link MediaResourceTranslations} entity.
 */
export class MediaResourceTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MediaResourceTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `MediaResourceTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `MediaResourceTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<MediaResourceTranslations<T>, T> {
    return new GetAllRequestBuilder<MediaResourceTranslations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MediaResourceTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MediaResourceTranslations`.
   */
  create(
    entity: MediaResourceTranslations<T>
  ): CreateRequestBuilder<MediaResourceTranslations<T>, T> {
    return new CreateRequestBuilder<MediaResourceTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MediaResourceTranslations` entity based on its keys.
   * @param mediaResource Key property. See {@link MediaResourceTranslations.mediaResource}.
   * @param languageId Key property. See {@link MediaResourceTranslations.languageId}.
   * @returns A request builder for creating requests to retrieve one `MediaResourceTranslations` entity based on its keys.
   */
  getByKey(
    mediaResource: DeserializedType<T, 'Edm.Int64'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MediaResourceTranslations<T>, T> {
    return new GetByKeyRequestBuilder<MediaResourceTranslations<T>, T>(
      this.entityApi,
      {
        MediaResource: mediaResource,
        LanguageId: languageId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MediaResourceTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MediaResourceTranslations`.
   */
  update(
    entity: MediaResourceTranslations<T>
  ): UpdateRequestBuilder<MediaResourceTranslations<T>, T> {
    return new UpdateRequestBuilder<MediaResourceTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MediaResourceTranslations`.
   * @param mediaResource Key property. See {@link MediaResourceTranslations.mediaResource}.
   * @param languageId Key property. See {@link MediaResourceTranslations.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `MediaResourceTranslations`.
   */
  delete(
    mediaResource: BigNumber,
    languageId: string
  ): DeleteRequestBuilder<MediaResourceTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MediaResourceTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MediaResourceTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: MediaResourceTranslations<T>
  ): DeleteRequestBuilder<MediaResourceTranslations<T>, T>;
  delete(
    mediaResourceOrEntity: any,
    languageId?: string
  ): DeleteRequestBuilder<MediaResourceTranslations<T>, T> {
    return new DeleteRequestBuilder<MediaResourceTranslations<T>, T>(
      this.entityApi,
      mediaResourceOrEntity instanceof MediaResourceTranslations
        ? mediaResourceOrEntity
        : {
            MediaResource: mediaResourceOrEntity!,
            LanguageId: languageId!
          }
    );
  }
}
