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
import { FiscalCalendarsEntity } from './FiscalCalendarsEntity';

/**
 * Request builder class for operations supported on the {@link FiscalCalendarsEntity} entity.
 */
export class FiscalCalendarsEntityRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalCalendarsEntity<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalCalendarsEntity` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalCalendarsEntity` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalCalendarsEntity<T>, T> {
    return new GetAllRequestBuilder<FiscalCalendarsEntity<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FiscalCalendarsEntity` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalCalendarsEntity`.
   */
  create(
    entity: FiscalCalendarsEntity<T>
  ): CreateRequestBuilder<FiscalCalendarsEntity<T>, T> {
    return new CreateRequestBuilder<FiscalCalendarsEntity<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalCalendarsEntity` entity based on its keys.
   * @param calendarId Key property. See {@link FiscalCalendarsEntity.calendarId}.
   * @returns A request builder for creating requests to retrieve one `FiscalCalendarsEntity` entity based on its keys.
   */
  getByKey(
    calendarId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalCalendarsEntity<T>, T> {
    return new GetByKeyRequestBuilder<FiscalCalendarsEntity<T>, T>(
      this.entityApi,
      { CalendarId: calendarId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalCalendarsEntity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalCalendarsEntity`.
   */
  update(
    entity: FiscalCalendarsEntity<T>
  ): UpdateRequestBuilder<FiscalCalendarsEntity<T>, T> {
    return new UpdateRequestBuilder<FiscalCalendarsEntity<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalCalendarsEntity`.
   * @param calendarId Key property. See {@link FiscalCalendarsEntity.calendarId}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalCalendarsEntity`.
   */
  delete(calendarId: string): DeleteRequestBuilder<FiscalCalendarsEntity<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalCalendarsEntity`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalCalendarsEntity` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalCalendarsEntity<T>
  ): DeleteRequestBuilder<FiscalCalendarsEntity<T>, T>;
  delete(
    calendarIdOrEntity: any
  ): DeleteRequestBuilder<FiscalCalendarsEntity<T>, T> {
    return new DeleteRequestBuilder<FiscalCalendarsEntity<T>, T>(
      this.entityApi,
      calendarIdOrEntity instanceof FiscalCalendarsEntity
        ? calendarIdOrEntity
        : { CalendarId: calendarIdOrEntity! }
    );
  }
}
