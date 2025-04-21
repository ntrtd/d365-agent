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
import { RetailGiftCardTransactions } from './RetailGiftCardTransactions';

/**
 * Request builder class for operations supported on the {@link RetailGiftCardTransactions} entity.
 */
export class RetailGiftCardTransactionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailGiftCardTransactions<T>, T> {
  /**
   * Returns a request builder for querying all `RetailGiftCardTransactions` entities.
   * @returns A request builder for creating requests to retrieve all `RetailGiftCardTransactions` entities.
   */
  getAll(): GetAllRequestBuilder<RetailGiftCardTransactions<T>, T> {
    return new GetAllRequestBuilder<RetailGiftCardTransactions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailGiftCardTransactions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailGiftCardTransactions`.
   */
  create(
    entity: RetailGiftCardTransactions<T>
  ): CreateRequestBuilder<RetailGiftCardTransactions<T>, T> {
    return new CreateRequestBuilder<RetailGiftCardTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailGiftCardTransactions` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailGiftCardTransactions.dataAreaId}.
   * @param cardNumber Key property. See {@link RetailGiftCardTransactions.cardNumber}.
   * @param transactionId Key property. See {@link RetailGiftCardTransactions.transactionId}.
   * @returns A request builder for creating requests to retrieve one `RetailGiftCardTransactions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    cardNumber: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailGiftCardTransactions<T>, T> {
    return new GetByKeyRequestBuilder<RetailGiftCardTransactions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CardNumber: cardNumber,
        TransactionId: transactionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailGiftCardTransactions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailGiftCardTransactions`.
   */
  update(
    entity: RetailGiftCardTransactions<T>
  ): UpdateRequestBuilder<RetailGiftCardTransactions<T>, T> {
    return new UpdateRequestBuilder<RetailGiftCardTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailGiftCardTransactions`.
   * @param dataAreaId Key property. See {@link RetailGiftCardTransactions.dataAreaId}.
   * @param cardNumber Key property. See {@link RetailGiftCardTransactions.cardNumber}.
   * @param transactionId Key property. See {@link RetailGiftCardTransactions.transactionId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailGiftCardTransactions`.
   */
  delete(
    dataAreaId: string,
    cardNumber: string,
    transactionId: string
  ): DeleteRequestBuilder<RetailGiftCardTransactions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailGiftCardTransactions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailGiftCardTransactions` by taking the entity as a parameter.
   */
  delete(
    entity: RetailGiftCardTransactions<T>
  ): DeleteRequestBuilder<RetailGiftCardTransactions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    cardNumber?: string,
    transactionId?: string
  ): DeleteRequestBuilder<RetailGiftCardTransactions<T>, T> {
    return new DeleteRequestBuilder<RetailGiftCardTransactions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailGiftCardTransactions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CardNumber: cardNumber!,
            TransactionId: transactionId!
          }
    );
  }
}
