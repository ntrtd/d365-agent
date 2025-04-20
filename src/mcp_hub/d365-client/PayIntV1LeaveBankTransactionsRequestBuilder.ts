/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { PayIntV1LeaveBankTransactions } from './PayIntV1LeaveBankTransactions';
import { LeaveTransactionType } from './LeaveTransactionType';

/**
 * Request builder class for operations supported on the {@link PayIntV1LeaveBankTransactions} entity.
 */
export class PayIntV1LeaveBankTransactionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1LeaveBankTransactions<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1LeaveBankTransactions` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1LeaveBankTransactions` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1LeaveBankTransactions<T>, T> {
    return new GetAllRequestBuilder<PayIntV1LeaveBankTransactions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1LeaveBankTransactions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1LeaveBankTransactions`.
   */
  create(
    entity: PayIntV1LeaveBankTransactions<T>
  ): CreateRequestBuilder<PayIntV1LeaveBankTransactions<T>, T> {
    return new CreateRequestBuilder<PayIntV1LeaveBankTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1LeaveBankTransactions` entity based on its keys.
   * @param dataAreaId Key property. See {@link PayIntV1LeaveBankTransactions.dataAreaId}.
   * @param personnelNumber Key property. See {@link PayIntV1LeaveBankTransactions.personnelNumber}.
   * @param leaveTypeId Key property. See {@link PayIntV1LeaveBankTransactions.leaveTypeId}.
   * @param transactionType Key property. See {@link PayIntV1LeaveBankTransactions.transactionType}.
   * @param transactionDate Key property. See {@link PayIntV1LeaveBankTransactions.transactionDate}.
   * @param transactionNumber Key property. See {@link PayIntV1LeaveBankTransactions.transactionNumber}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1LeaveBankTransactions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    leaveTypeId: DeserializedType<T, 'Edm.String'>,
    transactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LeaveTransactionType'
    >,
    transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    transactionNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PayIntV1LeaveBankTransactions<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1LeaveBankTransactions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PersonnelNumber: personnelNumber,
        LeaveTypeId: leaveTypeId,
        TransactionType: transactionType,
        TransactionDate: transactionDate,
        TransactionNumber: transactionNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1LeaveBankTransactions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1LeaveBankTransactions`.
   */
  update(
    entity: PayIntV1LeaveBankTransactions<T>
  ): UpdateRequestBuilder<PayIntV1LeaveBankTransactions<T>, T> {
    return new UpdateRequestBuilder<PayIntV1LeaveBankTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1LeaveBankTransactions`.
   * @param dataAreaId Key property. See {@link PayIntV1LeaveBankTransactions.dataAreaId}.
   * @param personnelNumber Key property. See {@link PayIntV1LeaveBankTransactions.personnelNumber}.
   * @param leaveTypeId Key property. See {@link PayIntV1LeaveBankTransactions.leaveTypeId}.
   * @param transactionType Key property. See {@link PayIntV1LeaveBankTransactions.transactionType}.
   * @param transactionDate Key property. See {@link PayIntV1LeaveBankTransactions.transactionDate}.
   * @param transactionNumber Key property. See {@link PayIntV1LeaveBankTransactions.transactionNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1LeaveBankTransactions`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    leaveTypeId: string,
    transactionType: LeaveTransactionType,
    transactionDate: Moment,
    transactionNumber: BigNumber
  ): DeleteRequestBuilder<PayIntV1LeaveBankTransactions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1LeaveBankTransactions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1LeaveBankTransactions` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1LeaveBankTransactions<T>
  ): DeleteRequestBuilder<PayIntV1LeaveBankTransactions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    leaveTypeId?: string,
    transactionType?: LeaveTransactionType,
    transactionDate?: Moment,
    transactionNumber?: BigNumber
  ): DeleteRequestBuilder<PayIntV1LeaveBankTransactions<T>, T> {
    return new DeleteRequestBuilder<PayIntV1LeaveBankTransactions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PayIntV1LeaveBankTransactions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            LeaveTypeId: leaveTypeId!,
            TransactionType: transactionType!,
            TransactionDate: transactionDate!,
            TransactionNumber: transactionNumber!
          }
    );
  }
}
