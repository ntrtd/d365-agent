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
import { AssetLeaseIndexRateTypeBiEntities } from './AssetLeaseIndexRateTypeBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetLeaseIndexRateTypeBiEntities} entity.
 */
export class AssetLeaseIndexRateTypeBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetLeaseIndexRateTypeBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetLeaseIndexRateTypeBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLeaseIndexRateTypeBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetLeaseIndexRateTypeBiEntities<T>, T> {
    return new GetAllRequestBuilder<AssetLeaseIndexRateTypeBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetLeaseIndexRateTypeBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLeaseIndexRateTypeBiEntities`.
   */
  create(
    entity: AssetLeaseIndexRateTypeBiEntities<T>
  ): CreateRequestBuilder<AssetLeaseIndexRateTypeBiEntities<T>, T> {
    return new CreateRequestBuilder<AssetLeaseIndexRateTypeBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetLeaseIndexRateTypeBiEntities` entity based on its keys.
   * @param name Key property. See {@link AssetLeaseIndexRateTypeBiEntities.name}.
   * @returns A request builder for creating requests to retrieve one `AssetLeaseIndexRateTypeBiEntities` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetLeaseIndexRateTypeBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<AssetLeaseIndexRateTypeBiEntities<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLeaseIndexRateTypeBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLeaseIndexRateTypeBiEntities`.
   */
  update(
    entity: AssetLeaseIndexRateTypeBiEntities<T>
  ): UpdateRequestBuilder<AssetLeaseIndexRateTypeBiEntities<T>, T> {
    return new UpdateRequestBuilder<AssetLeaseIndexRateTypeBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseIndexRateTypeBiEntities`.
   * @param name Key property. See {@link AssetLeaseIndexRateTypeBiEntities.name}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseIndexRateTypeBiEntities`.
   */
  delete(
    name: string
  ): DeleteRequestBuilder<AssetLeaseIndexRateTypeBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseIndexRateTypeBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseIndexRateTypeBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetLeaseIndexRateTypeBiEntities<T>
  ): DeleteRequestBuilder<AssetLeaseIndexRateTypeBiEntities<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<AssetLeaseIndexRateTypeBiEntities<T>, T> {
    return new DeleteRequestBuilder<AssetLeaseIndexRateTypeBiEntities<T>, T>(
      this.entityApi,
      nameOrEntity instanceof AssetLeaseIndexRateTypeBiEntities
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
