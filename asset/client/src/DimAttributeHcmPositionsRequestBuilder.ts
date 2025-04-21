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
import { DimAttributeHcmPositions } from './DimAttributeHcmPositions';

/**
 * Request builder class for operations supported on the {@link DimAttributeHcmPositions} entity.
 */
export class DimAttributeHcmPositionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeHcmPositions<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeHcmPositions` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeHcmPositions` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeHcmPositions<T>, T> {
    return new GetAllRequestBuilder<DimAttributeHcmPositions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeHcmPositions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeHcmPositions`.
   */
  create(
    entity: DimAttributeHcmPositions<T>
  ): CreateRequestBuilder<DimAttributeHcmPositions<T>, T> {
    return new CreateRequestBuilder<DimAttributeHcmPositions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeHcmPositions` entity based on its keys.
   * @param value Key property. See {@link DimAttributeHcmPositions.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeHcmPositions` entity based on its keys.
   */
  getByKey(
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeHcmPositions<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeHcmPositions<T>, T>(
      this.entityApi,
      { Value: value }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeHcmPositions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeHcmPositions`.
   */
  update(
    entity: DimAttributeHcmPositions<T>
  ): UpdateRequestBuilder<DimAttributeHcmPositions<T>, T> {
    return new UpdateRequestBuilder<DimAttributeHcmPositions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeHcmPositions`.
   * @param value Key property. See {@link DimAttributeHcmPositions.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeHcmPositions`.
   */
  delete(value: string): DeleteRequestBuilder<DimAttributeHcmPositions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeHcmPositions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeHcmPositions` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeHcmPositions<T>
  ): DeleteRequestBuilder<DimAttributeHcmPositions<T>, T>;
  delete(
    valueOrEntity: any
  ): DeleteRequestBuilder<DimAttributeHcmPositions<T>, T> {
    return new DeleteRequestBuilder<DimAttributeHcmPositions<T>, T>(
      this.entityApi,
      valueOrEntity instanceof DimAttributeHcmPositions
        ? valueOrEntity
        : { Value: valueOrEntity! }
    );
  }
}
