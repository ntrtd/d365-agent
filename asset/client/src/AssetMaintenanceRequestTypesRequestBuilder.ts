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
import { AssetMaintenanceRequestTypes } from './AssetMaintenanceRequestTypes';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceRequestTypes} entity.
 */
export class AssetMaintenanceRequestTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceRequestTypes<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceRequestTypes` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceRequestTypes` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceRequestTypes<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceRequestTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceRequestTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceRequestTypes`.
   */
  create(
    entity: AssetMaintenanceRequestTypes<T>
  ): CreateRequestBuilder<AssetMaintenanceRequestTypes<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceRequestTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceRequestTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceRequestTypes.dataAreaId}.
   * @param requestTypeId Key property. See {@link AssetMaintenanceRequestTypes.requestTypeId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceRequestTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requestTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceRequestTypes<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceRequestTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RequestTypeId: requestTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceRequestTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceRequestTypes`.
   */
  update(
    entity: AssetMaintenanceRequestTypes<T>
  ): UpdateRequestBuilder<AssetMaintenanceRequestTypes<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceRequestTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceRequestTypes`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceRequestTypes.dataAreaId}.
   * @param requestTypeId Key property. See {@link AssetMaintenanceRequestTypes.requestTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceRequestTypes`.
   */
  delete(
    dataAreaId: string,
    requestTypeId: string
  ): DeleteRequestBuilder<AssetMaintenanceRequestTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceRequestTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceRequestTypes` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceRequestTypes<T>
  ): DeleteRequestBuilder<AssetMaintenanceRequestTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requestTypeId?: string
  ): DeleteRequestBuilder<AssetMaintenanceRequestTypes<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceRequestTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceRequestTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RequestTypeId: requestTypeId!
          }
    );
  }
}
