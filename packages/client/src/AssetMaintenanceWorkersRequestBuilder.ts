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
import { AssetMaintenanceWorkers } from './AssetMaintenanceWorkers';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkers} entity.
 */
export class AssetMaintenanceWorkersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkers<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkers` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkers` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceWorkers<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceWorkers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkers`.
   */
  create(
    entity: AssetMaintenanceWorkers<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkers<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceWorkers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkers` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkers.dataAreaId}.
   * @param workerPersonnelNumber Key property. See {@link AssetMaintenanceWorkers.workerPersonnelNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workerPersonnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWorkers<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceWorkers<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WorkerPersonnelNumber: workerPersonnelNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkers`.
   */
  update(
    entity: AssetMaintenanceWorkers<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkers<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceWorkers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkers`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkers.dataAreaId}.
   * @param workerPersonnelNumber Key property. See {@link AssetMaintenanceWorkers.workerPersonnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkers`.
   */
  delete(
    dataAreaId: string,
    workerPersonnelNumber: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkers` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkers<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workerPersonnelNumber?: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkers<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceWorkers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWorkers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkerPersonnelNumber: workerPersonnelNumber!
          }
    );
  }
}
