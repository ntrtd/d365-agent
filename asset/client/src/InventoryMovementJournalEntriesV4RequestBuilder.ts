/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { InventoryMovementJournalEntriesV4 } from './InventoryMovementJournalEntriesV4';

/**
 * Request builder class for operations supported on the {@link InventoryMovementJournalEntriesV4} entity.
 */
export class InventoryMovementJournalEntriesV4RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryMovementJournalEntriesV4<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryMovementJournalEntriesV4` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryMovementJournalEntriesV4` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryMovementJournalEntriesV4<T>, T> {
    return new GetAllRequestBuilder<InventoryMovementJournalEntriesV4<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryMovementJournalEntriesV4` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryMovementJournalEntriesV4`.
   */
  create(
    entity: InventoryMovementJournalEntriesV4<T>
  ): CreateRequestBuilder<InventoryMovementJournalEntriesV4<T>, T> {
    return new CreateRequestBuilder<InventoryMovementJournalEntriesV4<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryMovementJournalEntriesV4` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryMovementJournalEntriesV4.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryMovementJournalEntriesV4.journalNumber}.
   * @param itemNumber Key property. See {@link InventoryMovementJournalEntriesV4.itemNumber}.
   * @param productConfigurationId Key property. See {@link InventoryMovementJournalEntriesV4.productConfigurationId}.
   * @param productColorId Key property. See {@link InventoryMovementJournalEntriesV4.productColorId}.
   * @param productSizeId Key property. See {@link InventoryMovementJournalEntriesV4.productSizeId}.
   * @param productStyleId Key property. See {@link InventoryMovementJournalEntriesV4.productStyleId}.
   * @param productVersionId Key property. See {@link InventoryMovementJournalEntriesV4.productVersionId}.
   * @param inventorySiteId Key property. See {@link InventoryMovementJournalEntriesV4.inventorySiteId}.
   * @param inventoryWarehouseId Key property. See {@link InventoryMovementJournalEntriesV4.inventoryWarehouseId}.
   * @param itemBatchNumber Key property. See {@link InventoryMovementJournalEntriesV4.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link InventoryMovementJournalEntriesV4.itemSerialNumber}.
   * @param warehouseLocationId Key property. See {@link InventoryMovementJournalEntriesV4.warehouseLocationId}.
   * @param licensePlateNumber Key property. See {@link InventoryMovementJournalEntriesV4.licensePlateNumber}.
   * @param inventoryStatusId Key property. See {@link InventoryMovementJournalEntriesV4.inventoryStatusId}.
   * @param inventoryGtdId Key property. See {@link InventoryMovementJournalEntriesV4.inventoryGtdId}.
   * @param inventoryOwnerId Key property. See {@link InventoryMovementJournalEntriesV4.inventoryOwnerId}.
   * @param inventoryProfileId Key property. See {@link InventoryMovementJournalEntriesV4.inventoryProfileId}.
   * @param lineNumber Key property. See {@link InventoryMovementJournalEntriesV4.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `InventoryMovementJournalEntriesV4` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNumber: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>,
    inventorySiteId: DeserializedType<T, 'Edm.String'>,
    inventoryWarehouseId: DeserializedType<T, 'Edm.String'>,
    itemBatchNumber: DeserializedType<T, 'Edm.String'>,
    itemSerialNumber: DeserializedType<T, 'Edm.String'>,
    warehouseLocationId: DeserializedType<T, 'Edm.String'>,
    licensePlateNumber: DeserializedType<T, 'Edm.String'>,
    inventoryStatusId: DeserializedType<T, 'Edm.String'>,
    inventoryGtdId: DeserializedType<T, 'Edm.String'>,
    inventoryOwnerId: DeserializedType<T, 'Edm.String'>,
    inventoryProfileId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<InventoryMovementJournalEntriesV4<T>, T> {
    return new GetByKeyRequestBuilder<InventoryMovementJournalEntriesV4<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalNumber: journalNumber,
        ItemNumber: itemNumber,
        ProductConfigurationId: productConfigurationId,
        ProductColorId: productColorId,
        ProductSizeId: productSizeId,
        ProductStyleId: productStyleId,
        ProductVersionId: productVersionId,
        InventorySiteId: inventorySiteId,
        InventoryWarehouseId: inventoryWarehouseId,
        ItemBatchNumber: itemBatchNumber,
        ItemSerialNumber: itemSerialNumber,
        WarehouseLocationId: warehouseLocationId,
        LicensePlateNumber: licensePlateNumber,
        InventoryStatusId: inventoryStatusId,
        InventoryGtdId: inventoryGtdId,
        InventoryOwnerId: inventoryOwnerId,
        InventoryProfileId: inventoryProfileId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryMovementJournalEntriesV4`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryMovementJournalEntriesV4`.
   */
  update(
    entity: InventoryMovementJournalEntriesV4<T>
  ): UpdateRequestBuilder<InventoryMovementJournalEntriesV4<T>, T> {
    return new UpdateRequestBuilder<InventoryMovementJournalEntriesV4<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryMovementJournalEntriesV4`.
   * @param dataAreaId Key property. See {@link InventoryMovementJournalEntriesV4.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryMovementJournalEntriesV4.journalNumber}.
   * @param itemNumber Key property. See {@link InventoryMovementJournalEntriesV4.itemNumber}.
   * @param productConfigurationId Key property. See {@link InventoryMovementJournalEntriesV4.productConfigurationId}.
   * @param productColorId Key property. See {@link InventoryMovementJournalEntriesV4.productColorId}.
   * @param productSizeId Key property. See {@link InventoryMovementJournalEntriesV4.productSizeId}.
   * @param productStyleId Key property. See {@link InventoryMovementJournalEntriesV4.productStyleId}.
   * @param productVersionId Key property. See {@link InventoryMovementJournalEntriesV4.productVersionId}.
   * @param inventorySiteId Key property. See {@link InventoryMovementJournalEntriesV4.inventorySiteId}.
   * @param inventoryWarehouseId Key property. See {@link InventoryMovementJournalEntriesV4.inventoryWarehouseId}.
   * @param itemBatchNumber Key property. See {@link InventoryMovementJournalEntriesV4.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link InventoryMovementJournalEntriesV4.itemSerialNumber}.
   * @param warehouseLocationId Key property. See {@link InventoryMovementJournalEntriesV4.warehouseLocationId}.
   * @param licensePlateNumber Key property. See {@link InventoryMovementJournalEntriesV4.licensePlateNumber}.
   * @param inventoryStatusId Key property. See {@link InventoryMovementJournalEntriesV4.inventoryStatusId}.
   * @param inventoryGtdId Key property. See {@link InventoryMovementJournalEntriesV4.inventoryGtdId}.
   * @param inventoryOwnerId Key property. See {@link InventoryMovementJournalEntriesV4.inventoryOwnerId}.
   * @param inventoryProfileId Key property. See {@link InventoryMovementJournalEntriesV4.inventoryProfileId}.
   * @param lineNumber Key property. See {@link InventoryMovementJournalEntriesV4.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryMovementJournalEntriesV4`.
   */
  delete(
    dataAreaId: string,
    journalNumber: string,
    itemNumber: string,
    productConfigurationId: string,
    productColorId: string,
    productSizeId: string,
    productStyleId: string,
    productVersionId: string,
    inventorySiteId: string,
    inventoryWarehouseId: string,
    itemBatchNumber: string,
    itemSerialNumber: string,
    warehouseLocationId: string,
    licensePlateNumber: string,
    inventoryStatusId: string,
    inventoryGtdId: string,
    inventoryOwnerId: string,
    inventoryProfileId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<InventoryMovementJournalEntriesV4<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryMovementJournalEntriesV4`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryMovementJournalEntriesV4` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryMovementJournalEntriesV4<T>
  ): DeleteRequestBuilder<InventoryMovementJournalEntriesV4<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNumber?: string,
    itemNumber?: string,
    productConfigurationId?: string,
    productColorId?: string,
    productSizeId?: string,
    productStyleId?: string,
    productVersionId?: string,
    inventorySiteId?: string,
    inventoryWarehouseId?: string,
    itemBatchNumber?: string,
    itemSerialNumber?: string,
    warehouseLocationId?: string,
    licensePlateNumber?: string,
    inventoryStatusId?: string,
    inventoryGtdId?: string,
    inventoryOwnerId?: string,
    inventoryProfileId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<InventoryMovementJournalEntriesV4<T>, T> {
    return new DeleteRequestBuilder<InventoryMovementJournalEntriesV4<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryMovementJournalEntriesV4
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNumber: journalNumber!,
            ItemNumber: itemNumber!,
            ProductConfigurationId: productConfigurationId!,
            ProductColorId: productColorId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!,
            InventorySiteId: inventorySiteId!,
            InventoryWarehouseId: inventoryWarehouseId!,
            ItemBatchNumber: itemBatchNumber!,
            ItemSerialNumber: itemSerialNumber!,
            WarehouseLocationId: warehouseLocationId!,
            LicensePlateNumber: licensePlateNumber!,
            InventoryStatusId: inventoryStatusId!,
            InventoryGtdId: inventoryGtdId!,
            InventoryOwnerId: inventoryOwnerId!,
            InventoryProfileId: inventoryProfileId!,
            LineNumber: lineNumber!
          }
    );
  }
}
