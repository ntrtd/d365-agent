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
import { TimeAndAttendanceTimeProfileLines } from './TimeAndAttendanceTimeProfileLines';

/**
 * Request builder class for operations supported on the {@link TimeAndAttendanceTimeProfileLines} entity.
 */
export class TimeAndAttendanceTimeProfileLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TimeAndAttendanceTimeProfileLines<T>, T> {
  /**
   * Returns a request builder for querying all `TimeAndAttendanceTimeProfileLines` entities.
   * @returns A request builder for creating requests to retrieve all `TimeAndAttendanceTimeProfileLines` entities.
   */
  getAll(): GetAllRequestBuilder<TimeAndAttendanceTimeProfileLines<T>, T> {
    return new GetAllRequestBuilder<TimeAndAttendanceTimeProfileLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TimeAndAttendanceTimeProfileLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TimeAndAttendanceTimeProfileLines`.
   */
  create(
    entity: TimeAndAttendanceTimeProfileLines<T>
  ): CreateRequestBuilder<TimeAndAttendanceTimeProfileLines<T>, T> {
    return new CreateRequestBuilder<TimeAndAttendanceTimeProfileLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TimeAndAttendanceTimeProfileLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link TimeAndAttendanceTimeProfileLines.dataAreaId}.
   * @param recordId Key property. See {@link TimeAndAttendanceTimeProfileLines.recordId}.
   * @returns A request builder for creating requests to retrieve one `TimeAndAttendanceTimeProfileLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<TimeAndAttendanceTimeProfileLines<T>, T> {
    return new GetByKeyRequestBuilder<TimeAndAttendanceTimeProfileLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RecordId: recordId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TimeAndAttendanceTimeProfileLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TimeAndAttendanceTimeProfileLines`.
   */
  update(
    entity: TimeAndAttendanceTimeProfileLines<T>
  ): UpdateRequestBuilder<TimeAndAttendanceTimeProfileLines<T>, T> {
    return new UpdateRequestBuilder<TimeAndAttendanceTimeProfileLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TimeAndAttendanceTimeProfileLines`.
   * @param dataAreaId Key property. See {@link TimeAndAttendanceTimeProfileLines.dataAreaId}.
   * @param recordId Key property. See {@link TimeAndAttendanceTimeProfileLines.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `TimeAndAttendanceTimeProfileLines`.
   */
  delete(
    dataAreaId: string,
    recordId: BigNumber
  ): DeleteRequestBuilder<TimeAndAttendanceTimeProfileLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TimeAndAttendanceTimeProfileLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TimeAndAttendanceTimeProfileLines` by taking the entity as a parameter.
   */
  delete(
    entity: TimeAndAttendanceTimeProfileLines<T>
  ): DeleteRequestBuilder<TimeAndAttendanceTimeProfileLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recordId?: BigNumber
  ): DeleteRequestBuilder<TimeAndAttendanceTimeProfileLines<T>, T> {
    return new DeleteRequestBuilder<TimeAndAttendanceTimeProfileLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TimeAndAttendanceTimeProfileLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecordId: recordId!
          }
    );
  }
}
