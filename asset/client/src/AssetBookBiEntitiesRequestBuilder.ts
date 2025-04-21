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
import { AssetBookBiEntities } from './AssetBookBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetBookBiEntities} entity.
 */
export class AssetBookBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetBookBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetBookBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetBookBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetBookBiEntities<T>, T> {
    return new GetAllRequestBuilder<AssetBookBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetBookBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetBookBiEntities`.
   */
  create(
    entity: AssetBookBiEntities<T>
  ): CreateRequestBuilder<AssetBookBiEntities<T>, T> {
    return new CreateRequestBuilder<AssetBookBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetBookBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetBookBiEntities.dataAreaId}.
   * @param assetId Key property. See {@link AssetBookBiEntities.assetId}.
   * @param bookId Key property. See {@link AssetBookBiEntities.bookId}.
   * @returns A request builder for creating requests to retrieve one `AssetBookBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    assetId: DeserializedType<T, 'Edm.String'>,
    bookId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetBookBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<AssetBookBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AssetId: assetId,
        BookId: bookId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetBookBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetBookBiEntities`.
   */
  update(
    entity: AssetBookBiEntities<T>
  ): UpdateRequestBuilder<AssetBookBiEntities<T>, T> {
    return new UpdateRequestBuilder<AssetBookBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetBookBiEntities`.
   * @param dataAreaId Key property. See {@link AssetBookBiEntities.dataAreaId}.
   * @param assetId Key property. See {@link AssetBookBiEntities.assetId}.
   * @param bookId Key property. See {@link AssetBookBiEntities.bookId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetBookBiEntities`.
   */
  delete(
    dataAreaId: string,
    assetId: string,
    bookId: string
  ): DeleteRequestBuilder<AssetBookBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetBookBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetBookBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetBookBiEntities<T>
  ): DeleteRequestBuilder<AssetBookBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    assetId?: string,
    bookId?: string
  ): DeleteRequestBuilder<AssetBookBiEntities<T>, T> {
    return new DeleteRequestBuilder<AssetBookBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetBookBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AssetId: assetId!,
            BookId: bookId!
          }
    );
  }
}
