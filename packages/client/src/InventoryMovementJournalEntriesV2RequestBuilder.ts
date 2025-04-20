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
import { InventoryMovementJournalEntriesV2 } from './InventoryMovementJournalEntriesV2';

/**
 * Request builder class for operations supported on the {@link InventoryMovementJournalEntriesV2} entity.
 */
export class InventoryMovementJournalEntriesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryMovementJournalEntriesV2<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryMovementJournalEntriesV2` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryMovementJournalEntriesV2` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryMovementJournalEntriesV2<T>, T> {
    return new GetAllRequestBuilder<InventoryMovementJournalEntriesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryMovementJournalEntriesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryMovementJournalEntriesV2`.
   */
  create(
    entity: InventoryMovementJournalEntriesV2<T>
  ): CreateRequestBuilder<InventoryMovementJournalEntriesV2<T>, T> {
    return new CreateRequestBuilder<InventoryMovementJournalEntriesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryMovementJournalEntriesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryMovementJournalEntriesV2.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryMovementJournalEntriesV2.journalNumber}.
   * @param itemNumber Key property. See {@link InventoryMovementJournalEntriesV2.itemNumber}.
   * @param productConfigurationId Key property. See {@link InventoryMovementJournalEntriesV2.productConfigurationId}.
   * @param productColorId Key property. See {@link InventoryMovementJournalEntriesV2.productColorId}.
   * @param productSizeId Key property. See {@link InventoryMovementJournalEntriesV2.productSizeId}.
   * @param productStyleId Key property. See {@link InventoryMovementJournalEntriesV2.productStyleId}.
   * @param inventorySiteId Key property. See {@link InventoryMovementJournalEntriesV2.inventorySiteId}.
   * @param inventoryWarehouseId Key property. See {@link InventoryMovementJournalEntriesV2.inventoryWarehouseId}.
   * @param itemBatchNumber Key property. See {@link InventoryMovementJournalEntriesV2.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link InventoryMovementJournalEntriesV2.itemSerialNumber}.
   * @param warehouseLocationId Key property. See {@link InventoryMovementJournalEntriesV2.warehouseLocationId}.
   * @param licensePlateNumber Key property. See {@link InventoryMovementJournalEntriesV2.licensePlateNumber}.
   * @param inventoryStatusId Key property. See {@link InventoryMovementJournalEntriesV2.inventoryStatusId}.
   * @param inventoryGtdId Key property. See {@link InventoryMovementJournalEntriesV2.inventoryGtdId}.
   * @param inventoryOwnerId Key property. See {@link InventoryMovementJournalEntriesV2.inventoryOwnerId}.
   * @param inventoryProfileId Key property. See {@link InventoryMovementJournalEntriesV2.inventoryProfileId}.
   * @returns A request builder for creating requests to retrieve one `InventoryMovementJournalEntriesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNumber: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    inventorySiteId: DeserializedType<T, 'Edm.String'>,
    inventoryWarehouseId: DeserializedType<T, 'Edm.String'>,
    itemBatchNumber: DeserializedType<T, 'Edm.String'>,
    itemSerialNumber: DeserializedType<T, 'Edm.String'>,
    warehouseLocationId: DeserializedType<T, 'Edm.String'>,
    licensePlateNumber: DeserializedType<T, 'Edm.String'>,
    inventoryStatusId: DeserializedType<T, 'Edm.String'>,
    inventoryGtdId: DeserializedType<T, 'Edm.String'>,
    inventoryOwnerId: DeserializedType<T, 'Edm.String'>,
    inventoryProfileId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryMovementJournalEntriesV2<T>, T> {
    return new GetByKeyRequestBuilder<InventoryMovementJournalEntriesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalNumber: journalNumber,
        ItemNumber: itemNumber,
        ProductConfigurationId: productConfigurationId,
        ProductColorId: productColorId,
        ProductSizeId: productSizeId,
        ProductStyleId: productStyleId,
        InventorySiteId: inventorySiteId,
        InventoryWarehouseId: inventoryWarehouseId,
        ItemBatchNumber: itemBatchNumber,
        ItemSerialNumber: itemSerialNumber,
        WarehouseLocationId: warehouseLocationId,
        LicensePlateNumber: licensePlateNumber,
        InventoryStatusId: inventoryStatusId,
        InventoryGtdId: inventoryGtdId,
        InventoryOwnerId: inventoryOwnerId,
        InventoryProfileId: inventoryProfileId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryMovementJournalEntriesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryMovementJournalEntriesV2`.
   */
  update(
    entity: InventoryMovementJournalEntriesV2<T>
  ): UpdateRequestBuilder<InventoryMovementJournalEntriesV2<T>, T> {
    return new UpdateRequestBuilder<InventoryMovementJournalEntriesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryMovementJournalEntriesV2`.
   * @param dataAreaId Key property. See {@link InventoryMovementJournalEntriesV2.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryMovementJournalEntriesV2.journalNumber}.
   * @param itemNumber Key property. See {@link InventoryMovementJournalEntriesV2.itemNumber}.
   * @param productConfigurationId Key property. See {@link InventoryMovementJournalEntriesV2.productConfigurationId}.
   * @param productColorId Key property. See {@link InventoryMovementJournalEntriesV2.productColorId}.
   * @param productSizeId Key property. See {@link InventoryMovementJournalEntriesV2.productSizeId}.
   * @param productStyleId Key property. See {@link InventoryMovementJournalEntriesV2.productStyleId}.
   * @param inventorySiteId Key property. See {@link InventoryMovementJournalEntriesV2.inventorySiteId}.
   * @param inventoryWarehouseId Key property. See {@link InventoryMovementJournalEntriesV2.inventoryWarehouseId}.
   * @param itemBatchNumber Key property. See {@link InventoryMovementJournalEntriesV2.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link InventoryMovementJournalEntriesV2.itemSerialNumber}.
   * @param warehouseLocationId Key property. See {@link InventoryMovementJournalEntriesV2.warehouseLocationId}.
   * @param licensePlateNumber Key property. See {@link InventoryMovementJournalEntriesV2.licensePlateNumber}.
   * @param inventoryStatusId Key property. See {@link InventoryMovementJournalEntriesV2.inventoryStatusId}.
   * @param inventoryGtdId Key property. See {@link InventoryMovementJournalEntriesV2.inventoryGtdId}.
   * @param inventoryOwnerId Key property. See {@link InventoryMovementJournalEntriesV2.inventoryOwnerId}.
   * @param inventoryProfileId Key property. See {@link InventoryMovementJournalEntriesV2.inventoryProfileId}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryMovementJournalEntriesV2`.
   */
  delete(
    dataAreaId: string,
    journalNumber: string,
    itemNumber: string,
    productConfigurationId: string,
    productColorId: string,
    productSizeId: string,
    productStyleId: string,
    inventorySiteId: string,
    inventoryWarehouseId: string,
    itemBatchNumber: string,
    itemSerialNumber: string,
    warehouseLocationId: string,
    licensePlateNumber: string,
    inventoryStatusId: string,
    inventoryGtdId: string,
    inventoryOwnerId: string,
    inventoryProfileId: string
  ): DeleteRequestBuilder<InventoryMovementJournalEntriesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryMovementJournalEntriesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryMovementJournalEntriesV2` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryMovementJournalEntriesV2<T>
  ): DeleteRequestBuilder<InventoryMovementJournalEntriesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNumber?: string,
    itemNumber?: string,
    productConfigurationId?: string,
    productColorId?: string,
    productSizeId?: string,
    productStyleId?: string,
    inventorySiteId?: string,
    inventoryWarehouseId?: string,
    itemBatchNumber?: string,
    itemSerialNumber?: string,
    warehouseLocationId?: string,
    licensePlateNumber?: string,
    inventoryStatusId?: string,
    inventoryGtdId?: string,
    inventoryOwnerId?: string,
    inventoryProfileId?: string
  ): DeleteRequestBuilder<InventoryMovementJournalEntriesV2<T>, T> {
    return new DeleteRequestBuilder<InventoryMovementJournalEntriesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryMovementJournalEntriesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNumber: journalNumber!,
            ItemNumber: itemNumber!,
            ProductConfigurationId: productConfigurationId!,
            ProductColorId: productColorId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            InventorySiteId: inventorySiteId!,
            InventoryWarehouseId: inventoryWarehouseId!,
            ItemBatchNumber: itemBatchNumber!,
            ItemSerialNumber: itemSerialNumber!,
            WarehouseLocationId: warehouseLocationId!,
            LicensePlateNumber: licensePlateNumber!,
            InventoryStatusId: inventoryStatusId!,
            InventoryGtdId: inventoryGtdId!,
            InventoryOwnerId: inventoryOwnerId!,
            InventoryProfileId: inventoryProfileId!
          }
    );
  }
}
