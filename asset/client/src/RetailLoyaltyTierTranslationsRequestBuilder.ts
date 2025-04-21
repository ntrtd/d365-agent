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
import { RetailLoyaltyTierTranslations } from './RetailLoyaltyTierTranslations';

/**
 * Request builder class for operations supported on the {@link RetailLoyaltyTierTranslations} entity.
 */
export class RetailLoyaltyTierTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailLoyaltyTierTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `RetailLoyaltyTierTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `RetailLoyaltyTierTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<RetailLoyaltyTierTranslations<T>, T> {
    return new GetAllRequestBuilder<RetailLoyaltyTierTranslations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailLoyaltyTierTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailLoyaltyTierTranslations`.
   */
  create(
    entity: RetailLoyaltyTierTranslations<T>
  ): CreateRequestBuilder<RetailLoyaltyTierTranslations<T>, T> {
    return new CreateRequestBuilder<RetailLoyaltyTierTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailLoyaltyTierTranslations` entity based on its keys.
   * @param languageId Key property. See {@link RetailLoyaltyTierTranslations.languageId}.
   * @param loyaltyProgramName Key property. See {@link RetailLoyaltyTierTranslations.loyaltyProgramName}.
   * @param loyaltyTierId Key property. See {@link RetailLoyaltyTierTranslations.loyaltyTierId}.
   * @returns A request builder for creating requests to retrieve one `RetailLoyaltyTierTranslations` entity based on its keys.
   */
  getByKey(
    languageId: DeserializedType<T, 'Edm.String'>,
    loyaltyProgramName: DeserializedType<T, 'Edm.String'>,
    loyaltyTierId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailLoyaltyTierTranslations<T>, T> {
    return new GetByKeyRequestBuilder<RetailLoyaltyTierTranslations<T>, T>(
      this.entityApi,
      {
        LanguageId: languageId,
        LoyaltyProgramName: loyaltyProgramName,
        LoyaltyTierId: loyaltyTierId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailLoyaltyTierTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailLoyaltyTierTranslations`.
   */
  update(
    entity: RetailLoyaltyTierTranslations<T>
  ): UpdateRequestBuilder<RetailLoyaltyTierTranslations<T>, T> {
    return new UpdateRequestBuilder<RetailLoyaltyTierTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyTierTranslations`.
   * @param languageId Key property. See {@link RetailLoyaltyTierTranslations.languageId}.
   * @param loyaltyProgramName Key property. See {@link RetailLoyaltyTierTranslations.loyaltyProgramName}.
   * @param loyaltyTierId Key property. See {@link RetailLoyaltyTierTranslations.loyaltyTierId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyTierTranslations`.
   */
  delete(
    languageId: string,
    loyaltyProgramName: string,
    loyaltyTierId: string
  ): DeleteRequestBuilder<RetailLoyaltyTierTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyTierTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyTierTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: RetailLoyaltyTierTranslations<T>
  ): DeleteRequestBuilder<RetailLoyaltyTierTranslations<T>, T>;
  delete(
    languageIdOrEntity: any,
    loyaltyProgramName?: string,
    loyaltyTierId?: string
  ): DeleteRequestBuilder<RetailLoyaltyTierTranslations<T>, T> {
    return new DeleteRequestBuilder<RetailLoyaltyTierTranslations<T>, T>(
      this.entityApi,
      languageIdOrEntity instanceof RetailLoyaltyTierTranslations
        ? languageIdOrEntity
        : {
            LanguageId: languageIdOrEntity!,
            LoyaltyProgramName: loyaltyProgramName!,
            LoyaltyTierId: loyaltyTierId!
          }
    );
  }
}
