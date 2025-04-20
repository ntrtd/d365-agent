/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { LeaseExecutoryCostContractsHistory } from './LeaseExecutoryCostContractsHistory';

/**
 * Request builder class for operations supported on the {@link LeaseExecutoryCostContractsHistory} entity.
 */
export class LeaseExecutoryCostContractsHistoryRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseExecutoryCostContractsHistory<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseExecutoryCostContractsHistory` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseExecutoryCostContractsHistory` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseExecutoryCostContractsHistory<T>, T> {
    return new GetAllRequestBuilder<LeaseExecutoryCostContractsHistory<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaseExecutoryCostContractsHistory` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseExecutoryCostContractsHistory`.
   */
  create(
    entity: LeaseExecutoryCostContractsHistory<T>
  ): CreateRequestBuilder<LeaseExecutoryCostContractsHistory<T>, T> {
    return new CreateRequestBuilder<LeaseExecutoryCostContractsHistory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseExecutoryCostContractsHistory` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaseExecutoryCostContractsHistory.dataAreaId}.
   * @param leaseId Key property. See {@link LeaseExecutoryCostContractsHistory.leaseId}.
   * @param expenseType Key property. See {@link LeaseExecutoryCostContractsHistory.expenseType}.
   * @param leaseCounter Key property. See {@link LeaseExecutoryCostContractsHistory.leaseCounter}.
   * @param startDate Key property. See {@link LeaseExecutoryCostContractsHistory.startDate}.
   * @param endDate Key property. See {@link LeaseExecutoryCostContractsHistory.endDate}.
   * @returns A request builder for creating requests to retrieve one `LeaseExecutoryCostContractsHistory` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaseId: DeserializedType<T, 'Edm.String'>,
    expenseType: DeserializedType<T, 'Edm.String'>,
    leaseCounter: DeserializedType<T, 'Edm.Int32'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    endDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<LeaseExecutoryCostContractsHistory<T>, T> {
    return new GetByKeyRequestBuilder<LeaseExecutoryCostContractsHistory<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LeaseId: leaseId,
        ExpenseType: expenseType,
        LeaseCounter: leaseCounter,
        StartDate: startDate,
        EndDate: endDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseExecutoryCostContractsHistory`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseExecutoryCostContractsHistory`.
   */
  update(
    entity: LeaseExecutoryCostContractsHistory<T>
  ): UpdateRequestBuilder<LeaseExecutoryCostContractsHistory<T>, T> {
    return new UpdateRequestBuilder<LeaseExecutoryCostContractsHistory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseExecutoryCostContractsHistory`.
   * @param dataAreaId Key property. See {@link LeaseExecutoryCostContractsHistory.dataAreaId}.
   * @param leaseId Key property. See {@link LeaseExecutoryCostContractsHistory.leaseId}.
   * @param expenseType Key property. See {@link LeaseExecutoryCostContractsHistory.expenseType}.
   * @param leaseCounter Key property. See {@link LeaseExecutoryCostContractsHistory.leaseCounter}.
   * @param startDate Key property. See {@link LeaseExecutoryCostContractsHistory.startDate}.
   * @param endDate Key property. See {@link LeaseExecutoryCostContractsHistory.endDate}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseExecutoryCostContractsHistory`.
   */
  delete(
    dataAreaId: string,
    leaseId: string,
    expenseType: string,
    leaseCounter: number,
    startDate: Moment,
    endDate: Moment
  ): DeleteRequestBuilder<LeaseExecutoryCostContractsHistory<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseExecutoryCostContractsHistory`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseExecutoryCostContractsHistory` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseExecutoryCostContractsHistory<T>
  ): DeleteRequestBuilder<LeaseExecutoryCostContractsHistory<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leaseId?: string,
    expenseType?: string,
    leaseCounter?: number,
    startDate?: Moment,
    endDate?: Moment
  ): DeleteRequestBuilder<LeaseExecutoryCostContractsHistory<T>, T> {
    return new DeleteRequestBuilder<LeaseExecutoryCostContractsHistory<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaseExecutoryCostContractsHistory
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeaseId: leaseId!,
            ExpenseType: expenseType!,
            LeaseCounter: leaseCounter!,
            StartDate: startDate!,
            EndDate: endDate!
          }
    );
  }
}
