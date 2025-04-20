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
import { TimeAndAttendanceTimeRegistrationWorkers } from './TimeAndAttendanceTimeRegistrationWorkers';

/**
 * Request builder class for operations supported on the {@link TimeAndAttendanceTimeRegistrationWorkers} entity.
 */
export class TimeAndAttendanceTimeRegistrationWorkersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TimeAndAttendanceTimeRegistrationWorkers<T>, T> {
  /**
   * Returns a request builder for querying all `TimeAndAttendanceTimeRegistrationWorkers` entities.
   * @returns A request builder for creating requests to retrieve all `TimeAndAttendanceTimeRegistrationWorkers` entities.
   */
  getAll(): GetAllRequestBuilder<
    TimeAndAttendanceTimeRegistrationWorkers<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TimeAndAttendanceTimeRegistrationWorkers<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TimeAndAttendanceTimeRegistrationWorkers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TimeAndAttendanceTimeRegistrationWorkers`.
   */
  create(
    entity: TimeAndAttendanceTimeRegistrationWorkers<T>
  ): CreateRequestBuilder<TimeAndAttendanceTimeRegistrationWorkers<T>, T> {
    return new CreateRequestBuilder<
      TimeAndAttendanceTimeRegistrationWorkers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TimeAndAttendanceTimeRegistrationWorkers` entity based on its keys.
   * @param dataAreaId Key property. See {@link TimeAndAttendanceTimeRegistrationWorkers.dataAreaId}.
   * @param approverPersonnelNumber Key property. See {@link TimeAndAttendanceTimeRegistrationWorkers.approverPersonnelNumber}.
   * @returns A request builder for creating requests to retrieve one `TimeAndAttendanceTimeRegistrationWorkers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    approverPersonnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TimeAndAttendanceTimeRegistrationWorkers<T>, T> {
    return new GetByKeyRequestBuilder<
      TimeAndAttendanceTimeRegistrationWorkers<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ApproverPersonnelNumber: approverPersonnelNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TimeAndAttendanceTimeRegistrationWorkers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TimeAndAttendanceTimeRegistrationWorkers`.
   */
  update(
    entity: TimeAndAttendanceTimeRegistrationWorkers<T>
  ): UpdateRequestBuilder<TimeAndAttendanceTimeRegistrationWorkers<T>, T> {
    return new UpdateRequestBuilder<
      TimeAndAttendanceTimeRegistrationWorkers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TimeAndAttendanceTimeRegistrationWorkers`.
   * @param dataAreaId Key property. See {@link TimeAndAttendanceTimeRegistrationWorkers.dataAreaId}.
   * @param approverPersonnelNumber Key property. See {@link TimeAndAttendanceTimeRegistrationWorkers.approverPersonnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TimeAndAttendanceTimeRegistrationWorkers`.
   */
  delete(
    dataAreaId: string,
    approverPersonnelNumber: string
  ): DeleteRequestBuilder<TimeAndAttendanceTimeRegistrationWorkers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TimeAndAttendanceTimeRegistrationWorkers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TimeAndAttendanceTimeRegistrationWorkers` by taking the entity as a parameter.
   */
  delete(
    entity: TimeAndAttendanceTimeRegistrationWorkers<T>
  ): DeleteRequestBuilder<TimeAndAttendanceTimeRegistrationWorkers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    approverPersonnelNumber?: string
  ): DeleteRequestBuilder<TimeAndAttendanceTimeRegistrationWorkers<T>, T> {
    return new DeleteRequestBuilder<
      TimeAndAttendanceTimeRegistrationWorkers<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof TimeAndAttendanceTimeRegistrationWorkers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ApproverPersonnelNumber: approverPersonnelNumber!
          }
    );
  }
}
