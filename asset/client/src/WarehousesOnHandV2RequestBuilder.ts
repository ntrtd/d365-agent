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
import { WarehousesOnHandV2 } from './WarehousesOnHandV2';

/**
 * Request builder class for operations supported on the {@link WarehousesOnHandV2} entity.
 */
export class WarehousesOnHandV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehousesOnHandV2<T>, T> {
  /**
   * Returns a request builder for querying all `WarehousesOnHandV2` entities.
   * @returns A request builder for creating requests to retrieve all `WarehousesOnHandV2` entities.
   */
  getAll(): GetAllRequestBuilder<WarehousesOnHandV2<T>, T> {
    return new GetAllRequestBuilder<WarehousesOnHandV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WarehousesOnHandV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehousesOnHandV2`.
   */
  create(
    entity: WarehousesOnHandV2<T>
  ): CreateRequestBuilder<WarehousesOnHandV2<T>, T> {
    return new CreateRequestBuilder<WarehousesOnHandV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarehousesOnHandV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehousesOnHandV2.dataAreaId}.
   * @param itemNumber Key property. See {@link WarehousesOnHandV2.itemNumber}.
   * @param productColorId Key property. See {@link WarehousesOnHandV2.productColorId}.
   * @param productConfigurationId Key property. See {@link WarehousesOnHandV2.productConfigurationId}.
   * @param productSizeId Key property. See {@link WarehousesOnHandV2.productSizeId}.
   * @param productStyleId Key property. See {@link WarehousesOnHandV2.productStyleId}.
   * @param productVersionId Key property. See {@link WarehousesOnHandV2.productVersionId}.
   * @param inventorySiteId Key property. See {@link WarehousesOnHandV2.inventorySiteId}.
   * @param inventoryWarehouseId Key property. See {@link WarehousesOnHandV2.inventoryWarehouseId}.
   * @returns A request builder for creating requests to retrieve one `WarehousesOnHandV2` entity based on its keys.
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
    inventoryWarehouseId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WarehousesOnHandV2<T>, T> {
    return new GetByKeyRequestBuilder<WarehousesOnHandV2<T>, T>(
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
        InventoryWarehouseId: inventoryWarehouseId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WarehousesOnHandV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehousesOnHandV2`.
   */
  update(
    entity: WarehousesOnHandV2<T>
  ): UpdateRequestBuilder<WarehousesOnHandV2<T>, T> {
    return new UpdateRequestBuilder<WarehousesOnHandV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehousesOnHandV2`.
   * @param dataAreaId Key property. See {@link WarehousesOnHandV2.dataAreaId}.
   * @param itemNumber Key property. See {@link WarehousesOnHandV2.itemNumber}.
   * @param productColorId Key property. See {@link WarehousesOnHandV2.productColorId}.
   * @param productConfigurationId Key property. See {@link WarehousesOnHandV2.productConfigurationId}.
   * @param productSizeId Key property. See {@link WarehousesOnHandV2.productSizeId}.
   * @param productStyleId Key property. See {@link WarehousesOnHandV2.productStyleId}.
   * @param productVersionId Key property. See {@link WarehousesOnHandV2.productVersionId}.
   * @param inventorySiteId Key property. See {@link WarehousesOnHandV2.inventorySiteId}.
   * @param inventoryWarehouseId Key property. See {@link WarehousesOnHandV2.inventoryWarehouseId}.
   * @returns A request builder for creating requests that delete an entity of type `WarehousesOnHandV2`.
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
    inventoryWarehouseId: string
  ): DeleteRequestBuilder<WarehousesOnHandV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehousesOnHandV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehousesOnHandV2` by taking the entity as a parameter.
   */
  delete(
    entity: WarehousesOnHandV2<T>
  ): DeleteRequestBuilder<WarehousesOnHandV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    productColorId?: string,
    productConfigurationId?: string,
    productSizeId?: string,
    productStyleId?: string,
    productVersionId?: string,
    inventorySiteId?: string,
    inventoryWarehouseId?: string
  ): DeleteRequestBuilder<WarehousesOnHandV2<T>, T> {
    return new DeleteRequestBuilder<WarehousesOnHandV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarehousesOnHandV2
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
            InventoryWarehouseId: inventoryWarehouseId!
          }
    );
  }
}
