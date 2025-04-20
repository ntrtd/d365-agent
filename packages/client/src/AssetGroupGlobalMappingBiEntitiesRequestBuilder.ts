/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { AssetGroupGlobalMappingBiEntities } from './AssetGroupGlobalMappingBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetGroupGlobalMappingBiEntities} entity.
 */
export class AssetGroupGlobalMappingBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetGroupGlobalMappingBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetGroupGlobalMappingBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetGroupGlobalMappingBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetGroupGlobalMappingBiEntities<T>, T> {
    return new GetAllRequestBuilder<AssetGroupGlobalMappingBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetGroupGlobalMappingBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetGroupGlobalMappingBiEntities`.
   */
  create(
    entity: AssetGroupGlobalMappingBiEntities<T>
  ): CreateRequestBuilder<AssetGroupGlobalMappingBiEntities<T>, T> {
    return new CreateRequestBuilder<AssetGroupGlobalMappingBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetGroupGlobalMappingBiEntities` entity based on its keys.
   * @param sourceKey Key property. See {@link AssetGroupGlobalMappingBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `AssetGroupGlobalMappingBiEntities` entity based on its keys.
   */
  getByKey(
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<AssetGroupGlobalMappingBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<AssetGroupGlobalMappingBiEntities<T>, T>(
      this.entityApi,
      { SourceKey: sourceKey }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetGroupGlobalMappingBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetGroupGlobalMappingBiEntities`.
   */
  update(
    entity: AssetGroupGlobalMappingBiEntities<T>
  ): UpdateRequestBuilder<AssetGroupGlobalMappingBiEntities<T>, T> {
    return new UpdateRequestBuilder<AssetGroupGlobalMappingBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetGroupGlobalMappingBiEntities`.
   * @param sourceKey Key property. See {@link AssetGroupGlobalMappingBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `AssetGroupGlobalMappingBiEntities`.
   */
  delete(
    sourceKey: BigNumber
  ): DeleteRequestBuilder<AssetGroupGlobalMappingBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetGroupGlobalMappingBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetGroupGlobalMappingBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetGroupGlobalMappingBiEntities<T>
  ): DeleteRequestBuilder<AssetGroupGlobalMappingBiEntities<T>, T>;
  delete(
    sourceKeyOrEntity: any
  ): DeleteRequestBuilder<AssetGroupGlobalMappingBiEntities<T>, T> {
    return new DeleteRequestBuilder<AssetGroupGlobalMappingBiEntities<T>, T>(
      this.entityApi,
      sourceKeyOrEntity instanceof AssetGroupGlobalMappingBiEntities
        ? sourceKeyOrEntity
        : { SourceKey: sourceKeyOrEntity! }
    );
  }
}
