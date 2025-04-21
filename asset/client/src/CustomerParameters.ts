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
import type { CustomerParametersApi } from './CustomerParametersApi';
import { NoYes } from './NoYes';
import { CustInvoiceLinePriority } from './CustInvoiceLinePriority';
import { UseFiscalInvoiceAccount } from './UseFiscalInvoiceAccount';
import { TypeOfCreditmaxCheck } from './TypeOfCreditmaxCheck';
import { CustPostedPrinted } from './CustPostedPrinted';
import { CustInterestAdjustmentDateToUse } from './CustInterestAdjustmentDateToUse';
import { CustLanguageAccountType } from './CustLanguageAccountType';
import { CustSettlementProrationType } from './CustSettlementProrationType';
import { MarkupValueBase } from './MarkupValueBase';
import { CreditCardEstShippingChargeType } from './CreditCardEstShippingChargeType';
import { ItemCust } from './ItemCust';
import { CustTableChangeProposalDataEntityBehavior } from './CustTableChangeProposalDataEntityBehavior';
import { UnspecificSpecific } from './UnspecificSpecific';
import { CreditLineErrorType } from './CreditLineErrorType';
import { MarkupPeriodChargeRuleSiteLocationMatch } from './MarkupPeriodChargeRuleSiteLocationMatch';
import { CustInterestCalc } from './CustInterestCalc';
import { MarkupPeriodChargeRuleQtyThresholdMatch } from './MarkupPeriodChargeRuleQtyThresholdMatch';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { CustVendShowTransaction } from './CustVendShowTransaction';
import { CustVendExchAdjRateSource } from './CustVendExchAdjRateSource';
import { SalesReturnDeliverRemainderPolicy } from './SalesReturnDeliverRemainderPolicy';
import { CustCollectionLetterGenerationLevel } from './CustCollectionLetterGenerationLevel';
import { TaxVatNumCountryRegionType } from './TaxVatNumCountryRegionType';
import { TamDeductionCustPaymSettleMethod } from './TamDeductionCustPaymSettleMethod';
import { McrItemCustCatalog } from './McrItemCustCatalog';
import { CustSettlePrepaymentVatTypeRu } from './CustSettlePrepaymentVatTypeRu';
import { ErrorTolerance } from './ErrorTolerance';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "CustomerParameters" of service "d365_metadata".
 */
