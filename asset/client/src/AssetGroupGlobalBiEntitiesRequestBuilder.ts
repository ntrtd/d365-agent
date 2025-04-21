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
import { AssetGroupGlobalBiEntities } from './AssetGroupGlobalBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetGroupGlobalBiEntities} entity.
 */
export class AssetGroupGlobalBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetGroupGlobalBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetGroupGlobalBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetGroupGlobalBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetGroupGlobalBiEntities<T>, T> {
    return new GetAllRequestBuilder<AssetGroupGlobalBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetGroupGlobalBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetGroupGlobalBiEntities`.
   */
  create(
    entity: AssetGroupGlobalBiEntities<T>
  ): CreateRequestBuilder<AssetGroupGlobalBiEntities<T>, T> {
    return new CreateRequestBuilder<AssetGroupGlobalBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetGroupGlobalBiEntities` entity based on its keys.
   * @param groupId Key property. See {@link AssetGroupGlobalBiEntities.groupId}.
   * @returns A request builder for creating requests to retrieve one `AssetGroupGlobalBiEntities` entity based on its keys.
   */
  getByKey(
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetGroupGlobalBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<AssetGroupGlobalBiEntities<T>, T>(
      this.entityApi,
      { GroupId: groupId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetGroupGlobalBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetGroupGlobalBiEntities`.
   */
  update(
    entity: AssetGroupGlobalBiEntities<T>
  ): UpdateRequestBuilder<AssetGroupGlobalBiEntities<T>, T> {
    return new UpdateRequestBuilder<AssetGroupGlobalBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetGroupGlobalBiEntities`.
   * @param groupId Key property. See {@link AssetGroupGlobalBiEntities.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetGroupGlobalBiEntities`.
   */
  delete(
    groupId: string
  ): DeleteRequestBuilder<AssetGroupGlobalBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetGroupGlobalBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetGroupGlobalBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetGroupGlobalBiEntities<T>
  ): DeleteRequestBuilder<AssetGroupGlobalBiEntities<T>, T>;
  delete(
    groupIdOrEntity: any
  ): DeleteRequestBuilder<AssetGroupGlobalBiEntities<T>, T> {
    return new DeleteRequestBuilder<AssetGroupGlobalBiEntities<T>, T>(
      this.entityApi,
      groupIdOrEntity instanceof AssetGroupGlobalBiEntities
        ? groupIdOrEntity
        : { GroupId: groupIdOrEntity! }
    );
  }
}
