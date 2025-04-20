/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetActivities } from './BudgetActivities';
import { BudgetActivitiesRequestBuilder } from './BudgetActivitiesRequestBuilder';
import { BudgetTransactionType } from './BudgetTransactionType';
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
  EnumField,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class BudgetActivitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetActivities<DeSerializersT>, DeSerializersT>
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
  ): BudgetActivitiesApi<DeSerializersT> {
    return new BudgetActivitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BudgetActivities;

  requestBuilder(): BudgetActivitiesRequestBuilder<DeSerializersT> {
    return new BudgetActivitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetActivities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BudgetActivities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BudgetActivities<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BudgetActivities, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetActivities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BUDGET_TRANSACTION_TYPE: EnumField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      BudgetTransactionType,
      true,
      true
    >;
    BUDGET_CODE_NAME: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODEL_ID: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEDGER_GREGORIAN_DATE_ID: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAIN_ACCOUNT_REC_ID: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LEDGER_REC_ID: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LEDGER_DIMENSION: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    YEAR_OFFSET: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ACCOUNTS_PAYABLE: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_ASSETS: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LIABILITIES: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROFIT_MARGIN_TAXES: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXPENSES: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BUDGET_CODE_REC_ID: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RETURN_ON_TOTAL_ASSETS_EXPENSES: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INCOME: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADDITIONAL_EARNINGS: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BUDGET_ACCOUNTING_CURRENCY_AMOUNT: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUICK_RATIO_ASSETS: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COST_OF_GOODS_SOLD: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENT_RATIO_ASSETS: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_PLUS_RETURNS_AND_DISCOUNTS: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CASH: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EQUITY: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNTS_RECEIVABLE: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_REVENUE: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENT_LIABILITIES: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPERATING_EXPENSES: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BUDGET_ANALYSIS_CURRENCY_AMOUNT: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_RETURN_AND_DISCOUNTS: OrderableEdmTypeField<
      BudgetActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<BudgetActivities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link budgetTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'BudgetTransactionType',
          BudgetTransactionType,
          true
        ),
        /**
         * Static representation of the {@link budgetCodeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CODE_NAME: fieldBuilder.buildEdmTypeField(
          'BudgetCodeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link modelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL_ID: fieldBuilder.buildEdmTypeField(
          'ModelId',
          'Edm.String',
          false
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
         * Static representation of the {@link mainAccountRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_REC_ID: fieldBuilder.buildEdmTypeField(
          'MainAccountRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link ledgerRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_REC_ID: fieldBuilder.buildEdmTypeField(
          'LedgerRecId',
          'Edm.Int64',
          false
        ),
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
         * Static representation of the {@link budgetCodeRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CODE_REC_ID: fieldBuilder.buildEdmTypeField(
          'BudgetCodeRecId',
          'Edm.Int64',
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
         * Static representation of the {@link additionalEarnings} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_EARNINGS: fieldBuilder.buildEdmTypeField(
          'AdditionalEarnings',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link budgetAccountingCurrencyAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_ACCOUNTING_CURRENCY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'BudgetAccountingCurrencyAmount',
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
         * Static representation of the {@link equity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EQUITY: fieldBuilder.buildEdmTypeField('Equity', 'Edm.Decimal', false),
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
         * Static representation of the {@link budgetAnalysisCurrencyAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_ANALYSIS_CURRENCY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'BudgetAnalysisCurrencyAmount',
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
        ALL_FIELDS: new AllFields('*', BudgetActivities)
      };
    }

    return this._schema;
  }
}
