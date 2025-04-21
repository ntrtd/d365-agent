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
import { Warehouses } from './Warehouses';

/**
 * Request builder class for operations supported on the {@link Warehouses} entity.
 */
export class WarehousesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Warehouses<T>, T> {
  /**
   * Returns a request builder for querying all `Warehouses` entities.
   * @returns A request builder for creating requests to retrieve all `Warehouses` entities.
   */
  getAll(): GetAllRequestBuilder<Warehouses<T>, T> {
    return new GetAllRequestBuilder<Warehouses<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Warehouses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Warehouses`.
   */
  create(entity: Warehouses<T>): CreateRequestBuilder<Warehouses<T>, T> {
    return new CreateRequestBuilder<Warehouses<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Warehouses` entity based on its keys.
   * @param dataAreaId Key property. See {@link Warehouses.dataAreaId}.
   * @param warehouseId Key property. See {@link Warehouses.warehouseId}.
   * @returns A request builder for creating requests to retrieve one `Warehouses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    warehouseId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Warehouses<T>, T> {
    return new GetByKeyRequestBuilder<Warehouses<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      WarehouseId: warehouseId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Warehouses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Warehouses`.
   */
  update(entity: Warehouses<T>): UpdateRequestBuilder<Warehouses<T>, T> {
    return new UpdateRequestBuilder<Warehouses<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Warehouses`.
   * @param dataAreaId Key property. See {@link Warehouses.dataAreaId}.
   * @param warehouseId Key property. See {@link Warehouses.warehouseId}.
   * @returns A request builder for creating requests that delete an entity of type `Warehouses`.
   */
  delete(
    dataAreaId: string,
    warehouseId: string
  ): DeleteRequestBuilder<Warehouses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Warehouses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Warehouses` by taking the entity as a parameter.
   */
  delete(entity: Warehouses<T>): DeleteRequestBuilder<Warehouses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    warehouseId?: string
  ): DeleteRequestBuilder<Warehouses<T>, T> {
    return new DeleteRequestBuilder<Warehouses<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Warehouses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WarehouseId: warehouseId!
          }
    );
  }
}
