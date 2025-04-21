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
import { AssetMaintenanceParameters } from './AssetMaintenanceParameters';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceParameters} entity.
 */
export class AssetMaintenanceParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceParameters<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceParameters` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceParameters` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceParameters<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceParameters`.
   */
  create(
    entity: AssetMaintenanceParameters<T>
  ): CreateRequestBuilder<AssetMaintenanceParameters<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceParameters.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceParameters<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceParameters<T>, T>(
      this.entityApi,
      { dataAreaId: dataAreaId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceParameters`.
   */
  update(
    entity: AssetMaintenanceParameters<T>
  ): UpdateRequestBuilder<AssetMaintenanceParameters<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceParameters`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceParameters.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceParameters`.
   */
  delete(
    dataAreaId: string
  ): DeleteRequestBuilder<AssetMaintenanceParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceParameters` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceParameters<T>
  ): DeleteRequestBuilder<AssetMaintenanceParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any
  ): DeleteRequestBuilder<AssetMaintenanceParameters<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceParameters
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
