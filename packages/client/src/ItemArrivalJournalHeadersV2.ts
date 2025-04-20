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
import type { ItemArrivalJournalHeadersV2Api } from './ItemArrivalJournalHeadersV2Api';
import { NoYes } from './NoYes';
import { InventTransType } from './InventTransType';
import {
  ItemArrivalJournalLinesV2,
  ItemArrivalJournalLinesV2Type
} from './ItemArrivalJournalLinesV2';
import { Warehouses, WarehousesType } from './Warehouses';
import {
  ReturnDispositionCodes,
  ReturnDispositionCodesType
} from './ReturnDispositionCodes';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import {
  WarehouseLocations,
  WarehouseLocationsType
} from './WarehouseLocations';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import { SystemUsers, SystemUsersType } from './SystemUsers';
import { LicensePlates, LicensePlatesType } from './LicensePlates';

/**
 * This class represents the entity "ItemArrivalJournalHeadersV2" of service "d365_metadata".
 */
export class ItemArrivalJournalHeadersV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ItemArrivalJournalHeadersV2Type<T>
{
  /**
   * Technical entity name for ItemArrivalJournalHeadersV2.
   */
  static override _entityName = 'ItemArrivalJournalHeadersV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItemArrivalJournalHeadersV2 entity.
   */
  static _keys = ['dataAreaId', 'JournalNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Number.
   */
  declare journalNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Posted.
   * @nullable
   */
  declare isPosted?: NoYes | null;
  /**
   * Default Receiving Site Id.
   * @nullable
   */
  declare defaultReceivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Return Item Number.
   * @nullable
   */
  declare defaultReturnItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Description.
   * @nullable
   */
  declare journalDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Item Moved To Default Item Picking Warehouse Location.
   * @nullable
   */
  declare isItemMovedToDefaultItemPickingWarehouseLocation?: NoYes | null;
  /**
   * Packing Slip Id.
   * @nullable
   */
  declare packingSlipId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Transaction Reference Type.
   * @nullable
   */
  declare defaultTransactionReferenceType?: InventTransType | null;
  /**
   * Journal Name Id.
   * @nullable
   */
  declare journalNameId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Receiving Warehouse Location Id.
   * @nullable
   */
  declare defaultReceivingWarehouseLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Return Disposition Code Id.
   * @nullable
   */
  declare defaultReturnDispositionCodeId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Account Number.
   * @nullable
   */
  declare defaultAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posted Date Time.
   */
  declare postedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Default Receiving Inventory Status Id.
   * @nullable
   */
  declare defaultReceivingInventoryStatusId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Quarantine Order Created For Received Item.
   * @nullable
   */
  declare isQuarantineOrderCreatedForReceivedItem?: NoYes | null;
  /**
   * Default Receiving Warehouse Id.
   * @nullable
   */
  declare defaultReceivingWarehouseId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Transaction Reference Number.
   * @nullable
   */
  declare defaultTransactionReferenceNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Are Lines Deleted After Posting.
   * @nullable
   */
  declare areLinesDeletedAfterPosting?: NoYes | null;
  /**
   * Posted User Id.
   * @nullable
   */
  declare postedUserId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Receiving License Plate Number.
   * @nullable
   */
  declare defaultReceivingLicensePlateNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-many navigation property to the {@link ItemArrivalJournalLinesV2} entity.
   */
  declare itemArrivalJournalLine: ItemArrivalJournalLinesV2<T>[];
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare defaultReceivingWarehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link ReturnDispositionCodes} entity.
   */
  declare defaultReturnDispositionCode?: ReturnDispositionCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare defaultVendorV2?: VendorsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link WarehouseLocations} entity.
   */
  declare defaultReceivingWarehouseLocation?: WarehouseLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare defaultReceivingSite?: OperationalSites<T> | null;
  /**
   * One-to-one navigation property to the {@link SystemUsers} entity.
   */
  declare postedUser?: SystemUsers<T> | null;
  /**
   * One-to-one navigation property to the {@link LicensePlates} entity.
   */
  declare defaultReceivingLicensePlate?: LicensePlates<T> | null;

  constructor(_entityApi: ItemArrivalJournalHeadersV2Api<T>) {
    super(_entityApi);
  }
}

export interface ItemArrivalJournalHeadersV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNumber: DeserializedType<T, 'Edm.String'>;
  isPosted?: NoYes | null;
  defaultReceivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  defaultReturnItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  journalDescription?: DeserializedType<T, 'Edm.String'> | null;
  isItemMovedToDefaultItemPickingWarehouseLocation?: NoYes | null;
  packingSlipId?: DeserializedType<T, 'Edm.String'> | null;
  defaultTransactionReferenceType?: InventTransType | null;
  journalNameId?: DeserializedType<T, 'Edm.String'> | null;
  defaultReceivingWarehouseLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  defaultReturnDispositionCodeId?: DeserializedType<T, 'Edm.String'> | null;
  defaultAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  postedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  defaultReceivingInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  isQuarantineOrderCreatedForReceivedItem?: NoYes | null;
  defaultReceivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  defaultTransactionReferenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  areLinesDeletedAfterPosting?: NoYes | null;
  postedUserId?: DeserializedType<T, 'Edm.String'> | null;
  defaultReceivingLicensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemArrivalJournalLine: ItemArrivalJournalLinesV2Type<T>[];
  defaultReceivingWarehouse?: WarehousesType<T> | null;
  defaultReturnDispositionCode?: ReturnDispositionCodesType<T> | null;
  defaultVendorV2?: VendorsV2Type<T> | null;
  defaultReceivingWarehouseLocation?: WarehouseLocationsType<T> | null;
  defaultReceivingSite?: OperationalSitesType<T> | null;
  postedUser?: SystemUsersType<T> | null;
  defaultReceivingLicensePlate?: LicensePlatesType<T> | null;
}
