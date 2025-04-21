/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GeneralLedgerActivities } from './GeneralLedgerActivities';
import { GeneralLedgerActivitiesRequestBuilder } from './GeneralLedgerActivitiesRequestBuilder';
import { CurrentOperationsTax } from './CurrentOperationsTax';
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
export class GeneralLedgerActivitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<GeneralLedgerActivities<DeSerializersT>, DeSerializersT>
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
  ): GeneralLedgerActivitiesApi<DeSerializersT> {
    return new GeneralLedgerActivitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = GeneralLedgerActivities;

  requestBuilder(): GeneralLedgerActivitiesRequestBuilder<DeSerializersT> {
    return new GeneralLedgerActivitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    GeneralLedgerActivities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      GeneralLedgerActivities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    GeneralLedgerActivities<DeSerializersT>,
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
    typeof GeneralLedgerActivities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        GeneralLedgerActivities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LEDGER_DIMENSION: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MAIN_ACCOUNT_REC_ID: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LEDGER: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    POSTING_LAYER: EnumField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      CurrentOperationsTax,
      true,
      true
    >;
    LEDGER_GREGORIAN_DATE_ID: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    YEAR_OFFSET: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ACCOUNTS_PAYABLE: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_ASSETS: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LIABILITIES: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROFIT_MARGIN_TAXES: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXPENSES: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_ON_TOTAL_ASSETS_EXPENSES: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INCOME: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPORTING_CURRENCY_AMOUNT: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADDITIONAL_EARNINGS: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUICK_RATIO_ASSETS: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COST_OF_GOODS_SOLD: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENT_RATIO_ASSETS: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_PLUS_RETURNS_AND_DISCOUNTS: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CASH: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ANALYSIS_CURRENCY_AMOUNT: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EQUITY: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNTING_CURRENCY_AMOUNT: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNTS_RECEIVABLE: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_REVENUE: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENT_LIABILITIES: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPERATING_EXPENSES: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_RETURN_AND_DISCOUNTS: OrderableEdmTypeField<
      GeneralLedgerActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<GeneralLedgerActivities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link ledgerDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_DIMENSION: fieldBuilder.buildEdmTypeField(
          'LedgerDimension',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link mainAccountRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_REC_ID: fieldBuilder.buildEdmTypeField(
          'MainAccountRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link ledger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER: fieldBuilder.buildEdmTypeField('Ledger', 'Edm.Int64', false),
        /**
         * Static representation of the {@link postingLayer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_LAYER: fieldBuilder.buildEnumField(
          'PostingLayer',
          CurrentOperationsTax,
          true
        ),
        /**
         * Static representation of the {@link ledgerGregorianDateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_GREGORIAN_DATE_ID: fieldBuilder.buildEdmTypeField(
          'LedgerGregorianDateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link yearOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEAR_OFFSET: fieldBuilder.buildEdmTypeField(
          'YearOffset',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link accountsPayable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTS_PAYABLE: fieldBuilder.buildEdmTypeField(
          'AccountsPayable',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalAssets} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_ASSETS: fieldBuilder.buildEdmTypeField(
          'TotalAssets',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link liabilities} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIABILITIES: fieldBuilder.buildEdmTypeField(
          'Liabilities',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link profitMarginTaxes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFIT_MARGIN_TAXES: fieldBuilder.buildEdmTypeField(
          'ProfitMarginTaxes',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link expenses} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSES: fieldBuilder.buildEdmTypeField(
          'Expenses',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link returnOnTotalAssetsExpenses} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ON_TOTAL_ASSETS_EXPENSES: fieldBuilder.buildEdmTypeField(
          'ReturnOnTotalAssetsExpenses',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link income} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOME: fieldBuilder.buildEdmTypeField('Income', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link reportingCurrencyAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link additionalEarnings} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_EARNINGS: fieldBuilder.buildEdmTypeField(
          'AdditionalEarnings',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quickRatioAssets} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUICK_RATIO_ASSETS: fieldBuilder.buildEdmTypeField(
          'QuickRatioAssets',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link costOfGoodsSold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OF_GOODS_SOLD: fieldBuilder.buildEdmTypeField(
          'CostOfGoodsSold',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link currentRatioAssets} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_RATIO_ASSETS: fieldBuilder.buildEdmTypeField(
          'CurrentRatioAssets',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sales} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES: fieldBuilder.buildEdmTypeField('Sales', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link salesPlusReturnsAndDiscounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PLUS_RETURNS_AND_DISCOUNTS: fieldBuilder.buildEdmTypeField(
          'SalesPlusReturnsAndDiscounts',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cash} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH: fieldBuilder.buildEdmTypeField('Cash', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link analysisCurrencyAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANALYSIS_CURRENCY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AnalysisCurrencyAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link equity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EQUITY: fieldBuilder.buildEdmTypeField('Equity', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link accountingCurrencyAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_CURRENCY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AccountingCurrencyAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accountsReceivable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTS_RECEIVABLE: fieldBuilder.buildEdmTypeField(
          'AccountsReceivable',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_REVENUE: fieldBuilder.buildEdmTypeField(
          'TotalRevenue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link currentLiabilities} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_LIABILITIES: fieldBuilder.buildEdmTypeField(
          'CurrentLiabilities',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link operatingExpenses} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_EXPENSES: fieldBuilder.buildEdmTypeField(
          'OperatingExpenses',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesReturnAndDiscounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_RETURN_AND_DISCOUNTS: fieldBuilder.buildEdmTypeField(
          'SalesReturnAndDiscounts',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', GeneralLedgerActivities)
      };
    }

    return this._schema;
  }
}
