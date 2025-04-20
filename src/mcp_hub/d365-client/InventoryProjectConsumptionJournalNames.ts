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
import type { InventoryProjectConsumptionJournalNamesApi } from './InventoryProjectConsumptionJournalNamesApi';
import { DetailSummary } from './DetailSummary';
import { InventJournalVoucherChange } from './InventJournalVoucherChange';
import { ItemReservation } from './ItemReservation';
import { JournalVoucherDraw } from './JournalVoucherDraw';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "InventoryProjectConsumptionJournalNames" of service "d365_metadata".
 */
export class InventoryProjectConsumptionJournalNames<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryProjectConsumptionJournalNamesType<T>
{
  /**
   * Technical entity name for InventoryProjectConsumptionJournalNames.
   */
  static override _entityName = 'InventoryProjectConsumptionJournalNames';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryProjectConsumptionJournalNames entity.
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
   * Default Posting Summation Level.
   * @nullable
   */
  declare defaultPostingSummationLevel?: DetailSummary | null;
  /**
   * Default Voucher Number Allocation Rule.
   * @nullable
   */
  declare defaultVoucherNumberAllocationRule?: InventJournalVoucherChange | null;
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
   * Default Private User Group Id.
   * @nullable
   */
  declare defaultPrivateUserGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Voucher Number Sequence Code.
   * @nullable
   */
  declare defaultVoucherNumberSequenceCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Voucher Number Selection Rule.
   * @nullable
   */
  declare defaultVoucherNumberSelectionRule?: JournalVoucherDraw | null;
  /**
   * Is Posting Deleting Lines By Default.
   * @nullable
   */
  declare isPostingDeletingLinesByDefault?: NoYes | null;
  /**
   * Exclude Warehouse Inventory Update Logs.
   * @nullable
   */
  declare excludeWarehouseInventoryUpdateLogs?: NoYes | null;

  constructor(_entityApi: InventoryProjectConsumptionJournalNamesApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryProjectConsumptionJournalNamesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNameId: DeserializedType<T, 'Edm.String'>;
  defaultPostingSummationLevel?: DetailSummary | null;
  defaultVoucherNumberAllocationRule?: InventJournalVoucherChange | null;
  defaultInventoryReservationMethod?: ItemReservation | null;
  defaultJournalDescription?: DeserializedType<T, 'Edm.String'> | null;
  defaultPrivateUserGroupId?: DeserializedType<T, 'Edm.String'> | null;
  defaultVoucherNumberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  defaultVoucherNumberSelectionRule?: JournalVoucherDraw | null;
  isPostingDeletingLinesByDefault?: NoYes | null;
  excludeWarehouseInventoryUpdateLogs?: NoYes | null;
}
