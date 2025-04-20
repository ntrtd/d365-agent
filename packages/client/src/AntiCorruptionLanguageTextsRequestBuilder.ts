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
import { AntiCorruptionLanguageTexts } from './AntiCorruptionLanguageTexts';

/**
 * Request builder class for operations supported on the {@link AntiCorruptionLanguageTexts} entity.
 */
export class AntiCorruptionLanguageTextsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AntiCorruptionLanguageTexts<T>, T> {
  /**
   * Returns a request builder for querying all `AntiCorruptionLanguageTexts` entities.
   * @returns A request builder for creating requests to retrieve all `AntiCorruptionLanguageTexts` entities.
   */
  getAll(): GetAllRequestBuilder<AntiCorruptionLanguageTexts<T>, T> {
    return new GetAllRequestBuilder<AntiCorruptionLanguageTexts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AntiCorruptionLanguageTexts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AntiCorruptionLanguageTexts`.
   */
  create(
    entity: AntiCorruptionLanguageTexts<T>
  ): CreateRequestBuilder<AntiCorruptionLanguageTexts<T>, T> {
    return new CreateRequestBuilder<AntiCorruptionLanguageTexts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AntiCorruptionLanguageTexts` entity based on its keys.
   * @param dataAreaId Key property. See {@link AntiCorruptionLanguageTexts.dataAreaId}.
   * @param languageId Key property. See {@link AntiCorruptionLanguageTexts.languageId}.
   * @returns A request builder for creating requests to retrieve one `AntiCorruptionLanguageTexts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AntiCorruptionLanguageTexts<T>, T> {
    return new GetByKeyRequestBuilder<AntiCorruptionLanguageTexts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LanguageId: languageId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AntiCorruptionLanguageTexts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AntiCorruptionLanguageTexts`.
   */
  update(
    entity: AntiCorruptionLanguageTexts<T>
  ): UpdateRequestBuilder<AntiCorruptionLanguageTexts<T>, T> {
    return new UpdateRequestBuilder<AntiCorruptionLanguageTexts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AntiCorruptionLanguageTexts`.
   * @param dataAreaId Key property. See {@link AntiCorruptionLanguageTexts.dataAreaId}.
   * @param languageId Key property. See {@link AntiCorruptionLanguageTexts.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `AntiCorruptionLanguageTexts`.
   */
  delete(
    dataAreaId: string,
    languageId: string
  ): DeleteRequestBuilder<AntiCorruptionLanguageTexts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AntiCorruptionLanguageTexts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AntiCorruptionLanguageTexts` by taking the entity as a parameter.
   */
  delete(
    entity: AntiCorruptionLanguageTexts<T>
  ): DeleteRequestBuilder<AntiCorruptionLanguageTexts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    languageId?: string
  ): DeleteRequestBuilder<AntiCorruptionLanguageTexts<T>, T> {
    return new DeleteRequestBuilder<AntiCorruptionLanguageTexts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AntiCorruptionLanguageTexts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LanguageId: languageId!
          }
    );
  }
}
