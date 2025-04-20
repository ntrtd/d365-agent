/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesLists } from './SalesLists';
import { SalesListsRequestBuilder } from './SalesListsRequestBuilder';
import { ListStatus } from './ListStatus';
import { ModuleSalesPurch } from './ModuleSalesPurch';
import { TaxReport349DeliveryCode } from './TaxReport349DeliveryCode';
import { NoYes } from './NoYes';
import { Quarter } from './Quarter';
import { Listcode } from './Listcode';
import { TaxRep349Sign } from './TaxRep349Sign';
import { EuSalesListCorrectionPeriodEs } from './EuSalesListCorrectionPeriodEs';
import { MonthQuarter } from './MonthQuarter';
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
export class SalesListsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesLists<DeSerializersT>, DeSerializersT>
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
  ): SalesListsApi<DeSerializersT> {
    return new SalesListsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SalesLists;

  requestBuilder(): SalesListsRequestBuilder<DeSerializersT> {
    return new SalesListsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesLists<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesLists<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SalesLists<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SalesLists, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(SalesLists, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      ListStatus,
      true,
      true
    >;
    DISPATCH_ID: OrderableEdmTypeField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NUMBER: OrderableEdmTypeField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CORRECTION_AMOUNT: OrderableEdmTypeField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIRECTION: EnumField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      ModuleSalesPurch,
      true,
      true
    >;
    DELIVERY_CODE: EnumField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      TaxReport349DeliveryCode,
      true,
      true
    >;
    COMPANY_TAX_ID: OrderableEdmTypeField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_REPORTING_CURRENCY_CODE: OrderableEdmTypeField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECTION_REASON_WRONG_REG_NUM: EnumField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SERVICES_VALUE: OrderableEdmTypeField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CORRECTION_REASON_WRONG_AMOUNT: EnumField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CORRECTION_FISCAL_YEAR_SERVICES: OrderableEdmTypeField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    QUARTER: EnumField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      Quarter,
      true,
      true
    >;
    LIST_CODE: EnumField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      Listcode,
      true,
      true
    >;
    ORIGINAL_SALES_LIST_NUMBER: OrderableEdmTypeField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CORRECTION_FISCAL_YEAR: OrderableEdmTypeField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ERROR_LOG: OrderableEdmTypeField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECTION_MONTH_OR_QUARTER: OrderableEdmTypeField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ORIGINAL_SALES_LIST_DISPATCH_ID: OrderableEdmTypeField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECTED_SERVICES: EnumField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    YEAR: OrderableEdmTypeField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CORRECTED: EnumField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CORRECTION_SIGN: EnumField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      TaxRep349Sign,
      true,
      true
    >;
    INVOICE: OrderableEdmTypeField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOT_ASSIGNED_VALUE: OrderableEdmTypeField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEMS_VALUE: OrderableEdmTypeField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIGINAL_SALES_LIST_STATUS: EnumField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      ListStatus,
      true,
      true
    >;
    INVESTMENT_VALUE: OrderableEdmTypeField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CORRECTION_MONTH_OR_QUARTER_SERVICES: OrderableEdmTypeField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACCOUNT_NUMBER: OrderableEdmTypeField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SETTLEMENT: EnumField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CORRECTION_PERIOD: EnumField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      EuSalesListCorrectionPeriodEs,
      true,
      true
    >;
    CORRECTION_REASON_WRONG_PERIOD: EnumField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CLOSING_DATE: OrderableEdmTypeField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CORRECTION_DECLARATION_TYPE: EnumField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      MonthQuarter,
      true,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_EXEMPT_NUMBER: OrderableEdmTypeField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECTION_AMOUNT_SERVICES: OrderableEdmTypeField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CORRECTION_SIGN_SERVICES: EnumField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      TaxRep349Sign,
      true,
      true
    >;
    CORRECTION_PERIOD_SERVICES: EnumField<
      SalesLists<DeSerializers>,
      DeSerializersT,
      EuSalesListCorrectionPeriodEs,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SalesLists<DeSerializers>>;
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
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', ListStatus, true),
        /**
         * Static representation of the {@link dispatchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPATCH_ID: fieldBuilder.buildEdmTypeField(
          'DispatchId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link number} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER: fieldBuilder.buildEdmTypeField('Number', 'Edm.Int32', false),
        /**
         * Static representation of the {@link correctionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CorrectionAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link direction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECTION: fieldBuilder.buildEnumField(
          'Direction',
          ModuleSalesPurch,
          true
        ),
        /**
         * Static representation of the {@link deliveryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_CODE: fieldBuilder.buildEnumField(
          'DeliveryCode',
          TaxReport349DeliveryCode,
          true
        ),
        /**
         * Static representation of the {@link companyTaxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_TAX_ID: fieldBuilder.buildEdmTypeField(
          'CompanyTaxID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxReportingCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REPORTING_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'TaxReportingCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link correctionReasonWrongRegNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_REASON_WRONG_REG_NUM: fieldBuilder.buildEnumField(
          'CorrectionReasonWrongRegNum',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link servicesValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICES_VALUE: fieldBuilder.buildEdmTypeField(
          'ServicesValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link correctionReasonWrongAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_REASON_WRONG_AMOUNT: fieldBuilder.buildEnumField(
          'CorrectionReasonWrongAmount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link correctionFiscalYearServices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_FISCAL_YEAR_SERVICES: fieldBuilder.buildEdmTypeField(
          'CorrectionFiscalYearServices',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link quarter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUARTER: fieldBuilder.buildEnumField('Quarter', Quarter, true),
        /**
         * Static representation of the {@link listCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_CODE: fieldBuilder.buildEnumField('ListCode', Listcode, true),
        /**
         * Static representation of the {@link originalSalesListNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_SALES_LIST_NUMBER: fieldBuilder.buildEdmTypeField(
          'OriginalSalesListNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link correctionFiscalYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_FISCAL_YEAR: fieldBuilder.buildEdmTypeField(
          'CorrectionFiscalYear',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link errorLog} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR_LOG: fieldBuilder.buildEdmTypeField(
          'ErrorLog',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link correctionMonthOrQuarter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_MONTH_OR_QUARTER: fieldBuilder.buildEdmTypeField(
          'CorrectionMonthOrQuarter',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link originalSalesListDispatchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_SALES_LIST_DISPATCH_ID: fieldBuilder.buildEdmTypeField(
          'OriginalSalesListDispatchId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link correctedServices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED_SERVICES: fieldBuilder.buildEnumField(
          'CorrectedServices',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link year} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEAR: fieldBuilder.buildEdmTypeField('Year', 'Edm.Int32', false),
        /**
         * Static representation of the {@link corrected} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED: fieldBuilder.buildEnumField('Corrected', NoYes, true),
        /**
         * Static representation of the {@link correctionSign} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_SIGN: fieldBuilder.buildEnumField(
          'CorrectionSign',
          TaxRep349Sign,
          true
        ),
        /**
         * Static representation of the {@link invoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE: fieldBuilder.buildEdmTypeField('Invoice', 'Edm.String', true),
        /**
         * Static representation of the {@link notAssignedValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOT_ASSIGNED_VALUE: fieldBuilder.buildEdmTypeField(
          'NotAssignedValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemsValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEMS_VALUE: fieldBuilder.buildEdmTypeField(
          'ItemsValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link originalSalesListStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_SALES_LIST_STATUS: fieldBuilder.buildEnumField(
          'OriginalSalesListStatus',
          ListStatus,
          true
        ),
        /**
         * Static representation of the {@link investmentValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVESTMENT_VALUE: fieldBuilder.buildEdmTypeField(
          'InvestmentValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link correctionMonthOrQuarterServices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_MONTH_OR_QUARTER_SERVICES: fieldBuilder.buildEdmTypeField(
          'CorrectionMonthOrQuarterServices',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link accountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSettlement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SETTLEMENT: fieldBuilder.buildEnumField('IsSettlement', NoYes, true),
        /**
         * Static representation of the {@link correctionPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_PERIOD: fieldBuilder.buildEnumField(
          'CorrectionPeriod',
          EuSalesListCorrectionPeriodEs,
          true
        ),
        /**
         * Static representation of the {@link correctionReasonWrongPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_REASON_WRONG_PERIOD: fieldBuilder.buildEnumField(
          'CorrectionReasonWrongPeriod',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link closingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSING_DATE: fieldBuilder.buildEdmTypeField(
          'ClosingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link correctionDeclarationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_DECLARATION_TYPE: fieldBuilder.buildEnumField(
          'CorrectionDeclarationType',
          MonthQuarter,
          true
        ),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxExemptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaxExemptNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link correctionAmountServices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_AMOUNT_SERVICES: fieldBuilder.buildEdmTypeField(
          'CorrectionAmountServices',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link correctionSignServices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_SIGN_SERVICES: fieldBuilder.buildEnumField(
          'CorrectionSignServices',
          TaxRep349Sign,
          true
        ),
        /**
         * Static representation of the {@link correctionPeriodServices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_PERIOD_SERVICES: fieldBuilder.buildEnumField(
          'CorrectionPeriodServices',
          EuSalesListCorrectionPeriodEs,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesLists)
      };
    }

    return this._schema;
  }
}
