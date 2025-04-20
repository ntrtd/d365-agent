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
import { LeaveBankTransactions } from './LeaveBankTransactions';
import { LeaveTransactionType } from './LeaveTransactionType';

/**
 * Request builder class for operations supported on the {@link LeaveBankTransactions} entity.
 */
export class LeaveBankTransactionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaveBankTransactions<T>, T> {
  /**
   * Returns a request builder for querying all `LeaveBankTransactions` entities.
   * @returns A request builder for creating requests to retrieve all `LeaveBankTransactions` entities.
   */
  getAll(): GetAllRequestBuilder<LeaveBankTransactions<T>, T> {
    return new GetAllRequestBuilder<LeaveBankTransactions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaveBankTransactions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaveBankTransactions`.
   */
  create(
    entity: LeaveBankTransactions<T>
  ): CreateRequestBuilder<LeaveBankTransactions<T>, T> {
    return new CreateRequestBuilder<LeaveBankTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaveBankTransactions` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaveBankTransactions.dataAreaId}.
   * @param personnelNumber Key property. See {@link LeaveBankTransactions.personnelNumber}.
   * @param leaveTypeId Key property. See {@link LeaveBankTransactions.leaveTypeId}.
   * @param transactionType Key property. See {@link LeaveBankTransactions.transactionType}.
   * @param transactionDate Key property. See {@link LeaveBankTransactions.transactionDate}.
   * @param transactionNumber Key property. See {@link LeaveBankTransactions.transactionNumber}.
   * @returns A request builder for creating requests to retrieve one `LeaveBankTransactions` entity based on its keys.
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
  ): GetByKeyRequestBuilder<LeaveBankTransactions<T>, T> {
    return new GetByKeyRequestBuilder<LeaveBankTransactions<T>, T>(
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
   * Returns a request builder for updating an entity of type `LeaveBankTransactions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaveBankTransactions`.
   */
  update(
    entity: LeaveBankTransactions<T>
  ): UpdateRequestBuilder<LeaveBankTransactions<T>, T> {
    return new UpdateRequestBuilder<LeaveBankTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaveBankTransactions`.
   * @param dataAreaId Key property. See {@link LeaveBankTransactions.dataAreaId}.
   * @param personnelNumber Key property. See {@link LeaveBankTransactions.personnelNumber}.
   * @param leaveTypeId Key property. See {@link LeaveBankTransactions.leaveTypeId}.
   * @param transactionType Key property. See {@link LeaveBankTransactions.transactionType}.
   * @param transactionDate Key property. See {@link LeaveBankTransactions.transactionDate}.
   * @param transactionNumber Key property. See {@link LeaveBankTransactions.transactionNumber}.
   * @returns A request builder for creating requests that delete an entity of type `LeaveBankTransactions`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    leaveTypeId: string,
    transactionType: LeaveTransactionType,
    transactionDate: Moment,
    transactionNumber: BigNumber
  ): DeleteRequestBuilder<LeaveBankTransactions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaveBankTransactions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaveBankTransactions` by taking the entity as a parameter.
   */
  delete(
    entity: LeaveBankTransactions<T>
  ): DeleteRequestBuilder<LeaveBankTransactions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    leaveTypeId?: string,
    transactionType?: LeaveTransactionType,
    transactionDate?: Moment,
    transactionNumber?: BigNumber
  ): DeleteRequestBuilder<LeaveBankTransactions<T>, T> {
    return new DeleteRequestBuilder<LeaveBankTransactions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaveBankTransactions
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
