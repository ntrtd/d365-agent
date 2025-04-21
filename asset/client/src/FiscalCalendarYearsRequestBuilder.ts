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
import { FiscalCalendarYears } from './FiscalCalendarYears';

/**
 * Request builder class for operations supported on the {@link FiscalCalendarYears} entity.
 */
export class FiscalCalendarYearsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalCalendarYears<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalCalendarYears` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalCalendarYears` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalCalendarYears<T>, T> {
    return new GetAllRequestBuilder<FiscalCalendarYears<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FiscalCalendarYears` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalCalendarYears`.
   */
  create(
    entity: FiscalCalendarYears<T>
  ): CreateRequestBuilder<FiscalCalendarYears<T>, T> {
    return new CreateRequestBuilder<FiscalCalendarYears<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalCalendarYears` entity based on its keys.
   * @param calendar Key property. See {@link FiscalCalendarYears.calendar}.
   * @param fiscalYear Key property. See {@link FiscalCalendarYears.fiscalYear}.
   * @returns A request builder for creating requests to retrieve one `FiscalCalendarYears` entity based on its keys.
   */
  getByKey(
    calendar: DeserializedType<T, 'Edm.String'>,
    fiscalYear: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalCalendarYears<T>, T> {
    return new GetByKeyRequestBuilder<FiscalCalendarYears<T>, T>(
      this.entityApi,
      {
        Calendar: calendar,
        FiscalYear: fiscalYear
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalCalendarYears`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalCalendarYears`.
   */
  update(
    entity: FiscalCalendarYears<T>
  ): UpdateRequestBuilder<FiscalCalendarYears<T>, T> {
    return new UpdateRequestBuilder<FiscalCalendarYears<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalCalendarYears`.
   * @param calendar Key property. See {@link FiscalCalendarYears.calendar}.
   * @param fiscalYear Key property. See {@link FiscalCalendarYears.fiscalYear}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalCalendarYears`.
   */
  delete(
    calendar: string,
    fiscalYear: string
  ): DeleteRequestBuilder<FiscalCalendarYears<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalCalendarYears`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalCalendarYears` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalCalendarYears<T>
  ): DeleteRequestBuilder<FiscalCalendarYears<T>, T>;
  delete(
    calendarOrEntity: any,
    fiscalYear?: string
  ): DeleteRequestBuilder<FiscalCalendarYears<T>, T> {
    return new DeleteRequestBuilder<FiscalCalendarYears<T>, T>(
      this.entityApi,
      calendarOrEntity instanceof FiscalCalendarYears
        ? calendarOrEntity
        : {
            Calendar: calendarOrEntity!,
            FiscalYear: fiscalYear!
          }
    );
  }
}
