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
import { WorkCalendarTimeIntervals } from './WorkCalendarTimeIntervals';

/**
 * Request builder class for operations supported on the {@link WorkCalendarTimeIntervals} entity.
 */
export class WorkCalendarTimeIntervalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkCalendarTimeIntervals<T>, T> {
  /**
   * Returns a request builder for querying all `WorkCalendarTimeIntervals` entities.
   * @returns A request builder for creating requests to retrieve all `WorkCalendarTimeIntervals` entities.
   */
  getAll(): GetAllRequestBuilder<WorkCalendarTimeIntervals<T>, T> {
    return new GetAllRequestBuilder<WorkCalendarTimeIntervals<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WorkCalendarTimeIntervals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkCalendarTimeIntervals`.
   */
  create(
    entity: WorkCalendarTimeIntervals<T>
  ): CreateRequestBuilder<WorkCalendarTimeIntervals<T>, T> {
    return new CreateRequestBuilder<WorkCalendarTimeIntervals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkCalendarTimeIntervals` entity based on its keys.
   * @param dataAreaId Key property. See {@link WorkCalendarTimeIntervals.dataAreaId}.
   * @param workCalendarId Key property. See {@link WorkCalendarTimeIntervals.workCalendarId}.
   * @param workCalendarDate Key property. See {@link WorkCalendarTimeIntervals.workCalendarDate}.
   * @param startTime Key property. See {@link WorkCalendarTimeIntervals.startTime}.
   * @returns A request builder for creating requests to retrieve one `WorkCalendarTimeIntervals` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workCalendarId: DeserializedType<T, 'Edm.String'>,
    workCalendarDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    startTime: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<WorkCalendarTimeIntervals<T>, T> {
    return new GetByKeyRequestBuilder<WorkCalendarTimeIntervals<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WorkCalendarId: workCalendarId,
        WorkCalendarDate: workCalendarDate,
        StartTime: startTime
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkCalendarTimeIntervals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkCalendarTimeIntervals`.
   */
  update(
    entity: WorkCalendarTimeIntervals<T>
  ): UpdateRequestBuilder<WorkCalendarTimeIntervals<T>, T> {
    return new UpdateRequestBuilder<WorkCalendarTimeIntervals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkCalendarTimeIntervals`.
   * @param dataAreaId Key property. See {@link WorkCalendarTimeIntervals.dataAreaId}.
   * @param workCalendarId Key property. See {@link WorkCalendarTimeIntervals.workCalendarId}.
   * @param workCalendarDate Key property. See {@link WorkCalendarTimeIntervals.workCalendarDate}.
   * @param startTime Key property. See {@link WorkCalendarTimeIntervals.startTime}.
   * @returns A request builder for creating requests that delete an entity of type `WorkCalendarTimeIntervals`.
   */
  delete(
    dataAreaId: string,
    workCalendarId: string,
    workCalendarDate: Moment,
    startTime: number
  ): DeleteRequestBuilder<WorkCalendarTimeIntervals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkCalendarTimeIntervals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkCalendarTimeIntervals` by taking the entity as a parameter.
   */
  delete(
    entity: WorkCalendarTimeIntervals<T>
  ): DeleteRequestBuilder<WorkCalendarTimeIntervals<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workCalendarId?: string,
    workCalendarDate?: Moment,
    startTime?: number
  ): DeleteRequestBuilder<WorkCalendarTimeIntervals<T>, T> {
    return new DeleteRequestBuilder<WorkCalendarTimeIntervals<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WorkCalendarTimeIntervals
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkCalendarId: workCalendarId!,
            WorkCalendarDate: workCalendarDate!,
            StartTime: startTime!
          }
    );
  }
}
