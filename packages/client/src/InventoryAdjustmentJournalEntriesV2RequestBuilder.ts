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
import { InventoryAdjustmentJournalEntriesV2 } from './InventoryAdjustmentJournalEntriesV2';

/**
 * Request builder class for operations supported on the {@link InventoryAdjustmentJournalEntriesV2} entity.
 */
export class InventoryAdjustmentJournalEntriesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryAdjustmentJournalEntriesV2<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryAdjustmentJournalEntriesV2` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryAdjustmentJournalEntriesV2` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryAdjustmentJournalEntriesV2<T>, T> {
    return new GetAllRequestBuilder<InventoryAdjustmentJournalEntriesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryAdjustmentJournalEntriesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryAdjustmentJournalEntriesV2`.
   */
  create(
    entity: InventoryAdjustmentJournalEntriesV2<T>
  ): CreateRequestBuilder<InventoryAdjustmentJournalEntriesV2<T>, T> {
    return new CreateRequestBuilder<InventoryAdjustmentJournalEntriesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryAdjustmentJournalEntriesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryAdjustmentJournalEntriesV2.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryAdjustmentJournalEntriesV2.journalNumber}.
   * @param itemNumber Key property. See {@link InventoryAdjustmentJournalEntriesV2.itemNumber}.
   * @param productConfigurationId Key property. See {@link InventoryAdjustmentJournalEntriesV2.productConfigurationId}.
   * @param productColorId Key property. See {@link InventoryAdjustmentJournalEntriesV2.productColorId}.
   * @param productSizeId Key property. See {@link InventoryAdjustmentJournalEntriesV2.productSizeId}.
   * @param productStyleId Key property. See {@link InventoryAdjustmentJournalEntriesV2.productStyleId}.
   * @param productVersionId Key property. See {@link InventoryAdjustmentJournalEntriesV2.productVersionId}.
   * @param inventorySiteId Key property. See {@link InventoryAdjustmentJournalEntriesV2.inventorySiteId}.
   * @param inventoryWarehouseId Key property. See {@link InventoryAdjustmentJournalEntriesV2.inventoryWarehouseId}.
   * @param itemBatchNumber Key property. See {@link InventoryAdjustmentJournalEntriesV2.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link InventoryAdjustmentJournalEntriesV2.itemSerialNumber}.
   * @param warehouseLocationId Key property. See {@link InventoryAdjustmentJournalEntriesV2.warehouseLocationId}.
   * @param licensePlateNumber Key property. See {@link InventoryAdjustmentJournalEntriesV2.licensePlateNumber}.
   * @param inventoryStatusId Key property. See {@link InventoryAdjustmentJournalEntriesV2.inventoryStatusId}.
   * @param lineNumber Key property. See {@link InventoryAdjustmentJournalEntriesV2.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `InventoryAdjustmentJournalEntriesV2` entity based on its keys.
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
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<InventoryAdjustmentJournalEntriesV2<T>, T> {
    return new GetByKeyRequestBuilder<
      InventoryAdjustmentJournalEntriesV2<T>,
      T
    >(this.entityApi, {
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
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryAdjustmentJournalEntriesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryAdjustmentJournalEntriesV2`.
   */
  update(
    entity: InventoryAdjustmentJournalEntriesV2<T>
  ): UpdateRequestBuilder<InventoryAdjustmentJournalEntriesV2<T>, T> {
    return new UpdateRequestBuilder<InventoryAdjustmentJournalEntriesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryAdjustmentJournalEntriesV2`.
   * @param dataAreaId Key property. See {@link InventoryAdjustmentJournalEntriesV2.dataAreaId}.
   * @param journalNumber Key property. See {@link InventoryAdjustmentJournalEntriesV2.journalNumber}.
   * @param itemNumber Key property. See {@link InventoryAdjustmentJournalEntriesV2.itemNumber}.
   * @param productConfigurationId Key property. See {@link InventoryAdjustmentJournalEntriesV2.productConfigurationId}.
   * @param productColorId Key property. See {@link InventoryAdjustmentJournalEntriesV2.productColorId}.
   * @param productSizeId Key property. See {@link InventoryAdjustmentJournalEntriesV2.productSizeId}.
   * @param productStyleId Key property. See {@link InventoryAdjustmentJournalEntriesV2.productStyleId}.
   * @param productVersionId Key property. See {@link InventoryAdjustmentJournalEntriesV2.productVersionId}.
   * @param inventorySiteId Key property. See {@link InventoryAdjustmentJournalEntriesV2.inventorySiteId}.
   * @param inventoryWarehouseId Key property. See {@link InventoryAdjustmentJournalEntriesV2.inventoryWarehouseId}.
   * @param itemBatchNumber Key property. See {@link InventoryAdjustmentJournalEntriesV2.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link InventoryAdjustmentJournalEntriesV2.itemSerialNumber}.
   * @param warehouseLocationId Key property. See {@link InventoryAdjustmentJournalEntriesV2.warehouseLocationId}.
   * @param licensePlateNumber Key property. See {@link InventoryAdjustmentJournalEntriesV2.licensePlateNumber}.
   * @param inventoryStatusId Key property. See {@link InventoryAdjustmentJournalEntriesV2.inventoryStatusId}.
   * @param lineNumber Key property. See {@link InventoryAdjustmentJournalEntriesV2.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryAdjustmentJournalEntriesV2`.
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
    lineNumber: BigNumber
  ): DeleteRequestBuilder<InventoryAdjustmentJournalEntriesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryAdjustmentJournalEntriesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryAdjustmentJournalEntriesV2` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryAdjustmentJournalEntriesV2<T>
  ): DeleteRequestBuilder<InventoryAdjustmentJournalEntriesV2<T>, T>;
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
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<InventoryAdjustmentJournalEntriesV2<T>, T> {
    return new DeleteRequestBuilder<InventoryAdjustmentJournalEntriesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryAdjustmentJournalEntriesV2
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
            LineNumber: lineNumber!
          }
    );
  }
}
