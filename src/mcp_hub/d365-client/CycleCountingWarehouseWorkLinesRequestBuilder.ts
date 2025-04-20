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
import { CycleCountingWarehouseWorkLines } from './CycleCountingWarehouseWorkLines';

/**
 * Request builder class for operations supported on the {@link CycleCountingWarehouseWorkLines} entity.
 */
export class CycleCountingWarehouseWorkLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CycleCountingWarehouseWorkLines<T>, T> {
  /**
   * Returns a request builder for querying all `CycleCountingWarehouseWorkLines` entities.
   * @returns A request builder for creating requests to retrieve all `CycleCountingWarehouseWorkLines` entities.
   */
  getAll(): GetAllRequestBuilder<CycleCountingWarehouseWorkLines<T>, T> {
    return new GetAllRequestBuilder<CycleCountingWarehouseWorkLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CycleCountingWarehouseWorkLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CycleCountingWarehouseWorkLines`.
   */
  create(
    entity: CycleCountingWarehouseWorkLines<T>
  ): CreateRequestBuilder<CycleCountingWarehouseWorkLines<T>, T> {
    return new CreateRequestBuilder<CycleCountingWarehouseWorkLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CycleCountingWarehouseWorkLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link CycleCountingWarehouseWorkLines.dataAreaId}.
   * @param inventoryOwnerId Key property. See {@link CycleCountingWarehouseWorkLines.inventoryOwnerId}.
   * @param inventoryStatusId Key property. See {@link CycleCountingWarehouseWorkLines.inventoryStatusId}.
   * @param itemBatchNumber Key property. See {@link CycleCountingWarehouseWorkLines.itemBatchNumber}.
   * @param itemNumber Key property. See {@link CycleCountingWarehouseWorkLines.itemNumber}.
   * @param itemSerialNumber Key property. See {@link CycleCountingWarehouseWorkLines.itemSerialNumber}.
   * @param licensePlateNumber Key property. See {@link CycleCountingWarehouseWorkLines.licensePlateNumber}.
   * @param lineNumber Key property. See {@link CycleCountingWarehouseWorkLines.lineNumber}.
   * @param productColorId Key property. See {@link CycleCountingWarehouseWorkLines.productColorId}.
   * @param productConfigurationId Key property. See {@link CycleCountingWarehouseWorkLines.productConfigurationId}.
   * @param productSizeId Key property. See {@link CycleCountingWarehouseWorkLines.productSizeId}.
   * @param productStyleId Key property. See {@link CycleCountingWarehouseWorkLines.productStyleId}.
   * @param warehouseLocationId Key property. See {@link CycleCountingWarehouseWorkLines.warehouseLocationId}.
   * @param warehouseWorkId Key property. See {@link CycleCountingWarehouseWorkLines.warehouseWorkId}.
   * @returns A request builder for creating requests to retrieve one `CycleCountingWarehouseWorkLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventoryOwnerId: DeserializedType<T, 'Edm.String'>,
    inventoryStatusId: DeserializedType<T, 'Edm.String'>,
    itemBatchNumber: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    itemSerialNumber: DeserializedType<T, 'Edm.String'>,
    licensePlateNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    warehouseLocationId: DeserializedType<T, 'Edm.String'>,
    warehouseWorkId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CycleCountingWarehouseWorkLines<T>, T> {
    return new GetByKeyRequestBuilder<CycleCountingWarehouseWorkLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InventoryOwnerId: inventoryOwnerId,
        InventoryStatusId: inventoryStatusId,
        ItemBatchNumber: itemBatchNumber,
        ItemNumber: itemNumber,
        ItemSerialNumber: itemSerialNumber,
        LicensePlateNumber: licensePlateNumber,
        LineNumber: lineNumber,
        ProductColorId: productColorId,
        ProductConfigurationId: productConfigurationId,
        ProductSizeId: productSizeId,
        ProductStyleId: productStyleId,
        WarehouseLocationId: warehouseLocationId,
        WarehouseWorkId: warehouseWorkId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CycleCountingWarehouseWorkLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CycleCountingWarehouseWorkLines`.
   */
  update(
    entity: CycleCountingWarehouseWorkLines<T>
  ): UpdateRequestBuilder<CycleCountingWarehouseWorkLines<T>, T> {
    return new UpdateRequestBuilder<CycleCountingWarehouseWorkLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CycleCountingWarehouseWorkLines`.
   * @param dataAreaId Key property. See {@link CycleCountingWarehouseWorkLines.dataAreaId}.
   * @param inventoryOwnerId Key property. See {@link CycleCountingWarehouseWorkLines.inventoryOwnerId}.
   * @param inventoryStatusId Key property. See {@link CycleCountingWarehouseWorkLines.inventoryStatusId}.
   * @param itemBatchNumber Key property. See {@link CycleCountingWarehouseWorkLines.itemBatchNumber}.
   * @param itemNumber Key property. See {@link CycleCountingWarehouseWorkLines.itemNumber}.
   * @param itemSerialNumber Key property. See {@link CycleCountingWarehouseWorkLines.itemSerialNumber}.
   * @param licensePlateNumber Key property. See {@link CycleCountingWarehouseWorkLines.licensePlateNumber}.
   * @param lineNumber Key property. See {@link CycleCountingWarehouseWorkLines.lineNumber}.
   * @param productColorId Key property. See {@link CycleCountingWarehouseWorkLines.productColorId}.
   * @param productConfigurationId Key property. See {@link CycleCountingWarehouseWorkLines.productConfigurationId}.
   * @param productSizeId Key property. See {@link CycleCountingWarehouseWorkLines.productSizeId}.
   * @param productStyleId Key property. See {@link CycleCountingWarehouseWorkLines.productStyleId}.
   * @param warehouseLocationId Key property. See {@link CycleCountingWarehouseWorkLines.warehouseLocationId}.
   * @param warehouseWorkId Key property. See {@link CycleCountingWarehouseWorkLines.warehouseWorkId}.
   * @returns A request builder for creating requests that delete an entity of type `CycleCountingWarehouseWorkLines`.
   */
  delete(
    dataAreaId: string,
    inventoryOwnerId: string,
    inventoryStatusId: string,
    itemBatchNumber: string,
    itemNumber: string,
    itemSerialNumber: string,
    licensePlateNumber: string,
    lineNumber: BigNumber,
    productColorId: string,
    productConfigurationId: string,
    productSizeId: string,
    productStyleId: string,
    warehouseLocationId: string,
    warehouseWorkId: string
  ): DeleteRequestBuilder<CycleCountingWarehouseWorkLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CycleCountingWarehouseWorkLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CycleCountingWarehouseWorkLines` by taking the entity as a parameter.
   */
  delete(
    entity: CycleCountingWarehouseWorkLines<T>
  ): DeleteRequestBuilder<CycleCountingWarehouseWorkLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventoryOwnerId?: string,
    inventoryStatusId?: string,
    itemBatchNumber?: string,
    itemNumber?: string,
    itemSerialNumber?: string,
    licensePlateNumber?: string,
    lineNumber?: BigNumber,
    productColorId?: string,
    productConfigurationId?: string,
    productSizeId?: string,
    productStyleId?: string,
    warehouseLocationId?: string,
    warehouseWorkId?: string
  ): DeleteRequestBuilder<CycleCountingWarehouseWorkLines<T>, T> {
    return new DeleteRequestBuilder<CycleCountingWarehouseWorkLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CycleCountingWarehouseWorkLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventoryOwnerId: inventoryOwnerId!,
            InventoryStatusId: inventoryStatusId!,
            ItemBatchNumber: itemBatchNumber!,
            ItemNumber: itemNumber!,
            ItemSerialNumber: itemSerialNumber!,
            LicensePlateNumber: licensePlateNumber!,
            LineNumber: lineNumber!,
            ProductColorId: productColorId!,
            ProductConfigurationId: productConfigurationId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            WarehouseLocationId: warehouseLocationId!,
            WarehouseWorkId: warehouseWorkId!
          }
    );
  }
}
