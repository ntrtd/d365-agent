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
import type { InventoryTransferJournalEntriesApi } from './InventoryTransferJournalEntriesApi';
import {
  InventoryTransferJournalHeaders,
  InventoryTransferJournalHeadersType
} from './InventoryTransferJournalHeaders';

/**
 * This class represents the entity "InventoryTransferJournalEntries" of service "d365_metadata".
 */
export class InventoryTransferJournalEntries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryTransferJournalEntriesType<T>
{
  /**
   * Technical entity name for InventoryTransferJournalEntries.
   */
  static override _entityName = 'InventoryTransferJournalEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryTransferJournalEntries entity.
   */
  static _keys = ['dataAreaId', 'JournalNumber', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Number.
   */
  declare journalNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Product Size Id.
   * @nullable
   */
  declare sourceProductSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Destination Product Version Id.
   * @nullable
   */
  declare destinationProductVersionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Source Product Version Id.
   * @nullable
   */
  declare sourceProductVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Product Configuration Id.
   * @nullable
   */
  declare sourceProductConfigurationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Destination Item Batch Number.
   * @nullable
   */
  declare destinationItemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Destination Warehouse Id.
   * @nullable
   */
  declare destinationWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Inventory Status Id.
   * @nullable
   */
  declare sourceInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Destination Product Configuration Id.
   * @nullable
   */
  declare destinationProductConfigurationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Destination License Plate Number.
   * @nullable
   */
  declare destinationLicensePlateNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Source Product Style Id.
   * @nullable
   */
  declare sourceProductStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Item Batch Number.
   * @nullable
   */
  declare sourceItemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Destination Inventory Status Id.
   * @nullable
   */
  declare destinationInventoryStatusId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Source Product Color Id.
   * @nullable
   */
  declare sourceProductColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Warehouse Location Id.
   * @nullable
   */
  declare sourceWarehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Cost Quantity.
   */
  declare unitCostQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Destination Inventory Owner Id.
   * @nullable
   */
  declare destinationInventoryOwnerId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Source Inventory Profile Id.
   * @nullable
   */
  declare sourceInventoryProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Destination Inventory Profile Id.
   * @nullable
   */
  declare destinationInventoryProfileId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Destination Warehouse Location Id.
   * @nullable
   */
  declare destinationWarehouseLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Destination Product Size Id.
   * @nullable
   */
  declare destinationProductSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Inventory Site Id.
   * @nullable
   */
  declare sourceInventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Warehouse Id.
   * @nullable
   */
  declare sourceWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Catch Weight Quantity.
   */
  declare catchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Destination Item Serial Number.
   * @nullable
   */
  declare destinationItemSerialNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Destination Inventory Site Id.
   * @nullable
   */
  declare destinationInventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source License Plate Number.
   * @nullable
   */
  declare sourceLicensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Inventory Owner Id.
   * @nullable
   */
  declare sourceInventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Destination Product Color Id.
   * @nullable
   */
  declare destinationProductColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Destination Inventory Gtd Id.
   * @nullable
   */
  declare destinationInventoryGtdId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Quantity.
   */
  declare inventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Item Serial Number.
   * @nullable
   */
  declare sourceItemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Journal Name Id.
   * @nullable
   */
  declare journalNameId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Inventory Gtd Id.
   * @nullable
   */
  declare sourceInventoryGtdId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Destination Product Style Id.
   * @nullable
   */
  declare destinationProductStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link InventoryTransferJournalHeaders} entity.
   */
  declare inventoryTransferJournalHeader?: InventoryTransferJournalHeaders<T> | null;

  constructor(_entityApi: InventoryTransferJournalEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryTransferJournalEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  sourceProductSizeId?: DeserializedType<T, 'Edm.String'> | null;
  destinationProductVersionId?: DeserializedType<T, 'Edm.String'> | null;
  sourceProductVersionId?: DeserializedType<T, 'Edm.String'> | null;
  sourceProductConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  destinationItemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  destinationWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  sourceInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  destinationProductConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  destinationLicensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sourceProductStyleId?: DeserializedType<T, 'Edm.String'> | null;
  sourceItemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  destinationInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  sourceProductColorId?: DeserializedType<T, 'Edm.String'> | null;
  sourceWarehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  unitCostQuantity: DeserializedType<T, 'Edm.Decimal'>;
  destinationInventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  sourceInventoryProfileId?: DeserializedType<T, 'Edm.String'> | null;
  destinationInventoryProfileId?: DeserializedType<T, 'Edm.String'> | null;
  destinationWarehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  destinationProductSizeId?: DeserializedType<T, 'Edm.String'> | null;
  sourceInventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  sourceWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  catchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  destinationItemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  destinationInventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  sourceLicensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  sourceInventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  destinationProductColorId?: DeserializedType<T, 'Edm.String'> | null;
  destinationInventoryGtdId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  sourceItemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  journalNameId?: DeserializedType<T, 'Edm.String'> | null;
  sourceInventoryGtdId?: DeserializedType<T, 'Edm.String'> | null;
  destinationProductStyleId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryTransferJournalHeader?: InventoryTransferJournalHeadersType<T> | null;
}
