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
import { AssetMaintenanceRequestsV2 } from './AssetMaintenanceRequestsV2';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceRequestsV2} entity.
 */
export class AssetMaintenanceRequestsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceRequestsV2<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceRequestsV2` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceRequestsV2` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceRequestsV2<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceRequestsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceRequestsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceRequestsV2`.
   */
  create(
    entity: AssetMaintenanceRequestsV2<T>
  ): CreateRequestBuilder<AssetMaintenanceRequestsV2<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceRequestsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceRequestsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceRequestsV2.dataAreaId}.
   * @param requestId Key property. See {@link AssetMaintenanceRequestsV2.requestId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceRequestsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requestId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceRequestsV2<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceRequestsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RequestId: requestId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceRequestsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceRequestsV2`.
   */
  update(
    entity: AssetMaintenanceRequestsV2<T>
  ): UpdateRequestBuilder<AssetMaintenanceRequestsV2<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceRequestsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceRequestsV2`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceRequestsV2.dataAreaId}.
   * @param requestId Key property. See {@link AssetMaintenanceRequestsV2.requestId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceRequestsV2`.
   */
  delete(
    dataAreaId: string,
    requestId: string
  ): DeleteRequestBuilder<AssetMaintenanceRequestsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceRequestsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceRequestsV2` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceRequestsV2<T>
  ): DeleteRequestBuilder<AssetMaintenanceRequestsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requestId?: string
  ): DeleteRequestBuilder<AssetMaintenanceRequestsV2<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceRequestsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceRequestsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RequestId: requestId!
          }
    );
  }
}
