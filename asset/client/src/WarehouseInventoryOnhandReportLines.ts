/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { WarehouseInventoryOnhandReportLinesApi } from './WarehouseInventoryOnhandReportLinesApi';
import {
  WarehouseInventoryOnhandReports,
  WarehouseInventoryOnhandReportsType
} from './WarehouseInventoryOnhandReports';

/**
 * This class represents the entity "WarehouseInventoryOnhandReportLines" of service "d365_metadata".
 */
export class WarehouseInventoryOnhandReportLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WarehouseInventoryOnhandReportLinesType<T>
{
  /**
   * Technical entity name for WarehouseInventoryOnhandReportLines.
   */
  static override _entityName = 'WarehouseInventoryOnhandReportLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseInventoryOnhandReportLines entity.
   */
  static _keys = [
    'dataAreaId',
    'ReportNumber',
    'ItemNumber',
    'ProductConfigurationId',
    'ProductSizeId',
    'ProductColorId',
    'ProductStyleId',
    'ProductVersionId',
    'WarehouseId',
    'WarehouseLocationId',
    'InventoryStatusId',
    'ItemBatchNumber',
    'ItemSerialNumber',
    'InventoryGtdId',
    'InventoryOwnerId',
    'InventoryProfileId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Report Number.
   */
  declare reportNumber: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Version Id.
   */
  declare productVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Id.
   */
  declare warehouseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Location Id.
   */
  declare warehouseLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Status Id.
   */
  declare inventoryStatusId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Batch Number.
   */
  declare itemBatchNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Serial Number.
   */
  declare itemSerialNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Gtd Id.
   */
  declare inventoryGtdId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Owner Id.
   */
  declare inventoryOwnerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Profile Id.
   */
  declare inventoryProfileId: DeserializedType<T, 'Edm.String'>;
  /**
   * On Hand Quantity.
   */
  declare onHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link WarehouseInventoryOnhandReports} entity.
   */
  declare warehouseInventoryOnhandReport?: WarehouseInventoryOnhandReports<T> | null;

  constructor(_entityApi: WarehouseInventoryOnhandReportLinesApi<T>) {
    super(_entityApi);
  }
}

export interface WarehouseInventoryOnhandReportLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  reportNumber: DeserializedType<T, 'Edm.Guid'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productVersionId: DeserializedType<T, 'Edm.String'>;
  warehouseId: DeserializedType<T, 'Edm.String'>;
  warehouseLocationId: DeserializedType<T, 'Edm.String'>;
  inventoryStatusId: DeserializedType<T, 'Edm.String'>;
  itemBatchNumber: DeserializedType<T, 'Edm.String'>;
  itemSerialNumber: DeserializedType<T, 'Edm.String'>;
  inventoryGtdId: DeserializedType<T, 'Edm.String'>;
  inventoryOwnerId: DeserializedType<T, 'Edm.String'>;
  inventoryProfileId: DeserializedType<T, 'Edm.String'>;
  onHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  warehouseInventoryOnhandReport?: WarehouseInventoryOnhandReportsType<T> | null;
}
