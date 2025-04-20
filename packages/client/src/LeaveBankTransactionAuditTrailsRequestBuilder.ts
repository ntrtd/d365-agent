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
import { LeaveBankTransactionAuditTrails } from './LeaveBankTransactionAuditTrails';
import { LeaveTransactionType } from './LeaveTransactionType';

/**
 * Request builder class for operations supported on the {@link LeaveBankTransactionAuditTrails} entity.
 */
export class LeaveBankTransactionAuditTrailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaveBankTransactionAuditTrails<T>, T> {
  /**
   * Returns a request builder for querying all `LeaveBankTransactionAuditTrails` entities.
   * @returns A request builder for creating requests to retrieve all `LeaveBankTransactionAuditTrails` entities.
   */
  getAll(): GetAllRequestBuilder<LeaveBankTransactionAuditTrails<T>, T> {
    return new GetAllRequestBuilder<LeaveBankTransactionAuditTrails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaveBankTransactionAuditTrails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaveBankTransactionAuditTrails`.
   */
  create(
    entity: LeaveBankTransactionAuditTrails<T>
  ): CreateRequestBuilder<LeaveBankTransactionAuditTrails<T>, T> {
    return new CreateRequestBuilder<LeaveBankTransactionAuditTrails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaveBankTransactionAuditTrails` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaveBankTransactionAuditTrails.dataAreaId}.
   * @param personnelNumber Key property. See {@link LeaveBankTransactionAuditTrails.personnelNumber}.
   * @param type Key property. See {@link LeaveBankTransactionAuditTrails.type}.
   * @param transactionType Key property. See {@link LeaveBankTransactionAuditTrails.transactionType}.
   * @param transactionDate Key property. See {@link LeaveBankTransactionAuditTrails.transactionDate}.
   * @param transactionNumber Key property. See {@link LeaveBankTransactionAuditTrails.transactionNumber}.
   * @returns A request builder for creating requests to retrieve one `LeaveBankTransactionAuditTrails` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<T, 'Edm.String'>,
    transactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LeaveTransactionType'
    >,
    transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    transactionNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<LeaveBankTransactionAuditTrails<T>, T> {
    return new GetByKeyRequestBuilder<LeaveBankTransactionAuditTrails<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PersonnelNumber: personnelNumber,
        Type: type,
        TransactionType: transactionType,
        TransactionDate: transactionDate,
        TransactionNumber: transactionNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaveBankTransactionAuditTrails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaveBankTransactionAuditTrails`.
   */
  update(
    entity: LeaveBankTransactionAuditTrails<T>
  ): UpdateRequestBuilder<LeaveBankTransactionAuditTrails<T>, T> {
    return new UpdateRequestBuilder<LeaveBankTransactionAuditTrails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaveBankTransactionAuditTrails`.
   * @param dataAreaId Key property. See {@link LeaveBankTransactionAuditTrails.dataAreaId}.
   * @param personnelNumber Key property. See {@link LeaveBankTransactionAuditTrails.personnelNumber}.
   * @param type Key property. See {@link LeaveBankTransactionAuditTrails.type}.
   * @param transactionType Key property. See {@link LeaveBankTransactionAuditTrails.transactionType}.
   * @param transactionDate Key property. See {@link LeaveBankTransactionAuditTrails.transactionDate}.
   * @param transactionNumber Key property. See {@link LeaveBankTransactionAuditTrails.transactionNumber}.
   * @returns A request builder for creating requests that delete an entity of type `LeaveBankTransactionAuditTrails`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    type: string,
    transactionType: LeaveTransactionType,
    transactionDate: Moment,
    transactionNumber: BigNumber
  ): DeleteRequestBuilder<LeaveBankTransactionAuditTrails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaveBankTransactionAuditTrails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaveBankTransactionAuditTrails` by taking the entity as a parameter.
   */
  delete(
    entity: LeaveBankTransactionAuditTrails<T>
  ): DeleteRequestBuilder<LeaveBankTransactionAuditTrails<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    type?: string,
    transactionType?: LeaveTransactionType,
    transactionDate?: Moment,
    transactionNumber?: BigNumber
  ): DeleteRequestBuilder<LeaveBankTransactionAuditTrails<T>, T> {
    return new DeleteRequestBuilder<LeaveBankTransactionAuditTrails<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaveBankTransactionAuditTrails
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            Type: type!,
            TransactionType: transactionType!,
            TransactionDate: transactionDate!,
            TransactionNumber: transactionNumber!
          }
    );
  }
}
