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
import { AssetTableBiEntities } from './AssetTableBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetTableBiEntities} entity.
 */
export class AssetTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<AssetTableBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetTableBiEntities`.
   */
  create(
    entity: AssetTableBiEntities<T>
  ): CreateRequestBuilder<AssetTableBiEntities<T>, T> {
    return new CreateRequestBuilder<AssetTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetTableBiEntities.dataAreaId}.
   * @param assetGroup Key property. See {@link AssetTableBiEntities.assetGroup}.
   * @param assetId Key property. See {@link AssetTableBiEntities.assetId}.
   * @returns A request builder for creating requests to retrieve one `AssetTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    assetGroup: DeserializedType<T, 'Edm.String'>,
    assetId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<AssetTableBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AssetGroup: assetGroup,
        AssetId: assetId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetTableBiEntities`.
   */
  update(
    entity: AssetTableBiEntities<T>
  ): UpdateRequestBuilder<AssetTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<AssetTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetTableBiEntities`.
   * @param dataAreaId Key property. See {@link AssetTableBiEntities.dataAreaId}.
   * @param assetGroup Key property. See {@link AssetTableBiEntities.assetGroup}.
   * @param assetId Key property. See {@link AssetTableBiEntities.assetId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    assetGroup: string,
    assetId: string
  ): DeleteRequestBuilder<AssetTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetTableBiEntities<T>
  ): DeleteRequestBuilder<AssetTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    assetGroup?: string,
    assetId?: string
  ): DeleteRequestBuilder<AssetTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<AssetTableBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AssetGroup: assetGroup!,
            AssetId: assetId!
          }
    );
  }
}
