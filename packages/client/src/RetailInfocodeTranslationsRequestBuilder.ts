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
import { RetailInfocodeTranslations } from './RetailInfocodeTranslations';

/**
 * Request builder class for operations supported on the {@link RetailInfocodeTranslations} entity.
 */
export class RetailInfocodeTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailInfocodeTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `RetailInfocodeTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `RetailInfocodeTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<RetailInfocodeTranslations<T>, T> {
    return new GetAllRequestBuilder<RetailInfocodeTranslations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailInfocodeTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailInfocodeTranslations`.
   */
  create(
    entity: RetailInfocodeTranslations<T>
  ): CreateRequestBuilder<RetailInfocodeTranslations<T>, T> {
    return new CreateRequestBuilder<RetailInfocodeTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailInfocodeTranslations` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailInfocodeTranslations.dataAreaId}.
   * @param retailInfocodeTableInfocodeId Key property. See {@link RetailInfocodeTranslations.retailInfocodeTableInfocodeId}.
   * @param languageId Key property. See {@link RetailInfocodeTranslations.languageId}.
   * @returns A request builder for creating requests to retrieve one `RetailInfocodeTranslations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    retailInfocodeTableInfocodeId: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailInfocodeTranslations<T>, T> {
    return new GetByKeyRequestBuilder<RetailInfocodeTranslations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RetailInfocodeTable_infocodeId: retailInfocodeTableInfocodeId,
        LanguageId: languageId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailInfocodeTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailInfocodeTranslations`.
   */
  update(
    entity: RetailInfocodeTranslations<T>
  ): UpdateRequestBuilder<RetailInfocodeTranslations<T>, T> {
    return new UpdateRequestBuilder<RetailInfocodeTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailInfocodeTranslations`.
   * @param dataAreaId Key property. See {@link RetailInfocodeTranslations.dataAreaId}.
   * @param retailInfocodeTableInfocodeId Key property. See {@link RetailInfocodeTranslations.retailInfocodeTableInfocodeId}.
   * @param languageId Key property. See {@link RetailInfocodeTranslations.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailInfocodeTranslations`.
   */
  delete(
    dataAreaId: string,
    retailInfocodeTableInfocodeId: string,
    languageId: string
  ): DeleteRequestBuilder<RetailInfocodeTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailInfocodeTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailInfocodeTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: RetailInfocodeTranslations<T>
  ): DeleteRequestBuilder<RetailInfocodeTranslations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    retailInfocodeTableInfocodeId?: string,
    languageId?: string
  ): DeleteRequestBuilder<RetailInfocodeTranslations<T>, T> {
    return new DeleteRequestBuilder<RetailInfocodeTranslations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailInfocodeTranslations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RetailInfocodeTable_infocodeId: retailInfocodeTableInfocodeId!,
            LanguageId: languageId!
          }
    );
  }
}
