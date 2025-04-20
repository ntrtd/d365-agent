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
import type { SlipJournalTablesApi } from './SlipJournalTablesApi';
import { NoYes } from './NoYes';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { LedgerJournalType } from './LedgerJournalType';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { TaxObligationCompany } from './TaxObligationCompany';
import { RCashTransStatus } from './RCashTransStatus';
import { RCashDocType } from './RCashDocType';
import { LedgerJournalWfApprovalStatus } from './LedgerJournalWfApprovalStatus';
import { DetailSummary } from './DetailSummary';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "SlipJournalTables" of service "d365_metadata".
 */
export class SlipJournalTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SlipJournalTablesType<T>
{
  /**
   * Technical entity name for SlipJournalTables.
   */
  static override _entityName = 'SlipJournalTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SlipJournalTables entity.
   */
  static _keys = ['dataAreaId', 'JournalBatchNumber', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Batch Number.
   */
  declare journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Rate.
   * @nullable
   */
  declare fixedRate?: NoYes | null;
  /**
   * Number Allocated At Posting.
   * @nullable
   */
  declare numberAllocatedAtPosting?: NoYes | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Text.
   * @nullable
   */
  declare text?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Coll Bank Contributor Ru.
   * @nullable
   */
  declare cashCollBankContributorRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Name.
   * @nullable
   */
  declare journalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Account Type.
   * @nullable
   */
  declare offsetAccountType?: LedgerJournalAcType | null;
  /**
   * Journal Type.
   * @nullable
   */
  declare journalType?: LedgerJournalType | null;
  /**
   * Locked By System.
   * @nullable
   */
  declare lockedBySystem?: NoYes | null;
  /**
   * Posting Layer.
   * @nullable
   */
  declare postingLayer?: CurrentOperationsTax | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Lines Limit.
   */
  declare linesLimit: DeserializedType<T, 'Edm.Int32'>;
  /**
   * In Use By.
   * @nullable
   */
  declare inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rejected By.
   * @nullable
   */
  declare rejectedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lv Cash Receipt Table.
   */
  declare lvCashReceiptTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Document.
   * @nullable
   */
  declare document?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exclude Exch Adj Pl.
   * @nullable
   */
  declare excludeExchAdjPl?: NoYes | null;
  /**
   * Cash Doc Id.
   * @nullable
   */
  declare cashDocId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Entity For Intercompany Tax Posting.
   * @nullable
   */
  declare legalEntityForIntercompanyTaxPosting?: TaxObligationCompany | null;
  /**
   * Cash Coll Bag Num Ru.
   * @nullable
   */
  declare cashCollBagNumRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manual Rounding Hu.
   * @nullable
   */
  declare manualRoundingHu?: NoYes | null;
  /**
   * Debit Amount.
   */
  declare debitAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cash Source Code Ru.
   * @nullable
   */
  declare cashSourceCodeRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reported As Ready By.
   * @nullable
   */
  declare reportedAsReadyBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * R Cash Trans Status.
   * @nullable
   */
  declare rCashTransStatus?: RCashTransStatus | null;
  /**
   * Posted.
   * @nullable
   */
  declare posted?: NoYes | null;
  /**
   * Trans Account Type.
   * @nullable
   */
  declare transAccountType?: LedgerJournalAcType | null;
  /**
   * Private For User Group.
   * @nullable
   */
  declare privateForUserGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Doc Type.
   * @nullable
   */
  declare docType?: RCashDocType | null;
  /**
   * Trans Reg Date Pl.
   */
  declare transRegDatePl: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Approver Fk Personnel Number.
   * @nullable
   */
  declare approverFkPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Coll Store Id Ru.
   * @nullable
   */
  declare cashCollStoreIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Round Off Cash Amount Hu.
   */
  declare roundOffCashAmountHu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Posted On.
   */
  declare postedOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cash Coll Debit Account Num Ru.
   * @nullable
   */
  declare cashCollDebitAccountNumRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Workflow Approval Status.
   * @nullable
   */
  declare workflowApprovalStatus?: LedgerJournalWfApprovalStatus | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LedgerJournalAcType | null;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reporting Currency Exch Rate.
   */
  declare reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Original Journal Num.
   * @nullable
   */
  declare originalJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Log.
   * @nullable
   */
  declare log?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Accounting.
   * @nullable
   */
  declare interCompanyAccounting?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Coll Credit Account Num Ru.
   * @nullable
   */
  declare cashCollCreditAccountNumRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Source Description Ru.
   * @nullable
   */
  declare cashSourceDescriptionRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Amount.
   */
  declare creditAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Offset Ledger Dimension Display Value.
   * @nullable
   */
  declare offsetLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Detail Level.
   * @nullable
   */
  declare detailLevel?: DetailSummary | null;
  /**
   * Amounts Include Sales Tax.
   * @nullable
   */
  declare amountsIncludeSalesTax?: NoYes | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Currency Exch Rate Secondary.
   */
  declare reportingCurrencyExchRateSecondary: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Secondary Exchange Rate.
   */
  declare secondaryExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delay Tax Calculation.
   * @nullable
   */
  declare delayTaxCalculation?: NoYes | null;
  /**
   * Cash Receipt Num Lv.
   * @nullable
   */
  declare cashReceiptNumLv?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: SlipJournalTablesApi<T>) {
    super(_entityApi);
  }
}

