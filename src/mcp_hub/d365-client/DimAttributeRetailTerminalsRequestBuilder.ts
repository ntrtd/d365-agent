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
import { DimAttributeRetailTerminals } from './DimAttributeRetailTerminals';

/**
 * Request builder class for operations supported on the {@link DimAttributeRetailTerminals} entity.
 */
export class DimAttributeRetailTerminalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeRetailTerminals<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeRetailTerminals` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeRetailTerminals` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeRetailTerminals<T>, T> {
    return new GetAllRequestBuilder<DimAttributeRetailTerminals<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeRetailTerminals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeRetailTerminals`.
   */
  create(
    entity: DimAttributeRetailTerminals<T>
  ): CreateRequestBuilder<DimAttributeRetailTerminals<T>, T> {
    return new CreateRequestBuilder<DimAttributeRetailTerminals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeRetailTerminals` entity based on its keys.
   * @param value Key property. See {@link DimAttributeRetailTerminals.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeRetailTerminals` entity based on its keys.
   */
  getByKey(
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeRetailTerminals<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeRetailTerminals<T>, T>(
      this.entityApi,
      { Value: value }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeRetailTerminals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeRetailTerminals`.
   */
  update(
    entity: DimAttributeRetailTerminals<T>
  ): UpdateRequestBuilder<DimAttributeRetailTerminals<T>, T> {
    return new UpdateRequestBuilder<DimAttributeRetailTerminals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeRetailTerminals`.
   * @param value Key property. See {@link DimAttributeRetailTerminals.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeRetailTerminals`.
   */
  delete(
    value: string
  ): DeleteRequestBuilder<DimAttributeRetailTerminals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeRetailTerminals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeRetailTerminals` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeRetailTerminals<T>
  ): DeleteRequestBuilder<DimAttributeRetailTerminals<T>, T>;
  delete(
    valueOrEntity: any
  ): DeleteRequestBuilder<DimAttributeRetailTerminals<T>, T> {
    return new DeleteRequestBuilder<DimAttributeRetailTerminals<T>, T>(
      this.entityApi,
      valueOrEntity instanceof DimAttributeRetailTerminals
        ? valueOrEntity
        : { Value: valueOrEntity! }
    );
  }
}
