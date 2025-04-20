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
import { RetailAffiliationTranslations } from './RetailAffiliationTranslations';

/**
 * Request builder class for operations supported on the {@link RetailAffiliationTranslations} entity.
 */
export class RetailAffiliationTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailAffiliationTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `RetailAffiliationTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `RetailAffiliationTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<RetailAffiliationTranslations<T>, T> {
    return new GetAllRequestBuilder<RetailAffiliationTranslations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailAffiliationTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailAffiliationTranslations`.
   */
  create(
    entity: RetailAffiliationTranslations<T>
  ): CreateRequestBuilder<RetailAffiliationTranslations<T>, T> {
    return new CreateRequestBuilder<RetailAffiliationTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailAffiliationTranslations` entity based on its keys.
   * @param languageId Key property. See {@link RetailAffiliationTranslations.languageId}.
   * @param affiliationName Key property. See {@link RetailAffiliationTranslations.affiliationName}.
   * @returns A request builder for creating requests to retrieve one `RetailAffiliationTranslations` entity based on its keys.
   */
  getByKey(
    languageId: DeserializedType<T, 'Edm.String'>,
    affiliationName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailAffiliationTranslations<T>, T> {
    return new GetByKeyRequestBuilder<RetailAffiliationTranslations<T>, T>(
      this.entityApi,
      {
        LanguageId: languageId,
        AffiliationName: affiliationName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailAffiliationTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailAffiliationTranslations`.
   */
  update(
    entity: RetailAffiliationTranslations<T>
  ): UpdateRequestBuilder<RetailAffiliationTranslations<T>, T> {
    return new UpdateRequestBuilder<RetailAffiliationTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailAffiliationTranslations`.
   * @param languageId Key property. See {@link RetailAffiliationTranslations.languageId}.
   * @param affiliationName Key property. See {@link RetailAffiliationTranslations.affiliationName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailAffiliationTranslations`.
   */
  delete(
    languageId: string,
    affiliationName: string
  ): DeleteRequestBuilder<RetailAffiliationTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailAffiliationTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailAffiliationTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: RetailAffiliationTranslations<T>
  ): DeleteRequestBuilder<RetailAffiliationTranslations<T>, T>;
  delete(
    languageIdOrEntity: any,
    affiliationName?: string
  ): DeleteRequestBuilder<RetailAffiliationTranslations<T>, T> {
    return new DeleteRequestBuilder<RetailAffiliationTranslations<T>, T>(
      this.entityApi,
      languageIdOrEntity instanceof RetailAffiliationTranslations
        ? languageIdOrEntity
        : {
            LanguageId: languageIdOrEntity!,
            AffiliationName: affiliationName!
          }
    );
  }
}
