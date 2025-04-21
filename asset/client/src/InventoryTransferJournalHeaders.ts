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
import type { InventoryTransferJournalHeadersApi } from './InventoryTransferJournalHeadersApi';
import { NoYes } from './NoYes';
import { ItemReservation } from './ItemReservation';
import { DetailSummary } from './DetailSummary';
import { InventJournalVoucherChange } from './InventJournalVoucherChange';
import { JournalVoucherDraw } from './JournalVoucherDraw';
import {
  InventoryTransferJournalEntries,
  InventoryTransferJournalEntriesType
} from './InventoryTransferJournalEntries';

/**
 * This class represents the entity "InventoryTransferJournalHeaders" of service "d365_metadata".
 */
export class InventoryTransferJournalHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryTransferJournalHeadersType<T>
{
  /**
   * Technical entity name for InventoryTransferJournalHeaders.
   */
  static override _entityName = 'InventoryTransferJournalHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryTransferJournalHeaders entity.
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
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Warehouse Id.
   * @nullable
   */
  declare defaultWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reservation Mode.
   * @nullable
   */
  declare reservationMode?: ItemReservation | null;
  /**
   * Posting Detail Level.
   * @nullable
   */
  declare postingDetailLevel?: DetailSummary | null;
  /**
   * Default Inventory Site Id.
   * @nullable
   */
  declare defaultInventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Name Id.
   * @nullable
   */
  declare journalNameId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher Number Selection Rule.
   * @nullable
   */
  declare voucherNumberSelectionRule?: InventJournalVoucherChange | null;
  /**
   * Posted Date Time.
   */
  declare postedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Voucher Number Allocation Rule.
   * @nullable
   */
  declare voucherNumberAllocationRule?: JournalVoucherDraw | null;
  /**
   * Voucher Number Sequence Code.
   * @nullable
   */
  declare voucherNumberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-many navigation property to the {@link InventoryTransferJournalEntries} entity.
   */
  declare inventoryTransferJournalEntry: InventoryTransferJournalEntries<T>[];

  constructor(_entityApi: InventoryTransferJournalHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryTransferJournalHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNumber: DeserializedType<T, 'Edm.String'>;
  isPosted?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  defaultWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  reservationMode?: ItemReservation | null;
  postingDetailLevel?: DetailSummary | null;
  defaultInventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  journalNameId?: DeserializedType<T, 'Edm.String'> | null;
  voucherNumberSelectionRule?: InventJournalVoucherChange | null;
  postedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  voucherNumberAllocationRule?: JournalVoucherDraw | null;
  voucherNumberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  areLinesDeletedAfterPosting?: NoYes | null;
  postedUserId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryTransferJournalEntry: InventoryTransferJournalEntriesType<T>[];
}
