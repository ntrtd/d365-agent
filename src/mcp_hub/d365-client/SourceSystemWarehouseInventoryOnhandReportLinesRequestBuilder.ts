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
import { SourceSystemWarehouseInventoryOnhandReportLines } from './SourceSystemWarehouseInventoryOnhandReportLines';

/**
 * Request builder class for operations supported on the {@link SourceSystemWarehouseInventoryOnhandReportLines} entity.
 */
export class SourceSystemWarehouseInventoryOnhandReportLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  SourceSystemWarehouseInventoryOnhandReportLines<T>,
  T
> {
  /**
   * Returns a request builder for querying all `SourceSystemWarehouseInventoryOnhandReportLines` entities.
   * @returns A request builder for creating requests to retrieve all `SourceSystemWarehouseInventoryOnhandReportLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    SourceSystemWarehouseInventoryOnhandReportLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      SourceSystemWarehouseInventoryOnhandReportLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SourceSystemWarehouseInventoryOnhandReportLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SourceSystemWarehouseInventoryOnhandReportLines`.
   */
  create(
    entity: SourceSystemWarehouseInventoryOnhandReportLines<T>
  ): CreateRequestBuilder<
    SourceSystemWarehouseInventoryOnhandReportLines<T>,
    T
  > {
    return new CreateRequestBuilder<
      SourceSystemWarehouseInventoryOnhandReportLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SourceSystemWarehouseInventoryOnhandReportLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.dataAreaId}.
   * @param reportNumber Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.reportNumber}.
   * @param productConfigurationId Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.productConfigurationId}.
   * @param productSizeId Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.productSizeId}.
   * @param productColorId Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.productColorId}.
   * @param productStyleId Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.productStyleId}.
   * @param productVersionId Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.productVersionId}.
   * @param warehouseId Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.warehouseId}.
   * @param warehouseLocationId Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.warehouseLocationId}.
   * @param inventoryStatusId Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.inventoryStatusId}.
   * @param itemBatchNumber Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.itemSerialNumber}.
   * @param inventoryGtdId Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.inventoryGtdId}.
   * @param inventoryOwnerId Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.inventoryOwnerId}.
   * @param inventoryProfileId Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.inventoryProfileId}.
   * @returns A request builder for creating requests to retrieve one `SourceSystemWarehouseInventoryOnhandReportLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reportNumber: DeserializedType<T, 'Edm.Guid'>,
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
  ): GetByKeyRequestBuilder<
    SourceSystemWarehouseInventoryOnhandReportLines<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      SourceSystemWarehouseInventoryOnhandReportLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ReportNumber: reportNumber,
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
   * Returns a request builder for updating an entity of type `SourceSystemWarehouseInventoryOnhandReportLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SourceSystemWarehouseInventoryOnhandReportLines`.
   */
  update(
    entity: SourceSystemWarehouseInventoryOnhandReportLines<T>
  ): UpdateRequestBuilder<
    SourceSystemWarehouseInventoryOnhandReportLines<T>,
    T
  > {
    return new UpdateRequestBuilder<
      SourceSystemWarehouseInventoryOnhandReportLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SourceSystemWarehouseInventoryOnhandReportLines`.
   * @param dataAreaId Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.dataAreaId}.
   * @param reportNumber Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.reportNumber}.
   * @param productConfigurationId Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.productConfigurationId}.
   * @param productSizeId Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.productSizeId}.
   * @param productColorId Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.productColorId}.
   * @param productStyleId Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.productStyleId}.
   * @param productVersionId Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.productVersionId}.
   * @param warehouseId Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.warehouseId}.
   * @param warehouseLocationId Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.warehouseLocationId}.
   * @param inventoryStatusId Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.inventoryStatusId}.
   * @param itemBatchNumber Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.itemBatchNumber}.
   * @param itemSerialNumber Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.itemSerialNumber}.
   * @param inventoryGtdId Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.inventoryGtdId}.
   * @param inventoryOwnerId Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.inventoryOwnerId}.
   * @param inventoryProfileId Key property. See {@link SourceSystemWarehouseInventoryOnhandReportLines.inventoryProfileId}.
   * @returns A request builder for creating requests that delete an entity of type `SourceSystemWarehouseInventoryOnhandReportLines`.
   */
  delete(
    dataAreaId: string,
    reportNumber: string,
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
  ): DeleteRequestBuilder<
    SourceSystemWarehouseInventoryOnhandReportLines<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `SourceSystemWarehouseInventoryOnhandReportLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SourceSystemWarehouseInventoryOnhandReportLines` by taking the entity as a parameter.
   */
  delete(
    entity: SourceSystemWarehouseInventoryOnhandReportLines<T>
  ): DeleteRequestBuilder<
    SourceSystemWarehouseInventoryOnhandReportLines<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    reportNumber?: string,
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
  ): DeleteRequestBuilder<
    SourceSystemWarehouseInventoryOnhandReportLines<T>,
    T
  > {
    return new DeleteRequestBuilder<
      SourceSystemWarehouseInventoryOnhandReportLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      SourceSystemWarehouseInventoryOnhandReportLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReportNumber: reportNumber!,
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
