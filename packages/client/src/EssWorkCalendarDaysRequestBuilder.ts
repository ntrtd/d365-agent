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
import { EssWorkCalendarDays } from './EssWorkCalendarDays';

/**
 * Request builder class for operations supported on the {@link EssWorkCalendarDays} entity.
 */
export class EssWorkCalendarDaysRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EssWorkCalendarDays<T>, T> {
  /**
   * Returns a request builder for querying all `EssWorkCalendarDays` entities.
   * @returns A request builder for creating requests to retrieve all `EssWorkCalendarDays` entities.
   */
  getAll(): GetAllRequestBuilder<EssWorkCalendarDays<T>, T> {
    return new GetAllRequestBuilder<EssWorkCalendarDays<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EssWorkCalendarDays` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EssWorkCalendarDays`.
   */
  create(
    entity: EssWorkCalendarDays<T>
  ): CreateRequestBuilder<EssWorkCalendarDays<T>, T> {
    return new CreateRequestBuilder<EssWorkCalendarDays<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EssWorkCalendarDays` entity based on its keys.
   * @param dataAreaId Key property. See {@link EssWorkCalendarDays.dataAreaId}.
   * @param calendarId Key property. See {@link EssWorkCalendarDays.calendarId}.
   * @param calendarDate Key property. See {@link EssWorkCalendarDays.calendarDate}.
   * @returns A request builder for creating requests to retrieve one `EssWorkCalendarDays` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    calendarId: DeserializedType<T, 'Edm.String'>,
    calendarDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<EssWorkCalendarDays<T>, T> {
    return new GetByKeyRequestBuilder<EssWorkCalendarDays<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CalendarId: calendarId,
        CalendarDate: calendarDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EssWorkCalendarDays`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EssWorkCalendarDays`.
   */
  update(
    entity: EssWorkCalendarDays<T>
  ): UpdateRequestBuilder<EssWorkCalendarDays<T>, T> {
    return new UpdateRequestBuilder<EssWorkCalendarDays<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EssWorkCalendarDays`.
   * @param dataAreaId Key property. See {@link EssWorkCalendarDays.dataAreaId}.
   * @param calendarId Key property. See {@link EssWorkCalendarDays.calendarId}.
   * @param calendarDate Key property. See {@link EssWorkCalendarDays.calendarDate}.
   * @returns A request builder for creating requests that delete an entity of type `EssWorkCalendarDays`.
   */
  delete(
    dataAreaId: string,
    calendarId: string,
    calendarDate: Moment
  ): DeleteRequestBuilder<EssWorkCalendarDays<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EssWorkCalendarDays`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EssWorkCalendarDays` by taking the entity as a parameter.
   */
  delete(
    entity: EssWorkCalendarDays<T>
  ): DeleteRequestBuilder<EssWorkCalendarDays<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    calendarId?: string,
    calendarDate?: Moment
  ): DeleteRequestBuilder<EssWorkCalendarDays<T>, T> {
    return new DeleteRequestBuilder<EssWorkCalendarDays<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EssWorkCalendarDays
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CalendarId: calendarId!,
            CalendarDate: calendarDate!
          }
    );
  }
}
