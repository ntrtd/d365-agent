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
import { DimAttributeHcmWorkers } from './DimAttributeHcmWorkers';

/**
 * Request builder class for operations supported on the {@link DimAttributeHcmWorkers} entity.
 */
export class DimAttributeHcmWorkersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeHcmWorkers<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeHcmWorkers` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeHcmWorkers` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeHcmWorkers<T>, T> {
    return new GetAllRequestBuilder<DimAttributeHcmWorkers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeHcmWorkers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeHcmWorkers`.
   */
  create(
    entity: DimAttributeHcmWorkers<T>
  ): CreateRequestBuilder<DimAttributeHcmWorkers<T>, T> {
    return new CreateRequestBuilder<DimAttributeHcmWorkers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeHcmWorkers` entity based on its keys.
   * @param value Key property. See {@link DimAttributeHcmWorkers.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeHcmWorkers` entity based on its keys.
   */
  getByKey(
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeHcmWorkers<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeHcmWorkers<T>, T>(
      this.entityApi,
      { Value: value }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeHcmWorkers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeHcmWorkers`.
   */
  update(
    entity: DimAttributeHcmWorkers<T>
  ): UpdateRequestBuilder<DimAttributeHcmWorkers<T>, T> {
    return new UpdateRequestBuilder<DimAttributeHcmWorkers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeHcmWorkers`.
   * @param value Key property. See {@link DimAttributeHcmWorkers.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeHcmWorkers`.
   */
  delete(value: string): DeleteRequestBuilder<DimAttributeHcmWorkers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeHcmWorkers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeHcmWorkers` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeHcmWorkers<T>
  ): DeleteRequestBuilder<DimAttributeHcmWorkers<T>, T>;
  delete(
    valueOrEntity: any
  ): DeleteRequestBuilder<DimAttributeHcmWorkers<T>, T> {
    return new DeleteRequestBuilder<DimAttributeHcmWorkers<T>, T>(
      this.entityApi,
      valueOrEntity instanceof DimAttributeHcmWorkers
        ? valueOrEntity
        : { Value: valueOrEntity! }
    );
  }
}
