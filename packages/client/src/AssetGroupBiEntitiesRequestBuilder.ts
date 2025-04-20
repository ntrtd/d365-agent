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
import { AssetGroupBiEntities } from './AssetGroupBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetGroupBiEntities} entity.
 */
export class AssetGroupBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetGroupBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetGroupBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetGroupBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetGroupBiEntities<T>, T> {
    return new GetAllRequestBuilder<AssetGroupBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetGroupBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetGroupBiEntities`.
   */
  create(
    entity: AssetGroupBiEntities<T>
  ): CreateRequestBuilder<AssetGroupBiEntities<T>, T> {
    return new CreateRequestBuilder<AssetGroupBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetGroupBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetGroupBiEntities.dataAreaId}.
   * @param groupId Key property. See {@link AssetGroupBiEntities.groupId}.
   * @returns A request builder for creating requests to retrieve one `AssetGroupBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetGroupBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<AssetGroupBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetGroupBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetGroupBiEntities`.
   */
  update(
    entity: AssetGroupBiEntities<T>
  ): UpdateRequestBuilder<AssetGroupBiEntities<T>, T> {
    return new UpdateRequestBuilder<AssetGroupBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetGroupBiEntities`.
   * @param dataAreaId Key property. See {@link AssetGroupBiEntities.dataAreaId}.
   * @param groupId Key property. See {@link AssetGroupBiEntities.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetGroupBiEntities`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<AssetGroupBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetGroupBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetGroupBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetGroupBiEntities<T>
  ): DeleteRequestBuilder<AssetGroupBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<AssetGroupBiEntities<T>, T> {
    return new DeleteRequestBuilder<AssetGroupBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetGroupBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
