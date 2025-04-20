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
import { CycleCountingWarehouseWorkLinesV2 } from './CycleCountingWarehouseWorkLinesV2';

/**
 * Request builder class for operations supported on the {@link CycleCountingWarehouseWorkLinesV2} entity.
 */
export class CycleCountingWarehouseWorkLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CycleCountingWarehouseWorkLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `CycleCountingWarehouseWorkLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `CycleCountingWarehouseWorkLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<CycleCountingWarehouseWorkLinesV2<T>, T> {
    return new GetAllRequestBuilder<CycleCountingWarehouseWorkLinesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CycleCountingWarehouseWorkLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CycleCountingWarehouseWorkLinesV2`.
   */
  create(
    entity: CycleCountingWarehouseWorkLinesV2<T>
  ): CreateRequestBuilder<CycleCountingWarehouseWorkLinesV2<T>, T> {
    return new CreateRequestBuilder<CycleCountingWarehouseWorkLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CycleCountingWarehouseWorkLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link CycleCountingWarehouseWorkLinesV2.dataAreaId}.
   * @param inventoryOwnerId Key property. See {@link CycleCountingWarehouseWorkLinesV2.inventoryOwnerId}.
   * @param inventoryStatusId Key property. See {@link CycleCountingWarehouseWorkLinesV2.inventoryStatusId}.
   * @param itemBatchNumber Key property. See {@link CycleCountingWarehouseWorkLinesV2.itemBatchNumber}.
   * @param itemNumber Key property. See {@link CycleCountingWarehouseWorkLinesV2.itemNumber}.
   * @param itemSerialNumber Key property. See {@link CycleCountingWarehouseWorkLinesV2.itemSerialNumber}.
   * @param licensePlateNumber Key property. See {@link CycleCountingWarehouseWorkLinesV2.licensePlateNumber}.
   * @param lineNumber Key property. See {@link CycleCountingWarehouseWorkLinesV2.lineNumber}.
   * @param productColorId Key property. See {@link CycleCountingWarehouseWorkLinesV2.productColorId}.
   * @param productConfigurationId Key property. See {@link CycleCountingWarehouseWorkLinesV2.productConfigurationId}.
   * @param productSizeId Key property. See {@link CycleCountingWarehouseWorkLinesV2.productSizeId}.
   * @param productStyleId Key property. See {@link CycleCountingWarehouseWorkLinesV2.productStyleId}.
   * @param productVersionId Key property. See {@link CycleCountingWarehouseWorkLinesV2.productVersionId}.
   * @param warehouseLocationId Key property. See {@link CycleCountingWarehouseWorkLinesV2.warehouseLocationId}.
   * @param warehouseWorkId Key property. See {@link CycleCountingWarehouseWorkLinesV2.warehouseWorkId}.
   * @returns A request builder for creating requests to retrieve one `CycleCountingWarehouseWorkLinesV2` entity based on its keys.
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
  ): GetByKeyRequestBuilder<CycleCountingWarehouseWorkLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<CycleCountingWarehouseWorkLinesV2<T>, T>(
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
   * Returns a request builder for updating an entity of type `CycleCountingWarehouseWorkLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CycleCountingWarehouseWorkLinesV2`.
   */
  update(
    entity: CycleCountingWarehouseWorkLinesV2<T>
  ): UpdateRequestBuilder<CycleCountingWarehouseWorkLinesV2<T>, T> {
    return new UpdateRequestBuilder<CycleCountingWarehouseWorkLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CycleCountingWarehouseWorkLinesV2`.
   * @param dataAreaId Key property. See {@link CycleCountingWarehouseWorkLinesV2.dataAreaId}.
   * @param inventoryOwnerId Key property. See {@link CycleCountingWarehouseWorkLinesV2.inventoryOwnerId}.
   * @param inventoryStatusId Key property. See {@link CycleCountingWarehouseWorkLinesV2.inventoryStatusId}.
   * @param itemBatchNumber Key property. See {@link CycleCountingWarehouseWorkLinesV2.itemBatchNumber}.
   * @param itemNumber Key property. See {@link CycleCountingWarehouseWorkLinesV2.itemNumber}.
   * @param itemSerialNumber Key property. See {@link CycleCountingWarehouseWorkLinesV2.itemSerialNumber}.
   * @param licensePlateNumber Key property. See {@link CycleCountingWarehouseWorkLinesV2.licensePlateNumber}.
   * @param lineNumber Key property. See {@link CycleCountingWarehouseWorkLinesV2.lineNumber}.
   * @param productColorId Key property. See {@link CycleCountingWarehouseWorkLinesV2.productColorId}.
   * @param productConfigurationId Key property. See {@link CycleCountingWarehouseWorkLinesV2.productConfigurationId}.
   * @param productSizeId Key property. See {@link CycleCountingWarehouseWorkLinesV2.productSizeId}.
   * @param productStyleId Key property. See {@link CycleCountingWarehouseWorkLinesV2.productStyleId}.
   * @param productVersionId Key property. See {@link CycleCountingWarehouseWorkLinesV2.productVersionId}.
   * @param warehouseLocationId Key property. See {@link CycleCountingWarehouseWorkLinesV2.warehouseLocationId}.
   * @param warehouseWorkId Key property. See {@link CycleCountingWarehouseWorkLinesV2.warehouseWorkId}.
   * @returns A request builder for creating requests that delete an entity of type `CycleCountingWarehouseWorkLinesV2`.
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
  ): DeleteRequestBuilder<CycleCountingWarehouseWorkLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CycleCountingWarehouseWorkLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CycleCountingWarehouseWorkLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: CycleCountingWarehouseWorkLinesV2<T>
  ): DeleteRequestBuilder<CycleCountingWarehouseWorkLinesV2<T>, T>;
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
  ): DeleteRequestBuilder<CycleCountingWarehouseWorkLinesV2<T>, T> {
    return new DeleteRequestBuilder<CycleCountingWarehouseWorkLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CycleCountingWarehouseWorkLinesV2
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
