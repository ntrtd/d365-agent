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
import { FiscalCalendarBiEntities } from './FiscalCalendarBiEntities';

/**
 * Request builder class for operations supported on the {@link FiscalCalendarBiEntities} entity.
 */
export class FiscalCalendarBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalCalendarBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalCalendarBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalCalendarBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalCalendarBiEntities<T>, T> {
    return new GetAllRequestBuilder<FiscalCalendarBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FiscalCalendarBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalCalendarBiEntities`.
   */
  create(
    entity: FiscalCalendarBiEntities<T>
  ): CreateRequestBuilder<FiscalCalendarBiEntities<T>, T> {
    return new CreateRequestBuilder<FiscalCalendarBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalCalendarBiEntities` entity based on its keys.
   * @param calendarId Key property. See {@link FiscalCalendarBiEntities.calendarId}.
   * @returns A request builder for creating requests to retrieve one `FiscalCalendarBiEntities` entity based on its keys.
   */
  getByKey(
    calendarId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalCalendarBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<FiscalCalendarBiEntities<T>, T>(
      this.entityApi,
      { CalendarId: calendarId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalCalendarBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalCalendarBiEntities`.
   */
  update(
    entity: FiscalCalendarBiEntities<T>
  ): UpdateRequestBuilder<FiscalCalendarBiEntities<T>, T> {
    return new UpdateRequestBuilder<FiscalCalendarBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalCalendarBiEntities`.
   * @param calendarId Key property. See {@link FiscalCalendarBiEntities.calendarId}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalCalendarBiEntities`.
   */
  delete(
    calendarId: string
  ): DeleteRequestBuilder<FiscalCalendarBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalCalendarBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalCalendarBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalCalendarBiEntities<T>
  ): DeleteRequestBuilder<FiscalCalendarBiEntities<T>, T>;
  delete(
    calendarIdOrEntity: any
  ): DeleteRequestBuilder<FiscalCalendarBiEntities<T>, T> {
    return new DeleteRequestBuilder<FiscalCalendarBiEntities<T>, T>(
      this.entityApi,
      calendarIdOrEntity instanceof FiscalCalendarBiEntities
        ? calendarIdOrEntity
        : { CalendarId: calendarIdOrEntity! }
    );
  }
}