export class CustomerParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustomerParametersType<T>
{
  /**
   * Technical entity name for CustomerParameters.
   */
  static override _entityName = 'CustomerParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerParameters entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Credit Card Posting Bank Transaction Type.
   * @nullable
   */
  declare creditCardPostingBankTransactionType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Credit Card Auth Trans Archive Threshold.
   */
  declare creditCardAuthTransArchiveThreshold: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Collection Letter Disputed Transactions Excluded.
   * @nullable
   */
  declare collectionLetterDisputedTransactionsExcluded?: NoYes | null;
  /**
   * Credit Card Estimated Shipping Charge Maximum.
   */
  declare creditCardEstimatedShippingChargeMaximum: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Settlement Invoice Line Prioritization Method.
   * @nullable
   */
  declare settlementInvoiceLinePrioritizationMethod?: CustInvoiceLinePriority | null;
  /**
   * Is Invoice Zero Amount.
   * @nullable
   */
  declare isInvoiceZeroAmount?: NoYes | null;
  /**
   * Use Fiscal Data From Invoice Account.
   * @nullable
   */
  declare useFiscalDataFromInvoiceAccount?: UseFiscalInvoiceAccount | null;
  /**
   * Cash Discount Reason Code.
   * @nullable
   */
  declare cashDiscountReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Limit Check Type.
   * @nullable
   */
  declare creditLimitCheckType?: TypeOfCreditmaxCheck | null;
  /**
   * Invoice Print Packaging Weight.
   * @nullable
   */
  declare invoicePrintPackagingWeight?: NoYes | null;
  /**
   * Is Markup Research Prior Posting Enabled.
   * @nullable
   */
  declare isMarkupResearchPriorPostingEnabled?: NoYes | null;
  /**
   * Collections Statement To Contact Email Template Id.
   * @nullable
   */
  declare collectionsStatementToContactEmailTemplateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Collection Letter Code Update.
   * @nullable
   */
  declare collectionLetterCodeUpdate?: CustPostedPrinted | null;
  /**
   * Settlement Write Off Reason Code.
   * @nullable
   */
  declare settlementWriteOffReasonCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Settlement Maximum Over Under Payment.
   */
  declare settlementMaximumOverUnderPayment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Enable Date Of Vat Register Changing.
   * @nullable
   */
  declare enableDateOfVatRegisterChanging?: NoYes | null;
  /**
   * Collections Write Off Reason Code.
   * @nullable
   */
  declare collectionsWriteOffReasonCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Interest Adjustment Date To Use.
   * @nullable
   */
  declare interestAdjustmentDateToUse?: CustInterestAdjustmentDateToUse | null;
  /**
   * Default Language.
   * @nullable
   */
  declare defaultLanguage?: CustLanguageAccountType | null;
  /**
   * Settlement Proration Type For Invoices.
   * @nullable
   */
  declare settlementProrationTypeForInvoices?: CustSettlementProrationType | null;
  /**
   * Markup Value Base.
   * @nullable
   */
  declare markupValueBase?: MarkupValueBase | null;
  /**
   * Credit Card Posting Ledger Dimension Display Value.
   * @nullable
   */
  declare creditCardPostingLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Credit Card Estimated Shipping Charge Type.
   * @nullable
   */
  declare creditCardEstimatedShippingChargeType?: CreditCardEstShippingChargeType | null;
  /**
   * Reason Requirement For Credit Notes.
   * @nullable
   */
  declare reasonRequirementForCreditNotes?: NoYes | null;
  /**
   * Interest Minimum Days To Allow Waiving.
   */
  declare interestMinimumDaysToAllowWaiving: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Initialize Attribute Based Pricing Id.
   * @nullable
   */
  declare initializeAttributeBasedPricingId?: NoYes | null;
  /**
   * Collection Letter Ignore Credit Transaction Codes.
   * @nullable
   */
  declare collectionLetterIgnoreCreditTransactionCodes?: NoYes | null;
  /**
   * Change Proposal Is Enabled.
   * @nullable
   */
  declare changeProposalIsEnabled?: NoYes | null;
  /**
   * General Ledger Posting Account For Revenue.
   * @nullable
   */
  declare generalLedgerPostingAccountForRevenue?: ItemCust | null;
  /**
   * Change Proposal Data Entity Behavior.
   * @nullable
   */
  declare changeProposalDataEntityBehavior?: CustTableChangeProposalDataEntityBehavior | null;
  /**
   * Edit Cash Discounts When Due Date Changed.
   * @nullable
   */
  declare editCashDiscountsWhenDueDateChanged?: NoYes | null;
  /**
   * Price Details Enabled For Sales Documents.
   * @nullable
   */
  declare priceDetailsEnabledForSalesDocuments?: NoYes | null;
  /**
   * Cash Discount Administration.
   * @nullable
   */
  declare cashDiscountAdministration?: UnspecificSpecific | null;
  /**
   * Collections Is Refer To Collection Agency Enabled.
   * @nullable
   */
  declare collectionsIsReferToCollectionAgencyEnabled?: NoYes | null;
  /**
   * Customer Is Consolidated Invoice Used.
   * @nullable
   */
  declare customerIsConsolidatedInvoiceUsed?: NoYes | null;
  /**
   * General Ledger Is Amount Debit Credit Shown.
   * @nullable
   */
  declare generalLedgerIsAmountDebitCreditShown?: NoYes | null;
  /**
   * Credit Card Estimated Shipping Charge Value.
   */
  declare creditCardEstimatedShippingChargeValue: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Accounting Currency Exchange Rate Type.
   * @nullable
   */
  declare accountingCurrencyExchangeRateType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customer Minimum Refund.
   */
  declare customerMinimumRefund: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Credit Card Notes.
   * @nullable
   */
  declare creditCardNotes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bypass Validation Of Accounting Distributions.
   * @nullable
   */
  declare bypassValidationOfAccountingDistributions?: NoYes | null;
  /**
   * Settlement Span Billing Code Across Invoices.
   * @nullable
   */
  declare settlementSpanBillingCodeAcrossInvoices?: NoYes | null;
  /**
   * Credit Card Authorization.
   * @nullable
   */
  declare creditCardAuthorization?: NoYes | null;
  /**
   * Entry Certificate Is Management Enabled.
   * @nullable
   */
  declare entryCertificateIsManagementEnabled?: NoYes | null;
  /**
   * Free Text Invoice Can Edit Ledger Account For Project.
   * @nullable
   */
  declare freeTextInvoiceCanEditLedgerAccountForProject?: NoYes | null;
  /**
   * Customer Is Tax Group Mandatory.
   * @nullable
   */
  declare customerIsTaxGroupMandatory?: NoYes | null;
  /**
   * Credit Limit Is Checked On Free Text Invoice.
   * @nullable
   */
  declare creditLimitIsCheckedOnFreeTextInvoice?: NoYes | null;
  /**
   * Credit Limit Message Type Shown When Exceeding.
   * @nullable
   */
  declare creditLimitMessageTypeShownWhenExceeding?: CreditLineErrorType | null;
  /**
   * Free Text Invoice Is Item Tax Group Mandatory.
   * @nullable
   */
  declare freeTextInvoiceIsItemTaxGroupMandatory?: NoYes | null;
  /**
   * Credit Limit Is Checked On Sales Order.
   * @nullable
   */
  declare creditLimitIsCheckedOnSalesOrder?: NoYes | null;
  /**
   * Markup Period Charge Rule Site Location Match.
   * @nullable
   */
  declare markupPeriodChargeRuleSiteLocationMatch?: MarkupPeriodChargeRuleSiteLocationMatch | null;
  /**
   * Interest Transactions To Calculate For.
   * @nullable
   */
  declare interestTransactionsToCalculateFor?: CustInterestCalc | null;
  /**
   * Interest Maximum Days Allowed To Waive.
   */
  declare interestMaximumDaysAllowedToWaive: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Settlement Maximum Penny Difference.
   */
  declare settlementMaximumPennyDifference: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Markup Calculation Per Invoice For Summary Update Enabled.
   * @nullable
   */
  declare isMarkupCalculationPerInvoiceForSummaryUpdateEnabled?: NoYes | null;
  /**
   * Reason Requirement For Payment Cancellation.
   * @nullable
   */
  declare reasonRequirementForPaymentCancellation?: NoYes | null;
  /**
   * Collections Transactions To Contact Email Template Id.
   * @nullable
   */
  declare collectionsTransactionsToContactEmailTemplateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Credit Card Authorization Last Number Of Days.
   */
  declare creditCardAuthorizationLastNumberOfDays: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Is Validation On Bill Of Exchange Journals Enabled.
   * @nullable
   */
  declare isValidationOnBillOfExchangeJournalsEnabled?: NoYes | null;
  /**
   * Skip Referenced Data During Change Tracking.
   * @nullable
   */
  declare skipReferencedDataDuringChangeTracking?: NoYes | null;
  /**
   * Payment Proposal Warn When Multiple Methods Of Payment.
   * @nullable
   */
  declare paymentProposalWarnWhenMultipleMethodsOfPayment?: NoYes | null;
  /**
   * Free Text Invoice Stop Invoice Posting On First Error.
   * @nullable
   */
  declare freeTextInvoiceStopInvoicePostingOnFirstError?: NoYes | null;
  /**
   * Collections Team Party Number.
   * @nullable
   */
  declare collectionsTeamPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Date Treatment Of Bill Of Exchange Journals Enabled.
   * @nullable
   */
  declare isDateTreatmentOfBillOfExchangeJournalsEnabled?: NoYes | null;
  /**
   * Markup Period Charge Rule Qty Threshold Match.
   * @nullable
   */
  declare markupPeriodChargeRuleQtyThresholdMatch?: MarkupPeriodChargeRuleQtyThresholdMatch | null;
  /**
   * Direct Debit Core Scheme Default Days For Recurring Bank Submission.
   */
  declare directDebitCoreSchemeDefaultDaysForRecurringBankSubmission: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Is Totals Calculation Automatic.
   * @nullable
   */
  declare isTotalsCalculationAutomatic?: NoYes | null;
  /**
   * Invoice Is Credit Note Posted As Correction.
   * @nullable
   */
  declare invoiceIsCreditNotePostedAsCorrection?: NoYes | null;
  /**
   * Total Discount Is Calculated On Posting.
   * @nullable
   */
  declare totalDiscountIsCalculatedOnPosting?: NoYes | null;
  /**
   * Settlement Auto Settle Enabled.
   * @nullable
   */
  declare settlementAutoSettleEnabled?: NoYes | null;
  /**
   * Direct Debit Cor 1 Scheme Default Days For First Bank Submission.
   */
  declare directDebitCor1SchemeDefaultDaysForFirstBankSubmission: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Settlement Is Priority Used On Auto Settlement.
   * @nullable
   */
  declare settlementIsPriorityUsedOnAutoSettlement?: NoYes | null;
  /**
   * Use Sequential Line Numbers When Posting Customer Invoice Lines.
   * @nullable
   */
  declare useSequentialLineNumbersWhenPostingCustomerInvoiceLines?: NoYes | null;
  /**
   * Cash Flow Liquidity Account For Payments Display Value.
   * @nullable
   */
  declare cashFlowLiquidityAccountForPaymentsDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Prepayment Calculate Tax.
   * @nullable
   */
  declare prepaymentCalculateTax?: NoYes | null;
  /**
   * Cash Discount Is Calculated For Partial Payments.
   * @nullable
   */
  declare cashDiscountIsCalculatedForPartialPayments?: NoYes | null;
  /**
   * Credit Card Posting Account Type.
   * @nullable
   */
  declare creditCardPostingAccountType?: LedgerJournalAcType | null;
  /**
   * Settlement Write Off Journal Name.
   * @nullable
   */
  declare settlementWriteOffJournalName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Bill Of Exchange Posting Profile For Endorsed.
   * @nullable
   */
  declare billOfExchangePostingProfileForEndorsed?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * General Ledger Posting Account For Consumption.
   * @nullable
   */
  declare generalLedgerPostingAccountForConsumption?: ItemCust | null;
  /**
   * Cash Flow Percentage Of Amount To Allocate To Cash Flow Forecast.
   * @nullable
   */
  declare cashFlowPercentageOfAmountToAllocateToCashFlowForecast?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Filter For Customer Transactions.
   * @nullable
   */
  declare defaultFilterForCustomerTransactions?: CustVendShowTransaction | null;
  /**
   * Exch Adj Rate Source.
   * @nullable
   */
  declare exchAdjRateSource?: CustVendExchAdjRateSource | null;
  /**
   * Prepayment Posting Profile.
   * @nullable
   */
  declare prepaymentPostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tam Deduction Require Full Settle.
   * @nullable
   */
  declare tamDeductionRequireFullSettle?: NoYes | null;
  /**
   * General Ledger Posting Account For Discount.
   * @nullable
   */
  declare generalLedgerPostingAccountForDiscount?: ItemCust | null;
  /**
   * Giro Account Positions.
   */
  declare giroAccountPositions: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Markup Period Charge Batch Helpers.
   */
  declare markupPeriodChargeBatchHelpers: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Free Text Invoice Is Project Enabled.
   * @nullable
   */
  declare freeTextInvoiceIsProjectEnabled?: NoYes | null;
  /**
   * Entry Certificate Is Issuing Enabled.
   * @nullable
   */
  declare entryCertificateIsIssuingEnabled?: NoYes | null;
  /**
   * Cash Flow Time Between Delivery Date And Invoice Date.
   * @nullable
   */
  declare cashFlowTimeBetweenDeliveryDateAndInvoiceDate?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Direct Debit Mandate Default Expiration In Months.
   */
  declare directDebitMandateDefaultExpirationInMonths: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Settlement Is Priority Used.
   * @nullable
   */
  declare settlementIsPriorityUsed?: NoYes | null;
  /**
   * General Ledger Enable Cancel Posting Profiles.
   * @nullable
   */
  declare generalLedgerEnableCancelPostingProfiles?: NoYes | null;
  /**
   * Direct Debit B 2 B Scheme Default Days For Recurring Bank Submission.
   */
  declare directDebitB2BSchemeDefaultDaysForRecurringBankSubmission: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Collections Write Off Is Sales Tax Separated.
   * @nullable
   */
  declare collectionsWriteOffIsSalesTaxSeparated?: NoYes | null;
  /**
   * Customer Default One Time Account.
   * @nullable
   */
  declare customerDefaultOneTimeAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cash Flow Time Between Invoice Due Date And Payment Date.
   * @nullable
   */
  declare cashFlowTimeBetweenInvoiceDueDateAndPaymentDate?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Bill Of Exchange Posting Profile For Remit Collection.
   * @nullable
   */
  declare billOfExchangePostingProfileForRemitCollection?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Direct Debit Default Days For Recurring Prenotification.
   */
  declare directDebitDefaultDaysForRecurringPrenotification: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Credit Card Cost Center Dimension Attribute.
   * @nullable
   */
  declare creditCardCostCenterDimensionAttribute?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Collections Agency Tax Rate.
   */
  declare collectionsAgencyTaxRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reason Requirement For Return Orders.
   * @nullable
   */
  declare reasonRequirementForReturnOrders?: NoYes | null;
  /**
   * Bill Of Exchange Posting Profile.
   * @nullable
   */
  declare billOfExchangePostingProfile?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Reason Requirement For Transaction Reversals.
   * @nullable
   */
  declare reasonRequirementForTransactionReversals?: NoYes | null;
  /**
   * Replace Alternative Item Line Defaults.
   * @nullable
   */
  declare replaceAlternativeItemLineDefaults?: NoYes | null;
  /**
   * Primary Relation.
   * @nullable
   */
  declare primaryRelation?: ItemCust | null;
  /**
   * Cash Discount Is Credit Note Posted.
   * @nullable
   */
  declare cashDiscountIsCreditNotePosted?: NoYes | null;
  /**
   * Sales Return Deliver Remainder Policy.
   * @nullable
   */
  declare salesReturnDeliverRemainderPolicy?: SalesReturnDeliverRemainderPolicy | null;
  /**
   * Sales Entity Calculate Line Amount.
   * @nullable
   */
  declare salesEntityCalculateLineAmount?: NoYes | null;
  /**
   * Collections Transactions To Salesperson Email Template Id.
   * @nullable
   */
  declare collectionsTransactionsToSalespersonEmailTemplateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Collections Aging Period Definition.
   * @nullable
   */
  declare collectionsAgingPeriodDefinition?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Markup Period Charge Rule Is Charge Code Match Required.
   * @nullable
   */
  declare markupPeriodChargeRuleIsChargeCodeMatchRequired?: NoYes | null;
  /**
   * Settlement Mark Open Invoice Line.
   * @nullable
   */
  declare settlementMarkOpenInvoiceLine?: NoYes | null;
  /**
   * Settlement Write Off Enabled.
   * @nullable
   */
  declare settlementWriteOffEnabled?: NoYes | null;
  /**
   * Credit Card Enable Idempotency Key.
   * @nullable
   */
  declare creditCardEnableIdempotencyKey?: NoYes | null;
  /**
   * General Ledger Enable Return Posting Profiles.
   * @nullable
   */
  declare generalLedgerEnableReturnPostingProfiles?: NoYes | null;
  /**
   * Cash Discount Is Calculated On Amount Incl Sales Tax.
   * @nullable
   */
  declare cashDiscountIsCalculatedOnAmountInclSalesTax?: NoYes | null;
  /**
   * Bill Of Exchange Posting Profile For Remit Discount.
   * @nullable
   */
  declare billOfExchangePostingProfileForRemitDiscount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tam Deduction Type.
   * @nullable
   */
  declare tamDeductionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Collection Letter Generation Level.
   * @nullable
   */
  declare collectionLetterGenerationLevel?: CustCollectionLetterGenerationLevel | null;
  /**
   * Customer Tax Exempt Number Requirement.
   * @nullable
   */
  declare customerTaxExemptNumberRequirement?: TaxVatNumCountryRegionType | null;
  /**
   * Direct Debit B 2 B Scheme Default Days For First Bank Submission.
   */
  declare directDebitB2BSchemeDefaultDaysForFirstBankSubmission: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Max Number Of Sales Orders For Posting.
   */
  declare maxNumberOfSalesOrdersForPosting: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Credit Card Payment Break Down Process.
   * @nullable
   */
  declare creditCardPaymentBreakDownProcess?: NoYes | null;
  /**
   * Reporting Currency Exchange Rate Type.
   * @nullable
   */
  declare reportingCurrencyExchangeRateType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cash Discount Is Calculated For Credit Notes.
   * @nullable
   */
  declare cashDiscountIsCalculatedForCreditNotes?: NoYes | null;
  /**
   * Invoice Tax Exempt Number Requirement.
   * @nullable
   */
  declare invoiceTaxExemptNumberRequirement?: TaxVatNumCountryRegionType | null;
  /**
   * Tam Deduction Cust Paym Settle Method.
   * @nullable
   */
  declare tamDeductionCustPaymSettleMethod?: TamDeductionCustPaymSettleMethod | null;
  /**
   * Bill Of Exchange Posting Profile For Protested.
   * @nullable
   */
  declare billOfExchangePostingProfileForProtested?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Integration With Tax System Enabled.
   * @nullable
   */
  declare isIntegrationWithTaxSystemEnabled?: NoYes | null;
  /**
   * Suppress Depreciation Of Payment Section.
   * @nullable
   */
  declare suppressDepreciationOfPaymentSection?: NoYes | null;
  /**
   * Preserve Imported Sales Order Line Numbers.
   * @nullable
   */
  declare preserveImportedSalesOrderLineNumbers?: NoYes | null;
  /**
   * Free Text Invoice Override Sales Tax.
   * @nullable
   */
  declare freeTextInvoiceOverrideSalesTax?: NoYes | null;
  /**
   * Direct Debit Core Scheme Default Days For First Bank Submission.
   */
  declare directDebitCoreSchemeDefaultDaysForFirstBankSubmission: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Tam Rebate Posting.
   * @nullable
   */
  declare tamRebatePosting?: McrItemCustCatalog | null;
  /**
   * Collections Grace Period For Dues Transfer.
   */
  declare collectionsGracePeriodForDuesTransfer: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Invoice Print Credit Invoicing Layout.
   * @nullable
   */
  declare invoicePrintCreditInvoicingLayout?: NoYes | null;
  /**
   * General Ledger Posting Profile.
   * @nullable
   */
  declare generalLedgerPostingProfile?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Direct Debit Default Days For First Prenotification.
   */
  declare directDebitDefaultDaysForFirstPrenotification: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Collections Write Off Ledger Journal Name.
   * @nullable
   */
  declare collectionsWriteOffLedgerJournalName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Direct Debit Cor 1 Scheme Default Days For Recurring Bank Submission.
   */
  declare directDebitCor1SchemeDefaultDaysForRecurringBankSubmission: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Customer Is Billing Classification Used.
   * @nullable
   */
  declare customerIsBillingClassificationUsed?: NoYes | null;
  /**
   * Skip Sales Quotation Referenced Data During Change Tracking.
   * @nullable
   */
  declare skipSalesQuotationReferencedDataDuringChangeTracking?: NoYes | null;
  /**
   * Apply Price Disc On Sales Line Entity.
   * @nullable
   */
  declare applyPriceDiscOnSalesLineEntity?: NoYes | null;
  /**
   * General Ledger Default Dimension Hierarchy.
   * @nullable
   */
  declare generalLedgerDefaultDimensionHierarchy?: McrItemCustCatalog | null;
  /**
   * Cash Flow Terms Of Payment.
   * @nullable
   */
  declare cashFlowTermsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settle Prepayment Vat Type.
   * @nullable
   */
  declare settlePrepaymentVatType?: CustSettlePrepaymentVatTypeRu | null;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prepayment Facture Auto Create.
   * @nullable
   */
  declare prepaymentFactureAutoCreate?: NoYes | null;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reverse Prepayment.
   * @nullable
   */
  declare reversePrepayment?: NoYes | null;
  /**
   * Deductions Cust Claim Journal Name.
   * @nullable
   */
  declare deductionsCustClaimJournalName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Deductions Return Order Pre Approval.
   * @nullable
   */
  declare deductionsReturnOrderPreApproval?: NoYes | null;
  /**
   * Deductions Return Order Invoice Tolerance.
   * @nullable
   */
  declare deductionsReturnOrderInvoiceTolerance?: ErrorTolerance | null;
  /**
   * Deductions Return Order Create.
   * @nullable
   */
  declare deductionsReturnOrderCreate?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare creditCardPostingLedgerDimension?: DimensionCombinations<T> | null;

