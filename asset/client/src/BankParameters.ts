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
import type { BankParametersApi } from './BankParametersApi';
import { NoYes } from './NoYes';
import { PlExchDiffCalcType } from './PlExchDiffCalcType';
import { BankAccountNameKanaValidationJba_Jp } from './BankAccountNameKanaValidationJba_Jp';
import { CreditLimitTolerance } from './CreditLimitTolerance';
import { RCashCheckContract } from './RCashCheckContract';
import { ReuseVoucher } from './ReuseVoucher';
import { ErrorTolerance } from './ErrorTolerance';
import { HuExchOutflowType } from './HuExchOutflowType';
import { BankRevalExchRateSource } from './BankRevalExchRateSource';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "BankParameters" of service "d365_metadata".
 */
export class BankParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BankParametersType<T>
{
  /**
   * Technical entity name for BankParameters.
   */
  static override _entityName = 'BankParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BankParameters entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Postdated Checks Payment Journal Name.
   * @nullable
   */
  declare postdatedChecksPaymentJournalName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Use Confirm Status.
   * @nullable
   */
  declare useConfirmStatus?: NoYes | null;
  /**
   * Exchange Differences Type.
   * @nullable
   */
  declare exchangeDifferencesType?: PlExchDiffCalcType | null;
  /**
   * Jba File Kana Name Validation Method.
   * @nullable
   */
  declare jbaFileKanaNameValidationMethod?: BankAccountNameKanaValidationJba_Jp | null;
  /**
   * Posting On Earlier Date.
   * @nullable
   */
  declare postingOnEarlierDate?: NoYes | null;
  /**
   * Clearing Main Account Id For Recieved Postdated Checks Display Value.
   * @nullable
   */
  declare clearingMainAccountIdForRecievedPostdatedChecksDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Allow Blank Bank Statement.
   * @nullable
   */
  declare allowBlankBankStatement?: NoYes | null;
  /**
   * Validate Reconciliation Matching Date Difference.
   * @nullable
   */
  declare validateReconciliationMatchingDateDifference?: NoYes | null;
  /**
   * Allow Checks For Ledger Accounts.
   * @nullable
   */
  declare allowChecksForLedgerAccounts?: NoYes | null;
  /**
   * Department Code.
   * @nullable
   */
  declare departmentCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Posting.
   * @nullable
   */
  declare cashPosting?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Comma In Bank Account Kana Name.
   * @nullable
   */
  declare allowCommaInBankAccountKanaName?: NoYes | null;
  /**
   * Enable Letter Of Credit Export.
   * @nullable
   */
  declare enableLetterOfCreditExport?: NoYes | null;
  /**
   * Withholding Tax Main Account Id For Postdated Checks Display Value.
   * @nullable
   */
  declare withholdingTaxMainAccountIdForPostdatedChecksDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Allow Inactive Bank Prenote.
   * @nullable
   */
  declare allowInactiveBankPrenote?: NoYes | null;
  /**
   * Credit Limit Tolerance.
   * @nullable
   */
  declare creditLimitTolerance?: CreditLimitTolerance | null;
  /**
   * Allow Check Reuse.
   * @nullable
   */
  declare allowCheckReuse?: NoYes | null;
  /**
   * Letter Of Guarantee Journal Name.
   * @nullable
   */
  declare letterOfGuaranteeJournalName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Enable Letter Of Credit Import.
   * @nullable
   */
  declare enableLetterOfCreditImport?: NoYes | null;
  /**
   * Purpose Code.
   * @nullable
   */
  declare purposeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Analysis Code.
   * @nullable
   */
  declare analysisCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Validation Method.
   * @nullable
   */
  declare validationMethod?: RCashCheckContract | null;
  /**
   * Allow Bank Currency Reval.
   * @nullable
   */
  declare allowBankCurrencyReval?: NoYes | null;
  /**
   * Require Check Reversal Reason.
   * @nullable
   */
  declare requireCheckReversalReason?: NoYes | null;
  /**
   * Nonsufficient Funds Transaction Type.
   * @nullable
   */
  declare nonsufficientFundsTransactionType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Letterof Credit Charges Posting Enabled.
   * @nullable
   */
  declare isLetterofCreditChargesPostingEnabled?: NoYes | null;
  /**
   * Reporting Currency Exchange Rate Type.
   * @nullable
   */
  declare reportingCurrencyExchangeRateType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Operations Limit.
   */
  declare operationsLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Postdated Checks Journal Name.
   * @nullable
   */
  declare postdatedChecksJournalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Require Deposit Cancellation Reason.
   * @nullable
   */
  declare requireDepositCancellationReason?: NoYes | null;
  /**
   * Require Deposit Cancellation Journal.
   * @nullable
   */
  declare requireDepositCancellationJournal?: NoYes | null;
  /**
   * Post Journal Entries For Postdated Checks.
   * @nullable
   */
  declare postJournalEntriesForPostdatedChecks?: NoYes | null;
  /**
   * Quantity Of Days.
   */
  declare quantityOfDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Disallow Posting Earlier Than Cash Report Closing Date.
   * @nullable
   */
  declare disallowPostingEarlierThanCashReportClosingDate?: NoYes | null;
  /**
   * Max Date Difference For Reconciliation Matching.
   */
  declare maxDateDifferenceForReconciliationMatching: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Require Check Reversal Journal.
   * @nullable
   */
  declare requireCheckReversalJournal?: NoYes | null;
  /**
   * Enable Letter Of Guarantee.
   * @nullable
   */
  declare enableLetterOfGuarantee?: NoYes | null;
  /**
   * Enable Postdated Checks.
   * @nullable
   */
  declare enablePostdatedChecks?: NoYes | null;
  /**
   * Allow Payment Copies.
   * @nullable
   */
  declare allowPaymentCopies?: NoYes | null;
  /**
   * Check For Voucher Used.
   * @nullable
   */
  declare checkForVoucherUsed?: ReuseVoucher | null;
  /**
   * Booking Date As Default Accounting Date.
   * @nullable
   */
  declare bookingDateAsDefaultAccountingDate?: NoYes | null;
  /**
   * Clearing Main Account Id For Issued Postdated Checks Display Value.
   * @nullable
   */
  declare clearingMainAccountIdForIssuedPostdatedChecksDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Check Operations Limit.
   * @nullable
   */
  declare checkOperationsLimit?: ErrorTolerance | null;
  /**
   * Accounting Currency Exchange Rate Type.
   * @nullable
   */
  declare accountingCurrencyExchangeRateType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Validate Reconciliation Matching Transaction Type.
   * @nullable
   */
  declare validateReconciliationMatchingTransactionType?: NoYes | null;
  /**
   * Exchange Rate On Disbursements.
   * @nullable
   */
  declare exchangeRateOnDisbursements?: HuExchOutflowType | null;
  /**
   * Exch Adj Rate Source.
   * @nullable
   */
  declare exchAdjRateSource?: BankRevalExchRateSource | null;
  /**
   * Show Amounts In Debit Credit On Bank Statement.
   * @nullable
   */
  declare showAmountsInDebitCreditOnBankStatement?: NoYes | null;
  /**
   * Allow Bank Account Statement Edit.
   * @nullable
   */
  declare allowBankAccountStatementEdit?: NoYes | null;
  /**
   * Cash.
   * @nullable
   */
  declare cash?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Psn Enable Escheatment.
   * @nullable
   */
  declare psnEnableEscheatment?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: BankParametersApi<T>) {
    super(_entityApi);
  }
}

