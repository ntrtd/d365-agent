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
import { WorkCalendarDays } from './WorkCalendarDays';

/**
 * Request builder class for operations supported on the {@link WorkCalendarDays} entity.
 */
export class WorkCalendarDaysRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkCalendarDays<T>, T> {
  /**
   * Returns a request builder for querying all `WorkCalendarDays` entities.
   * @returns A request builder for creating requests to retrieve all `WorkCalendarDays` entities.
   */
  getAll(): GetAllRequestBuilder<WorkCalendarDays<T>, T> {
    return new GetAllRequestBuilder<WorkCalendarDays<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkCalendarDays` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkCalendarDays`.
   */
  create(
    entity: WorkCalendarDays<T>
  ): CreateRequestBuilder<WorkCalendarDays<T>, T> {
    return new CreateRequestBuilder<WorkCalendarDays<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkCalendarDays` entity based on its keys.
   * @param dataAreaId Key property. See {@link WorkCalendarDays.dataAreaId}.
   * @param workCalendarId Key property. See {@link WorkCalendarDays.workCalendarId}.
   * @param calendarDate Key property. See {@link WorkCalendarDays.calendarDate}.
   * @returns A request builder for creating requests to retrieve one `WorkCalendarDays` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workCalendarId: DeserializedType<T, 'Edm.String'>,
    calendarDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<WorkCalendarDays<T>, T> {
    return new GetByKeyRequestBuilder<WorkCalendarDays<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      WorkCalendarId: workCalendarId,
      CalendarDate: calendarDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WorkCalendarDays`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkCalendarDays`.
   */
  update(
    entity: WorkCalendarDays<T>
  ): UpdateRequestBuilder<WorkCalendarDays<T>, T> {
    return new UpdateRequestBuilder<WorkCalendarDays<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkCalendarDays`.
   * @param dataAreaId Key property. See {@link WorkCalendarDays.dataAreaId}.
   * @param workCalendarId Key property. See {@link WorkCalendarDays.workCalendarId}.
   * @param calendarDate Key property. See {@link WorkCalendarDays.calendarDate}.
   * @returns A request builder for creating requests that delete an entity of type `WorkCalendarDays`.
   */
  delete(
    dataAreaId: string,
    workCalendarId: string,
    calendarDate: Moment
  ): DeleteRequestBuilder<WorkCalendarDays<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkCalendarDays`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkCalendarDays` by taking the entity as a parameter.
   */
  delete(
    entity: WorkCalendarDays<T>
  ): DeleteRequestBuilder<WorkCalendarDays<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workCalendarId?: string,
    calendarDate?: Moment
  ): DeleteRequestBuilder<WorkCalendarDays<T>, T> {
    return new DeleteRequestBuilder<WorkCalendarDays<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WorkCalendarDays
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkCalendarId: workCalendarId!,
            CalendarDate: calendarDate!
          }
    );
  }
}
