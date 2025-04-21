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
import { WorkCalendars } from './WorkCalendars';

/**
 * Request builder class for operations supported on the {@link WorkCalendars} entity.
 */
export class WorkCalendarsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkCalendars<T>, T> {
  /**
   * Returns a request builder for querying all `WorkCalendars` entities.
   * @returns A request builder for creating requests to retrieve all `WorkCalendars` entities.
   */
  getAll(): GetAllRequestBuilder<WorkCalendars<T>, T> {
    return new GetAllRequestBuilder<WorkCalendars<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkCalendars` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkCalendars`.
   */
  create(entity: WorkCalendars<T>): CreateRequestBuilder<WorkCalendars<T>, T> {
    return new CreateRequestBuilder<WorkCalendars<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkCalendars` entity based on its keys.
   * @param dataAreaId Key property. See {@link WorkCalendars.dataAreaId}.
   * @param calendarId Key property. See {@link WorkCalendars.calendarId}.
   * @returns A request builder for creating requests to retrieve one `WorkCalendars` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    calendarId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkCalendars<T>, T> {
    return new GetByKeyRequestBuilder<WorkCalendars<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CalendarId: calendarId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WorkCalendars`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkCalendars`.
   */
  update(entity: WorkCalendars<T>): UpdateRequestBuilder<WorkCalendars<T>, T> {
    return new UpdateRequestBuilder<WorkCalendars<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkCalendars`.
   * @param dataAreaId Key property. See {@link WorkCalendars.dataAreaId}.
   * @param calendarId Key property. See {@link WorkCalendars.calendarId}.
   * @returns A request builder for creating requests that delete an entity of type `WorkCalendars`.
   */
  delete(
    dataAreaId: string,
    calendarId: string
  ): DeleteRequestBuilder<WorkCalendars<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkCalendars`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkCalendars` by taking the entity as a parameter.
   */
  delete(entity: WorkCalendars<T>): DeleteRequestBuilder<WorkCalendars<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    calendarId?: string
  ): DeleteRequestBuilder<WorkCalendars<T>, T> {
    return new DeleteRequestBuilder<WorkCalendars<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WorkCalendars
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CalendarId: calendarId!
          }
    );
  }
}
