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
import { LeaseExpenseTransactions } from './LeaseExpenseTransactions';
import { LedgerTransType } from './LedgerTransType';

/**
 * Request builder class for operations supported on the {@link LeaseExpenseTransactions} entity.
 */
export class LeaseExpenseTransactionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseExpenseTransactions<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseExpenseTransactions` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseExpenseTransactions` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseExpenseTransactions<T>, T> {
    return new GetAllRequestBuilder<LeaseExpenseTransactions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaseExpenseTransactions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseExpenseTransactions`.
   */
  create(
    entity: LeaseExpenseTransactions<T>
  ): CreateRequestBuilder<LeaseExpenseTransactions<T>, T> {
    return new CreateRequestBuilder<LeaseExpenseTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseExpenseTransactions` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaseExpenseTransactions.dataAreaId}.
   * @param voucher Key property. See {@link LeaseExpenseTransactions.voucher}.
   * @param transactionType Key property. See {@link LeaseExpenseTransactions.transactionType}.
   * @param bookId Key property. See {@link LeaseExpenseTransactions.bookId}.
   * @param account Key property. See {@link LeaseExpenseTransactions.account}.
   * @param amount Key property. See {@link LeaseExpenseTransactions.amount}.
   * @param expenseType Key property. See {@link LeaseExpenseTransactions.expenseType}.
   * @returns A request builder for creating requests to retrieve one `LeaseExpenseTransactions` entity based on its keys.
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
    amount: DeserializedType<T, 'Edm.Decimal'>,
    expenseType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeaseExpenseTransactions<T>, T> {
    return new GetByKeyRequestBuilder<LeaseExpenseTransactions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Voucher: voucher,
        TransactionType: transactionType,
        BookId: bookId,
        Account: account,
        Amount: amount,
        ExpenseType: expenseType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseExpenseTransactions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseExpenseTransactions`.
   */
  update(
    entity: LeaseExpenseTransactions<T>
  ): UpdateRequestBuilder<LeaseExpenseTransactions<T>, T> {
    return new UpdateRequestBuilder<LeaseExpenseTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseExpenseTransactions`.
   * @param dataAreaId Key property. See {@link LeaseExpenseTransactions.dataAreaId}.
   * @param voucher Key property. See {@link LeaseExpenseTransactions.voucher}.
   * @param transactionType Key property. See {@link LeaseExpenseTransactions.transactionType}.
   * @param bookId Key property. See {@link LeaseExpenseTransactions.bookId}.
   * @param account Key property. See {@link LeaseExpenseTransactions.account}.
   * @param amount Key property. See {@link LeaseExpenseTransactions.amount}.
   * @param expenseType Key property. See {@link LeaseExpenseTransactions.expenseType}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseExpenseTransactions`.
   */
  delete(
    dataAreaId: string,
    voucher: string,
    transactionType: LedgerTransType,
    bookId: string,
    account: string,
    amount: BigNumber,
    expenseType: string
  ): DeleteRequestBuilder<LeaseExpenseTransactions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseExpenseTransactions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseExpenseTransactions` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseExpenseTransactions<T>
  ): DeleteRequestBuilder<LeaseExpenseTransactions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    voucher?: string,
    transactionType?: LedgerTransType,
    bookId?: string,
    account?: string,
    amount?: BigNumber,
    expenseType?: string
  ): DeleteRequestBuilder<LeaseExpenseTransactions<T>, T> {
    return new DeleteRequestBuilder<LeaseExpenseTransactions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaseExpenseTransactions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Voucher: voucher!,
            TransactionType: transactionType!,
            BookId: bookId!,
            Account: account!,
            Amount: amount!,
            ExpenseType: expenseType!
          }
    );
  }
}
