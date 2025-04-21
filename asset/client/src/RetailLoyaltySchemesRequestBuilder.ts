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
import { RetailLoyaltySchemes } from './RetailLoyaltySchemes';

/**
 * Request builder class for operations supported on the {@link RetailLoyaltySchemes} entity.
 */
export class RetailLoyaltySchemesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailLoyaltySchemes<T>, T> {
  /**
   * Returns a request builder for querying all `RetailLoyaltySchemes` entities.
   * @returns A request builder for creating requests to retrieve all `RetailLoyaltySchemes` entities.
   */
  getAll(): GetAllRequestBuilder<RetailLoyaltySchemes<T>, T> {
    return new GetAllRequestBuilder<RetailLoyaltySchemes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailLoyaltySchemes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailLoyaltySchemes`.
   */
  create(
    entity: RetailLoyaltySchemes<T>
  ): CreateRequestBuilder<RetailLoyaltySchemes<T>, T> {
    return new CreateRequestBuilder<RetailLoyaltySchemes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailLoyaltySchemes` entity based on its keys.
   * @param loyaltySchemeId Key property. See {@link RetailLoyaltySchemes.loyaltySchemeId}.
   * @returns A request builder for creating requests to retrieve one `RetailLoyaltySchemes` entity based on its keys.
   */
  getByKey(
    loyaltySchemeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailLoyaltySchemes<T>, T> {
    return new GetByKeyRequestBuilder<RetailLoyaltySchemes<T>, T>(
      this.entityApi,
      { LoyaltySchemeId: loyaltySchemeId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailLoyaltySchemes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailLoyaltySchemes`.
   */
  update(
    entity: RetailLoyaltySchemes<T>
  ): UpdateRequestBuilder<RetailLoyaltySchemes<T>, T> {
    return new UpdateRequestBuilder<RetailLoyaltySchemes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltySchemes`.
   * @param loyaltySchemeId Key property. See {@link RetailLoyaltySchemes.loyaltySchemeId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltySchemes`.
   */
  delete(
    loyaltySchemeId: string
  ): DeleteRequestBuilder<RetailLoyaltySchemes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltySchemes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltySchemes` by taking the entity as a parameter.
   */
  delete(
    entity: RetailLoyaltySchemes<T>
  ): DeleteRequestBuilder<RetailLoyaltySchemes<T>, T>;
  delete(
    loyaltySchemeIdOrEntity: any
  ): DeleteRequestBuilder<RetailLoyaltySchemes<T>, T> {
    return new DeleteRequestBuilder<RetailLoyaltySchemes<T>, T>(
      this.entityApi,
      loyaltySchemeIdOrEntity instanceof RetailLoyaltySchemes
        ? loyaltySchemeIdOrEntity
        : { LoyaltySchemeId: loyaltySchemeIdOrEntity! }
    );
  }
}
