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
import { InventoryMovementJournalEntries } from './InventoryMovementJournalEntries';

/**
 * Request builder class for operations supported on the {@link InventoryMovementJournalEntries} entity.
 */
export class InventoryMovementJournalEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryMovementJournalEntries<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryMovementJournalEntries` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryMovementJournalEntries` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryMovementJournalEntries<T>, T> {
    return new GetAllRequestBuilder<InventoryMovementJournalEntries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryMovementJournalEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryMovementJournalEntries`.
   */
  create(
    entity: InventoryMovementJournalEntries<T>
  ): CreateRequestBuilder<InventoryMovementJournalEntries<T>, T> {
    return new CreateRequestBuilder<InventoryMovementJournalEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryMovementJournalEntries` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryMovementJournalEntries.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryMovementJournalEntries.journalNumber}.
   * @param itemNumber Key property. See {@link InventoryMovementJournalEntries.itemNumber}.
   * @param productConfigurationId Key property. See {@link InventoryMovementJournalEntries.productConfigurationId}.
   * @param productColorId Key property. See {@link InventoryMovementJournalEntries.productColorId}.
   * @param productSizeId Key property. See {@link InventoryMovementJournalEntries.productSizeId}.
   * @param productStyleId Key property. See {@link InventoryMovementJournalEntries.productStyleId}.
   * @param inventorySiteId Key property. See {@link InventoryMovementJournalEntries.inventorySiteId}.
   * @param inventoryWarehouseId Key property. See {@link InventoryMovementJournalEntries.inventoryWarehouseId}.
   * @param itemBatchNumber Key property. See {@link InventoryMovementJournalEntries.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link InventoryMovementJournalEntries.itemSerialNumber}.
   * @param warehouseLocationId Key property. See {@link InventoryMovementJournalEntries.warehouseLocationId}.
   * @param licensePlateNumber Key property. See {@link InventoryMovementJournalEntries.licensePlateNumber}.
   * @param inventoryStatusId Key property. See {@link InventoryMovementJournalEntries.inventoryStatusId}.
   * @returns A request builder for creating requests to retrieve one `InventoryMovementJournalEntries` entity based on its keys.
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
    inventoryStatusId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryMovementJournalEntries<T>, T> {
    return new GetByKeyRequestBuilder<InventoryMovementJournalEntries<T>, T>(
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
        InventoryStatusId: inventoryStatusId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryMovementJournalEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryMovementJournalEntries`.
   */
  update(
    entity: InventoryMovementJournalEntries<T>
  ): UpdateRequestBuilder<InventoryMovementJournalEntries<T>, T> {
    return new UpdateRequestBuilder<InventoryMovementJournalEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryMovementJournalEntries`.
   * @param dataAreaId Key property. See {@link InventoryMovementJournalEntries.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryMovementJournalEntries.journalNumber}.
   * @param itemNumber Key property. See {@link InventoryMovementJournalEntries.itemNumber}.
   * @param productConfigurationId Key property. See {@link InventoryMovementJournalEntries.productConfigurationId}.
   * @param productColorId Key property. See {@link InventoryMovementJournalEntries.productColorId}.
   * @param productSizeId Key property. See {@link InventoryMovementJournalEntries.productSizeId}.
   * @param productStyleId Key property. See {@link InventoryMovementJournalEntries.productStyleId}.
   * @param inventorySiteId Key property. See {@link InventoryMovementJournalEntries.inventorySiteId}.
   * @param inventoryWarehouseId Key property. See {@link InventoryMovementJournalEntries.inventoryWarehouseId}.
   * @param itemBatchNumber Key property. See {@link InventoryMovementJournalEntries.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link InventoryMovementJournalEntries.itemSerialNumber}.
   * @param warehouseLocationId Key property. See {@link InventoryMovementJournalEntries.warehouseLocationId}.
   * @param licensePlateNumber Key property. See {@link InventoryMovementJournalEntries.licensePlateNumber}.
   * @param inventoryStatusId Key property. See {@link InventoryMovementJournalEntries.inventoryStatusId}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryMovementJournalEntries`.
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
    inventoryStatusId: string
  ): DeleteRequestBuilder<InventoryMovementJournalEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryMovementJournalEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryMovementJournalEntries` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryMovementJournalEntries<T>
  ): DeleteRequestBuilder<InventoryMovementJournalEntries<T>, T>;
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
    inventoryStatusId?: string
  ): DeleteRequestBuilder<InventoryMovementJournalEntries<T>, T> {
    return new DeleteRequestBuilder<InventoryMovementJournalEntries<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryMovementJournalEntries
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
            InventoryStatusId: inventoryStatusId!
          }
    );
  }
}
