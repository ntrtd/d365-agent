/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetRegisterEntryLines } from './BudgetRegisterEntryLines';
import { BudgetRegisterEntryLinesRequestBuilder } from './BudgetRegisterEntryLinesRequestBuilder';
import { CurrenciesApi } from './CurrenciesApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { BudgetRegisterEntryHeadersApi } from './BudgetRegisterEntryHeadersApi';
import { LedgersApi } from './LedgersApi';
import { BudgetTransactionWorkflowStatus } from './BudgetTransactionWorkflowStatus';
import { BudgetCheckResult } from './BudgetCheckResult';
import { BudgetType } from './BudgetType';
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
  OrderableEdmTypeField,
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BudgetRegisterEntryLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetRegisterEntryLines<DeSerializersT>, DeSerializersT>
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
  ): BudgetRegisterEntryLinesApi<DeSerializersT> {
    return new BudgetRegisterEntryLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link currencyCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY_CODES: OneToOneLink<
      BudgetRegisterEntryLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      BudgetRegisterEntryLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntryHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY_HEADER: OneToOneLink<
      BudgetRegisterEntryLines<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntryHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link primaryLedger} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRIMARY_LEDGER: OneToOneLink<
      BudgetRegisterEntryLines<DeSerializersT>,
      DeSerializersT,
      LedgersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CurrenciesApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      BudgetRegisterEntryHeadersApi<DeSerializersT>,
      LedgersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CURRENCY_CODES: new OneToOneLink('CurrencyCodes', this, linkedApis[0]),
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[1]
      ),
      BUDGET_REGISTER_ENTRY_HEADER: new OneToOneLink(
        'BudgetRegisterEntryHeader',
        this,
        linkedApis[2]
      ),
      PRIMARY_LEDGER: new OneToOneLink('PrimaryLedger', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = BudgetRegisterEntryLines;

  requestBuilder(): BudgetRegisterEntryLinesRequestBuilder<DeSerializersT> {
    return new BudgetRegisterEntryLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetRegisterEntryLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BudgetRegisterEntryLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetRegisterEntryLines<DeSerializersT>,
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
    typeof BudgetRegisterEntryLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetRegisterEntryLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BudgetRegisterEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      BudgetRegisterEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENTRY_NUMBER: OrderableEdmTypeField<
      BudgetRegisterEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      BudgetRegisterEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WORKFLOW_STATUS: EnumField<
      BudgetRegisterEntryLines<DeSerializers>,
      DeSerializersT,
      BudgetTransactionWorkflowStatus,
      true,
      true
    >;
    BUDGET_CHECK_RESULT: EnumField<
      BudgetRegisterEntryLines<DeSerializers>,
      DeSerializersT,
      BudgetCheckResult,
      true,
      true
    >;
    ACCOUNTING_CURRENCY_AMOUNT: OrderableEdmTypeField<
      BudgetRegisterEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIMENSION_ACCOUNT_STRUCTURE: OrderableEdmTypeField<
      BudgetRegisterEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      BudgetRegisterEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE: OrderableEdmTypeField<
      BudgetRegisterEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT: OrderableEdmTypeField<
      BudgetRegisterEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      BudgetRegisterEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      BudgetRegisterEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTRY_DATE: OrderableEdmTypeField<
      BudgetRegisterEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      BudgetRegisterEntryLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_TYPE: EnumField<
      BudgetRegisterEntryLines<DeSerializers>,
      DeSerializersT,
      BudgetType,
      true,
      true
    >;
    INCLUDE_IN_CASH_FLOW_FORECAST: EnumField<
      BudgetRegisterEntryLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currencyCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY_CODES: OneToOneLink<
      BudgetRegisterEntryLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      BudgetRegisterEntryLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntryHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY_HEADER: OneToOneLink<
      BudgetRegisterEntryLines<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntryHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link primaryLedger} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRIMARY_LEDGER: OneToOneLink<
      BudgetRegisterEntryLines<DeSerializersT>,
      DeSerializersT,
      LedgersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BudgetRegisterEntryLines<DeSerializers>>;
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
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link entryNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_NUMBER: fieldBuilder.buildEdmTypeField(
          'EntryNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link workflowStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_STATUS: fieldBuilder.buildEnumField(
          'WorkflowStatus',
          BudgetTransactionWorkflowStatus,
          true
        ),
        /**
         * Static representation of the {@link budgetCheckResult} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CHECK_RESULT: fieldBuilder.buildEnumField(
          'BudgetCheckResult',
          BudgetCheckResult,
          true
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
         * Static representation of the {@link dimensionAccountStructure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_ACCOUNT_STRUCTURE: fieldBuilder.buildEdmTypeField(
          'DimensionAccountStructure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link price} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE: fieldBuilder.buildEdmTypeField('Price', 'Edm.Decimal', false),
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
         * Static representation of the {@link dimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link comment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT: fieldBuilder.buildEdmTypeField('Comment', 'Edm.String', true),
        /**
         * Static representation of the {@link entryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_DATE: fieldBuilder.buildEdmTypeField(
          'EntryDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link amountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_TYPE: fieldBuilder.buildEnumField(
          'AmountType',
          BudgetType,
          true
        ),
        /**
         * Static representation of the {@link includeInCashFlowForecast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_IN_CASH_FLOW_FORECAST: fieldBuilder.buildEnumField(
          'IncludeInCashFlowForecast',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetRegisterEntryLines)
      };
    }

    return this._schema;
  }
}
