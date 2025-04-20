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
import { LeasePaymentSchedulesHistory } from './LeasePaymentSchedulesHistory';

/**
 * Request builder class for operations supported on the {@link LeasePaymentSchedulesHistory} entity.
 */
export class LeasePaymentSchedulesHistoryRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeasePaymentSchedulesHistory<T>, T> {
  /**
   * Returns a request builder for querying all `LeasePaymentSchedulesHistory` entities.
   * @returns A request builder for creating requests to retrieve all `LeasePaymentSchedulesHistory` entities.
   */
  getAll(): GetAllRequestBuilder<LeasePaymentSchedulesHistory<T>, T> {
    return new GetAllRequestBuilder<LeasePaymentSchedulesHistory<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeasePaymentSchedulesHistory` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeasePaymentSchedulesHistory`.
   */
  create(
    entity: LeasePaymentSchedulesHistory<T>
  ): CreateRequestBuilder<LeasePaymentSchedulesHistory<T>, T> {
    return new CreateRequestBuilder<LeasePaymentSchedulesHistory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeasePaymentSchedulesHistory` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeasePaymentSchedulesHistory.dataAreaId}.
   * @param leaseId Key property. See {@link LeasePaymentSchedulesHistory.leaseId}.
   * @param leaseCounter Key property. See {@link LeasePaymentSchedulesHistory.leaseCounter}.
   * @param scheduleLineDate Key property. See {@link LeasePaymentSchedulesHistory.scheduleLineDate}.
   * @returns A request builder for creating requests to retrieve one `LeasePaymentSchedulesHistory` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaseId: DeserializedType<T, 'Edm.String'>,
    leaseCounter: DeserializedType<T, 'Edm.Int32'>,
    scheduleLineDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<LeasePaymentSchedulesHistory<T>, T> {
    return new GetByKeyRequestBuilder<LeasePaymentSchedulesHistory<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LeaseId: leaseId,
        LeaseCounter: leaseCounter,
        ScheduleLineDate: scheduleLineDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeasePaymentSchedulesHistory`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeasePaymentSchedulesHistory`.
   */
  update(
    entity: LeasePaymentSchedulesHistory<T>
  ): UpdateRequestBuilder<LeasePaymentSchedulesHistory<T>, T> {
    return new UpdateRequestBuilder<LeasePaymentSchedulesHistory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeasePaymentSchedulesHistory`.
   * @param dataAreaId Key property. See {@link LeasePaymentSchedulesHistory.dataAreaId}.
   * @param leaseId Key property. See {@link LeasePaymentSchedulesHistory.leaseId}.
   * @param leaseCounter Key property. See {@link LeasePaymentSchedulesHistory.leaseCounter}.
   * @param scheduleLineDate Key property. See {@link LeasePaymentSchedulesHistory.scheduleLineDate}.
   * @returns A request builder for creating requests that delete an entity of type `LeasePaymentSchedulesHistory`.
   */
  delete(
    dataAreaId: string,
    leaseId: string,
    leaseCounter: number,
    scheduleLineDate: Moment
  ): DeleteRequestBuilder<LeasePaymentSchedulesHistory<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeasePaymentSchedulesHistory`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeasePaymentSchedulesHistory` by taking the entity as a parameter.
   */
  delete(
    entity: LeasePaymentSchedulesHistory<T>
  ): DeleteRequestBuilder<LeasePaymentSchedulesHistory<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leaseId?: string,
    leaseCounter?: number,
    scheduleLineDate?: Moment
  ): DeleteRequestBuilder<LeasePaymentSchedulesHistory<T>, T> {
    return new DeleteRequestBuilder<LeasePaymentSchedulesHistory<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeasePaymentSchedulesHistory
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeaseId: leaseId!,
            LeaseCounter: leaseCounter!,
            ScheduleLineDate: scheduleLineDate!
          }
    );
  }
}
