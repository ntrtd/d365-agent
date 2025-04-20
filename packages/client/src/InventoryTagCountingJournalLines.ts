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
import type { InventoryTagCountingJournalLinesApi } from './InventoryTagCountingJournalLinesApi';
import { NoYes } from './NoYes';
import { InventJournalTagStatus } from './InventJournalTagStatus';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import {
  InventoryTagCountingJournalHeaders,
  InventoryTagCountingJournalHeadersType
} from './InventoryTagCountingJournalHeaders';
import { ProductVersions, ProductVersionsType } from './ProductVersions';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { ProductColors, ProductColorsType } from './ProductColors';
import { Workers, WorkersType } from './Workers';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import { InventoryOwners, InventoryOwnersType } from './InventoryOwners';
import { ProductSizes, ProductSizesType } from './ProductSizes';

/**
 * This class represents the entity "InventoryTagCountingJournalLines" of service "d365_metadata".
 */
export class InventoryTagCountingJournalLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryTagCountingJournalLinesType<T>
{
  /**
   * Technical entity name for InventoryTagCountingJournalLines.
   */
  static override _entityName = 'InventoryTagCountingJournalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryTagCountingJournalLines entity.
   */
  static _keys = ['dataAreaId', 'JournalNumber', 'TagId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Number.
   */
  declare journalNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Tag Id.
   */
  declare tagId: DeserializedType<T, 'Edm.String'>;
  /**
   * Counted Quantity Unit Symbol.
   * @nullable
   */
  declare countedQuantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Counting Date.
   */
  declare countingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Status Id.
   * @nullable
   */
  declare inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Posted.
   * @nullable
   */
  declare isPosted?: NoYes | null;
  /**
   * Inventory Site Id.
   * @nullable
   */
  declare inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Inventory Owner Id.
   * @nullable
   */
  declare inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Location Id.
   * @nullable
   */
  declare warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Personnel Number.
   * @nullable
   */
  declare workerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tag Status.
   * @nullable
   */
  declare tagStatus?: InventJournalTagStatus | null;
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
   * Counted Catch Weight Quantity.
   */
  declare countedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Counted Quantity.
   */
  declare countedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * License Plate Number.
   * @nullable
   */
  declare licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare inventorySite?: OperationalSites<T> | null;
  /**
   * One-to-one navigation property to the {@link InventoryTagCountingJournalHeaders} entity.
   */
  declare inventoryTagCountingJournalHeader?: InventoryTagCountingJournalHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductVersions} entity.
   */
  declare productVersion?: ProductVersions<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductColors} entity.
   */
  declare productColor?: ProductColors<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductStyles} entity.
   */
  declare productStyle?: ProductStyles<T> | null;
  /**
   * One-to-one navigation property to the {@link InventoryOwners} entity.
   */
  declare consignmentInventoryOwner?: InventoryOwners<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSizes} entity.
   */
  declare productSize?: ProductSizes<T> | null;

  constructor(_entityApi: InventoryTagCountingJournalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryTagCountingJournalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNumber: DeserializedType<T, 'Edm.String'>;
  tagId: DeserializedType<T, 'Edm.String'>;
  countedQuantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  countingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  isPosted?: NoYes | null;
  inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  catchWeightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  workerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  tagStatus?: InventJournalTagStatus | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  countedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  countedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  inventorySite?: OperationalSitesType<T> | null;
  inventoryTagCountingJournalHeader?: InventoryTagCountingJournalHeadersType<T> | null;
  productVersion?: ProductVersionsType<T> | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
  productColor?: ProductColorsType<T> | null;
  worker?: WorkersType<T> | null;
  productStyle?: ProductStylesType<T> | null;
  consignmentInventoryOwner?: InventoryOwnersType<T> | null;
  productSize?: ProductSizesType<T> | null;
}