export interface BankParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  postdatedChecksPaymentJournalName?: DeserializedType<T, 'Edm.String'> | null;
  useConfirmStatus?: NoYes | null;
  exchangeDifferencesType?: PlExchDiffCalcType | null;
  jbaFileKanaNameValidationMethod?: BankAccountNameKanaValidationJba_Jp | null;
  postingOnEarlierDate?: NoYes | null;
  clearingMainAccountIdForRecievedPostdatedChecksDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  allowBlankBankStatement?: NoYes | null;
  validateReconciliationMatchingDateDifference?: NoYes | null;
  allowChecksForLedgerAccounts?: NoYes | null;
  departmentCode?: DeserializedType<T, 'Edm.String'> | null;
  cashPosting?: DeserializedType<T, 'Edm.String'> | null;
  allowCommaInBankAccountKanaName?: NoYes | null;
  enableLetterOfCreditExport?: NoYes | null;
  withholdingTaxMainAccountIdForPostdatedChecksDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  allowInactiveBankPrenote?: NoYes | null;
  creditLimitTolerance?: CreditLimitTolerance | null;
  allowCheckReuse?: NoYes | null;
  letterOfGuaranteeJournalName?: DeserializedType<T, 'Edm.String'> | null;
  enableLetterOfCreditImport?: NoYes | null;
  purposeCode?: DeserializedType<T, 'Edm.String'> | null;
  analysisCode?: DeserializedType<T, 'Edm.String'> | null;
  validationMethod?: RCashCheckContract | null;
  allowBankCurrencyReval?: NoYes | null;
  requireCheckReversalReason?: NoYes | null;
  nonsufficientFundsTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  isLetterofCreditChargesPostingEnabled?: NoYes | null;
  reportingCurrencyExchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  operationsLimit: DeserializedType<T, 'Edm.Decimal'>;
  postdatedChecksJournalName?: DeserializedType<T, 'Edm.String'> | null;
  requireDepositCancellationReason?: NoYes | null;
  requireDepositCancellationJournal?: NoYes | null;
  postJournalEntriesForPostdatedChecks?: NoYes | null;
  quantityOfDays: DeserializedType<T, 'Edm.Int32'>;
  disallowPostingEarlierThanCashReportClosingDate?: NoYes | null;
  maxDateDifferenceForReconciliationMatching: DeserializedType<T, 'Edm.Int32'>;
  requireCheckReversalJournal?: NoYes | null;
  enableLetterOfGuarantee?: NoYes | null;
  enablePostdatedChecks?: NoYes | null;
  allowPaymentCopies?: NoYes | null;
  checkForVoucherUsed?: ReuseVoucher | null;
  bookingDateAsDefaultAccountingDate?: NoYes | null;
  clearingMainAccountIdForIssuedPostdatedChecksDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  checkOperationsLimit?: ErrorTolerance | null;
  accountingCurrencyExchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  validateReconciliationMatchingTransactionType?: NoYes | null;
  exchangeRateOnDisbursements?: HuExchOutflowType | null;
  exchAdjRateSource?: BankRevalExchRateSource | null;
  showAmountsInDebitCreditOnBankStatement?: NoYes | null;
  allowBankAccountStatementEdit?: NoYes | null;
  cash?: DeserializedType<T, 'Edm.String'> | null;
  psnEnableEscheatment?: NoYes | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
