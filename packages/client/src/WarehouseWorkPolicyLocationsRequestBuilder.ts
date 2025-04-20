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
import { WarehouseWorkPolicyLocations } from './WarehouseWorkPolicyLocations';

/**
 * Request builder class for operations supported on the {@link WarehouseWorkPolicyLocations} entity.
 */
export class WarehouseWorkPolicyLocationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehouseWorkPolicyLocations<T>, T> {
  /**
   * Returns a request builder for querying all `WarehouseWorkPolicyLocations` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseWorkPolicyLocations` entities.
   */
  getAll(): GetAllRequestBuilder<WarehouseWorkPolicyLocations<T>, T> {
    return new GetAllRequestBuilder<WarehouseWorkPolicyLocations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WarehouseWorkPolicyLocations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseWorkPolicyLocations`.
   */
  create(
    entity: WarehouseWorkPolicyLocations<T>
  ): CreateRequestBuilder<WarehouseWorkPolicyLocations<T>, T> {
    return new CreateRequestBuilder<WarehouseWorkPolicyLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarehouseWorkPolicyLocations` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseWorkPolicyLocations.dataAreaId}.
   * @param warehouseId Key property. See {@link WarehouseWorkPolicyLocations.warehouseId}.
   * @param warehouseLocationId Key property. See {@link WarehouseWorkPolicyLocations.warehouseLocationId}.
   * @returns A request builder for creating requests to retrieve one `WarehouseWorkPolicyLocations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    warehouseId: DeserializedType<T, 'Edm.String'>,
    warehouseLocationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WarehouseWorkPolicyLocations<T>, T> {
    return new GetByKeyRequestBuilder<WarehouseWorkPolicyLocations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WarehouseId: warehouseId,
        WarehouseLocationId: warehouseLocationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseWorkPolicyLocations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseWorkPolicyLocations`.
   */
  update(
    entity: WarehouseWorkPolicyLocations<T>
  ): UpdateRequestBuilder<WarehouseWorkPolicyLocations<T>, T> {
    return new UpdateRequestBuilder<WarehouseWorkPolicyLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseWorkPolicyLocations`.
   * @param dataAreaId Key property. See {@link WarehouseWorkPolicyLocations.dataAreaId}.
   * @param warehouseId Key property. See {@link WarehouseWorkPolicyLocations.warehouseId}.
   * @param warehouseLocationId Key property. See {@link WarehouseWorkPolicyLocations.warehouseLocationId}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseWorkPolicyLocations`.
   */
  delete(
    dataAreaId: string,
    warehouseId: string,
    warehouseLocationId: string
  ): DeleteRequestBuilder<WarehouseWorkPolicyLocations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseWorkPolicyLocations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseWorkPolicyLocations` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseWorkPolicyLocations<T>
  ): DeleteRequestBuilder<WarehouseWorkPolicyLocations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    warehouseId?: string,
    warehouseLocationId?: string
  ): DeleteRequestBuilder<WarehouseWorkPolicyLocations<T>, T> {
    return new DeleteRequestBuilder<WarehouseWorkPolicyLocations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarehouseWorkPolicyLocations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WarehouseId: warehouseId!,
            WarehouseLocationId: warehouseLocationId!
          }
    );
  }
}
