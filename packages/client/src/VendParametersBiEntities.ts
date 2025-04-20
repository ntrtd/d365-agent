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
import type { VendParametersBiEntitiesApi } from './VendParametersBiEntitiesApi';
import { NoYes } from './NoYes';
import { InvoicePolicyViolationStatus } from './InvoicePolicyViolationStatus';
import { UseFiscalInvoiceAccount } from './UseFiscalInvoiceAccount';
import { UnknownNoYes } from './UnknownNoYes';
import { TaxVatNumCountryRegionType } from './TaxVatNumCountryRegionType';
import { ItemVend } from './ItemVend';
import { VendTaxRegisterApproval } from './VendTaxRegisterApproval';
import { ExtendedPriceAmountCurrencyType } from './ExtendedPriceAmountCurrencyType';
import { ReuseVoucher } from './ReuseVoucher';
import { VendTableChangeProposalDataEntityBehavior } from './VendTableChangeProposalDataEntityBehavior';
import { PurchPrepayApplicationPolicy } from './PurchPrepayApplicationPolicy';
import { VendInvoiceDocDate } from './VendInvoiceDocDate';
import { DisplayTotalPriceMatchOption } from './DisplayTotalPriceMatchOption';
import { PlafondDateProposalIt } from './PlafondDateProposalIt';
import { DiscountOffsetMethod } from './DiscountOffsetMethod';
import { PurchMatchingPolicyOverrideOption } from './PurchMatchingPolicyOverrideOption';
import { VendInvoiceDefaultQuantityForAutomaticInvoiceLinesCreation } from './VendInvoiceDefaultQuantityForAutomaticInvoiceLinesCreation';
import { SettlementType } from './SettlementType';
import { RAssetPaymentAllocation } from './RAssetPaymentAllocation';
import { CustSettlePrepaymentVatTypeRu } from './CustSettlePrepaymentVatTypeRu';
import { IbanSwiftRequired } from './IbanSwiftRequired';
import { VendBankAccountChangeProposalDataEntityBehavior } from './VendBankAccountChangeProposalDataEntityBehavior';
import { TaxIdValidation } from './TaxIdValidation';
import { PrepaymentHandlingLayoutW } from './PrepaymentHandlingLayoutW';
import { InvoiceMatchPostingOption } from './InvoiceMatchPostingOption';
import { TypeOfCreditmaxCheck } from './TypeOfCreditmaxCheck';
import { UnspecificSpecific } from './UnspecificSpecific';
import { DisplayInvoiceMiscChargeMatchOption } from './DisplayInvoiceMiscChargeMatchOption';
import { CrossYearPostingDateAdjustment } from './CrossYearPostingDateAdjustment';
import { DisplayPriceMatchOption } from './DisplayPriceMatchOption';
import { WeekDays } from './WeekDays';
import { CustVendShowTransaction } from './CustVendShowTransaction';
import { VendInvoiceDefaultGroupType } from './VendInvoiceDefaultGroupType';
import { VendInvoicePostingDateAutoAdjustment } from './VendInvoicePostingDateAutoAdjustment';
import { ExtendedPriceMatching } from './ExtendedPriceMatching';
import { PurchMatchingPolicyOption } from './PurchMatchingPolicyOption';
import { ExtendedPriceMatchIcon } from './ExtendedPriceMatchIcon';
import { DimSettlementCtrlTypeRu } from './DimSettlementCtrlTypeRu';

/**
 * This class represents the entity "VendParametersBiEntities" of service "d365_metadata".
 */
