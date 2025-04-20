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
import { AssetMaintenanceJobTypes } from './AssetMaintenanceJobTypes';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceJobTypes} entity.
 */
export class AssetMaintenanceJobTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceJobTypes<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceJobTypes` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceJobTypes` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceJobTypes<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceJobTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceJobTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceJobTypes`.
   */
  create(
    entity: AssetMaintenanceJobTypes<T>
  ): CreateRequestBuilder<AssetMaintenanceJobTypes<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceJobTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceJobTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobTypes.dataAreaId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceJobTypes.jobTypeId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceJobTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    jobTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceJobTypes<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceJobTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JobTypeId: jobTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceJobTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceJobTypes`.
   */
  update(
    entity: AssetMaintenanceJobTypes<T>
  ): UpdateRequestBuilder<AssetMaintenanceJobTypes<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceJobTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobTypes`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobTypes.dataAreaId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceJobTypes.jobTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobTypes`.
   */
  delete(
    dataAreaId: string,
    jobTypeId: string
  ): DeleteRequestBuilder<AssetMaintenanceJobTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobTypes` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceJobTypes<T>
  ): DeleteRequestBuilder<AssetMaintenanceJobTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    jobTypeId?: string
  ): DeleteRequestBuilder<AssetMaintenanceJobTypes<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceJobTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceJobTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JobTypeId: jobTypeId!
          }
    );
  }
}
