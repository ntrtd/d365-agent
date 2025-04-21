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
import { RetailLoyaltyCards } from './RetailLoyaltyCards';

/**
 * Request builder class for operations supported on the {@link RetailLoyaltyCards} entity.
 */
export class RetailLoyaltyCardsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailLoyaltyCards<T>, T> {
  /**
   * Returns a request builder for querying all `RetailLoyaltyCards` entities.
   * @returns A request builder for creating requests to retrieve all `RetailLoyaltyCards` entities.
   */
  getAll(): GetAllRequestBuilder<RetailLoyaltyCards<T>, T> {
    return new GetAllRequestBuilder<RetailLoyaltyCards<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailLoyaltyCards` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailLoyaltyCards`.
   */
  create(
    entity: RetailLoyaltyCards<T>
  ): CreateRequestBuilder<RetailLoyaltyCards<T>, T> {
    return new CreateRequestBuilder<RetailLoyaltyCards<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailLoyaltyCards` entity based on its keys.
   * @param cardNumber Key property. See {@link RetailLoyaltyCards.cardNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailLoyaltyCards` entity based on its keys.
   */
  getByKey(
    cardNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailLoyaltyCards<T>, T> {
    return new GetByKeyRequestBuilder<RetailLoyaltyCards<T>, T>(
      this.entityApi,
      { CardNumber: cardNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailLoyaltyCards`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailLoyaltyCards`.
   */
  update(
    entity: RetailLoyaltyCards<T>
  ): UpdateRequestBuilder<RetailLoyaltyCards<T>, T> {
    return new UpdateRequestBuilder<RetailLoyaltyCards<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyCards`.
   * @param cardNumber Key property. See {@link RetailLoyaltyCards.cardNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyCards`.
   */
  delete(cardNumber: string): DeleteRequestBuilder<RetailLoyaltyCards<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltyCards`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltyCards` by taking the entity as a parameter.
   */
  delete(
    entity: RetailLoyaltyCards<T>
  ): DeleteRequestBuilder<RetailLoyaltyCards<T>, T>;
  delete(
    cardNumberOrEntity: any
  ): DeleteRequestBuilder<RetailLoyaltyCards<T>, T> {
    return new DeleteRequestBuilder<RetailLoyaltyCards<T>, T>(
      this.entityApi,
      cardNumberOrEntity instanceof RetailLoyaltyCards
        ? cardNumberOrEntity
        : { CardNumber: cardNumberOrEntity! }
    );
  }
}
