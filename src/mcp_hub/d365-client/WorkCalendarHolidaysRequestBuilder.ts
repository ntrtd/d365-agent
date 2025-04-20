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
import { WorkCalendarHolidays } from './WorkCalendarHolidays';

/**
 * Request builder class for operations supported on the {@link WorkCalendarHolidays} entity.
 */
export class WorkCalendarHolidaysRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkCalendarHolidays<T>, T> {
  /**
   * Returns a request builder for querying all `WorkCalendarHolidays` entities.
   * @returns A request builder for creating requests to retrieve all `WorkCalendarHolidays` entities.
   */
  getAll(): GetAllRequestBuilder<WorkCalendarHolidays<T>, T> {
    return new GetAllRequestBuilder<WorkCalendarHolidays<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkCalendarHolidays` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkCalendarHolidays`.
   */
  create(
    entity: WorkCalendarHolidays<T>
  ): CreateRequestBuilder<WorkCalendarHolidays<T>, T> {
    return new CreateRequestBuilder<WorkCalendarHolidays<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkCalendarHolidays` entity based on its keys.
   * @param id Key property. See {@link WorkCalendarHolidays.id}.
   * @returns A request builder for creating requests to retrieve one `WorkCalendarHolidays` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkCalendarHolidays<T>, T> {
    return new GetByKeyRequestBuilder<WorkCalendarHolidays<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkCalendarHolidays`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkCalendarHolidays`.
   */
  update(
    entity: WorkCalendarHolidays<T>
  ): UpdateRequestBuilder<WorkCalendarHolidays<T>, T> {
    return new UpdateRequestBuilder<WorkCalendarHolidays<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkCalendarHolidays`.
   * @param id Key property. See {@link WorkCalendarHolidays.id}.
   * @returns A request builder for creating requests that delete an entity of type `WorkCalendarHolidays`.
   */
  delete(id: string): DeleteRequestBuilder<WorkCalendarHolidays<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkCalendarHolidays`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkCalendarHolidays` by taking the entity as a parameter.
   */
  delete(
    entity: WorkCalendarHolidays<T>
  ): DeleteRequestBuilder<WorkCalendarHolidays<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<WorkCalendarHolidays<T>, T> {
    return new DeleteRequestBuilder<WorkCalendarHolidays<T>, T>(
      this.entityApi,
      idOrEntity instanceof WorkCalendarHolidays
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
