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
import type { ItemArrivalJournalLinesV2Api } from './ItemArrivalJournalLinesV2Api';
import { NoYes } from './NoYes';
import { InventTransType } from './InventTransType';
import { Warehouses, WarehousesType } from './Warehouses';
import {
  ReturnDispositionCodes,
  ReturnDispositionCodesType
} from './ReturnDispositionCodes';
import { ProductSizes, ProductSizesType } from './ProductSizes';
import {
  ItemArrivalJournalHeadersV2,
  ItemArrivalJournalHeadersV2Type
} from './ItemArrivalJournalHeadersV2';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import { ProductColors, ProductColorsType } from './ProductColors';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { ProductVersions, ProductVersionsType } from './ProductVersions';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import { LicensePlates, LicensePlatesType } from './LicensePlates';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import {
  WarehouseLocations,
  WarehouseLocationsType
} from './WarehouseLocations';

/**
 * This class represents the entity "ItemArrivalJournalLinesV2" of service "d365_metadata".
 */
export class ItemArrivalJournalLinesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ItemArrivalJournalLinesV2Type<T>
{
  /**
   * Technical entity name for ItemArrivalJournalLinesV2.
   */
  static override _entityName = 'ItemArrivalJournalLinesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItemArrivalJournalLinesV2 entity.
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
   * Return Item Number.
   * @nullable
   */
  declare returnItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Item Moved To Default Item Picking Warehouse Location.
   * @nullable
   */
  declare isItemMovedToDefaultItemPickingWarehouseLocation?: NoYes | null;
  /**
   * Reference Inventory Lot Id.
   * @nullable
   */
  declare referenceInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Item Serial Number.
   * @nullable
   */
  declare itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Inventory Status Id.
   * @nullable
   */
  declare receivingInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Return Order.
   * @nullable
   */
  declare isReturnOrder?: NoYes | null;
  /**
   * Receiving License Plate Number.
   * @nullable
   */
  declare receivingLicensePlateNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item Quantity.
   */
  declare itemQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Return Disposition Code Id.
   * @nullable
   */
  declare returnDispositionCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Receiving Warehouse Id.
   * @nullable
   */
  declare receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Reference Number.
   * @nullable
   */
  declare transactionReferenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Inventory Site Id.
   * @nullable
   */
  declare receivingInventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Number.
   * @nullable
   */
  declare accountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Reference Type.
   * @nullable
   */
  declare transactionReferenceType?: InventTransType | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Catch Weight Quantity.
   */
  declare itemCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receiving Warehouse Location Id.
   * @nullable
   */
  declare receivingWarehouseLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Quarantine Order Created For Received Item.
   * @nullable
   */
  declare isQuarantineOrderCreatedForReceivedItem?: NoYes | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare receivingWarehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link ReturnDispositionCodes} entity.
   */
  declare returnDispositionCode?: ReturnDispositionCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSizes} entity.
   */
  declare productSize?: ProductSizes<T> | null;
  /**
   * One-to-one navigation property to the {@link ItemArrivalJournalHeadersV2} entity.
   */
  declare itemArrivalJournalHeader?: ItemArrivalJournalHeadersV2<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare vendorV2?: VendorsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductColors} entity.
   */
  declare productColor?: ProductColors<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductVersions} entity.
   */
  declare productVersion?: ProductVersions<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductStyles} entity.
   */
  declare productStyle?: ProductStyles<T> | null;
  /**
   * One-to-one navigation property to the {@link LicensePlates} entity.
   */
  declare receivingLicensePlate?: LicensePlates<T> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare receivingInventorySite?: OperationalSites<T> | null;
  /**
   * One-to-one navigation property to the {@link WarehouseLocations} entity.
   */
  declare receivingWarehouseLocation?: WarehouseLocations<T> | null;

  constructor(_entityApi: ItemArrivalJournalLinesV2Api<T>) {
    super(_entityApi);
  }
}

export interface ItemArrivalJournalLinesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  returnItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  isItemMovedToDefaultItemPickingWarehouseLocation?: NoYes | null;
  referenceInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  receivingInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  isReturnOrder?: NoYes | null;
  receivingLicensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemQuantity: DeserializedType<T, 'Edm.Decimal'>;
  returnDispositionCodeId?: DeserializedType<T, 'Edm.String'> | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  transactionReferenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  receivingInventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  accountNumber?: DeserializedType<T, 'Edm.String'> | null;
  transactionReferenceType?: InventTransType | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  itemCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  receivingWarehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  isQuarantineOrderCreatedForReceivedItem?: NoYes | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  receivingWarehouse?: WarehousesType<T> | null;
  returnDispositionCode?: ReturnDispositionCodesType<T> | null;
  productSize?: ProductSizesType<T> | null;
  itemArrivalJournalHeader?: ItemArrivalJournalHeadersV2Type<T> | null;
  vendorV2?: VendorsV2Type<T> | null;
  productColor?: ProductColorsType<T> | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
  productVersion?: ProductVersionsType<T> | null;
  productStyle?: ProductStylesType<T> | null;
  receivingLicensePlate?: LicensePlatesType<T> | null;
  receivingInventorySite?: OperationalSitesType<T> | null;
  receivingWarehouseLocation?: WarehouseLocationsType<T> | null;
}
