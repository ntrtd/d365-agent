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
import { FiscalCalendarYearBiEntities } from './FiscalCalendarYearBiEntities';

/**
 * Request builder class for operations supported on the {@link FiscalCalendarYearBiEntities} entity.
 */
export class FiscalCalendarYearBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalCalendarYearBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalCalendarYearBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalCalendarYearBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalCalendarYearBiEntities<T>, T> {
    return new GetAllRequestBuilder<FiscalCalendarYearBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FiscalCalendarYearBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalCalendarYearBiEntities`.
   */
  create(
    entity: FiscalCalendarYearBiEntities<T>
  ): CreateRequestBuilder<FiscalCalendarYearBiEntities<T>, T> {
    return new CreateRequestBuilder<FiscalCalendarYearBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalCalendarYearBiEntities` entity based on its keys.
   * @param name Key property. See {@link FiscalCalendarYearBiEntities.name}.
   * @returns A request builder for creating requests to retrieve one `FiscalCalendarYearBiEntities` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalCalendarYearBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<FiscalCalendarYearBiEntities<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalCalendarYearBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalCalendarYearBiEntities`.
   */
  update(
    entity: FiscalCalendarYearBiEntities<T>
  ): UpdateRequestBuilder<FiscalCalendarYearBiEntities<T>, T> {
    return new UpdateRequestBuilder<FiscalCalendarYearBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalCalendarYearBiEntities`.
   * @param name Key property. See {@link FiscalCalendarYearBiEntities.name}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalCalendarYearBiEntities`.
   */
  delete(
    name: string
  ): DeleteRequestBuilder<FiscalCalendarYearBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalCalendarYearBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalCalendarYearBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalCalendarYearBiEntities<T>
  ): DeleteRequestBuilder<FiscalCalendarYearBiEntities<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<FiscalCalendarYearBiEntities<T>, T> {
    return new DeleteRequestBuilder<FiscalCalendarYearBiEntities<T>, T>(
      this.entityApi,
      nameOrEntity instanceof FiscalCalendarYearBiEntities
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
