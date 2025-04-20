/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetRegisterEntries } from './BudgetRegisterEntries';
import { BudgetRegisterEntriesRequestBuilder } from './BudgetRegisterEntriesRequestBuilder';
import { BudgetRegisterEntryHeadersApi } from './BudgetRegisterEntryHeadersApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { CurrenciesApi } from './CurrenciesApi';
import { BudgetModelsApi } from './BudgetModelsApi';
import { LedgersApi } from './LedgersApi';
import { BudgetCodesApi } from './BudgetCodesApi';
import { NoYes } from './NoYes';
import { BudgetTransactionType } from './BudgetTransactionType';
import { BudgetTransactionWorkflowStatus } from './BudgetTransactionWorkflowStatus';
import { BudgetTransactionStatus } from './BudgetTransactionStatus';
import { BudgetType } from './BudgetType';
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
export class BudgetRegisterEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetRegisterEntries<DeSerializersT>, DeSerializersT>
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
  ): BudgetRegisterEntriesApi<DeSerializersT> {
    return new BudgetRegisterEntriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntryHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY_HEADERS: OneToOneLink<
      BudgetRegisterEntries<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntryHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      BudgetRegisterEntries<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      BudgetRegisterEntries<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetModels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_MODELS: OneToOneLink<
      BudgetRegisterEntries<DeSerializersT>,
      DeSerializersT,
      BudgetModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledger} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER: OneToOneLink<
      BudgetRegisterEntries<DeSerializersT>,
      DeSerializersT,
      LedgersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CODES: OneToOneLink<
      BudgetRegisterEntries<DeSerializersT>,
      DeSerializersT,
      BudgetCodesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BudgetRegisterEntryHeadersApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      BudgetModelsApi<DeSerializersT>,
      LedgersApi<DeSerializersT>,
      BudgetCodesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUDGET_REGISTER_ENTRY_HEADERS: new OneToOneLink(
        'BudgetRegisterEntryHeaders',
        this,
        linkedApis[0]
      ),
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[1]
      ),
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[2]),
      BUDGET_MODELS: new OneToOneLink('BudgetModels', this, linkedApis[3]),
      LEDGER: new OneToOneLink('Ledger', this, linkedApis[4]),
      BUDGET_CODES: new OneToOneLink('BudgetCodes', this, linkedApis[5])
    };
    return this;
  }

  entityConstructor = BudgetRegisterEntries;

  requestBuilder(): BudgetRegisterEntriesRequestBuilder<DeSerializersT> {
    return new BudgetRegisterEntriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetRegisterEntries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BudgetRegisterEntries<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetRegisterEntries<DeSerializersT>,
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
    typeof BudgetRegisterEntries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetRegisterEntries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BudgetRegisterEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENTRY_NUMBER: OrderableEdmTypeField<
      BudgetRegisterEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      BudgetRegisterEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      BudgetRegisterEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNTING_CURRENCY_AMOUNT: OrderableEdmTypeField<
      BudgetRegisterEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DATE: OrderableEdmTypeField<
      BudgetRegisterEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ONE_TIME_REVISION: EnumField<
      BudgetRegisterEntries<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DIMENSION_ACCOUNT_STRUCTURE: OrderableEdmTypeField<
      BudgetRegisterEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_COMMENT: OrderableEdmTypeField<
      BudgetRegisterEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_CODE: OrderableEdmTypeField<
      BudgetRegisterEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      BudgetRegisterEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE: OrderableEdmTypeField<
      BudgetRegisterEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BUDGET_TYPE: EnumField<
      BudgetRegisterEntries<DeSerializers>,
      DeSerializersT,
      BudgetTransactionType,
      true,
      true
    >;
    LINE_WORKFLOW_STATUS: EnumField<
      BudgetRegisterEntries<DeSerializers>,
      DeSerializersT,
      BudgetTransactionWorkflowStatus,
      true,
      true
    >;
    BUDGET_MODEL_ID: OrderableEdmTypeField<
      BudgetRegisterEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT: OrderableEdmTypeField<
      BudgetRegisterEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      BudgetRegisterEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      BudgetRegisterEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_CODE: OrderableEdmTypeField<
      BudgetRegisterEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      BudgetRegisterEntries<DeSerializers>,
      DeSerializersT,
      BudgetTransactionStatus,
      true,
      true
    >;
    DOCUMENT_WORKFLOW_STATUS: EnumField<
      BudgetRegisterEntries<DeSerializers>,
      DeSerializersT,
      BudgetTransactionWorkflowStatus,
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      BudgetRegisterEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_TYPE: EnumField<
      BudgetRegisterEntries<DeSerializers>,
      DeSerializersT,
      BudgetType,
      true,
      true
    >;
    INCLUDE_IN_CASH_FLOW_FORECAST: EnumField<
      BudgetRegisterEntries<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntryHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY_HEADERS: OneToOneLink<
      BudgetRegisterEntries<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntryHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      BudgetRegisterEntries<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      BudgetRegisterEntries<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetModels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_MODELS: OneToOneLink<
      BudgetRegisterEntries<DeSerializersT>,
      DeSerializersT,
      BudgetModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledger} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER: OneToOneLink<
      BudgetRegisterEntries<DeSerializersT>,
      DeSerializersT,
      LedgersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CODES: OneToOneLink<
      BudgetRegisterEntries<DeSerializersT>,
      DeSerializersT,
      BudgetCodesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BudgetRegisterEntries<DeSerializers>>;
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
         * Static representation of the {@link entryNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_NUMBER: fieldBuilder.buildEdmTypeField(
          'EntryNumber',
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
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
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
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField(
          'Date',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link oneTimeRevision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONE_TIME_REVISION: fieldBuilder.buildEnumField(
          'OneTimeRevision',
          NoYes,
          true
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
         * Static representation of the {@link reasonComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_COMMENT: fieldBuilder.buildEdmTypeField(
          'ReasonComment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE: fieldBuilder.buildEdmTypeField(
          'ReasonCode',
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
         * Static representation of the {@link budgetType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_TYPE: fieldBuilder.buildEnumField(
          'BudgetType',
          BudgetTransactionType,
          true
        ),
        /**
         * Static representation of the {@link lineWorkflowStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_WORKFLOW_STATUS: fieldBuilder.buildEnumField(
          'LineWorkflowStatus',
          BudgetTransactionWorkflowStatus,
          true
        ),
        /**
         * Static representation of the {@link budgetModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'BudgetModelId',
          'Edm.String',
          true
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
         * Static representation of the {@link budgetCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CODE: fieldBuilder.buildEdmTypeField(
          'BudgetCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          BudgetTransactionStatus,
          true
        ),
        /**
         * Static representation of the {@link documentWorkflowStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_WORKFLOW_STATUS: fieldBuilder.buildEnumField(
          'DocumentWorkflowStatus',
          BudgetTransactionWorkflowStatus,
          true
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
        ALL_FIELDS: new AllFields('*', BudgetRegisterEntries)
      };
    }

    return this._schema;
  }
}
