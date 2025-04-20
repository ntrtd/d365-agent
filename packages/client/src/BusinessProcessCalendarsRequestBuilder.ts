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
import { BusinessProcessCalendars } from './BusinessProcessCalendars';

/**
 * Request builder class for operations supported on the {@link BusinessProcessCalendars} entity.
 */
export class BusinessProcessCalendarsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessProcessCalendars<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessProcessCalendars` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessProcessCalendars` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessProcessCalendars<T>, T> {
    return new GetAllRequestBuilder<BusinessProcessCalendars<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BusinessProcessCalendars` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessProcessCalendars`.
   */
  create(
    entity: BusinessProcessCalendars<T>
  ): CreateRequestBuilder<BusinessProcessCalendars<T>, T> {
    return new CreateRequestBuilder<BusinessProcessCalendars<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BusinessProcessCalendars` entity based on its keys.
   * @param calendarId Key property. See {@link BusinessProcessCalendars.calendarId}.
   * @returns A request builder for creating requests to retrieve one `BusinessProcessCalendars` entity based on its keys.
   */
  getByKey(
    calendarId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BusinessProcessCalendars<T>, T> {
    return new GetByKeyRequestBuilder<BusinessProcessCalendars<T>, T>(
      this.entityApi,
      { CalendarId: calendarId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessProcessCalendars`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessProcessCalendars`.
   */
  update(
    entity: BusinessProcessCalendars<T>
  ): UpdateRequestBuilder<BusinessProcessCalendars<T>, T> {
    return new UpdateRequestBuilder<BusinessProcessCalendars<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessProcessCalendars`.
   * @param calendarId Key property. See {@link BusinessProcessCalendars.calendarId}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessProcessCalendars`.
   */
  delete(
    calendarId: string
  ): DeleteRequestBuilder<BusinessProcessCalendars<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessProcessCalendars`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessProcessCalendars` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessProcessCalendars<T>
  ): DeleteRequestBuilder<BusinessProcessCalendars<T>, T>;
  delete(
    calendarIdOrEntity: any
  ): DeleteRequestBuilder<BusinessProcessCalendars<T>, T> {
    return new DeleteRequestBuilder<BusinessProcessCalendars<T>, T>(
      this.entityApi,
      calendarIdOrEntity instanceof BusinessProcessCalendars
        ? calendarIdOrEntity
        : { CalendarId: calendarIdOrEntity! }
    );
  }
}
