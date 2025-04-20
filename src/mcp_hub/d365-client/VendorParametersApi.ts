/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorParameters } from './VendorParameters';
import { VendorParametersRequestBuilder } from './VendorParametersRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class VendorParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendorParameters<DeSerializersT>, DeSerializersT>
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
  ): VendorParametersApi<DeSerializersT> {
    return new VendorParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      VendorParameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = VendorParameters;

  requestBuilder(): VendorParametersRequestBuilder<DeSerializersT> {
    return new VendorParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendorParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VendorParameters<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<VendorParameters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof VendorParameters, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendorParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WARN_IF_PAYMENT_PROPOSAL_USES_MULTIPLE_METHODS_OF_PAYMENT: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_FISCAL_DATA_FROM_INVOICE_ACCOUNT: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      UseFiscalInvoiceAccount,
      true,
      true
    >;
    INVOICE_TOTALS_TOLERANCE_PERCENTAGE: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DRAFT: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TERMS_OF_PAYMENT: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROYALTY_ACCRUAL_JOURNAL_NAME: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_EXEMPT_NUMBER_REQUIREMENT: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      TaxVatNumCountryRegionType,
      true,
      true
    >;
    POST_TO_CHARGE_ACCOUNT_IN_LEDGER: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STARTING_DAY_OF_WEEK: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      WeekDays,
      true,
      true
    >;
    SPLIT_DELIVERY_PACKING_SLIP: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SEQUENCE_NUMBER: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_WITHHOLD_COMPANY: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTOMATION_MATCHING_PRIOR_TO_WORKFLOW: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_RELATION_TAX_MATRIX: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      ItemVend,
      true,
      true
    >;
    ALLOW_CANCEL_INVOICE_ENABLE: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_DOCUMENT_DATE: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCH_AGREEMENT_DIMENSION_NAME: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCRUAL_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_MATCHING_POLICY_OVERRIDE: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      PurchMatchingPolicyOverrideOption,
      true,
      true
    >;
    EXPENSE_JOURNAL_NAME: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_PRICE_TOTAL_TOLERANCE_PERCENT: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MANUAL_POSTING: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_INVOICE_MATCHING_VALIDATION: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    IS_PRINT_TRANSPORTATION_DETAILS: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_FLOW_TERMS_OF_PAYMENT: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_CODE_FOR_INVOICE_GROUPS: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      VendInvoiceDefaultGroupType,
      true,
      true
    >;
    SETTLEMENT_WRITE_OFF_REASON_CODE: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_RECEIPT_POSTING: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      ItemVend,
      true,
      true
    >;
    CHARGES_TOLERANCE_PERCENTAGE: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQUIRE_DOCUMENT_DATE_ON_VENDOR_INVOICE: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      VendInvoiceDocDate,
      true,
      true
    >;
    VALIDATIONS_ON_PROMISSORY_NOTES_JOURNALS: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCLUDE_CANCELLED_LINES_FROM_TOTALS_CALCULATION: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCHASE_PRICE_TOTAL_TOLERANCE: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SETTLE_PERIOD: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_FLOW_LIQUIDITY_ACCOUNT_FOR_PAYMENTS_DISPLAY_VALUE: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_NOTE_AS_CORRECTION: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHECK_THE_TAX_INVOICE_NUMBER_USED: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      ReuseVoucher,
      true,
      true
    >;
    CASH_FLOW_TIME_BETWEEN_INVOICE_DUE_DATE_AND_PAYMENT_DATE: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FACTURE_ISSUE_PERIOD: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_CASH_DISCOUNT_CALCULATED_FOR_CREDIT_NOTES: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTOMATION_PRODUCT_RECEIPT_MATCHING: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RESPONSE_TO_INVOICES_THAT_FAIL_VALIDATION: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      InvoicePolicyViolationStatus,
      true,
      true
    >;
    POLLING_INTERVAL_MINUTES: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DIMENSION_HIERARCHY_IS_SYSTEM_GENERATED: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BYPASS_VALIDATION_OF_ACCOUNTING_DISTRIBUTIONS: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_FLOW_TIME_BETWEEN_DELIVERY_DATE_AND_INVOICE_DATE: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_TREE_NAME: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SHOW_AMOUNT_DEBIT_CREDIT: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOCATION_KEY: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDATE_INVOICES_IN_THE_JOURNAL: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_CONSOLIDATED_INVOICE: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_VEND: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_JOINING_PREVENTION_ON_PROMISSORY_NOTE_JOURNALS: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_WAIT_TIME_FOR_INVOICE_SCHEDULED_STATUS_HOURS: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TIME_OF_SALES_TAX_POSTING: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      VendTaxRegisterApproval,
      true,
      true
    >;
    ROYALTY_POST_MANUALLY: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SPLIT_DELIVERY_INVOICE: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_SETTLEMENT_TYPE_FOR_CREDIT_NOTES: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      SettlementType,
      true,
      true
    >;
    PRIMARY_DISCOUNT_POSTING: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      ItemVend,
      true,
      true
    >;
    DISCOUNT_OFFSET_ACCOUNTS: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      DiscountOffsetMethod,
      true,
      true
    >;
    IS_MATCH_INVOICE_TOTALS: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICING_PERIOD: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EDIT_CASH_DISCOUNTS_WHEN_DUE_DATE_CHANGED: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTOMATION_WORKFLOW_SUBMISSION: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_DISCOUNT_ADMINISTRATION: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      UnspecificSpecific,
      true,
      true
    >;
    PROMISSORY_NOTES: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_INVOICE_IN_USE_RECOVER_ENABLE: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_INVOICES_PER_BATCH: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INVOICE_REMIT: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANDATORY_TAX_GROUP: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTOMATION_TOTALS_REQ_FOR_WORKFLOW_SUBMISSION: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SETTLEMENT_WRITE_OFF_JOURNAL_NAME: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDATE_TAX_GROUP_COMPLETENESS: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPORTING_CURRENCY_EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BROKER_CATEGORY_NAME: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_AUTOMATIC_SETTLEMENT: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTOMATION_PRODUCT_RECEIPT_MATCHING_MAX_ATTEMPTS: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_MATCH_CHARGES: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISPLAY_INVOICE_TOTALS_MATCH_ICON: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      DisplayTotalPriceMatchOption,
      true,
      true
    >;
    MANDATORY_VAT_NUM: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      TaxVatNumCountryRegionType,
      true,
      true
    >;
    SETTLEMENT_WRITE_OFF_ENABLED: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POST_INVOICE_MATCH_DISCREPANCIES: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      InvoiceMatchPostingOption,
      true,
      true
    >;
    CUSTOM_CODE_FOR_INVOICE_GROUPS: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CASH_DISCOUNT_CALCULATED_ON_AMOUNT_INCLUDING_SALES_TAX: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTOMATIC_HEADER_MATCHING: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    DISPLAY_MISC_CHARGE_TOLERANCE_ICON: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      DisplayInvoiceMiscChargeMatchOption,
      true,
      true
    >;
    CUSTOM_CODE_FOR_WEB_SERVICE_INVOICES: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_INVOICE_GROUPS_FOR_THIS_COMPANY: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIFFERENTIAL_JOURNAL_NAME: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPLY_PRICE_DISC_ON_PURCH_LINE_ENTITY: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_TAX_ON_PREPAYMENT_IN_PAYMENT_JOURNAL: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REMIT_PROMISSORY_NOTE: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_PRODUCT_RECEIPT_IN_LEDGER: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_WITHHOLD_CALCULATE_CROSS_COMPANY: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_CHECK_INVOICE_NUMBER_USED: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      ReuseVoucher,
      true,
      true
    >;
    MAXIMUM_PENNY_DIFFERENCE: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_OVERPAYMENT_OR_UNDERPAYMENT: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREDIT_MAX_CHECK: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      TypeOfCreditmaxCheck,
      true,
      true
    >;
    ROYALTY_EXPENSE_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CASH_DISCOUNT_CALCULATED_FOR_PARTIAL_PAYMENTS: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CATEGORY_NAME: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_CURRENCY_EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATCH_PRICE_TOTALS: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      ExtendedPriceMatching,
      true,
      true
    >;
    CASH_FLOW_PERCENTAGE_OF_AMOUNT_TO_ALLOCATE_TO_CASH_FLOW_FORECAST: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREPAYMENT_INVOICE_POSTING_PROFILE: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_MATCHING_POLICY: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      PurchMatchingPolicyOption,
      true,
      true
    >;
    KEEP_SALES_TAX_ADJUSTMENTS_FOR_PO_INVOICES: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_FILTER_FOR_VENDOR_TRANSACTIONS: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      CustVendShowTransaction,
      true,
      true
    >;
    EXCH_ADJ_RATE_SOURCE: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      CustVendExchAdjRateSource,
      true,
      true
    >;
    VEND_BANK_IBAN_SWIFT_REQUIRED: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_3_WAY_MATCHING: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCH_PREPAY_APPLICATION_POLICY: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      PurchPrepayApplicationPolicy,
      true,
      true
    >;
    IS_W_9_VALIDATION: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_PROFILE_FOR_PAYMENT_JOURNAL_WITH_PREPAYMENT: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_HIERARCHY_TYPE: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      DimensionHierarchyType,
      true,
      true
    >;
    DISPLAY_PRICE_MATCH_ICON: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      DisplayPriceMatchOption,
      true,
      true
    >;
    BROKER_CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVATE_INVOICE_PAYMENT_GROUPS: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISPLAY_PRICE_TOTAL_MATCH_ICON: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      ExtendedPriceMatchIcon,
      true,
      true
    >;
    CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_TREATMENT_ON_PROMISSORY_NOTE_JOURNALS: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHANGE_PROPOSAL_DATA_ENTITY_BEHAVIOR: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      VendTableChangeProposalDataEntityBehavior,
      true,
      true
    >;
    CHANGE_PROPOSAL_IS_ENABLED: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REVERSE_PREPAYMENT: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SETTLE_PREPAYMENT_VAT_TYPE: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      CustSettlePrepaymentVatTypeRu,
      true,
      true
    >;
    ADVANCE_HOLDERS_POSTING_PROFILE: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADVANCE_HOLDERS_AUTO_SETTLE: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADVANCE_HOLDERS_SETTLEMENT_BY_DIMENSION: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      DimSettlementCtrlTypeRu,
      true,
      true
    >;
    IMPORT_FORMAT_MAPPING_NAME_QR_BILL: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISABLE_PAYMENT_ID_VALIDATION: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSN_POSTING_DEFINITION_CODE: OrderableEdmTypeField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSN_ACTIVATE_PURCHASING_CARD: EnumField<
      VendorParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      VendorParameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VendorParameters<DeSerializers>>;
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
         * Static representation of the {@link warnIfPaymentProposalUsesMultipleMethodsOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARN_IF_PAYMENT_PROPOSAL_USES_MULTIPLE_METHODS_OF_PAYMENT:
          fieldBuilder.buildEnumField(
            'WarnIfPaymentProposalUsesMultipleMethodsOfPayment',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link useFiscalDataFromInvoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_FISCAL_DATA_FROM_INVOICE_ACCOUNT: fieldBuilder.buildEnumField(
          'UseFiscalDataFromInvoiceAccount',
          UseFiscalInvoiceAccount,
          true
        ),
        /**
         * Static representation of the {@link invoiceTotalsTolerancePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_TOTALS_TOLERANCE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'InvoiceTotalsTolerancePercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link draft} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRAFT: fieldBuilder.buildEnumField('Draft', NoYes, true),
        /**
         * Static representation of the {@link termsOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMS_OF_PAYMENT: fieldBuilder.buildEdmTypeField(
          'TermsOfPayment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link royaltyAccrualJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROYALTY_ACCRUAL_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'RoyaltyAccrualJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxExemptNumberRequirement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_NUMBER_REQUIREMENT: fieldBuilder.buildEnumField(
          'TaxExemptNumberRequirement',
          TaxVatNumCountryRegionType,
          true
        ),
        /**
         * Static representation of the {@link postToChargeAccountInLedger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_TO_CHARGE_ACCOUNT_IN_LEDGER: fieldBuilder.buildEnumField(
          'PostToChargeAccountInLedger',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link startingDayOfWeek} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STARTING_DAY_OF_WEEK: fieldBuilder.buildEnumField(
          'StartingDayOfWeek',
          WeekDays,
          true
        ),
        /**
         * Static representation of the {@link splitDeliveryPackingSlip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPLIT_DELIVERY_PACKING_SLIP: fieldBuilder.buildEnumField(
          'SplitDeliveryPackingSlip',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SequenceNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxWithholdCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_COMPANY: fieldBuilder.buildEdmTypeField(
          'TaxWithholdCompany',
          'Edm.String',
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
         * Static representation of the {@link primaryRelationTaxMatrix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_RELATION_TAX_MATRIX: fieldBuilder.buildEnumField(
          'PrimaryRelationTaxMatrix',
          ItemVend,
          true
        ),
        /**
         * Static representation of the {@link allowCancelInvoiceEnable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CANCEL_INVOICE_ENABLE: fieldBuilder.buildEnumField(
          'AllowCancelInvoiceEnable',
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
         * Static representation of the {@link purchAgreementDimensionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_AGREEMENT_DIMENSION_NAME: fieldBuilder.buildEdmTypeField(
          'PurchAgreementDimensionName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accrualAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'AccrualAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowMatchingPolicyOverride} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_MATCHING_POLICY_OVERRIDE: fieldBuilder.buildEnumField(
          'AllowMatchingPolicyOverride',
          PurchMatchingPolicyOverrideOption,
          true
        ),
        /**
         * Static representation of the {@link expenseJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'ExpenseJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchasePriceTotalTolerancePercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PRICE_TOTAL_TOLERANCE_PERCENT: fieldBuilder.buildEdmTypeField(
          'PurchasePriceTotalTolerancePercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link manualPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL_POSTING: fieldBuilder.buildEnumField(
          'ManualPosting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enableInvoiceMatchingValidation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_INVOICE_MATCHING_VALIDATION: fieldBuilder.buildEnumField(
          'EnableInvoiceMatchingValidation',
          UnknownNoYes,
          true
        ),
        /**
         * Static representation of the {@link isPrintTransportationDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRINT_TRANSPORTATION_DETAILS: fieldBuilder.buildEnumField(
          'IsPrintTransportationDetails',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cashFlowTermsOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_FLOW_TERMS_OF_PAYMENT: fieldBuilder.buildEdmTypeField(
          'CashFlowTermsOfPayment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultCodeForInvoiceGroups} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CODE_FOR_INVOICE_GROUPS: fieldBuilder.buildEnumField(
          'DefaultCodeForInvoiceGroups',
          VendInvoiceDefaultGroupType,
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
         * Static representation of the {@link primaryReceiptPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_RECEIPT_POSTING: fieldBuilder.buildEnumField(
          'PrimaryReceiptPosting',
          ItemVend,
          true
        ),
        /**
         * Static representation of the {@link chargesTolerancePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGES_TOLERANCE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'ChargesTolerancePercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link requireDocumentDateOnVendorInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRE_DOCUMENT_DATE_ON_VENDOR_INVOICE: fieldBuilder.buildEnumField(
          'RequireDocumentDateOnVendorInvoice',
          VendInvoiceDocDate,
          true
        ),
        /**
         * Static representation of the {@link validationsOnPromissoryNotesJournals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATIONS_ON_PROMISSORY_NOTES_JOURNALS: fieldBuilder.buildEnumField(
          'ValidationsOnPromissoryNotesJournals',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link excludeCancelledLinesFromTotalsCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE_CANCELLED_LINES_FROM_TOTALS_CALCULATION:
          fieldBuilder.buildEnumField(
            'ExcludeCancelledLinesFromTotalsCalculation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link purchasePriceTotalTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PRICE_TOTAL_TOLERANCE: fieldBuilder.buildEdmTypeField(
          'PurchasePriceTotalTolerance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link settlePeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_PERIOD: fieldBuilder.buildEdmTypeField(
          'SettlePeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashFlowLiquidityAccountForPaymentsDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_FLOW_LIQUIDITY_ACCOUNT_FOR_PAYMENTS_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'CashFlowLiquidityAccountForPaymentsDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link creditNoteAsCorrection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_NOTE_AS_CORRECTION: fieldBuilder.buildEnumField(
          'CreditNoteAsCorrection',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link checkTheTaxInvoiceNumberUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_THE_TAX_INVOICE_NUMBER_USED: fieldBuilder.buildEnumField(
          'CheckTheTaxInvoiceNumberUsed',
          ReuseVoucher,
          true
        ),
        /**
         * Static representation of the {@link cashFlowTimeBetweenInvoiceDueDateAndPaymentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_FLOW_TIME_BETWEEN_INVOICE_DUE_DATE_AND_PAYMENT_DATE:
          fieldBuilder.buildEdmTypeField(
            'CashFlowTimeBetweenInvoiceDueDateAndPaymentDate',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link factureIssuePeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACTURE_ISSUE_PERIOD: fieldBuilder.buildEdmTypeField(
          'FactureIssuePeriod',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isCashDiscountCalculatedForCreditNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CASH_DISCOUNT_CALCULATED_FOR_CREDIT_NOTES:
          fieldBuilder.buildEnumField(
            'IsCashDiscountCalculatedForCreditNotes',
            NoYes,
            true
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
         * Static representation of the {@link responseToInvoicesThatFailValidation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSE_TO_INVOICES_THAT_FAIL_VALIDATION: fieldBuilder.buildEnumField(
          'ResponseToInvoicesThatFailValidation',
          InvoicePolicyViolationStatus,
          true
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
         * Static representation of the {@link dimensionHierarchyIsSystemGenerated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_HIERARCHY_IS_SYSTEM_GENERATED: fieldBuilder.buildEnumField(
          'DimensionHierarchyIsSystemGenerated',
          NoYes,
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
         * Static representation of the {@link cashFlowTimeBetweenDeliveryDateAndInvoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_FLOW_TIME_BETWEEN_DELIVERY_DATE_AND_INVOICE_DATE:
          fieldBuilder.buildEdmTypeField(
            'CashFlowTimeBetweenDeliveryDateAndInvoiceDate',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link dimensionTreeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_TREE_NAME: fieldBuilder.buildEdmTypeField(
          'DimensionTreeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isShowAmountDebitCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SHOW_AMOUNT_DEBIT_CREDIT: fieldBuilder.buildEnumField(
          'IsShowAmountDebitCredit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allocationKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_KEY: fieldBuilder.buildEdmTypeField(
          'AllocationKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validateInvoicesInTheJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_INVOICES_IN_THE_JOURNAL: fieldBuilder.buildEnumField(
          'ValidateInvoicesInTheJournal',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useConsolidatedInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_CONSOLIDATED_INVOICE: fieldBuilder.buildEnumField(
          'UseConsolidatedInvoice',
          NoYes,
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
         * Static representation of the {@link invoiceJoiningPreventionOnPromissoryNoteJournals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_JOINING_PREVENTION_ON_PROMISSORY_NOTE_JOURNALS:
          fieldBuilder.buildEnumField(
            'InvoiceJoiningPreventionOnPromissoryNoteJournals',
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
         * Static representation of the {@link timeOfSalesTaxPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OF_SALES_TAX_POSTING: fieldBuilder.buildEnumField(
          'TimeOfSalesTaxPosting',
          VendTaxRegisterApproval,
          true
        ),
        /**
         * Static representation of the {@link royaltyPostManually} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROYALTY_POST_MANUALLY: fieldBuilder.buildEnumField(
          'RoyaltyPostManually',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link splitDeliveryInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPLIT_DELIVERY_INVOICE: fieldBuilder.buildEnumField(
          'SplitDeliveryInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultSettlementTypeForCreditNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_SETTLEMENT_TYPE_FOR_CREDIT_NOTES: fieldBuilder.buildEnumField(
          'DefaultSettlementTypeForCreditNotes',
          SettlementType,
          true
        ),
        /**
         * Static representation of the {@link primaryDiscountPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_DISCOUNT_POSTING: fieldBuilder.buildEnumField(
          'PrimaryDiscountPosting',
          ItemVend,
          true
        ),
        /**
         * Static representation of the {@link discountOffsetAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_OFFSET_ACCOUNTS: fieldBuilder.buildEnumField(
          'DiscountOffsetAccounts',
          DiscountOffsetMethod,
          true
        ),
        /**
         * Static representation of the {@link isMatchInvoiceTotals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MATCH_INVOICE_TOTALS: fieldBuilder.buildEnumField(
          'IsMatchInvoiceTotals',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoicingPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICING_PERIOD: fieldBuilder.buildEdmTypeField(
          'InvoicingPeriod',
          'Edm.String',
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
         * Static representation of the {@link automationWorkflowSubmission} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATION_WORKFLOW_SUBMISSION: fieldBuilder.buildEnumField(
          'AutomationWorkflowSubmission',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cashDiscountAdministration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_ADMINISTRATION: fieldBuilder.buildEnumField(
          'CashDiscountAdministration',
          UnspecificSpecific,
          true
        ),
        /**
         * Static representation of the {@link promissoryNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMISSORY_NOTES: fieldBuilder.buildEdmTypeField(
          'PromissoryNotes',
          'Edm.String',
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
         * Static representation of the {@link maxInvoicesPerBatch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_INVOICES_PER_BATCH: fieldBuilder.buildEdmTypeField(
          'MaxInvoicesPerBatch',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link invoiceRemit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_REMIT: fieldBuilder.buildEdmTypeField(
          'InvoiceRemit',
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
         * Static representation of the {@link settlementWriteOffJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_WRITE_OFF_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'SettlementWriteOffJournalName',
          'Edm.String',
          true
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
         * Static representation of the {@link reportingCurrencyExchangeRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_EXCHANGE_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyExchangeRateType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link brokerCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BROKER_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'BrokerCategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isAutomaticSettlement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_AUTOMATIC_SETTLEMENT: fieldBuilder.buildEnumField(
          'IsAutomaticSettlement',
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
         * Static representation of the {@link isMatchCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MATCH_CHARGES: fieldBuilder.buildEnumField(
          'IsMatchCharges',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link displayInvoiceTotalsMatchIcon} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_INVOICE_TOTALS_MATCH_ICON: fieldBuilder.buildEnumField(
          'DisplayInvoiceTotalsMatchIcon',
          DisplayTotalPriceMatchOption,
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
         * Static representation of the {@link settlementWriteOffEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_WRITE_OFF_ENABLED: fieldBuilder.buildEnumField(
          'SettlementWriteOffEnabled',
          NoYes,
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
         * Static representation of the {@link customCodeForInvoiceGroups} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_CODE_FOR_INVOICE_GROUPS: fieldBuilder.buildEdmTypeField(
          'CustomCodeForInvoiceGroups',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isCashDiscountCalculatedOnAmountIncludingSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CASH_DISCOUNT_CALCULATED_ON_AMOUNT_INCLUDING_SALES_TAX:
          fieldBuilder.buildEnumField(
            'IsCashDiscountCalculatedOnAmountIncludingSalesTax',
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
         * Static representation of the {@link displayMiscChargeToleranceIcon} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_MISC_CHARGE_TOLERANCE_ICON: fieldBuilder.buildEnumField(
          'DisplayMiscChargeToleranceIcon',
          DisplayInvoiceMiscChargeMatchOption,
          true
        ),
        /**
         * Static representation of the {@link customCodeForWebServiceInvoices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_CODE_FOR_WEB_SERVICE_INVOICES: fieldBuilder.buildEdmTypeField(
          'CustomCodeForWebServiceInvoices',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useInvoiceGroupsForThisCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_INVOICE_GROUPS_FOR_THIS_COMPANY: fieldBuilder.buildEnumField(
          'UseInvoiceGroupsForThisCompany',
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
         * Static representation of the {@link differentialJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIFFERENTIAL_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'DifferentialJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link applyPriceDiscOnPurchLineEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_PRICE_DISC_ON_PURCH_LINE_ENTITY: fieldBuilder.buildEnumField(
          'ApplyPriceDiscOnPurchLineEntity',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesTaxOnPrepaymentInPaymentJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_ON_PREPAYMENT_IN_PAYMENT_JOURNAL: fieldBuilder.buildEnumField(
          'SalesTaxOnPrepaymentInPaymentJournal',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link remitPromissoryNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMIT_PROMISSORY_NOTE: fieldBuilder.buildEdmTypeField(
          'RemitPromissoryNote',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postProductReceiptInLedger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_PRODUCT_RECEIPT_IN_LEDGER: fieldBuilder.buildEnumField(
          'PostProductReceiptInLedger',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxWithholdCalculateCrossCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_CALCULATE_CROSS_COMPANY: fieldBuilder.buildEnumField(
          'TaxWithholdCalculateCrossCompany',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isCheckInvoiceNumberUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CHECK_INVOICE_NUMBER_USED: fieldBuilder.buildEnumField(
          'IsCheckInvoiceNumberUsed',
          ReuseVoucher,
          true
        ),
        /**
         * Static representation of the {@link maximumPennyDifference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_PENNY_DIFFERENCE: fieldBuilder.buildEdmTypeField(
          'MaximumPennyDifference',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maximumOverpaymentOrUnderpayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_OVERPAYMENT_OR_UNDERPAYMENT: fieldBuilder.buildEdmTypeField(
          'MaximumOverpaymentOrUnderpayment',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link royaltyExpenseAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROYALTY_EXPENSE_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'RoyaltyExpenseAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isCashDiscountCalculatedForPartialPayments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CASH_DISCOUNT_CALCULATED_FOR_PARTIAL_PAYMENTS:
          fieldBuilder.buildEnumField(
            'IsCashDiscountCalculatedForPartialPayments',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link categoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingCurrencyExchangeRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_CURRENCY_EXCHANGE_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'AccountingCurrencyExchangeRateType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link matchPriceTotals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCH_PRICE_TOTALS: fieldBuilder.buildEnumField(
          'MatchPriceTotals',
          ExtendedPriceMatching,
          true
        ),
        /**
         * Static representation of the {@link cashFlowPercentageOfAmountToAllocateToCashFlowForecast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_FLOW_PERCENTAGE_OF_AMOUNT_TO_ALLOCATE_TO_CASH_FLOW_FORECAST:
          fieldBuilder.buildEdmTypeField(
            'CashFlowPercentageOfAmountToAllocateToCashFlowForecast',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link prepaymentInvoicePostingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPAYMENT_INVOICE_POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PrepaymentInvoicePostingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineMatchingPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_MATCHING_POLICY: fieldBuilder.buildEnumField(
          'LineMatchingPolicy',
          PurchMatchingPolicyOption,
          true
        ),
        /**
         * Static representation of the {@link keepSalesTaxAdjustmentsForPoInvoices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEEP_SALES_TAX_ADJUSTMENTS_FOR_PO_INVOICES: fieldBuilder.buildEnumField(
          'KeepSalesTaxAdjustmentsForPOInvoices',
          NoYes,
          true
        ),
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
         * Static representation of the {@link exchAdjRateSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_ADJ_RATE_SOURCE: fieldBuilder.buildEnumField(
          'ExchAdjRateSource',
          CustVendExchAdjRateSource,
          true
        ),
        /**
         * Static representation of the {@link vendBankIbanSwiftRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_BANK_IBAN_SWIFT_REQUIRED: fieldBuilder.buildEnumField(
          'VendBankIbanSwiftRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link include3WayMatching} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_3_WAY_MATCHING: fieldBuilder.buildEnumField(
          'Include3wayMatching',
          NoYes,
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
         * Static representation of the {@link isW9Validation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_W_9_VALIDATION: fieldBuilder.buildEnumField(
          'IsW9Validation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postingProfileForPaymentJournalWithPrepayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_FOR_PAYMENT_JOURNAL_WITH_PREPAYMENT:
          fieldBuilder.buildEdmTypeField(
            'PostingProfileForPaymentJournalWithPrepayment',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link dimensionHierarchyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_HIERARCHY_TYPE: fieldBuilder.buildEnumField(
          'DimensionHierarchyType',
          DimensionHierarchyType,
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
         * Static representation of the {@link brokerCategoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BROKER_CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'BrokerCategoryHierarchyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activateInvoicePaymentGroups} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVATE_INVOICE_PAYMENT_GROUPS: fieldBuilder.buildEnumField(
          'ActivateInvoicePaymentGroups',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link displayPriceTotalMatchIcon} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_PRICE_TOTAL_MATCH_ICON: fieldBuilder.buildEnumField(
          'DisplayPriceTotalMatchIcon',
          ExtendedPriceMatchIcon,
          true
        ),
        /**
         * Static representation of the {@link categoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryHierarchyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateTreatmentOnPromissoryNoteJournals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_TREATMENT_ON_PROMISSORY_NOTE_JOURNALS: fieldBuilder.buildEnumField(
          'DateTreatmentOnPromissoryNoteJournals',
          NoYes,
          true
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
         * Static representation of the {@link changeProposalIsEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_PROPOSAL_IS_ENABLED: fieldBuilder.buildEnumField(
          'ChangeProposalIsEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reversePrepayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_PREPAYMENT: fieldBuilder.buildEnumField(
          'ReversePrepayment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link settlePrepaymentVatType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_PREPAYMENT_VAT_TYPE: fieldBuilder.buildEnumField(
          'SettlePrepaymentVATType',
          CustSettlePrepaymentVatTypeRu,
          true
        ),
        /**
         * Static representation of the {@link advanceHoldersPostingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_HOLDERS_POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'AdvanceHoldersPostingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxItemGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link advanceHoldersAutoSettle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_HOLDERS_AUTO_SETTLE: fieldBuilder.buildEnumField(
          'AdvanceHoldersAutoSettle',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link advanceHoldersSettlementByDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_HOLDERS_SETTLEMENT_BY_DIMENSION: fieldBuilder.buildEnumField(
          'AdvanceHoldersSettlementByDimension',
          DimSettlementCtrlTypeRu,
          true
        ),
        /**
         * Static representation of the {@link importFormatMappingNameQrBill} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORT_FORMAT_MAPPING_NAME_QR_BILL: fieldBuilder.buildEdmTypeField(
          'ImportFormatMappingNameQRBill',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link disablePaymentIdValidation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISABLE_PAYMENT_ID_VALIDATION: fieldBuilder.buildEnumField(
          'DisablePaymentIDValidation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link psnPostingDefinitionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSN_POSTING_DEFINITION_CODE: fieldBuilder.buildEdmTypeField(
          'PSNPostingDefinitionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link psnActivatePurchasingCard} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSN_ACTIVATE_PURCHASING_CARD: fieldBuilder.buildEnumField(
          'PSNActivatePurchasingCard',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendorParameters)
      };
    }

    return this._schema;
  }
}
