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
import { BusinessProcessCalendarDays } from './BusinessProcessCalendarDays';

/**
 * Request builder class for operations supported on the {@link BusinessProcessCalendarDays} entity.
 */
export class BusinessProcessCalendarDaysRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessProcessCalendarDays<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessProcessCalendarDays` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessProcessCalendarDays` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessProcessCalendarDays<T>, T> {
    return new GetAllRequestBuilder<BusinessProcessCalendarDays<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BusinessProcessCalendarDays` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessProcessCalendarDays`.
   */
  create(
    entity: BusinessProcessCalendarDays<T>
  ): CreateRequestBuilder<BusinessProcessCalendarDays<T>, T> {
    return new CreateRequestBuilder<BusinessProcessCalendarDays<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BusinessProcessCalendarDays` entity based on its keys.
   * @param calendarId Key property. See {@link BusinessProcessCalendarDays.calendarId}.
   * @param calendarDate Key property. See {@link BusinessProcessCalendarDays.calendarDate}.
   * @returns A request builder for creating requests to retrieve one `BusinessProcessCalendarDays` entity based on its keys.
   */
  getByKey(
    calendarId: DeserializedType<T, 'Edm.String'>,
    calendarDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<BusinessProcessCalendarDays<T>, T> {
    return new GetByKeyRequestBuilder<BusinessProcessCalendarDays<T>, T>(
      this.entityApi,
      {
        CalendarId: calendarId,
        CalendarDate: calendarDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessProcessCalendarDays`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessProcessCalendarDays`.
   */
  update(
    entity: BusinessProcessCalendarDays<T>
  ): UpdateRequestBuilder<BusinessProcessCalendarDays<T>, T> {
    return new UpdateRequestBuilder<BusinessProcessCalendarDays<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessProcessCalendarDays`.
   * @param calendarId Key property. See {@link BusinessProcessCalendarDays.calendarId}.
   * @param calendarDate Key property. See {@link BusinessProcessCalendarDays.calendarDate}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessProcessCalendarDays`.
   */
  delete(
    calendarId: string,
    calendarDate: Moment
  ): DeleteRequestBuilder<BusinessProcessCalendarDays<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessProcessCalendarDays`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessProcessCalendarDays` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessProcessCalendarDays<T>
  ): DeleteRequestBuilder<BusinessProcessCalendarDays<T>, T>;
  delete(
    calendarIdOrEntity: any,
    calendarDate?: Moment
  ): DeleteRequestBuilder<BusinessProcessCalendarDays<T>, T> {
    return new DeleteRequestBuilder<BusinessProcessCalendarDays<T>, T>(
      this.entityApi,
      calendarIdOrEntity instanceof BusinessProcessCalendarDays
        ? calendarIdOrEntity
        : {
            CalendarId: calendarIdOrEntity!,
            CalendarDate: calendarDate!
          }
    );
  }
}
