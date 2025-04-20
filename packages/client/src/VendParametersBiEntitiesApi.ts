/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendParametersBiEntities } from './VendParametersBiEntities';
import { VendParametersBiEntitiesRequestBuilder } from './VendParametersBiEntitiesRequestBuilder';
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
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class VendParametersBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendParametersBiEntities<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): VendParametersBiEntitiesApi<DeSerializersT> {
    return new VendParametersBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendParametersBiEntities;

  requestBuilder(): VendParametersBiEntitiesRequestBuilder<DeSerializersT> {
    return new VendParametersBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendParametersBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendParametersBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendParametersBiEntities<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof VendParametersBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendParametersBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KEY: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CONFIRMING_INVOICES: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DO_PRINT_TRANSPORTATION_DOCUMENT: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POLICY_VIOLATION_ACTION: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      InvoicePolicyViolationStatus,
      true,
      true
    >;
    USE_VEND_ADVANCE_INVOICE_RU: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHOW_AMOUNT_DEBIT_CREDIT_JP: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_DISC_VAT: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTOMATION_TOTALS_REQ_FOR_WORKFLOW_SUBMISSION: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTOMATION_PRODUCT_RECEIPT_MATCHING_MAX_ATTEMPTS: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    USE_FISCAL_INVOICE_ACCOUNT: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      UseFiscalInvoiceAccount,
      true,
      true
    >;
    USE_MISC_CHARGE_MATCHING: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERDUE_CITPIT_DIMENSION_ATTRIBUTE_W: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VALIDATE_TAX_GROUP_COMPLETENESS: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SETTLEMENT_WRITE_OFF_REASON_CODE: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUE_2_PAYMENT: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISABLE_PAYMENT_ID_VALIDATION_CH: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MCR_ROYALTY_LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANDATORY_TAX_GROUP: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTOMATIC_HEADER_MATCHING: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    TOTAL_PRICE_TOLERANCE_PERCENTAGE: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    W_9_VALIDATION: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MANDATORY_INVOICE_VAT_NUM: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      TaxVatNumCountryRegionType,
      true,
      true
    >;
    ENABLE_ELECTRONIC_PAYMENT_NUMBER: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CALCULATE_INVOICE_TOTAL: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    BLOCK_POSTING_AND_SUBMISSION_TO_WORKFLOW: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VEND_INVOICE_IN_USE_RECOVER_ENABLE: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCH_AGREEMENT_FINANCIAL_DIMENSION_PSN: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SETTLEMENT_WRITE_OFF_LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_RELATION_BR: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      ItemVend,
      true,
      true
    >;
    AMOUNT_DIFF_BOOK_CORRECTION_RU: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_PURCH_CONSUMP_ACCOUNT_RU: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MCR_BROKER_MANUAL_JOUR_POST: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VEND_NAME_FROM_VAT_NUM: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VEND_TAX_REGISTER_APPROVAL: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      VendTaxRegisterApproval,
      true,
      true
    >;
    DEBTS_TRANSIT_LEDGER_DIMENSION_RU_VALUES_JSON: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_CONS_INVOICE_JP: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VEND_INVOICE_GROUPING_ENABLE: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXTENDED_PRICE_AMOUNT_CURRENCY_TYPE: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      ExtendedPriceAmountCurrencyType,
      true,
      true
    >;
    PRICE_TOLERANCE_PERCENTAGE_FOR_SALES_TAX: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CHECK_INVOICE: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      ReuseVoucher,
      true,
      true
    >;
    PRICE_TOLERANCE_PERCENTAGE_FOR_SUB_TOTAL_AMOUNT: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CHANGE_PROPOSAL_DATA_ENTITY_BEHAVIOR: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      VendTableChangeProposalDataEntityBehavior,
      true,
      true
    >;
    EDIT_CASH_DISCOUNTS_WHEN_DUE_DATE_CHANGED: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_MST_DIFF: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VEND_INVOICE_AUTOMATION_WORKFLOW_SUBMISSION_LIMIT: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    USE_PRICE_MATCHING_FOR_CHARGES: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_ITEM_GROUP_W: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_TAX_INVOICE: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      ReuseVoucher,
      true,
      true
    >;
    PRICE_TOLERANCE_PERCENTAGE_FOR_INVOICE_AMOUNT: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSTING_PROFILE_REMIT_NOTES: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_PREPAY_APPLICATION_POLICY: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      PurchPrepayApplicationPolicy,
      true,
      true
    >;
    AUTOMATIC_INTENT_LETTER_ASSIGNMENT_IT: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BYPASS_VALIDATION_OF_ACCOUNTING_DISTRIBUTIONS: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VEND_INVOICE_DOC_DATE: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      VendInvoiceDocDate,
      true,
      true
    >;
    MCR_ROYALTY_OFFSET_LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_PRICE_MATCH_ICON_FOR_INVOICE_AMOUNT: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      DisplayTotalPriceMatchOption,
      true,
      true
    >;
    CREDIT_INVOICING_REPORT: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PLAFOND_DATE_PROPOSAL_IT: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      PlafondDateProposalIt,
      true,
      true
    >;
    FACTURE_ISSUE_PERIOD_RU: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUSTOMS_LANDING_CHARGES_PCT_IN: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VEND_DISCOUNT_OFFSET_METHOD_PSN: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      DiscountOffsetMethod,
      true,
      true
    >;
    PRICE_TOLERANCE_PERCENTAGE_FOR_CHARGES: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREATE_FACTURE_UNPOST_PREPAYMENT_RU: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MATCHING_POLICY_ALLOW_OVERRIDE: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      PurchMatchingPolicyOverrideOption,
      true,
      true
    >;
    MCR_BROKER_EXPENSE_JOURNAL: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_PRICE_MATCHING_FOR_TOTAL_DISCOUNT: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTOMATION_DEFAULT_QUANTITY_FOR_INVOICE_LINES_CREATION: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      VendInvoiceDefaultQuantityForAutomaticInvoiceLinesCreation,
      true,
      true
    >;
    VEND_INVOICE_POLICY: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_NOTE_SETTLEMENT_TYPE: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      SettlementType,
      true,
      true
    >;
    USE_INVOICE_MATCHING: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    ASSET_PAYMENT_ALLOCATION_RU: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      RAssetPaymentAllocation,
      true,
      true
    >;
    BUDGET_SETTLE: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIXED_PAYMENT: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_DISC_FOR_PARTIAL_PAYM: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTOMATION_CREATE_INVOICE_LINES: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SETTLE_PREPAYMENT_VAT_TYPE_W: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      CustSettlePrepaymentVatTypeRu,
      true,
      true
    >;
    INVOICE_PERIOD: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COPY_INVOICE_DIMENSION_RU: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_IBAN_SWIFT_REQUIRED: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      IbanSwiftRequired,
      true,
      true
    >;
    INTENT_LETTER_ER_FORMAT_MAPPING_ID_IT: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXTENDED_PRICE_TOLERANCE_AMOUNT: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_2_DUE: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_PRICE_MATCH_ICON_FOR_TOTAL_DISCOUNT: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      DisplayTotalPriceMatchOption,
      true,
      true
    >;
    TAX_ON_PREPAYMENT: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    R_TAX_25_PROFIT_TABLE: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    AUTOMATION_PRODUCT_RECEIPT_MATCHING: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MATCHED_PACKING_SLIPS_INQUIRY: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTOMATION_WORKFLOW_SUBMISSION: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    KEEP_SALES_TAX_ADJUSTMENTS_FOR_PO: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    NOTES_JOURNALS_VALIDATIONS: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTOMATION_HOURS_BEFORE_MATCHING_INVOICES_BECOMES_STALE: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ADVANCE_POSTING_PROFILE: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLAFOND_ALLOW_NEGATIVE_IT: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AGREEMENT_CREDIT_LINE_RU: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VEND_BANK_ACCOUNT_WORKFLOW_DATA_ENTITY_BEHAVIOR: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      VendBankAccountChangeProposalDataEntityBehavior,
      true,
      true
    >;
    MCR_BROKER_DIFFERENTIAL_JOURNAL: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_PRICE_MATCH_ICON_FOR_SUB_TOTAL_AMOUNT: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      DisplayTotalPriceMatchOption,
      true,
      true
    >;
    PURCH_BOOK_ADDITIONAL_LIST_FORMAT_MAPPING_ID: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXTENDED_PRICE_TOLERANCE_PERCENTAGE: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POLLING_INTERVAL_MINUTES: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MCR_ROYALTY_MANUAL_JOUR_POST: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_MST_OVER_UNDER: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VALIDATE_TAX_INVOICE_DATE_TH: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_ID_VALIDATION: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      TaxIdValidation,
      true,
      true
    >;
    PREPAYMENT_HANDLING_LAYOUT_W: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      PrepaymentHandlingLayoutW,
      true,
      true
    >;
    INTRACOM_VAT: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MCR_BROKER_PROCUREMENT_CATEGORY: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VEND_INVOICE_WEB_SERVICE_DEFAULT_GROUP: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_INVOICE_MATCH_DISCREPANCIES: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      InvoiceMatchPostingOption,
      true,
      true
    >;
    REVERSE_PREPAYMENT_W: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PLAFOND_TAX_GROUP_IT: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLEMENT_WRITE_OFF_JOURNAL_NAME: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_PRICE_MATCHING_FOR_SUB_TOTAL_AMOUNT: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISPLAY_PRICE_MATCH_ICON_FOR_CHARGES: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      DisplayTotalPriceMatchOption,
      true,
      true
    >;
    PREPAYMENT_POSTING_PROFILE: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_MAX_CHECK: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      TypeOfCreditmaxCheck,
      true,
      true
    >;
    DISPLAY_TOTAL_PRICE_MATCH_ICON: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      DisplayTotalPriceMatchOption,
      true,
      true
    >;
    PROHIBIT_VA_TIN_VEND_JOURNAL_CZ: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_DIM_ADJUST_LINE_CONTROL_RU: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_DISC: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      UnspecificSpecific,
      true,
      true
    >;
    DISPLAY_MISC_CHARGE_TOLERANCE_ICON: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      DisplayInvoiceMiscChargeMatchOption,
      true,
      true
    >;
    ENABLE_SETTLEMENT_ALL_REMITTANCE_ADDRESS: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTOMATION_MATCHING_PRIOR_TO_WORKFLOW: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCH_BOOK_FORMAT_MAPPING_ID: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    POSTING_PROFILE_INVOICE_REMIT: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_INVOICE_AUTOMATION_MATCHING_VALIDATION_LIMIT: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_GROUP_W: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_UNDER_TOTALS_IN: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_MATCHING_REQUIRED_PSN: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISPLAY_PRICE_MATCH_ICON_FOR_SALES_TAX: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      DisplayTotalPriceMatchOption,
      true,
      true
    >;
    MCR_PROCUREMENT_CATEGORY: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    USE_PRICE_MATCHING_FOR_INVOICE_AMOUNT: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MISC_CHARGE_TOLERANCE_PERCENTAGE: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    R_TAX_25_UNREALISED_REVENUE_LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_CHARGE_ACCOUNT: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTOMATION_HOURS_BEFORE_SUBMISSION_BECOMES_STALE: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CROSS_YEAR_POSTING_DATE_ADJUSTMENT: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      CrossYearPostingDateAdjustment,
      true,
      true
    >;
    DISPLAY_PRICE_MATCH_ICON: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      DisplayPriceMatchOption,
      true,
      true
    >;
    MCR_STARTING_DAY_OF_WEEK_PERIOD: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      WeekDays,
      true,
      true
    >;
    VEND_BANK_ACCOUNT_CHANGE_PROPOSAL_IS_ENABLED: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VEND_BANK_ACCOUNT_WORKFLOW_ON_CREATION_IS_ENABLED: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCOUNT_RECEIPT: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      ItemVend,
      true,
      true
    >;
    VAT_PROCESS_GROUP_BY_RU: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORKFLOW_SUBMIT_DISABLED_WHEN_UNALLOCATED_CHARGES_EXISTED: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SETTLEMENT_WRITE_OFF_ENABLED: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_DOCUMENT_DATE: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CLEARING_LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_VEND: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOWED_TAX_INVOICE_POSTING_PERIOD_TH: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CREDIT_ERROR: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_DISC_FOR_CREDIT_NOTE: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MANDATORY_VAT_NUM: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      TaxVatNumCountryRegionType,
      true,
      true
    >;
    AUTO_SETTLE: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_FILTER_FOR_VENDOR_TRANSACTIONS: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      CustVendShowTransaction,
      true,
      true
    >;
    VEND_INVOICE_INTERNAL_DEFAULT_GROUP: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BLOCK_AUTOMATION_WHEN_PREPAYMENT_APPLICATION_FAILED: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POST_PACKING_SLIP: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MCR_ROYALTY_JOURNAL_NAME: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_INVOICE_DEFAULT_GROUP_TYPE: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      VendInvoiceDefaultGroupType,
      true,
      true
    >;
    DOCUMENT_DATE_FOR_INTRACOM_VAT_W: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_TOTAL_AMOUNT_MATCHES_TOTAL_AMOUNT_IN_THE_POOL: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCH_AGREEMENT_ACCOUNT_STRUCTURE_PSN: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    POSTING_PROFILE_NOTES: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_INVOICE_POSTING_DATE_AUTO_ADJUSTMENT: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      VendInvoicePostingDateAutoAdjustment,
      true,
      true
    >;
    ACCOUNT_DISC: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      ItemVend,
      true,
      true
    >;
    USE_EXTENDED_PRICE_MATCHING: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      ExtendedPriceMatching,
      true,
      true
    >;
    VEND_INVOICE_REF_NUM_VALIDATION_FI: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DUE_TO_TRANS_DATE: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VEND_TABLE_CHANGE_PROPOSAL_IS_ENABLED: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_WAIT_TIME_FOR_INVOICE_SCHEDULED_STATUS_HOURS: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VEND_PAYMENT_GROUPING_ENABLE: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_PRICE_MATCHING_FOR_SALES_TAX: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MATCHING_POLICY: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      PurchMatchingPolicyOption,
      true,
      true
    >;
    AUTOMATION_PREPAYMENT_APPLICATION: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISPLAY_EXTENDED_PRICE_TOLERANCE_ICON: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      ExtendedPriceMatchIcon,
      true,
      true
    >;
    PRICE_TOLERANCE_PERCENTAGE_FOR_TOTAL_DISCOUNT: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIM_SETTLEMENT_CTRL_TYPE_RU: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      DimSettlementCtrlTypeRu,
      true,
      true
    >;
    TAX_PERIOD_PAYMENT_CODE_PL: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_TOTAL_PRICE_MATCHING: EnumField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_INVOICES_PER_BATCH: OrderableEdmTypeField<
      VendParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<VendParametersBiEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link key} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY: fieldBuilder.buildEdmTypeField('Key', 'Edm.Int32', false),
        /**
         * Static representation of the {@link confirmingInvoices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMING_INVOICES: fieldBuilder.buildEnumField(
          'ConfirmingInvoices',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link doPrintTransportationDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DO_PRINT_TRANSPORTATION_DOCUMENT: fieldBuilder.buildEnumField(
          'DoPrintTransportationDocument',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link policyViolationAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_VIOLATION_ACTION: fieldBuilder.buildEnumField(
          'PolicyViolationAction',
          InvoicePolicyViolationStatus,
          true
        ),
        /**
         * Static representation of the {@link useVendAdvanceInvoiceRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_VEND_ADVANCE_INVOICE_RU: fieldBuilder.buildEnumField(
          'UseVendAdvanceInvoice_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link showAmountDebitCreditJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_AMOUNT_DEBIT_CREDIT_JP: fieldBuilder.buildEnumField(
          'ShowAmountDebitCredit_JP',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cashDiscVat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC_VAT: fieldBuilder.buildEnumField('CashDiscVAT', NoYes, true),
        /**
         * Static representation of the {@link automationTotalsReqForWorkflowSubmission} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATION_TOTALS_REQ_FOR_WORKFLOW_SUBMISSION:
          fieldBuilder.buildEnumField(
            'AutomationTotalsReqForWorkflowSubmission',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link automationProductReceiptMatchingMaxAttempts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATION_PRODUCT_RECEIPT_MATCHING_MAX_ATTEMPTS:
          fieldBuilder.buildEdmTypeField(
            'AutomationProductReceiptMatchingMaxAttempts',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link useFiscalInvoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_FISCAL_INVOICE_ACCOUNT: fieldBuilder.buildEnumField(
          'UseFiscalInvoiceAccount',
          UseFiscalInvoiceAccount,
          true
        ),
        /**
         * Static representation of the {@link useMiscChargeMatching} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_MISC_CHARGE_MATCHING: fieldBuilder.buildEnumField(
          'UseMiscChargeMatching',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PostingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overdueCitpitDimensionAttributeW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERDUE_CITPIT_DIMENSION_ATTRIBUTE_W: fieldBuilder.buildEdmTypeField(
          'OverdueCITPITDimensionAttribute_W',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link validateTaxGroupCompleteness} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_TAX_GROUP_COMPLETENESS: fieldBuilder.buildEnumField(
          'ValidateTaxGroupCompleteness',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link settlementWriteOffReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_WRITE_OFF_REASON_CODE: fieldBuilder.buildEdmTypeField(
          'SettlementWriteOffReasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link due2Payment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_2_PAYMENT: fieldBuilder.buildEdmTypeField(
          'Due2Payment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link disablePaymentIdValidationCh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISABLE_PAYMENT_ID_VALIDATION_CH: fieldBuilder.buildEnumField(
          'DisablePaymentIDValidation_CH',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mcrRoyaltyLedgerDimensionValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_ROYALTY_LEDGER_DIMENSION_VALUES_JSON:
          fieldBuilder.buildEdmTypeField(
            'MCRRoyaltyLedgerDimensionValuesJson',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link mandatoryTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY_TAX_GROUP: fieldBuilder.buildEnumField(
          'MandatoryTaxGroup',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link automaticHeaderMatching} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATIC_HEADER_MATCHING: fieldBuilder.buildEnumField(
          'AutomaticHeaderMatching',
          UnknownNoYes,
          true
        ),
        /**
         * Static representation of the {@link totalPriceTolerancePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_PRICE_TOLERANCE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'TotalPriceTolerancePercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link w9Validation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        W_9_VALIDATION: fieldBuilder.buildEnumField(
          'W9Validation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mandatoryInvoiceVatNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY_INVOICE_VAT_NUM: fieldBuilder.buildEnumField(
          'MandatoryInvoiceVATNum',
          TaxVatNumCountryRegionType,
          true
        ),
        /**
         * Static representation of the {@link enableElectronicPaymentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_ELECTRONIC_PAYMENT_NUMBER: fieldBuilder.buildEnumField(
          'EnableElectronicPaymentNumber',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link calculateInvoiceTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATE_INVOICE_TOTAL: fieldBuilder.buildEnumField(
          'CalculateInvoiceTotal',
          UnknownNoYes,
          true
        ),
        /**
         * Static representation of the {@link blockPostingAndSubmissionToWorkflow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCK_POSTING_AND_SUBMISSION_TO_WORKFLOW: fieldBuilder.buildEnumField(
          'BlockPostingAndSubmissionToWorkflow',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendInvoiceInUseRecoverEnable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_INVOICE_IN_USE_RECOVER_ENABLE: fieldBuilder.buildEnumField(
          'VendInvoiceInUseRecoverEnable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link purchAgreementFinancialDimensionPsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_AGREEMENT_FINANCIAL_DIMENSION_PSN: fieldBuilder.buildEdmTypeField(
          'PurchAgreementFinancialDimension_PSN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link settlementWriteOffLedgerDimensionValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_WRITE_OFF_LEDGER_DIMENSION_VALUES_JSON:
          fieldBuilder.buildEdmTypeField(
            'SettlementWriteOffLedgerDimensionValuesJson',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link primaryRelationBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_RELATION_BR: fieldBuilder.buildEnumField(
          'PrimaryRelation_BR',
          ItemVend,
          true
        ),
        /**
         * Static representation of the {@link amountDiffBookCorrectionRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_DIFF_BOOK_CORRECTION_RU: fieldBuilder.buildEnumField(
          'AmountDiffBookCorrection_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link usePurchConsumpAccountRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_PURCH_CONSUMP_ACCOUNT_RU: fieldBuilder.buildEnumField(
          'UsePurchConsumpAccount_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mcrBrokerManualJourPost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_BROKER_MANUAL_JOUR_POST: fieldBuilder.buildEnumField(
          'MCRBrokerManualJourPost',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendNameFromVatNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_NAME_FROM_VAT_NUM: fieldBuilder.buildEnumField(
          'VendNameFromVATNum',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendTaxRegisterApproval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_TAX_REGISTER_APPROVAL: fieldBuilder.buildEnumField(
          'VendTaxRegisterApproval',
          VendTaxRegisterApproval,
          true
        ),
        /**
         * Static representation of the {@link debtsTransitLedgerDimensionRuValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBTS_TRANSIT_LEDGER_DIMENSION_RU_VALUES_JSON:
          fieldBuilder.buildEdmTypeField(
            'DebtsTransitLedgerDimension_RUValuesJson',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link vendConsInvoiceJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_CONS_INVOICE_JP: fieldBuilder.buildEnumField(
          'VendConsInvoice_JP',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendInvoiceGroupingEnable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_INVOICE_GROUPING_ENABLE: fieldBuilder.buildEnumField(
          'VendInvoiceGroupingEnable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link extendedPriceAmountCurrencyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTENDED_PRICE_AMOUNT_CURRENCY_TYPE: fieldBuilder.buildEnumField(
          'ExtendedPriceAmountCurrencyType',
          ExtendedPriceAmountCurrencyType,
          true
        ),
        /**
         * Static representation of the {@link priceTolerancePercentageForSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_TOLERANCE_PERCENTAGE_FOR_SALES_TAX:
          fieldBuilder.buildEdmTypeField(
            'PriceTolerancePercentageForSalesTax',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link checkInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_INVOICE: fieldBuilder.buildEnumField(
          'CheckInvoice',
          ReuseVoucher,
          true
        ),
        /**
         * Static representation of the {@link priceTolerancePercentageForSubTotalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_TOLERANCE_PERCENTAGE_FOR_SUB_TOTAL_AMOUNT:
          fieldBuilder.buildEdmTypeField(
            'PriceTolerancePercentageForSubTotalAmount',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link changeProposalDataEntityBehavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_PROPOSAL_DATA_ENTITY_BEHAVIOR: fieldBuilder.buildEnumField(
          'ChangeProposalDataEntityBehavior',
          VendTableChangeProposalDataEntityBehavior,
          true
        ),
        /**
         * Static representation of the {@link editCashDiscountsWhenDueDateChanged} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EDIT_CASH_DISCOUNTS_WHEN_DUE_DATE_CHANGED: fieldBuilder.buildEnumField(
          'EditCashDiscountsWhenDueDateChanged',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maxMstDiff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_MST_DIFF: fieldBuilder.buildEdmTypeField(
          'MaxMSTDiff',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vendInvoiceAutomationWorkflowSubmissionLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_INVOICE_AUTOMATION_WORKFLOW_SUBMISSION_LIMIT:
          fieldBuilder.buildEdmTypeField(
            'VendInvoiceAutomationWorkflowSubmissionLimit',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link usePriceMatchingForCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_PRICE_MATCHING_FOR_CHARGES: fieldBuilder.buildEnumField(
          'UsePriceMatchingForCharges',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxItemGroupW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP_W: fieldBuilder.buildEdmTypeField(
          'TaxItemGroup_W',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checkTaxInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_TAX_INVOICE: fieldBuilder.buildEnumField(
          'CheckTaxInvoice',
          ReuseVoucher,
          true
        ),
        /**
         * Static representation of the {@link priceTolerancePercentageForInvoiceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_TOLERANCE_PERCENTAGE_FOR_INVOICE_AMOUNT:
          fieldBuilder.buildEdmTypeField(
            'PriceTolerancePercentageForInvoiceAmount',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link postingProfileRemitNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_REMIT_NOTES: fieldBuilder.buildEdmTypeField(
          'PostingProfileRemitNotes',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchPrepayApplicationPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_PREPAY_APPLICATION_POLICY: fieldBuilder.buildEnumField(
          'PurchPrepayApplicationPolicy',
          PurchPrepayApplicationPolicy,
          true
        ),
        /**
         * Static representation of the {@link automaticIntentLetterAssignmentIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATIC_INTENT_LETTER_ASSIGNMENT_IT: fieldBuilder.buildEnumField(
          'AutomaticIntentLetterAssignment_IT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sysModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'SysModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bypassValidationOfAccountingDistributions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BYPASS_VALIDATION_OF_ACCOUNTING_DISTRIBUTIONS:
          fieldBuilder.buildEnumField(
            'BypassValidationOfAccountingDistributions',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vendInvoiceDocDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_INVOICE_DOC_DATE: fieldBuilder.buildEnumField(
          'VendInvoiceDocDate',
          VendInvoiceDocDate,
          true
        ),
        /**
         * Static representation of the {@link mcrRoyaltyOffsetLedgerDimensionValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_ROYALTY_OFFSET_LEDGER_DIMENSION_VALUES_JSON:
          fieldBuilder.buildEdmTypeField(
            'MCRRoyaltyOffsetLedgerDimensionValuesJson',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link displayPriceMatchIconForInvoiceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_PRICE_MATCH_ICON_FOR_INVOICE_AMOUNT:
          fieldBuilder.buildEnumField(
            'DisplayPriceMatchIconForInvoiceAmount',
            DisplayTotalPriceMatchOption,
            true
          ),
        /**
         * Static representation of the {@link creditInvoicingReport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_INVOICING_REPORT: fieldBuilder.buildEnumField(
          'CreditInvoicingReport',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link plafondDateProposalIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAFOND_DATE_PROPOSAL_IT: fieldBuilder.buildEnumField(
          'PlafondDateProposal_IT',
          PlafondDateProposalIt,
          true
        ),
        /**
         * Static representation of the {@link factureIssuePeriodRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACTURE_ISSUE_PERIOD_RU: fieldBuilder.buildEdmTypeField(
          'FactureIssuePeriod_RU',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link customsLandingChargesPctIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_LANDING_CHARGES_PCT_IN: fieldBuilder.buildEdmTypeField(
          'CustomsLandingChargesPct_IN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vendDiscountOffsetMethodPsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_DISCOUNT_OFFSET_METHOD_PSN: fieldBuilder.buildEnumField(
          'VendDiscountOffsetMethod_psn',
          DiscountOffsetMethod,
          true
        ),
        /**
         * Static representation of the {@link priceTolerancePercentageForCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_TOLERANCE_PERCENTAGE_FOR_CHARGES: fieldBuilder.buildEdmTypeField(
          'PriceTolerancePercentageForCharges',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link createFactureUnpostPrepaymentRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_FACTURE_UNPOST_PREPAYMENT_RU: fieldBuilder.buildEnumField(
          'CreateFactureUnpostPrepayment_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link matchingPolicyAllowOverride} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCHING_POLICY_ALLOW_OVERRIDE: fieldBuilder.buildEnumField(
          'MatchingPolicyAllowOverride',
          PurchMatchingPolicyOverrideOption,
          true
        ),
        /**
         * Static representation of the {@link mcrBrokerExpenseJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_BROKER_EXPENSE_JOURNAL: fieldBuilder.buildEdmTypeField(
          'MCRBrokerExpenseJournal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link usePriceMatchingForTotalDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_PRICE_MATCHING_FOR_TOTAL_DISCOUNT: fieldBuilder.buildEnumField(
          'UsePriceMatchingForTotalDiscount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link automationDefaultQuantityForInvoiceLinesCreation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATION_DEFAULT_QUANTITY_FOR_INVOICE_LINES_CREATION:
          fieldBuilder.buildEnumField(
            'AutomationDefaultQuantityForInvoiceLinesCreation',
            VendInvoiceDefaultQuantityForAutomaticInvoiceLinesCreation,
            true
          ),
        /**
         * Static representation of the {@link vendInvoicePolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_INVOICE_POLICY: fieldBuilder.buildEnumField(
          'VendInvoicePolicy',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link creditNoteSettlementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_NOTE_SETTLEMENT_TYPE: fieldBuilder.buildEnumField(
          'CreditNoteSettlementType',
          SettlementType,
          true
        ),
        /**
         * Static representation of the {@link useInvoiceMatching} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_INVOICE_MATCHING: fieldBuilder.buildEnumField(
          'UseInvoiceMatching',
          UnknownNoYes,
          true
        ),
        /**
         * Static representation of the {@link assetPaymentAllocationRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_PAYMENT_ALLOCATION_RU: fieldBuilder.buildEnumField(
          'AssetPaymentAllocation_RU',
          RAssetPaymentAllocation,
          true
        ),
        /**
         * Static representation of the {@link budgetSettle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_SETTLE: fieldBuilder.buildEdmTypeField(
          'BudgetSettle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mixedPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIXED_PAYMENT: fieldBuilder.buildEnumField('MixedPayment', NoYes, true),
        /**
         * Static representation of the {@link cashDiscForPartialPaym} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC_FOR_PARTIAL_PAYM: fieldBuilder.buildEnumField(
          'CashDiscForPartialPaym',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link automationCreateInvoiceLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATION_CREATE_INVOICE_LINES: fieldBuilder.buildEnumField(
          'AutomationCreateInvoiceLines',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link settlePrepaymentVatTypeW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_PREPAYMENT_VAT_TYPE_W: fieldBuilder.buildEnumField(
          'SettlePrepaymentVATType_W',
          CustSettlePrepaymentVatTypeRu,
          true
        ),
        /**
         * Static representation of the {@link invoicePeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_PERIOD: fieldBuilder.buildEdmTypeField(
          'InvoicePeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link copyInvoiceDimensionRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COPY_INVOICE_DIMENSION_RU: fieldBuilder.buildEnumField(
          'CopyInvoiceDimension_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isIbanSwiftRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_IBAN_SWIFT_REQUIRED: fieldBuilder.buildEnumField(
          'IsIbanSwiftRequired',
          IbanSwiftRequired,
          true
        ),
        /**
         * Static representation of the {@link intentLetterErFormatMappingIdIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTENT_LETTER_ER_FORMAT_MAPPING_ID_IT: fieldBuilder.buildEdmTypeField(
          'IntentLetterERFormatMappingId_IT',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link extendedPriceToleranceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTENDED_PRICE_TOLERANCE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ExtendedPriceToleranceAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoice2Due} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_2_DUE: fieldBuilder.buildEdmTypeField(
          'Invoice2Due',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link displayPriceMatchIconForTotalDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_PRICE_MATCH_ICON_FOR_TOTAL_DISCOUNT:
          fieldBuilder.buildEnumField(
            'DisplayPriceMatchIconForTotalDiscount',
            DisplayTotalPriceMatchOption,
            true
          ),
        /**
         * Static representation of the {@link taxOnPrepayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ON_PREPAYMENT: fieldBuilder.buildEnumField(
          'TaxOnPrepayment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link rTax25ProfitTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        R_TAX_25_PROFIT_TABLE: fieldBuilder.buildEdmTypeField(
          'RTax25ProfitTable',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link automationProductReceiptMatching} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATION_PRODUCT_RECEIPT_MATCHING: fieldBuilder.buildEnumField(
          'AutomationProductReceiptMatching',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link matchedPackingSlipsInquiry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCHED_PACKING_SLIPS_INQUIRY: fieldBuilder.buildEnumField(
          'MatchedPackingSlipsInquiry',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link automationWorkflowSubmission} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATION_WORKFLOW_SUBMISSION: fieldBuilder.buildEnumField(
          'AutomationWorkflowSubmission',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link keepSalesTaxAdjustmentsForPo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEEP_SALES_TAX_ADJUSTMENTS_FOR_PO: fieldBuilder.buildEnumField(
          'KeepSalesTaxAdjustmentsForPO',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link notesJournalsValidations} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES_JOURNALS_VALIDATIONS: fieldBuilder.buildEnumField(
          'NotesJournalsValidations',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link automationHoursBeforeMatchingInvoicesBecomesStale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATION_HOURS_BEFORE_MATCHING_INVOICES_BECOMES_STALE:
          fieldBuilder.buildEdmTypeField(
            'AutomationHoursBeforeMatchingInvoicesBecomesStale',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link advancePostingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'AdvancePostingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plafondAllowNegativeIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAFOND_ALLOW_NEGATIVE_IT: fieldBuilder.buildEnumField(
          'PlafondAllowNegative_IT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link agreementCreditLineRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_CREDIT_LINE_RU: fieldBuilder.buildEnumField(
          'AgreementCreditLine_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendBankAccountWorkflowDataEntityBehavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_BANK_ACCOUNT_WORKFLOW_DATA_ENTITY_BEHAVIOR:
          fieldBuilder.buildEnumField(
            'VendBankAccountWorkflowDataEntityBehavior',
            VendBankAccountChangeProposalDataEntityBehavior,
            true
          ),
        /**
         * Static representation of the {@link mcrBrokerDifferentialJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_BROKER_DIFFERENTIAL_JOURNAL: fieldBuilder.buildEdmTypeField(
          'MCRBrokerDifferentialJournal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link displayPriceMatchIconForSubTotalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_PRICE_MATCH_ICON_FOR_SUB_TOTAL_AMOUNT:
          fieldBuilder.buildEnumField(
            'DisplayPriceMatchIconForSubTotalAmount',
            DisplayTotalPriceMatchOption,
            true
          ),
        /**
         * Static representation of the {@link purchBookAdditionalListFormatMappingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_BOOK_ADDITIONAL_LIST_FORMAT_MAPPING_ID:
          fieldBuilder.buildEdmTypeField(
            'PurchBookAdditionalListFormatMappingID',
            'Edm.Int64',
            false
          ),
        /**
         * Static representation of the {@link extendedPriceTolerancePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTENDED_PRICE_TOLERANCE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'ExtendedPriceTolerancePercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link pollingIntervalMinutes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLLING_INTERVAL_MINUTES: fieldBuilder.buildEdmTypeField(
          'PollingInterval_Minutes',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mcrRoyaltyManualJourPost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_ROYALTY_MANUAL_JOUR_POST: fieldBuilder.buildEnumField(
          'MCRRoyaltyManualJourPost',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maxMstOverUnder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_MST_OVER_UNDER: fieldBuilder.buildEdmTypeField(
          'MaxMSTOverUnder',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link validateTaxInvoiceDateTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_TAX_INVOICE_DATE_TH: fieldBuilder.buildEnumField(
          'ValidateTaxInvoiceDate_TH',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxIdValidation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ID_VALIDATION: fieldBuilder.buildEnumField(
          'TaxIdValidation',
          TaxIdValidation,
          true
        ),
        /**
         * Static representation of the {@link prepaymentHandlingLayoutW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPAYMENT_HANDLING_LAYOUT_W: fieldBuilder.buildEnumField(
          'PrepaymentHandlingLayout_W',
          PrepaymentHandlingLayoutW,
          true
        ),
        /**
         * Static representation of the {@link intracomVat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRACOM_VAT: fieldBuilder.buildEnumField('IntracomVAT', NoYes, true),
        /**
         * Static representation of the {@link mcrBrokerProcurementCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_BROKER_PROCUREMENT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'MCRBrokerProcurementCategory',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link vendInvoiceWebServiceDefaultGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_INVOICE_WEB_SERVICE_DEFAULT_GROUP: fieldBuilder.buildEdmTypeField(
          'VendInvoiceWebServiceDefaultGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postInvoiceMatchDiscrepancies} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_INVOICE_MATCH_DISCREPANCIES: fieldBuilder.buildEnumField(
          'PostInvoiceMatchDiscrepancies',
          InvoiceMatchPostingOption,
          true
        ),
        /**
         * Static representation of the {@link reversePrepaymentW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_PREPAYMENT_W: fieldBuilder.buildEnumField(
          'ReversePrepayment_W',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link plafondTaxGroupIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAFOND_TAX_GROUP_IT: fieldBuilder.buildEdmTypeField(
          'PlafondTaxGroup_IT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link settlementWriteOffJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_WRITE_OFF_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'SettlementWriteOffJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link usePriceMatchingForSubTotalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_PRICE_MATCHING_FOR_SUB_TOTAL_AMOUNT: fieldBuilder.buildEnumField(
          'UsePriceMatchingForSubTotalAmount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link displayPriceMatchIconForCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_PRICE_MATCH_ICON_FOR_CHARGES: fieldBuilder.buildEnumField(
          'DisplayPriceMatchIconForCharges',
          DisplayTotalPriceMatchOption,
          true
        ),
        /**
         * Static representation of the {@link prepaymentPostingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPAYMENT_POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PrepaymentPostingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditMaxCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_MAX_CHECK: fieldBuilder.buildEnumField(
          'CreditMaxCheck',
          TypeOfCreditmaxCheck,
          true
        ),
        /**
         * Static representation of the {@link displayTotalPriceMatchIcon} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_TOTAL_PRICE_MATCH_ICON: fieldBuilder.buildEnumField(
          'DisplayTotalPriceMatchIcon',
          DisplayTotalPriceMatchOption,
          true
        ),
        /**
         * Static representation of the {@link prohibitVaTinVendJournalCz} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROHIBIT_VA_TIN_VEND_JOURNAL_CZ: fieldBuilder.buildEnumField(
          'ProhibitVATinVendJournal_CZ',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link itemDimAdjustLineControlRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_DIM_ADJUST_LINE_CONTROL_RU: fieldBuilder.buildEnumField(
          'ItemDimAdjustLineControl_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cashDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC: fieldBuilder.buildEnumField(
          'CashDisc',
          UnspecificSpecific,
          true
        ),
        /**
         * Static representation of the {@link displayMiscChargeToleranceIcon} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_MISC_CHARGE_TOLERANCE_ICON: fieldBuilder.buildEnumField(
          'DisplayMiscChargeToleranceIcon',
          DisplayInvoiceMiscChargeMatchOption,
          true
        ),
        /**
         * Static representation of the {@link enableSettlementAllRemittanceAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_SETTLEMENT_ALL_REMITTANCE_ADDRESS: fieldBuilder.buildEnumField(
          'EnableSettlementAllRemittanceAddress',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link automationMatchingPriorToWorkflow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATION_MATCHING_PRIOR_TO_WORKFLOW: fieldBuilder.buildEnumField(
          'AutomationMatchingPriorToWorkflow',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link purchBookFormatMappingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_BOOK_FORMAT_MAPPING_ID: fieldBuilder.buildEdmTypeField(
          'PurchBookFormatMappingID',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link postingProfileInvoiceRemit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_INVOICE_REMIT: fieldBuilder.buildEdmTypeField(
          'PostingProfileInvoiceRemit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendInvoiceAutomationMatchingValidationLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_INVOICE_AUTOMATION_MATCHING_VALIDATION_LIMIT:
          fieldBuilder.buildEdmTypeField(
            'VendInvoiceAutomationMatchingValidationLimit',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link taxGroupW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP_W: fieldBuilder.buildEdmTypeField(
          'TaxGroup_W',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxUnderTotalsIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_UNDER_TOTALS_IN: fieldBuilder.buildEnumField(
          'TaxUnderTotals_IN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link projectMatchingRequiredPsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_MATCHING_REQUIRED_PSN: fieldBuilder.buildEnumField(
          'ProjectMatchingRequired_PSN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link displayPriceMatchIconForSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_PRICE_MATCH_ICON_FOR_SALES_TAX: fieldBuilder.buildEnumField(
          'DisplayPriceMatchIconForSalesTax',
          DisplayTotalPriceMatchOption,
          true
        ),
        /**
         * Static representation of the {@link mcrProcurementCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_PROCUREMENT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'MCRProcurementCategory',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link usePriceMatchingForInvoiceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_PRICE_MATCHING_FOR_INVOICE_AMOUNT: fieldBuilder.buildEnumField(
          'UsePriceMatchingForInvoiceAmount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link miscChargeTolerancePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MISC_CHARGE_TOLERANCE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'MiscChargeTolerancePercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rTax25UnrealisedRevenueLedgerDimensionValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        R_TAX_25_UNREALISED_REVENUE_LEDGER_DIMENSION_VALUES_JSON:
          fieldBuilder.buildEdmTypeField(
            'RTax25UnrealisedRevenueLedgerDimensionValuesJson',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link postChargeAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_CHARGE_ACCOUNT: fieldBuilder.buildEnumField(
          'PostChargeAccount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link automationHoursBeforeSubmissionBecomesStale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATION_HOURS_BEFORE_SUBMISSION_BECOMES_STALE:
          fieldBuilder.buildEdmTypeField(
            'AutomationHoursBeforeSubmissionBecomesStale',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link crossYearPostingDateAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CROSS_YEAR_POSTING_DATE_ADJUSTMENT: fieldBuilder.buildEnumField(
          'CrossYearPostingDateAdjustment',
          CrossYearPostingDateAdjustment,
          true
        ),
        /**
         * Static representation of the {@link displayPriceMatchIcon} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_PRICE_MATCH_ICON: fieldBuilder.buildEnumField(
          'DisplayPriceMatchIcon',
          DisplayPriceMatchOption,
          true
        ),
        /**
         * Static representation of the {@link mcrStartingDayOfWeekPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_STARTING_DAY_OF_WEEK_PERIOD: fieldBuilder.buildEnumField(
          'MCRStartingDayOfWeekPeriod',
          WeekDays,
          true
        ),
        /**
         * Static representation of the {@link vendBankAccountChangeProposalIsEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_BANK_ACCOUNT_CHANGE_PROPOSAL_IS_ENABLED:
          fieldBuilder.buildEnumField(
            'VendBankAccountChangeProposalIsEnabled',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link vendBankAccountWorkflowOnCreationIsEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_BANK_ACCOUNT_WORKFLOW_ON_CREATION_IS_ENABLED:
          fieldBuilder.buildEnumField(
            'VendBankAccountWorkflowOnCreationIsEnabled',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link accountReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_RECEIPT: fieldBuilder.buildEnumField(
          'AccountReceipt',
          ItemVend,
          true
        ),
        /**
         * Static representation of the {@link vatProcessGroupByRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_PROCESS_GROUP_BY_RU: fieldBuilder.buildEnumField(
          'VatProcessGroupBy_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workflowSubmitDisabledWhenUnallocatedChargesExisted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_SUBMIT_DISABLED_WHEN_UNALLOCATED_CHARGES_EXISTED:
          fieldBuilder.buildEnumField(
            'WorkflowSubmitDisabledWhenUnallocatedChargesExisted',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link settlementWriteOffEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_WRITE_OFF_ENABLED: fieldBuilder.buildEnumField(
          'SettlementWriteOffEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useDocumentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_DOCUMENT_DATE: fieldBuilder.buildEnumField(
          'UseDocumentDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link clearingLedgerDimensionValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLEARING_LEDGER_DIMENSION_VALUES_JSON: fieldBuilder.buildEdmTypeField(
          'ClearingLedgerDimensionValuesJson',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultVend} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_VEND: fieldBuilder.buildEdmTypeField(
          'DefaultVend',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowedTaxInvoicePostingPeriodTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWED_TAX_INVOICE_POSTING_PERIOD_TH: fieldBuilder.buildEdmTypeField(
          'AllowedTaxInvoicePostingPeriod_TH',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link creditError} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_ERROR: fieldBuilder.buildEnumField('CreditError', NoYes, true),
        /**
         * Static representation of the {@link cashDiscForCreditNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC_FOR_CREDIT_NOTE: fieldBuilder.buildEnumField(
          'CashDiscForCreditNote',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mandatoryVatNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY_VAT_NUM: fieldBuilder.buildEnumField(
          'MandatoryVATNum',
          TaxVatNumCountryRegionType,
          true
        ),
        /**
         * Static representation of the {@link autoSettle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_SETTLE: fieldBuilder.buildEnumField('AutoSettle', NoYes, true),
        /**
         * Static representation of the {@link defaultFilterForVendorTransactions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FILTER_FOR_VENDOR_TRANSACTIONS: fieldBuilder.buildEnumField(
          'DefaultFilterForVendorTransactions',
          CustVendShowTransaction,
          true
        ),
        /**
         * Static representation of the {@link vendInvoiceInternalDefaultGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_INVOICE_INTERNAL_DEFAULT_GROUP: fieldBuilder.buildEdmTypeField(
          'VendInvoiceInternalDefaultGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link blockAutomationWhenPrepaymentApplicationFailed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCK_AUTOMATION_WHEN_PREPAYMENT_APPLICATION_FAILED:
          fieldBuilder.buildEnumField(
            'BlockAutomationWhenPrepaymentApplicationFailed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link postPackingSlip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_PACKING_SLIP: fieldBuilder.buildEnumField(
          'PostPackingSlip',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mcrRoyaltyJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_ROYALTY_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'MCRRoyaltyJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendInvoiceDefaultGroupType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_INVOICE_DEFAULT_GROUP_TYPE: fieldBuilder.buildEnumField(
          'VendInvoiceDefaultGroupType',
          VendInvoiceDefaultGroupType,
          true
        ),
        /**
         * Static representation of the {@link documentDateForIntracomVatW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE_FOR_INTRACOM_VAT_W: fieldBuilder.buildEnumField(
          'DocumentDateForIntracomVAT_W',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceTotalAmountMatchesTotalAmountInThePool} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_TOTAL_AMOUNT_MATCHES_TOTAL_AMOUNT_IN_THE_POOL:
          fieldBuilder.buildEnumField(
            'InvoiceTotalAmountMatchesTotalAmountInThePool',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link purchAgreementAccountStructurePsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_AGREEMENT_ACCOUNT_STRUCTURE_PSN: fieldBuilder.buildEdmTypeField(
          'PurchAgreementAccountStructure_PSN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link postingProfileNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_NOTES: fieldBuilder.buildEdmTypeField(
          'PostingProfileNotes',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendInvoicePostingDateAutoAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_INVOICE_POSTING_DATE_AUTO_ADJUSTMENT: fieldBuilder.buildEnumField(
          'VendInvoicePostingDateAutoAdjustment',
          VendInvoicePostingDateAutoAdjustment,
          true
        ),
        /**
         * Static representation of the {@link accountDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_DISC: fieldBuilder.buildEnumField(
          'AccountDisc',
          ItemVend,
          true
        ),
        /**
         * Static representation of the {@link useExtendedPriceMatching} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_EXTENDED_PRICE_MATCHING: fieldBuilder.buildEnumField(
          'UseExtendedPriceMatching',
          ExtendedPriceMatching,
          true
        ),
        /**
         * Static representation of the {@link vendInvoiceRefNumValidationFi} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_INVOICE_REF_NUM_VALIDATION_FI: fieldBuilder.buildEnumField(
          'VendInvoiceRefNumValidation_FI',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dueToTransDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_TO_TRANS_DATE: fieldBuilder.buildEnumField(
          'DueToTransDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendTableChangeProposalIsEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_TABLE_CHANGE_PROPOSAL_IS_ENABLED: fieldBuilder.buildEnumField(
          'VendTableChangeProposalIsEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maxWaitTimeForInvoiceScheduledStatusHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_WAIT_TIME_FOR_INVOICE_SCHEDULED_STATUS_HOURS:
          fieldBuilder.buildEdmTypeField(
            'MaxWaitTimeForInvoiceScheduledStatus_Hours',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link vendPaymentGroupingEnable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_PAYMENT_GROUPING_ENABLE: fieldBuilder.buildEnumField(
          'VendPaymentGroupingEnable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link usePriceMatchingForSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_PRICE_MATCHING_FOR_SALES_TAX: fieldBuilder.buildEnumField(
          'UsePriceMatchingForSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link matchingPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCHING_POLICY: fieldBuilder.buildEnumField(
          'MatchingPolicy',
          PurchMatchingPolicyOption,
          true
        ),
        /**
         * Static representation of the {@link automationPrepaymentApplication} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATION_PREPAYMENT_APPLICATION: fieldBuilder.buildEnumField(
          'AutomationPrepaymentApplication',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link displayExtendedPriceToleranceIcon} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_EXTENDED_PRICE_TOLERANCE_ICON: fieldBuilder.buildEnumField(
          'DisplayExtendedPriceToleranceIcon',
          ExtendedPriceMatchIcon,
          true
        ),
        /**
         * Static representation of the {@link priceTolerancePercentageForTotalDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_TOLERANCE_PERCENTAGE_FOR_TOTAL_DISCOUNT:
          fieldBuilder.buildEdmTypeField(
            'PriceTolerancePercentageForTotalDiscount',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link dimSettlementCtrlTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIM_SETTLEMENT_CTRL_TYPE_RU: fieldBuilder.buildEnumField(
          'DimSettlementCtrlType_RU',
          DimSettlementCtrlTypeRu,
          true
        ),
        /**
         * Static representation of the {@link taxPeriodPaymentCodePl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PERIOD_PAYMENT_CODE_PL: fieldBuilder.buildEdmTypeField(
          'TaxPeriodPaymentCode_PL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useTotalPriceMatching} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_TOTAL_PRICE_MATCHING: fieldBuilder.buildEnumField(
          'UseTotalPriceMatching',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maxInvoicesPerBatch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_INVOICES_PER_BATCH: fieldBuilder.buildEdmTypeField(
          'MaxInvoicesPerBatch',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendParametersBiEntities)
      };
    }

    return this._schema;
  }
}
