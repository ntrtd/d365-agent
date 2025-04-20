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
import { RetailGiftCards } from './RetailGiftCards';

/**
 * Request builder class for operations supported on the {@link RetailGiftCards} entity.
 */
export class RetailGiftCardsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailGiftCards<T>, T> {
  /**
   * Returns a request builder for querying all `RetailGiftCards` entities.
   * @returns A request builder for creating requests to retrieve all `RetailGiftCards` entities.
   */
  getAll(): GetAllRequestBuilder<RetailGiftCards<T>, T> {
    return new GetAllRequestBuilder<RetailGiftCards<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailGiftCards` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailGiftCards`.
   */
  create(
    entity: RetailGiftCards<T>
  ): CreateRequestBuilder<RetailGiftCards<T>, T> {
    return new CreateRequestBuilder<RetailGiftCards<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailGiftCards` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailGiftCards.dataAreaId}.
   * @param entryId Key property. See {@link RetailGiftCards.entryId}.
   * @returns A request builder for creating requests to retrieve one `RetailGiftCards` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    entryId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailGiftCards<T>, T> {
    return new GetByKeyRequestBuilder<RetailGiftCards<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      EntryId: entryId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailGiftCards`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailGiftCards`.
   */
  update(
    entity: RetailGiftCards<T>
  ): UpdateRequestBuilder<RetailGiftCards<T>, T> {
    return new UpdateRequestBuilder<RetailGiftCards<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailGiftCards`.
   * @param dataAreaId Key property. See {@link RetailGiftCards.dataAreaId}.
   * @param entryId Key property. See {@link RetailGiftCards.entryId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailGiftCards`.
   */
  delete(
    dataAreaId: string,
    entryId: string
  ): DeleteRequestBuilder<RetailGiftCards<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailGiftCards`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailGiftCards` by taking the entity as a parameter.
   */
  delete(
    entity: RetailGiftCards<T>
  ): DeleteRequestBuilder<RetailGiftCards<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    entryId?: string
  ): DeleteRequestBuilder<RetailGiftCards<T>, T> {
    return new DeleteRequestBuilder<RetailGiftCards<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailGiftCards
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EntryId: entryId!
          }
    );
  }
}
