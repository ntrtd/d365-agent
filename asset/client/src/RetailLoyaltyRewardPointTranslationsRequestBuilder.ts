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
import { RetailLoyaltyRewardPointTranslations } from './RetailLoyaltyRewardPointTranslations';

/**
 * Request builder class for operations supported on the {@link RetailLoyaltyRewardPointTranslations} entity.
 */
export class RetailLoyaltyRewardPointTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailLoyaltyRewardPointTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `RetailLoyaltyRewardPointTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `RetailLoyaltyRewardPointTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<RetailLoyaltyRewardPointTranslations<T>, T> {
    return new GetAllRequestBuilder<RetailLoyaltyRewardPointTranslations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailLoyaltyRewardPointTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailLoyaltyRewardPointTranslations`.
   */
  create(
    entity: RetailLoyaltyRewardPointTranslations<T>
  ): CreateRequestBuilder<RetailLoyaltyRewardPointTranslations<T>, T> {
    return new CreateRequestBuilder<RetailLoyaltyRewardPointTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailLoyaltyRewardPointTranslations` entity based on its keys.
   * @param languageId Key property. See {@link RetailLoyaltyRewardPointTranslations.languageId}.
   * @param retailLoyaltyRewardPointId Key property. See {@link RetailLoyaltyRewardPointTranslations.retailLoyaltyRewardPointId}.
   * @returns A request builder for creating requests to retrieve one `RetailLoyaltyRewardPointTranslations` entity based on its keys.
   */
  getByKey(
    languageId: DeserializedType<T, 'Edm.String'>,
    retailLoyaltyRewardPointId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailLoyaltyRewardPointTranslations<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailLoyaltyRewardPointTranslations<T>,
      T
    >(this.entityApi, {
      LanguageId: languageId,
      RetailLoyaltyRewardPointId: retailLoyaltyRewardPointId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailLoyaltyRewardPointTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailLoyaltyRewardPointTranslations`.
   */
  update(
    entity: RetailLoyaltyRewardPointTranslations<T>
  ): UpdateRequestBuilder<RetailLoyaltyRewardPointTranslations<T>, T> {
    return new UpdateRequestBuilder<RetailLoyaltyRewardPointTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyRewardPointTranslations`.
   * @param languageId Key property. See {@link RetailLoyaltyRewardPointTranslations.languageId}.
   * @param retailLoyaltyRewardPointId Key property. See {@link RetailLoyaltyRewardPointTranslations.retailLoyaltyRewardPointId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyRewardPointTranslations`.
   */
  delete(
    languageId: string,
    retailLoyaltyRewardPointId: string
  ): DeleteRequestBuilder<RetailLoyaltyRewardPointTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyRewardPointTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyRewardPointTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: RetailLoyaltyRewardPointTranslations<T>
  ): DeleteRequestBuilder<RetailLoyaltyRewardPointTranslations<T>, T>;
  delete(
    languageIdOrEntity: any,
    retailLoyaltyRewardPointId?: string
  ): DeleteRequestBuilder<RetailLoyaltyRewardPointTranslations<T>, T> {
    return new DeleteRequestBuilder<RetailLoyaltyRewardPointTranslations<T>, T>(
      this.entityApi,
      languageIdOrEntity instanceof RetailLoyaltyRewardPointTranslations
        ? languageIdOrEntity
        : {
            LanguageId: languageIdOrEntity!,
            RetailLoyaltyRewardPointId: retailLoyaltyRewardPointId!
          }
    );
  }
}
