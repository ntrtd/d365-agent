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
import { DimAttributeRetailChannels } from './DimAttributeRetailChannels';

/**
 * Request builder class for operations supported on the {@link DimAttributeRetailChannels} entity.
 */
export class DimAttributeRetailChannelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeRetailChannels<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeRetailChannels` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeRetailChannels` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeRetailChannels<T>, T> {
    return new GetAllRequestBuilder<DimAttributeRetailChannels<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeRetailChannels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeRetailChannels`.
   */
  create(
    entity: DimAttributeRetailChannels<T>
  ): CreateRequestBuilder<DimAttributeRetailChannels<T>, T> {
    return new CreateRequestBuilder<DimAttributeRetailChannels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeRetailChannels` entity based on its keys.
   * @param value Key property. See {@link DimAttributeRetailChannels.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeRetailChannels` entity based on its keys.
   */
  getByKey(
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeRetailChannels<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeRetailChannels<T>, T>(
      this.entityApi,
      { Value: value }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeRetailChannels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeRetailChannels`.
   */
  update(
    entity: DimAttributeRetailChannels<T>
  ): UpdateRequestBuilder<DimAttributeRetailChannels<T>, T> {
    return new UpdateRequestBuilder<DimAttributeRetailChannels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeRetailChannels`.
   * @param value Key property. See {@link DimAttributeRetailChannels.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeRetailChannels`.
   */
  delete(value: string): DeleteRequestBuilder<DimAttributeRetailChannels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeRetailChannels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeRetailChannels` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeRetailChannels<T>
  ): DeleteRequestBuilder<DimAttributeRetailChannels<T>, T>;
  delete(
    valueOrEntity: any
  ): DeleteRequestBuilder<DimAttributeRetailChannels<T>, T> {
    return new DeleteRequestBuilder<DimAttributeRetailChannels<T>, T>(
      this.entityApi,
      valueOrEntity instanceof DimAttributeRetailChannels
        ? valueOrEntity
        : { Value: valueOrEntity! }
    );
  }
}
