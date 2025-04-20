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
import { AssetMaintenanceAssetCounters } from './AssetMaintenanceAssetCounters';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetCounters} entity.
 */
export class AssetMaintenanceAssetCountersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetCounters<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetCounters` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetCounters` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceAssetCounters<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceAssetCounters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetCounters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetCounters`.
   */
  create(
    entity: AssetMaintenanceAssetCounters<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetCounters<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceAssetCounters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetCounters` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetCounters.dataAreaId}.
   * @param counterId Key property. See {@link AssetMaintenanceAssetCounters.counterId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetCounters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    counterId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetCounters<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceAssetCounters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CounterId: counterId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetCounters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetCounters`.
   */
  update(
    entity: AssetMaintenanceAssetCounters<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetCounters<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceAssetCounters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetCounters`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetCounters.dataAreaId}.
   * @param counterId Key property. See {@link AssetMaintenanceAssetCounters.counterId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetCounters`.
   */
  delete(
    dataAreaId: string,
    counterId: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetCounters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetCounters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetCounters` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetCounters<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetCounters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    counterId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetCounters<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceAssetCounters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetCounters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CounterId: counterId!
          }
    );
  }
}
