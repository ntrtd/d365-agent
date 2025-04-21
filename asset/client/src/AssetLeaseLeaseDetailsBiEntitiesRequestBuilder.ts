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
import { AssetLeaseLeaseDetailsBiEntities } from './AssetLeaseLeaseDetailsBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetLeaseLeaseDetailsBiEntities} entity.
 */
export class AssetLeaseLeaseDetailsBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetLeaseLeaseDetailsBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetLeaseLeaseDetailsBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLeaseLeaseDetailsBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetLeaseLeaseDetailsBiEntities<T>, T> {
    return new GetAllRequestBuilder<AssetLeaseLeaseDetailsBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetLeaseLeaseDetailsBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLeaseLeaseDetailsBiEntities`.
   */
  create(
    entity: AssetLeaseLeaseDetailsBiEntities<T>
  ): CreateRequestBuilder<AssetLeaseLeaseDetailsBiEntities<T>, T> {
    return new CreateRequestBuilder<AssetLeaseLeaseDetailsBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetLeaseLeaseDetailsBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetLeaseLeaseDetailsBiEntities.dataAreaId}.
   * @param leaseId Key property. See {@link AssetLeaseLeaseDetailsBiEntities.leaseId}.
   * @returns A request builder for creating requests to retrieve one `AssetLeaseLeaseDetailsBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaseId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetLeaseLeaseDetailsBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<AssetLeaseLeaseDetailsBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LeaseId: leaseId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLeaseLeaseDetailsBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLeaseLeaseDetailsBiEntities`.
   */
  update(
    entity: AssetLeaseLeaseDetailsBiEntities<T>
  ): UpdateRequestBuilder<AssetLeaseLeaseDetailsBiEntities<T>, T> {
    return new UpdateRequestBuilder<AssetLeaseLeaseDetailsBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseLeaseDetailsBiEntities`.
   * @param dataAreaId Key property. See {@link AssetLeaseLeaseDetailsBiEntities.dataAreaId}.
   * @param leaseId Key property. See {@link AssetLeaseLeaseDetailsBiEntities.leaseId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseLeaseDetailsBiEntities`.
   */
  delete(
    dataAreaId: string,
    leaseId: string
  ): DeleteRequestBuilder<AssetLeaseLeaseDetailsBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseLeaseDetailsBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseLeaseDetailsBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetLeaseLeaseDetailsBiEntities<T>
  ): DeleteRequestBuilder<AssetLeaseLeaseDetailsBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leaseId?: string
  ): DeleteRequestBuilder<AssetLeaseLeaseDetailsBiEntities<T>, T> {
    return new DeleteRequestBuilder<AssetLeaseLeaseDetailsBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetLeaseLeaseDetailsBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeaseId: leaseId!
          }
    );
  }
}
