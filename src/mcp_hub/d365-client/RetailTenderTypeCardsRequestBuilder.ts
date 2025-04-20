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
import { RetailTenderTypeCards } from './RetailTenderTypeCards';

/**
 * Request builder class for operations supported on the {@link RetailTenderTypeCards} entity.
 */
export class RetailTenderTypeCardsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTenderTypeCards<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTenderTypeCards` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTenderTypeCards` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTenderTypeCards<T>, T> {
    return new GetAllRequestBuilder<RetailTenderTypeCards<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTenderTypeCards` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTenderTypeCards`.
   */
  create(
    entity: RetailTenderTypeCards<T>
  ): CreateRequestBuilder<RetailTenderTypeCards<T>, T> {
    return new CreateRequestBuilder<RetailTenderTypeCards<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTenderTypeCards` entity based on its keys.
   * @param cardTypeId Key property. See {@link RetailTenderTypeCards.cardTypeId}.
   * @returns A request builder for creating requests to retrieve one `RetailTenderTypeCards` entity based on its keys.
   */
  getByKey(
    cardTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTenderTypeCards<T>, T> {
    return new GetByKeyRequestBuilder<RetailTenderTypeCards<T>, T>(
      this.entityApi,
      { CardTypeId: cardTypeId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTenderTypeCards`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTenderTypeCards`.
   */
  update(
    entity: RetailTenderTypeCards<T>
  ): UpdateRequestBuilder<RetailTenderTypeCards<T>, T> {
    return new UpdateRequestBuilder<RetailTenderTypeCards<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTenderTypeCards`.
   * @param cardTypeId Key property. See {@link RetailTenderTypeCards.cardTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTenderTypeCards`.
   */
  delete(cardTypeId: string): DeleteRequestBuilder<RetailTenderTypeCards<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTenderTypeCards`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTenderTypeCards` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTenderTypeCards<T>
  ): DeleteRequestBuilder<RetailTenderTypeCards<T>, T>;
  delete(
    cardTypeIdOrEntity: any
  ): DeleteRequestBuilder<RetailTenderTypeCards<T>, T> {
    return new DeleteRequestBuilder<RetailTenderTypeCards<T>, T>(
      this.entityApi,
      cardTypeIdOrEntity instanceof RetailTenderTypeCards
        ? cardTypeIdOrEntity
        : { CardTypeId: cardTypeIdOrEntity! }
    );
  }
}
