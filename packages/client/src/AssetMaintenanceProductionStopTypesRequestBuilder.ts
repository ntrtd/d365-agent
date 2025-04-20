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
import { AssetMaintenanceProductionStopTypes } from './AssetMaintenanceProductionStopTypes';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceProductionStopTypes} entity.
 */
export class AssetMaintenanceProductionStopTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceProductionStopTypes<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceProductionStopTypes` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceProductionStopTypes` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceProductionStopTypes<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceProductionStopTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceProductionStopTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceProductionStopTypes`.
   */
  create(
    entity: AssetMaintenanceProductionStopTypes<T>
  ): CreateRequestBuilder<AssetMaintenanceProductionStopTypes<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceProductionStopTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceProductionStopTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceProductionStopTypes.dataAreaId}.
   * @param productionStopTypeId Key property. See {@link AssetMaintenanceProductionStopTypes.productionStopTypeId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceProductionStopTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productionStopTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceProductionStopTypes<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceProductionStopTypes<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ProductionStopTypeId: productionStopTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceProductionStopTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceProductionStopTypes`.
   */
  update(
    entity: AssetMaintenanceProductionStopTypes<T>
  ): UpdateRequestBuilder<AssetMaintenanceProductionStopTypes<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceProductionStopTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceProductionStopTypes`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceProductionStopTypes.dataAreaId}.
   * @param productionStopTypeId Key property. See {@link AssetMaintenanceProductionStopTypes.productionStopTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceProductionStopTypes`.
   */
  delete(
    dataAreaId: string,
    productionStopTypeId: string
  ): DeleteRequestBuilder<AssetMaintenanceProductionStopTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceProductionStopTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceProductionStopTypes` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceProductionStopTypes<T>
  ): DeleteRequestBuilder<AssetMaintenanceProductionStopTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productionStopTypeId?: string
  ): DeleteRequestBuilder<AssetMaintenanceProductionStopTypes<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceProductionStopTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceProductionStopTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductionStopTypeId: productionStopTypeId!
          }
    );
  }
}
