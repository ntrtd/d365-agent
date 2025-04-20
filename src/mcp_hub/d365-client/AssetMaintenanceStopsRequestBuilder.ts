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
import { AssetMaintenanceStops } from './AssetMaintenanceStops';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceStops} entity.
 */
export class AssetMaintenanceStopsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceStops<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceStops` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceStops` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceStops<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceStops<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceStops` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceStops`.
   */
  create(
    entity: AssetMaintenanceStops<T>
  ): CreateRequestBuilder<AssetMaintenanceStops<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceStops<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceStops` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceStops.dataAreaId}.
   * @param maintenanceStopId Key property. See {@link AssetMaintenanceStops.maintenanceStopId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceStops` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceStopId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceStops<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceStops<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MaintenanceStopId: maintenanceStopId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceStops`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceStops`.
   */
  update(
    entity: AssetMaintenanceStops<T>
  ): UpdateRequestBuilder<AssetMaintenanceStops<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceStops<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceStops`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceStops.dataAreaId}.
   * @param maintenanceStopId Key property. See {@link AssetMaintenanceStops.maintenanceStopId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceStops`.
   */
  delete(
    dataAreaId: string,
    maintenanceStopId: string
  ): DeleteRequestBuilder<AssetMaintenanceStops<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceStops`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceStops` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceStops<T>
  ): DeleteRequestBuilder<AssetMaintenanceStops<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceStopId?: string
  ): DeleteRequestBuilder<AssetMaintenanceStops<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceStops<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceStops
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceStopId: maintenanceStopId!
          }
    );
  }
}
