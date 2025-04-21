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
import { CycleCountingWarehouseWorkLinesV3 } from './CycleCountingWarehouseWorkLinesV3';

/**
 * Request builder class for operations supported on the {@link CycleCountingWarehouseWorkLinesV3} entity.
 */
export class CycleCountingWarehouseWorkLinesV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CycleCountingWarehouseWorkLinesV3<T>, T> {
  /**
   * Returns a request builder for querying all `CycleCountingWarehouseWorkLinesV3` entities.
   * @returns A request builder for creating requests to retrieve all `CycleCountingWarehouseWorkLinesV3` entities.
   */
  getAll(): GetAllRequestBuilder<CycleCountingWarehouseWorkLinesV3<T>, T> {
    return new GetAllRequestBuilder<CycleCountingWarehouseWorkLinesV3<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CycleCountingWarehouseWorkLinesV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CycleCountingWarehouseWorkLinesV3`.
   */
  create(
    entity: CycleCountingWarehouseWorkLinesV3<T>
  ): CreateRequestBuilder<CycleCountingWarehouseWorkLinesV3<T>, T> {
    return new CreateRequestBuilder<CycleCountingWarehouseWorkLinesV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CycleCountingWarehouseWorkLinesV3` entity based on its keys.
   * @param dataAreaId Key property. See {@link CycleCountingWarehouseWorkLinesV3.dataAreaId}.
   * @param inventoryOwnerId Key property. See {@link CycleCountingWarehouseWorkLinesV3.inventoryOwnerId}.
   * @param inventoryStatusId Key property. See {@link CycleCountingWarehouseWorkLinesV3.inventoryStatusId}.
   * @param itemBatchNumber Key property. See {@link CycleCountingWarehouseWorkLinesV3.itemBatchNumber}.
   * @param itemNumber Key property. See {@link CycleCountingWarehouseWorkLinesV3.itemNumber}.
   * @param itemSerialNumber Key property. See {@link CycleCountingWarehouseWorkLinesV3.itemSerialNumber}.
   * @param licensePlateNumber Key property. See {@link CycleCountingWarehouseWorkLinesV3.licensePlateNumber}.
   * @param lineNumber Key property. See {@link CycleCountingWarehouseWorkLinesV3.lineNumber}.
   * @param productColorId Key property. See {@link CycleCountingWarehouseWorkLinesV3.productColorId}.
   * @param productConfigurationId Key property. See {@link CycleCountingWarehouseWorkLinesV3.productConfigurationId}.
   * @param productSizeId Key property. See {@link CycleCountingWarehouseWorkLinesV3.productSizeId}.
   * @param productStyleId Key property. See {@link CycleCountingWarehouseWorkLinesV3.productStyleId}.
   * @param productVersionId Key property. See {@link CycleCountingWarehouseWorkLinesV3.productVersionId}.
   * @param warehouseLocationId Key property. See {@link CycleCountingWarehouseWorkLinesV3.warehouseLocationId}.
   * @param warehouseWorkId Key property. See {@link CycleCountingWarehouseWorkLinesV3.warehouseWorkId}.
   * @returns A request builder for creating requests to retrieve one `CycleCountingWarehouseWorkLinesV3` entity based on its keys.
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
    productVersionId: DeserializedType<T, 'Edm.String'>,
    warehouseLocationId: DeserializedType<T, 'Edm.String'>,
    warehouseWorkId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CycleCountingWarehouseWorkLinesV3<T>, T> {
    return new GetByKeyRequestBuilder<CycleCountingWarehouseWorkLinesV3<T>, T>(
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
        ProductVersionId: productVersionId,
        WarehouseLocationId: warehouseLocationId,
        WarehouseWorkId: warehouseWorkId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CycleCountingWarehouseWorkLinesV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CycleCountingWarehouseWorkLinesV3`.
   */
  update(
    entity: CycleCountingWarehouseWorkLinesV3<T>
  ): UpdateRequestBuilder<CycleCountingWarehouseWorkLinesV3<T>, T> {
    return new UpdateRequestBuilder<CycleCountingWarehouseWorkLinesV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CycleCountingWarehouseWorkLinesV3`.
   * @param dataAreaId Key property. See {@link CycleCountingWarehouseWorkLinesV3.dataAreaId}.
   * @param inventoryOwnerId Key property. See {@link CycleCountingWarehouseWorkLinesV3.inventoryOwnerId}.
   * @param inventoryStatusId Key property. See {@link CycleCountingWarehouseWorkLinesV3.inventoryStatusId}.
   * @param itemBatchNumber Key property. See {@link CycleCountingWarehouseWorkLinesV3.itemBatchNumber}.
   * @param itemNumber Key property. See {@link CycleCountingWarehouseWorkLinesV3.itemNumber}.
   * @param itemSerialNumber Key property. See {@link CycleCountingWarehouseWorkLinesV3.itemSerialNumber}.
   * @param licensePlateNumber Key property. See {@link CycleCountingWarehouseWorkLinesV3.licensePlateNumber}.
   * @param lineNumber Key property. See {@link CycleCountingWarehouseWorkLinesV3.lineNumber}.
   * @param productColorId Key property. See {@link CycleCountingWarehouseWorkLinesV3.productColorId}.
   * @param productConfigurationId Key property. See {@link CycleCountingWarehouseWorkLinesV3.productConfigurationId}.
   * @param productSizeId Key property. See {@link CycleCountingWarehouseWorkLinesV3.productSizeId}.
   * @param productStyleId Key property. See {@link CycleCountingWarehouseWorkLinesV3.productStyleId}.
   * @param productVersionId Key property. See {@link CycleCountingWarehouseWorkLinesV3.productVersionId}.
   * @param warehouseLocationId Key property. See {@link CycleCountingWarehouseWorkLinesV3.warehouseLocationId}.
   * @param warehouseWorkId Key property. See {@link CycleCountingWarehouseWorkLinesV3.warehouseWorkId}.
   * @returns A request builder for creating requests that delete an entity of type `CycleCountingWarehouseWorkLinesV3`.
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
    productVersionId: string,
    warehouseLocationId: string,
    warehouseWorkId: string
  ): DeleteRequestBuilder<CycleCountingWarehouseWorkLinesV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CycleCountingWarehouseWorkLinesV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CycleCountingWarehouseWorkLinesV3` by taking the entity as a parameter.
   */
  delete(
    entity: CycleCountingWarehouseWorkLinesV3<T>
  ): DeleteRequestBuilder<CycleCountingWarehouseWorkLinesV3<T>, T>;
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
    productVersionId?: string,
    warehouseLocationId?: string,
    warehouseWorkId?: string
  ): DeleteRequestBuilder<CycleCountingWarehouseWorkLinesV3<T>, T> {
    return new DeleteRequestBuilder<CycleCountingWarehouseWorkLinesV3<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CycleCountingWarehouseWorkLinesV3
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
            ProductVersionId: productVersionId!,
            WarehouseLocationId: warehouseLocationId!,
            WarehouseWorkId: warehouseWorkId!
          }
    );
  }
}
