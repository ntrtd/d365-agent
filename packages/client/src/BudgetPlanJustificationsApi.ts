/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetPlanJustifications } from './BudgetPlanJustifications';
import { BudgetPlanJustificationsRequestBuilder } from './BudgetPlanJustificationsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class BudgetPlanJustificationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetPlanJustifications<DeSerializersT>, DeSerializersT>
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
  ): BudgetPlanJustificationsApi<DeSerializersT> {
    return new BudgetPlanJustificationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BudgetPlanJustifications;

  requestBuilder(): BudgetPlanJustificationsRequestBuilder<DeSerializersT> {
    return new BudgetPlanJustificationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetPlanJustifications<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BudgetPlanJustifications<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetPlanJustifications<DeSerializersT>,
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
    typeof BudgetPlanJustifications,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetPlanJustifications,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EFFECTIVE_DATE: OrderableEdmTypeField<
      BudgetPlanJustifications<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DOCUMENT_NUMBER: OrderableEdmTypeField<
      BudgetPlanJustifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCENARIO_NAME: OrderableEdmTypeField<
      BudgetPlanJustifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUDGET_PLAN_NAME: OrderableEdmTypeField<
      BudgetPlanJustifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_CURRENCY_REVENUE_AMOUNT: OrderableEdmTypeField<
      BudgetPlanJustifications<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_REVENUE_AMOUNT: OrderableEdmTypeField<
      BudgetPlanJustifications<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNTING_CURRENCY_EXPENSE_AMOUNT: OrderableEdmTypeField<
      BudgetPlanJustifications<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      BudgetPlanJustifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESPONSIBILITY_CENTER: OrderableEdmTypeField<
      BudgetPlanJustifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CURRENCY_EXPENSE_AMOUNT: OrderableEdmTypeField<
      BudgetPlanJustifications<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      BudgetPlanJustifications<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      BudgetPlanJustifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_PLAN_PREPARER: OrderableEdmTypeField<
      BudgetPlanJustifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BudgetPlanJustifications<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link documentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DocumentNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link scenarioName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCENARIO_NAME: fieldBuilder.buildEdmTypeField(
          'ScenarioName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link budgetPlanName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_PLAN_NAME: fieldBuilder.buildEdmTypeField(
          'BudgetPlanName',
          'Edm.String',
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
         * Static representation of the {@link comment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT: fieldBuilder.buildEdmTypeField('Comment', 'Edm.String', true),
        /**
         * Static representation of the {@link responsibilityCenter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSIBILITY_CENTER: fieldBuilder.buildEdmTypeField(
          'ResponsibilityCenter',
          'Edm.String',
          true
        ),
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
        /**
         * Static representation of the {@link accountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'AccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetPlanPreparer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_PLAN_PREPARER: fieldBuilder.buildEdmTypeField(
          'BudgetPlanPreparer',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetPlanJustifications)
      };
    }

    return this._schema;
  }
}