export class VendParametersBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendParametersBiEntitiesType<T>
{
  /**
   * Technical entity name for VendParametersBiEntities.
   */
  static override _entityName = 'VendParametersBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendParametersBiEntities entity.
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
   * Confirming Invoices.
   * @nullable
   */
  declare confirmingInvoices?: NoYes | null;
  /**
   * Do Print Transportation Document.
   * @nullable
   */
  declare doPrintTransportationDocument?: NoYes | null;
  /**
   * Policy Violation Action.
   * @nullable
   */
  declare policyViolationAction?: InvoicePolicyViolationStatus | null;
  /**
   * Use Vend Advance Invoice Ru.
   * @nullable
   */
  declare useVendAdvanceInvoiceRu?: NoYes | null;
  /**
   * Show Amount Debit Credit Jp.
   * @nullable
   */
  declare showAmountDebitCreditJp?: NoYes | null;
  /**
   * Cash Disc Vat.
   * @nullable
   */
  declare cashDiscVat?: NoYes | null;
  /**
   * Automation Totals Req For Workflow Submission.
   * @nullable
   */
  declare automationTotalsReqForWorkflowSubmission?: NoYes | null;
  /**
   * Automation Product Receipt Matching Max Attempts.
   */
  declare automationProductReceiptMatchingMaxAttempts: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Use Fiscal Invoice Account.
   * @nullable
   */
  declare useFiscalInvoiceAccount?: UseFiscalInvoiceAccount | null;
  /**
   * Use Misc Charge Matching.
   * @nullable
   */
  declare useMiscChargeMatching?: NoYes | null;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overdue Citpit Dimension Attribute W.
   */
  declare overdueCitpitDimensionAttributeW: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Validate Tax Group Completeness.
   * @nullable
   */
  declare validateTaxGroupCompleteness?: NoYes | null;
  /**
   * Settlement Write Off Reason Code.
   * @nullable
   */
  declare settlementWriteOffReasonCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Due 2 Payment.
   * @nullable
   */
  declare due2Payment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Disable Payment Id Validation Ch.
   * @nullable
   */
  declare disablePaymentIdValidationCh?: NoYes | null;
  /**
   * Mcr Royalty Ledger Dimension Values Json.
   * @nullable
   */
  declare mcrRoyaltyLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Mandatory Tax Group.
   * @nullable
   */
  declare mandatoryTaxGroup?: NoYes | null;
  /**
   * Automatic Header Matching.
   * @nullable
   */
  declare automaticHeaderMatching?: UnknownNoYes | null;
  /**
   * Total Price Tolerance Percentage.
   */
  declare totalPriceTolerancePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * W 9 Validation.
   * @nullable
   */
  declare w9Validation?: NoYes | null;
  /**
   * Mandatory Invoice Vat Num.
   * @nullable
   */
  declare mandatoryInvoiceVatNum?: TaxVatNumCountryRegionType | null;
  /**
   * Enable Electronic Payment Number.
   * @nullable
   */
  declare enableElectronicPaymentNumber?: NoYes | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Calculate Invoice Total.
   * @nullable
   */
  declare calculateInvoiceTotal?: UnknownNoYes | null;
  /**
   * Block Posting And Submission To Workflow.
   * @nullable
   */
  declare blockPostingAndSubmissionToWorkflow?: NoYes | null;
  /**
   * Vend Invoice In Use Recover Enable.
   * @nullable
   */
  declare vendInvoiceInUseRecoverEnable?: NoYes | null;
  /**
   * Purch Agreement Financial Dimension Psn.
   */
  declare purchAgreementFinancialDimensionPsn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Settlement Write Off Ledger Dimension Values Json.
   * @nullable
   */
  declare settlementWriteOffLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Relation Br.
   * @nullable
   */
  declare primaryRelationBr?: ItemVend | null;
  /**
   * Amount Diff Book Correction Ru.
   * @nullable
   */
  declare amountDiffBookCorrectionRu?: NoYes | null;
  /**
   * Use Purch Consump Account Ru.
   * @nullable
   */
  declare usePurchConsumpAccountRu?: NoYes | null;
  /**
   * Mcr Broker Manual Jour Post.
   * @nullable
   */
  declare mcrBrokerManualJourPost?: NoYes | null;
  /**
   * Vend Name From Vat Num.
   * @nullable
   */
  declare vendNameFromVatNum?: NoYes | null;
  /**
   * Vend Tax Register Approval.
   * @nullable
   */
  declare vendTaxRegisterApproval?: VendTaxRegisterApproval | null;
  /**
   * Debts Transit Ledger Dimension Ru Values Json.
   * @nullable
   */
  declare debtsTransitLedgerDimensionRuValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vend Cons Invoice Jp.
   * @nullable
   */
  declare vendConsInvoiceJp?: NoYes | null;
  /**
   * Vend Invoice Grouping Enable.
   * @nullable
   */
  declare vendInvoiceGroupingEnable?: NoYes | null;
  /**
   * Extended Price Amount Currency Type.
   * @nullable
   */
  declare extendedPriceAmountCurrencyType?: ExtendedPriceAmountCurrencyType | null;
  /**
   * Price Tolerance Percentage For Sales Tax.
   */
  declare priceTolerancePercentageForSalesTax: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Check Invoice.
   * @nullable
   */
  declare checkInvoice?: ReuseVoucher | null;
  /**
   * Price Tolerance Percentage For Sub Total Amount.
   */
  declare priceTolerancePercentageForSubTotalAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Change Proposal Data Entity Behavior.
   * @nullable
   */
  declare changeProposalDataEntityBehavior?: VendTableChangeProposalDataEntityBehavior | null;
  /**
   * Edit Cash Discounts When Due Date Changed.
   * @nullable
   */
  declare editCashDiscountsWhenDueDateChanged?: NoYes | null;
  /**
   * Max Mst Diff.
   */
  declare maxMstDiff: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vend Invoice Automation Workflow Submission Limit.
   */
  declare vendInvoiceAutomationWorkflowSubmissionLimit: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Use Price Matching For Charges.
   * @nullable
   */
  declare usePriceMatchingForCharges?: NoYes | null;
  /**
   * Tax Item Group W.
   * @nullable
   */
  declare taxItemGroupW?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check Tax Invoice.
   * @nullable
   */
  declare checkTaxInvoice?: ReuseVoucher | null;
  /**
   * Price Tolerance Percentage For Invoice Amount.
   */
  declare priceTolerancePercentageForInvoiceAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Posting Profile Remit Notes.
   * @nullable
   */
  declare postingProfileRemitNotes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Prepay Application Policy.
   * @nullable
   */
  declare purchPrepayApplicationPolicy?: PurchPrepayApplicationPolicy | null;
  /**
   * Automatic Intent Letter Assignment It.
   * @nullable
   */
  declare automaticIntentLetterAssignmentIt?: NoYes | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bypass Validation Of Accounting Distributions.
   * @nullable
   */
  declare bypassValidationOfAccountingDistributions?: NoYes | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vend Invoice Doc Date.
   * @nullable
   */
  declare vendInvoiceDocDate?: VendInvoiceDocDate | null;
  /**
   * Mcr Royalty Offset Ledger Dimension Values Json.
   * @nullable
   */
  declare mcrRoyaltyOffsetLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Display Price Match Icon For Invoice Amount.
   * @nullable
   */
  declare displayPriceMatchIconForInvoiceAmount?: DisplayTotalPriceMatchOption | null;
  /**
   * Credit Invoicing Report.
   * @nullable
   */
  declare creditInvoicingReport?: NoYes | null;
  /**
   * Plafond Date Proposal It.
   * @nullable
   */
  declare plafondDateProposalIt?: PlafondDateProposalIt | null;
  /**
   * Facture Issue Period Ru.
   */
  declare factureIssuePeriodRu: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Customs Landing Charges Pct In.
   */
  declare customsLandingChargesPctIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vend Discount Offset Method Psn.
   * @nullable
   */
  declare vendDiscountOffsetMethodPsn?: DiscountOffsetMethod | null;
  /**
   * Price Tolerance Percentage For Charges.
   */
  declare priceTolerancePercentageForCharges: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Create Facture Unpost Prepayment Ru.
   * @nullable
   */
  declare createFactureUnpostPrepaymentRu?: NoYes | null;
  /**
   * Matching Policy Allow Override.
   * @nullable
   */
  declare matchingPolicyAllowOverride?: PurchMatchingPolicyOverrideOption | null;
  /**
   * Mcr Broker Expense Journal.
   * @nullable
   */
  declare mcrBrokerExpenseJournal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Price Matching For Total Discount.
   * @nullable
   */
  declare usePriceMatchingForTotalDiscount?: NoYes | null;
  /**
   * Automation Default Quantity For Invoice Lines Creation.
   * @nullable
   */
  declare automationDefaultQuantityForInvoiceLinesCreation?: VendInvoiceDefaultQuantityForAutomaticInvoiceLinesCreation | null;
  /**
   * Vend Invoice Policy.
   * @nullable
   */
  declare vendInvoicePolicy?: NoYes | null;
  /**
   * Credit Note Settlement Type.
   * @nullable
   */
  declare creditNoteSettlementType?: SettlementType | null;
  /**
   * Use Invoice Matching.
   * @nullable
   */
  declare useInvoiceMatching?: UnknownNoYes | null;
  /**
   * Asset Payment Allocation Ru.
   * @nullable
   */
  declare assetPaymentAllocationRu?: RAssetPaymentAllocation | null;
  /**
   * Budget Settle.
   * @nullable
   */
  declare budgetSettle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mixed Payment.
   * @nullable
   */
  declare mixedPayment?: NoYes | null;
  /**
   * Cash Disc For Partial Paym.
   * @nullable
   */
  declare cashDiscForPartialPaym?: NoYes | null;
  /**
   * Automation Create Invoice Lines.
   * @nullable
   */
  declare automationCreateInvoiceLines?: NoYes | null;
  /**
   * Settle Prepayment Vat Type W.
   * @nullable
   */
  declare settlePrepaymentVatTypeW?: CustSettlePrepaymentVatTypeRu | null;
  /**
   * Invoice Period.
   * @nullable
   */
  declare invoicePeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Copy Invoice Dimension Ru.
   * @nullable
   */
  declare copyInvoiceDimensionRu?: NoYes | null;
  /**
   * Is Iban Swift Required.
   * @nullable
   */
  declare isIbanSwiftRequired?: IbanSwiftRequired | null;
  /**
   * Intent Letter Er Format Mapping Id It.
   */
  declare intentLetterErFormatMappingIdIt: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Extended Price Tolerance Amount.
   */
  declare extendedPriceToleranceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice 2 Due.
   * @nullable
   */
  declare invoice2Due?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Display Price Match Icon For Total Discount.
   * @nullable
   */
  declare displayPriceMatchIconForTotalDiscount?: DisplayTotalPriceMatchOption | null;
  /**
   * Tax On Prepayment.
   * @nullable
   */
  declare taxOnPrepayment?: NoYes | null;
  /**
   * R Tax 25 Profit Table.
   */
  declare rTax25ProfitTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Automation Product Receipt Matching.
   * @nullable
   */
  declare automationProductReceiptMatching?: NoYes | null;
  /**
   * Matched Packing Slips Inquiry.
   * @nullable
   */
  declare matchedPackingSlipsInquiry?: NoYes | null;
  /**
   * Automation Workflow Submission.
   * @nullable
   */
  declare automationWorkflowSubmission?: NoYes | null;
  /**
   * Keep Sales Tax Adjustments For Po.
   * @nullable
   */
  declare keepSalesTaxAdjustmentsForPo?: NoYes | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Notes Journals Validations.
   * @nullable
   */
  declare notesJournalsValidations?: NoYes | null;
  /**
   * Automation Hours Before Matching Invoices Becomes Stale.
   */
  declare automationHoursBeforeMatchingInvoicesBecomesStale: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Advance Posting Profile.
   * @nullable
   */
  declare advancePostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plafond Allow Negative It.
   * @nullable
   */
  declare plafondAllowNegativeIt?: NoYes | null;
  /**
   * Agreement Credit Line Ru.
   * @nullable
   */
  declare agreementCreditLineRu?: NoYes | null;
  /**
   * Vend Bank Account Workflow Data Entity Behavior.
   * @nullable
   */
  declare vendBankAccountWorkflowDataEntityBehavior?: VendBankAccountChangeProposalDataEntityBehavior | null;
  /**
   * Mcr Broker Differential Journal.
   * @nullable
   */
  declare mcrBrokerDifferentialJournal?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Display Price Match Icon For Sub Total Amount.
   * @nullable
   */
  declare displayPriceMatchIconForSubTotalAmount?: DisplayTotalPriceMatchOption | null;
  /**
   * Purch Book Additional List Format Mapping Id.
   */
  declare purchBookAdditionalListFormatMappingId: DeserializedType<
    T,
    'Edm.Int64'
  >;
  /**
   * Extended Price Tolerance Percentage.
   */
  declare extendedPriceTolerancePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Polling Interval Minutes.
   */
  declare pollingIntervalMinutes: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Mcr Royalty Manual Jour Post.
   * @nullable
   */
  declare mcrRoyaltyManualJourPost?: NoYes | null;
  /**
   * Max Mst Over Under.
   */
  declare maxMstOverUnder: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Validate Tax Invoice Date Th.
   * @nullable
   */
  declare validateTaxInvoiceDateTh?: NoYes | null;
  /**
   * Tax Id Validation.
   * @nullable
   */
  declare taxIdValidation?: TaxIdValidation | null;
  /**
   * Prepayment Handling Layout W.
   * @nullable
   */
  declare prepaymentHandlingLayoutW?: PrepaymentHandlingLayoutW | null;
  /**
   * Intracom Vat.
   * @nullable
   */
  declare intracomVat?: NoYes | null;
  /**
   * Mcr Broker Procurement Category.
   */
  declare mcrBrokerProcurementCategory: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Vend Invoice Web Service Default Group.
   * @nullable
   */
  declare vendInvoiceWebServiceDefaultGroup?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Post Invoice Match Discrepancies.
   * @nullable
   */
  declare postInvoiceMatchDiscrepancies?: InvoiceMatchPostingOption | null;
  /**
   * Reverse Prepayment W.
   * @nullable
   */
  declare reversePrepaymentW?: NoYes | null;
  /**
   * Plafond Tax Group It.
   * @nullable
   */
  declare plafondTaxGroupIt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settlement Write Off Journal Name.
   * @nullable
   */
  declare settlementWriteOffJournalName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Use Price Matching For Sub Total Amount.
   * @nullable
   */
  declare usePriceMatchingForSubTotalAmount?: NoYes | null;
  /**
   * Display Price Match Icon For Charges.
   * @nullable
   */
  declare displayPriceMatchIconForCharges?: DisplayTotalPriceMatchOption | null;
  /**
   * Prepayment Posting Profile.
   * @nullable
   */
  declare prepaymentPostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Max Check.
   * @nullable
   */
  declare creditMaxCheck?: TypeOfCreditmaxCheck | null;
  /**
   * Display Total Price Match Icon.
   * @nullable
   */
  declare displayTotalPriceMatchIcon?: DisplayTotalPriceMatchOption | null;
  /**
   * Prohibit Va Tin Vend Journal Cz.
   * @nullable
   */
  declare prohibitVaTinVendJournalCz?: NoYes | null;
  /**
   * Item Dim Adjust Line Control Ru.
   * @nullable
   */
  declare itemDimAdjustLineControlRu?: NoYes | null;
  /**
   * Cash Disc.
   * @nullable
   */
  declare cashDisc?: UnspecificSpecific | null;
  /**
   * Display Misc Charge Tolerance Icon.
   * @nullable
   */
  declare displayMiscChargeToleranceIcon?: DisplayInvoiceMiscChargeMatchOption | null;
  /**
   * Enable Settlement All Remittance Address.
   * @nullable
   */
  declare enableSettlementAllRemittanceAddress?: NoYes | null;
  /**
   * Automation Matching Prior To Workflow.
   * @nullable
   */
  declare automationMatchingPriorToWorkflow?: NoYes | null;
  /**
   * Purch Book Format Mapping Id.
   */
  declare purchBookFormatMappingId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Posting Profile Invoice Remit.
   * @nullable
   */
  declare postingProfileInvoiceRemit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Invoice Automation Matching Validation Limit.
   */
  declare vendInvoiceAutomationMatchingValidationLimit: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Tax Group W.
   * @nullable
   */
  declare taxGroupW?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Under Totals In.
   * @nullable
   */
  declare taxUnderTotalsIn?: NoYes | null;
  /**
   * Project Matching Required Psn.
   * @nullable
   */
  declare projectMatchingRequiredPsn?: NoYes | null;
  /**
   * Display Price Match Icon For Sales Tax.
   * @nullable
   */
  declare displayPriceMatchIconForSalesTax?: DisplayTotalPriceMatchOption | null;
  /**
   * Mcr Procurement Category.
   */
  declare mcrProcurementCategory: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Use Price Matching For Invoice Amount.
   * @nullable
   */
  declare usePriceMatchingForInvoiceAmount?: NoYes | null;
  /**
   * Misc Charge Tolerance Percentage.
   */
  declare miscChargeTolerancePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * R Tax 25 Unrealised Revenue Ledger Dimension Values Json.
   * @nullable
   */
  declare rTax25UnrealisedRevenueLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Post Charge Account.
   * @nullable
   */
  declare postChargeAccount?: NoYes | null;
  /**
   * Automation Hours Before Submission Becomes Stale.
   */
  declare automationHoursBeforeSubmissionBecomesStale: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Cross Year Posting Date Adjustment.
   * @nullable
   */
  declare crossYearPostingDateAdjustment?: CrossYearPostingDateAdjustment | null;
  /**
   * Display Price Match Icon.
   * @nullable
   */
  declare displayPriceMatchIcon?: DisplayPriceMatchOption | null;
  /**
   * Mcr Starting Day Of Week Period.
   * @nullable
   */
  declare mcrStartingDayOfWeekPeriod?: WeekDays | null;
  /**
   * Vend Bank Account Change Proposal Is Enabled.
   * @nullable
   */
  declare vendBankAccountChangeProposalIsEnabled?: NoYes | null;
  /**
   * Vend Bank Account Workflow On Creation Is Enabled.
   * @nullable
   */
  declare vendBankAccountWorkflowOnCreationIsEnabled?: NoYes | null;
  /**
   * Account Receipt.
   * @nullable
   */
  declare accountReceipt?: ItemVend | null;
  /**
   * Vat Process Group By Ru.
   * @nullable
   */
  declare vatProcessGroupByRu?: NoYes | null;
  /**
   * Workflow Submit Disabled When Unallocated Charges Existed.
   * @nullable
   */
  declare workflowSubmitDisabledWhenUnallocatedChargesExisted?: NoYes | null;
  /**
   * Settlement Write Off Enabled.
   * @nullable
   */
  declare settlementWriteOffEnabled?: NoYes | null;
  /**
   * Use Document Date.
   * @nullable
   */
  declare useDocumentDate?: NoYes | null;
  /**
   * Clearing Ledger Dimension Values Json.
   * @nullable
   */
  declare clearingLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Vend.
   * @nullable
   */
  declare defaultVend?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allowed Tax Invoice Posting Period Th.
   */
  declare allowedTaxInvoicePostingPeriodTh: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Credit Error.
   * @nullable
   */
  declare creditError?: NoYes | null;
  /**
   * Cash Disc For Credit Note.
   * @nullable
   */
  declare cashDiscForCreditNote?: NoYes | null;
  /**
   * Mandatory Vat Num.
   * @nullable
   */
  declare mandatoryVatNum?: TaxVatNumCountryRegionType | null;
  /**
   * Auto Settle.
   * @nullable
   */
  declare autoSettle?: NoYes | null;
  /**
   * Default Filter For Vendor Transactions.
   * @nullable
   */
  declare defaultFilterForVendorTransactions?: CustVendShowTransaction | null;
  /**
   * Vend Invoice Internal Default Group.
   * @nullable
   */
  declare vendInvoiceInternalDefaultGroup?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Block Automation When Prepayment Application Failed.
   * @nullable
   */
  declare blockAutomationWhenPrepaymentApplicationFailed?: NoYes | null;
  /**
   * Post Packing Slip.
   * @nullable
   */
  declare postPackingSlip?: NoYes | null;
  /**
   * Mcr Royalty Journal Name.
   * @nullable
   */
  declare mcrRoyaltyJournalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Invoice Default Group Type.
   * @nullable
   */
  declare vendInvoiceDefaultGroupType?: VendInvoiceDefaultGroupType | null;
  /**
   * Document Date For Intracom Vat W.
   * @nullable
   */
  declare documentDateForIntracomVatW?: NoYes | null;
  /**
   * Invoice Total Amount Matches Total Amount In The Pool.
   * @nullable
   */
  declare invoiceTotalAmountMatchesTotalAmountInThePool?: NoYes | null;
  /**
   * Purch Agreement Account Structure Psn.
   */
  declare purchAgreementAccountStructurePsn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Posting Profile Notes.
   * @nullable
   */
  declare postingProfileNotes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Invoice Posting Date Auto Adjustment.
   * @nullable
   */
  declare vendInvoicePostingDateAutoAdjustment?: VendInvoicePostingDateAutoAdjustment | null;
  /**
   * Account Disc.
   * @nullable
   */
  declare accountDisc?: ItemVend | null;
  /**
   * Use Extended Price Matching.
   * @nullable
   */
  declare useExtendedPriceMatching?: ExtendedPriceMatching | null;
  /**
   * Vend Invoice Ref Num Validation Fi.
   * @nullable
   */
  declare vendInvoiceRefNumValidationFi?: NoYes | null;
  /**
   * Due To Trans Date.
   * @nullable
   */
  declare dueToTransDate?: NoYes | null;
  /**
   * Vend Table Change Proposal Is Enabled.
   * @nullable
   */
  declare vendTableChangeProposalIsEnabled?: NoYes | null;
  /**
   * Max Wait Time For Invoice Scheduled Status Hours.
   */
  declare maxWaitTimeForInvoiceScheduledStatusHours: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Vend Payment Grouping Enable.
   * @nullable
   */
  declare vendPaymentGroupingEnable?: NoYes | null;
  /**
   * Use Price Matching For Sales Tax.
   * @nullable
   */
  declare usePriceMatchingForSalesTax?: NoYes | null;
  /**
   * Matching Policy.
   * @nullable
   */
  declare matchingPolicy?: PurchMatchingPolicyOption | null;
  /**
   * Automation Prepayment Application.
   * @nullable
   */
  declare automationPrepaymentApplication?: NoYes | null;
  /**
   * Display Extended Price Tolerance Icon.
   * @nullable
   */
  declare displayExtendedPriceToleranceIcon?: ExtendedPriceMatchIcon | null;
  /**
   * Price Tolerance Percentage For Total Discount.
   */
  declare priceTolerancePercentageForTotalDiscount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Dim Settlement Ctrl Type Ru.
   * @nullable
   */
  declare dimSettlementCtrlTypeRu?: DimSettlementCtrlTypeRu | null;
  /**
   * Tax Period Payment Code Pl.
   * @nullable
   */
  declare taxPeriodPaymentCodePl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Total Price Matching.
   * @nullable
   */
  declare useTotalPriceMatching?: NoYes | null;
  /**
   * Max Invoices Per Batch.
   */
  declare maxInvoicesPerBatch: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: VendParametersBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface VendParametersBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  key: DeserializedType<T, 'Edm.Int32'>;
  confirmingInvoices?: NoYes | null;
  doPrintTransportationDocument?: NoYes | null;
  policyViolationAction?: InvoicePolicyViolationStatus | null;
  useVendAdvanceInvoiceRu?: NoYes | null;
  showAmountDebitCreditJp?: NoYes | null;
  cashDiscVat?: NoYes | null;
  automationTotalsReqForWorkflowSubmission?: NoYes | null;
  automationProductReceiptMatchingMaxAttempts: DeserializedType<T, 'Edm.Int32'>;
  useFiscalInvoiceAccount?: UseFiscalInvoiceAccount | null;
  useMiscChargeMatching?: NoYes | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  overdueCitpitDimensionAttributeW: DeserializedType<T, 'Edm.Int64'>;
  validateTaxGroupCompleteness?: NoYes | null;
  settlementWriteOffReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  due2Payment?: DeserializedType<T, 'Edm.String'> | null;
  disablePaymentIdValidationCh?: NoYes | null;
  mcrRoyaltyLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  mandatoryTaxGroup?: NoYes | null;
  automaticHeaderMatching?: UnknownNoYes | null;
  totalPriceTolerancePercentage: DeserializedType<T, 'Edm.Decimal'>;
  w9Validation?: NoYes | null;
  mandatoryInvoiceVatNum?: TaxVatNumCountryRegionType | null;
  enableElectronicPaymentNumber?: NoYes | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  calculateInvoiceTotal?: UnknownNoYes | null;
  blockPostingAndSubmissionToWorkflow?: NoYes | null;
  vendInvoiceInUseRecoverEnable?: NoYes | null;
  purchAgreementFinancialDimensionPsn: DeserializedType<T, 'Edm.Int64'>;
  settlementWriteOffLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  primaryRelationBr?: ItemVend | null;
  amountDiffBookCorrectionRu?: NoYes | null;
  usePurchConsumpAccountRu?: NoYes | null;
  mcrBrokerManualJourPost?: NoYes | null;
  vendNameFromVatNum?: NoYes | null;
  vendTaxRegisterApproval?: VendTaxRegisterApproval | null;
  debtsTransitLedgerDimensionRuValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  vendConsInvoiceJp?: NoYes | null;
  vendInvoiceGroupingEnable?: NoYes | null;
  extendedPriceAmountCurrencyType?: ExtendedPriceAmountCurrencyType | null;
  priceTolerancePercentageForSalesTax: DeserializedType<T, 'Edm.Decimal'>;
  checkInvoice?: ReuseVoucher | null;
  priceTolerancePercentageForSubTotalAmount: DeserializedType<T, 'Edm.Decimal'>;
  changeProposalDataEntityBehavior?: VendTableChangeProposalDataEntityBehavior | null;
  editCashDiscountsWhenDueDateChanged?: NoYes | null;
  maxMstDiff: DeserializedType<T, 'Edm.Decimal'>;
  vendInvoiceAutomationWorkflowSubmissionLimit: DeserializedType<
    T,
    'Edm.Int32'
  >;
  usePriceMatchingForCharges?: NoYes | null;
  taxItemGroupW?: DeserializedType<T, 'Edm.String'> | null;
  checkTaxInvoice?: ReuseVoucher | null;
  priceTolerancePercentageForInvoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  postingProfileRemitNotes?: DeserializedType<T, 'Edm.String'> | null;
  purchPrepayApplicationPolicy?: PurchPrepayApplicationPolicy | null;
  automaticIntentLetterAssignmentIt?: NoYes | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  bypassValidationOfAccountingDistributions?: NoYes | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendInvoiceDocDate?: VendInvoiceDocDate | null;
  mcrRoyaltyOffsetLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  displayPriceMatchIconForInvoiceAmount?: DisplayTotalPriceMatchOption | null;
  creditInvoicingReport?: NoYes | null;
  plafondDateProposalIt?: PlafondDateProposalIt | null;
  factureIssuePeriodRu: DeserializedType<T, 'Edm.Int32'>;
  customsLandingChargesPctIn: DeserializedType<T, 'Edm.Decimal'>;
  vendDiscountOffsetMethodPsn?: DiscountOffsetMethod | null;
  priceTolerancePercentageForCharges: DeserializedType<T, 'Edm.Decimal'>;
  createFactureUnpostPrepaymentRu?: NoYes | null;
  matchingPolicyAllowOverride?: PurchMatchingPolicyOverrideOption | null;
  mcrBrokerExpenseJournal?: DeserializedType<T, 'Edm.String'> | null;
  usePriceMatchingForTotalDiscount?: NoYes | null;
  automationDefaultQuantityForInvoiceLinesCreation?: VendInvoiceDefaultQuantityForAutomaticInvoiceLinesCreation | null;
  vendInvoicePolicy?: NoYes | null;
  creditNoteSettlementType?: SettlementType | null;
  useInvoiceMatching?: UnknownNoYes | null;
  assetPaymentAllocationRu?: RAssetPaymentAllocation | null;
  budgetSettle?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  mixedPayment?: NoYes | null;
  cashDiscForPartialPaym?: NoYes | null;
  automationCreateInvoiceLines?: NoYes | null;
  settlePrepaymentVatTypeW?: CustSettlePrepaymentVatTypeRu | null;
  invoicePeriod?: DeserializedType<T, 'Edm.String'> | null;
  copyInvoiceDimensionRu?: NoYes | null;
  isIbanSwiftRequired?: IbanSwiftRequired | null;
  intentLetterErFormatMappingIdIt: DeserializedType<T, 'Edm.Int64'>;
  extendedPriceToleranceAmount: DeserializedType<T, 'Edm.Decimal'>;
  invoice2Due?: DeserializedType<T, 'Edm.String'> | null;
  displayPriceMatchIconForTotalDiscount?: DisplayTotalPriceMatchOption | null;
  taxOnPrepayment?: NoYes | null;
  rTax25ProfitTable: DeserializedType<T, 'Edm.Int64'>;
  automationProductReceiptMatching?: NoYes | null;
  matchedPackingSlipsInquiry?: NoYes | null;
  automationWorkflowSubmission?: NoYes | null;
  keepSalesTaxAdjustmentsForPo?: NoYes | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  notesJournalsValidations?: NoYes | null;
  automationHoursBeforeMatchingInvoicesBecomesStale: DeserializedType<
    T,
    'Edm.Int32'
  >;
  advancePostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  plafondAllowNegativeIt?: NoYes | null;
  agreementCreditLineRu?: NoYes | null;
  vendBankAccountWorkflowDataEntityBehavior?: VendBankAccountChangeProposalDataEntityBehavior | null;
  mcrBrokerDifferentialJournal?: DeserializedType<T, 'Edm.String'> | null;
  displayPriceMatchIconForSubTotalAmount?: DisplayTotalPriceMatchOption | null;
  purchBookAdditionalListFormatMappingId: DeserializedType<T, 'Edm.Int64'>;
  extendedPriceTolerancePercentage: DeserializedType<T, 'Edm.Decimal'>;
  pollingIntervalMinutes: DeserializedType<T, 'Edm.Int32'>;
  mcrRoyaltyManualJourPost?: NoYes | null;
  maxMstOverUnder: DeserializedType<T, 'Edm.Decimal'>;
  validateTaxInvoiceDateTh?: NoYes | null;
  taxIdValidation?: TaxIdValidation | null;
  prepaymentHandlingLayoutW?: PrepaymentHandlingLayoutW | null;
  intracomVat?: NoYes | null;
  mcrBrokerProcurementCategory: DeserializedType<T, 'Edm.Int64'>;
  vendInvoiceWebServiceDefaultGroup?: DeserializedType<T, 'Edm.String'> | null;
  postInvoiceMatchDiscrepancies?: InvoiceMatchPostingOption | null;
  reversePrepaymentW?: NoYes | null;
  plafondTaxGroupIt?: DeserializedType<T, 'Edm.String'> | null;
  settlementWriteOffJournalName?: DeserializedType<T, 'Edm.String'> | null;
  usePriceMatchingForSubTotalAmount?: NoYes | null;
  displayPriceMatchIconForCharges?: DisplayTotalPriceMatchOption | null;
  prepaymentPostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  creditMaxCheck?: TypeOfCreditmaxCheck | null;
  displayTotalPriceMatchIcon?: DisplayTotalPriceMatchOption | null;
  prohibitVaTinVendJournalCz?: NoYes | null;
  itemDimAdjustLineControlRu?: NoYes | null;
  cashDisc?: UnspecificSpecific | null;
  displayMiscChargeToleranceIcon?: DisplayInvoiceMiscChargeMatchOption | null;
  enableSettlementAllRemittanceAddress?: NoYes | null;
  automationMatchingPriorToWorkflow?: NoYes | null;
  purchBookFormatMappingId: DeserializedType<T, 'Edm.Int64'>;
  postingProfileInvoiceRemit?: DeserializedType<T, 'Edm.String'> | null;
  vendInvoiceAutomationMatchingValidationLimit: DeserializedType<
    T,
    'Edm.Int32'
  >;
  taxGroupW?: DeserializedType<T, 'Edm.String'> | null;
  taxUnderTotalsIn?: NoYes | null;
  projectMatchingRequiredPsn?: NoYes | null;
  displayPriceMatchIconForSalesTax?: DisplayTotalPriceMatchOption | null;
  mcrProcurementCategory: DeserializedType<T, 'Edm.Int64'>;
  usePriceMatchingForInvoiceAmount?: NoYes | null;
  miscChargeTolerancePercentage: DeserializedType<T, 'Edm.Decimal'>;
  rTax25UnrealisedRevenueLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  postChargeAccount?: NoYes | null;
  automationHoursBeforeSubmissionBecomesStale: DeserializedType<T, 'Edm.Int32'>;
  crossYearPostingDateAdjustment?: CrossYearPostingDateAdjustment | null;
  displayPriceMatchIcon?: DisplayPriceMatchOption | null;
  mcrStartingDayOfWeekPeriod?: WeekDays | null;
  vendBankAccountChangeProposalIsEnabled?: NoYes | null;
  vendBankAccountWorkflowOnCreationIsEnabled?: NoYes | null;
  accountReceipt?: ItemVend | null;
  vatProcessGroupByRu?: NoYes | null;
  workflowSubmitDisabledWhenUnallocatedChargesExisted?: NoYes | null;
  settlementWriteOffEnabled?: NoYes | null;
  useDocumentDate?: NoYes | null;
  clearingLedgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
  defaultVend?: DeserializedType<T, 'Edm.String'> | null;
  allowedTaxInvoicePostingPeriodTh: DeserializedType<T, 'Edm.Int32'>;
  creditError?: NoYes | null;
  cashDiscForCreditNote?: NoYes | null;
  mandatoryVatNum?: TaxVatNumCountryRegionType | null;
  autoSettle?: NoYes | null;
  defaultFilterForVendorTransactions?: CustVendShowTransaction | null;
  vendInvoiceInternalDefaultGroup?: DeserializedType<T, 'Edm.String'> | null;
  blockAutomationWhenPrepaymentApplicationFailed?: NoYes | null;
  postPackingSlip?: NoYes | null;
  mcrRoyaltyJournalName?: DeserializedType<T, 'Edm.String'> | null;
  vendInvoiceDefaultGroupType?: VendInvoiceDefaultGroupType | null;
  documentDateForIntracomVatW?: NoYes | null;
  invoiceTotalAmountMatchesTotalAmountInThePool?: NoYes | null;
  purchAgreementAccountStructurePsn: DeserializedType<T, 'Edm.Int64'>;
  postingProfileNotes?: DeserializedType<T, 'Edm.String'> | null;
  vendInvoicePostingDateAutoAdjustment?: VendInvoicePostingDateAutoAdjustment | null;
  accountDisc?: ItemVend | null;
  useExtendedPriceMatching?: ExtendedPriceMatching | null;
  vendInvoiceRefNumValidationFi?: NoYes | null;
  dueToTransDate?: NoYes | null;
  vendTableChangeProposalIsEnabled?: NoYes | null;
  maxWaitTimeForInvoiceScheduledStatusHours: DeserializedType<T, 'Edm.Int32'>;
  vendPaymentGroupingEnable?: NoYes | null;
  usePriceMatchingForSalesTax?: NoYes | null;
  matchingPolicy?: PurchMatchingPolicyOption | null;
  automationPrepaymentApplication?: NoYes | null;
  displayExtendedPriceToleranceIcon?: ExtendedPriceMatchIcon | null;
  priceTolerancePercentageForTotalDiscount: DeserializedType<T, 'Edm.Decimal'>;
  dimSettlementCtrlTypeRu?: DimSettlementCtrlTypeRu | null;
  taxPeriodPaymentCodePl?: DeserializedType<T, 'Edm.String'> | null;
  useTotalPriceMatching?: NoYes | null;
  maxInvoicesPerBatch: DeserializedType<T, 'Edm.Int32'>;
}
