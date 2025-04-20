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
import { Partitions } from './Partitions';

/**
 * Request builder class for operations supported on the {@link Partitions} entity.
 */
export class PartitionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Partitions<T>, T> {
  /**
   * Returns a request builder for querying all `Partitions` entities.
   * @returns A request builder for creating requests to retrieve all `Partitions` entities.
   */
  getAll(): GetAllRequestBuilder<Partitions<T>, T> {
    return new GetAllRequestBuilder<Partitions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Partitions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Partitions`.
   */
  create(entity: Partitions<T>): CreateRequestBuilder<Partitions<T>, T> {
    return new CreateRequestBuilder<Partitions<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Partitions` entity based on its keys.
   * @param partitionKey Key property. See {@link Partitions.partitionKey}.
   * @returns A request builder for creating requests to retrieve one `Partitions` entity based on its keys.
   */
  getByKey(
    partitionKey: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Partitions<T>, T> {
    return new GetByKeyRequestBuilder<Partitions<T>, T>(this.entityApi, {
      PartitionKey: partitionKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Partitions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Partitions`.
   */
  update(entity: Partitions<T>): UpdateRequestBuilder<Partitions<T>, T> {
    return new UpdateRequestBuilder<Partitions<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Partitions`.
   * @param partitionKey Key property. See {@link Partitions.partitionKey}.
   * @returns A request builder for creating requests that delete an entity of type `Partitions`.
   */
  delete(partitionKey: string): DeleteRequestBuilder<Partitions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Partitions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Partitions` by taking the entity as a parameter.
   */
  delete(entity: Partitions<T>): DeleteRequestBuilder<Partitions<T>, T>;
  delete(partitionKeyOrEntity: any): DeleteRequestBuilder<Partitions<T>, T> {
    return new DeleteRequestBuilder<Partitions<T>, T>(
      this.entityApi,
      partitionKeyOrEntity instanceof Partitions
        ? partitionKeyOrEntity
        : { PartitionKey: partitionKeyOrEntity! }
    );
  }
}
