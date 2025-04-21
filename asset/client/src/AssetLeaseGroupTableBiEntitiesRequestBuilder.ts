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
import { AssetLeaseGroupTableBiEntities } from './AssetLeaseGroupTableBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetLeaseGroupTableBiEntities} entity.
 */
export class AssetLeaseGroupTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetLeaseGroupTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetLeaseGroupTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLeaseGroupTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetLeaseGroupTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<AssetLeaseGroupTableBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetLeaseGroupTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLeaseGroupTableBiEntities`.
   */
  create(
    entity: AssetLeaseGroupTableBiEntities<T>
  ): CreateRequestBuilder<AssetLeaseGroupTableBiEntities<T>, T> {
    return new CreateRequestBuilder<AssetLeaseGroupTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetLeaseGroupTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetLeaseGroupTableBiEntities.dataAreaId}.
   * @param leaseGroup Key property. See {@link AssetLeaseGroupTableBiEntities.leaseGroup}.
   * @returns A request builder for creating requests to retrieve one `AssetLeaseGroupTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaseGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetLeaseGroupTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<AssetLeaseGroupTableBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LeaseGroup: leaseGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLeaseGroupTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLeaseGroupTableBiEntities`.
   */
  update(
    entity: AssetLeaseGroupTableBiEntities<T>
  ): UpdateRequestBuilder<AssetLeaseGroupTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<AssetLeaseGroupTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseGroupTableBiEntities`.
   * @param dataAreaId Key property. See {@link AssetLeaseGroupTableBiEntities.dataAreaId}.
   * @param leaseGroup Key property. See {@link AssetLeaseGroupTableBiEntities.leaseGroup}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseGroupTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    leaseGroup: string
  ): DeleteRequestBuilder<AssetLeaseGroupTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseGroupTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseGroupTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetLeaseGroupTableBiEntities<T>
  ): DeleteRequestBuilder<AssetLeaseGroupTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leaseGroup?: string
  ): DeleteRequestBuilder<AssetLeaseGroupTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<AssetLeaseGroupTableBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetLeaseGroupTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeaseGroup: leaseGroup!
          }
    );
  }
}
