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
import type { SourceSystemWarehouseInventoryOnhandReportLinesApi } from './SourceSystemWarehouseInventoryOnhandReportLinesApi';
import {
  WarehouseInventoryOnhandReports,
  WarehouseInventoryOnhandReportsType
} from './WarehouseInventoryOnhandReports';

/**
 * This class represents the entity "SourceSystemWarehouseInventoryOnhandReportLines" of service "d365_metadata".
 */
export class SourceSystemWarehouseInventoryOnhandReportLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SourceSystemWarehouseInventoryOnhandReportLinesType<T>
{
  /**
   * Technical entity name for SourceSystemWarehouseInventoryOnhandReportLines.
   */
  static override _entityName =
    'SourceSystemWarehouseInventoryOnhandReportLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SourceSystemWarehouseInventoryOnhandReportLines entity.
   */
  static _keys = [
    'dataAreaId',
    'ReportNumber',
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
   * Source System Inventory Owner Id.
   * @nullable
   */
  declare sourceSystemInventoryOwnerId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Source System Item Number.
   * @nullable
   */
  declare sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * On Hand Quantity.
   */
  declare onHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source System Item Master Number.
   * @nullable
   */
  declare sourceSystemItemMasterNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link WarehouseInventoryOnhandReports} entity.
   */
  declare warehouseInventoryOnhandReport?: WarehouseInventoryOnhandReports<T> | null;

  constructor(
    _entityApi: SourceSystemWarehouseInventoryOnhandReportLinesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface SourceSystemWarehouseInventoryOnhandReportLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  reportNumber: DeserializedType<T, 'Edm.Guid'>;
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
  sourceSystemInventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  onHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  sourceSystemItemMasterNumber?: DeserializedType<T, 'Edm.String'> | null;
  warehouseInventoryOnhandReport?: WarehouseInventoryOnhandReportsType<T> | null;
}
