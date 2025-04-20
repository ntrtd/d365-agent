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
import { WarehouseInventoryStatusOnHandIncludingCatchWeightItems } from './WarehouseInventoryStatusOnHandIncludingCatchWeightItems';

/**
 * Request builder class for operations supported on the {@link WarehouseInventoryStatusOnHandIncludingCatchWeightItems} entity.
 */
export class WarehouseInventoryStatusOnHandIncludingCatchWeightItemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  WarehouseInventoryStatusOnHandIncludingCatchWeightItems<T>,
  T
> {
  /**
   * Returns a request builder for querying all `WarehouseInventoryStatusOnHandIncludingCatchWeightItems` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseInventoryStatusOnHandIncludingCatchWeightItems` entities.
   */
  getAll(): GetAllRequestBuilder<
    WarehouseInventoryStatusOnHandIncludingCatchWeightItems<T>,
    T
  > {
    return new GetAllRequestBuilder<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WarehouseInventoryStatusOnHandIncludingCatchWeightItems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseInventoryStatusOnHandIncludingCatchWeightItems`.
   */
  create(
    entity: WarehouseInventoryStatusOnHandIncludingCatchWeightItems<T>
  ): CreateRequestBuilder<
    WarehouseInventoryStatusOnHandIncludingCatchWeightItems<T>,
    T
  > {
    return new CreateRequestBuilder<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `WarehouseInventoryStatusOnHandIncludingCatchWeightItems` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseInventoryStatusOnHandIncludingCatchWeightItems.dataAreaId}.
   * @param itemNumber Key property. See {@link WarehouseInventoryStatusOnHandIncludingCatchWeightItems.itemNumber}.
   * @param productColorId Key property. See {@link WarehouseInventoryStatusOnHandIncludingCatchWeightItems.productColorId}.
   * @param productConfigurationId Key property. See {@link WarehouseInventoryStatusOnHandIncludingCatchWeightItems.productConfigurationId}.
   * @param productSizeId Key property. See {@link WarehouseInventoryStatusOnHandIncludingCatchWeightItems.productSizeId}.
   * @param productStyleId Key property. See {@link WarehouseInventoryStatusOnHandIncludingCatchWeightItems.productStyleId}.
   * @param productVersionId Key property. See {@link WarehouseInventoryStatusOnHandIncludingCatchWeightItems.productVersionId}.
   * @param inventorySiteId Key property. See {@link WarehouseInventoryStatusOnHandIncludingCatchWeightItems.inventorySiteId}.
   * @param inventoryWarehouseId Key property. See {@link WarehouseInventoryStatusOnHandIncludingCatchWeightItems.inventoryWarehouseId}.
   * @param inventoryStatusId Key property. See {@link WarehouseInventoryStatusOnHandIncludingCatchWeightItems.inventoryStatusId}.
   * @returns A request builder for creating requests to retrieve one `WarehouseInventoryStatusOnHandIncludingCatchWeightItems` entity based on its keys.
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
  ): GetByKeyRequestBuilder<
    WarehouseInventoryStatusOnHandIncludingCatchWeightItems<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<T>,
      T
    >(this.entityApi, {
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
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseInventoryStatusOnHandIncludingCatchWeightItems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseInventoryStatusOnHandIncludingCatchWeightItems`.
   */
  update(
    entity: WarehouseInventoryStatusOnHandIncludingCatchWeightItems<T>
  ): UpdateRequestBuilder<
    WarehouseInventoryStatusOnHandIncludingCatchWeightItems<T>,
    T
  > {
    return new UpdateRequestBuilder<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseInventoryStatusOnHandIncludingCatchWeightItems`.
   * @param dataAreaId Key property. See {@link WarehouseInventoryStatusOnHandIncludingCatchWeightItems.dataAreaId}.
   * @param itemNumber Key property. See {@link WarehouseInventoryStatusOnHandIncludingCatchWeightItems.itemNumber}.
   * @param productColorId Key property. See {@link WarehouseInventoryStatusOnHandIncludingCatchWeightItems.productColorId}.
   * @param productConfigurationId Key property. See {@link WarehouseInventoryStatusOnHandIncludingCatchWeightItems.productConfigurationId}.
   * @param productSizeId Key property. See {@link WarehouseInventoryStatusOnHandIncludingCatchWeightItems.productSizeId}.
   * @param productStyleId Key property. See {@link WarehouseInventoryStatusOnHandIncludingCatchWeightItems.productStyleId}.
   * @param productVersionId Key property. See {@link WarehouseInventoryStatusOnHandIncludingCatchWeightItems.productVersionId}.
   * @param inventorySiteId Key property. See {@link WarehouseInventoryStatusOnHandIncludingCatchWeightItems.inventorySiteId}.
   * @param inventoryWarehouseId Key property. See {@link WarehouseInventoryStatusOnHandIncludingCatchWeightItems.inventoryWarehouseId}.
   * @param inventoryStatusId Key property. See {@link WarehouseInventoryStatusOnHandIncludingCatchWeightItems.inventoryStatusId}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseInventoryStatusOnHandIncludingCatchWeightItems`.
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
  ): DeleteRequestBuilder<
    WarehouseInventoryStatusOnHandIncludingCatchWeightItems<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseInventoryStatusOnHandIncludingCatchWeightItems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseInventoryStatusOnHandIncludingCatchWeightItems` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseInventoryStatusOnHandIncludingCatchWeightItems<T>
  ): DeleteRequestBuilder<
    WarehouseInventoryStatusOnHandIncludingCatchWeightItems<T>,
    T
  >;
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
  ): DeleteRequestBuilder<
    WarehouseInventoryStatusOnHandIncludingCatchWeightItems<T>,
    T
  > {
    return new DeleteRequestBuilder<
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      WarehouseInventoryStatusOnHandIncludingCatchWeightItems
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
