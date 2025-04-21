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
import type { InventoryAdjustmentJournalEntriesV2Api } from './InventoryAdjustmentJournalEntriesV2Api';
import {
  InventoryAdjustmentJournalHeaders,
  InventoryAdjustmentJournalHeadersType
} from './InventoryAdjustmentJournalHeaders';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "InventoryAdjustmentJournalEntriesV2" of service "d365_metadata".
 */
export class InventoryAdjustmentJournalEntriesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryAdjustmentJournalEntriesV2Type<T>
{
  /**
   * Technical entity name for InventoryAdjustmentJournalEntriesV2.
   */
  static override _entityName = 'InventoryAdjustmentJournalEntriesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryAdjustmentJournalEntriesV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'JournalNumber',
    'ItemNumber',
    'ProductConfigurationId',
    'ProductColorId',
    'ProductSizeId',
    'ProductStyleId',
    'ProductVersionId',
    'InventorySiteId',
    'InventoryWarehouseId',
    'ItemBatchNumber',
    'ItemSerialNumber',
    'WarehouseLocationId',
    'LicensePlateNumber',
    'InventoryStatusId',
    'LineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Number.
   */
  declare journalNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Version Id.
   */
  declare productVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Site Id.
   */
  declare inventorySiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Warehouse Id.
   */
  declare inventoryWarehouseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Batch Number.
   */
  declare itemBatchNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Serial Number.
   */
  declare itemSerialNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Location Id.
   */
  declare warehouseLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * License Plate Number.
   */
  declare licensePlateNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Status Id.
   */
  declare inventoryStatusId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Unit Cost.
   */
  declare unitCost: DeserializedType<T, 'Edm.Decimal'>;
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
   * Inventory Quantity.
   */
  declare inventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link InventoryAdjustmentJournalHeaders} entity.
   */
  declare inventoryAdjustmentJournalHeader?: InventoryAdjustmentJournalHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: InventoryAdjustmentJournalEntriesV2Api<T>) {
    super(_entityApi);
  }
}

export interface InventoryAdjustmentJournalEntriesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNumber: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productVersionId: DeserializedType<T, 'Edm.String'>;
  inventorySiteId: DeserializedType<T, 'Edm.String'>;
  inventoryWarehouseId: DeserializedType<T, 'Edm.String'>;
  itemBatchNumber: DeserializedType<T, 'Edm.String'>;
  itemSerialNumber: DeserializedType<T, 'Edm.String'>;
  warehouseLocationId: DeserializedType<T, 'Edm.String'>;
  licensePlateNumber: DeserializedType<T, 'Edm.String'>;
  inventoryStatusId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventoryServiceAdjustmentOffsetDatasource?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  journalNameId?: DeserializedType<T, 'Edm.String'> | null;
  unitCostQuantity: DeserializedType<T, 'Edm.Decimal'>;
  catchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  inventoryServiceAdjustmentOffsetPhysicalMeasure?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  unitCost: DeserializedType<T, 'Edm.Decimal'>;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  fixedCostCharges: DeserializedType<T, 'Edm.Decimal'>;
  costAmount: DeserializedType<T, 'Edm.Decimal'>;
  inventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  inventoryAdjustmentJournalHeader?: InventoryAdjustmentJournalHeadersType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
