/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetPlansActivity } from './BudgetPlansActivity';
import { BudgetPlansActivityRequestBuilder } from './BudgetPlansActivityRequestBuilder';
import { BudgetClass } from './BudgetClass';
import { BudgetPlanScenarioAttribute } from './BudgetPlanScenarioAttribute';
import { NoYes } from './NoYes';
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
export class BudgetPlansActivityApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetPlansActivity<DeSerializersT>, DeSerializersT>
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
  ): BudgetPlansActivityApi<DeSerializersT> {
    return new BudgetPlansActivityApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BudgetPlansActivity;

  requestBuilder(): BudgetPlansActivityRequestBuilder<DeSerializersT> {
    return new BudgetPlansActivityRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetPlansActivity<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BudgetPlansActivity<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetPlansActivity<DeSerializersT>,
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
    typeof BudgetPlansActivity,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetPlansActivity,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BUDGET_CLASS: EnumField<
      BudgetPlansActivity<DeSerializers>,
      DeSerializersT,
      BudgetClass,
      true,
      true
    >;
    MAIN_ACCOUNT_REC_ID: OrderableEdmTypeField<
      BudgetPlansActivity<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LEDGER_DIMENSION: OrderableEdmTypeField<
      BudgetPlansActivity<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      BudgetPlansActivity<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SCENARIO: OrderableEdmTypeField<
      BudgetPlansActivity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNTING_CURRENCY_AMOUNT: OrderableEdmTypeField<
      BudgetPlansActivity<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SCENARIO_ATTRIBUTE: EnumField<
      BudgetPlansActivity<DeSerializers>,
      DeSerializersT,
      BudgetPlanScenarioAttribute,
      true,
      true
    >;
    POSITION_ID: OrderableEdmTypeField<
      BudgetPlansActivity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_GREGORIAN_DATE_ID: OrderableEdmTypeField<
      BudgetPlansActivity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_NUMBER: OrderableEdmTypeField<
      BudgetPlansActivity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROPOSED_ASSET: OrderableEdmTypeField<
      BudgetPlansActivity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ANALYSIS_CURRENCY_AMOUNT: OrderableEdmTypeField<
      BudgetPlansActivity<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSET_ID: OrderableEdmTypeField<
      BudgetPlansActivity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_NEW_REQUEST: EnumField<
      BudgetPlansActivity<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCOUNTING_CURRENCY_REVENUE_AMOUNT: OrderableEdmTypeField<
      BudgetPlansActivity<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      BudgetPlansActivity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_RECURRING: EnumField<
      BudgetPlansActivity<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSACTION_CURRENCY_REVENUE_AMOUNT: OrderableEdmTypeField<
      BudgetPlansActivity<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNTING_CURRENCY_EXPENSE_AMOUNT: OrderableEdmTypeField<
      BudgetPlansActivity<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPORTING_CURRENCY_AMOUNT: OrderableEdmTypeField<
      BudgetPlansActivity<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT: OrderableEdmTypeField<
      BudgetPlansActivity<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROPOSED_PROJECT: OrderableEdmTypeField<
      BudgetPlansActivity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESS: OrderableEdmTypeField<
      BudgetPlansActivity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CURRENCY_EXPENSE_AMOUNT: OrderableEdmTypeField<
      BudgetPlansActivity<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      BudgetPlansActivity<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<BudgetPlansActivity<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link budgetClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CLASS: fieldBuilder.buildEnumField(
          'BudgetClass',
          BudgetClass,
          true
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
         * Static representation of the {@link ledgerDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_DIMENSION: fieldBuilder.buildEdmTypeField(
          'LedgerDimension',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link effectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'EffectiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link scenario} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCENARIO: fieldBuilder.buildEdmTypeField(
          'Scenario',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link scenarioAttribute} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCENARIO_ATTRIBUTE: fieldBuilder.buildEnumField(
          'ScenarioAttribute',
          BudgetPlanScenarioAttribute,
          true
        ),
        /**
         * Static representation of the {@link positionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_ID: fieldBuilder.buildEdmTypeField(
          'PositionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerGregorianDateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_GREGORIAN_DATE_ID: fieldBuilder.buildEdmTypeField(
          'LedgerGregorianDateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DocumentNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link proposedAsset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPOSED_ASSET: fieldBuilder.buildEdmTypeField(
          'ProposedAsset',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link assetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ID: fieldBuilder.buildEdmTypeField('AssetId', 'Edm.String', true),
        /**
         * Static representation of the {@link isNewRequest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_NEW_REQUEST: fieldBuilder.buildEnumField(
          'IsNewRequest',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link accountingCurrencyRevenueAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_CURRENCY_REVENUE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AccountingCurrencyRevenueAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isRecurring} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RECURRING: fieldBuilder.buildEnumField('IsRecurring', NoYes, true),
        /**
         * Static representation of the {@link transactionCurrencyRevenueAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_REVENUE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyRevenueAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accountingCurrencyExpenseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_CURRENCY_EXPENSE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AccountingCurrencyExpenseAmount',
          'Edm.Decimal',
          false
        ),
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
         * Static representation of the {@link transactionCurrencyAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link proposedProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPOSED_PROJECT: fieldBuilder.buildEdmTypeField(
          'ProposedProject',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link process} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS: fieldBuilder.buildEdmTypeField('Process', 'Edm.String', true),
        /**
         * Static representation of the {@link transactionCurrencyExpenseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_EXPENSE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyExpenseAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetPlansActivity)
      };
    }

    return this._schema;
  }
}
