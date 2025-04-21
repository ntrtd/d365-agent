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
import { AssetMaintenanceFunctionalLocationWorkers } from './AssetMaintenanceFunctionalLocationWorkers';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceFunctionalLocationWorkers} entity.
 */
export class AssetMaintenanceFunctionalLocationWorkersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceFunctionalLocationWorkers<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceFunctionalLocationWorkers` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceFunctionalLocationWorkers` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceFunctionalLocationWorkers<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceFunctionalLocationWorkers<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceFunctionalLocationWorkers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceFunctionalLocationWorkers`.
   */
  create(
    entity: AssetMaintenanceFunctionalLocationWorkers<T>
  ): CreateRequestBuilder<AssetMaintenanceFunctionalLocationWorkers<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceFunctionalLocationWorkers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceFunctionalLocationWorkers` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationWorkers.dataAreaId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceFunctionalLocationWorkers.functionalLocationId}.
   * @param workerPersonnelNumber Key property. See {@link AssetMaintenanceFunctionalLocationWorkers.workerPersonnelNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceFunctionalLocationWorkers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    functionalLocationId: DeserializedType<T, 'Edm.String'>,
    workerPersonnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceFunctionalLocationWorkers<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceFunctionalLocationWorkers<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      FunctionalLocationId: functionalLocationId,
      WorkerPersonnelNumber: workerPersonnelNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceFunctionalLocationWorkers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceFunctionalLocationWorkers`.
   */
  update(
    entity: AssetMaintenanceFunctionalLocationWorkers<T>
  ): UpdateRequestBuilder<AssetMaintenanceFunctionalLocationWorkers<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceFunctionalLocationWorkers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationWorkers`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationWorkers.dataAreaId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceFunctionalLocationWorkers.functionalLocationId}.
   * @param workerPersonnelNumber Key property. See {@link AssetMaintenanceFunctionalLocationWorkers.workerPersonnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationWorkers`.
   */
  delete(
    dataAreaId: string,
    functionalLocationId: string,
    workerPersonnelNumber: string
  ): DeleteRequestBuilder<AssetMaintenanceFunctionalLocationWorkers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationWorkers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationWorkers` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceFunctionalLocationWorkers<T>
  ): DeleteRequestBuilder<AssetMaintenanceFunctionalLocationWorkers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    functionalLocationId?: string,
    workerPersonnelNumber?: string
  ): DeleteRequestBuilder<AssetMaintenanceFunctionalLocationWorkers<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceFunctionalLocationWorkers<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceFunctionalLocationWorkers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FunctionalLocationId: functionalLocationId!,
            WorkerPersonnelNumber: workerPersonnelNumber!
          }
    );
  }
}
