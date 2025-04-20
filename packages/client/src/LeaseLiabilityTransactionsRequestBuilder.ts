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
import { LeaseLiabilityTransactions } from './LeaseLiabilityTransactions';
import { LedgerTransType } from './LedgerTransType';

/**
 * Request builder class for operations supported on the {@link LeaseLiabilityTransactions} entity.
 */
export class LeaseLiabilityTransactionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseLiabilityTransactions<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseLiabilityTransactions` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseLiabilityTransactions` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseLiabilityTransactions<T>, T> {
    return new GetAllRequestBuilder<LeaseLiabilityTransactions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaseLiabilityTransactions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseLiabilityTransactions`.
   */
  create(
    entity: LeaseLiabilityTransactions<T>
  ): CreateRequestBuilder<LeaseLiabilityTransactions<T>, T> {
    return new CreateRequestBuilder<LeaseLiabilityTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseLiabilityTransactions` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaseLiabilityTransactions.dataAreaId}.
   * @param voucher Key property. See {@link LeaseLiabilityTransactions.voucher}.
   * @param transactionType Key property. See {@link LeaseLiabilityTransactions.transactionType}.
   * @param bookId Key property. See {@link LeaseLiabilityTransactions.bookId}.
   * @param account Key property. See {@link LeaseLiabilityTransactions.account}.
   * @param amount Key property. See {@link LeaseLiabilityTransactions.amount}.
   * @returns A request builder for creating requests to retrieve one `LeaseLiabilityTransactions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    voucher: DeserializedType<T, 'Edm.String'>,
    transactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LedgerTransType'
    >,
    bookId: DeserializedType<T, 'Edm.String'>,
    account: DeserializedType<T, 'Edm.String'>,
    amount: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<LeaseLiabilityTransactions<T>, T> {
    return new GetByKeyRequestBuilder<LeaseLiabilityTransactions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Voucher: voucher,
        TransactionType: transactionType,
        BookId: bookId,
        Account: account,
        Amount: amount
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseLiabilityTransactions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseLiabilityTransactions`.
   */
  update(
    entity: LeaseLiabilityTransactions<T>
  ): UpdateRequestBuilder<LeaseLiabilityTransactions<T>, T> {
    return new UpdateRequestBuilder<LeaseLiabilityTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseLiabilityTransactions`.
   * @param dataAreaId Key property. See {@link LeaseLiabilityTransactions.dataAreaId}.
   * @param voucher Key property. See {@link LeaseLiabilityTransactions.voucher}.
   * @param transactionType Key property. See {@link LeaseLiabilityTransactions.transactionType}.
   * @param bookId Key property. See {@link LeaseLiabilityTransactions.bookId}.
   * @param account Key property. See {@link LeaseLiabilityTransactions.account}.
   * @param amount Key property. See {@link LeaseLiabilityTransactions.amount}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseLiabilityTransactions`.
   */
  delete(
    dataAreaId: string,
    voucher: string,
    transactionType: LedgerTransType,
    bookId: string,
    account: string,
    amount: BigNumber
  ): DeleteRequestBuilder<LeaseLiabilityTransactions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseLiabilityTransactions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseLiabilityTransactions` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseLiabilityTransactions<T>
  ): DeleteRequestBuilder<LeaseLiabilityTransactions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    voucher?: string,
    transactionType?: LedgerTransType,
    bookId?: string,
    account?: string,
    amount?: BigNumber
  ): DeleteRequestBuilder<LeaseLiabilityTransactions<T>, T> {
    return new DeleteRequestBuilder<LeaseLiabilityTransactions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaseLiabilityTransactions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Voucher: voucher!,
            TransactionType: transactionType!,
            BookId: bookId!,
            Account: account!,
            Amount: amount!
          }
    );
  }
}