  constructor(_entityApi: CustomerParametersApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  creditCardPostingBankTransactionType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  creditCardAuthTransArchiveThreshold: DeserializedType<T, 'Edm.Int32'>;
  collectionLetterDisputedTransactionsExcluded?: NoYes | null;
  creditCardEstimatedShippingChargeMaximum: DeserializedType<T, 'Edm.Decimal'>;
  settlementInvoiceLinePrioritizationMethod?: CustInvoiceLinePriority | null;
  isInvoiceZeroAmount?: NoYes | null;
  useFiscalDataFromInvoiceAccount?: UseFiscalInvoiceAccount | null;
  cashDiscountReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  creditLimitCheckType?: TypeOfCreditmaxCheck | null;
  invoicePrintPackagingWeight?: NoYes | null;
  isMarkupResearchPriorPostingEnabled?: NoYes | null;
  collectionsStatementToContactEmailTemplateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  collectionLetterCodeUpdate?: CustPostedPrinted | null;
  settlementWriteOffReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  settlementMaximumOverUnderPayment: DeserializedType<T, 'Edm.Decimal'>;
  enableDateOfVatRegisterChanging?: NoYes | null;
  collectionsWriteOffReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  interestAdjustmentDateToUse?: CustInterestAdjustmentDateToUse | null;
  defaultLanguage?: CustLanguageAccountType | null;
  settlementProrationTypeForInvoices?: CustSettlementProrationType | null;
  markupValueBase?: MarkupValueBase | null;
  creditCardPostingLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  creditCardEstimatedShippingChargeType?: CreditCardEstShippingChargeType | null;
  reasonRequirementForCreditNotes?: NoYes | null;
  interestMinimumDaysToAllowWaiving: DeserializedType<T, 'Edm.Int32'>;
  initializeAttributeBasedPricingId?: NoYes | null;
  collectionLetterIgnoreCreditTransactionCodes?: NoYes | null;
  changeProposalIsEnabled?: NoYes | null;
  generalLedgerPostingAccountForRevenue?: ItemCust | null;
  changeProposalDataEntityBehavior?: CustTableChangeProposalDataEntityBehavior | null;
  editCashDiscountsWhenDueDateChanged?: NoYes | null;
  priceDetailsEnabledForSalesDocuments?: NoYes | null;
  cashDiscountAdministration?: UnspecificSpecific | null;
  collectionsIsReferToCollectionAgencyEnabled?: NoYes | null;
  customerIsConsolidatedInvoiceUsed?: NoYes | null;
  generalLedgerIsAmountDebitCreditShown?: NoYes | null;
  creditCardEstimatedShippingChargeValue: DeserializedType<T, 'Edm.Decimal'>;
  accountingCurrencyExchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  customerMinimumRefund: DeserializedType<T, 'Edm.Decimal'>;
  creditCardNotes?: DeserializedType<T, 'Edm.String'> | null;
  bypassValidationOfAccountingDistributions?: NoYes | null;
  settlementSpanBillingCodeAcrossInvoices?: NoYes | null;
  creditCardAuthorization?: NoYes | null;
  entryCertificateIsManagementEnabled?: NoYes | null;
  freeTextInvoiceCanEditLedgerAccountForProject?: NoYes | null;
  customerIsTaxGroupMandatory?: NoYes | null;
  creditLimitIsCheckedOnFreeTextInvoice?: NoYes | null;
  creditLimitMessageTypeShownWhenExceeding?: CreditLineErrorType | null;
  freeTextInvoiceIsItemTaxGroupMandatory?: NoYes | null;
  creditLimitIsCheckedOnSalesOrder?: NoYes | null;
  markupPeriodChargeRuleSiteLocationMatch?: MarkupPeriodChargeRuleSiteLocationMatch | null;
  interestTransactionsToCalculateFor?: CustInterestCalc | null;
  interestMaximumDaysAllowedToWaive: DeserializedType<T, 'Edm.Int32'>;
  settlementMaximumPennyDifference: DeserializedType<T, 'Edm.Decimal'>;
  isMarkupCalculationPerInvoiceForSummaryUpdateEnabled?: NoYes | null;
  reasonRequirementForPaymentCancellation?: NoYes | null;
  collectionsTransactionsToContactEmailTemplateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  creditCardAuthorizationLastNumberOfDays: DeserializedType<T, 'Edm.Int32'>;
  isValidationOnBillOfExchangeJournalsEnabled?: NoYes | null;
  skipReferencedDataDuringChangeTracking?: NoYes | null;
  paymentProposalWarnWhenMultipleMethodsOfPayment?: NoYes | null;
  freeTextInvoiceStopInvoicePostingOnFirstError?: NoYes | null;
  collectionsTeamPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  isDateTreatmentOfBillOfExchangeJournalsEnabled?: NoYes | null;
  markupPeriodChargeRuleQtyThresholdMatch?: MarkupPeriodChargeRuleQtyThresholdMatch | null;
  directDebitCoreSchemeDefaultDaysForRecurringBankSubmission: DeserializedType<
    T,
    'Edm.Int32'
  >;
  isTotalsCalculationAutomatic?: NoYes | null;
  invoiceIsCreditNotePostedAsCorrection?: NoYes | null;
  totalDiscountIsCalculatedOnPosting?: NoYes | null;
  settlementAutoSettleEnabled?: NoYes | null;
  directDebitCor1SchemeDefaultDaysForFirstBankSubmission: DeserializedType<
    T,
    'Edm.Int32'
  >;
  settlementIsPriorityUsedOnAutoSettlement?: NoYes | null;
  useSequentialLineNumbersWhenPostingCustomerInvoiceLines?: NoYes | null;
  cashFlowLiquidityAccountForPaymentsDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  prepaymentCalculateTax?: NoYes | null;
  cashDiscountIsCalculatedForPartialPayments?: NoYes | null;
  creditCardPostingAccountType?: LedgerJournalAcType | null;
  settlementWriteOffJournalName?: DeserializedType<T, 'Edm.String'> | null;
  billOfExchangePostingProfileForEndorsed?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  generalLedgerPostingAccountForConsumption?: ItemCust | null;
  cashFlowPercentageOfAmountToAllocateToCashFlowForecast?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  defaultFilterForCustomerTransactions?: CustVendShowTransaction | null;
  exchAdjRateSource?: CustVendExchAdjRateSource | null;
  prepaymentPostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  tamDeductionRequireFullSettle?: NoYes | null;
  generalLedgerPostingAccountForDiscount?: ItemCust | null;
  giroAccountPositions: DeserializedType<T, 'Edm.Int32'>;
  markupPeriodChargeBatchHelpers: DeserializedType<T, 'Edm.Int32'>;
  freeTextInvoiceIsProjectEnabled?: NoYes | null;
  entryCertificateIsIssuingEnabled?: NoYes | null;
  cashFlowTimeBetweenDeliveryDateAndInvoiceDate?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  directDebitMandateDefaultExpirationInMonths: DeserializedType<T, 'Edm.Int32'>;
  settlementIsPriorityUsed?: NoYes | null;
  generalLedgerEnableCancelPostingProfiles?: NoYes | null;
  directDebitB2BSchemeDefaultDaysForRecurringBankSubmission: DeserializedType<
    T,
    'Edm.Int32'
  >;
  collectionsWriteOffIsSalesTaxSeparated?: NoYes | null;
  customerDefaultOneTimeAccount?: DeserializedType<T, 'Edm.String'> | null;
  cashFlowTimeBetweenInvoiceDueDateAndPaymentDate?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  billOfExchangePostingProfileForRemitCollection?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  directDebitDefaultDaysForRecurringPrenotification: DeserializedType<
    T,
    'Edm.Int32'
  >;
  creditCardCostCenterDimensionAttribute?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  collectionsAgencyTaxRate: DeserializedType<T, 'Edm.Decimal'>;
  reasonRequirementForReturnOrders?: NoYes | null;
  billOfExchangePostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  reasonRequirementForTransactionReversals?: NoYes | null;
  replaceAlternativeItemLineDefaults?: NoYes | null;
  primaryRelation?: ItemCust | null;
  cashDiscountIsCreditNotePosted?: NoYes | null;
  salesReturnDeliverRemainderPolicy?: SalesReturnDeliverRemainderPolicy | null;
  salesEntityCalculateLineAmount?: NoYes | null;
  collectionsTransactionsToSalespersonEmailTemplateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  collectionsAgingPeriodDefinition?: DeserializedType<T, 'Edm.String'> | null;
  markupPeriodChargeRuleIsChargeCodeMatchRequired?: NoYes | null;
  settlementMarkOpenInvoiceLine?: NoYes | null;
  settlementWriteOffEnabled?: NoYes | null;
  creditCardEnableIdempotencyKey?: NoYes | null;
  generalLedgerEnableReturnPostingProfiles?: NoYes | null;
  cashDiscountIsCalculatedOnAmountInclSalesTax?: NoYes | null;
  billOfExchangePostingProfileForRemitDiscount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  tamDeductionType?: DeserializedType<T, 'Edm.String'> | null;
  collectionLetterGenerationLevel?: CustCollectionLetterGenerationLevel | null;
  customerTaxExemptNumberRequirement?: TaxVatNumCountryRegionType | null;
  directDebitB2BSchemeDefaultDaysForFirstBankSubmission: DeserializedType<
    T,
    'Edm.Int32'
  >;
  maxNumberOfSalesOrdersForPosting: DeserializedType<T, 'Edm.Int32'>;
  creditCardPaymentBreakDownProcess?: NoYes | null;
  reportingCurrencyExchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountIsCalculatedForCreditNotes?: NoYes | null;
  invoiceTaxExemptNumberRequirement?: TaxVatNumCountryRegionType | null;
  tamDeductionCustPaymSettleMethod?: TamDeductionCustPaymSettleMethod | null;
  billOfExchangePostingProfileForProtested?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  isIntegrationWithTaxSystemEnabled?: NoYes | null;
  suppressDepreciationOfPaymentSection?: NoYes | null;
  preserveImportedSalesOrderLineNumbers?: NoYes | null;
  freeTextInvoiceOverrideSalesTax?: NoYes | null;
  directDebitCoreSchemeDefaultDaysForFirstBankSubmission: DeserializedType<
    T,
    'Edm.Int32'
  >;
  tamRebatePosting?: McrItemCustCatalog | null;
  collectionsGracePeriodForDuesTransfer: DeserializedType<T, 'Edm.Int32'>;
  invoicePrintCreditInvoicingLayout?: NoYes | null;
  generalLedgerPostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  directDebitDefaultDaysForFirstPrenotification: DeserializedType<
    T,
    'Edm.Int32'
  >;
  collectionsWriteOffLedgerJournalName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  directDebitCor1SchemeDefaultDaysForRecurringBankSubmission: DeserializedType<
    T,
    'Edm.Int32'
  >;
  customerIsBillingClassificationUsed?: NoYes | null;
  skipSalesQuotationReferencedDataDuringChangeTracking?: NoYes | null;
  applyPriceDiscOnSalesLineEntity?: NoYes | null;
  generalLedgerDefaultDimensionHierarchy?: McrItemCustCatalog | null;
  cashFlowTermsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  settlePrepaymentVatType?: CustSettlePrepaymentVatTypeRu | null;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  prepaymentFactureAutoCreate?: NoYes | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  reversePrepayment?: NoYes | null;
  deductionsCustClaimJournalName?: DeserializedType<T, 'Edm.String'> | null;
  deductionsReturnOrderPreApproval?: NoYes | null;
  deductionsReturnOrderInvoiceTolerance?: ErrorTolerance | null;
  deductionsReturnOrderCreate?: NoYes | null;
  creditCardPostingLedgerDimension?: DimensionCombinationsType<T> | null;
}
