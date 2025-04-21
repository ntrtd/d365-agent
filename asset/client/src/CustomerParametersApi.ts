/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerParameters } from './CustomerParameters';
import { CustomerParametersRequestBuilder } from './CustomerParametersRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
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
export class CustomerParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustomerParameters<DeSerializersT>, DeSerializersT>
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
  ): CustomerParametersApi<DeSerializersT> {
    return new CustomerParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link creditCardPostingLedgerDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_CARD_POSTING_LEDGER_DIMENSION: OneToOneLink<
      CustomerParameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CREDIT_CARD_POSTING_LEDGER_DIMENSION: new OneToOneLink(
        'CreditCardPostingLedgerDimension',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = CustomerParameters;

  requestBuilder(): CustomerParametersRequestBuilder<DeSerializersT> {
    return new CustomerParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomerParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustomerParameters<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerParameters<DeSerializersT>,
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
    typeof CustomerParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CREDIT_CARD_POSTING_BANK_TRANSACTION_TYPE: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_CARD_AUTH_TRANS_ARCHIVE_THRESHOLD: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COLLECTION_LETTER_DISPUTED_TRANSACTIONS_EXCLUDED: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_CARD_ESTIMATED_SHIPPING_CHARGE_MAXIMUM: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SETTLEMENT_INVOICE_LINE_PRIORITIZATION_METHOD: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      CustInvoiceLinePriority,
      true,
      true
    >;
    IS_INVOICE_ZERO_AMOUNT: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_FISCAL_DATA_FROM_INVOICE_ACCOUNT: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      UseFiscalInvoiceAccount,
      true,
      true
    >;
    CASH_DISCOUNT_REASON_CODE: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_LIMIT_CHECK_TYPE: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      TypeOfCreditmaxCheck,
      true,
      true
    >;
    INVOICE_PRINT_PACKAGING_WEIGHT: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_MARKUP_RESEARCH_PRIOR_POSTING_ENABLED: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COLLECTIONS_STATEMENT_TO_CONTACT_EMAIL_TEMPLATE_ID: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLLECTION_LETTER_CODE_UPDATE: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      CustPostedPrinted,
      true,
      true
    >;
    SETTLEMENT_WRITE_OFF_REASON_CODE: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLEMENT_MAXIMUM_OVER_UNDER_PAYMENT: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENABLE_DATE_OF_VAT_REGISTER_CHANGING: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COLLECTIONS_WRITE_OFF_REASON_CODE: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTEREST_ADJUSTMENT_DATE_TO_USE: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      CustInterestAdjustmentDateToUse,
      true,
      true
    >;
    DEFAULT_LANGUAGE: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      CustLanguageAccountType,
      true,
      true
    >;
    SETTLEMENT_PRORATION_TYPE_FOR_INVOICES: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      CustSettlementProrationType,
      true,
      true
    >;
    MARKUP_VALUE_BASE: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      MarkupValueBase,
      true,
      true
    >;
    CREDIT_CARD_POSTING_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_CARD_ESTIMATED_SHIPPING_CHARGE_TYPE: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      CreditCardEstShippingChargeType,
      true,
      true
    >;
    REASON_REQUIREMENT_FOR_CREDIT_NOTES: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTEREST_MINIMUM_DAYS_TO_ALLOW_WAIVING: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INITIALIZE_ATTRIBUTE_BASED_PRICING_ID: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COLLECTION_LETTER_IGNORE_CREDIT_TRANSACTION_CODES: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHANGE_PROPOSAL_IS_ENABLED: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GENERAL_LEDGER_POSTING_ACCOUNT_FOR_REVENUE: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      ItemCust,
      true,
      true
    >;
    CHANGE_PROPOSAL_DATA_ENTITY_BEHAVIOR: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      CustTableChangeProposalDataEntityBehavior,
      true,
      true
    >;
    EDIT_CASH_DISCOUNTS_WHEN_DUE_DATE_CHANGED: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRICE_DETAILS_ENABLED_FOR_SALES_DOCUMENTS: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_DISCOUNT_ADMINISTRATION: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      UnspecificSpecific,
      true,
      true
    >;
    COLLECTIONS_IS_REFER_TO_COLLECTION_AGENCY_ENABLED: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_IS_CONSOLIDATED_INVOICE_USED: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GENERAL_LEDGER_IS_AMOUNT_DEBIT_CREDIT_SHOWN: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_CARD_ESTIMATED_SHIPPING_CHARGE_VALUE: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNTING_CURRENCY_EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_MINIMUM_REFUND: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREDIT_CARD_NOTES: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BYPASS_VALIDATION_OF_ACCOUNTING_DISTRIBUTIONS: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SETTLEMENT_SPAN_BILLING_CODE_ACROSS_INVOICES: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_CARD_AUTHORIZATION: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENTRY_CERTIFICATE_IS_MANAGEMENT_ENABLED: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FREE_TEXT_INVOICE_CAN_EDIT_LEDGER_ACCOUNT_FOR_PROJECT: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_IS_TAX_GROUP_MANDATORY: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_LIMIT_IS_CHECKED_ON_FREE_TEXT_INVOICE: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_LIMIT_MESSAGE_TYPE_SHOWN_WHEN_EXCEEDING: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      CreditLineErrorType,
      true,
      true
    >;
    FREE_TEXT_INVOICE_IS_ITEM_TAX_GROUP_MANDATORY: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_LIMIT_IS_CHECKED_ON_SALES_ORDER: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MARKUP_PERIOD_CHARGE_RULE_SITE_LOCATION_MATCH: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      MarkupPeriodChargeRuleSiteLocationMatch,
      true,
      true
    >;
    INTEREST_TRANSACTIONS_TO_CALCULATE_FOR: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      CustInterestCalc,
      true,
      true
    >;
    INTEREST_MAXIMUM_DAYS_ALLOWED_TO_WAIVE: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SETTLEMENT_MAXIMUM_PENNY_DIFFERENCE: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_MARKUP_CALCULATION_PER_INVOICE_FOR_SUMMARY_UPDATE_ENABLED: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REASON_REQUIREMENT_FOR_PAYMENT_CANCELLATION: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COLLECTIONS_TRANSACTIONS_TO_CONTACT_EMAIL_TEMPLATE_ID: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_CARD_AUTHORIZATION_LAST_NUMBER_OF_DAYS: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_VALIDATION_ON_BILL_OF_EXCHANGE_JOURNALS_ENABLED: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SKIP_REFERENCED_DATA_DURING_CHANGE_TRACKING: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_PROPOSAL_WARN_WHEN_MULTIPLE_METHODS_OF_PAYMENT: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FREE_TEXT_INVOICE_STOP_INVOICE_POSTING_ON_FIRST_ERROR: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COLLECTIONS_TEAM_PARTY_NUMBER: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DATE_TREATMENT_OF_BILL_OF_EXCHANGE_JOURNALS_ENABLED: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MARKUP_PERIOD_CHARGE_RULE_QTY_THRESHOLD_MATCH: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      MarkupPeriodChargeRuleQtyThresholdMatch,
      true,
      true
    >;
    DIRECT_DEBIT_CORE_SCHEME_DEFAULT_DAYS_FOR_RECURRING_BANK_SUBMISSION: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_TOTALS_CALCULATION_AUTOMATIC: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_IS_CREDIT_NOTE_POSTED_AS_CORRECTION: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TOTAL_DISCOUNT_IS_CALCULATED_ON_POSTING: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SETTLEMENT_AUTO_SETTLE_ENABLED: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DIRECT_DEBIT_COR_1_SCHEME_DEFAULT_DAYS_FOR_FIRST_BANK_SUBMISSION: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SETTLEMENT_IS_PRIORITY_USED_ON_AUTO_SETTLEMENT: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_SEQUENTIAL_LINE_NUMBERS_WHEN_POSTING_CUSTOMER_INVOICE_LINES: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_FLOW_LIQUIDITY_ACCOUNT_FOR_PAYMENTS_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREPAYMENT_CALCULATE_TAX: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_DISCOUNT_IS_CALCULATED_FOR_PARTIAL_PAYMENTS: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_CARD_POSTING_ACCOUNT_TYPE: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    SETTLEMENT_WRITE_OFF_JOURNAL_NAME: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_OF_EXCHANGE_POSTING_PROFILE_FOR_ENDORSED: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENERAL_LEDGER_POSTING_ACCOUNT_FOR_CONSUMPTION: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      ItemCust,
      true,
      true
    >;
    CASH_FLOW_PERCENTAGE_OF_AMOUNT_TO_ALLOCATE_TO_CASH_FLOW_FORECAST: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_FILTER_FOR_CUSTOMER_TRANSACTIONS: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      CustVendShowTransaction,
      true,
      true
    >;
    EXCH_ADJ_RATE_SOURCE: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      CustVendExchAdjRateSource,
      true,
      true
    >;
    PREPAYMENT_POSTING_PROFILE: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAM_DEDUCTION_REQUIRE_FULL_SETTLE: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GENERAL_LEDGER_POSTING_ACCOUNT_FOR_DISCOUNT: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      ItemCust,
      true,
      true
    >;
    GIRO_ACCOUNT_POSITIONS: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MARKUP_PERIOD_CHARGE_BATCH_HELPERS: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FREE_TEXT_INVOICE_IS_PROJECT_ENABLED: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENTRY_CERTIFICATE_IS_ISSUING_ENABLED: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_FLOW_TIME_BETWEEN_DELIVERY_DATE_AND_INVOICE_DATE: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIRECT_DEBIT_MANDATE_DEFAULT_EXPIRATION_IN_MONTHS: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SETTLEMENT_IS_PRIORITY_USED: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GENERAL_LEDGER_ENABLE_CANCEL_POSTING_PROFILES: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DIRECT_DEBIT_B_2_B_SCHEME_DEFAULT_DAYS_FOR_RECURRING_BANK_SUBMISSION: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COLLECTIONS_WRITE_OFF_IS_SALES_TAX_SEPARATED: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_DEFAULT_ONE_TIME_ACCOUNT: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_FLOW_TIME_BETWEEN_INVOICE_DUE_DATE_AND_PAYMENT_DATE: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_OF_EXCHANGE_POSTING_PROFILE_FOR_REMIT_COLLECTION: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIRECT_DEBIT_DEFAULT_DAYS_FOR_RECURRING_PRENOTIFICATION: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CREDIT_CARD_COST_CENTER_DIMENSION_ATTRIBUTE: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLLECTIONS_AGENCY_TAX_RATE: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REASON_REQUIREMENT_FOR_RETURN_ORDERS: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BILL_OF_EXCHANGE_POSTING_PROFILE: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_REQUIREMENT_FOR_TRANSACTION_REVERSALS: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPLACE_ALTERNATIVE_ITEM_LINE_DEFAULTS: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_RELATION: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      ItemCust,
      true,
      true
    >;
    CASH_DISCOUNT_IS_CREDIT_NOTE_POSTED: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_RETURN_DELIVER_REMAINDER_POLICY: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      SalesReturnDeliverRemainderPolicy,
      true,
      true
    >;
    SALES_ENTITY_CALCULATE_LINE_AMOUNT: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COLLECTIONS_TRANSACTIONS_TO_SALESPERSON_EMAIL_TEMPLATE_ID: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLLECTIONS_AGING_PERIOD_DEFINITION: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARKUP_PERIOD_CHARGE_RULE_IS_CHARGE_CODE_MATCH_REQUIRED: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SETTLEMENT_MARK_OPEN_INVOICE_LINE: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SETTLEMENT_WRITE_OFF_ENABLED: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_CARD_ENABLE_IDEMPOTENCY_KEY: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GENERAL_LEDGER_ENABLE_RETURN_POSTING_PROFILES: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_DISCOUNT_IS_CALCULATED_ON_AMOUNT_INCL_SALES_TAX: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BILL_OF_EXCHANGE_POSTING_PROFILE_FOR_REMIT_DISCOUNT: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAM_DEDUCTION_TYPE: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLLECTION_LETTER_GENERATION_LEVEL: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      CustCollectionLetterGenerationLevel,
      true,
      true
    >;
    CUSTOMER_TAX_EXEMPT_NUMBER_REQUIREMENT: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      TaxVatNumCountryRegionType,
      true,
      true
    >;
    DIRECT_DEBIT_B_2_B_SCHEME_DEFAULT_DAYS_FOR_FIRST_BANK_SUBMISSION: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MAX_NUMBER_OF_SALES_ORDERS_FOR_POSTING: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CREDIT_CARD_PAYMENT_BREAK_DOWN_PROCESS: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPORTING_CURRENCY_EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_IS_CALCULATED_FOR_CREDIT_NOTES: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_TAX_EXEMPT_NUMBER_REQUIREMENT: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      TaxVatNumCountryRegionType,
      true,
      true
    >;
    TAM_DEDUCTION_CUST_PAYM_SETTLE_METHOD: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      TamDeductionCustPaymSettleMethod,
      true,
      true
    >;
    BILL_OF_EXCHANGE_POSTING_PROFILE_FOR_PROTESTED: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INTEGRATION_WITH_TAX_SYSTEM_ENABLED: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUPPRESS_DEPRECIATION_OF_PAYMENT_SECTION: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRESERVE_IMPORTED_SALES_ORDER_LINE_NUMBERS: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FREE_TEXT_INVOICE_OVERRIDE_SALES_TAX: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DIRECT_DEBIT_CORE_SCHEME_DEFAULT_DAYS_FOR_FIRST_BANK_SUBMISSION: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAM_REBATE_POSTING: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      McrItemCustCatalog,
      true,
      true
    >;
    COLLECTIONS_GRACE_PERIOD_FOR_DUES_TRANSFER: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INVOICE_PRINT_CREDIT_INVOICING_LAYOUT: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GENERAL_LEDGER_POSTING_PROFILE: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIRECT_DEBIT_DEFAULT_DAYS_FOR_FIRST_PRENOTIFICATION: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COLLECTIONS_WRITE_OFF_LEDGER_JOURNAL_NAME: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIRECT_DEBIT_COR_1_SCHEME_DEFAULT_DAYS_FOR_RECURRING_BANK_SUBMISSION: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUSTOMER_IS_BILLING_CLASSIFICATION_USED: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SKIP_SALES_QUOTATION_REFERENCED_DATA_DURING_CHANGE_TRACKING: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    APPLY_PRICE_DISC_ON_SALES_LINE_ENTITY: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GENERAL_LEDGER_DEFAULT_DIMENSION_HIERARCHY: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      McrItemCustCatalog,
      true,
      true
    >;
    CASH_FLOW_TERMS_OF_PAYMENT: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLE_PREPAYMENT_VAT_TYPE: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      CustSettlePrepaymentVatTypeRu,
      true,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREPAYMENT_FACTURE_AUTO_CREATE: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVERSE_PREPAYMENT: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEDUCTIONS_CUST_CLAIM_JOURNAL_NAME: OrderableEdmTypeField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEDUCTIONS_RETURN_ORDER_PRE_APPROVAL: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEDUCTIONS_RETURN_ORDER_INVOICE_TOLERANCE: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      ErrorTolerance,
      true,
      true
    >;
    DEDUCTIONS_RETURN_ORDER_CREATE: EnumField<
      CustomerParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link creditCardPostingLedgerDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_CARD_POSTING_LEDGER_DIMENSION: OneToOneLink<
      CustomerParameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CustomerParameters<DeSerializers>>;
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
         * Static representation of the {@link creditCardPostingBankTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_POSTING_BANK_TRANSACTION_TYPE:
          fieldBuilder.buildEdmTypeField(
            'CreditCardPostingBankTransactionType',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link creditCardAuthTransArchiveThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_AUTH_TRANS_ARCHIVE_THRESHOLD:
          fieldBuilder.buildEdmTypeField(
            'CreditCardAuthTransArchiveThreshold',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link collectionLetterDisputedTransactionsExcluded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_LETTER_DISPUTED_TRANSACTIONS_EXCLUDED:
          fieldBuilder.buildEnumField(
            'CollectionLetterDisputedTransactionsExcluded',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link creditCardEstimatedShippingChargeMaximum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_ESTIMATED_SHIPPING_CHARGE_MAXIMUM:
          fieldBuilder.buildEdmTypeField(
            'CreditCardEstimatedShippingChargeMaximum',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link settlementInvoiceLinePrioritizationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_INVOICE_LINE_PRIORITIZATION_METHOD:
          fieldBuilder.buildEnumField(
            'SettlementInvoiceLinePrioritizationMethod',
            CustInvoiceLinePriority,
            true
          ),
        /**
         * Static representation of the {@link isInvoiceZeroAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INVOICE_ZERO_AMOUNT: fieldBuilder.buildEnumField(
          'IsInvoiceZeroAmount',
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
         * Static representation of the {@link cashDiscountReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_REASON_CODE: fieldBuilder.buildEdmTypeField(
          'CashDiscountReasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditLimitCheckType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_LIMIT_CHECK_TYPE: fieldBuilder.buildEnumField(
          'CreditLimitCheckType',
          TypeOfCreditmaxCheck,
          true
        ),
        /**
         * Static representation of the {@link invoicePrintPackagingWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_PRINT_PACKAGING_WEIGHT: fieldBuilder.buildEnumField(
          'InvoicePrintPackagingWeight',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isMarkupResearchPriorPostingEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MARKUP_RESEARCH_PRIOR_POSTING_ENABLED: fieldBuilder.buildEnumField(
          'IsMarkupResearchPriorPostingEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link collectionsStatementToContactEmailTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTIONS_STATEMENT_TO_CONTACT_EMAIL_TEMPLATE_ID:
          fieldBuilder.buildEdmTypeField(
            'CollectionsStatementToContactEmailTemplateId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link collectionLetterCodeUpdate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_LETTER_CODE_UPDATE: fieldBuilder.buildEnumField(
          'CollectionLetterCodeUpdate',
          CustPostedPrinted,
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
         * Static representation of the {@link settlementMaximumOverUnderPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_MAXIMUM_OVER_UNDER_PAYMENT: fieldBuilder.buildEdmTypeField(
          'SettlementMaximumOverUnderPayment',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link enableDateOfVatRegisterChanging} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_DATE_OF_VAT_REGISTER_CHANGING: fieldBuilder.buildEnumField(
          'EnableDateOfVATRegisterChanging',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link collectionsWriteOffReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTIONS_WRITE_OFF_REASON_CODE: fieldBuilder.buildEdmTypeField(
          'CollectionsWriteOffReasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interestAdjustmentDateToUse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_ADJUSTMENT_DATE_TO_USE: fieldBuilder.buildEnumField(
          'InterestAdjustmentDateToUse',
          CustInterestAdjustmentDateToUse,
          true
        ),
        /**
         * Static representation of the {@link defaultLanguage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_LANGUAGE: fieldBuilder.buildEnumField(
          'DefaultLanguage',
          CustLanguageAccountType,
          true
        ),
        /**
         * Static representation of the {@link settlementProrationTypeForInvoices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_PRORATION_TYPE_FOR_INVOICES: fieldBuilder.buildEnumField(
          'SettlementProrationTypeForInvoices',
          CustSettlementProrationType,
          true
        ),
        /**
         * Static representation of the {@link markupValueBase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_VALUE_BASE: fieldBuilder.buildEnumField(
          'MarkupValueBase',
          MarkupValueBase,
          true
        ),
        /**
         * Static representation of the {@link creditCardPostingLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_POSTING_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'CreditCardPostingLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link creditCardEstimatedShippingChargeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_ESTIMATED_SHIPPING_CHARGE_TYPE: fieldBuilder.buildEnumField(
          'CreditCardEstimatedShippingChargeType',
          CreditCardEstShippingChargeType,
          true
        ),
        /**
         * Static representation of the {@link reasonRequirementForCreditNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_REQUIREMENT_FOR_CREDIT_NOTES: fieldBuilder.buildEnumField(
          'ReasonRequirementForCreditNotes',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link interestMinimumDaysToAllowWaiving} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_MINIMUM_DAYS_TO_ALLOW_WAIVING: fieldBuilder.buildEdmTypeField(
          'InterestMinimumDaysToAllowWaiving',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link initializeAttributeBasedPricingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INITIALIZE_ATTRIBUTE_BASED_PRICING_ID: fieldBuilder.buildEnumField(
          'InitializeAttributeBasedPricingID',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link collectionLetterIgnoreCreditTransactionCodes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_LETTER_IGNORE_CREDIT_TRANSACTION_CODES:
          fieldBuilder.buildEnumField(
            'CollectionLetterIgnoreCreditTransactionCodes',
            NoYes,
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
         * Static representation of the {@link generalLedgerPostingAccountForRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERAL_LEDGER_POSTING_ACCOUNT_FOR_REVENUE: fieldBuilder.buildEnumField(
          'GeneralLedgerPostingAccountForRevenue',
          ItemCust,
          true
        ),
        /**
         * Static representation of the {@link changeProposalDataEntityBehavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_PROPOSAL_DATA_ENTITY_BEHAVIOR: fieldBuilder.buildEnumField(
          'ChangeProposalDataEntityBehavior',
          CustTableChangeProposalDataEntityBehavior,
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
         * Static representation of the {@link priceDetailsEnabledForSalesDocuments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_DETAILS_ENABLED_FOR_SALES_DOCUMENTS: fieldBuilder.buildEnumField(
          'PriceDetailsEnabledForSalesDocuments',
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
         * Static representation of the {@link collectionsIsReferToCollectionAgencyEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTIONS_IS_REFER_TO_COLLECTION_AGENCY_ENABLED:
          fieldBuilder.buildEnumField(
            'CollectionsIsReferToCollectionAgencyEnabled',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link customerIsConsolidatedInvoiceUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_IS_CONSOLIDATED_INVOICE_USED: fieldBuilder.buildEnumField(
          'CustomerIsConsolidatedInvoiceUsed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link generalLedgerIsAmountDebitCreditShown} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERAL_LEDGER_IS_AMOUNT_DEBIT_CREDIT_SHOWN:
          fieldBuilder.buildEnumField(
            'GeneralLedgerIsAmountDebitCreditShown',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link creditCardEstimatedShippingChargeValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_ESTIMATED_SHIPPING_CHARGE_VALUE:
          fieldBuilder.buildEdmTypeField(
            'CreditCardEstimatedShippingChargeValue',
            'Edm.Decimal',
            false
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
         * Static representation of the {@link customerMinimumRefund} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_MINIMUM_REFUND: fieldBuilder.buildEdmTypeField(
          'CustomerMinimumRefund',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link creditCardNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_NOTES: fieldBuilder.buildEdmTypeField(
          'CreditCardNotes',
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
         * Static representation of the {@link settlementSpanBillingCodeAcrossInvoices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_SPAN_BILLING_CODE_ACROSS_INVOICES:
          fieldBuilder.buildEnumField(
            'SettlementSpanBillingCodeAcrossInvoices',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link creditCardAuthorization} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_AUTHORIZATION: fieldBuilder.buildEnumField(
          'CreditCardAuthorization',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link entryCertificateIsManagementEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_CERTIFICATE_IS_MANAGEMENT_ENABLED: fieldBuilder.buildEnumField(
          'EntryCertificateIsManagementEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link freeTextInvoiceCanEditLedgerAccountForProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_TEXT_INVOICE_CAN_EDIT_LEDGER_ACCOUNT_FOR_PROJECT:
          fieldBuilder.buildEnumField(
            'FreeTextInvoiceCanEditLedgerAccountForProject',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link customerIsTaxGroupMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_IS_TAX_GROUP_MANDATORY: fieldBuilder.buildEnumField(
          'CustomerIsTaxGroupMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link creditLimitIsCheckedOnFreeTextInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_LIMIT_IS_CHECKED_ON_FREE_TEXT_INVOICE:
          fieldBuilder.buildEnumField(
            'CreditLimitIsCheckedOnFreeTextInvoice',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link creditLimitMessageTypeShownWhenExceeding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_LIMIT_MESSAGE_TYPE_SHOWN_WHEN_EXCEEDING:
          fieldBuilder.buildEnumField(
            'CreditLimitMessageTypeShownWhenExceeding',
            CreditLineErrorType,
            true
          ),
        /**
         * Static representation of the {@link freeTextInvoiceIsItemTaxGroupMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_TEXT_INVOICE_IS_ITEM_TAX_GROUP_MANDATORY:
          fieldBuilder.buildEnumField(
            'FreeTextInvoiceIsItemTaxGroupMandatory',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link creditLimitIsCheckedOnSalesOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_LIMIT_IS_CHECKED_ON_SALES_ORDER: fieldBuilder.buildEnumField(
          'CreditLimitIsCheckedOnSalesOrder',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link markupPeriodChargeRuleSiteLocationMatch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_PERIOD_CHARGE_RULE_SITE_LOCATION_MATCH:
          fieldBuilder.buildEnumField(
            'MarkupPeriodChargeRuleSiteLocationMatch',
            MarkupPeriodChargeRuleSiteLocationMatch,
            true
          ),
        /**
         * Static representation of the {@link interestTransactionsToCalculateFor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_TRANSACTIONS_TO_CALCULATE_FOR: fieldBuilder.buildEnumField(
          'InterestTransactionsToCalculateFor',
          CustInterestCalc,
          true
        ),
        /**
         * Static representation of the {@link interestMaximumDaysAllowedToWaive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_MAXIMUM_DAYS_ALLOWED_TO_WAIVE: fieldBuilder.buildEdmTypeField(
          'InterestMaximumDaysAllowedToWaive',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link settlementMaximumPennyDifference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_MAXIMUM_PENNY_DIFFERENCE: fieldBuilder.buildEdmTypeField(
          'SettlementMaximumPennyDifference',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isMarkupCalculationPerInvoiceForSummaryUpdateEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MARKUP_CALCULATION_PER_INVOICE_FOR_SUMMARY_UPDATE_ENABLED:
          fieldBuilder.buildEnumField(
            'IsMarkupCalculationPerInvoiceForSummaryUpdateEnabled',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link reasonRequirementForPaymentCancellation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_REQUIREMENT_FOR_PAYMENT_CANCELLATION:
          fieldBuilder.buildEnumField(
            'ReasonRequirementForPaymentCancellation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link collectionsTransactionsToContactEmailTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTIONS_TRANSACTIONS_TO_CONTACT_EMAIL_TEMPLATE_ID:
          fieldBuilder.buildEdmTypeField(
            'CollectionsTransactionsToContactEmailTemplateId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link creditCardAuthorizationLastNumberOfDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_AUTHORIZATION_LAST_NUMBER_OF_DAYS:
          fieldBuilder.buildEdmTypeField(
            'CreditCardAuthorizationLastNumberOfDays',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link isValidationOnBillOfExchangeJournalsEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_VALIDATION_ON_BILL_OF_EXCHANGE_JOURNALS_ENABLED:
          fieldBuilder.buildEnumField(
            'IsValidationOnBillOfExchangeJournalsEnabled',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link skipReferencedDataDuringChangeTracking} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_REFERENCED_DATA_DURING_CHANGE_TRACKING:
          fieldBuilder.buildEnumField(
            'SkipReferencedDataDuringChangeTracking',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link paymentProposalWarnWhenMultipleMethodsOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_PROPOSAL_WARN_WHEN_MULTIPLE_METHODS_OF_PAYMENT:
          fieldBuilder.buildEnumField(
            'PaymentProposalWarnWhenMultipleMethodsOfPayment',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link freeTextInvoiceStopInvoicePostingOnFirstError} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_TEXT_INVOICE_STOP_INVOICE_POSTING_ON_FIRST_ERROR:
          fieldBuilder.buildEnumField(
            'FreeTextInvoiceStopInvoicePostingOnFirstError',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link collectionsTeamPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTIONS_TEAM_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'CollectionsTeamPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDateTreatmentOfBillOfExchangeJournalsEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DATE_TREATMENT_OF_BILL_OF_EXCHANGE_JOURNALS_ENABLED:
          fieldBuilder.buildEnumField(
            'IsDateTreatmentOfBillOfExchangeJournalsEnabled',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link markupPeriodChargeRuleQtyThresholdMatch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_PERIOD_CHARGE_RULE_QTY_THRESHOLD_MATCH:
          fieldBuilder.buildEnumField(
            'MarkupPeriodChargeRuleQtyThresholdMatch',
            MarkupPeriodChargeRuleQtyThresholdMatch,
            true
          ),
        /**
         * Static representation of the {@link directDebitCoreSchemeDefaultDaysForRecurringBankSubmission} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT_DEBIT_CORE_SCHEME_DEFAULT_DAYS_FOR_RECURRING_BANK_SUBMISSION:
          fieldBuilder.buildEdmTypeField(
            'DirectDebitCoreSchemeDefaultDaysForRecurringBankSubmission',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link isTotalsCalculationAutomatic} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TOTALS_CALCULATION_AUTOMATIC: fieldBuilder.buildEnumField(
          'IsTotalsCalculationAutomatic',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceIsCreditNotePostedAsCorrection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_IS_CREDIT_NOTE_POSTED_AS_CORRECTION:
          fieldBuilder.buildEnumField(
            'InvoiceIsCreditNotePostedAsCorrection',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link totalDiscountIsCalculatedOnPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT_IS_CALCULATED_ON_POSTING: fieldBuilder.buildEnumField(
          'TotalDiscountIsCalculatedOnPosting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link settlementAutoSettleEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_AUTO_SETTLE_ENABLED: fieldBuilder.buildEnumField(
          'SettlementAutoSettleEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link directDebitCor1SchemeDefaultDaysForFirstBankSubmission} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT_DEBIT_COR_1_SCHEME_DEFAULT_DAYS_FOR_FIRST_BANK_SUBMISSION:
          fieldBuilder.buildEdmTypeField(
            'DirectDebitCor1SchemeDefaultDaysForFirstBankSubmission',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link settlementIsPriorityUsedOnAutoSettlement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_IS_PRIORITY_USED_ON_AUTO_SETTLEMENT:
          fieldBuilder.buildEnumField(
            'SettlementIsPriorityUsedOnAutoSettlement',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link useSequentialLineNumbersWhenPostingCustomerInvoiceLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_SEQUENTIAL_LINE_NUMBERS_WHEN_POSTING_CUSTOMER_INVOICE_LINES:
          fieldBuilder.buildEnumField(
            'UseSequentialLineNumbersWhenPostingCustomerInvoiceLines',
            NoYes,
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
         * Static representation of the {@link prepaymentCalculateTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPAYMENT_CALCULATE_TAX: fieldBuilder.buildEnumField(
          'PrepaymentCalculateTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cashDiscountIsCalculatedForPartialPayments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_IS_CALCULATED_FOR_PARTIAL_PAYMENTS:
          fieldBuilder.buildEnumField(
            'CashDiscountIsCalculatedForPartialPayments',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link creditCardPostingAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_POSTING_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'CreditCardPostingAccountType',
          LedgerJournalAcType,
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
         * Static representation of the {@link billOfExchangePostingProfileForEndorsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_EXCHANGE_POSTING_PROFILE_FOR_ENDORSED:
          fieldBuilder.buildEdmTypeField(
            'BillOfExchangePostingProfileForEndorsed',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link generalLedgerPostingAccountForConsumption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERAL_LEDGER_POSTING_ACCOUNT_FOR_CONSUMPTION:
          fieldBuilder.buildEnumField(
            'GeneralLedgerPostingAccountForConsumption',
            ItemCust,
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
         * Static representation of the {@link defaultFilterForCustomerTransactions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FILTER_FOR_CUSTOMER_TRANSACTIONS: fieldBuilder.buildEnumField(
          'DefaultFilterForCustomerTransactions',
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
         * Static representation of the {@link prepaymentPostingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPAYMENT_POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PrepaymentPostingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tamDeductionRequireFullSettle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAM_DEDUCTION_REQUIRE_FULL_SETTLE: fieldBuilder.buildEnumField(
          'TAMDeductionRequireFullSettle',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link generalLedgerPostingAccountForDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERAL_LEDGER_POSTING_ACCOUNT_FOR_DISCOUNT:
          fieldBuilder.buildEnumField(
            'GeneralLedgerPostingAccountForDiscount',
            ItemCust,
            true
          ),
        /**
         * Static representation of the {@link giroAccountPositions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIRO_ACCOUNT_POSITIONS: fieldBuilder.buildEdmTypeField(
          'GiroAccountPositions',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link markupPeriodChargeBatchHelpers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_PERIOD_CHARGE_BATCH_HELPERS: fieldBuilder.buildEdmTypeField(
          'MarkupPeriodChargeBatchHelpers',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link freeTextInvoiceIsProjectEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_TEXT_INVOICE_IS_PROJECT_ENABLED: fieldBuilder.buildEnumField(
          'FreeTextInvoiceIsProjectEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link entryCertificateIsIssuingEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_CERTIFICATE_IS_ISSUING_ENABLED: fieldBuilder.buildEnumField(
          'EntryCertificateIsIssuingEnabled',
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
         * Static representation of the {@link directDebitMandateDefaultExpirationInMonths} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT_DEBIT_MANDATE_DEFAULT_EXPIRATION_IN_MONTHS:
          fieldBuilder.buildEdmTypeField(
            'DirectDebitMandateDefaultExpirationInMonths',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link settlementIsPriorityUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_IS_PRIORITY_USED: fieldBuilder.buildEnumField(
          'SettlementIsPriorityUsed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link generalLedgerEnableCancelPostingProfiles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERAL_LEDGER_ENABLE_CANCEL_POSTING_PROFILES:
          fieldBuilder.buildEnumField(
            'GeneralLedgerEnableCancelPostingProfiles',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link directDebitB2BSchemeDefaultDaysForRecurringBankSubmission} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT_DEBIT_B_2_B_SCHEME_DEFAULT_DAYS_FOR_RECURRING_BANK_SUBMISSION:
          fieldBuilder.buildEdmTypeField(
            'DirectDebitB2BSchemeDefaultDaysForRecurringBankSubmission',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link collectionsWriteOffIsSalesTaxSeparated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTIONS_WRITE_OFF_IS_SALES_TAX_SEPARATED:
          fieldBuilder.buildEnumField(
            'CollectionsWriteOffIsSalesTaxSeparated',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link customerDefaultOneTimeAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_DEFAULT_ONE_TIME_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerDefaultOneTimeAccount',
          'Edm.String',
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
         * Static representation of the {@link billOfExchangePostingProfileForRemitCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_EXCHANGE_POSTING_PROFILE_FOR_REMIT_COLLECTION:
          fieldBuilder.buildEdmTypeField(
            'BillOfExchangePostingProfileForRemitCollection',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link directDebitDefaultDaysForRecurringPrenotification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT_DEBIT_DEFAULT_DAYS_FOR_RECURRING_PRENOTIFICATION:
          fieldBuilder.buildEdmTypeField(
            'DirectDebitDefaultDaysForRecurringPrenotification',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link creditCardCostCenterDimensionAttribute} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_COST_CENTER_DIMENSION_ATTRIBUTE:
          fieldBuilder.buildEdmTypeField(
            'CreditCardCostCenterDimensionAttribute',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link collectionsAgencyTaxRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTIONS_AGENCY_TAX_RATE: fieldBuilder.buildEdmTypeField(
          'CollectionsAgencyTaxRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reasonRequirementForReturnOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_REQUIREMENT_FOR_RETURN_ORDERS: fieldBuilder.buildEnumField(
          'ReasonRequirementForReturnOrders',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link billOfExchangePostingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_EXCHANGE_POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'BillOfExchangePostingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reasonRequirementForTransactionReversals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_REQUIREMENT_FOR_TRANSACTION_REVERSALS:
          fieldBuilder.buildEnumField(
            'ReasonRequirementForTransactionReversals',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link replaceAlternativeItemLineDefaults} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLACE_ALTERNATIVE_ITEM_LINE_DEFAULTS: fieldBuilder.buildEnumField(
          'ReplaceAlternativeItemLineDefaults',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_RELATION: fieldBuilder.buildEnumField(
          'PrimaryRelation',
          ItemCust,
          true
        ),
        /**
         * Static representation of the {@link cashDiscountIsCreditNotePosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_IS_CREDIT_NOTE_POSTED: fieldBuilder.buildEnumField(
          'CashDiscountIsCreditNotePosted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesReturnDeliverRemainderPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_RETURN_DELIVER_REMAINDER_POLICY: fieldBuilder.buildEnumField(
          'SalesReturnDeliverRemainderPolicy',
          SalesReturnDeliverRemainderPolicy,
          true
        ),
        /**
         * Static representation of the {@link salesEntityCalculateLineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ENTITY_CALCULATE_LINE_AMOUNT: fieldBuilder.buildEnumField(
          'SalesEntityCalculateLineAmount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link collectionsTransactionsToSalespersonEmailTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTIONS_TRANSACTIONS_TO_SALESPERSON_EMAIL_TEMPLATE_ID:
          fieldBuilder.buildEdmTypeField(
            'CollectionsTransactionsToSalespersonEmailTemplateId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link collectionsAgingPeriodDefinition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTIONS_AGING_PERIOD_DEFINITION: fieldBuilder.buildEdmTypeField(
          'CollectionsAgingPeriodDefinition',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link markupPeriodChargeRuleIsChargeCodeMatchRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_PERIOD_CHARGE_RULE_IS_CHARGE_CODE_MATCH_REQUIRED:
          fieldBuilder.buildEnumField(
            'MarkupPeriodChargeRuleIsChargeCodeMatchRequired',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link settlementMarkOpenInvoiceLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_MARK_OPEN_INVOICE_LINE: fieldBuilder.buildEnumField(
          'SettlementMarkOpenInvoiceLine',
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
         * Static representation of the {@link creditCardEnableIdempotencyKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_ENABLE_IDEMPOTENCY_KEY: fieldBuilder.buildEnumField(
          'CreditCardEnableIdempotencyKey',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link generalLedgerEnableReturnPostingProfiles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERAL_LEDGER_ENABLE_RETURN_POSTING_PROFILES:
          fieldBuilder.buildEnumField(
            'GeneralLedgerEnableReturnPostingProfiles',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link cashDiscountIsCalculatedOnAmountInclSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_IS_CALCULATED_ON_AMOUNT_INCL_SALES_TAX:
          fieldBuilder.buildEnumField(
            'CashDiscountIsCalculatedOnAmountInclSalesTax',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link billOfExchangePostingProfileForRemitDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_EXCHANGE_POSTING_PROFILE_FOR_REMIT_DISCOUNT:
          fieldBuilder.buildEdmTypeField(
            'BillOfExchangePostingProfileForRemitDiscount',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link tamDeductionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAM_DEDUCTION_TYPE: fieldBuilder.buildEdmTypeField(
          'TAMDeductionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link collectionLetterGenerationLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_LETTER_GENERATION_LEVEL: fieldBuilder.buildEnumField(
          'CollectionLetterGenerationLevel',
          CustCollectionLetterGenerationLevel,
          true
        ),
        /**
         * Static representation of the {@link customerTaxExemptNumberRequirement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_TAX_EXEMPT_NUMBER_REQUIREMENT: fieldBuilder.buildEnumField(
          'CustomerTaxExemptNumberRequirement',
          TaxVatNumCountryRegionType,
          true
        ),
        /**
         * Static representation of the {@link directDebitB2BSchemeDefaultDaysForFirstBankSubmission} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT_DEBIT_B_2_B_SCHEME_DEFAULT_DAYS_FOR_FIRST_BANK_SUBMISSION:
          fieldBuilder.buildEdmTypeField(
            'DirectDebitB2BSchemeDefaultDaysForFirstBankSubmission',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link maxNumberOfSalesOrdersForPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_NUMBER_OF_SALES_ORDERS_FOR_POSTING: fieldBuilder.buildEdmTypeField(
          'MaxNumberOfSalesOrdersForPosting',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link creditCardPaymentBreakDownProcess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_PAYMENT_BREAK_DOWN_PROCESS: fieldBuilder.buildEnumField(
          'CreditCardPaymentBreakDownProcess',
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
         * Static representation of the {@link cashDiscountIsCalculatedForCreditNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_IS_CALCULATED_FOR_CREDIT_NOTES:
          fieldBuilder.buildEnumField(
            'CashDiscountIsCalculatedForCreditNotes',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link invoiceTaxExemptNumberRequirement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_TAX_EXEMPT_NUMBER_REQUIREMENT: fieldBuilder.buildEnumField(
          'InvoiceTaxExemptNumberRequirement',
          TaxVatNumCountryRegionType,
          true
        ),
        /**
         * Static representation of the {@link tamDeductionCustPaymSettleMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAM_DEDUCTION_CUST_PAYM_SETTLE_METHOD: fieldBuilder.buildEnumField(
          'TAMDeductionCustPaymSettleMethod',
          TamDeductionCustPaymSettleMethod,
          true
        ),
        /**
         * Static representation of the {@link billOfExchangePostingProfileForProtested} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_EXCHANGE_POSTING_PROFILE_FOR_PROTESTED:
          fieldBuilder.buildEdmTypeField(
            'BillOfExchangePostingProfileForProtested',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link isIntegrationWithTaxSystemEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INTEGRATION_WITH_TAX_SYSTEM_ENABLED: fieldBuilder.buildEnumField(
          'IsIntegrationWithTaxSystemEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link suppressDepreciationOfPaymentSection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPRESS_DEPRECIATION_OF_PAYMENT_SECTION: fieldBuilder.buildEnumField(
          'SuppressDepreciationOfPaymentSection',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link preserveImportedSalesOrderLineNumbers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRESERVE_IMPORTED_SALES_ORDER_LINE_NUMBERS: fieldBuilder.buildEnumField(
          'PreserveImportedSalesOrderLineNumbers',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link freeTextInvoiceOverrideSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_TEXT_INVOICE_OVERRIDE_SALES_TAX: fieldBuilder.buildEnumField(
          'FreeTextInvoiceOverrideSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link directDebitCoreSchemeDefaultDaysForFirstBankSubmission} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT_DEBIT_CORE_SCHEME_DEFAULT_DAYS_FOR_FIRST_BANK_SUBMISSION:
          fieldBuilder.buildEdmTypeField(
            'DirectDebitCoreSchemeDefaultDaysForFirstBankSubmission',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link tamRebatePosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAM_REBATE_POSTING: fieldBuilder.buildEnumField(
          'TAMRebatePosting',
          McrItemCustCatalog,
          true
        ),
        /**
         * Static representation of the {@link collectionsGracePeriodForDuesTransfer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTIONS_GRACE_PERIOD_FOR_DUES_TRANSFER:
          fieldBuilder.buildEdmTypeField(
            'CollectionsGracePeriodForDuesTransfer',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link invoicePrintCreditInvoicingLayout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_PRINT_CREDIT_INVOICING_LAYOUT: fieldBuilder.buildEnumField(
          'InvoicePrintCreditInvoicingLayout',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link generalLedgerPostingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERAL_LEDGER_POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'GeneralLedgerPostingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link directDebitDefaultDaysForFirstPrenotification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT_DEBIT_DEFAULT_DAYS_FOR_FIRST_PRENOTIFICATION:
          fieldBuilder.buildEdmTypeField(
            'DirectDebitDefaultDaysForFirstPrenotification',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link collectionsWriteOffLedgerJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTIONS_WRITE_OFF_LEDGER_JOURNAL_NAME:
          fieldBuilder.buildEdmTypeField(
            'CollectionsWriteOffLedgerJournalName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link directDebitCor1SchemeDefaultDaysForRecurringBankSubmission} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT_DEBIT_COR_1_SCHEME_DEFAULT_DAYS_FOR_RECURRING_BANK_SUBMISSION:
          fieldBuilder.buildEdmTypeField(
            'DirectDebitCor1SchemeDefaultDaysForRecurringBankSubmission',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link customerIsBillingClassificationUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_IS_BILLING_CLASSIFICATION_USED: fieldBuilder.buildEnumField(
          'CustomerIsBillingClassificationUsed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link skipSalesQuotationReferencedDataDuringChangeTracking} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_SALES_QUOTATION_REFERENCED_DATA_DURING_CHANGE_TRACKING:
          fieldBuilder.buildEnumField(
            'SkipSalesQuotationReferencedDataDuringChangeTracking',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link applyPriceDiscOnSalesLineEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_PRICE_DISC_ON_SALES_LINE_ENTITY: fieldBuilder.buildEnumField(
          'ApplyPriceDiscOnSalesLineEntity',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link generalLedgerDefaultDimensionHierarchy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERAL_LEDGER_DEFAULT_DIMENSION_HIERARCHY: fieldBuilder.buildEnumField(
          'GeneralLedgerDefaultDimensionHierarchy',
          McrItemCustCatalog,
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
         * Static representation of the {@link settlePrepaymentVatType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_PREPAYMENT_VAT_TYPE: fieldBuilder.buildEnumField(
          'SettlePrepaymentVATType',
          CustSettlePrepaymentVatTypeRu,
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
         * Static representation of the {@link prepaymentFactureAutoCreate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPAYMENT_FACTURE_AUTO_CREATE: fieldBuilder.buildEnumField(
          'PrepaymentFactureAutoCreate',
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
         * Static representation of the {@link reversePrepayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_PREPAYMENT: fieldBuilder.buildEnumField(
          'ReversePrepayment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deductionsCustClaimJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTIONS_CUST_CLAIM_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'DeductionsCustClaimJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deductionsReturnOrderPreApproval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTIONS_RETURN_ORDER_PRE_APPROVAL: fieldBuilder.buildEnumField(
          'DeductionsReturnOrderPreApproval',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deductionsReturnOrderInvoiceTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTIONS_RETURN_ORDER_INVOICE_TOLERANCE: fieldBuilder.buildEnumField(
          'DeductionsReturnOrderInvoiceTolerance',
          ErrorTolerance,
          true
        ),
        /**
         * Static representation of the {@link deductionsReturnOrderCreate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTIONS_RETURN_ORDER_CREATE: fieldBuilder.buildEnumField(
          'DeductionsReturnOrderCreate',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomerParameters)
      };
    }

    return this._schema;
  }
}
