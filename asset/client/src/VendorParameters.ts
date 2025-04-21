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
import type { VendorParametersApi } from './VendorParametersApi';
import { NoYes } from './NoYes';
import { UseFiscalInvoiceAccount } from './UseFiscalInvoiceAccount';
import { TaxVatNumCountryRegionType } from './TaxVatNumCountryRegionType';
import { WeekDays } from './WeekDays';
import { ItemVend } from './ItemVend';
import { PurchMatchingPolicyOverrideOption } from './PurchMatchingPolicyOverrideOption';
import { UnknownNoYes } from './UnknownNoYes';
import { VendInvoiceDefaultGroupType } from './VendInvoiceDefaultGroupType';
import { VendInvoiceDocDate } from './VendInvoiceDocDate';
import { ReuseVoucher } from './ReuseVoucher';
import { InvoicePolicyViolationStatus } from './InvoicePolicyViolationStatus';
import { VendTaxRegisterApproval } from './VendTaxRegisterApproval';
import { SettlementType } from './SettlementType';
import { DiscountOffsetMethod } from './DiscountOffsetMethod';
import { UnspecificSpecific } from './UnspecificSpecific';
import { DisplayTotalPriceMatchOption } from './DisplayTotalPriceMatchOption';
import { InvoiceMatchPostingOption } from './InvoiceMatchPostingOption';
import { DisplayInvoiceMiscChargeMatchOption } from './DisplayInvoiceMiscChargeMatchOption';
import { TypeOfCreditmaxCheck } from './TypeOfCreditmaxCheck';
import { ExtendedPriceMatching } from './ExtendedPriceMatching';
import { PurchMatchingPolicyOption } from './PurchMatchingPolicyOption';
import { CustVendShowTransaction } from './CustVendShowTransaction';
import { CustVendExchAdjRateSource } from './CustVendExchAdjRateSource';
import { PurchPrepayApplicationPolicy } from './PurchPrepayApplicationPolicy';
import { DimensionHierarchyType } from './DimensionHierarchyType';
import { DisplayPriceMatchOption } from './DisplayPriceMatchOption';
import { ExtendedPriceMatchIcon } from './ExtendedPriceMatchIcon';
import { VendTableChangeProposalDataEntityBehavior } from './VendTableChangeProposalDataEntityBehavior';
import { CustSettlePrepaymentVatTypeRu } from './CustSettlePrepaymentVatTypeRu';
import { DimSettlementCtrlTypeRu } from './DimSettlementCtrlTypeRu';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "VendorParameters" of service "d365_metadata".
 */
