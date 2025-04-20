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
import type { LedgerJournalTableBiEntitiesApi } from './LedgerJournalTableBiEntitiesApi';
import { NoYes } from './NoYes';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { BankRemittanceType } from './BankRemittanceType';
import { LedgerJournalType } from './LedgerJournalType';
import { CustVendNegInstProtestProcess } from './CustVendNegInstProtestProcess';
import { LtAssetTransferType } from './LtAssetTransferType';
import { LedgerJournalWfApprovalStatus } from './LedgerJournalWfApprovalStatus';
import { BankTransSummarizationCriteria } from './BankTransSummarizationCriteria';
import { TaxObligationCompany } from './TaxObligationCompany';
import { DetailSummary } from './DetailSummary';
import { CurrentOperationsTax } from './CurrentOperationsTax';

/**
 * This class represents the entity "LedgerJournalTableBiEntities" of service "d365_metadata".
 */
export class LedgerJournalTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerJournalTableBiEntitiesType<T>
{
  /**
   * Technical entity name for LedgerJournalTableBiEntities.
   */
  static override _entityName = 'LedgerJournalTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerJournalTableBiEntities entity.
   */
  static _keys = ['dataAreaId', 'JournalNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Num.
   */
  declare journalNum: DeserializedType<T, 'Edm.String'>;
  /**
   * Reverse Entry.
   * @nullable
   */
  declare reverseEntry?: NoYes | null;
  /**
   * Posted Date Time.
   */
  declare postedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Simulation Posted It.
   * @nullable
   */
  declare simulationPostedIt?: NoYes | null;
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
   * Bank Remittance Type.
   * @nullable
   */
  declare bankRemittanceType?: BankRemittanceType | null;
  /**
   * Reverse Date.
   */
  declare reverseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Retail Statement Id.
   * @nullable
   */
  declare retailStatementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Type.
   * @nullable
   */
  declare journalType?: LedgerJournalType | null;
  /**
   * Journal Balance.
   */
  declare journalBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Voucher Allocated At Posting.
   * @nullable
   */
  declare voucherAllocatedAtPosting?: NoYes | null;
  /**
   * Euro Triangulation.
   * @nullable
   */
  declare euroTriangulation?: NoYes | null;
  /**
   * Fin Tag.
   */
  declare finTag: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Ledger Dimension Name Updated.
   * @nullable
   */
  declare isLedgerDimensionNameUpdated?: NoYes | null;
  /**
   * Cust Vend Neg Inst Protest Process.
   * @nullable
   */
  declare custVendNegInstProtestProcess?: CustVendNegInstProtestProcess | null;
  /**
   * Reporting Currency Fixed Exch Rate.
   * @nullable
   */
  declare reportingCurrencyFixedExchRate?: NoYes | null;
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
   * Asset Transfer Type Lt.
   * @nullable
   */
  declare assetTransferTypeLt?: LtAssetTransferType | null;
  /**
   * Exch Rate.
   */
  declare exchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reported As Ready By.
   * @nullable
   */
  declare reportedAsReadyBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posted.
   * @nullable
   */
  declare posted?: NoYes | null;
  /**
   * Session Login Date Time.
   */
  declare sessionLoginDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Total Debit.
   */
  declare journalTotalDebit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Parent Journal Num.
   * @nullable
   */
  declare parentJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Sequence Table.
   */
  declare numberSequenceTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Bank Trans Summarization Enabled.
   * @nullable
   */
  declare bankTransSummarizationEnabled?: NoYes | null;
  /**
   * Journal Total Offset Balance.
   */
  declare journalTotalOffsetBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Protest Settled Bill.
   * @nullable
   */
  declare protestSettledBill?: NoYes | null;
  /**
   * Document Num.
   * @nullable
   */
  declare documentNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Journal Incl Tax.
   * @nullable
   */
  declare ledgerJournalInclTax?: NoYes | null;
  /**
   * Original Company.
   * @nullable
   */
  declare originalCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approver.
   */
  declare approver: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Workflow Approval Status.
   * @nullable
   */
  declare workflowApprovalStatus?: LedgerJournalWfApprovalStatus | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Trans Summarization Criteria.
   * @nullable
   */
  declare bankTransSummarizationCriteria?: BankTransSummarizationCriteria | null;
  /**
   * Reporting Currency Exch Rate.
   */
  declare reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Num Of Lines.
   */
  declare numOfLines: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Lines Limit Before Distribution.
   */
  declare linesLimitBeforeDistribution: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Original Journal Num.
   * @nullable
   */
  declare originalJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Obligation Company.
   * @nullable
   */
  declare taxObligationCompany?: TaxObligationCompany | null;
  /**
   * User Block Id.
   * @nullable
   */
  declare userBlockId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payments Generated It.
   * @nullable
   */
  declare paymentsGeneratedIt?: NoYes | null;
  /**
   * System Blocked.
   * @nullable
   */
  declare systemBlocked?: NoYes | null;
  /**
   * Journal Total Credit Reporting Currency.
   */
  declare journalTotalCreditReportingCurrency: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Log.
   * @nullable
   */
  declare log?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Group Block Id.
   * @nullable
   */
  declare groupBlockId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Journal Total Debit Reporting Currency.
   */
  declare journalTotalDebitReportingCurrency: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Journal Total Credit.
   */
  declare journalTotalCredit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Bank Account Id.
   * @nullable
   */
  declare bankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Balance.
   */
  declare endBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Offset Ledger Dimension Values Json.
   * @nullable
   */
  declare offsetLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Exchrate Secondary.
   */
  declare exchrateSecondary: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Offset Account.
   * @nullable
   */
  declare fixedOffsetAccount?: NoYes | null;
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
   * Fixed Exch Rate.
   * @nullable
   */
  declare fixedExchRate?: NoYes | null;
  /**
   * Detail Summary Posting.
   * @nullable
   */
  declare detailSummaryPosting?: DetailSummary | null;
  /**
   * Delay Tax Calculation.
   * @nullable
   */
  declare delayTaxCalculation?: NoYes | null;
  /**
   * Session Id.
   */
  declare sessionId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Integration Key.
   * @nullable
   */
  declare integrationKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Adjustment Journal.
   * @nullable
   */
  declare isAdjustmentJournal?: NoYes | null;
  /**
   * Current Operations Tax.
   * @nullable
   */
  declare currentOperationsTax?: CurrentOperationsTax | null;

  constructor(_entityApi: LedgerJournalTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerJournalTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNum: DeserializedType<T, 'Edm.String'>;
  reverseEntry?: NoYes | null;
  postedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  simulationPostedIt?: NoYes | null;
  journalName?: DeserializedType<T, 'Edm.String'> | null;
  offsetAccountType?: LedgerJournalAcType | null;
  bankRemittanceType?: BankRemittanceType | null;
  reverseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  retailStatementId?: DeserializedType<T, 'Edm.String'> | null;
  journalType?: LedgerJournalType | null;
  journalBalance: DeserializedType<T, 'Edm.Decimal'>;
  voucherAllocatedAtPosting?: NoYes | null;
  euroTriangulation?: NoYes | null;
  finTag: DeserializedType<T, 'Edm.Int64'>;
  isLedgerDimensionNameUpdated?: NoYes | null;
  custVendNegInstProtestProcess?: CustVendNegInstProtestProcess | null;
  reportingCurrencyFixedExchRate?: NoYes | null;
  inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  rejectedBy?: DeserializedType<T, 'Edm.String'> | null;
  assetTransferTypeLt?: LtAssetTransferType | null;
  exchRate: DeserializedType<T, 'Edm.Decimal'>;
  reportedAsReadyBy?: DeserializedType<T, 'Edm.String'> | null;
  posted?: NoYes | null;
  sessionLoginDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  journalTotalDebit: DeserializedType<T, 'Edm.Decimal'>;
  parentJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceTable: DeserializedType<T, 'Edm.Int64'>;
  bankTransSummarizationEnabled?: NoYes | null;
  journalTotalOffsetBalance: DeserializedType<T, 'Edm.Decimal'>;
  protestSettledBill?: NoYes | null;
  documentNum?: DeserializedType<T, 'Edm.String'> | null;
  ledgerJournalInclTax?: NoYes | null;
  originalCompany?: DeserializedType<T, 'Edm.String'> | null;
  approver: DeserializedType<T, 'Edm.Int64'>;
  workflowApprovalStatus?: LedgerJournalWfApprovalStatus | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  bankTransSummarizationCriteria?: BankTransSummarizationCriteria | null;
  reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  numOfLines: DeserializedType<T, 'Edm.Int32'>;
  linesLimitBeforeDistribution: DeserializedType<T, 'Edm.Int32'>;
  originalJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  taxObligationCompany?: TaxObligationCompany | null;
  userBlockId?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  paymentsGeneratedIt?: NoYes | null;
  systemBlocked?: NoYes | null;
  journalTotalCreditReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  log?: DeserializedType<T, 'Edm.String'> | null;
  groupBlockId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  journalTotalDebitReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  journalTotalCredit: DeserializedType<T, 'Edm.Decimal'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  bankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  endBalance: DeserializedType<T, 'Edm.Decimal'>;
  overrideSalesTax?: NoYes | null;
  offsetLedgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
  exchrateSecondary: DeserializedType<T, 'Edm.Decimal'>;
  fixedOffsetAccount?: NoYes | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  reportingCurrencyExchRateSecondary: DeserializedType<T, 'Edm.Decimal'>;
  fixedExchRate?: NoYes | null;
  detailSummaryPosting?: DetailSummary | null;
  delayTaxCalculation?: NoYes | null;
  sessionId: DeserializedType<T, 'Edm.Int32'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  integrationKey?: DeserializedType<T, 'Edm.String'> | null;
  isAdjustmentJournal?: NoYes | null;
  currentOperationsTax?: CurrentOperationsTax | null;
}
