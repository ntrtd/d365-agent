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
import type { WhsSourceSystemItemInventoryUpdateLogsApi } from './WhsSourceSystemItemInventoryUpdateLogsApi';
import { InventTransType } from './InventTransType';

/**
 * This class represents the entity "WHSSourceSystemItemInventoryUpdateLogs" of service "d365_metadata".
 */
export class WhsSourceSystemItemInventoryUpdateLogs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WhsSourceSystemItemInventoryUpdateLogsType<T>
{
  /**
   * Technical entity name for WhsSourceSystemItemInventoryUpdateLogs.
   */
  static override _entityName = 'WHSSourceSystemItemInventoryUpdateLogs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WhsSourceSystemItemInventoryUpdateLogs entity.
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
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Profile Id.
   * @nullable
   */
  declare inventoryProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Status Id.
   * @nullable
   */
  declare inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Handling Weight Unit Symbol.
   * @nullable
   */
  declare handlingWeightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Serial Number.
   * @nullable
   */
  declare itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Owner Id.
   * @nullable
   */
  declare inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System Inventory Owner Id.
   * @nullable
   */
  declare sourceSystemInventoryOwnerId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Handling Weight.
   */
  declare handlingWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Warehouse Location Id.
   * @nullable
   */
  declare warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System Id.
   * @nullable
   */
  declare sourceSystemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Handling Quantity Unit Symbol.
   * @nullable
   */
  declare handlingQuantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Gtd Id.
   * @nullable
   */
  declare inventoryGtdId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System Item Master Number.
   * @nullable
   */
  declare sourceSystemItemMasterNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System Item Number.
   * @nullable
   */
  declare sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Handling Quantity.
   */
  declare handlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reference Category.
   * @nullable
   */
  declare referenceCategory?: InventTransType | null;
  /**
   * Update Reference Id.
   */
  declare updateReferenceId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Reference Id.
   * @nullable
   */
  declare referenceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System Disposition Code.
   * @nullable
   */
  declare sourceSystemDispositionCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WhsSourceSystemItemInventoryUpdateLogsApi<T>) {
    super(_entityApi);
  }
}

export interface WhsSourceSystemItemInventoryUpdateLogsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transactionValidationTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lineNumber: DeserializedType<T, 'Edm.Int64'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryProfileId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  handlingWeightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemInventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  handlingWeight: DeserializedType<T, 'Edm.Decimal'>;
  warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemId?: DeserializedType<T, 'Edm.String'> | null;
  handlingQuantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  inventoryGtdId?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemItemMasterNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  handlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  referenceCategory?: InventTransType | null;
  updateReferenceId: DeserializedType<T, 'Edm.Guid'>;
  referenceId?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemDispositionCode?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
}
