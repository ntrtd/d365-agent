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
import { DimAttributeOmValueStreams } from './DimAttributeOmValueStreams';

/**
 * Request builder class for operations supported on the {@link DimAttributeOmValueStreams} entity.
 */
export class DimAttributeOmValueStreamsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeOmValueStreams<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeOmValueStreams` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeOmValueStreams` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeOmValueStreams<T>, T> {
    return new GetAllRequestBuilder<DimAttributeOmValueStreams<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeOmValueStreams` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeOmValueStreams`.
   */
  create(
    entity: DimAttributeOmValueStreams<T>
  ): CreateRequestBuilder<DimAttributeOmValueStreams<T>, T> {
    return new CreateRequestBuilder<DimAttributeOmValueStreams<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeOmValueStreams` entity based on its keys.
   * @param value Key property. See {@link DimAttributeOmValueStreams.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeOmValueStreams` entity based on its keys.
   */
  getByKey(
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeOmValueStreams<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeOmValueStreams<T>, T>(
      this.entityApi,
      { Value: value }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeOmValueStreams`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeOmValueStreams`.
   */
  update(
    entity: DimAttributeOmValueStreams<T>
  ): UpdateRequestBuilder<DimAttributeOmValueStreams<T>, T> {
    return new UpdateRequestBuilder<DimAttributeOmValueStreams<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeOmValueStreams`.
   * @param value Key property. See {@link DimAttributeOmValueStreams.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeOmValueStreams`.
   */
  delete(value: string): DeleteRequestBuilder<DimAttributeOmValueStreams<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeOmValueStreams`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeOmValueStreams` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeOmValueStreams<T>
  ): DeleteRequestBuilder<DimAttributeOmValueStreams<T>, T>;
  delete(
    valueOrEntity: any
  ): DeleteRequestBuilder<DimAttributeOmValueStreams<T>, T> {
    return new DeleteRequestBuilder<DimAttributeOmValueStreams<T>, T>(
      this.entityApi,
      valueOrEntity instanceof DimAttributeOmValueStreams
        ? valueOrEntity
        : { Value: valueOrEntity! }
    );
  }
}
