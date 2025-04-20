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
import type { InventoryTagCountingJournalHeadersApi } from './InventoryTagCountingJournalHeadersApi';
import { NoYes } from './NoYes';
import { ItemReservation } from './ItemReservation';
import { DetailSummary } from './DetailSummary';
import { InventJournalVoucherChange } from './InventJournalVoucherChange';
import { JournalVoucherDraw } from './JournalVoucherDraw';
import { InventCountingStatusRegistrationPolicy } from './InventCountingStatusRegistrationPolicy';
import { Workers, WorkersType } from './Workers';
import {
  InventoryTagCountingJournalLines,
  InventoryTagCountingJournalLinesType
} from './InventoryTagCountingJournalLines';

/**
 * This class represents the entity "InventoryTagCountingJournalHeaders" of service "d365_metadata".
 */
export class InventoryTagCountingJournalHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryTagCountingJournalHeadersType<T>
{
  /**
   * Technical entity name for InventoryTagCountingJournalHeaders.
   */
  static override _entityName = 'InventoryTagCountingJournalHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryTagCountingJournalHeaders entity.
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
   * Is Counting License Plate Specific.
   * @nullable
   */
  declare isCountingLicensePlateSpecific?: NoYes | null;
  /**
   * Default Warehouse Id.
   * @nullable
   */
  declare defaultWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Counting Item Batch Specific.
   * @nullable
   */
  declare isCountingItemBatchSpecific?: NoYes | null;
  /**
   * Is Counting Warehouse Location Specific.
   * @nullable
   */
  declare isCountingWarehouseLocationSpecific?: NoYes | null;
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
   * Worker Personnel Number.
   * @nullable
   */
  declare workerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posted Date Time.
   */
  declare postedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Counting Item Serial Number Specific.
   * @nullable
   */
  declare isCountingItemSerialNumberSpecific?: NoYes | null;
  /**
   * Voucher Number Allocation Rule.
   * @nullable
   */
  declare voucherNumberAllocationRule?: JournalVoucherDraw | null;
  /**
   * Is Counting Warehouse Specific.
   * @nullable
   */
  declare isCountingWarehouseSpecific?: NoYes | null;
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
   * Counting Status Registration Policy.
   * @nullable
   */
  declare countingStatusRegistrationPolicy?: InventCountingStatusRegistrationPolicy | null;
  /**
   * Is Counting Inventory Status Specific.
   * @nullable
   */
  declare isCountingInventoryStatusSpecific?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-many navigation property to the {@link InventoryTagCountingJournalLines} entity.
   */
  declare inventoryTagCountingJournalLines: InventoryTagCountingJournalLines<T>[];

  constructor(_entityApi: InventoryTagCountingJournalHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryTagCountingJournalHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNumber: DeserializedType<T, 'Edm.String'>;
  isPosted?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isCountingLicensePlateSpecific?: NoYes | null;
  defaultWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  isCountingItemBatchSpecific?: NoYes | null;
  isCountingWarehouseLocationSpecific?: NoYes | null;
  reservationMode?: ItemReservation | null;
  postingDetailLevel?: DetailSummary | null;
  defaultInventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  journalNameId?: DeserializedType<T, 'Edm.String'> | null;
  voucherNumberSelectionRule?: InventJournalVoucherChange | null;
  workerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  postedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isCountingItemSerialNumberSpecific?: NoYes | null;
  voucherNumberAllocationRule?: JournalVoucherDraw | null;
  isCountingWarehouseSpecific?: NoYes | null;
  voucherNumberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  areLinesDeletedAfterPosting?: NoYes | null;
  postedUserId?: DeserializedType<T, 'Edm.String'> | null;
  countingStatusRegistrationPolicy?: InventCountingStatusRegistrationPolicy | null;
  isCountingInventoryStatusSpecific?: NoYes | null;
  worker?: WorkersType<T> | null;
  inventoryTagCountingJournalLines: InventoryTagCountingJournalLinesType<T>[];
}
