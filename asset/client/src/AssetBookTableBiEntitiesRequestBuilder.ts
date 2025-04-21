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
import { AssetBookTableBiEntities } from './AssetBookTableBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetBookTableBiEntities} entity.
 */
export class AssetBookTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetBookTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetBookTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetBookTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetBookTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<AssetBookTableBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetBookTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetBookTableBiEntities`.
   */
  create(
    entity: AssetBookTableBiEntities<T>
  ): CreateRequestBuilder<AssetBookTableBiEntities<T>, T> {
    return new CreateRequestBuilder<AssetBookTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetBookTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetBookTableBiEntities.dataAreaId}.
   * @param bookId Key property. See {@link AssetBookTableBiEntities.bookId}.
   * @returns A request builder for creating requests to retrieve one `AssetBookTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    bookId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetBookTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<AssetBookTableBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BookId: bookId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetBookTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetBookTableBiEntities`.
   */
  update(
    entity: AssetBookTableBiEntities<T>
  ): UpdateRequestBuilder<AssetBookTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<AssetBookTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetBookTableBiEntities`.
   * @param dataAreaId Key property. See {@link AssetBookTableBiEntities.dataAreaId}.
   * @param bookId Key property. See {@link AssetBookTableBiEntities.bookId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetBookTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    bookId: string
  ): DeleteRequestBuilder<AssetBookTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetBookTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetBookTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetBookTableBiEntities<T>
  ): DeleteRequestBuilder<AssetBookTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    bookId?: string
  ): DeleteRequestBuilder<AssetBookTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<AssetBookTableBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetBookTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BookId: bookId!
          }
    );
  }
}
