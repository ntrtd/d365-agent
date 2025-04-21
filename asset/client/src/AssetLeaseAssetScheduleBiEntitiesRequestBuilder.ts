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
import { AssetLeaseAssetScheduleBiEntities } from './AssetLeaseAssetScheduleBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetLeaseAssetScheduleBiEntities} entity.
 */
export class AssetLeaseAssetScheduleBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetLeaseAssetScheduleBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetLeaseAssetScheduleBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLeaseAssetScheduleBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetLeaseAssetScheduleBiEntities<T>, T> {
    return new GetAllRequestBuilder<AssetLeaseAssetScheduleBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetLeaseAssetScheduleBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLeaseAssetScheduleBiEntities`.
   */
  create(
    entity: AssetLeaseAssetScheduleBiEntities<T>
  ): CreateRequestBuilder<AssetLeaseAssetScheduleBiEntities<T>, T> {
    return new CreateRequestBuilder<AssetLeaseAssetScheduleBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetLeaseAssetScheduleBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetLeaseAssetScheduleBiEntities.dataAreaId}.
   * @param leaseId Key property. See {@link AssetLeaseAssetScheduleBiEntities.leaseId}.
   * @returns A request builder for creating requests to retrieve one `AssetLeaseAssetScheduleBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaseId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetLeaseAssetScheduleBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<AssetLeaseAssetScheduleBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LeaseId: leaseId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLeaseAssetScheduleBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLeaseAssetScheduleBiEntities`.
   */
  update(
    entity: AssetLeaseAssetScheduleBiEntities<T>
  ): UpdateRequestBuilder<AssetLeaseAssetScheduleBiEntities<T>, T> {
    return new UpdateRequestBuilder<AssetLeaseAssetScheduleBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseAssetScheduleBiEntities`.
   * @param dataAreaId Key property. See {@link AssetLeaseAssetScheduleBiEntities.dataAreaId}.
   * @param leaseId Key property. See {@link AssetLeaseAssetScheduleBiEntities.leaseId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseAssetScheduleBiEntities`.
   */
  delete(
    dataAreaId: string,
    leaseId: string
  ): DeleteRequestBuilder<AssetLeaseAssetScheduleBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseAssetScheduleBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseAssetScheduleBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetLeaseAssetScheduleBiEntities<T>
  ): DeleteRequestBuilder<AssetLeaseAssetScheduleBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leaseId?: string
  ): DeleteRequestBuilder<AssetLeaseAssetScheduleBiEntities<T>, T> {
    return new DeleteRequestBuilder<AssetLeaseAssetScheduleBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetLeaseAssetScheduleBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeaseId: leaseId!
          }
    );
  }
}
