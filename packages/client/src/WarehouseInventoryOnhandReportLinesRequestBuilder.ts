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
import { WarehouseInventoryOnhandReportLines } from './WarehouseInventoryOnhandReportLines';

/**
 * Request builder class for operations supported on the {@link WarehouseInventoryOnhandReportLines} entity.
 */
export class WarehouseInventoryOnhandReportLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehouseInventoryOnhandReportLines<T>, T> {
  /**
   * Returns a request builder for querying all `WarehouseInventoryOnhandReportLines` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseInventoryOnhandReportLines` entities.
   */
  getAll(): GetAllRequestBuilder<WarehouseInventoryOnhandReportLines<T>, T> {
    return new GetAllRequestBuilder<WarehouseInventoryOnhandReportLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WarehouseInventoryOnhandReportLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseInventoryOnhandReportLines`.
   */
  create(
    entity: WarehouseInventoryOnhandReportLines<T>
  ): CreateRequestBuilder<WarehouseInventoryOnhandReportLines<T>, T> {
    return new CreateRequestBuilder<WarehouseInventoryOnhandReportLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarehouseInventoryOnhandReportLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseInventoryOnhandReportLines.dataAreaId}.
   * @param reportNumber Key property. See {@link WarehouseInventoryOnhandReportLines.reportNumber}.
   * @param itemNumber Key property. See {@link WarehouseInventoryOnhandReportLines.itemNumber}.
   * @param productConfigurationId Key property. See {@link WarehouseInventoryOnhandReportLines.productConfigurationId}.
   * @param productSizeId Key property. See {@link WarehouseInventoryOnhandReportLines.productSizeId}.
   * @param productColorId Key property. See {@link WarehouseInventoryOnhandReportLines.productColorId}.
   * @param productStyleId Key property. See {@link WarehouseInventoryOnhandReportLines.productStyleId}.
   * @param productVersionId Key property. See {@link WarehouseInventoryOnhandReportLines.productVersionId}.
   * @param warehouseId Key property. See {@link WarehouseInventoryOnhandReportLines.warehouseId}.
   * @param warehouseLocationId Key property. See {@link WarehouseInventoryOnhandReportLines.warehouseLocationId}.
   * @param inventoryStatusId Key property. See {@link WarehouseInventoryOnhandReportLines.inventoryStatusId}.
   * @param itemBatchNumber Key property. See {@link WarehouseInventoryOnhandReportLines.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link WarehouseInventoryOnhandReportLines.itemSerialNumber}.
   * @param inventoryGtdId Key property. See {@link WarehouseInventoryOnhandReportLines.inventoryGtdId}.
   * @param inventoryOwnerId Key property. See {@link WarehouseInventoryOnhandReportLines.inventoryOwnerId}.
   * @param inventoryProfileId Key property. See {@link WarehouseInventoryOnhandReportLines.inventoryProfileId}.
   * @returns A request builder for creating requests to retrieve one `WarehouseInventoryOnhandReportLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reportNumber: DeserializedType<T, 'Edm.Guid'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>,
    warehouseId: DeserializedType<T, 'Edm.String'>,
    warehouseLocationId: DeserializedType<T, 'Edm.String'>,
    inventoryStatusId: DeserializedType<T, 'Edm.String'>,
    itemBatchNumber: DeserializedType<T, 'Edm.String'>,
    itemSerialNumber: DeserializedType<T, 'Edm.String'>,
    inventoryGtdId: DeserializedType<T, 'Edm.String'>,
    inventoryOwnerId: DeserializedType<T, 'Edm.String'>,
    inventoryProfileId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WarehouseInventoryOnhandReportLines<T>, T> {
    return new GetByKeyRequestBuilder<
      WarehouseInventoryOnhandReportLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ReportNumber: reportNumber,
      ItemNumber: itemNumber,
      ProductConfigurationId: productConfigurationId,
      ProductSizeId: productSizeId,
      ProductColorId: productColorId,
      ProductStyleId: productStyleId,
      ProductVersionId: productVersionId,
      WarehouseId: warehouseId,
      WarehouseLocationId: warehouseLocationId,
      InventoryStatusId: inventoryStatusId,
      ItemBatchNumber: itemBatchNumber,
      ItemSerialNumber: itemSerialNumber,
      InventoryGtdId: inventoryGtdId,
      InventoryOwnerId: inventoryOwnerId,
      InventoryProfileId: inventoryProfileId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseInventoryOnhandReportLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseInventoryOnhandReportLines`.
   */
  update(
    entity: WarehouseInventoryOnhandReportLines<T>
  ): UpdateRequestBuilder<WarehouseInventoryOnhandReportLines<T>, T> {
    return new UpdateRequestBuilder<WarehouseInventoryOnhandReportLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseInventoryOnhandReportLines`.
   * @param dataAreaId Key property. See {@link WarehouseInventoryOnhandReportLines.dataAreaId}.
   * @param reportNumber Key property. See {@link WarehouseInventoryOnhandReportLines.reportNumber}.
   * @param itemNumber Key property. See {@link WarehouseInventoryOnhandReportLines.itemNumber}.
   * @param productConfigurationId Key property. See {@link WarehouseInventoryOnhandReportLines.productConfigurationId}.
   * @param productSizeId Key property. See {@link WarehouseInventoryOnhandReportLines.productSizeId}.
   * @param productColorId Key property. See {@link WarehouseInventoryOnhandReportLines.productColorId}.
   * @param productStyleId Key property. See {@link WarehouseInventoryOnhandReportLines.productStyleId}.
   * @param productVersionId Key property. See {@link WarehouseInventoryOnhandReportLines.productVersionId}.
   * @param warehouseId Key property. See {@link WarehouseInventoryOnhandReportLines.warehouseId}.
   * @param warehouseLocationId Key property. See {@link WarehouseInventoryOnhandReportLines.warehouseLocationId}.
   * @param inventoryStatusId Key property. See {@link WarehouseInventoryOnhandReportLines.inventoryStatusId}.
   * @param itemBatchNumber Key property. See {@link WarehouseInventoryOnhandReportLines.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link WarehouseInventoryOnhandReportLines.itemSerialNumber}.
   * @param inventoryGtdId Key property. See {@link WarehouseInventoryOnhandReportLines.inventoryGtdId}.
   * @param inventoryOwnerId Key property. See {@link WarehouseInventoryOnhandReportLines.inventoryOwnerId}.
   * @param inventoryProfileId Key property. See {@link WarehouseInventoryOnhandReportLines.inventoryProfileId}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseInventoryOnhandReportLines`.
   */
  delete(
    dataAreaId: string,
    reportNumber: string,
    itemNumber: string,
    productConfigurationId: string,
    productSizeId: string,
    productColorId: string,
    productStyleId: string,
    productVersionId: string,
    warehouseId: string,
    warehouseLocationId: string,
    inventoryStatusId: string,
    itemBatchNumber: string,
    itemSerialNumber: string,
    inventoryGtdId: string,
    inventoryOwnerId: string,
    inventoryProfileId: string
  ): DeleteRequestBuilder<WarehouseInventoryOnhandReportLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseInventoryOnhandReportLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseInventoryOnhandReportLines` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseInventoryOnhandReportLines<T>
  ): DeleteRequestBuilder<WarehouseInventoryOnhandReportLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    reportNumber?: string,
    itemNumber?: string,
    productConfigurationId?: string,
    productSizeId?: string,
    productColorId?: string,
    productStyleId?: string,
    productVersionId?: string,
    warehouseId?: string,
    warehouseLocationId?: string,
    inventoryStatusId?: string,
    itemBatchNumber?: string,
    itemSerialNumber?: string,
    inventoryGtdId?: string,
    inventoryOwnerId?: string,
    inventoryProfileId?: string
  ): DeleteRequestBuilder<WarehouseInventoryOnhandReportLines<T>, T> {
    return new DeleteRequestBuilder<WarehouseInventoryOnhandReportLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarehouseInventoryOnhandReportLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReportNumber: reportNumber!,
            ItemNumber: itemNumber!,
            ProductConfigurationId: productConfigurationId!,
            ProductSizeId: productSizeId!,
            ProductColorId: productColorId!,
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!,
            WarehouseId: warehouseId!,
            WarehouseLocationId: warehouseLocationId!,
            InventoryStatusId: inventoryStatusId!,
            ItemBatchNumber: itemBatchNumber!,
            ItemSerialNumber: itemSerialNumber!,
            InventoryGtdId: inventoryGtdId!,
            InventoryOwnerId: inventoryOwnerId!,
            InventoryProfileId: inventoryProfileId!
          }
    );
  }
}
