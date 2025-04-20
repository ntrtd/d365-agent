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
import { TimeAndAttendanceTimeActivityRegistrationCalculations } from './TimeAndAttendanceTimeActivityRegistrationCalculations';

/**
 * Request builder class for operations supported on the {@link TimeAndAttendanceTimeActivityRegistrationCalculations} entity.
 */
export class TimeAndAttendanceTimeActivityRegistrationCalculationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  TimeAndAttendanceTimeActivityRegistrationCalculations<T>,
  T
> {
  /**
   * Returns a request builder for querying all `TimeAndAttendanceTimeActivityRegistrationCalculations` entities.
   * @returns A request builder for creating requests to retrieve all `TimeAndAttendanceTimeActivityRegistrationCalculations` entities.
   */
  getAll(): GetAllRequestBuilder<
    TimeAndAttendanceTimeActivityRegistrationCalculations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TimeAndAttendanceTimeActivityRegistrationCalculations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TimeAndAttendanceTimeActivityRegistrationCalculations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TimeAndAttendanceTimeActivityRegistrationCalculations`.
   */
  create(
    entity: TimeAndAttendanceTimeActivityRegistrationCalculations<T>
  ): CreateRequestBuilder<
    TimeAndAttendanceTimeActivityRegistrationCalculations<T>,
    T
  > {
    return new CreateRequestBuilder<
      TimeAndAttendanceTimeActivityRegistrationCalculations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TimeAndAttendanceTimeActivityRegistrationCalculations` entity based on its keys.
   * @param dataAreaId Key property. See {@link TimeAndAttendanceTimeActivityRegistrationCalculations.dataAreaId}.
   * @param workerPersonnelNumber Key property. See {@link TimeAndAttendanceTimeActivityRegistrationCalculations.workerPersonnelNumber}.
   * @param timeProfileDate Key property. See {@link TimeAndAttendanceTimeActivityRegistrationCalculations.timeProfileDate}.
   * @returns A request builder for creating requests to retrieve one `TimeAndAttendanceTimeActivityRegistrationCalculations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workerPersonnelNumber: DeserializedType<T, 'Edm.String'>,
    timeProfileDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<
    TimeAndAttendanceTimeActivityRegistrationCalculations<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      TimeAndAttendanceTimeActivityRegistrationCalculations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      WorkerPersonnelNumber: workerPersonnelNumber,
      TimeProfileDate: timeProfileDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TimeAndAttendanceTimeActivityRegistrationCalculations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TimeAndAttendanceTimeActivityRegistrationCalculations`.
   */
  update(
    entity: TimeAndAttendanceTimeActivityRegistrationCalculations<T>
  ): UpdateRequestBuilder<
    TimeAndAttendanceTimeActivityRegistrationCalculations<T>,
    T
  > {
    return new UpdateRequestBuilder<
      TimeAndAttendanceTimeActivityRegistrationCalculations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TimeAndAttendanceTimeActivityRegistrationCalculations`.
   * @param dataAreaId Key property. See {@link TimeAndAttendanceTimeActivityRegistrationCalculations.dataAreaId}.
   * @param workerPersonnelNumber Key property. See {@link TimeAndAttendanceTimeActivityRegistrationCalculations.workerPersonnelNumber}.
   * @param timeProfileDate Key property. See {@link TimeAndAttendanceTimeActivityRegistrationCalculations.timeProfileDate}.
   * @returns A request builder for creating requests that delete an entity of type `TimeAndAttendanceTimeActivityRegistrationCalculations`.
   */
  delete(
    dataAreaId: string,
    workerPersonnelNumber: string,
    timeProfileDate: Moment
  ): DeleteRequestBuilder<
    TimeAndAttendanceTimeActivityRegistrationCalculations<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `TimeAndAttendanceTimeActivityRegistrationCalculations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TimeAndAttendanceTimeActivityRegistrationCalculations` by taking the entity as a parameter.
   */
  delete(
    entity: TimeAndAttendanceTimeActivityRegistrationCalculations<T>
  ): DeleteRequestBuilder<
    TimeAndAttendanceTimeActivityRegistrationCalculations<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    workerPersonnelNumber?: string,
    timeProfileDate?: Moment
  ): DeleteRequestBuilder<
    TimeAndAttendanceTimeActivityRegistrationCalculations<T>,
    T
  > {
    return new DeleteRequestBuilder<
      TimeAndAttendanceTimeActivityRegistrationCalculations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      TimeAndAttendanceTimeActivityRegistrationCalculations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkerPersonnelNumber: workerPersonnelNumber!,
            TimeProfileDate: timeProfileDate!
          }
    );
  }
}
