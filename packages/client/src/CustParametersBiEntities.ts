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
import type { CustParametersBiEntitiesApi } from './CustParametersBiEntitiesApi';
import { NoYes } from './NoYes';
import { CustSettlementProrationType } from './CustSettlementProrationType';
import { TaxVatNumCountryRegionType } from './TaxVatNumCountryRegionType';
import { ItemCust } from './ItemCust';
import { ErrorTolerance } from './ErrorTolerance';
import { TamDeductionCustPaymSettleMethod } from './TamDeductionCustPaymSettleMethod';
import { InvoiceReferenceNumberFormulaTypeFi } from './InvoiceReferenceNumberFormulaTypeFi';
import { CustSettlePrepaymentVatTypeRu } from './CustSettlePrepaymentVatTypeRu';
import { CustTableChangeProposalDataEntityBehavior } from './CustTableChangeProposalDataEntityBehavior';
import { TypeOfCreditmaxCheck } from './TypeOfCreditmaxCheck';
import { DimSettlementCtrlTypeRu } from './DimSettlementCtrlTypeRu';
import { CustTaxationRu } from './CustTaxationRu';
import { TaxIdValidation } from './TaxIdValidation';
import { CustVendShowTransaction } from './CustVendShowTransaction';
import { UnspecificSpecific } from './UnspecificSpecific';
import { CustInvoiceLinePriority } from './CustInvoiceLinePriority';
import { SalesBookFactureProcessingTypeRu } from './SalesBookFactureProcessingTypeRu';
import { DefaultNoYes } from './DefaultNoYes';
import { CreditCardEstShippingChargeType } from './CreditCardEstShippingChargeType';
import { CommissionTypeIt } from './CommissionTypeIt';
import { CustPkWiUErrorLevel } from './CustPkWiUErrorLevel';
import { McrItemCustCatalog } from './McrItemCustCatalog';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { SalesDocumentTimezonePreference } from './SalesDocumentTimezonePreference';
import { CustInterestCalc } from './CustInterestCalc';
import { CustPostedPrinted } from './CustPostedPrinted';
import { UseFiscalInvoiceAccount } from './UseFiscalInvoiceAccount';
import { CustCollectionLetterGenerationLevel } from './CustCollectionLetterGenerationLevel';
import { CustInterestAdjustmentDateToUse } from './CustInterestAdjustmentDateToUse';
import { CreditLineErrorType } from './CreditLineErrorType';
import { PrepaymentHandlingLayoutW } from './PrepaymentHandlingLayoutW';

/**
 * This class represents the entity "CustParametersBiEntities" of service "d365_metadata".
 */
