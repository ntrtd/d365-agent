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
import { WarehouseInventoryStatusesOnHand } from './WarehouseInventoryStatusesOnHand';

/**
 * Request builder class for operations supported on the {@link WarehouseInventoryStatusesOnHand} entity.
 */
export class WarehouseInventoryStatusesOnHandRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehouseInventoryStatusesOnHand<T>, T> {
  /**
   * Returns a request builder for querying all `WarehouseInventoryStatusesOnHand` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseInventoryStatusesOnHand` entities.
   */
  getAll(): GetAllRequestBuilder<WarehouseInventoryStatusesOnHand<T>, T> {
    return new GetAllRequestBuilder<WarehouseInventoryStatusesOnHand<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WarehouseInventoryStatusesOnHand` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseInventoryStatusesOnHand`.
   */
  create(
    entity: WarehouseInventoryStatusesOnHand<T>
  ): CreateRequestBuilder<WarehouseInventoryStatusesOnHand<T>, T> {
    return new CreateRequestBuilder<WarehouseInventoryStatusesOnHand<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarehouseInventoryStatusesOnHand` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseInventoryStatusesOnHand.dataAreaId}.
   * @param itemNumber Key property. See {@link WarehouseInventoryStatusesOnHand.itemNumber}.
   * @param productColorId Key property. See {@link WarehouseInventoryStatusesOnHand.productColorId}.
   * @param productConfigurationId Key property. See {@link WarehouseInventoryStatusesOnHand.productConfigurationId}.
   * @param productSizeId Key property. See {@link WarehouseInventoryStatusesOnHand.productSizeId}.
   * @param productStyleId Key property. See {@link WarehouseInventoryStatusesOnHand.productStyleId}.
   * @param inventorySiteId Key property. See {@link WarehouseInventoryStatusesOnHand.inventorySiteId}.
   * @param inventoryWarehouseId Key property. See {@link WarehouseInventoryStatusesOnHand.inventoryWarehouseId}.
   * @param inventoryStatusId Key property. See {@link WarehouseInventoryStatusesOnHand.inventoryStatusId}.
   * @returns A request builder for creating requests to retrieve one `WarehouseInventoryStatusesOnHand` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    inventorySiteId: DeserializedType<T, 'Edm.String'>,
    inventoryWarehouseId: DeserializedType<T, 'Edm.String'>,
    inventoryStatusId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WarehouseInventoryStatusesOnHand<T>, T> {
    return new GetByKeyRequestBuilder<WarehouseInventoryStatusesOnHand<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber,
        ProductColorId: productColorId,
        ProductConfigurationId: productConfigurationId,
        ProductSizeId: productSizeId,
        ProductStyleId: productStyleId,
        InventorySiteId: inventorySiteId,
        InventoryWarehouseId: inventoryWarehouseId,
        InventoryStatusId: inventoryStatusId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseInventoryStatusesOnHand`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseInventoryStatusesOnHand`.
   */
  update(
    entity: WarehouseInventoryStatusesOnHand<T>
  ): UpdateRequestBuilder<WarehouseInventoryStatusesOnHand<T>, T> {
    return new UpdateRequestBuilder<WarehouseInventoryStatusesOnHand<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseInventoryStatusesOnHand`.
   * @param dataAreaId Key property. See {@link WarehouseInventoryStatusesOnHand.dataAreaId}.
   * @param itemNumber Key property. See {@link WarehouseInventoryStatusesOnHand.itemNumber}.
   * @param productColorId Key property. See {@link WarehouseInventoryStatusesOnHand.productColorId}.
   * @param productConfigurationId Key property. See {@link WarehouseInventoryStatusesOnHand.productConfigurationId}.
   * @param productSizeId Key property. See {@link WarehouseInventoryStatusesOnHand.productSizeId}.
   * @param productStyleId Key property. See {@link WarehouseInventoryStatusesOnHand.productStyleId}.
   * @param inventorySiteId Key property. See {@link WarehouseInventoryStatusesOnHand.inventorySiteId}.
   * @param inventoryWarehouseId Key property. See {@link WarehouseInventoryStatusesOnHand.inventoryWarehouseId}.
   * @param inventoryStatusId Key property. See {@link WarehouseInventoryStatusesOnHand.inventoryStatusId}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseInventoryStatusesOnHand`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    productColorId: string,
    productConfigurationId: string,
    productSizeId: string,
    productStyleId: string,
    inventorySiteId: string,
    inventoryWarehouseId: string,
    inventoryStatusId: string
  ): DeleteRequestBuilder<WarehouseInventoryStatusesOnHand<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseInventoryStatusesOnHand`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseInventoryStatusesOnHand` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseInventoryStatusesOnHand<T>
  ): DeleteRequestBuilder<WarehouseInventoryStatusesOnHand<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    productColorId?: string,
    productConfigurationId?: string,
    productSizeId?: string,
    productStyleId?: string,
    inventorySiteId?: string,
    inventoryWarehouseId?: string,
    inventoryStatusId?: string
  ): DeleteRequestBuilder<WarehouseInventoryStatusesOnHand<T>, T> {
    return new DeleteRequestBuilder<WarehouseInventoryStatusesOnHand<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarehouseInventoryStatusesOnHand
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            ProductColorId: productColorId!,
            ProductConfigurationId: productConfigurationId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            InventorySiteId: inventorySiteId!,
            InventoryWarehouseId: inventoryWarehouseId!,
            InventoryStatusId: inventoryStatusId!
          }
    );
  }
}
