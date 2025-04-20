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
import type { LedgerTransSettlementsApi } from './LedgerTransSettlementsApi';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { LedgerPostingType } from './LedgerPostingType';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "LedgerTransSettlements" of service "d365_metadata".
 */
export class LedgerTransSettlements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerTransSettlementsType<T>
{
  /**
   * Technical entity name for LedgerTransSettlements.
   */
  static override _entityName = 'LedgerTransSettlements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerTransSettlements entity.
   */
  static _keys = ['GeneralJournalAccountEntry'];
  /**
   * General Journal Account Entry.
   */
  declare generalJournalAccountEntry: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Posting Layer.
   * @nullable
   */
  declare postingLayer?: CurrentOperationsTax | null;
  /**
   * Date Processed.
   */
  declare dateProcessed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Settle Date.
   */
  declare settleDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Automation Rule.
   * @nullable
   */
  declare automationRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Text.
   * @nullable
   */
  declare text?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Currency Amount.
   */
  declare reportingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount.
   */
  declare transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Code.
   * @nullable
   */
  declare transactionCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger.
   */
  declare ledger: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Marked.
   * @nullable
   */
  declare marked?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Currency Amount.
   */
  declare accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ledger Account Display Value.
   * @nullable
   */
  declare ledgerAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Number.
   * @nullable
   */
  declare documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settle Id.
   * @nullable
   */
  declare settleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Subledger Voucher.
   * @nullable
   */
  declare subledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Type.
   * @nullable
   */
  declare postingType?: LedgerPostingType | null;
  /**
   * Main Account.
   */
  declare mainAccount: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Journal Number.
   * @nullable
   */
  declare journalNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Original Transaction Date.
   */
  declare originalTransactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare ledgerDimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: LedgerTransSettlementsApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerTransSettlementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  generalJournalAccountEntry: DeserializedType<T, 'Edm.Int64'>;
  postingLayer?: CurrentOperationsTax | null;
  dateProcessed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  settleDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  automationRule?: DeserializedType<T, 'Edm.String'> | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  text?: DeserializedType<T, 'Edm.String'> | null;
  reportingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  ledger: DeserializedType<T, 'Edm.Int64'>;
  marked?: DeserializedType<T, 'Edm.String'> | null;
  accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  ledgerAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  settleId?: DeserializedType<T, 'Edm.String'> | null;
  subledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  postingType?: LedgerPostingType | null;
  mainAccount: DeserializedType<T, 'Edm.Int64'>;
  journalNumber?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  originalTransactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  ledgerDimensionCombination?: DimensionCombinationsType<T> | null;
}
