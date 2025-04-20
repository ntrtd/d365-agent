/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { LeaseAssetTransactions } from './LeaseAssetTransactions';
import { LedgerTransType } from './LedgerTransType';

/**
 * Request builder class for operations supported on the {@link LeaseAssetTransactions} entity.
 */
export class LeaseAssetTransactionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseAssetTransactions<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseAssetTransactions` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseAssetTransactions` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseAssetTransactions<T>, T> {
    return new GetAllRequestBuilder<LeaseAssetTransactions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaseAssetTransactions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseAssetTransactions`.
   */
  create(
    entity: LeaseAssetTransactions<T>
  ): CreateRequestBuilder<LeaseAssetTransactions<T>, T> {
    return new CreateRequestBuilder<LeaseAssetTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseAssetTransactions` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaseAssetTransactions.dataAreaId}.
   * @param bookId Key property. See {@link LeaseAssetTransactions.bookId}.
   * @param voucher Key property. See {@link LeaseAssetTransactions.voucher}.
   * @param transactionType Key property. See {@link LeaseAssetTransactions.transactionType}.
   * @param account Key property. See {@link LeaseAssetTransactions.account}.
   * @param amount Key property. See {@link LeaseAssetTransactions.amount}.
   * @returns A request builder for creating requests to retrieve one `LeaseAssetTransactions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    bookId: DeserializedType<T, 'Edm.String'>,
    voucher: DeserializedType<T, 'Edm.String'>,
    transactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LedgerTransType'
    >,
    account: DeserializedType<T, 'Edm.String'>,
    amount: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<LeaseAssetTransactions<T>, T> {
    return new GetByKeyRequestBuilder<LeaseAssetTransactions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BookId: bookId,
        Voucher: voucher,
        TransactionType: transactionType,
        Account: account,
        Amount: amount
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseAssetTransactions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseAssetTransactions`.
   */
  update(
    entity: LeaseAssetTransactions<T>
  ): UpdateRequestBuilder<LeaseAssetTransactions<T>, T> {
    return new UpdateRequestBuilder<LeaseAssetTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseAssetTransactions`.
   * @param dataAreaId Key property. See {@link LeaseAssetTransactions.dataAreaId}.
   * @param bookId Key property. See {@link LeaseAssetTransactions.bookId}.
   * @param voucher Key property. See {@link LeaseAssetTransactions.voucher}.
   * @param transactionType Key property. See {@link LeaseAssetTransactions.transactionType}.
   * @param account Key property. See {@link LeaseAssetTransactions.account}.
   * @param amount Key property. See {@link LeaseAssetTransactions.amount}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseAssetTransactions`.
   */
  delete(
    dataAreaId: string,
    bookId: string,
    voucher: string,
    transactionType: LedgerTransType,
    account: string,
    amount: BigNumber
  ): DeleteRequestBuilder<LeaseAssetTransactions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseAssetTransactions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseAssetTransactions` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseAssetTransactions<T>
  ): DeleteRequestBuilder<LeaseAssetTransactions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    bookId?: string,
    voucher?: string,
    transactionType?: LedgerTransType,
    account?: string,
    amount?: BigNumber
  ): DeleteRequestBuilder<LeaseAssetTransactions<T>, T> {
    return new DeleteRequestBuilder<LeaseAssetTransactions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaseAssetTransactions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BookId: bookId!,
            Voucher: voucher!,
            TransactionType: transactionType!,
            Account: account!,
            Amount: amount!
          }
    );
  }
}