export class VendorParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VendorParametersType<T>
{
  /**
   * Technical entity name for VendorParameters.
   */
  static override _entityName = 'VendorParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorParameters entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warn If Payment Proposal Uses Multiple Methods Of Payment.
   * @nullable
   */
  declare warnIfPaymentProposalUsesMultipleMethodsOfPayment?: NoYes | null;
  /**
   * Use Fiscal Data From Invoice Account.
   * @nullable
   */
  declare useFiscalDataFromInvoiceAccount?: UseFiscalInvoiceAccount | null;
  /**
   * Invoice Totals Tolerance Percentage.
   */
  declare invoiceTotalsTolerancePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Draft.
   * @nullable
   */
  declare draft?: NoYes | null;
  /**
   * Terms Of Payment.
   * @nullable
   */
  declare termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Royalty Accrual Journal Name.
   * @nullable
   */
  declare royaltyAccrualJournalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Exempt Number Requirement.
   * @nullable
   */
  declare taxExemptNumberRequirement?: TaxVatNumCountryRegionType | null;
  /**
   * Post To Charge Account In Ledger.
   * @nullable
   */
  declare postToChargeAccountInLedger?: NoYes | null;
  /**
   * Starting Day Of Week.
   * @nullable
   */
  declare startingDayOfWeek?: WeekDays | null;
  /**
   * Split Delivery Packing Slip.
   * @nullable
   */
  declare splitDeliveryPackingSlip?: NoYes | null;
  /**
   * Sequence Number.
   */
  declare sequenceNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Withhold Company.
   * @nullable
   */
  declare taxWithholdCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Automation Matching Prior To Workflow.
   * @nullable
   */
  declare automationMatchingPriorToWorkflow?: NoYes | null;
  /**
   * Primary Relation Tax Matrix.
   * @nullable
   */
  declare primaryRelationTaxMatrix?: ItemVend | null;
  /**
   * Allow Cancel Invoice Enable.
   * @nullable
   */
  declare allowCancelInvoiceEnable?: NoYes | null;
  /**
   * Use Document Date.
   * @nullable
   */
  declare useDocumentDate?: NoYes | null;
  /**
   * Purch Agreement Dimension Name.
   * @nullable
   */
  declare purchAgreementDimensionName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Accrual Account Display Value.
   * @nullable
   */
  declare accrualAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Matching Policy Override.
   * @nullable
   */
  declare allowMatchingPolicyOverride?: PurchMatchingPolicyOverrideOption | null;
  /**
   * Expense Journal Name.
   * @nullable
   */
  declare expenseJournalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Price Total Tolerance Percent.
   */
  declare purchasePriceTotalTolerancePercent: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Manual Posting.
   * @nullable
   */
  declare manualPosting?: NoYes | null;
  /**
   * Enable Invoice Matching Validation.
   * @nullable
   */
  declare enableInvoiceMatchingValidation?: UnknownNoYes | null;
  /**
   * Is Print Transportation Details.
   * @nullable
   */
  declare isPrintTransportationDetails?: NoYes | null;
  /**
   * Cash Flow Terms Of Payment.
   * @nullable
   */
  declare cashFlowTermsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Code For Invoice Groups.
   * @nullable
   */
  declare defaultCodeForInvoiceGroups?: VendInvoiceDefaultGroupType | null;
  /**
   * Settlement Write Off Reason Code.
   * @nullable
   */
  declare settlementWriteOffReasonCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Receipt Posting.
   * @nullable
   */
  declare primaryReceiptPosting?: ItemVend | null;
  /**
   * Charges Tolerance Percentage.
   */
  declare chargesTolerancePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Require Document Date On Vendor Invoice.
   * @nullable
   */
  declare requireDocumentDateOnVendorInvoice?: VendInvoiceDocDate | null;
  /**
   * Validations On Promissory Notes Journals.
   * @nullable
   */
  declare validationsOnPromissoryNotesJournals?: NoYes | null;
  /**
   * Exclude Cancelled Lines From Totals Calculation.
   * @nullable
   */
  declare excludeCancelledLinesFromTotalsCalculation?: NoYes | null;
  /**
   * Purchase Price Total Tolerance.
   */
  declare purchasePriceTotalTolerance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Settle Period.
   * @nullable
   */
  declare settlePeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Flow Liquidity Account For Payments Display Value.
   * @nullable
   */
  declare cashFlowLiquidityAccountForPaymentsDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Credit Note As Correction.
   * @nullable
   */
  declare creditNoteAsCorrection?: NoYes | null;
  /**
   * Check The Tax Invoice Number Used.
   * @nullable
   */
  declare checkTheTaxInvoiceNumberUsed?: ReuseVoucher | null;
  /**
   * Cash Flow Time Between Invoice Due Date And Payment Date.
   * @nullable
   */
  declare cashFlowTimeBetweenInvoiceDueDateAndPaymentDate?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Facture Issue Period.
   */
  declare factureIssuePeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Cash Discount Calculated For Credit Notes.
   * @nullable
   */
  declare isCashDiscountCalculatedForCreditNotes?: NoYes | null;
  /**
   * Automation Product Receipt Matching.
   * @nullable
   */
  declare automationProductReceiptMatching?: NoYes | null;
  /**
   * Response To Invoices That Fail Validation.
   * @nullable
   */
  declare responseToInvoicesThatFailValidation?: InvoicePolicyViolationStatus | null;
  /**
   * Polling Interval Minutes.
   */
  declare pollingIntervalMinutes: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Dimension Hierarchy Is System Generated.
   * @nullable
   */
  declare dimensionHierarchyIsSystemGenerated?: NoYes | null;
  /**
   * Bypass Validation Of Accounting Distributions.
   * @nullable
   */
  declare bypassValidationOfAccountingDistributions?: NoYes | null;
  /**
   * Cash Flow Time Between Delivery Date And Invoice Date.
   * @nullable
   */
  declare cashFlowTimeBetweenDeliveryDateAndInvoiceDate?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Dimension Tree Name.
   * @nullable
   */
  declare dimensionTreeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Show Amount Debit Credit.
   * @nullable
   */
  declare isShowAmountDebitCredit?: NoYes | null;
  /**
   * Allocation Key.
   * @nullable
   */
  declare allocationKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Validate Invoices In The Journal.
   * @nullable
   */
  declare validateInvoicesInTheJournal?: NoYes | null;
  /**
   * Use Consolidated Invoice.
   * @nullable
   */
  declare useConsolidatedInvoice?: NoYes | null;
  /**
   * Default Vend.
   * @nullable
   */
  declare defaultVend?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Joining Prevention On Promissory Note Journals.
   * @nullable
   */
  declare invoiceJoiningPreventionOnPromissoryNoteJournals?: NoYes | null;
  /**
   * Max Wait Time For Invoice Scheduled Status Hours.
   */
  declare maxWaitTimeForInvoiceScheduledStatusHours: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Time Of Sales Tax Posting.
   * @nullable
   */
  declare timeOfSalesTaxPosting?: VendTaxRegisterApproval | null;
  /**
   * Royalty Post Manually.
   * @nullable
   */
  declare royaltyPostManually?: NoYes | null;
  /**
   * Split Delivery Invoice.
   * @nullable
   */
  declare splitDeliveryInvoice?: NoYes | null;
  /**
   * Default Settlement Type For Credit Notes.
   * @nullable
   */
  declare defaultSettlementTypeForCreditNotes?: SettlementType | null;
  /**
   * Primary Discount Posting.
   * @nullable
   */
  declare primaryDiscountPosting?: ItemVend | null;
  /**
   * Discount Offset Accounts.
   * @nullable
   */
  declare discountOffsetAccounts?: DiscountOffsetMethod | null;
  /**
   * Is Match Invoice Totals.
   * @nullable
   */
  declare isMatchInvoiceTotals?: NoYes | null;
  /**
   * Invoicing Period.
   * @nullable
   */
  declare invoicingPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Edit Cash Discounts When Due Date Changed.
   * @nullable
   */
  declare editCashDiscountsWhenDueDateChanged?: NoYes | null;
  /**
   * Automation Workflow Submission.
   * @nullable
   */
  declare automationWorkflowSubmission?: NoYes | null;
  /**
   * Cash Discount Administration.
   * @nullable
   */
  declare cashDiscountAdministration?: UnspecificSpecific | null;
  /**
   * Promissory Notes.
   * @nullable
   */
  declare promissoryNotes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Invoice In Use Recover Enable.
   * @nullable
   */
  declare vendInvoiceInUseRecoverEnable?: NoYes | null;
  /**
   * Max Invoices Per Batch.
   */
  declare maxInvoicesPerBatch: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Invoice Remit.
   * @nullable
   */
  declare invoiceRemit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mandatory Tax Group.
   * @nullable
   */
  declare mandatoryTaxGroup?: NoYes | null;
  /**
   * Automation Totals Req For Workflow Submission.
   * @nullable
   */
  declare automationTotalsReqForWorkflowSubmission?: NoYes | null;
  /**
   * Settlement Write Off Journal Name.
   * @nullable
   */
  declare settlementWriteOffJournalName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Validate Tax Group Completeness.
   * @nullable
   */
  declare validateTaxGroupCompleteness?: NoYes | null;
  /**
   * Reporting Currency Exchange Rate Type.
   * @nullable
   */
  declare reportingCurrencyExchangeRateType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Broker Category Name.
   * @nullable
   */
  declare brokerCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Automatic Settlement.
   * @nullable
   */
  declare isAutomaticSettlement?: NoYes | null;
  /**
   * Automation Product Receipt Matching Max Attempts.
   */
  declare automationProductReceiptMatchingMaxAttempts: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Is Match Charges.
   * @nullable
   */
  declare isMatchCharges?: NoYes | null;
  /**
   * Display Invoice Totals Match Icon.
   * @nullable
   */
  declare displayInvoiceTotalsMatchIcon?: DisplayTotalPriceMatchOption | null;
  /**
   * Mandatory Vat Num.
   * @nullable
   */
  declare mandatoryVatNum?: TaxVatNumCountryRegionType | null;
  /**
   * Settlement Write Off Enabled.
   * @nullable
   */
  declare settlementWriteOffEnabled?: NoYes | null;
  /**
   * Post Invoice Match Discrepancies.
   * @nullable
   */
  declare postInvoiceMatchDiscrepancies?: InvoiceMatchPostingOption | null;
  /**
   * Custom Code For Invoice Groups.
   * @nullable
   */
  declare customCodeForInvoiceGroups?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Cash Discount Calculated On Amount Including Sales Tax.
   * @nullable
   */
  declare isCashDiscountCalculatedOnAmountIncludingSalesTax?: NoYes | null;
  /**
   * Automatic Header Matching.
   * @nullable
   */
  declare automaticHeaderMatching?: UnknownNoYes | null;
  /**
   * Display Misc Charge Tolerance Icon.
   * @nullable
   */
  declare displayMiscChargeToleranceIcon?: DisplayInvoiceMiscChargeMatchOption | null;
  /**
   * Custom Code For Web Service Invoices.
   * @nullable
   */
  declare customCodeForWebServiceInvoices?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Use Invoice Groups For This Company.
   * @nullable
   */
  declare useInvoiceGroupsForThisCompany?: NoYes | null;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Differential Journal Name.
   * @nullable
   */
  declare differentialJournalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Apply Price Disc On Purch Line Entity.
   * @nullable
   */
  declare applyPriceDiscOnPurchLineEntity?: NoYes | null;
  /**
   * Sales Tax On Prepayment In Payment Journal.
   * @nullable
   */
  declare salesTaxOnPrepaymentInPaymentJournal?: NoYes | null;
  /**
   * Remit Promissory Note.
   * @nullable
   */
  declare remitPromissoryNote?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Post Product Receipt In Ledger.
   * @nullable
   */
  declare postProductReceiptInLedger?: NoYes | null;
  /**
   * Tax Withhold Calculate Cross Company.
   * @nullable
   */
  declare taxWithholdCalculateCrossCompany?: NoYes | null;
  /**
   * Is Check Invoice Number Used.
   * @nullable
   */
  declare isCheckInvoiceNumberUsed?: ReuseVoucher | null;
  /**
   * Maximum Penny Difference.
   */
  declare maximumPennyDifference: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Overpayment Or Underpayment.
   */
  declare maximumOverpaymentOrUnderpayment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Credit Max Check.
   * @nullable
   */
  declare creditMaxCheck?: TypeOfCreditmaxCheck | null;
  /**
   * Royalty Expense Account Display Value.
   * @nullable
   */
  declare royaltyExpenseAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Cash Discount Calculated For Partial Payments.
   * @nullable
   */
  declare isCashDiscountCalculatedForPartialPayments?: NoYes | null;
  /**
   * Category Name.
   * @nullable
   */
  declare categoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Currency Exchange Rate Type.
   * @nullable
   */
  declare accountingCurrencyExchangeRateType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Match Price Totals.
   * @nullable
   */
  declare matchPriceTotals?: ExtendedPriceMatching | null;
  /**
   * Cash Flow Percentage Of Amount To Allocate To Cash Flow Forecast.
   * @nullable
   */
  declare cashFlowPercentageOfAmountToAllocateToCashFlowForecast?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Prepayment Invoice Posting Profile.
   * @nullable
   */
  declare prepaymentInvoicePostingProfile?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Line Matching Policy.
   * @nullable
   */
  declare lineMatchingPolicy?: PurchMatchingPolicyOption | null;
  /**
   * Keep Sales Tax Adjustments For Po Invoices.
   * @nullable
   */
  declare keepSalesTaxAdjustmentsForPoInvoices?: NoYes | null;
  /**
   * Default Filter For Vendor Transactions.
   * @nullable
   */
  declare defaultFilterForVendorTransactions?: CustVendShowTransaction | null;
  /**
   * Exch Adj Rate Source.
   * @nullable
   */
  declare exchAdjRateSource?: CustVendExchAdjRateSource | null;
  /**
   * Vend Bank Iban Swift Required.
   * @nullable
   */
  declare vendBankIbanSwiftRequired?: NoYes | null;
  /**
   * Include 3 Way Matching.
   * @nullable
   */
  declare include3WayMatching?: NoYes | null;
  /**
   * Purch Prepay Application Policy.
   * @nullable
   */
  declare purchPrepayApplicationPolicy?: PurchPrepayApplicationPolicy | null;
  /**
   * Is W 9 Validation.
   * @nullable
   */
  declare isW9Validation?: NoYes | null;
  /**
   * Posting Profile For Payment Journal With Prepayment.
   * @nullable
   */
  declare postingProfileForPaymentJournalWithPrepayment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Dimension Hierarchy Type.
   * @nullable
   */
  declare dimensionHierarchyType?: DimensionHierarchyType | null;
  /**
   * Display Price Match Icon.
   * @nullable
   */
  declare displayPriceMatchIcon?: DisplayPriceMatchOption | null;
  /**
   * Broker Category Hierarchy Name.
   * @nullable
   */
  declare brokerCategoryHierarchyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Activate Invoice Payment Groups.
   * @nullable
   */
  declare activateInvoicePaymentGroups?: NoYes | null;
  /**
   * Display Price Total Match Icon.
   * @nullable
   */
  declare displayPriceTotalMatchIcon?: ExtendedPriceMatchIcon | null;
  /**
   * Category Hierarchy Name.
   * @nullable
   */
  declare categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Treatment On Promissory Note Journals.
   * @nullable
   */
  declare dateTreatmentOnPromissoryNoteJournals?: NoYes | null;
  /**
   * Change Proposal Data Entity Behavior.
   * @nullable
   */
  declare changeProposalDataEntityBehavior?: VendTableChangeProposalDataEntityBehavior | null;
  /**
   * Change Proposal Is Enabled.
   * @nullable
   */
  declare changeProposalIsEnabled?: NoYes | null;
  /**
   * Reverse Prepayment.
   * @nullable
   */
  declare reversePrepayment?: NoYes | null;
  /**
   * Settle Prepayment Vat Type.
   * @nullable
   */
  declare settlePrepaymentVatType?: CustSettlePrepaymentVatTypeRu | null;
  /**
   * Advance Holders Posting Profile.
   * @nullable
   */
  declare advanceHoldersPostingProfile?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Advance Holders Auto Settle.
   * @nullable
   */
  declare advanceHoldersAutoSettle?: NoYes | null;
  /**
   * Advance Holders Settlement By Dimension.
   * @nullable
   */
  declare advanceHoldersSettlementByDimension?: DimSettlementCtrlTypeRu | null;
  /**
   * Import Format Mapping Name Qr Bill.
   * @nullable
   */
  declare importFormatMappingNameQrBill?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Disable Payment Id Validation.
   * @nullable
   */
  declare disablePaymentIdValidation?: NoYes | null;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Psn Posting Definition Code.
   * @nullable
   */
  declare psnPostingDefinitionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Psn Activate Purchasing Card.
   * @nullable
   */
  declare psnActivatePurchasingCard?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: VendorParametersApi<T>) {
    super(_entityApi);
  }
}

