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
import { LeaseDepreciationSchedulesHistory } from './LeaseDepreciationSchedulesHistory';

/**
 * Request builder class for operations supported on the {@link LeaseDepreciationSchedulesHistory} entity.
 */
export class LeaseDepreciationSchedulesHistoryRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseDepreciationSchedulesHistory<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseDepreciationSchedulesHistory` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseDepreciationSchedulesHistory` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseDepreciationSchedulesHistory<T>, T> {
    return new GetAllRequestBuilder<LeaseDepreciationSchedulesHistory<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaseDepreciationSchedulesHistory` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseDepreciationSchedulesHistory`.
   */
  create(
    entity: LeaseDepreciationSchedulesHistory<T>
  ): CreateRequestBuilder<LeaseDepreciationSchedulesHistory<T>, T> {
    return new CreateRequestBuilder<LeaseDepreciationSchedulesHistory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseDepreciationSchedulesHistory` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaseDepreciationSchedulesHistory.dataAreaId}.
   * @param leaseId Key property. See {@link LeaseDepreciationSchedulesHistory.leaseId}.
   * @param lineLeaseCounter Key property. See {@link LeaseDepreciationSchedulesHistory.lineLeaseCounter}.
   * @param scheduleLineDate Key property. See {@link LeaseDepreciationSchedulesHistory.scheduleLineDate}.
   * @returns A request builder for creating requests to retrieve one `LeaseDepreciationSchedulesHistory` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaseId: DeserializedType<T, 'Edm.String'>,
    lineLeaseCounter: DeserializedType<T, 'Edm.Int32'>,
    scheduleLineDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<LeaseDepreciationSchedulesHistory<T>, T> {
    return new GetByKeyRequestBuilder<LeaseDepreciationSchedulesHistory<T>, T>(
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
   * Returns a request builder for updating an entity of type `LeaseDepreciationSchedulesHistory`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseDepreciationSchedulesHistory`.
   */
  update(
    entity: LeaseDepreciationSchedulesHistory<T>
  ): UpdateRequestBuilder<LeaseDepreciationSchedulesHistory<T>, T> {
    return new UpdateRequestBuilder<LeaseDepreciationSchedulesHistory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseDepreciationSchedulesHistory`.
   * @param dataAreaId Key property. See {@link LeaseDepreciationSchedulesHistory.dataAreaId}.
   * @param leaseId Key property. See {@link LeaseDepreciationSchedulesHistory.leaseId}.
   * @param lineLeaseCounter Key property. See {@link LeaseDepreciationSchedulesHistory.lineLeaseCounter}.
   * @param scheduleLineDate Key property. See {@link LeaseDepreciationSchedulesHistory.scheduleLineDate}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseDepreciationSchedulesHistory`.
   */
  delete(
    dataAreaId: string,
    leaseId: string,
    lineLeaseCounter: number,
    scheduleLineDate: Moment
  ): DeleteRequestBuilder<LeaseDepreciationSchedulesHistory<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseDepreciationSchedulesHistory`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseDepreciationSchedulesHistory` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseDepreciationSchedulesHistory<T>
  ): DeleteRequestBuilder<LeaseDepreciationSchedulesHistory<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leaseId?: string,
    lineLeaseCounter?: number,
    scheduleLineDate?: Moment
  ): DeleteRequestBuilder<LeaseDepreciationSchedulesHistory<T>, T> {
    return new DeleteRequestBuilder<LeaseDepreciationSchedulesHistory<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaseDepreciationSchedulesHistory
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