export interface SlipJournalTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  fixedRate?: NoYes | null;
  numberAllocatedAtPosting?: NoYes | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  text?: DeserializedType<T, 'Edm.String'> | null;
  cashCollBankContributorRu?: DeserializedType<T, 'Edm.String'> | null;
  journalName?: DeserializedType<T, 'Edm.String'> | null;
  offsetAccountType?: LedgerJournalAcType | null;
  journalType?: LedgerJournalType | null;
  lockedBySystem?: NoYes | null;
  postingLayer?: CurrentOperationsTax | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  linesLimit: DeserializedType<T, 'Edm.Int32'>;
  inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  rejectedBy?: DeserializedType<T, 'Edm.String'> | null;
  lvCashReceiptTable: DeserializedType<T, 'Edm.Int64'>;
  document?: DeserializedType<T, 'Edm.String'> | null;
  excludeExchAdjPl?: NoYes | null;
  cashDocId?: DeserializedType<T, 'Edm.String'> | null;
  legalEntityForIntercompanyTaxPosting?: TaxObligationCompany | null;
  cashCollBagNumRu?: DeserializedType<T, 'Edm.String'> | null;
  manualRoundingHu?: NoYes | null;
  debitAmount: DeserializedType<T, 'Edm.Decimal'>;
  cashSourceCodeRu?: DeserializedType<T, 'Edm.String'> | null;
  reportedAsReadyBy?: DeserializedType<T, 'Edm.String'> | null;
  rCashTransStatus?: RCashTransStatus | null;
  posted?: NoYes | null;
  transAccountType?: LedgerJournalAcType | null;
  privateForUserGroup?: DeserializedType<T, 'Edm.String'> | null;
  docType?: RCashDocType | null;
  transRegDatePl: DeserializedType<T, 'Edm.DateTimeOffset'>;
  approverFkPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  cashCollStoreIdRu?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  roundOffCashAmountHu: DeserializedType<T, 'Edm.Decimal'>;
  postedOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cashCollDebitAccountNumRu?: DeserializedType<T, 'Edm.String'> | null;
  workflowApprovalStatus?: LedgerJournalWfApprovalStatus | null;
  accountType?: LedgerJournalAcType | null;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  originalJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  log?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyAccounting?: DeserializedType<T, 'Edm.String'> | null;
  cashCollCreditAccountNumRu?: DeserializedType<T, 'Edm.String'> | null;
  cashSourceDescriptionRu?: DeserializedType<T, 'Edm.String'> | null;
  creditAmount: DeserializedType<T, 'Edm.Decimal'>;
  offsetLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  detailLevel?: DetailSummary | null;
  amountsIncludeSalesTax?: NoYes | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  reportingCurrencyExchRateSecondary: DeserializedType<T, 'Edm.Decimal'>;
  secondaryExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  delayTaxCalculation?: NoYes | null;
  cashReceiptNumLv?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
