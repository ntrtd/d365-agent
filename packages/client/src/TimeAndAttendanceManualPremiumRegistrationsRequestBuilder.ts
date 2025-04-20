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
import { TimeAndAttendanceManualPremiumRegistrations } from './TimeAndAttendanceManualPremiumRegistrations';

/**
 * Request builder class for operations supported on the {@link TimeAndAttendanceManualPremiumRegistrations} entity.
 */
export class TimeAndAttendanceManualPremiumRegistrationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TimeAndAttendanceManualPremiumRegistrations<T>, T> {
  /**
   * Returns a request builder for querying all `TimeAndAttendanceManualPremiumRegistrations` entities.
   * @returns A request builder for creating requests to retrieve all `TimeAndAttendanceManualPremiumRegistrations` entities.
   */
  getAll(): GetAllRequestBuilder<
    TimeAndAttendanceManualPremiumRegistrations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TimeAndAttendanceManualPremiumRegistrations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TimeAndAttendanceManualPremiumRegistrations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TimeAndAttendanceManualPremiumRegistrations`.
   */
  create(
    entity: TimeAndAttendanceManualPremiumRegistrations<T>
  ): CreateRequestBuilder<TimeAndAttendanceManualPremiumRegistrations<T>, T> {
    return new CreateRequestBuilder<
      TimeAndAttendanceManualPremiumRegistrations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TimeAndAttendanceManualPremiumRegistrations` entity based on its keys.
   * @param dataAreaId Key property. See {@link TimeAndAttendanceManualPremiumRegistrations.dataAreaId}.
   * @param timeProfileDate Key property. See {@link TimeAndAttendanceManualPremiumRegistrations.timeProfileDate}.
   * @param manualPremiumRegistrationEntryNumber Key property. See {@link TimeAndAttendanceManualPremiumRegistrations.manualPremiumRegistrationEntryNumber}.
   * @param workerPersonnelNumber Key property. See {@link TimeAndAttendanceManualPremiumRegistrations.workerPersonnelNumber}.
   * @returns A request builder for creating requests to retrieve one `TimeAndAttendanceManualPremiumRegistrations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    timeProfileDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    manualPremiumRegistrationEntryNumber: DeserializedType<T, 'Edm.Int64'>,
    workerPersonnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TimeAndAttendanceManualPremiumRegistrations<T>, T> {
    return new GetByKeyRequestBuilder<
      TimeAndAttendanceManualPremiumRegistrations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      TimeProfileDate: timeProfileDate,
      ManualPremiumRegistrationEntryNumber:
        manualPremiumRegistrationEntryNumber,
      WorkerPersonnelNumber: workerPersonnelNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TimeAndAttendanceManualPremiumRegistrations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TimeAndAttendanceManualPremiumRegistrations`.
   */
  update(
    entity: TimeAndAttendanceManualPremiumRegistrations<T>
  ): UpdateRequestBuilder<TimeAndAttendanceManualPremiumRegistrations<T>, T> {
    return new UpdateRequestBuilder<
      TimeAndAttendanceManualPremiumRegistrations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TimeAndAttendanceManualPremiumRegistrations`.
   * @param dataAreaId Key property. See {@link TimeAndAttendanceManualPremiumRegistrations.dataAreaId}.
   * @param timeProfileDate Key property. See {@link TimeAndAttendanceManualPremiumRegistrations.timeProfileDate}.
   * @param manualPremiumRegistrationEntryNumber Key property. See {@link TimeAndAttendanceManualPremiumRegistrations.manualPremiumRegistrationEntryNumber}.
   * @param workerPersonnelNumber Key property. See {@link TimeAndAttendanceManualPremiumRegistrations.workerPersonnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TimeAndAttendanceManualPremiumRegistrations`.
   */
  delete(
    dataAreaId: string,
    timeProfileDate: Moment,
    manualPremiumRegistrationEntryNumber: BigNumber,
    workerPersonnelNumber: string
  ): DeleteRequestBuilder<TimeAndAttendanceManualPremiumRegistrations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TimeAndAttendanceManualPremiumRegistrations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TimeAndAttendanceManualPremiumRegistrations` by taking the entity as a parameter.
   */
  delete(
    entity: TimeAndAttendanceManualPremiumRegistrations<T>
  ): DeleteRequestBuilder<TimeAndAttendanceManualPremiumRegistrations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    timeProfileDate?: Moment,
    manualPremiumRegistrationEntryNumber?: BigNumber,
    workerPersonnelNumber?: string
  ): DeleteRequestBuilder<TimeAndAttendanceManualPremiumRegistrations<T>, T> {
    return new DeleteRequestBuilder<
      TimeAndAttendanceManualPremiumRegistrations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof TimeAndAttendanceManualPremiumRegistrations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TimeProfileDate: timeProfileDate!,
            ManualPremiumRegistrationEntryNumber:
              manualPremiumRegistrationEntryNumber!,
            WorkerPersonnelNumber: workerPersonnelNumber!
          }
    );
  }
}