export interface VendorParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  warnIfPaymentProposalUsesMultipleMethodsOfPayment?: NoYes | null;
  useFiscalDataFromInvoiceAccount?: UseFiscalInvoiceAccount | null;
  invoiceTotalsTolerancePercentage: DeserializedType<T, 'Edm.Decimal'>;
  draft?: NoYes | null;
  termsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  royaltyAccrualJournalName?: DeserializedType<T, 'Edm.String'> | null;
  taxExemptNumberRequirement?: TaxVatNumCountryRegionType | null;
  postToChargeAccountInLedger?: NoYes | null;
  startingDayOfWeek?: WeekDays | null;
  splitDeliveryPackingSlip?: NoYes | null;
  sequenceNumber: DeserializedType<T, 'Edm.Int64'>;
  taxWithholdCompany?: DeserializedType<T, 'Edm.String'> | null;
  automationMatchingPriorToWorkflow?: NoYes | null;
  primaryRelationTaxMatrix?: ItemVend | null;
  allowCancelInvoiceEnable?: NoYes | null;
  useDocumentDate?: NoYes | null;
  purchAgreementDimensionName?: DeserializedType<T, 'Edm.String'> | null;
  accrualAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  allowMatchingPolicyOverride?: PurchMatchingPolicyOverrideOption | null;
  expenseJournalName?: DeserializedType<T, 'Edm.String'> | null;
  purchasePriceTotalTolerancePercent: DeserializedType<T, 'Edm.Decimal'>;
  manualPosting?: NoYes | null;
  enableInvoiceMatchingValidation?: UnknownNoYes | null;
  isPrintTransportationDetails?: NoYes | null;
  cashFlowTermsOfPayment?: DeserializedType<T, 'Edm.String'> | null;
  defaultCodeForInvoiceGroups?: VendInvoiceDefaultGroupType | null;
  settlementWriteOffReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  primaryReceiptPosting?: ItemVend | null;
  chargesTolerancePercentage: DeserializedType<T, 'Edm.Decimal'>;
  requireDocumentDateOnVendorInvoice?: VendInvoiceDocDate | null;
  validationsOnPromissoryNotesJournals?: NoYes | null;
  excludeCancelledLinesFromTotalsCalculation?: NoYes | null;
  purchasePriceTotalTolerance: DeserializedType<T, 'Edm.Decimal'>;
  settlePeriod?: DeserializedType<T, 'Edm.String'> | null;
  cashFlowLiquidityAccountForPaymentsDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  creditNoteAsCorrection?: NoYes | null;
  checkTheTaxInvoiceNumberUsed?: ReuseVoucher | null;
  cashFlowTimeBetweenInvoiceDueDateAndPaymentDate?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  factureIssuePeriod: DeserializedType<T, 'Edm.Int32'>;
  isCashDiscountCalculatedForCreditNotes?: NoYes | null;
  automationProductReceiptMatching?: NoYes | null;
  responseToInvoicesThatFailValidation?: InvoicePolicyViolationStatus | null;
  pollingIntervalMinutes: DeserializedType<T, 'Edm.Int32'>;
  dimensionHierarchyIsSystemGenerated?: NoYes | null;
  bypassValidationOfAccountingDistributions?: NoYes | null;
  cashFlowTimeBetweenDeliveryDateAndInvoiceDate?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  dimensionTreeName?: DeserializedType<T, 'Edm.String'> | null;
  isShowAmountDebitCredit?: NoYes | null;
  allocationKey?: DeserializedType<T, 'Edm.String'> | null;
  validateInvoicesInTheJournal?: NoYes | null;
  useConsolidatedInvoice?: NoYes | null;
  defaultVend?: DeserializedType<T, 'Edm.String'> | null;
  invoiceJoiningPreventionOnPromissoryNoteJournals?: NoYes | null;
  maxWaitTimeForInvoiceScheduledStatusHours: DeserializedType<T, 'Edm.Int32'>;
  timeOfSalesTaxPosting?: VendTaxRegisterApproval | null;
  royaltyPostManually?: NoYes | null;
  splitDeliveryInvoice?: NoYes | null;
  defaultSettlementTypeForCreditNotes?: SettlementType | null;
  primaryDiscountPosting?: ItemVend | null;
  discountOffsetAccounts?: DiscountOffsetMethod | null;
  isMatchInvoiceTotals?: NoYes | null;
  invoicingPeriod?: DeserializedType<T, 'Edm.String'> | null;
  editCashDiscountsWhenDueDateChanged?: NoYes | null;
  automationWorkflowSubmission?: NoYes | null;
  cashDiscountAdministration?: UnspecificSpecific | null;
  promissoryNotes?: DeserializedType<T, 'Edm.String'> | null;
  vendInvoiceInUseRecoverEnable?: NoYes | null;
  maxInvoicesPerBatch: DeserializedType<T, 'Edm.Int32'>;
  invoiceRemit?: DeserializedType<T, 'Edm.String'> | null;
  mandatoryTaxGroup?: NoYes | null;
  automationTotalsReqForWorkflowSubmission?: NoYes | null;
  settlementWriteOffJournalName?: DeserializedType<T, 'Edm.String'> | null;
  validateTaxGroupCompleteness?: NoYes | null;
  reportingCurrencyExchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  brokerCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  isAutomaticSettlement?: NoYes | null;
  automationProductReceiptMatchingMaxAttempts: DeserializedType<T, 'Edm.Int32'>;
  isMatchCharges?: NoYes | null;
  displayInvoiceTotalsMatchIcon?: DisplayTotalPriceMatchOption | null;
  mandatoryVatNum?: TaxVatNumCountryRegionType | null;
  settlementWriteOffEnabled?: NoYes | null;
  postInvoiceMatchDiscrepancies?: InvoiceMatchPostingOption | null;
  customCodeForInvoiceGroups?: DeserializedType<T, 'Edm.String'> | null;
  isCashDiscountCalculatedOnAmountIncludingSalesTax?: NoYes | null;
  automaticHeaderMatching?: UnknownNoYes | null;
  displayMiscChargeToleranceIcon?: DisplayInvoiceMiscChargeMatchOption | null;
  customCodeForWebServiceInvoices?: DeserializedType<T, 'Edm.String'> | null;
  useInvoiceGroupsForThisCompany?: NoYes | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  differentialJournalName?: DeserializedType<T, 'Edm.String'> | null;
  applyPriceDiscOnPurchLineEntity?: NoYes | null;
  salesTaxOnPrepaymentInPaymentJournal?: NoYes | null;
  remitPromissoryNote?: DeserializedType<T, 'Edm.String'> | null;
  postProductReceiptInLedger?: NoYes | null;
  taxWithholdCalculateCrossCompany?: NoYes | null;
  isCheckInvoiceNumberUsed?: ReuseVoucher | null;
  maximumPennyDifference: DeserializedType<T, 'Edm.Decimal'>;
  maximumOverpaymentOrUnderpayment: DeserializedType<T, 'Edm.Decimal'>;
  creditMaxCheck?: TypeOfCreditmaxCheck | null;
  royaltyExpenseAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  isCashDiscountCalculatedForPartialPayments?: NoYes | null;
  categoryName?: DeserializedType<T, 'Edm.String'> | null;
  accountingCurrencyExchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  matchPriceTotals?: ExtendedPriceMatching | null;
  cashFlowPercentageOfAmountToAllocateToCashFlowForecast?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  prepaymentInvoicePostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  lineMatchingPolicy?: PurchMatchingPolicyOption | null;
  keepSalesTaxAdjustmentsForPoInvoices?: NoYes | null;
  defaultFilterForVendorTransactions?: CustVendShowTransaction | null;
  exchAdjRateSource?: CustVendExchAdjRateSource | null;
  vendBankIbanSwiftRequired?: NoYes | null;
  include3WayMatching?: NoYes | null;
  purchPrepayApplicationPolicy?: PurchPrepayApplicationPolicy | null;
  isW9Validation?: NoYes | null;
  postingProfileForPaymentJournalWithPrepayment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  dimensionHierarchyType?: DimensionHierarchyType | null;
  displayPriceMatchIcon?: DisplayPriceMatchOption | null;
  brokerCategoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  activateInvoicePaymentGroups?: NoYes | null;
  displayPriceTotalMatchIcon?: ExtendedPriceMatchIcon | null;
  categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  dateTreatmentOnPromissoryNoteJournals?: NoYes | null;
  changeProposalDataEntityBehavior?: VendTableChangeProposalDataEntityBehavior | null;
  changeProposalIsEnabled?: NoYes | null;
  reversePrepayment?: NoYes | null;
  settlePrepaymentVatType?: CustSettlePrepaymentVatTypeRu | null;
  advanceHoldersPostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  advanceHoldersAutoSettle?: NoYes | null;
  advanceHoldersSettlementByDimension?: DimSettlementCtrlTypeRu | null;
  importFormatMappingNameQrBill?: DeserializedType<T, 'Edm.String'> | null;
  disablePaymentIdValidation?: NoYes | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  psnPostingDefinitionCode?: DeserializedType<T, 'Edm.String'> | null;
  psnActivatePurchasingCard?: NoYes | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
