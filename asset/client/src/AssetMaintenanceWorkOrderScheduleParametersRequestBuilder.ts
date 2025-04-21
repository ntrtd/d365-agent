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
import { AssetMaintenanceWorkOrderScheduleParameters } from './AssetMaintenanceWorkOrderScheduleParameters';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceWorkOrderScheduleParameters} entity.
 */
export class AssetMaintenanceWorkOrderScheduleParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceWorkOrderScheduleParameters<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceWorkOrderScheduleParameters` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceWorkOrderScheduleParameters` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceWorkOrderScheduleParameters<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceWorkOrderScheduleParameters<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceWorkOrderScheduleParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceWorkOrderScheduleParameters`.
   */
  create(
    entity: AssetMaintenanceWorkOrderScheduleParameters<T>
  ): CreateRequestBuilder<AssetMaintenanceWorkOrderScheduleParameters<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceWorkOrderScheduleParameters<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceWorkOrderScheduleParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderScheduleParameters.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceWorkOrderScheduleParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceWorkOrderScheduleParameters<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceWorkOrderScheduleParameters<T>,
      T
    >(this.entityApi, { dataAreaId: dataAreaId });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceWorkOrderScheduleParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceWorkOrderScheduleParameters`.
   */
  update(
    entity: AssetMaintenanceWorkOrderScheduleParameters<T>
  ): UpdateRequestBuilder<AssetMaintenanceWorkOrderScheduleParameters<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceWorkOrderScheduleParameters<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderScheduleParameters`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceWorkOrderScheduleParameters.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderScheduleParameters`.
   */
  delete(
    dataAreaId: string
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderScheduleParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceWorkOrderScheduleParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceWorkOrderScheduleParameters` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceWorkOrderScheduleParameters<T>
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderScheduleParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any
  ): DeleteRequestBuilder<AssetMaintenanceWorkOrderScheduleParameters<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceWorkOrderScheduleParameters<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceWorkOrderScheduleParameters
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
