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
import type { SubledgerJournalEntryBiEntitiesApi } from './SubledgerJournalEntryBiEntitiesApi';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { SubledgerJournalEntryType } from './SubledgerJournalEntryType';
import { SubledgerJournalEntryStatus } from './SubledgerJournalEntryStatus';
import { ReferenceIdentityTransferStatus } from './ReferenceIdentityTransferStatus';

/**
 * This class represents the entity "SubledgerJournalEntryBiEntities" of service "d365_metadata".
 */
export class SubledgerJournalEntryBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubledgerJournalEntryBiEntitiesType<T>
{
  /**
   * Technical entity name for SubledgerJournalEntryBiEntities.
   */
  static override _entityName = 'SubledgerJournalEntryBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubledgerJournalEntryBiEntities entity.
   */
  static _keys = [
    'Ledger',
    'PostingLayer',
    'FiscalCalendarPeriod',
    'AccountingEvent',
    'Type',
    'Status',
    'SysModifiedDateTime'
  ];
  /**
   * Ledger.
   */
  declare ledger: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Posting Layer.
   * @nullable
   */
  declare postingLayer?: CurrentOperationsTax | null;
  /**
   * Fiscal Calendar Period.
   */
  declare fiscalCalendarPeriod: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Accounting Event.
   */
  declare accountingEvent: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: SubledgerJournalEntryType | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: SubledgerJournalEntryStatus | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Created Transaction Id.
   */
  declare sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Document Number.
   * @nullable
   */
  declare documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher Data Area Id.
   * @nullable
   */
  declare voucherDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Transfer Id.
   */
  declare transferId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Trans Txt.
   * @nullable
   */
  declare transTxt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Identity Transfer Status.
   * @nullable
   */
  declare referenceIdentityTransferStatus?: ReferenceIdentityTransferStatus | null;
  /**
   * Journal Number.
   * @nullable
   */
  declare journalNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SubledgerJournalEntryBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SubledgerJournalEntryBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  ledger: DeserializedType<T, 'Edm.Int64'>;
  postingLayer?: CurrentOperationsTax | null;
  fiscalCalendarPeriod: DeserializedType<T, 'Edm.Int64'>;
  accountingEvent: DeserializedType<T, 'Edm.Int64'>;
  type?: SubledgerJournalEntryType | null;
  status?: SubledgerJournalEntryStatus | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  voucherDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  transferId: DeserializedType<T, 'Edm.Int64'>;
  transTxt?: DeserializedType<T, 'Edm.String'> | null;
  referenceIdentityTransferStatus?: ReferenceIdentityTransferStatus | null;
  journalNumber?: DeserializedType<T, 'Edm.String'> | null;
}
