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
import { WarehouseAisles } from './WarehouseAisles';

/**
 * Request builder class for operations supported on the {@link WarehouseAisles} entity.
 */
export class WarehouseAislesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehouseAisles<T>, T> {
  /**
   * Returns a request builder for querying all `WarehouseAisles` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseAisles` entities.
   */
  getAll(): GetAllRequestBuilder<WarehouseAisles<T>, T> {
    return new GetAllRequestBuilder<WarehouseAisles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WarehouseAisles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseAisles`.
   */
  create(
    entity: WarehouseAisles<T>
  ): CreateRequestBuilder<WarehouseAisles<T>, T> {
    return new CreateRequestBuilder<WarehouseAisles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarehouseAisles` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseAisles.dataAreaId}.
   * @param warehouseId Key property. See {@link WarehouseAisles.warehouseId}.
   * @param aisleId Key property. See {@link WarehouseAisles.aisleId}.
   * @returns A request builder for creating requests to retrieve one `WarehouseAisles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    warehouseId: DeserializedType<T, 'Edm.String'>,
    aisleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WarehouseAisles<T>, T> {
    return new GetByKeyRequestBuilder<WarehouseAisles<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      WarehouseId: warehouseId,
      AisleId: aisleId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseAisles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseAisles`.
   */
  update(
    entity: WarehouseAisles<T>
  ): UpdateRequestBuilder<WarehouseAisles<T>, T> {
    return new UpdateRequestBuilder<WarehouseAisles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseAisles`.
   * @param dataAreaId Key property. See {@link WarehouseAisles.dataAreaId}.
   * @param warehouseId Key property. See {@link WarehouseAisles.warehouseId}.
   * @param aisleId Key property. See {@link WarehouseAisles.aisleId}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseAisles`.
   */
  delete(
    dataAreaId: string,
    warehouseId: string,
    aisleId: string
  ): DeleteRequestBuilder<WarehouseAisles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseAisles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseAisles` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseAisles<T>
  ): DeleteRequestBuilder<WarehouseAisles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    warehouseId?: string,
    aisleId?: string
  ): DeleteRequestBuilder<WarehouseAisles<T>, T> {
    return new DeleteRequestBuilder<WarehouseAisles<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarehouseAisles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WarehouseId: warehouseId!,
            AisleId: aisleId!
          }
    );
  }
}
