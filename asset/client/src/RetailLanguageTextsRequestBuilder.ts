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
import { RetailLanguageTexts } from './RetailLanguageTexts';

/**
 * Request builder class for operations supported on the {@link RetailLanguageTexts} entity.
 */
export class RetailLanguageTextsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailLanguageTexts<T>, T> {
  /**
   * Returns a request builder for querying all `RetailLanguageTexts` entities.
   * @returns A request builder for creating requests to retrieve all `RetailLanguageTexts` entities.
   */
  getAll(): GetAllRequestBuilder<RetailLanguageTexts<T>, T> {
    return new GetAllRequestBuilder<RetailLanguageTexts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailLanguageTexts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailLanguageTexts`.
   */
  create(
    entity: RetailLanguageTexts<T>
  ): CreateRequestBuilder<RetailLanguageTexts<T>, T> {
    return new CreateRequestBuilder<RetailLanguageTexts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailLanguageTexts` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailLanguageTexts.dataAreaId}.
   * @param languageId Key property. See {@link RetailLanguageTexts.languageId}.
   * @param textId Key property. See {@link RetailLanguageTexts.textId}.
   * @returns A request builder for creating requests to retrieve one `RetailLanguageTexts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>,
    textId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<RetailLanguageTexts<T>, T> {
    return new GetByKeyRequestBuilder<RetailLanguageTexts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LanguageId: languageId,
        TextId: textId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailLanguageTexts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailLanguageTexts`.
   */
  update(
    entity: RetailLanguageTexts<T>
  ): UpdateRequestBuilder<RetailLanguageTexts<T>, T> {
    return new UpdateRequestBuilder<RetailLanguageTexts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailLanguageTexts`.
   * @param dataAreaId Key property. See {@link RetailLanguageTexts.dataAreaId}.
   * @param languageId Key property. See {@link RetailLanguageTexts.languageId}.
   * @param textId Key property. See {@link RetailLanguageTexts.textId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailLanguageTexts`.
   */
  delete(
    dataAreaId: string,
    languageId: string,
    textId: number
  ): DeleteRequestBuilder<RetailLanguageTexts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailLanguageTexts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailLanguageTexts` by taking the entity as a parameter.
   */
  delete(
    entity: RetailLanguageTexts<T>
  ): DeleteRequestBuilder<RetailLanguageTexts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    languageId?: string,
    textId?: number
  ): DeleteRequestBuilder<RetailLanguageTexts<T>, T> {
    return new DeleteRequestBuilder<RetailLanguageTexts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailLanguageTexts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LanguageId: languageId!,
            TextId: textId!
          }
    );
  }
}
