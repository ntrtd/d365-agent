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
import { FiscalCalendarPeriodBiEntities } from './FiscalCalendarPeriodBiEntities';

/**
 * Request builder class for operations supported on the {@link FiscalCalendarPeriodBiEntities} entity.
 */
export class FiscalCalendarPeriodBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalCalendarPeriodBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalCalendarPeriodBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalCalendarPeriodBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalCalendarPeriodBiEntities<T>, T> {
    return new GetAllRequestBuilder<FiscalCalendarPeriodBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FiscalCalendarPeriodBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalCalendarPeriodBiEntities`.
   */
  create(
    entity: FiscalCalendarPeriodBiEntities<T>
  ): CreateRequestBuilder<FiscalCalendarPeriodBiEntities<T>, T> {
    return new CreateRequestBuilder<FiscalCalendarPeriodBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalCalendarPeriodBiEntities` entity based on its keys.
   * @param name Key property. See {@link FiscalCalendarPeriodBiEntities.name}.
   * @returns A request builder for creating requests to retrieve one `FiscalCalendarPeriodBiEntities` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalCalendarPeriodBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<FiscalCalendarPeriodBiEntities<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalCalendarPeriodBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalCalendarPeriodBiEntities`.
   */
  update(
    entity: FiscalCalendarPeriodBiEntities<T>
  ): UpdateRequestBuilder<FiscalCalendarPeriodBiEntities<T>, T> {
    return new UpdateRequestBuilder<FiscalCalendarPeriodBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalCalendarPeriodBiEntities`.
   * @param name Key property. See {@link FiscalCalendarPeriodBiEntities.name}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalCalendarPeriodBiEntities`.
   */
  delete(
    name: string
  ): DeleteRequestBuilder<FiscalCalendarPeriodBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalCalendarPeriodBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalCalendarPeriodBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalCalendarPeriodBiEntities<T>
  ): DeleteRequestBuilder<FiscalCalendarPeriodBiEntities<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<FiscalCalendarPeriodBiEntities<T>, T> {
    return new DeleteRequestBuilder<FiscalCalendarPeriodBiEntities<T>, T>(
      this.entityApi,
      nameOrEntity instanceof FiscalCalendarPeriodBiEntities
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
