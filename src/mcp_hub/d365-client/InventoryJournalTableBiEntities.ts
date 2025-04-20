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
import type { InventoryJournalTableBiEntitiesApi } from './InventoryJournalTableBiEntitiesApi';
import { InventCountingStatusRegistrationPolicy } from './InventCountingStatusRegistrationPolicy';
import { ItemReservation } from './ItemReservation';
import { RetailReplenishmentType } from './RetailReplenishmentType';
import { InventoryServiceJournalExpectedStatus } from './InventoryServiceJournalExpectedStatus';
import { InventJournalType } from './InventJournalType';
import { NoYes } from './NoYes';
import { InventJournalOriginType } from './InventJournalOriginType';
import { InventJournalVoucherChange } from './InventJournalVoucherChange';
import { DetailSummary } from './DetailSummary';
import { RetailRetailStatusTypeBase } from './RetailRetailStatusTypeBase';
import { PlInventDocType } from './PlInventDocType';
import { InventJournalWorkflowApprovalStatus } from './InventJournalWorkflowApprovalStatus';
import { JournalVoucherDraw } from './JournalVoucherDraw';

/**
 * This class represents the entity "InventoryJournalTableBiEntities" of service "d365_metadata".
 */
export class InventoryJournalTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryJournalTableBiEntitiesType<T>
{
  /**
   * Technical entity name for InventoryJournalTableBiEntities.
   */
  static override _entityName = 'InventoryJournalTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryJournalTableBiEntities entity.
   */
  static _keys = ['dataAreaId', 'JournalId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Id.
   */
  declare journalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Counting Status Registration Policy.
   * @nullable
   */
  declare countingStatusRegistrationPolicy?: InventCountingStatusRegistrationPolicy | null;
  /**
   * Reservation.
   * @nullable
   */
  declare reservation?: ItemReservation | null;
  /**
   * Invent Site Id.
   * @nullable
   */
  declare inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posted Date Time.
   */
  declare postedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Num Of Lines.
   */
  declare numOfLines: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Retail Replenishment Type.
   * @nullable
   */
  declare retailReplenishmentType?: RetailReplenishmentType | null;
  /**
   * Journal Id Orignal.
   * @nullable
   */
  declare journalIdOrignal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Service Journal Expected Status.
   * @nullable
   */
  declare inventoryServiceJournalExpectedStatus?: InventoryServiceJournalExpectedStatus | null;
  /**
   * Journal Type.
   * @nullable
   */
  declare journalType?: InventJournalType | null;
  /**
   * Packed Extensions.
   * @nullable
   */
  declare packedExtensions?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Session Login Date Time.
   */
  declare sessionLoginDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Session Id.
   */
  declare sessionId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * System Blocked.
   * @nullable
   */
  declare systemBlocked?: NoYes | null;
  /**
   * Fsh Replenishment Ref.
   * @nullable
   */
  declare fshReplenishmentRef?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Itm Over Under Trans Id.
   * @nullable
   */
  declare itmOverUnderTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Off Session Id Ru.
   * @nullable
   */
  declare offSessionIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Block User Group Id.
   * @nullable
   */
  declare blockUserGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source.
   * @nullable
   */
  declare source?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Origin Type.
   * @nullable
   */
  declare journalOriginType?: InventJournalOriginType | null;
  /**
   * Invent Location Id.
   * @nullable
   */
  declare inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Block User Id.
   * @nullable
   */
  declare blockUserId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher Change.
   * @nullable
   */
  declare voucherChange?: InventJournalVoucherChange | null;
  /**
   * Posted.
   * @nullable
   */
  declare posted?: NoYes | null;
  /**
   * Is Retail Committed.
   * @nullable
   */
  declare isRetailCommitted?: NoYes | null;
  /**
   * Detail Summary.
   * @nullable
   */
  declare detailSummary?: DetailSummary | null;
  /**
   * Storno Ru.
   * @nullable
   */
  declare stornoRu?: NoYes | null;
  /**
   * Invent Dim Fixed.
   */
  declare inventDimFixed: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Journal Name Id.
   * @nullable
   */
  declare journalNameId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Retail Status Type.
   * @nullable
   */
  declare retailRetailStatusType?: RetailRetailStatusTypeBase | null;
  /**
   * Invent Doc Type Pl.
   * @nullable
   */
  declare inventDocTypePl?: PlInventDocType | null;
  /**
   * Workflow Approval Status.
   * @nullable
   */
  declare workflowApprovalStatus?: InventJournalWorkflowApprovalStatus | null;
  /**
   * Voucher Draw.
   * @nullable
   */
  declare voucherDraw?: JournalVoucherDraw | null;
  /**
   * Delete Posted Lines.
   * @nullable
   */
  declare deletePostedLines?: NoYes | null;
  /**
   * Posted User Id.
   * @nullable
   */
  declare postedUserId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: InventoryJournalTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryJournalTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalId: DeserializedType<T, 'Edm.String'>;
  countingStatusRegistrationPolicy?: InventCountingStatusRegistrationPolicy | null;
  reservation?: ItemReservation | null;
  inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  postedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  numOfLines: DeserializedType<T, 'Edm.Int32'>;
  retailReplenishmentType?: RetailReplenishmentType | null;
  journalIdOrignal?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryServiceJournalExpectedStatus?: InventoryServiceJournalExpectedStatus | null;
  journalType?: InventJournalType | null;
  packedExtensions?: DeserializedType<T, 'Edm.Binary'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  sessionLoginDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sessionId: DeserializedType<T, 'Edm.Int32'>;
  systemBlocked?: NoYes | null;
  fshReplenishmentRef?: DeserializedType<T, 'Edm.String'> | null;
  itmOverUnderTransId?: DeserializedType<T, 'Edm.String'> | null;
  offSessionIdRu?: DeserializedType<T, 'Edm.String'> | null;
  blockUserGroupId?: DeserializedType<T, 'Edm.String'> | null;
  source?: DeserializedType<T, 'Edm.String'> | null;
  journalOriginType?: InventJournalOriginType | null;
  inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  blockUserId?: DeserializedType<T, 'Edm.String'> | null;
  voucherChange?: InventJournalVoucherChange | null;
  posted?: NoYes | null;
  isRetailCommitted?: NoYes | null;
  detailSummary?: DetailSummary | null;
  stornoRu?: NoYes | null;
  inventDimFixed: DeserializedType<T, 'Edm.Int32'>;
  journalNameId?: DeserializedType<T, 'Edm.String'> | null;
  retailRetailStatusType?: RetailRetailStatusTypeBase | null;
  inventDocTypePl?: PlInventDocType | null;
  workflowApprovalStatus?: InventJournalWorkflowApprovalStatus | null;
  voucherDraw?: JournalVoucherDraw | null;
  deletePostedLines?: NoYes | null;
  postedUserId?: DeserializedType<T, 'Edm.String'> | null;
}
