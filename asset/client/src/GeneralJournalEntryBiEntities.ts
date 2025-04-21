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
import type { GeneralJournalEntryBiEntitiesApi } from './GeneralJournalEntryBiEntitiesApi';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { LedgerTransType } from './LedgerTransType';

/**
 * This class represents the entity "GeneralJournalEntryBiEntities" of service "d365_metadata".
 */
export class GeneralJournalEntryBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements GeneralJournalEntryBiEntitiesType<T>
{
  /**
   * Technical entity name for GeneralJournalEntryBiEntities.
   */
  static override _entityName = 'GeneralJournalEntryBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GeneralJournalEntryBiEntities entity.
   */
  static _keys = ['JournalNumber', 'FiscalCalendarYear', 'Ledger'];
  /**
   * Journal Number.
   */
  declare journalNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Calendar Year.
   */
  declare fiscalCalendarYear: DeserializedType<T, 'Edm.Int64'>;
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
   * Sys Created Transaction Id.
   */
  declare sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Subledger Voucher Data Area Id.
   * @nullable
   */
  declare subledgerVoucherDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Source Ledger Entry Posted.
   */
  declare budgetSourceLedgerEntryPosted: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ledger Entry Journal.
   */
  declare ledgerEntryJournal: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Category.
   * @nullable
   */
  declare journalCategory?: LedgerTransType | null;
  /**
   * Ledger Posting Journal.
   * @nullable
   */
  declare ledgerPostingJournal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ledger Posting Journal Data Area Id.
   * @nullable
   */
  declare ledgerPostingJournalDataAreaId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Subledger Journal Entry.
   */
  declare subledgerJournalEntry: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Document Number.
   * @nullable
   */
  declare documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Subledger Voucher.
   * @nullable
   */
  declare subledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Transfer Id.
   */
  declare transferId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Fiscal Calendar Period.
   */
  declare fiscalCalendarPeriod: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Acknowledgement Date.
   */
  declare acknowledgementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: GeneralJournalEntryBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface GeneralJournalEntryBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  journalNumber: DeserializedType<T, 'Edm.String'>;
  fiscalCalendarYear: DeserializedType<T, 'Edm.Int64'>;
  ledger: DeserializedType<T, 'Edm.Int64'>;
  postingLayer?: CurrentOperationsTax | null;
  sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  subledgerVoucherDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  budgetSourceLedgerEntryPosted: DeserializedType<T, 'Edm.Int64'>;
  ledgerEntryJournal: DeserializedType<T, 'Edm.Int64'>;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  journalCategory?: LedgerTransType | null;
  ledgerPostingJournal?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  ledgerPostingJournalDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  subledgerJournalEntry: DeserializedType<T, 'Edm.Int64'>;
  documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  subledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  transferId: DeserializedType<T, 'Edm.Int64'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fiscalCalendarPeriod: DeserializedType<T, 'Edm.Int64'>;
  acknowledgementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
