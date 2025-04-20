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
import { WarehouseNumberSequenceExtensions } from './WarehouseNumberSequenceExtensions';

/**
 * Request builder class for operations supported on the {@link WarehouseNumberSequenceExtensions} entity.
 */
export class WarehouseNumberSequenceExtensionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehouseNumberSequenceExtensions<T>, T> {
  /**
   * Returns a request builder for querying all `WarehouseNumberSequenceExtensions` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseNumberSequenceExtensions` entities.
   */
  getAll(): GetAllRequestBuilder<WarehouseNumberSequenceExtensions<T>, T> {
    return new GetAllRequestBuilder<WarehouseNumberSequenceExtensions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WarehouseNumberSequenceExtensions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseNumberSequenceExtensions`.
   */
  create(
    entity: WarehouseNumberSequenceExtensions<T>
  ): CreateRequestBuilder<WarehouseNumberSequenceExtensions<T>, T> {
    return new CreateRequestBuilder<WarehouseNumberSequenceExtensions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarehouseNumberSequenceExtensions` entity based on its keys.
   * @param numberSequenceExtId Key property. See {@link WarehouseNumberSequenceExtensions.numberSequenceExtId}.
   * @returns A request builder for creating requests to retrieve one `WarehouseNumberSequenceExtensions` entity based on its keys.
   */
  getByKey(
    numberSequenceExtId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WarehouseNumberSequenceExtensions<T>, T> {
    return new GetByKeyRequestBuilder<WarehouseNumberSequenceExtensions<T>, T>(
      this.entityApi,
      { NumberSequenceExtId: numberSequenceExtId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseNumberSequenceExtensions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseNumberSequenceExtensions`.
   */
  update(
    entity: WarehouseNumberSequenceExtensions<T>
  ): UpdateRequestBuilder<WarehouseNumberSequenceExtensions<T>, T> {
    return new UpdateRequestBuilder<WarehouseNumberSequenceExtensions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseNumberSequenceExtensions`.
   * @param numberSequenceExtId Key property. See {@link WarehouseNumberSequenceExtensions.numberSequenceExtId}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseNumberSequenceExtensions`.
   */
  delete(
    numberSequenceExtId: string
  ): DeleteRequestBuilder<WarehouseNumberSequenceExtensions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseNumberSequenceExtensions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseNumberSequenceExtensions` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseNumberSequenceExtensions<T>
  ): DeleteRequestBuilder<WarehouseNumberSequenceExtensions<T>, T>;
  delete(
    numberSequenceExtIdOrEntity: any
  ): DeleteRequestBuilder<WarehouseNumberSequenceExtensions<T>, T> {
    return new DeleteRequestBuilder<WarehouseNumberSequenceExtensions<T>, T>(
      this.entityApi,
      numberSequenceExtIdOrEntity instanceof WarehouseNumberSequenceExtensions
        ? numberSequenceExtIdOrEntity
        : { NumberSequenceExtId: numberSequenceExtIdOrEntity! }
    );
  }
}
