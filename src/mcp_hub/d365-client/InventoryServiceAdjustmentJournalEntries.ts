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
import type { InventoryServiceAdjustmentJournalEntriesApi } from './InventoryServiceAdjustmentJournalEntriesApi';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  InventoryServiceAdjustmentJournalHeaders,
  InventoryServiceAdjustmentJournalHeadersType
} from './InventoryServiceAdjustmentJournalHeaders';

/**
 * This class represents the entity "InventoryServiceAdjustmentJournalEntries" of service "d365_metadata".
 */
export class InventoryServiceAdjustmentJournalEntries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryServiceAdjustmentJournalEntriesType<T>
{
  /**
   * Technical entity name for InventoryServiceAdjustmentJournalEntries.
   */
  static override _entityName = 'InventoryServiceAdjustmentJournalEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryServiceAdjustmentJournalEntries entity.
   */
  static _keys = ['dataAreaId', 'InventoryServiceTransactionId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Service Transaction Id.
   */
  declare inventoryServiceTransactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Journal Number.
   * @nullable
   */
  declare journalNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Site Id.
   * @nullable
   */
  declare inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Service Adjustment Offset Datasource.
   * @nullable
   */
  declare inventoryServiceAdjustmentOffsetDatasource?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Journal Name Id.
   * @nullable
   */
  declare journalNameId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Cost Quantity.
   */
  declare unitCostQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Warehouse Id.
   * @nullable
   */
  declare inventoryWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Catch Weight Quantity.
   */
  declare catchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Service Adjustment Offset Physical Measure.
   * @nullable
   */
  declare inventoryServiceAdjustmentOffsetPhysicalMeasure?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Inventory Status Id.
   * @nullable
   */
  declare inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Location Id.
   * @nullable
   */
  declare warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Cost.
   */
  declare unitCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fixed Cost Charges.
   */
  declare fixedCostCharges: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cost Amount.
   */
  declare costAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * License Plate Number.
   * @nullable
   */
  declare licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Quantity.
   */
  declare inventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link InventoryServiceAdjustmentJournalHeaders} entity.
   */
  declare inventoryServiceAdjustmentJournalHeader?: InventoryServiceAdjustmentJournalHeaders<T> | null;

  constructor(_entityApi: InventoryServiceAdjustmentJournalEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryServiceAdjustmentJournalEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventoryServiceTransactionId: DeserializedType<T, 'Edm.String'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  journalNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  inventoryServiceAdjustmentOffsetDatasource?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  journalNameId?: DeserializedType<T, 'Edm.String'> | null;
  unitCostQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  catchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  inventoryServiceAdjustmentOffsetPhysicalMeasure?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  unitCost: DeserializedType<T, 'Edm.Decimal'>;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  fixedCostCharges: DeserializedType<T, 'Edm.Decimal'>;
  costAmount: DeserializedType<T, 'Edm.Decimal'>;
  licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  inventoryServiceAdjustmentJournalHeader?: InventoryServiceAdjustmentJournalHeadersType<T> | null;
}
