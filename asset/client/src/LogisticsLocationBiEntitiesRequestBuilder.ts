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
import { LogisticsLocationBiEntities } from './LogisticsLocationBiEntities';

/**
 * Request builder class for operations supported on the {@link LogisticsLocationBiEntities} entity.
 */
export class LogisticsLocationBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LogisticsLocationBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `LogisticsLocationBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `LogisticsLocationBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<LogisticsLocationBiEntities<T>, T> {
    return new GetAllRequestBuilder<LogisticsLocationBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LogisticsLocationBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LogisticsLocationBiEntities`.
   */
  create(
    entity: LogisticsLocationBiEntities<T>
  ): CreateRequestBuilder<LogisticsLocationBiEntities<T>, T> {
    return new CreateRequestBuilder<LogisticsLocationBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LogisticsLocationBiEntities` entity based on its keys.
   * @param locationId Key property. See {@link LogisticsLocationBiEntities.locationId}.
   * @returns A request builder for creating requests to retrieve one `LogisticsLocationBiEntities` entity based on its keys.
   */
  getByKey(
    locationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LogisticsLocationBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<LogisticsLocationBiEntities<T>, T>(
      this.entityApi,
      { LocationId: locationId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LogisticsLocationBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LogisticsLocationBiEntities`.
   */
  update(
    entity: LogisticsLocationBiEntities<T>
  ): UpdateRequestBuilder<LogisticsLocationBiEntities<T>, T> {
    return new UpdateRequestBuilder<LogisticsLocationBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LogisticsLocationBiEntities`.
   * @param locationId Key property. See {@link LogisticsLocationBiEntities.locationId}.
   * @returns A request builder for creating requests that delete an entity of type `LogisticsLocationBiEntities`.
   */
  delete(
    locationId: string
  ): DeleteRequestBuilder<LogisticsLocationBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LogisticsLocationBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LogisticsLocationBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: LogisticsLocationBiEntities<T>
  ): DeleteRequestBuilder<LogisticsLocationBiEntities<T>, T>;
  delete(
    locationIdOrEntity: any
  ): DeleteRequestBuilder<LogisticsLocationBiEntities<T>, T> {
    return new DeleteRequestBuilder<LogisticsLocationBiEntities<T>, T>(
      this.entityApi,
      locationIdOrEntity instanceof LogisticsLocationBiEntities
        ? locationIdOrEntity
        : { LocationId: locationIdOrEntity! }
    );
  }
}
