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
import { InventoryOnHandForAi } from './InventoryOnHandForAi';

/**
 * Request builder class for operations supported on the {@link InventoryOnHandForAi} entity.
 */
export class InventoryOnHandForAiRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryOnHandForAi<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryOnHandForAi` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryOnHandForAi` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryOnHandForAi<T>, T> {
    return new GetAllRequestBuilder<InventoryOnHandForAi<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventoryOnHandForAi` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryOnHandForAi`.
   */
  create(
    entity: InventoryOnHandForAi<T>
  ): CreateRequestBuilder<InventoryOnHandForAi<T>, T> {
    return new CreateRequestBuilder<InventoryOnHandForAi<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryOnHandForAi` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryOnHandForAi.dataAreaId}.
   * @param itemNumber Key property. See {@link InventoryOnHandForAi.itemNumber}.
   * @param siteId Key property. See {@link InventoryOnHandForAi.siteId}.
   * @param warehouseId Key property. See {@link InventoryOnHandForAi.warehouseId}.
   * @param productConfigurationId Key property. See {@link InventoryOnHandForAi.productConfigurationId}.
   * @param productColorId Key property. See {@link InventoryOnHandForAi.productColorId}.
   * @param productSizeId Key property. See {@link InventoryOnHandForAi.productSizeId}.
   * @param productStyleId Key property. See {@link InventoryOnHandForAi.productStyleId}.
   * @param inventoryStatus Key property. See {@link InventoryOnHandForAi.inventoryStatus}.
   * @returns A request builder for creating requests to retrieve one `InventoryOnHandForAi` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    siteId: DeserializedType<T, 'Edm.String'>,
    warehouseId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    inventoryStatus: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryOnHandForAi<T>, T> {
    return new GetByKeyRequestBuilder<InventoryOnHandForAi<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber,
        SiteId: siteId,
        WarehouseId: warehouseId,
        ProductConfigurationId: productConfigurationId,
        ProductColorId: productColorId,
        ProductSizeId: productSizeId,
        ProductStyleId: productStyleId,
        InventoryStatus: inventoryStatus
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryOnHandForAi`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryOnHandForAi`.
   */
  update(
    entity: InventoryOnHandForAi<T>
  ): UpdateRequestBuilder<InventoryOnHandForAi<T>, T> {
    return new UpdateRequestBuilder<InventoryOnHandForAi<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryOnHandForAi`.
   * @param dataAreaId Key property. See {@link InventoryOnHandForAi.dataAreaId}.
   * @param itemNumber Key property. See {@link InventoryOnHandForAi.itemNumber}.
   * @param siteId Key property. See {@link InventoryOnHandForAi.siteId}.
   * @param warehouseId Key property. See {@link InventoryOnHandForAi.warehouseId}.
   * @param productConfigurationId Key property. See {@link InventoryOnHandForAi.productConfigurationId}.
   * @param productColorId Key property. See {@link InventoryOnHandForAi.productColorId}.
   * @param productSizeId Key property. See {@link InventoryOnHandForAi.productSizeId}.
   * @param productStyleId Key property. See {@link InventoryOnHandForAi.productStyleId}.
   * @param inventoryStatus Key property. See {@link InventoryOnHandForAi.inventoryStatus}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryOnHandForAi`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    siteId: string,
    warehouseId: string,
    productConfigurationId: string,
    productColorId: string,
    productSizeId: string,
    productStyleId: string,
    inventoryStatus: string
  ): DeleteRequestBuilder<InventoryOnHandForAi<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryOnHandForAi`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryOnHandForAi` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryOnHandForAi<T>
  ): DeleteRequestBuilder<InventoryOnHandForAi<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    siteId?: string,
    warehouseId?: string,
    productConfigurationId?: string,
    productColorId?: string,
    productSizeId?: string,
    productStyleId?: string,
    inventoryStatus?: string
  ): DeleteRequestBuilder<InventoryOnHandForAi<T>, T> {
    return new DeleteRequestBuilder<InventoryOnHandForAi<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryOnHandForAi
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            SiteId: siteId!,
            WarehouseId: warehouseId!,
            ProductConfigurationId: productConfigurationId!,
            ProductColorId: productColorId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            InventoryStatus: inventoryStatus!
          }
    );
  }
}
