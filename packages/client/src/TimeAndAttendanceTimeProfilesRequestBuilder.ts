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
import { TimeAndAttendanceTimeProfiles } from './TimeAndAttendanceTimeProfiles';

/**
 * Request builder class for operations supported on the {@link TimeAndAttendanceTimeProfiles} entity.
 */
export class TimeAndAttendanceTimeProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TimeAndAttendanceTimeProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `TimeAndAttendanceTimeProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `TimeAndAttendanceTimeProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<TimeAndAttendanceTimeProfiles<T>, T> {
    return new GetAllRequestBuilder<TimeAndAttendanceTimeProfiles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TimeAndAttendanceTimeProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TimeAndAttendanceTimeProfiles`.
   */
  create(
    entity: TimeAndAttendanceTimeProfiles<T>
  ): CreateRequestBuilder<TimeAndAttendanceTimeProfiles<T>, T> {
    return new CreateRequestBuilder<TimeAndAttendanceTimeProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TimeAndAttendanceTimeProfiles` entity based on its keys.
   * @param dataAreaId Key property. See {@link TimeAndAttendanceTimeProfiles.dataAreaId}.
   * @param timeProfileId Key property. See {@link TimeAndAttendanceTimeProfiles.timeProfileId}.
   * @returns A request builder for creating requests to retrieve one `TimeAndAttendanceTimeProfiles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    timeProfileId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TimeAndAttendanceTimeProfiles<T>, T> {
    return new GetByKeyRequestBuilder<TimeAndAttendanceTimeProfiles<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TimeProfileId: timeProfileId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TimeAndAttendanceTimeProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TimeAndAttendanceTimeProfiles`.
   */
  update(
    entity: TimeAndAttendanceTimeProfiles<T>
  ): UpdateRequestBuilder<TimeAndAttendanceTimeProfiles<T>, T> {
    return new UpdateRequestBuilder<TimeAndAttendanceTimeProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TimeAndAttendanceTimeProfiles`.
   * @param dataAreaId Key property. See {@link TimeAndAttendanceTimeProfiles.dataAreaId}.
   * @param timeProfileId Key property. See {@link TimeAndAttendanceTimeProfiles.timeProfileId}.
   * @returns A request builder for creating requests that delete an entity of type `TimeAndAttendanceTimeProfiles`.
   */
  delete(
    dataAreaId: string,
    timeProfileId: string
  ): DeleteRequestBuilder<TimeAndAttendanceTimeProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TimeAndAttendanceTimeProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TimeAndAttendanceTimeProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: TimeAndAttendanceTimeProfiles<T>
  ): DeleteRequestBuilder<TimeAndAttendanceTimeProfiles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    timeProfileId?: string
  ): DeleteRequestBuilder<TimeAndAttendanceTimeProfiles<T>, T> {
    return new DeleteRequestBuilder<TimeAndAttendanceTimeProfiles<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TimeAndAttendanceTimeProfiles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TimeProfileId: timeProfileId!
          }
    );
  }
}
