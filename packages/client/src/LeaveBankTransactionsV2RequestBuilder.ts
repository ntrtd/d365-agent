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
import { LeaveBankTransactionsV2 } from './LeaveBankTransactionsV2';
import { LeaveTransactionType } from './LeaveTransactionType';

/**
 * Request builder class for operations supported on the {@link LeaveBankTransactionsV2} entity.
 */
export class LeaveBankTransactionsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaveBankTransactionsV2<T>, T> {
  /**
   * Returns a request builder for querying all `LeaveBankTransactionsV2` entities.
   * @returns A request builder for creating requests to retrieve all `LeaveBankTransactionsV2` entities.
   */
  getAll(): GetAllRequestBuilder<LeaveBankTransactionsV2<T>, T> {
    return new GetAllRequestBuilder<LeaveBankTransactionsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaveBankTransactionsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaveBankTransactionsV2`.
   */
  create(
    entity: LeaveBankTransactionsV2<T>
  ): CreateRequestBuilder<LeaveBankTransactionsV2<T>, T> {
    return new CreateRequestBuilder<LeaveBankTransactionsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaveBankTransactionsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaveBankTransactionsV2.dataAreaId}.
   * @param personnelNumber Key property. See {@link LeaveBankTransactionsV2.personnelNumber}.
   * @param leaveTypeId Key property. See {@link LeaveBankTransactionsV2.leaveTypeId}.
   * @param transactionType Key property. See {@link LeaveBankTransactionsV2.transactionType}.
   * @param transactionDate Key property. See {@link LeaveBankTransactionsV2.transactionDate}.
   * @param transactionNumber Key property. See {@link LeaveBankTransactionsV2.transactionNumber}.
   * @returns A request builder for creating requests to retrieve one `LeaveBankTransactionsV2` entity based on its keys.
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
  ): GetByKeyRequestBuilder<LeaveBankTransactionsV2<T>, T> {
    return new GetByKeyRequestBuilder<LeaveBankTransactionsV2<T>, T>(
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
   * Returns a request builder for updating an entity of type `LeaveBankTransactionsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaveBankTransactionsV2`.
   */
  update(
    entity: LeaveBankTransactionsV2<T>
  ): UpdateRequestBuilder<LeaveBankTransactionsV2<T>, T> {
    return new UpdateRequestBuilder<LeaveBankTransactionsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaveBankTransactionsV2`.
   * @param dataAreaId Key property. See {@link LeaveBankTransactionsV2.dataAreaId}.
   * @param personnelNumber Key property. See {@link LeaveBankTransactionsV2.personnelNumber}.
   * @param leaveTypeId Key property. See {@link LeaveBankTransactionsV2.leaveTypeId}.
   * @param transactionType Key property. See {@link LeaveBankTransactionsV2.transactionType}.
   * @param transactionDate Key property. See {@link LeaveBankTransactionsV2.transactionDate}.
   * @param transactionNumber Key property. See {@link LeaveBankTransactionsV2.transactionNumber}.
   * @returns A request builder for creating requests that delete an entity of type `LeaveBankTransactionsV2`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    leaveTypeId: string,
    transactionType: LeaveTransactionType,
    transactionDate: Moment,
    transactionNumber: BigNumber
  ): DeleteRequestBuilder<LeaveBankTransactionsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaveBankTransactionsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaveBankTransactionsV2` by taking the entity as a parameter.
   */
  delete(
    entity: LeaveBankTransactionsV2<T>
  ): DeleteRequestBuilder<LeaveBankTransactionsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    leaveTypeId?: string,
    transactionType?: LeaveTransactionType,
    transactionDate?: Moment,
    transactionNumber?: BigNumber
  ): DeleteRequestBuilder<LeaveBankTransactionsV2<T>, T> {
    return new DeleteRequestBuilder<LeaveBankTransactionsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaveBankTransactionsV2
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
