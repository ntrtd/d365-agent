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
import { TimesheetTables } from './TimesheetTables';

/**
 * Request builder class for operations supported on the {@link TimesheetTables} entity.
 */
export class TimesheetTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TimesheetTables<T>, T> {
  /**
   * Returns a request builder for querying all `TimesheetTables` entities.
   * @returns A request builder for creating requests to retrieve all `TimesheetTables` entities.
   */
  getAll(): GetAllRequestBuilder<TimesheetTables<T>, T> {
    return new GetAllRequestBuilder<TimesheetTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TimesheetTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TimesheetTables`.
   */
  create(
    entity: TimesheetTables<T>
  ): CreateRequestBuilder<TimesheetTables<T>, T> {
    return new CreateRequestBuilder<TimesheetTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TimesheetTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link TimesheetTables.dataAreaId}.
   * @param timesheetNumber Key property. See {@link TimesheetTables.timesheetNumber}.
   * @returns A request builder for creating requests to retrieve one `TimesheetTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    timesheetNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TimesheetTables<T>, T> {
    return new GetByKeyRequestBuilder<TimesheetTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TimesheetNumber: timesheetNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TimesheetTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TimesheetTables`.
   */
  update(
    entity: TimesheetTables<T>
  ): UpdateRequestBuilder<TimesheetTables<T>, T> {
    return new UpdateRequestBuilder<TimesheetTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TimesheetTables`.
   * @param dataAreaId Key property. See {@link TimesheetTables.dataAreaId}.
   * @param timesheetNumber Key property. See {@link TimesheetTables.timesheetNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TimesheetTables`.
   */
  delete(
    dataAreaId: string,
    timesheetNumber: string
  ): DeleteRequestBuilder<TimesheetTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TimesheetTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TimesheetTables` by taking the entity as a parameter.
   */
  delete(
    entity: TimesheetTables<T>
  ): DeleteRequestBuilder<TimesheetTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    timesheetNumber?: string
  ): DeleteRequestBuilder<TimesheetTables<T>, T> {
    return new DeleteRequestBuilder<TimesheetTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TimesheetTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TimesheetNumber: timesheetNumber!
          }
    );
  }
}
