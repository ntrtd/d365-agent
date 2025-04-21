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
import { AssetDepreciationProfileBiEntities } from './AssetDepreciationProfileBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetDepreciationProfileBiEntities} entity.
 */
export class AssetDepreciationProfileBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetDepreciationProfileBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetDepreciationProfileBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetDepreciationProfileBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetDepreciationProfileBiEntities<T>, T> {
    return new GetAllRequestBuilder<AssetDepreciationProfileBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetDepreciationProfileBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetDepreciationProfileBiEntities`.
   */
  create(
    entity: AssetDepreciationProfileBiEntities<T>
  ): CreateRequestBuilder<AssetDepreciationProfileBiEntities<T>, T> {
    return new CreateRequestBuilder<AssetDepreciationProfileBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetDepreciationProfileBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetDepreciationProfileBiEntities.dataAreaId}.
   * @param profile Key property. See {@link AssetDepreciationProfileBiEntities.profile}.
   * @returns A request builder for creating requests to retrieve one `AssetDepreciationProfileBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    profile: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetDepreciationProfileBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<AssetDepreciationProfileBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Profile: profile
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetDepreciationProfileBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetDepreciationProfileBiEntities`.
   */
  update(
    entity: AssetDepreciationProfileBiEntities<T>
  ): UpdateRequestBuilder<AssetDepreciationProfileBiEntities<T>, T> {
    return new UpdateRequestBuilder<AssetDepreciationProfileBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetDepreciationProfileBiEntities`.
   * @param dataAreaId Key property. See {@link AssetDepreciationProfileBiEntities.dataAreaId}.
   * @param profile Key property. See {@link AssetDepreciationProfileBiEntities.profile}.
   * @returns A request builder for creating requests that delete an entity of type `AssetDepreciationProfileBiEntities`.
   */
  delete(
    dataAreaId: string,
    profile: string
  ): DeleteRequestBuilder<AssetDepreciationProfileBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetDepreciationProfileBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetDepreciationProfileBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetDepreciationProfileBiEntities<T>
  ): DeleteRequestBuilder<AssetDepreciationProfileBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    profile?: string
  ): DeleteRequestBuilder<AssetDepreciationProfileBiEntities<T>, T> {
    return new DeleteRequestBuilder<AssetDepreciationProfileBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetDepreciationProfileBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Profile: profile!
          }
    );
  }
}
