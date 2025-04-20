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
import { DimAttributeRetailStores } from './DimAttributeRetailStores';

/**
 * Request builder class for operations supported on the {@link DimAttributeRetailStores} entity.
 */
export class DimAttributeRetailStoresRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeRetailStores<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeRetailStores` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeRetailStores` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeRetailStores<T>, T> {
    return new GetAllRequestBuilder<DimAttributeRetailStores<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeRetailStores` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeRetailStores`.
   */
  create(
    entity: DimAttributeRetailStores<T>
  ): CreateRequestBuilder<DimAttributeRetailStores<T>, T> {
    return new CreateRequestBuilder<DimAttributeRetailStores<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeRetailStores` entity based on its keys.
   * @param value Key property. See {@link DimAttributeRetailStores.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeRetailStores` entity based on its keys.
   */
  getByKey(
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeRetailStores<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeRetailStores<T>, T>(
      this.entityApi,
      { Value: value }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeRetailStores`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeRetailStores`.
   */
  update(
    entity: DimAttributeRetailStores<T>
  ): UpdateRequestBuilder<DimAttributeRetailStores<T>, T> {
    return new UpdateRequestBuilder<DimAttributeRetailStores<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeRetailStores`.
   * @param value Key property. See {@link DimAttributeRetailStores.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeRetailStores`.
   */
  delete(value: string): DeleteRequestBuilder<DimAttributeRetailStores<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeRetailStores`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeRetailStores` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeRetailStores<T>
  ): DeleteRequestBuilder<DimAttributeRetailStores<T>, T>;
  delete(
    valueOrEntity: any
  ): DeleteRequestBuilder<DimAttributeRetailStores<T>, T> {
    return new DeleteRequestBuilder<DimAttributeRetailStores<T>, T>(
      this.entityApi,
      valueOrEntity instanceof DimAttributeRetailStores
        ? valueOrEntity
        : { Value: valueOrEntity! }
    );
  }
}
