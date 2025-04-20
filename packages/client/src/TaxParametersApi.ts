/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxParameters } from './TaxParameters';
import { TaxParametersRequestBuilder } from './TaxParametersRequestBuilder';
import { NoYes } from './NoYes';
import { TaxObligationCompany } from './TaxObligationCompany';
import { CustVendExchRateDiffDocTypeRu } from './CustVendExchRateDiffDocTypeRu';
import { InvoiceTypeMy } from './InvoiceTypeMy';
import { RestoredVatGainCalcMethodRu } from './RestoredVatGainCalcMethodRu';
import { TaxGstInvoiceFormatMy } from './TaxGstInvoiceFormatMy';
import { TaxCalculationDateType } from './TaxCalculationDateType';
import { RestoredVatCalcMethodRu } from './RestoredVatCalcMethodRu';
import { CheckTaxGroups } from './CheckTaxGroups';
import { TaxCalcPrin } from './TaxCalcPrin';
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
export class TaxParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxParameters<DeSerializersT>, DeSerializersT>
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
  ): TaxParametersApi<DeSerializersT> {
    return new TaxParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxParameters;

  requestBuilder(): TaxParametersRequestBuilder<DeSerializersT> {
    return new TaxParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxParameters<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TaxParameters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TaxParameters, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TaxParameters, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIXED_OFFSET_POSTING: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEGAL_ENTITYFOR_INTERCOMPANY_TAX: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      TaxObligationCompany,
      true,
      true
    >;
    BAS_SOLUTION_NAME: OrderableEdmTypeField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_RECEIVABLE_EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE_DIFFERENCE_DOCUMENT_TYPE: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      CustVendExchRateDiffDocTypeRu,
      true,
      true
    >;
    GST_VENDOR_URL: OrderableEdmTypeField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANDATORY_TAX_DIRECTION: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GST_AUDIT_FILE_FORMAT_NAME: OrderableEdmTypeField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEDUCT_TAX_BEFORE_CASH_DISCOUNT_CALCULATION: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONDITIONAL_TAX: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GSTGAF_VERSION: OrderableEdmTypeField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_PER_INVOICE_LINE: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_EXCHANGE_RATE: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_ADJUSTMENT_ON_REPORT: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_INVOICE_TYPE: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      InvoiceTypeMy,
      true,
      true
    >;
    RESTORED_VAT_GAIN_CALCULATION_METHOD: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      RestoredVatGainCalcMethodRu,
      true,
      true
    >;
    IS_CONSUMPTION_TAX_REPORTS_ENABLED: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_TAX_VALUE_IN_GST_SUMMARY: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GST_EXEMPT_PRINT_CODE: OrderableEdmTypeField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVERSE_SALES_TAX_ON_CASH_DISCOUNT: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALIDATE_TAX_CODE: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GST_INVOICE_FORMAT: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      TaxGstInvoiceFormatMy,
      true,
      true
    >;
    USE_VAT_DUE_DATE_IN_REPORTS: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_CALCULATION_DATE: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      TaxCalculationDateType,
      true,
      true
    >;
    SALES_TAX_PAYABLE_EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTO_TAX_SEARCH: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADJUST_TAX_FOR_OVER_UNDERPAYMENT: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_DISCOUNT_IS_APPLIED_IN_THE_INVOICE: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RESTORED_VAT_CALCULATION_METHOD: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      RestoredVatCalcMethodRu,
      true,
      true
    >;
    BAS_VENDOR_URL: OrderableEdmTypeField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNTS_INCLUDE_TAX_IN_JOURNALS: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_TAX_BRANCH_ENABLED: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DATE_FOR_SECOND_TAX_RAISE: OrderableEdmTypeField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CHECK_SALES_TAX_GROUP_INTERSECTION: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      CheckTaxGroups,
      true,
      true
    >;
    GST_SOLUTION_NAME: OrderableEdmTypeField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_SALES_TAX_GROUP: OrderableEdmTypeField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BAS_FORMAT_NAME: OrderableEdmTypeField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_SELF_BILLED_INVOICE: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHECK_SALES_TAX_TRANSACTION: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_TAX_CODE_IN_GST_SUMMARY: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCOMMING_VAT_PAYMENT: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_DELIMITER_IN_GST_SUMMARY: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CALCULATION_PRINCIPLE: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      TaxCalcPrin,
      true,
      true
    >;
    SALES_TAX_TAXATION_RULES: EnumField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GST_SUMMARY_DELIMITER: OrderableEdmTypeField<
      TaxParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TaxParameters<DeSerializers>>;
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
         * Static representation of the {@link fixedOffsetPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_OFFSET_POSTING: fieldBuilder.buildEnumField(
          'FixedOffsetPosting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link legalEntityforIntercompanyTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITYFOR_INTERCOMPANY_TAX: fieldBuilder.buildEnumField(
          'LegalEntityforIntercompanyTax',
          TaxObligationCompany,
          true
        ),
        /**
         * Static representation of the {@link basSolutionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BAS_SOLUTION_NAME: fieldBuilder.buildEdmTypeField(
          'BASSolutionName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxReceivableExchangeRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_RECEIVABLE_EXCHANGE_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'SalesTaxReceivableExchangeRateType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exchangeRateDifferenceDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_DIFFERENCE_DOCUMENT_TYPE: fieldBuilder.buildEnumField(
          'ExchangeRateDifferenceDocumentType',
          CustVendExchRateDiffDocTypeRu,
          true
        ),
        /**
         * Static representation of the {@link gstVendorUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GST_VENDOR_URL: fieldBuilder.buildEdmTypeField(
          'GSTVendorUrl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mandatoryTaxDirection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY_TAX_DIRECTION: fieldBuilder.buildEnumField(
          'MandatoryTaxDirection',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link gstAuditFileFormatName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GST_AUDIT_FILE_FORMAT_NAME: fieldBuilder.buildEdmTypeField(
          'GSTAuditFileFormatName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deductTaxBeforeCashDiscountCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCT_TAX_BEFORE_CASH_DISCOUNT_CALCULATION:
          fieldBuilder.buildEnumField(
            'DeductTaxBeforeCashDiscountCalculation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link conditionalTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITIONAL_TAX: fieldBuilder.buildEnumField(
          'ConditionalTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link gstgafVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GSTGAF_VERSION: fieldBuilder.buildEdmTypeField(
          'GSTGAFVersion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxPerInvoiceLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PER_INVOICE_LINE: fieldBuilder.buildEnumField(
          'TaxPerInvoiceLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link bankExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_EXCHANGE_RATE: fieldBuilder.buildEnumField(
          'BankExchangeRate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link includeAdjustmentOnReport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_ADJUSTMENT_ON_REPORT: fieldBuilder.buildEnumField(
          'IncludeAdjustmentOnReport',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultInvoiceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_INVOICE_TYPE: fieldBuilder.buildEnumField(
          'DefaultInvoiceType',
          InvoiceTypeMy,
          true
        ),
        /**
         * Static representation of the {@link restoredVatGainCalculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESTORED_VAT_GAIN_CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'RestoredVATGainCalculationMethod',
          RestoredVatGainCalcMethodRu,
          true
        ),
        /**
         * Static representation of the {@link isConsumptionTaxReportsEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CONSUMPTION_TAX_REPORTS_ENABLED: fieldBuilder.buildEnumField(
          'IsConsumptionTaxReportsEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link includeTaxValueInGstSummary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_TAX_VALUE_IN_GST_SUMMARY: fieldBuilder.buildEnumField(
          'IncludeTaxValueInGSTSummary',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link gstExemptPrintCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GST_EXEMPT_PRINT_CODE: fieldBuilder.buildEdmTypeField(
          'GSTExemptPrintCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reverseSalesTaxOnCashDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_SALES_TAX_ON_CASH_DISCOUNT: fieldBuilder.buildEnumField(
          'ReverseSalesTaxOnCashDiscount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link validateTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_TAX_CODE: fieldBuilder.buildEnumField(
          'ValidateTaxCode',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link gstInvoiceFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GST_INVOICE_FORMAT: fieldBuilder.buildEnumField(
          'GSTInvoiceFormat',
          TaxGstInvoiceFormatMy,
          true
        ),
        /**
         * Static representation of the {@link useVatDueDateInReports} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_VAT_DUE_DATE_IN_REPORTS: fieldBuilder.buildEnumField(
          'UseVATDueDateInReports',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxCalculationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CALCULATION_DATE: fieldBuilder.buildEnumField(
          'TaxCalculationDate',
          TaxCalculationDateType,
          true
        ),
        /**
         * Static representation of the {@link salesTaxPayableExchangeRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_PAYABLE_EXCHANGE_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'SalesTaxPayableExchangeRateType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link autoTaxSearch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_TAX_SEARCH: fieldBuilder.buildEnumField(
          'AutoTaxSearch',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link adjustTaxForOverUnderpayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUST_TAX_FOR_OVER_UNDERPAYMENT: fieldBuilder.buildEnumField(
          'AdjustTaxForOverUnderpayment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cashDiscountIsAppliedInTheInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_IS_APPLIED_IN_THE_INVOICE: fieldBuilder.buildEnumField(
          'CashDiscountIsAppliedInTheInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link restoredVatCalculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESTORED_VAT_CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'RestoredVATCalculationMethod',
          RestoredVatCalcMethodRu,
          true
        ),
        /**
         * Static representation of the {@link basVendorUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BAS_VENDOR_URL: fieldBuilder.buildEdmTypeField(
          'BASVendorUrl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultItemSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_ITEM_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'DefaultItemSalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountsIncludeTaxInJournals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNTS_INCLUDE_TAX_IN_JOURNALS: fieldBuilder.buildEnumField(
          'AmountsIncludeTaxInJournals',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isTaxBranchEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TAX_BRANCH_ENABLED: fieldBuilder.buildEnumField(
          'IsTaxBranchEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dateForSecondTaxRaise} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_FOR_SECOND_TAX_RAISE: fieldBuilder.buildEdmTypeField(
          'DateForSecondTaxRaise',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link checkSalesTaxGroupIntersection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_SALES_TAX_GROUP_INTERSECTION: fieldBuilder.buildEnumField(
          'CheckSalesTaxGroupIntersection',
          CheckTaxGroups,
          true
        ),
        /**
         * Static representation of the {@link gstSolutionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GST_SOLUTION_NAME: fieldBuilder.buildEdmTypeField(
          'GSTSolutionName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'DefaultSalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link basFormatName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BAS_FORMAT_NAME: fieldBuilder.buildEdmTypeField(
          'BASFormatName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useSelfBilledInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_SELF_BILLED_INVOICE: fieldBuilder.buildEnumField(
          'UseSelfBilledInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link checkSalesTaxTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_SALES_TAX_TRANSACTION: fieldBuilder.buildEnumField(
          'CheckSalesTaxTransaction',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link includeTaxCodeInGstSummary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_TAX_CODE_IN_GST_SUMMARY: fieldBuilder.buildEnumField(
          'IncludeTaxCodeInGSTSummary',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link incommingVatPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOMMING_VAT_PAYMENT: fieldBuilder.buildEnumField(
          'IncommingVATPayment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link includeDelimiterInGstSummary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_DELIMITER_IN_GST_SUMMARY: fieldBuilder.buildEnumField(
          'IncludeDelimiterInGSTSummary',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link calculationPrinciple} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_PRINCIPLE: fieldBuilder.buildEnumField(
          'CalculationPrinciple',
          TaxCalcPrin,
          true
        ),
        /**
         * Static representation of the {@link salesTaxTaxationRules} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_TAXATION_RULES: fieldBuilder.buildEnumField(
          'SalesTaxTaxationRules',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link gstSummaryDelimiter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GST_SUMMARY_DELIMITER: fieldBuilder.buildEdmTypeField(
          'GSTSummaryDelimiter',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxParameters)
      };
    }

    return this._schema;
  }
}
