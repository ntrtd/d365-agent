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
import { AssetMaintenanceWorkOrderPriorities } from './AssetMaintenanceWorkOrderPriorities';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderPriorities} entity.
 */
export class AssetMaintenanceWorkOrderPrioritiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderPriorities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderPriorities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderPriorities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceWorkOrderPriorities<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceWorkOrderPriorities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderPriorities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderPriorities`.
   */
  create(
    entity: AssetMaintenanceWorkOrderPriorities<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkOrderPriorities<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceWorkOrderPriorities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderPriorities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderPriorities.dataAreaId}.
   * @param serviceLevel Key property. See {@link AssetMaintenanceWorkOrderPriorities.serviceLevel}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderPriorities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    serviceLevel: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWorkOrderPriorities<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceWorkOrderPriorities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ServiceLevel: serviceLevel
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderPriorities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderPriorities`.
   */
  update(
    entity: AssetMaintenanceWorkOrderPriorities<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkOrderPriorities<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceWorkOrderPriorities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderPriorities`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderPriorities.dataAreaId}.
   * @param serviceLevel Key property. See {@link AssetMaintenanceWorkOrderPriorities.serviceLevel}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderPriorities`.
   */
  delete(
    dataAreaId: string,
    serviceLevel: number
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderPriorities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderPriorities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderPriorities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderPriorities<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderPriorities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    serviceLevel?: number
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderPriorities<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceWorkOrderPriorities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWorkOrderPriorities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ServiceLevel: serviceLevel!
          }
    );
  }
}
