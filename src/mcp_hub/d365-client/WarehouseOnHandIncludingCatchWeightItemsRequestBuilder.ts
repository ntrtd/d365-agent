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
import { WarehouseOnHandIncludingCatchWeightItems } from './WarehouseOnHandIncludingCatchWeightItems';

/**
 * Request builder class for operations supported on the {@link WarehouseOnHandIncludingCatchWeightItems} entity.
 */
export class WarehouseOnHandIncludingCatchWeightItemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehouseOnHandIncludingCatchWeightItems<T>, T> {
  /**
   * Returns a request builder for querying all `WarehouseOnHandIncludingCatchWeightItems` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseOnHandIncludingCatchWeightItems` entities.
   */
  getAll(): GetAllRequestBuilder<
    WarehouseOnHandIncludingCatchWeightItems<T>,
    T
  > {
    return new GetAllRequestBuilder<
      WarehouseOnHandIncludingCatchWeightItems<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WarehouseOnHandIncludingCatchWeightItems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseOnHandIncludingCatchWeightItems`.
   */
  create(
    entity: WarehouseOnHandIncludingCatchWeightItems<T>
  ): CreateRequestBuilder<WarehouseOnHandIncludingCatchWeightItems<T>, T> {
    return new CreateRequestBuilder<
      WarehouseOnHandIncludingCatchWeightItems<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `WarehouseOnHandIncludingCatchWeightItems` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseOnHandIncludingCatchWeightItems.dataAreaId}.
   * @param itemNumber Key property. See {@link WarehouseOnHandIncludingCatchWeightItems.itemNumber}.
   * @param productColorId Key property. See {@link WarehouseOnHandIncludingCatchWeightItems.productColorId}.
   * @param productConfigurationId Key property. See {@link WarehouseOnHandIncludingCatchWeightItems.productConfigurationId}.
   * @param productSizeId Key property. See {@link WarehouseOnHandIncludingCatchWeightItems.productSizeId}.
   * @param productStyleId Key property. See {@link WarehouseOnHandIncludingCatchWeightItems.productStyleId}.
   * @param productVersionId Key property. See {@link WarehouseOnHandIncludingCatchWeightItems.productVersionId}.
   * @param inventorySiteId Key property. See {@link WarehouseOnHandIncludingCatchWeightItems.inventorySiteId}.
   * @param inventoryWarehouseId Key property. See {@link WarehouseOnHandIncludingCatchWeightItems.inventoryWarehouseId}.
   * @returns A request builder for creating requests to retrieve one `WarehouseOnHandIncludingCatchWeightItems` entity based on its keys.
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
  ): GetByKeyRequestBuilder<WarehouseOnHandIncludingCatchWeightItems<T>, T> {
    return new GetByKeyRequestBuilder<
      WarehouseOnHandIncludingCatchWeightItems<T>,
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
      InventoryWarehouseId: inventoryWarehouseId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseOnHandIncludingCatchWeightItems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseOnHandIncludingCatchWeightItems`.
   */
  update(
    entity: WarehouseOnHandIncludingCatchWeightItems<T>
  ): UpdateRequestBuilder<WarehouseOnHandIncludingCatchWeightItems<T>, T> {
    return new UpdateRequestBuilder<
      WarehouseOnHandIncludingCatchWeightItems<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseOnHandIncludingCatchWeightItems`.
   * @param dataAreaId Key property. See {@link WarehouseOnHandIncludingCatchWeightItems.dataAreaId}.
   * @param itemNumber Key property. See {@link WarehouseOnHandIncludingCatchWeightItems.itemNumber}.
   * @param productColorId Key property. See {@link WarehouseOnHandIncludingCatchWeightItems.productColorId}.
   * @param productConfigurationId Key property. See {@link WarehouseOnHandIncludingCatchWeightItems.productConfigurationId}.
   * @param productSizeId Key property. See {@link WarehouseOnHandIncludingCatchWeightItems.productSizeId}.
   * @param productStyleId Key property. See {@link WarehouseOnHandIncludingCatchWeightItems.productStyleId}.
   * @param productVersionId Key property. See {@link WarehouseOnHandIncludingCatchWeightItems.productVersionId}.
   * @param inventorySiteId Key property. See {@link WarehouseOnHandIncludingCatchWeightItems.inventorySiteId}.
   * @param inventoryWarehouseId Key property. See {@link WarehouseOnHandIncludingCatchWeightItems.inventoryWarehouseId}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseOnHandIncludingCatchWeightItems`.
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
  ): DeleteRequestBuilder<WarehouseOnHandIncludingCatchWeightItems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseOnHandIncludingCatchWeightItems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseOnHandIncludingCatchWeightItems` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseOnHandIncludingCatchWeightItems<T>
  ): DeleteRequestBuilder<WarehouseOnHandIncludingCatchWeightItems<T>, T>;
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
  ): DeleteRequestBuilder<WarehouseOnHandIncludingCatchWeightItems<T>, T> {
    return new DeleteRequestBuilder<
      WarehouseOnHandIncludingCatchWeightItems<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarehouseOnHandIncludingCatchWeightItems
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
