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
import { WarehouseInventoryStatusesOnHandV2 } from './WarehouseInventoryStatusesOnHandV2';

/**
 * Request builder class for operations supported on the {@link WarehouseInventoryStatusesOnHandV2} entity.
 */
export class WarehouseInventoryStatusesOnHandV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehouseInventoryStatusesOnHandV2<T>, T> {
  /**
   * Returns a request builder for querying all `WarehouseInventoryStatusesOnHandV2` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseInventoryStatusesOnHandV2` entities.
   */
  getAll(): GetAllRequestBuilder<WarehouseInventoryStatusesOnHandV2<T>, T> {
    return new GetAllRequestBuilder<WarehouseInventoryStatusesOnHandV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WarehouseInventoryStatusesOnHandV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseInventoryStatusesOnHandV2`.
   */
  create(
    entity: WarehouseInventoryStatusesOnHandV2<T>
  ): CreateRequestBuilder<WarehouseInventoryStatusesOnHandV2<T>, T> {
    return new CreateRequestBuilder<WarehouseInventoryStatusesOnHandV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarehouseInventoryStatusesOnHandV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseInventoryStatusesOnHandV2.dataAreaId}.
   * @param itemNumber Key property. See {@link WarehouseInventoryStatusesOnHandV2.itemNumber}.
   * @param productColorId Key property. See {@link WarehouseInventoryStatusesOnHandV2.productColorId}.
   * @param productConfigurationId Key property. See {@link WarehouseInventoryStatusesOnHandV2.productConfigurationId}.
   * @param productSizeId Key property. See {@link WarehouseInventoryStatusesOnHandV2.productSizeId}.
   * @param productStyleId Key property. See {@link WarehouseInventoryStatusesOnHandV2.productStyleId}.
   * @param productVersionId Key property. See {@link WarehouseInventoryStatusesOnHandV2.productVersionId}.
   * @param inventorySiteId Key property. See {@link WarehouseInventoryStatusesOnHandV2.inventorySiteId}.
   * @param inventoryWarehouseId Key property. See {@link WarehouseInventoryStatusesOnHandV2.inventoryWarehouseId}.
   * @param inventoryStatusId Key property. See {@link WarehouseInventoryStatusesOnHandV2.inventoryStatusId}.
   * @returns A request builder for creating requests to retrieve one `WarehouseInventoryStatusesOnHandV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>,
    inventorySiteId: DeserializedType<T, 'Edm.String'>,
    inventoryWarehouseId: DeserializedType<T, 'Edm.String'>,
    inventoryStatusId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WarehouseInventoryStatusesOnHandV2<T>, T> {
    return new GetByKeyRequestBuilder<WarehouseInventoryStatusesOnHandV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber,
        ProductColorId: productColorId,
        ProductConfigurationId: productConfigurationId,
        ProductSizeId: productSizeId,
        ProductStyleId: productStyleId,
        ProductVersionId: productVersionId,
        InventorySiteId: inventorySiteId,
        InventoryWarehouseId: inventoryWarehouseId,
        InventoryStatusId: inventoryStatusId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseInventoryStatusesOnHandV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseInventoryStatusesOnHandV2`.
   */
  update(
    entity: WarehouseInventoryStatusesOnHandV2<T>
  ): UpdateRequestBuilder<WarehouseInventoryStatusesOnHandV2<T>, T> {
    return new UpdateRequestBuilder<WarehouseInventoryStatusesOnHandV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseInventoryStatusesOnHandV2`.
   * @param dataAreaId Key property. See {@link WarehouseInventoryStatusesOnHandV2.dataAreaId}.
   * @param itemNumber Key property. See {@link WarehouseInventoryStatusesOnHandV2.itemNumber}.
   * @param productColorId Key property. See {@link WarehouseInventoryStatusesOnHandV2.productColorId}.
   * @param productConfigurationId Key property. See {@link WarehouseInventoryStatusesOnHandV2.productConfigurationId}.
   * @param productSizeId Key property. See {@link WarehouseInventoryStatusesOnHandV2.productSizeId}.
   * @param productStyleId Key property. See {@link WarehouseInventoryStatusesOnHandV2.productStyleId}.
   * @param productVersionId Key property. See {@link WarehouseInventoryStatusesOnHandV2.productVersionId}.
   * @param inventorySiteId Key property. See {@link WarehouseInventoryStatusesOnHandV2.inventorySiteId}.
   * @param inventoryWarehouseId Key property. See {@link WarehouseInventoryStatusesOnHandV2.inventoryWarehouseId}.
   * @param inventoryStatusId Key property. See {@link WarehouseInventoryStatusesOnHandV2.inventoryStatusId}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseInventoryStatusesOnHandV2`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    productColorId: string,
    productConfigurationId: string,
    productSizeId: string,
    productStyleId: string,
    productVersionId: string,
    inventorySiteId: string,
    inventoryWarehouseId: string,
    inventoryStatusId: string
  ): DeleteRequestBuilder<WarehouseInventoryStatusesOnHandV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseInventoryStatusesOnHandV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseInventoryStatusesOnHandV2` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseInventoryStatusesOnHandV2<T>
  ): DeleteRequestBuilder<WarehouseInventoryStatusesOnHandV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    productColorId?: string,
    productConfigurationId?: string,
    productSizeId?: string,
    productStyleId?: string,
    productVersionId?: string,
    inventorySiteId?: string,
    inventoryWarehouseId?: string,
    inventoryStatusId?: string
  ): DeleteRequestBuilder<WarehouseInventoryStatusesOnHandV2<T>, T> {
    return new DeleteRequestBuilder<WarehouseInventoryStatusesOnHandV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarehouseInventoryStatusesOnHandV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            ProductColorId: productColorId!,
            ProductConfigurationId: productConfigurationId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!,
            InventorySiteId: inventorySiteId!,
            InventoryWarehouseId: inventoryWarehouseId!,
            InventoryStatusId: inventoryStatusId!
          }
    );
  }
}
