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
import { GiftCardTransactionsV2 } from './GiftCardTransactionsV2';

/**
 * Request builder class for operations supported on the {@link GiftCardTransactionsV2} entity.
 */
export class GiftCardTransactionsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GiftCardTransactionsV2<T>, T> {
  /**
   * Returns a request builder for querying all `GiftCardTransactionsV2` entities.
   * @returns A request builder for creating requests to retrieve all `GiftCardTransactionsV2` entities.
   */
  getAll(): GetAllRequestBuilder<GiftCardTransactionsV2<T>, T> {
    return new GetAllRequestBuilder<GiftCardTransactionsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `GiftCardTransactionsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GiftCardTransactionsV2`.
   */
  create(
    entity: GiftCardTransactionsV2<T>
  ): CreateRequestBuilder<GiftCardTransactionsV2<T>, T> {
    return new CreateRequestBuilder<GiftCardTransactionsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `GiftCardTransactionsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link GiftCardTransactionsV2.dataAreaId}.
   * @param cardNumber Key property. See {@link GiftCardTransactionsV2.cardNumber}.
   * @param transactionNumber Key property. See {@link GiftCardTransactionsV2.transactionNumber}.
   * @returns A request builder for creating requests to retrieve one `GiftCardTransactionsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    cardNumber: DeserializedType<T, 'Edm.String'>,
    transactionNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<GiftCardTransactionsV2<T>, T> {
    return new GetByKeyRequestBuilder<GiftCardTransactionsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CardNumber: cardNumber,
        TransactionNumber: transactionNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `GiftCardTransactionsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GiftCardTransactionsV2`.
   */
  update(
    entity: GiftCardTransactionsV2<T>
  ): UpdateRequestBuilder<GiftCardTransactionsV2<T>, T> {
    return new UpdateRequestBuilder<GiftCardTransactionsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GiftCardTransactionsV2`.
   * @param dataAreaId Key property. See {@link GiftCardTransactionsV2.dataAreaId}.
   * @param cardNumber Key property. See {@link GiftCardTransactionsV2.cardNumber}.
   * @param transactionNumber Key property. See {@link GiftCardTransactionsV2.transactionNumber}.
   * @returns A request builder for creating requests that delete an entity of type `GiftCardTransactionsV2`.
   */
  delete(
    dataAreaId: string,
    cardNumber: string,
    transactionNumber: string
  ): DeleteRequestBuilder<GiftCardTransactionsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GiftCardTransactionsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GiftCardTransactionsV2` by taking the entity as a parameter.
   */
  delete(
    entity: GiftCardTransactionsV2<T>
  ): DeleteRequestBuilder<GiftCardTransactionsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    cardNumber?: string,
    transactionNumber?: string
  ): DeleteRequestBuilder<GiftCardTransactionsV2<T>, T> {
    return new DeleteRequestBuilder<GiftCardTransactionsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof GiftCardTransactionsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CardNumber: cardNumber!,
            TransactionNumber: transactionNumber!
          }
    );
  }
}
