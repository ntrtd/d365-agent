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
import type { InventoryCountingJournalLinesApi } from './InventoryCountingJournalLinesApi';
import { NoYes } from './NoYes';
import { InventoryOwners, InventoryOwnersType } from './InventoryOwners';
import {
  InventoryCountingReasonCodes,
  InventoryCountingReasonCodesType
} from './InventoryCountingReasonCodes';
import {
  InventoryCountingJournalHeaders,
  InventoryCountingJournalHeadersType
} from './InventoryCountingJournalHeaders';
import {
  ReleasedProductVariantsV2,
  ReleasedProductVariantsV2Type
} from './ReleasedProductVariantsV2';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "InventoryCountingJournalLines" of service "d365_metadata".
 */
export class InventoryCountingJournalLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryCountingJournalLinesType<T>
{
  /**
   * Technical entity name for InventoryCountingJournalLines.
   */
  static override _entityName = 'InventoryCountingJournalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryCountingJournalLines entity.
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
   * Counted Catch Weight Quantity.
   */
  declare countedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Site Id.
   * @nullable
   */
  declare inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Adjustment Quantity.
   */
  declare adjustmentQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * License Plate Number.
   * @nullable
   */
  declare licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * On Hand Quantity.
   */
  declare onHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Counted Quantity.
   */
  declare countedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Inventory Owner Id.
   * @nullable
   */
  declare inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Adjustment Catch Weight Quantity.
   */
  declare adjustmentCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Counting Reason Code.
   * @nullable
   */
  declare countingReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Counting Date.
   */
  declare countingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Inventory Status Id.
   * @nullable
   */
  declare inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Personnel Number.
   * @nullable
   */
  declare workerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Location Id.
   * @nullable
   */
  declare warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * On Hand Catch Weight Quantity.
   */
  declare onHandCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Catch Weight Unit Symbol.
   * @nullable
   */
  declare catchWeightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Serial Number.
   * @nullable
   */
  declare itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Counted Quantity Zero.
   * @nullable
   */
  declare isCountedQuantityZero?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link InventoryOwners} entity.
   */
  declare consignmentInventoryOwner?: InventoryOwners<T> | null;
  /**
   * One-to-one navigation property to the {@link InventoryCountingReasonCodes} entity.
   */
  declare inventoryCountingReasonCode?: InventoryCountingReasonCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link InventoryCountingJournalHeaders} entity.
   */
  declare inventoryCountingJournalHeader?: InventoryCountingJournalHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductVariantsV2} entity.
   */
  declare inventDimCombination?: ReleasedProductVariantsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare inventorySite?: OperationalSites<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;

  constructor(_entityApi: InventoryCountingJournalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryCountingJournalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  countedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  adjustmentQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  onHandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  countedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  adjustmentCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  countingReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  countingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  workerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  onHandCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  catchWeightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  isCountedQuantityZero?: NoYes | null;
  consignmentInventoryOwner?: InventoryOwnersType<T> | null;
  inventoryCountingReasonCode?: InventoryCountingReasonCodesType<T> | null;
  inventoryCountingJournalHeader?: InventoryCountingJournalHeadersType<T> | null;
  inventDimCombination?: ReleasedProductVariantsV2Type<T> | null;
  inventorySite?: OperationalSitesType<T> | null;
  worker?: WorkersType<T> | null;
}
