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
import { LeaseExpenseCostSchedulesHistory } from './LeaseExpenseCostSchedulesHistory';

/**
 * Request builder class for operations supported on the {@link LeaseExpenseCostSchedulesHistory} entity.
 */
export class LeaseExpenseCostSchedulesHistoryRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseExpenseCostSchedulesHistory<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseExpenseCostSchedulesHistory` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseExpenseCostSchedulesHistory` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseExpenseCostSchedulesHistory<T>, T> {
    return new GetAllRequestBuilder<LeaseExpenseCostSchedulesHistory<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaseExpenseCostSchedulesHistory` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseExpenseCostSchedulesHistory`.
   */
  create(
    entity: LeaseExpenseCostSchedulesHistory<T>
  ): CreateRequestBuilder<LeaseExpenseCostSchedulesHistory<T>, T> {
    return new CreateRequestBuilder<LeaseExpenseCostSchedulesHistory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseExpenseCostSchedulesHistory` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaseExpenseCostSchedulesHistory.dataAreaId}.
   * @param leaseId Key property. See {@link LeaseExpenseCostSchedulesHistory.leaseId}.
   * @param lineLeaseCounter Key property. See {@link LeaseExpenseCostSchedulesHistory.lineLeaseCounter}.
   * @param scheduleLineDate Key property. See {@link LeaseExpenseCostSchedulesHistory.scheduleLineDate}.
   * @returns A request builder for creating requests to retrieve one `LeaseExpenseCostSchedulesHistory` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaseId: DeserializedType<T, 'Edm.String'>,
    lineLeaseCounter: DeserializedType<T, 'Edm.Int32'>,
    scheduleLineDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<LeaseExpenseCostSchedulesHistory<T>, T> {
    return new GetByKeyRequestBuilder<LeaseExpenseCostSchedulesHistory<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LeaseId: leaseId,
        LineLeaseCounter: lineLeaseCounter,
        ScheduleLineDate: scheduleLineDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseExpenseCostSchedulesHistory`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseExpenseCostSchedulesHistory`.
   */
  update(
    entity: LeaseExpenseCostSchedulesHistory<T>
  ): UpdateRequestBuilder<LeaseExpenseCostSchedulesHistory<T>, T> {
    return new UpdateRequestBuilder<LeaseExpenseCostSchedulesHistory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseExpenseCostSchedulesHistory`.
   * @param dataAreaId Key property. See {@link LeaseExpenseCostSchedulesHistory.dataAreaId}.
   * @param leaseId Key property. See {@link LeaseExpenseCostSchedulesHistory.leaseId}.
   * @param lineLeaseCounter Key property. See {@link LeaseExpenseCostSchedulesHistory.lineLeaseCounter}.
   * @param scheduleLineDate Key property. See {@link LeaseExpenseCostSchedulesHistory.scheduleLineDate}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseExpenseCostSchedulesHistory`.
   */
  delete(
    dataAreaId: string,
    leaseId: string,
    lineLeaseCounter: number,
    scheduleLineDate: Moment
  ): DeleteRequestBuilder<LeaseExpenseCostSchedulesHistory<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseExpenseCostSchedulesHistory`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseExpenseCostSchedulesHistory` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseExpenseCostSchedulesHistory<T>
  ): DeleteRequestBuilder<LeaseExpenseCostSchedulesHistory<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leaseId?: string,
    lineLeaseCounter?: number,
    scheduleLineDate?: Moment
  ): DeleteRequestBuilder<LeaseExpenseCostSchedulesHistory<T>, T> {
    return new DeleteRequestBuilder<LeaseExpenseCostSchedulesHistory<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaseExpenseCostSchedulesHistory
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeaseId: leaseId!,
            LineLeaseCounter: lineLeaseCounter!,
            ScheduleLineDate: scheduleLineDate!
          }
    );
  }
}
