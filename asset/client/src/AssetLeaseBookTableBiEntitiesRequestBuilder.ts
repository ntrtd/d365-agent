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
import { AssetLeaseBookTableBiEntities } from './AssetLeaseBookTableBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetLeaseBookTableBiEntities} entity.
 */
export class AssetLeaseBookTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetLeaseBookTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetLeaseBookTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLeaseBookTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetLeaseBookTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<AssetLeaseBookTableBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetLeaseBookTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLeaseBookTableBiEntities`.
   */
  create(
    entity: AssetLeaseBookTableBiEntities<T>
  ): CreateRequestBuilder<AssetLeaseBookTableBiEntities<T>, T> {
    return new CreateRequestBuilder<AssetLeaseBookTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetLeaseBookTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetLeaseBookTableBiEntities.dataAreaId}.
   * @param bookType Key property. See {@link AssetLeaseBookTableBiEntities.bookType}.
   * @returns A request builder for creating requests to retrieve one `AssetLeaseBookTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    bookType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetLeaseBookTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<AssetLeaseBookTableBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BookType: bookType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLeaseBookTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLeaseBookTableBiEntities`.
   */
  update(
    entity: AssetLeaseBookTableBiEntities<T>
  ): UpdateRequestBuilder<AssetLeaseBookTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<AssetLeaseBookTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseBookTableBiEntities`.
   * @param dataAreaId Key property. See {@link AssetLeaseBookTableBiEntities.dataAreaId}.
   * @param bookType Key property. See {@link AssetLeaseBookTableBiEntities.bookType}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseBookTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    bookType: string
  ): DeleteRequestBuilder<AssetLeaseBookTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseBookTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseBookTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetLeaseBookTableBiEntities<T>
  ): DeleteRequestBuilder<AssetLeaseBookTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    bookType?: string
  ): DeleteRequestBuilder<AssetLeaseBookTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<AssetLeaseBookTableBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetLeaseBookTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BookType: bookType!
          }
    );
  }
}
