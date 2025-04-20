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
import type { InventoryFixedAssetTransferJournalNamesApi } from './InventoryFixedAssetTransferJournalNamesApi';
import { InventJournalVoucherChange } from './InventJournalVoucherChange';
import { ItemReservation } from './ItemReservation';
import { NoYes } from './NoYes';
import { DetailSummary } from './DetailSummary';
import { JournalVoucherDraw } from './JournalVoucherDraw';

/**
 * This class represents the entity "InventoryFixedAssetTransferJournalNames" of service "d365_metadata".
 */
export class InventoryFixedAssetTransferJournalNames<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryFixedAssetTransferJournalNamesType<T>
{
  /**
   * Technical entity name for InventoryFixedAssetTransferJournalNames.
   */
  static override _entityName = 'InventoryFixedAssetTransferJournalNames';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryFixedAssetTransferJournalNames entity.
   */
  static _keys = ['dataAreaId', 'JournalNameId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Name Id.
   */
  declare journalNameId: DeserializedType<T, 'Edm.String'>;
  /**
   * Default Voucher Number Sequence Code.
   * @nullable
   */
  declare defaultVoucherNumberSequenceCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Voucher Number Allocation Rule.
   * @nullable
   */
  declare defaultVoucherNumberAllocationRule?: InventJournalVoucherChange | null;
  /**
   * Default Private User Group Id.
   * @nullable
   */
  declare defaultPrivateUserGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Inventory Reservation Method.
   * @nullable
   */
  declare defaultInventoryReservationMethod?: ItemReservation | null;
  /**
   * Default Journal Description.
   * @nullable
   */
  declare defaultJournalDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Posting Deleting Lines By Default.
   * @nullable
   */
  declare isPostingDeletingLinesByDefault?: NoYes | null;
  /**
   * Default Posting Summation Level.
   * @nullable
   */
  declare defaultPostingSummationLevel?: DetailSummary | null;
  /**
   * Default Voucher Number Selection Rule.
   * @nullable
   */
  declare defaultVoucherNumberSelectionRule?: JournalVoucherDraw | null;
  /**
   * Exclude Warehouse Inventory Update Logs.
   * @nullable
   */
  declare excludeWarehouseInventoryUpdateLogs?: NoYes | null;

  constructor(_entityApi: InventoryFixedAssetTransferJournalNamesApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryFixedAssetTransferJournalNamesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNameId: DeserializedType<T, 'Edm.String'>;
  defaultVoucherNumberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  defaultVoucherNumberAllocationRule?: InventJournalVoucherChange | null;
  defaultPrivateUserGroupId?: DeserializedType<T, 'Edm.String'> | null;
  defaultInventoryReservationMethod?: ItemReservation | null;
  defaultJournalDescription?: DeserializedType<T, 'Edm.String'> | null;
  isPostingDeletingLinesByDefault?: NoYes | null;
  defaultPostingSummationLevel?: DetailSummary | null;
  defaultVoucherNumberSelectionRule?: JournalVoucherDraw | null;
  excludeWarehouseInventoryUpdateLogs?: NoYes | null;
}
