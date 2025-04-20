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
import type { WarehouseInventoryUpdateLogsApi } from './WarehouseInventoryUpdateLogsApi';
import { InventTransType } from './InventTransType';

/**
 * This class represents the entity "WarehouseInventoryUpdateLogs" of service "d365_metadata".
 */
export class WarehouseInventoryUpdateLogs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WarehouseInventoryUpdateLogsType<T>
{
  /**
   * Technical entity name for WarehouseInventoryUpdateLogs.
   */
  static override _entityName = 'WarehouseInventoryUpdateLogs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseInventoryUpdateLogs entity.
   */
  static _keys = ['dataAreaId', 'TransactionValidationTime', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Validation Time.
   */
  declare transactionValidationTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Category.
   * @nullable
   */
  declare referenceCategory?: InventTransType | null;
  /**
   * Handling Quantity.
   */
  declare handlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Owner Id.
   * @nullable
   */
  declare inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Id.
   * @nullable
   */
  declare referenceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Update Reference Id.
   */
  declare updateReferenceId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Inventory Profile Id.
   * @nullable
   */
  declare inventoryProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Status Id.
   * @nullable
   */
  declare inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Location Id.
   * @nullable
   */
  declare warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Disposition Code.
   * @nullable
   */
  declare dispositionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Handling Weight Unit Symbol.
   * @nullable
   */
  declare handlingWeightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Gtd Id.
   * @nullable
   */
  declare inventoryGtdId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Serial Number.
   * @nullable
   */
  declare itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Handling Quantity Unit Symbol.
   * @nullable
   */
  declare handlingQuantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Handling Weight.
   */
  declare handlingWeight: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: WarehouseInventoryUpdateLogsApi<T>) {
    super(_entityApi);
  }
}

export interface WarehouseInventoryUpdateLogsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transactionValidationTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lineNumber: DeserializedType<T, 'Edm.Int64'>;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  referenceCategory?: InventTransType | null;
  handlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  referenceId?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  updateReferenceId: DeserializedType<T, 'Edm.Guid'>;
  inventoryProfileId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  dispositionCode?: DeserializedType<T, 'Edm.String'> | null;
  handlingWeightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  inventoryGtdId?: DeserializedType<T, 'Edm.String'> | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  handlingQuantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  handlingWeight: DeserializedType<T, 'Edm.Decimal'>;
}
