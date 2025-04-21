/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { TimeAndAttendanceTimeProfileLinesV2 } from './TimeAndAttendanceTimeProfileLinesV2';

/**
 * Request builder class for operations supported on the {@link TimeAndAttendanceTimeProfileLinesV2} entity.
 */
export class TimeAndAttendanceTimeProfileLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TimeAndAttendanceTimeProfileLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `TimeAndAttendanceTimeProfileLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `TimeAndAttendanceTimeProfileLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<TimeAndAttendanceTimeProfileLinesV2<T>, T> {
    return new GetAllRequestBuilder<TimeAndAttendanceTimeProfileLinesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TimeAndAttendanceTimeProfileLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TimeAndAttendanceTimeProfileLinesV2`.
   */
  create(
    entity: TimeAndAttendanceTimeProfileLinesV2<T>
  ): CreateRequestBuilder<TimeAndAttendanceTimeProfileLinesV2<T>, T> {
    return new CreateRequestBuilder<TimeAndAttendanceTimeProfileLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TimeAndAttendanceTimeProfileLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link TimeAndAttendanceTimeProfileLinesV2.dataAreaId}.
   * @param recordId Key property. See {@link TimeAndAttendanceTimeProfileLinesV2.recordId}.
   * @returns A request builder for creating requests to retrieve one `TimeAndAttendanceTimeProfileLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<TimeAndAttendanceTimeProfileLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<
      TimeAndAttendanceTimeProfileLinesV2<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      RecordId: recordId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TimeAndAttendanceTimeProfileLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TimeAndAttendanceTimeProfileLinesV2`.
   */
  update(
    entity: TimeAndAttendanceTimeProfileLinesV2<T>
  ): UpdateRequestBuilder<TimeAndAttendanceTimeProfileLinesV2<T>, T> {
    return new UpdateRequestBuilder<TimeAndAttendanceTimeProfileLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TimeAndAttendanceTimeProfileLinesV2`.
   * @param dataAreaId Key property. See {@link TimeAndAttendanceTimeProfileLinesV2.dataAreaId}.
   * @param recordId Key property. See {@link TimeAndAttendanceTimeProfileLinesV2.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `TimeAndAttendanceTimeProfileLinesV2`.
   */
  delete(
    dataAreaId: string,
    recordId: BigNumber
  ): DeleteRequestBuilder<TimeAndAttendanceTimeProfileLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TimeAndAttendanceTimeProfileLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TimeAndAttendanceTimeProfileLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: TimeAndAttendanceTimeProfileLinesV2<T>
  ): DeleteRequestBuilder<TimeAndAttendanceTimeProfileLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recordId?: BigNumber
  ): DeleteRequestBuilder<TimeAndAttendanceTimeProfileLinesV2<T>, T> {
    return new DeleteRequestBuilder<TimeAndAttendanceTimeProfileLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TimeAndAttendanceTimeProfileLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecordId: recordId!
          }
    );
  }
}
