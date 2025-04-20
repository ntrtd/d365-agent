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
import { AssetLeaseBookGroupRelationBiEntities } from './AssetLeaseBookGroupRelationBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetLeaseBookGroupRelationBiEntities} entity.
 */
export class AssetLeaseBookGroupRelationBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetLeaseBookGroupRelationBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetLeaseBookGroupRelationBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLeaseBookGroupRelationBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetLeaseBookGroupRelationBiEntities<T>, T> {
    return new GetAllRequestBuilder<
      AssetLeaseBookGroupRelationBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetLeaseBookGroupRelationBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLeaseBookGroupRelationBiEntities`.
   */
  create(
    entity: AssetLeaseBookGroupRelationBiEntities<T>
  ): CreateRequestBuilder<AssetLeaseBookGroupRelationBiEntities<T>, T> {
    return new CreateRequestBuilder<
      AssetLeaseBookGroupRelationBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetLeaseBookGroupRelationBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetLeaseBookGroupRelationBiEntities.dataAreaId}.
   * @param key Key property. See {@link AssetLeaseBookGroupRelationBiEntities.key}.
   * @returns A request builder for creating requests to retrieve one `AssetLeaseBookGroupRelationBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<AssetLeaseBookGroupRelationBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetLeaseBookGroupRelationBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Key: key
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLeaseBookGroupRelationBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLeaseBookGroupRelationBiEntities`.
   */
  update(
    entity: AssetLeaseBookGroupRelationBiEntities<T>
  ): UpdateRequestBuilder<AssetLeaseBookGroupRelationBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      AssetLeaseBookGroupRelationBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseBookGroupRelationBiEntities`.
   * @param dataAreaId Key property. See {@link AssetLeaseBookGroupRelationBiEntities.dataAreaId}.
   * @param key Key property. See {@link AssetLeaseBookGroupRelationBiEntities.key}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseBookGroupRelationBiEntities`.
   */
  delete(
    dataAreaId: string,
    key: number
  ): DeleteRequestBuilder<AssetLeaseBookGroupRelationBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseBookGroupRelationBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseBookGroupRelationBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetLeaseBookGroupRelationBiEntities<T>
  ): DeleteRequestBuilder<AssetLeaseBookGroupRelationBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    key?: number
  ): DeleteRequestBuilder<AssetLeaseBookGroupRelationBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      AssetLeaseBookGroupRelationBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetLeaseBookGroupRelationBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Key: key!
          }
    );
  }
}
