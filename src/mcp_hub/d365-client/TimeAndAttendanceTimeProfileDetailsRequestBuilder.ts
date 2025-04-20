/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { TimeAndAttendanceTimeProfileDetails } from './TimeAndAttendanceTimeProfileDetails';
import { JmgDayIdEnum } from './JmgDayIdEnum';

/**
 * Request builder class for operations supported on the {@link TimeAndAttendanceTimeProfileDetails} entity.
 */
export class TimeAndAttendanceTimeProfileDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TimeAndAttendanceTimeProfileDetails<T>, T> {
  /**
   * Returns a request builder for querying all `TimeAndAttendanceTimeProfileDetails` entities.
   * @returns A request builder for creating requests to retrieve all `TimeAndAttendanceTimeProfileDetails` entities.
   */
  getAll(): GetAllRequestBuilder<TimeAndAttendanceTimeProfileDetails<T>, T> {
    return new GetAllRequestBuilder<TimeAndAttendanceTimeProfileDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TimeAndAttendanceTimeProfileDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TimeAndAttendanceTimeProfileDetails`.
   */
  create(
    entity: TimeAndAttendanceTimeProfileDetails<T>
  ): CreateRequestBuilder<TimeAndAttendanceTimeProfileDetails<T>, T> {
    return new CreateRequestBuilder<TimeAndAttendanceTimeProfileDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TimeAndAttendanceTimeProfileDetails` entity based on its keys.
   * @param dataAreaId Key property. See {@link TimeAndAttendanceTimeProfileDetails.dataAreaId}.
   * @param timeProfileId Key property. See {@link TimeAndAttendanceTimeProfileDetails.timeProfileId}.
   * @param weekDay Key property. See {@link TimeAndAttendanceTimeProfileDetails.weekDay}.
   * @returns A request builder for creating requests to retrieve one `TimeAndAttendanceTimeProfileDetails` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    timeProfileId: DeserializedType<T, 'Edm.String'>,
    weekDay: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.JmgDayIdEnum'>
  ): GetByKeyRequestBuilder<TimeAndAttendanceTimeProfileDetails<T>, T> {
    return new GetByKeyRequestBuilder<
      TimeAndAttendanceTimeProfileDetails<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      TimeProfileId: timeProfileId,
      WeekDay: weekDay
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TimeAndAttendanceTimeProfileDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TimeAndAttendanceTimeProfileDetails`.
   */
  update(
    entity: TimeAndAttendanceTimeProfileDetails<T>
  ): UpdateRequestBuilder<TimeAndAttendanceTimeProfileDetails<T>, T> {
    return new UpdateRequestBuilder<TimeAndAttendanceTimeProfileDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TimeAndAttendanceTimeProfileDetails`.
   * @param dataAreaId Key property. See {@link TimeAndAttendanceTimeProfileDetails.dataAreaId}.
   * @param timeProfileId Key property. See {@link TimeAndAttendanceTimeProfileDetails.timeProfileId}.
   * @param weekDay Key property. See {@link TimeAndAttendanceTimeProfileDetails.weekDay}.
   * @returns A request builder for creating requests that delete an entity of type `TimeAndAttendanceTimeProfileDetails`.
   */
  delete(
    dataAreaId: string,
    timeProfileId: string,
    weekDay: JmgDayIdEnum
  ): DeleteRequestBuilder<TimeAndAttendanceTimeProfileDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TimeAndAttendanceTimeProfileDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TimeAndAttendanceTimeProfileDetails` by taking the entity as a parameter.
   */
  delete(
    entity: TimeAndAttendanceTimeProfileDetails<T>
  ): DeleteRequestBuilder<TimeAndAttendanceTimeProfileDetails<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    timeProfileId?: string,
    weekDay?: JmgDayIdEnum
  ): DeleteRequestBuilder<TimeAndAttendanceTimeProfileDetails<T>, T> {
    return new DeleteRequestBuilder<TimeAndAttendanceTimeProfileDetails<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TimeAndAttendanceTimeProfileDetails
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TimeProfileId: timeProfileId!,
            WeekDay: weekDay!
          }
    );
  }
}
