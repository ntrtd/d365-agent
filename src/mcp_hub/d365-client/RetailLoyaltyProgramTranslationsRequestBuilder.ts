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
import { RetailLoyaltyProgramTranslations } from './RetailLoyaltyProgramTranslations';

/**
 * Request builder class for operations supported on the {@link RetailLoyaltyProgramTranslations} entity.
 */
export class RetailLoyaltyProgramTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailLoyaltyProgramTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `RetailLoyaltyProgramTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `RetailLoyaltyProgramTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<RetailLoyaltyProgramTranslations<T>, T> {
    return new GetAllRequestBuilder<RetailLoyaltyProgramTranslations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailLoyaltyProgramTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailLoyaltyProgramTranslations`.
   */
  create(
    entity: RetailLoyaltyProgramTranslations<T>
  ): CreateRequestBuilder<RetailLoyaltyProgramTranslations<T>, T> {
    return new CreateRequestBuilder<RetailLoyaltyProgramTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailLoyaltyProgramTranslations` entity based on its keys.
   * @param languageId Key property. See {@link RetailLoyaltyProgramTranslations.languageId}.
   * @param loyaltyProgramName Key property. See {@link RetailLoyaltyProgramTranslations.loyaltyProgramName}.
   * @returns A request builder for creating requests to retrieve one `RetailLoyaltyProgramTranslations` entity based on its keys.
   */
  getByKey(
    languageId: DeserializedType<T, 'Edm.String'>,
    loyaltyProgramName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailLoyaltyProgramTranslations<T>, T> {
    return new GetByKeyRequestBuilder<RetailLoyaltyProgramTranslations<T>, T>(
      this.entityApi,
      {
        LanguageId: languageId,
        LoyaltyProgramName: loyaltyProgramName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailLoyaltyProgramTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailLoyaltyProgramTranslations`.
   */
  update(
    entity: RetailLoyaltyProgramTranslations<T>
  ): UpdateRequestBuilder<RetailLoyaltyProgramTranslations<T>, T> {
    return new UpdateRequestBuilder<RetailLoyaltyProgramTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyProgramTranslations`.
   * @param languageId Key property. See {@link RetailLoyaltyProgramTranslations.languageId}.
   * @param loyaltyProgramName Key property. See {@link RetailLoyaltyProgramTranslations.loyaltyProgramName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyProgramTranslations`.
   */
  delete(
    languageId: string,
    loyaltyProgramName: string
  ): DeleteRequestBuilder<RetailLoyaltyProgramTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyProgramTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyProgramTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: RetailLoyaltyProgramTranslations<T>
  ): DeleteRequestBuilder<RetailLoyaltyProgramTranslations<T>, T>;
  delete(
    languageIdOrEntity: any,
    loyaltyProgramName?: string
  ): DeleteRequestBuilder<RetailLoyaltyProgramTranslations<T>, T> {
    return new DeleteRequestBuilder<RetailLoyaltyProgramTranslations<T>, T>(
      this.entityApi,
      languageIdOrEntity instanceof RetailLoyaltyProgramTranslations
        ? languageIdOrEntity
        : {
            LanguageId: languageIdOrEntity!,
            LoyaltyProgramName: loyaltyProgramName!
          }
    );
  }
}
