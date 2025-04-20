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
import { FiscalCalendarYearsEntity } from './FiscalCalendarYearsEntity';

/**
 * Request builder class for operations supported on the {@link FiscalCalendarYearsEntity} entity.
 */
export class FiscalCalendarYearsEntityRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalCalendarYearsEntity<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalCalendarYearsEntity` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalCalendarYearsEntity` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalCalendarYearsEntity<T>, T> {
    return new GetAllRequestBuilder<FiscalCalendarYearsEntity<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FiscalCalendarYearsEntity` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalCalendarYearsEntity`.
   */
  create(
    entity: FiscalCalendarYearsEntity<T>
  ): CreateRequestBuilder<FiscalCalendarYearsEntity<T>, T> {
    return new CreateRequestBuilder<FiscalCalendarYearsEntity<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalCalendarYearsEntity` entity based on its keys.
   * @param fiscalCalendarCalendarId Key property. See {@link FiscalCalendarYearsEntity.fiscalCalendarCalendarId}.
   * @param name Key property. See {@link FiscalCalendarYearsEntity.name}.
   * @returns A request builder for creating requests to retrieve one `FiscalCalendarYearsEntity` entity based on its keys.
   */
  getByKey(
    fiscalCalendarCalendarId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalCalendarYearsEntity<T>, T> {
    return new GetByKeyRequestBuilder<FiscalCalendarYearsEntity<T>, T>(
      this.entityApi,
      {
        FiscalCalendar_CalendarId: fiscalCalendarCalendarId,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalCalendarYearsEntity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalCalendarYearsEntity`.
   */
  update(
    entity: FiscalCalendarYearsEntity<T>
  ): UpdateRequestBuilder<FiscalCalendarYearsEntity<T>, T> {
    return new UpdateRequestBuilder<FiscalCalendarYearsEntity<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalCalendarYearsEntity`.
   * @param fiscalCalendarCalendarId Key property. See {@link FiscalCalendarYearsEntity.fiscalCalendarCalendarId}.
   * @param name Key property. See {@link FiscalCalendarYearsEntity.name}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalCalendarYearsEntity`.
   */
  delete(
    fiscalCalendarCalendarId: string,
    name: string
  ): DeleteRequestBuilder<FiscalCalendarYearsEntity<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalCalendarYearsEntity`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalCalendarYearsEntity` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalCalendarYearsEntity<T>
  ): DeleteRequestBuilder<FiscalCalendarYearsEntity<T>, T>;
  delete(
    fiscalCalendarCalendarIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<FiscalCalendarYearsEntity<T>, T> {
    return new DeleteRequestBuilder<FiscalCalendarYearsEntity<T>, T>(
      this.entityApi,
      fiscalCalendarCalendarIdOrEntity instanceof FiscalCalendarYearsEntity
        ? fiscalCalendarCalendarIdOrEntity
        : {
            FiscalCalendar_CalendarId: fiscalCalendarCalendarIdOrEntity!,
            Name: name!
          }
    );
  }
}
