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
import { TimeAndAttendanceActivityRegistrations } from './TimeAndAttendanceActivityRegistrations';

/**
 * Request builder class for operations supported on the {@link TimeAndAttendanceActivityRegistrations} entity.
 */
export class TimeAndAttendanceActivityRegistrationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TimeAndAttendanceActivityRegistrations<T>, T> {
  /**
   * Returns a request builder for querying all `TimeAndAttendanceActivityRegistrations` entities.
   * @returns A request builder for creating requests to retrieve all `TimeAndAttendanceActivityRegistrations` entities.
   */
  getAll(): GetAllRequestBuilder<TimeAndAttendanceActivityRegistrations<T>, T> {
    return new GetAllRequestBuilder<
      TimeAndAttendanceActivityRegistrations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TimeAndAttendanceActivityRegistrations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TimeAndAttendanceActivityRegistrations`.
   */
  create(
    entity: TimeAndAttendanceActivityRegistrations<T>
  ): CreateRequestBuilder<TimeAndAttendanceActivityRegistrations<T>, T> {
    return new CreateRequestBuilder<
      TimeAndAttendanceActivityRegistrations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TimeAndAttendanceActivityRegistrations` entity based on its keys.
   * @param dataAreaId Key property. See {@link TimeAndAttendanceActivityRegistrations.dataAreaId}.
   * @param workerPersonnelNumber Key property. See {@link TimeAndAttendanceActivityRegistrations.workerPersonnelNumber}.
   * @param timeProfileDate Key property. See {@link TimeAndAttendanceActivityRegistrations.timeProfileDate}.
   * @param activityRegistrationEntryNumber Key property. See {@link TimeAndAttendanceActivityRegistrations.activityRegistrationEntryNumber}.
   * @returns A request builder for creating requests to retrieve one `TimeAndAttendanceActivityRegistrations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workerPersonnelNumber: DeserializedType<T, 'Edm.String'>,
    timeProfileDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    activityRegistrationEntryNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<TimeAndAttendanceActivityRegistrations<T>, T> {
    return new GetByKeyRequestBuilder<
      TimeAndAttendanceActivityRegistrations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      WorkerPersonnelNumber: workerPersonnelNumber,
      TimeProfileDate: timeProfileDate,
      ActivityRegistrationEntryNumber: activityRegistrationEntryNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TimeAndAttendanceActivityRegistrations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TimeAndAttendanceActivityRegistrations`.
   */
  update(
    entity: TimeAndAttendanceActivityRegistrations<T>
  ): UpdateRequestBuilder<TimeAndAttendanceActivityRegistrations<T>, T> {
    return new UpdateRequestBuilder<
      TimeAndAttendanceActivityRegistrations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TimeAndAttendanceActivityRegistrations`.
   * @param dataAreaId Key property. See {@link TimeAndAttendanceActivityRegistrations.dataAreaId}.
   * @param workerPersonnelNumber Key property. See {@link TimeAndAttendanceActivityRegistrations.workerPersonnelNumber}.
   * @param timeProfileDate Key property. See {@link TimeAndAttendanceActivityRegistrations.timeProfileDate}.
   * @param activityRegistrationEntryNumber Key property. See {@link TimeAndAttendanceActivityRegistrations.activityRegistrationEntryNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TimeAndAttendanceActivityRegistrations`.
   */
  delete(
    dataAreaId: string,
    workerPersonnelNumber: string,
    timeProfileDate: Moment,
    activityRegistrationEntryNumber: BigNumber
  ): DeleteRequestBuilder<TimeAndAttendanceActivityRegistrations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TimeAndAttendanceActivityRegistrations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TimeAndAttendanceActivityRegistrations` by taking the entity as a parameter.
   */
  delete(
    entity: TimeAndAttendanceActivityRegistrations<T>
  ): DeleteRequestBuilder<TimeAndAttendanceActivityRegistrations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workerPersonnelNumber?: string,
    timeProfileDate?: Moment,
    activityRegistrationEntryNumber?: BigNumber
  ): DeleteRequestBuilder<TimeAndAttendanceActivityRegistrations<T>, T> {
    return new DeleteRequestBuilder<
      TimeAndAttendanceActivityRegistrations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof TimeAndAttendanceActivityRegistrations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkerPersonnelNumber: workerPersonnelNumber!,
            TimeProfileDate: timeProfileDate!,
            ActivityRegistrationEntryNumber: activityRegistrationEntryNumber!
          }
    );
  }
}
