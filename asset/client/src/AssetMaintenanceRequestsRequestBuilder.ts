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
import { AssetMaintenanceRequests } from './AssetMaintenanceRequests';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceRequests} entity.
 */
export class AssetMaintenanceRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceRequests<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceRequests` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceRequests` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceRequests<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceRequests<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceRequests`.
   */
  create(
    entity: AssetMaintenanceRequests<T>
  ): CreateRequestBuilder<AssetMaintenanceRequests<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceRequests` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceRequests.dataAreaId}.
   * @param requestId Key property. See {@link AssetMaintenanceRequests.requestId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceRequests` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requestId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceRequests<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceRequests<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RequestId: requestId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceRequests`.
   */
  update(
    entity: AssetMaintenanceRequests<T>
  ): UpdateRequestBuilder<AssetMaintenanceRequests<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceRequests`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceRequests.dataAreaId}.
   * @param requestId Key property. See {@link AssetMaintenanceRequests.requestId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceRequests`.
   */
  delete(
    dataAreaId: string,
    requestId: string
  ): DeleteRequestBuilder<AssetMaintenanceRequests<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceRequests` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceRequests<T>
  ): DeleteRequestBuilder<AssetMaintenanceRequests<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requestId?: string
  ): DeleteRequestBuilder<AssetMaintenanceRequests<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceRequests<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceRequests
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RequestId: requestId!
          }
    );
  }
}