export class CustParametersBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustParametersBiEntitiesType<T>
{
  /**
   * Technical entity name for CustParametersBiEntities.
   */
  static override _entityName = 'CustParametersBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustParametersBiEntities entity.
   */
  static _keys = ['dataAreaId', 'Key'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sales Cycle.
   * @nullable
   */
  declare salesCycle?: NoYes | null;
  /**
   * Posting Profile Bills.
   * @nullable
   */
  declare postingProfileBills?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Card Est Shipping Charge Value.
   */
  declare creditCardEstShippingChargeValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Enable Cancel Posting Profiles.
   * @nullable
   */
  declare enableCancelPostingProfiles?: NoYes | null;
  /**
   * Prenotification Days Recurring.
   */
  declare prenotificationDaysRecurring: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Credit Card Notes.
   * @nullable
   */
  declare creditCardNotes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proration Type.
   * @nullable
   */
  declare prorationType?: CustSettlementProrationType | null;
  /**
   * Collection Letter Post Batch Task Percentage.
   */
  declare collectionLetterPostBatchTaskPercentage: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Tax Item Group Ru.
   * @nullable
   */
  declare taxItemGroupRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Waive Days.
   */
  declare minimumWaiveDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Proj Ledger Allow Edit.
   * @nullable
   */
  declare projLedgerAllowEdit?: NoYes | null;
  /**
   * Use Sequential Line Numbers When Posting Customer Invoice Lines.
   * @nullable
   */
  declare useSequentialLineNumbersWhenPostingCustomerInvoiceLines?: NoYes | null;
  /**
   * Prepayment Posting Profile.
   * @nullable
   */
  declare prepaymentPostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Min Refund.
   */
  declare minRefund: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Collections Exclude Disputed Transactions.
   * @nullable
   */
  declare collectionsExcludeDisputedTransactions?: NoYes | null;
  /**
   * Mandatory Invoice Vat Num.
   * @nullable
   */
  declare mandatoryInvoiceVatNum?: TaxVatNumCountryRegionType | null;
  /**
   * Cust Use Billing Classification Psn.
   * @nullable
   */
  declare custUseBillingClassificationPsn?: NoYes | null;
  /**
   * Collection Agency Tax Rate W.
   */
  declare collectionAgencyTaxRateW: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Account Disc.
   * @nullable
   */
  declare accountDisc?: ItemCust | null;
  /**
   * Advance Invoice Posting Profile W.
   * @nullable
   */
  declare advanceInvoicePostingProfileW?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Core Scheme Bank Submission Days First.
   */
  declare coreSchemeBankSubmissionDaysFirst: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Entry Certificate Issuing Enabled W.
   * @nullable
   */
  declare entryCertificateIssuingEnabledW?: NoYes | null;
  /**
   * Credit Note Cash Discount Cz.
   * @nullable
   */
  declare creditNoteCashDiscountCz?: NoYes | null;
  /**
   * Adv Inv Date W.
   * @nullable
   */
  declare advInvDateW?: ErrorTolerance | null;
  /**
   * Enable Return Posting Profiles.
   * @nullable
   */
  declare enableReturnPostingProfiles?: NoYes | null;
  /**
   * Tax Period Payment Code Pl.
   * @nullable
   */
  declare taxPeriodPaymentCodePl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Collections General Sys Email Id.
   * @nullable
   */
  declare collectionsGeneralSysEmailId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Free Text Invoice Stop Invoice Posting On First Error.
   * @nullable
   */
  declare freeTextInvoiceStopInvoicePostingOnFirstError?: NoYes | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Note Reason Req.
   * @nullable
   */
  declare creditNoteReasonReq?: NoYes | null;
  /**
   * Cancel Payment Reason Req.
   * @nullable
   */
  declare cancelPaymentReasonReq?: NoYes | null;
  /**
   * Tam Deduction Cust Paym Settle Method.
   * @nullable
   */
  declare tamDeductionCustPaymSettleMethod?: TamDeductionCustPaymSettleMethod | null;
  /**
   * Span Billing Code Across Invoices.
   * @nullable
   */
  declare spanBillingCodeAcrossInvoices?: NoYes | null;
  /**
   * Advance Invoice Reversal Correction W.
   * @nullable
   */
  declare advanceInvoiceReversalCorrectionW?: NoYes | null;
  /**
   * Invoice Reference Number Sequence Table.
   */
  declare invoiceReferenceNumberSequenceTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invoice Reference Number Formula Fi.
   * @nullable
   */
  declare invoiceReferenceNumberFormulaFi?: InvoiceReferenceNumberFormulaTypeFi | null;
  /**
   * Credit Card Posting Bank Transaction Type.
   * @nullable
   */
  declare creditCardPostingBankTransactionType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cust Table Change Proposal Is Enabled.
   * @nullable
   */
  declare custTableChangeProposalIsEnabled?: NoYes | null;
  /**
   * Tax Integration System Cn.
   * @nullable
   */
  declare taxIntegrationSystemCn?: NoYes | null;
  /**
   * Prepayment Date W.
   * @nullable
   */
  declare prepaymentDateW?: ErrorTolerance | null;
  /**
   * Settle Prepayment Vat Type Ru.
   * @nullable
   */
  declare settlePrepaymentVatTypeRu?: CustSettlePrepaymentVatTypeRu | null;
  /**
   * Collections Om Team.
   */
  declare collectionsOmTeam: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Entry Certificate Management Enabled W.
   * @nullable
   */
  declare entryCertificateManagementEnabledW?: NoYes | null;
  /**
   * Tax Adjustment In Return.
   * @nullable
   */
  declare taxAdjustmentInReturn?: NoYes | null;
  /**
   * Credit Card Auth Trans Archive Threshold.
   */
  declare creditCardAuthTransArchiveThreshold: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Enable Substitution Project Invoices Th.
   * @nullable
   */
  declare enableSubstitutionProjectInvoicesTh?: NoYes | null;
  /**
   * Collections Write Off Reason Table.
   * @nullable
   */
  declare collectionsWriteOffReasonTable?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cust Table Change Proposal Data Entity Behavior.
   * @nullable
   */
  declare custTableChangeProposalDataEntityBehavior?: CustTableChangeProposalDataEntityBehavior | null;
  /**
   * Settlement Update Cash Disc Date Reduce Deadlock.
   * @nullable
   */
  declare settlementUpdateCashDiscDateReduceDeadlock?: NoYes | null;
  /**
   * Tam Deduction Type.
   * @nullable
   */
  declare tamDeductionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Invoice Zero Amount.
   * @nullable
   */
  declare isInvoiceZeroAmount?: NoYes | null;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Profile Bills Remit Discount.
   * @nullable
   */
  declare postingProfileBillsRemitDiscount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Usual Exporter Exemption Tax Group It.
   * @nullable
   */
  declare usualExporterExemptionTaxGroupIt?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Advance Invoice Tax Group W.
   * @nullable
   */
  declare advanceInvoiceTaxGroupW?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Max Check.
   * @nullable
   */
  declare creditMaxCheck?: TypeOfCreditmaxCheck | null;
  /**
   * Dim Settlement Ctrl Type Ru.
   * @nullable
   */
  declare dimSettlementCtrlTypeRu?: DimSettlementCtrlTypeRu | null;
  /**
   * Cust Taxation Ru.
   * @nullable
   */
  declare custTaxationRu?: CustTaxationRu | null;
  /**
   * Enable Refer To Collection Agency W.
   * @nullable
   */
  declare enableReferToCollectionAgencyW?: NoYes | null;
  /**
   * Tax Id Validation.
   * @nullable
   */
  declare taxIdValidation?: TaxIdValidation | null;
  /**
   * Due 2 Payment.
   * @nullable
   */
  declare due2Payment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enable Single Line Tax Adjustment.
   * @nullable
   */
  declare enableSingleLineTaxAdjustment?: NoYes | null;
  /**
   * Default Filter For Customer Transactions.
   * @nullable
   */
  declare defaultFilterForCustomerTransactions?: CustVendShowTransaction | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cash Disc.
   * @nullable
   */
  declare cashDisc?: UnspecificSpecific | null;
  /**
   * Percent Customers Per Batch Task.
   */
  declare percentCustomersPerBatchTask: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Collections Write Off Separate Sales Tax.
   * @nullable
   */
  declare collectionsWriteOffSeparateSalesTax?: NoYes | null;
  /**
   * Collections Statement Sys Email Id.
   * @nullable
   */
  declare collectionsStatementSysEmailId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Check For Overlaps And Gaps.
   * @nullable
   */
  declare checkForOverlapsAndGaps?: NoYes | null;
  /**
   * Collections Write Off Ledger Journal Name.
   * @nullable
   */
  declare collectionsWriteOffLedgerJournalName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Settlement Write Off Enabled.
   * @nullable
   */
  declare settlementWriteOffEnabled?: NoYes | null;
  /**
   * Prepayment Link W.
   * @nullable
   */
  declare prepaymentLinkW?: ErrorTolerance | null;
  /**
   * Show Amount Debit Credit Jp.
   * @nullable
   */
  declare showAmountDebitCreditJp?: NoYes | null;
  /**
   * Invoice Line Priority.
   * @nullable
   */
  declare invoiceLinePriority?: CustInvoiceLinePriority | null;
  /**
   * Credit Limit Check Free Invoice.
   * @nullable
   */
  declare creditLimitCheckFreeInvoice?: NoYes | null;
  /**
   * Sales Book Facture Processing Type Ru.
   * @nullable
   */
  declare salesBookFactureProcessingTypeRu?: SalesBookFactureProcessingTypeRu | null;
  /**
   * Enable Substitution Invoices Th.
   * @nullable
   */
  declare enableSubstitutionInvoicesTh?: NoYes | null;
  /**
   * Credit Limit Check Sales.
   * @nullable
   */
  declare creditLimitCheckSales?: NoYes | null;
  /**
   * Reverse Prepayment W.
   * @nullable
   */
  declare reversePrepaymentW?: NoYes | null;
  /**
   * Enable Project.
   * @nullable
   */
  declare enableProject?: NoYes | null;
  /**
   * Enable Date Of Vat Register Changing Cz.
   * @nullable
   */
  declare enableDateOfVatRegisterChangingCz?: NoYes | null;
  /**
   * Tax Reimbursement Exchange Rate Type Hu.
   */
  declare taxReimbursementExchangeRateTypeHu: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Allow Editing Return Credit With Tax Adj.
   * @nullable
   */
  declare taxAllowEditingReturnCreditWithTaxAdj?: NoYes | null;
  /**
   * Posting Profile Bills Protested.
   * @nullable
   */
  declare postingProfileBillsProtested?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Collections Write Off Base Amount Sales Tax.
   * @nullable
   */
  declare collectionsWriteOffBaseAmountSalesTax?: DefaultNoYes | null;
  /**
   * Automatic Total Discount.
   * @nullable
   */
  declare automaticTotalDiscount?: NoYes | null;
  /**
   * Invoice 2 Due.
   * @nullable
   */
  declare invoice2Due?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Invoicing Report.
   * @nullable
   */
  declare creditInvoicingReport?: NoYes | null;
  /**
   * Primary Relation Br.
   * @nullable
   */
  declare primaryRelationBr?: ItemCust | null;
  /**
   * Credit Card Est Shipping Charge Type.
   * @nullable
   */
  declare creditCardEstShippingChargeType?: CreditCardEstShippingChargeType | null;
  /**
   * Commission Type It.
   * @nullable
   */
  declare commissionTypeIt?: CommissionTypeIt | null;
  /**
   * Pk Wi U Code Requirement.
   * @nullable
   */
  declare pkWiUCodeRequirement?: CustPkWiUErrorLevel | null;
  /**
   * Advance Invoice Tax Item Group W.
   * @nullable
   */
  declare advanceInvoiceTaxItemGroupW?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Mcr Enable Price Details.
   * @nullable
   */
  declare mcrEnablePriceDetails?: NoYes | null;
  /**
   * B 2 B Scheme Bank Submission Days First.
   */
  declare b2BSchemeBankSubmissionDaysFirst: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Credit Card Payment Break Down Process.
   * @nullable
   */
  declare creditCardPaymentBreakDownProcess?: NoYes | null;
  /**
   * Edit Cash Discounts When Due Date Changed.
   * @nullable
   */
  declare editCashDiscountsWhenDueDateChanged?: NoYes | null;
  /**
   * Tam Rebate Posting.
   * @nullable
   */
  declare tamRebatePosting?: McrItemCustCatalog | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Check Invoice W.
   * @nullable
   */
  declare checkInvoiceW?: NoYes | null;
  /**
   * Cust Aging Snapshot Batch Limit.
   */
  declare custAgingSnapshotBatchLimit: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Calculate Statistics For Zero Balance Customers.
   * @nullable
   */
  declare calculateStatisticsForZeroBalanceCustomers?: NoYes | null;
  /**
   * Collections Stat Rep Interval.
   * @nullable
   */
  declare collectionsStatRepInterval?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Collection Grace Period For Dues Transfer W.
   */
  declare collectionGracePeriodForDuesTransferW: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * R Tax 25 Debt Model.
   */
  declare rTax25DebtModel: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Credit Card Posting Account Type.
   * @nullable
   */
  declare creditCardPostingAccountType?: LedgerJournalAcType | null;
  /**
   * Is Totals Calculation Automatic.
   * @nullable
   */
  declare isTotalsCalculationAutomatic?: NoYes | null;
  /**
   * Mcr Default Dimension Hierarchy.
   * @nullable
   */
  declare mcrDefaultDimensionHierarchy?: McrItemCustCatalog | null;
  /**
   * Allow Cross Company Employee.
   * @nullable
   */
  declare allowCrossCompanyEmployee?: NoYes | null;
  /**
   * Enable Chronological Invoice Numbering W.
   * @nullable
   */
  declare enableChronologicalInvoiceNumberingW?: NoYes | null;
  /**
   * Tax On Prepayment.
   * @nullable
   */
  declare taxOnPrepayment?: NoYes | null;
  /**
   * Packaging Weight On Invoice.
   * @nullable
   */
  declare packagingWeightOnInvoice?: NoYes | null;
  /**
   * Advance Invoice Credit Correction W.
   * @nullable
   */
  declare advanceInvoiceCreditCorrectionW?: NoYes | null;
  /**
   * Free Text Invoice Timezone Preference.
   * @nullable
   */
  declare freeTextInvoiceTimezonePreference?: SalesDocumentTimezonePreference | null;
  /**
   * Return Orders Reason Req.
   * @nullable
   */
  declare returnOrdersReasonReq?: NoYes | null;
  /**
   * R Tax 25 Debt Model Tax.
   */
  declare rTax25DebtModelTax: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tam Deduction Require Full Settle.
   * @nullable
   */
  declare tamDeductionRequireFullSettle?: NoYes | null;
  /**
   * Trans Reversal Reason Req.
   * @nullable
   */
  declare transReversalReasonReq?: NoYes | null;
  /**
   * Use Priority On Auto Settlement.
   * @nullable
   */
  declare usePriorityOnAutoSettlement?: NoYes | null;
  /**
   * Credit Card Pre Authorization.
   * @nullable
   */
  declare creditCardPreAuthorization?: NoYes | null;
  /**
   * Budget Settle.
   * @nullable
   */
  declare budgetSettle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bills Journals Validations.
   * @nullable
   */
  declare billsJournalsValidations?: NoYes | null;
  /**
   * Mandatory Tax Group.
   * @nullable
   */
  declare mandatoryTaxGroup?: NoYes | null;
  /**
   * Invoice Id Editing W.
   * @nullable
   */
  declare invoiceIdEditingW?: NoYes | null;
  /**
   * Do Print Transportation Document.
   * @nullable
   */
  declare doPrintTransportationDocument?: NoYes | null;
  /**
   * Default Cust.
   * @nullable
   */
  declare defaultCust?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Dim Adjust Line Control Ru.
   * @nullable
   */
  declare itemDimAdjustLineControlRu?: NoYes | null;
  /**
   * Collection Letter Ignore Credit Transaction Codes.
   * @nullable
   */
  declare collectionLetterIgnoreCreditTransactionCodes?: NoYes | null;
  /**
   * Reason Code Cash Discount Cz.
   * @nullable
   */
  declare reasonCodeCashDiscountCz?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maximum Waive Days.
   */
  declare maximumWaiveDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Cust Invoice Ref Num Fi.
   * @nullable
   */
  declare custInvoiceRefNumFi?: NoYes | null;
  /**
   * Cust Interest Calc.
   * @nullable
   */
  declare custInterestCalc?: CustInterestCalc | null;
  /**
   * Matched Packing Slips Inquiry.
   * @nullable
   */
  declare matchedPackingSlipsInquiry?: NoYes | null;
  /**
   * Settlement Write Off Reason Code.
   * @nullable
   */
  declare settlementWriteOffReasonCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Suppress Depreciation Of Payment Section.
   * @nullable
   */
  declare suppressDepreciationOfPaymentSection?: NoYes | null;
  /**
   * Mandatory Item Tax Group.
   * @nullable
   */
  declare mandatoryItemTaxGroup?: NoYes | null;
  /**
   * Bypass Validation Of Accounting Distributions.
   * @nullable
   */
  declare bypassValidationOfAccountingDistributions?: NoYes | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agreement Credit Line Ru.
   * @nullable
   */
  declare agreementCreditLineRu?: NoYes | null;
  /**
   * Collection Letter Code Update.
   * @nullable
   */
  declare collectionLetterCodeUpdate?: CustPostedPrinted | null;
  /**
   * Core Scheme Bank Submission Days Recurring.
   */
  declare coreSchemeBankSubmissionDaysRecurring: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Credit Card Enable Idempotency Key.
   * @nullable
   */
  declare creditCardEnableIdempotencyKey?: NoYes | null;
  /**
   * Invoice Period.
   * @nullable
   */
  declare invoicePeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Card Preapproval Last No Of Days.
   */
  declare creditCardPreapprovalLastNoOfDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sales Book Additional List Format Mapping Id.
   */
  declare salesBookAdditionalListFormatMappingId: DeserializedType<
    T,
    'Edm.Int64'
  >;
  /**
   * Use Fiscal Invoice Account.
   * @nullable
   */
  declare useFiscalInvoiceAccount?: UseFiscalInvoiceAccount | null;
  /**
   * Automatic Intent Letter Assignment It.
   * @nullable
   */
  declare automaticIntentLetterAssignmentIt?: NoYes | null;
  /**
   * Collections Salesperson Sys Email Id.
   * @nullable
   */
  declare collectionsSalespersonSysEmailId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Credit Card Est Shipping Charge Max.
   */
  declare creditCardEstShippingChargeMax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Group Ru.
   * @nullable
   */
  declare taxGroupRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Error.
   * @nullable
   */
  declare creditError?: NoYes | null;
  /**
   * Cust Table Copy Tax Registion Num As Tax Exempt Num.
   * @nullable
   */
  declare custTableCopyTaxRegistionNumAsTaxExemptNum?: NoYes | null;
  /**
   * Max Mst Diff.
   */
  declare maxMstDiff: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Prepayment Facture Auto Create Ru.
   * @nullable
   */
  declare prepaymentFactureAutoCreateRu?: NoYes | null;
  /**
   * Mark Open Invoice Line.
   * @nullable
   */
  declare markOpenInvoiceLine?: NoYes | null;
  /**
   * Cor 1 Scheme Bank Submission Days Recurring.
   */
  declare cor1SchemeBankSubmissionDaysRecurring: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Default Free Text Invoice Posting Top Pick Batch Tasks.
   */
  declare defaultFreeTextInvoicePostingTopPickBatchTasks: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * R Tax 25 Profit Table.
   */
  declare rTax25ProfitTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Settlement Write Off Journal Name.
   * @nullable
   */
  declare settlementWriteOffJournalName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cor 1 Scheme Bank Submission Days First.
   */
  declare cor1SchemeBankSubmissionDaysFirst: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Auto Settle.
   * @nullable
   */
  declare autoSettle?: NoYes | null;
  /**
   * Cust Cons Invoice Jp.
   * @nullable
   */
  declare custConsInvoiceJp?: NoYes | null;
  /**
   * Adv Inv Amount W.
   * @nullable
   */
  declare advInvAmountW?: ErrorTolerance | null;
  /**
   * Cust Name From Vat Num.
   * @nullable
   */
  declare custNameFromVatNum?: NoYes | null;
  /**
   * Cash Disc For Credit Note.
   * @nullable
   */
  declare cashDiscForCreditNote?: NoYes | null;
  /**
   * R Tax 25 Receipt Pct.
   */
  declare rTax25ReceiptPct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bank Cust Paym Id Table.
   */
  declare bankCustPaymIdTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Account Positions.
   */
  declare accountPositions: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Posting Profile Bills Endorsed.
   * @nullable
   */
  declare postingProfileBillsEndorsed?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Credit Card Cost Center Dimension Attribute.
   */
  declare creditCardCostCenterDimensionAttribute: DeserializedType<
    T,
    'Edm.Int64'
  >;
  /**
   * Sales Book Format Mapping Id.
   */
  declare salesBookFormatMappingId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Account Revenue.
   * @nullable
   */
  declare accountRevenue?: ItemCust | null;
  /**
   * Collection Letter Generation Level.
   * @nullable
   */
  declare collectionLetterGenerationLevel?: CustCollectionLetterGenerationLevel | null;
  /**
   * Cash Disc Vat.
   * @nullable
   */
  declare cashDiscVat?: NoYes | null;
  /**
   * Posting Profile Bills Remit Collection.
   * @nullable
   */
  declare postingProfileBillsRemitCollection?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Mandate Default Expiration Months.
   */
  declare mandateDefaultExpirationMonths: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Credit Card Cust Purge Threshold.
   */
  declare creditCardCustPurgeThreshold: DeserializedType<T, 'Edm.Int32'>;
  /**
   * B 2 B Scheme Bank Submission Days Recurring.
   */
  declare b2BSchemeBankSubmissionDaysRecurring: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Prenotification Days First.
   */
  declare prenotificationDaysFirst: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Adjustment Date To Use.
   * @nullable
   */
  declare adjustmentDateToUse?: CustInterestAdjustmentDateToUse | null;
  /**
   * Mixed Payment.
   * @nullable
   */
  declare mixedPayment?: NoYes | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Max Mst Over Under.
   */
  declare maxMstOverUnder: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cash Disc For Partial Paym.
   * @nullable
   */
  declare cashDiscForPartialPaym?: NoYes | null;
  /**
   * Use Settlement Priority.
   * @nullable
   */
  declare useSettlementPriority?: NoYes | null;
  /**
   * Credit Line Error.
   * @nullable
   */
  declare creditLineError?: CreditLineErrorType | null;
  /**
   * Account Consumption.
   * @nullable
   */
  declare accountConsumption?: ItemCust | null;
  /**
   * Mandatory Vat Num.
   * @nullable
   */
  declare mandatoryVatNum?: TaxVatNumCountryRegionType | null;
  /**
   * Due To Trans Date.
   * @nullable
   */
  declare dueToTransDate?: NoYes | null;
  /**
   * Prepayment Handling Layout W.
   * @nullable
   */
  declare prepaymentHandlingLayoutW?: PrepaymentHandlingLayoutW | null;

  constructor(_entityApi: CustParametersBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface CustParametersBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  key: DeserializedType<T, 'Edm.Int32'>;
  salesCycle?: NoYes | null;
  postingProfileBills?: DeserializedType<T, 'Edm.String'> | null;
  creditCardEstShippingChargeValue: DeserializedType<T, 'Edm.Decimal'>;
  enableCancelPostingProfiles?: NoYes | null;
  prenotificationDaysRecurring: DeserializedType<T, 'Edm.Int32'>;
  creditCardNotes?: DeserializedType<T, 'Edm.String'> | null;
  prorationType?: CustSettlementProrationType | null;
  collectionLetterPostBatchTaskPercentage: DeserializedType<T, 'Edm.Decimal'>;
  taxItemGroupRu?: DeserializedType<T, 'Edm.String'> | null;
  minimumWaiveDays: DeserializedType<T, 'Edm.Int32'>;
  projLedgerAllowEdit?: NoYes | null;
  useSequentialLineNumbersWhenPostingCustomerInvoiceLines?: NoYes | null;
  prepaymentPostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  minRefund: DeserializedType<T, 'Edm.Decimal'>;
  collectionsExcludeDisputedTransactions?: NoYes | null;
  mandatoryInvoiceVatNum?: TaxVatNumCountryRegionType | null;
  custUseBillingClassificationPsn?: NoYes | null;
  collectionAgencyTaxRateW: DeserializedType<T, 'Edm.Decimal'>;
  accountDisc?: ItemCust | null;
  advanceInvoicePostingProfileW?: DeserializedType<T, 'Edm.String'> | null;
  coreSchemeBankSubmissionDaysFirst: DeserializedType<T, 'Edm.Int32'>;
  entryCertificateIssuingEnabledW?: NoYes | null;
  creditNoteCashDiscountCz?: NoYes | null;
  advInvDateW?: ErrorTolerance | null;
  enableReturnPostingProfiles?: NoYes | null;
  taxPeriodPaymentCodePl?: DeserializedType<T, 'Edm.String'> | null;
  collectionsGeneralSysEmailId?: DeserializedType<T, 'Edm.String'> | null;
  freeTextInvoiceStopInvoicePostingOnFirstError?: NoYes | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  creditNoteReasonReq?: NoYes | null;
  cancelPaymentReasonReq?: NoYes | null;
  tamDeductionCustPaymSettleMethod?: TamDeductionCustPaymSettleMethod | null;
  spanBillingCodeAcrossInvoices?: NoYes | null;
  advanceInvoiceReversalCorrectionW?: NoYes | null;
  invoiceReferenceNumberSequenceTable: DeserializedType<T, 'Edm.Int64'>;
  invoiceReferenceNumberFormulaFi?: InvoiceReferenceNumberFormulaTypeFi | null;
  creditCardPostingBankTransactionType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  custTableChangeProposalIsEnabled?: NoYes | null;
  taxIntegrationSystemCn?: NoYes | null;
  prepaymentDateW?: ErrorTolerance | null;
  settlePrepaymentVatTypeRu?: CustSettlePrepaymentVatTypeRu | null;
  collectionsOmTeam: DeserializedType<T, 'Edm.Int64'>;
  entryCertificateManagementEnabledW?: NoYes | null;
  taxAdjustmentInReturn?: NoYes | null;
  creditCardAuthTransArchiveThreshold: DeserializedType<T, 'Edm.Int32'>;
  enableSubstitutionProjectInvoicesTh?: NoYes | null;
  collectionsWriteOffReasonTable?: DeserializedType<T, 'Edm.String'> | null;
  custTableChangeProposalDataEntityBehavior?: CustTableChangeProposalDataEntityBehavior | null;
  settlementUpdateCashDiscDateReduceDeadlock?: NoYes | null;
  tamDeductionType?: DeserializedType<T, 'Edm.String'> | null;
  isInvoiceZeroAmount?: NoYes | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  postingProfileBillsRemitDiscount?: DeserializedType<T, 'Edm.String'> | null;
  usualExporterExemptionTaxGroupIt?: DeserializedType<T, 'Edm.String'> | null;
  advanceInvoiceTaxGroupW?: DeserializedType<T, 'Edm.String'> | null;
  creditMaxCheck?: TypeOfCreditmaxCheck | null;
  dimSettlementCtrlTypeRu?: DimSettlementCtrlTypeRu | null;
  custTaxationRu?: CustTaxationRu | null;
  enableReferToCollectionAgencyW?: NoYes | null;
  taxIdValidation?: TaxIdValidation | null;
  due2Payment?: DeserializedType<T, 'Edm.String'> | null;
  enableSingleLineTaxAdjustment?: NoYes | null;
  defaultFilterForCustomerTransactions?: CustVendShowTransaction | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  cashDisc?: UnspecificSpecific | null;
  percentCustomersPerBatchTask: DeserializedType<T, 'Edm.Decimal'>;
  collectionsWriteOffSeparateSalesTax?: NoYes | null;
  collectionsStatementSysEmailId?: DeserializedType<T, 'Edm.String'> | null;
  checkForOverlapsAndGaps?: NoYes | null;
  collectionsWriteOffLedgerJournalName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  settlementWriteOffEnabled?: NoYes | null;
  prepaymentLinkW?: ErrorTolerance | null;
  showAmountDebitCreditJp?: NoYes | null;
  invoiceLinePriority?: CustInvoiceLinePriority | null;
  creditLimitCheckFreeInvoice?: NoYes | null;
  salesBookFactureProcessingTypeRu?: SalesBookFactureProcessingTypeRu | null;
  enableSubstitutionInvoicesTh?: NoYes | null;
  creditLimitCheckSales?: NoYes | null;
  reversePrepaymentW?: NoYes | null;
  enableProject?: NoYes | null;
  enableDateOfVatRegisterChangingCz?: NoYes | null;
  taxReimbursementExchangeRateTypeHu: DeserializedType<T, 'Edm.Int64'>;
  taxAllowEditingReturnCreditWithTaxAdj?: NoYes | null;
  postingProfileBillsProtested?: DeserializedType<T, 'Edm.String'> | null;
  collectionsWriteOffBaseAmountSalesTax?: DefaultNoYes | null;
  automaticTotalDiscount?: NoYes | null;
  invoice2Due?: DeserializedType<T, 'Edm.String'> | null;
  creditInvoicingReport?: NoYes | null;
  primaryRelationBr?: ItemCust | null;
  creditCardEstShippingChargeType?: CreditCardEstShippingChargeType | null;
  commissionTypeIt?: CommissionTypeIt | null;
  pkWiUCodeRequirement?: CustPkWiUErrorLevel | null;
  advanceInvoiceTaxItemGroupW?: DeserializedType<T, 'Edm.String'> | null;
  mcrEnablePriceDetails?: NoYes | null;
  b2BSchemeBankSubmissionDaysFirst: DeserializedType<T, 'Edm.Int32'>;
  creditCardPaymentBreakDownProcess?: NoYes | null;
  editCashDiscountsWhenDueDateChanged?: NoYes | null;
  tamRebatePosting?: McrItemCustCatalog | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  checkInvoiceW?: NoYes | null;
  custAgingSnapshotBatchLimit: DeserializedType<T, 'Edm.Int32'>;
  calculateStatisticsForZeroBalanceCustomers?: NoYes | null;
  collectionsStatRepInterval?: DeserializedType<T, 'Edm.String'> | null;
  collectionGracePeriodForDuesTransferW: DeserializedType<T, 'Edm.Int32'>;
  rTax25DebtModel: DeserializedType<T, 'Edm.Int64'>;
  creditCardPostingAccountType?: LedgerJournalAcType | null;
  isTotalsCalculationAutomatic?: NoYes | null;
  mcrDefaultDimensionHierarchy?: McrItemCustCatalog | null;
  allowCrossCompanyEmployee?: NoYes | null;
  enableChronologicalInvoiceNumberingW?: NoYes | null;
  taxOnPrepayment?: NoYes | null;
  packagingWeightOnInvoice?: NoYes | null;
  advanceInvoiceCreditCorrectionW?: NoYes | null;
  freeTextInvoiceTimezonePreference?: SalesDocumentTimezonePreference | null;
  returnOrdersReasonReq?: NoYes | null;
  rTax25DebtModelTax: DeserializedType<T, 'Edm.Int64'>;
  tamDeductionRequireFullSettle?: NoYes | null;
  transReversalReasonReq?: NoYes | null;
  usePriorityOnAutoSettlement?: NoYes | null;
  creditCardPreAuthorization?: NoYes | null;
  budgetSettle?: DeserializedType<T, 'Edm.String'> | null;
  billsJournalsValidations?: NoYes | null;
  mandatoryTaxGroup?: NoYes | null;
  invoiceIdEditingW?: NoYes | null;
  doPrintTransportationDocument?: NoYes | null;
  defaultCust?: DeserializedType<T, 'Edm.String'> | null;
  itemDimAdjustLineControlRu?: NoYes | null;
  collectionLetterIgnoreCreditTransactionCodes?: NoYes | null;
  reasonCodeCashDiscountCz?: DeserializedType<T, 'Edm.String'> | null;
  maximumWaiveDays: DeserializedType<T, 'Edm.Int32'>;
  custInvoiceRefNumFi?: NoYes | null;
  custInterestCalc?: CustInterestCalc | null;
  matchedPackingSlipsInquiry?: NoYes | null;
  settlementWriteOffReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  suppressDepreciationOfPaymentSection?: NoYes | null;
  mandatoryItemTaxGroup?: NoYes | null;
  bypassValidationOfAccountingDistributions?: NoYes | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  agreementCreditLineRu?: NoYes | null;
  collectionLetterCodeUpdate?: CustPostedPrinted | null;
  coreSchemeBankSubmissionDaysRecurring: DeserializedType<T, 'Edm.Int32'>;
  creditCardEnableIdempotencyKey?: NoYes | null;
  invoicePeriod?: DeserializedType<T, 'Edm.String'> | null;
  creditCardPreapprovalLastNoOfDays: DeserializedType<T, 'Edm.Int32'>;
  salesBookAdditionalListFormatMappingId: DeserializedType<T, 'Edm.Int64'>;
  useFiscalInvoiceAccount?: UseFiscalInvoiceAccount | null;
  automaticIntentLetterAssignmentIt?: NoYes | null;
  collectionsSalespersonSysEmailId?: DeserializedType<T, 'Edm.String'> | null;
  creditCardEstShippingChargeMax: DeserializedType<T, 'Edm.Decimal'>;
  taxGroupRu?: DeserializedType<T, 'Edm.String'> | null;
  creditError?: NoYes | null;
  custTableCopyTaxRegistionNumAsTaxExemptNum?: NoYes | null;
  maxMstDiff: DeserializedType<T, 'Edm.Decimal'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  prepaymentFactureAutoCreateRu?: NoYes | null;
  markOpenInvoiceLine?: NoYes | null;
  cor1SchemeBankSubmissionDaysRecurring: DeserializedType<T, 'Edm.Int32'>;
  defaultFreeTextInvoicePostingTopPickBatchTasks: DeserializedType<
    T,
    'Edm.Int32'
  >;
  rTax25ProfitTable: DeserializedType<T, 'Edm.Int64'>;
  settlementWriteOffJournalName?: DeserializedType<T, 'Edm.String'> | null;
  cor1SchemeBankSubmissionDaysFirst: DeserializedType<T, 'Edm.Int32'>;
  autoSettle?: NoYes | null;
  custConsInvoiceJp?: NoYes | null;
  advInvAmountW?: ErrorTolerance | null;
  custNameFromVatNum?: NoYes | null;
  cashDiscForCreditNote?: NoYes | null;
  rTax25ReceiptPct: DeserializedType<T, 'Edm.Decimal'>;
  bankCustPaymIdTable: DeserializedType<T, 'Edm.Int64'>;
  accountPositions: DeserializedType<T, 'Edm.Int32'>;
  postingProfileBillsEndorsed?: DeserializedType<T, 'Edm.String'> | null;
  creditCardCostCenterDimensionAttribute: DeserializedType<T, 'Edm.Int64'>;
  salesBookFormatMappingId: DeserializedType<T, 'Edm.Int64'>;
  accountRevenue?: ItemCust | null;
  collectionLetterGenerationLevel?: CustCollectionLetterGenerationLevel | null;
  cashDiscVat?: NoYes | null;
  postingProfileBillsRemitCollection?: DeserializedType<T, 'Edm.String'> | null;
  mandateDefaultExpirationMonths: DeserializedType<T, 'Edm.Int32'>;
  creditCardCustPurgeThreshold: DeserializedType<T, 'Edm.Int32'>;
  b2BSchemeBankSubmissionDaysRecurring: DeserializedType<T, 'Edm.Int32'>;
  prenotificationDaysFirst: DeserializedType<T, 'Edm.Int32'>;
  adjustmentDateToUse?: CustInterestAdjustmentDateToUse | null;
  mixedPayment?: NoYes | null;
  overrideSalesTax?: NoYes | null;
  maxMstOverUnder: DeserializedType<T, 'Edm.Decimal'>;
  cashDiscForPartialPaym?: NoYes | null;
  useSettlementPriority?: NoYes | null;
  creditLineError?: CreditLineErrorType | null;
  accountConsumption?: ItemCust | null;
  mandatoryVatNum?: TaxVatNumCountryRegionType | null;
  dueToTransDate?: NoYes | null;
  prepaymentHandlingLayoutW?: PrepaymentHandlingLayoutW | null;
}
