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
import { DimensionAttributeBiEntities } from './DimensionAttributeBiEntities';

/**
 * Request builder class for operations supported on the {@link DimensionAttributeBiEntities} entity.
 */
export class DimensionAttributeBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimensionAttributeBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `DimensionAttributeBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `DimensionAttributeBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<DimensionAttributeBiEntities<T>, T> {
    return new GetAllRequestBuilder<DimensionAttributeBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimensionAttributeBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimensionAttributeBiEntities`.
   */
  create(
    entity: DimensionAttributeBiEntities<T>
  ): CreateRequestBuilder<DimensionAttributeBiEntities<T>, T> {
    return new CreateRequestBuilder<DimensionAttributeBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimensionAttributeBiEntities` entity based on its keys.
   * @param name Key property. See {@link DimensionAttributeBiEntities.name}.
   * @returns A request builder for creating requests to retrieve one `DimensionAttributeBiEntities` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimensionAttributeBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<DimensionAttributeBiEntities<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimensionAttributeBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimensionAttributeBiEntities`.
   */
  update(
    entity: DimensionAttributeBiEntities<T>
  ): UpdateRequestBuilder<DimensionAttributeBiEntities<T>, T> {
    return new UpdateRequestBuilder<DimensionAttributeBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimensionAttributeBiEntities`.
   * @param name Key property. See {@link DimensionAttributeBiEntities.name}.
   * @returns A request builder for creating requests that delete an entity of type `DimensionAttributeBiEntities`.
   */
  delete(
    name: string
  ): DeleteRequestBuilder<DimensionAttributeBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimensionAttributeBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimensionAttributeBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: DimensionAttributeBiEntities<T>
  ): DeleteRequestBuilder<DimensionAttributeBiEntities<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<DimensionAttributeBiEntities<T>, T> {
    return new DeleteRequestBuilder<DimensionAttributeBiEntities<T>, T>(
      this.entityApi,
      nameOrEntity instanceof DimensionAttributeBiEntities
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
