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
import { WarehousesOnHand } from './WarehousesOnHand';

/**
 * Request builder class for operations supported on the {@link WarehousesOnHand} entity.
 */
export class WarehousesOnHandRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehousesOnHand<T>, T> {
  /**
   * Returns a request builder for querying all `WarehousesOnHand` entities.
   * @returns A request builder for creating requests to retrieve all `WarehousesOnHand` entities.
   */
  getAll(): GetAllRequestBuilder<WarehousesOnHand<T>, T> {
    return new GetAllRequestBuilder<WarehousesOnHand<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WarehousesOnHand` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehousesOnHand`.
   */
  create(
    entity: WarehousesOnHand<T>
  ): CreateRequestBuilder<WarehousesOnHand<T>, T> {
    return new CreateRequestBuilder<WarehousesOnHand<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarehousesOnHand` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehousesOnHand.dataAreaId}.
   * @param itemNumber Key property. See {@link WarehousesOnHand.itemNumber}.
   * @param productColorId Key property. See {@link WarehousesOnHand.productColorId}.
   * @param productConfigurationId Key property. See {@link WarehousesOnHand.productConfigurationId}.
   * @param productSizeId Key property. See {@link WarehousesOnHand.productSizeId}.
   * @param productStyleId Key property. See {@link WarehousesOnHand.productStyleId}.
   * @param inventorySiteId Key property. See {@link WarehousesOnHand.inventorySiteId}.
   * @param inventoryWarehouseId Key property. See {@link WarehousesOnHand.inventoryWarehouseId}.
   * @returns A request builder for creating requests to retrieve one `WarehousesOnHand` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    inventorySiteId: DeserializedType<T, 'Edm.String'>,
    inventoryWarehouseId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WarehousesOnHand<T>, T> {
    return new GetByKeyRequestBuilder<WarehousesOnHand<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ItemNumber: itemNumber,
      ProductColorId: productColorId,
      ProductConfigurationId: productConfigurationId,
      ProductSizeId: productSizeId,
      ProductStyleId: productStyleId,
      InventorySiteId: inventorySiteId,
      InventoryWarehouseId: inventoryWarehouseId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WarehousesOnHand`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehousesOnHand`.
   */
  update(
    entity: WarehousesOnHand<T>
  ): UpdateRequestBuilder<WarehousesOnHand<T>, T> {
    return new UpdateRequestBuilder<WarehousesOnHand<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehousesOnHand`.
   * @param dataAreaId Key property. See {@link WarehousesOnHand.dataAreaId}.
   * @param itemNumber Key property. See {@link WarehousesOnHand.itemNumber}.
   * @param productColorId Key property. See {@link WarehousesOnHand.productColorId}.
   * @param productConfigurationId Key property. See {@link WarehousesOnHand.productConfigurationId}.
   * @param productSizeId Key property. See {@link WarehousesOnHand.productSizeId}.
   * @param productStyleId Key property. See {@link WarehousesOnHand.productStyleId}.
   * @param inventorySiteId Key property. See {@link WarehousesOnHand.inventorySiteId}.
   * @param inventoryWarehouseId Key property. See {@link WarehousesOnHand.inventoryWarehouseId}.
   * @returns A request builder for creating requests that delete an entity of type `WarehousesOnHand`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    productColorId: string,
    productConfigurationId: string,
    productSizeId: string,
    productStyleId: string,
    inventorySiteId: string,
    inventoryWarehouseId: string
  ): DeleteRequestBuilder<WarehousesOnHand<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehousesOnHand`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehousesOnHand` by taking the entity as a parameter.
   */
  delete(
    entity: WarehousesOnHand<T>
  ): DeleteRequestBuilder<WarehousesOnHand<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    productColorId?: string,
    productConfigurationId?: string,
    productSizeId?: string,
    productStyleId?: string,
    inventorySiteId?: string,
    inventoryWarehouseId?: string
  ): DeleteRequestBuilder<WarehousesOnHand<T>, T> {
    return new DeleteRequestBuilder<WarehousesOnHand<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarehousesOnHand
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            ProductColorId: productColorId!,
            ProductConfigurationId: productConfigurationId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            InventorySiteId: inventorySiteId!,
            InventoryWarehouseId: inventoryWarehouseId!
          }
    );
  }
}
