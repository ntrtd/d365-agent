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
import type { SubledgerJournalAccountEntryBiEntitiesApi } from './SubledgerJournalAccountEntryBiEntitiesApi';
import { TransferPolicy } from './TransferPolicy';
import { SubledgerJournalAccountEntryEventRole } from './SubledgerJournalAccountEntryEventRole';
import { NoYes } from './NoYes';
import { LedgerPostingType } from './LedgerPostingType';
import { DebitCredit } from './DebitCredit';

/**
 * This class represents the entity "SubledgerJournalAccountEntryBiEntities" of service "d365_metadata".
 */
export class SubledgerJournalAccountEntryBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubledgerJournalAccountEntryBiEntitiesType<T>
{
  /**
   * Technical entity name for SubledgerJournalAccountEntryBiEntities.
   */
  static override _entityName = 'SubledgerJournalAccountEntryBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubledgerJournalAccountEntryBiEntities entity.
   */
  static _keys = ['SourceKey'];
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Created Transaction Id.
   */
  declare sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Exchange Rate Date.
   */
  declare exchangeRateDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Transferred In Detail.
   * @nullable
   */
  declare isTransferredInDetail?: TransferPolicy | null;
  /**
   * Reporting Currency Amount.
   */
  declare reportingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Account Entry Event Role.
   * @nullable
   */
  declare accountEntryEventRole?: SubledgerJournalAccountEntryEventRole | null;
  /**
   * Original Transfer Policy.
   * @nullable
   */
  declare originalTransferPolicy?: TransferPolicy | null;
  /**
   * Transaction Currency Amount.
   */
  declare transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency.
   * @nullable
   */
  declare transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Accounting Currency Amount.
   */
  declare accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Correction.
   * @nullable
   */
  declare isCorrection?: NoYes | null;
  /**
   * Subledger Journal Entry.
   */
  declare subledgerJournalEntry: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reporting Exchange Rate.
   */
  declare reportingExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ledger Dimension Values Json.
   * @nullable
   */
  declare ledgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * General Journal Account Entry.
   */
  declare generalJournalAccountEntry: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Posting Type.
   * @nullable
   */
  declare postingType?: LedgerPostingType | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Historical Exchange Rate Date.
   */
  declare historicalExchangeRateDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Exchange Rate.
   */
  declare sysExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Side.
   * @nullable
   */
  declare side?: DebitCredit | null;
  /**
   * Sys Reporting Exchange Rate.
   */
  declare sysReportingExchangeRate: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: SubledgerJournalAccountEntryBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SubledgerJournalAccountEntryBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  exchangeRateDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isTransferredInDetail?: TransferPolicy | null;
  reportingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  accountEntryEventRole?: SubledgerJournalAccountEntryEventRole | null;
  originalTransferPolicy?: TransferPolicy | null;
  transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  isCorrection?: NoYes | null;
  subledgerJournalEntry: DeserializedType<T, 'Edm.Int64'>;
  reportingExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  ledgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
  generalJournalAccountEntry: DeserializedType<T, 'Edm.Int64'>;
  postingType?: LedgerPostingType | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  historicalExchangeRateDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  side?: DebitCredit | null;
  sysReportingExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
}
