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
import { RetailCatalogTranslations } from './RetailCatalogTranslations';

/**
 * Request builder class for operations supported on the {@link RetailCatalogTranslations} entity.
 */
export class RetailCatalogTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailCatalogTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `RetailCatalogTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `RetailCatalogTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<RetailCatalogTranslations<T>, T> {
    return new GetAllRequestBuilder<RetailCatalogTranslations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailCatalogTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailCatalogTranslations`.
   */
  create(
    entity: RetailCatalogTranslations<T>
  ): CreateRequestBuilder<RetailCatalogTranslations<T>, T> {
    return new CreateRequestBuilder<RetailCatalogTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailCatalogTranslations` entity based on its keys.
   * @param catalogNumber Key property. See {@link RetailCatalogTranslations.catalogNumber}.
   * @param languageId Key property. See {@link RetailCatalogTranslations.languageId}.
   * @returns A request builder for creating requests to retrieve one `RetailCatalogTranslations` entity based on its keys.
   */
  getByKey(
    catalogNumber: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailCatalogTranslations<T>, T> {
    return new GetByKeyRequestBuilder<RetailCatalogTranslations<T>, T>(
      this.entityApi,
      {
        CatalogNumber: catalogNumber,
        LanguageId: languageId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailCatalogTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailCatalogTranslations`.
   */
  update(
    entity: RetailCatalogTranslations<T>
  ): UpdateRequestBuilder<RetailCatalogTranslations<T>, T> {
    return new UpdateRequestBuilder<RetailCatalogTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailCatalogTranslations`.
   * @param catalogNumber Key property. See {@link RetailCatalogTranslations.catalogNumber}.
   * @param languageId Key property. See {@link RetailCatalogTranslations.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailCatalogTranslations`.
   */
  delete(
    catalogNumber: string,
    languageId: string
  ): DeleteRequestBuilder<RetailCatalogTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailCatalogTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailCatalogTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: RetailCatalogTranslations<T>
  ): DeleteRequestBuilder<RetailCatalogTranslations<T>, T>;
  delete(
    catalogNumberOrEntity: any,
    languageId?: string
  ): DeleteRequestBuilder<RetailCatalogTranslations<T>, T> {
    return new DeleteRequestBuilder<RetailCatalogTranslations<T>, T>(
      this.entityApi,
      catalogNumberOrEntity instanceof RetailCatalogTranslations
        ? catalogNumberOrEntity
        : {
            CatalogNumber: catalogNumberOrEntity!,
            LanguageId: languageId!
          }
    );
  }
}
