/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpenseJournalLines } from './ExpenseJournalLines';
import { ExpenseJournalLinesRequestBuilder } from './ExpenseJournalLinesRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { CurrenciesApi } from './CurrenciesApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { LegalEntitiesApi } from './LegalEntitiesApi';
import { ExpenseJournalHeadersApi } from './ExpenseJournalHeadersApi';
import { ProjectLinePropertiesApi } from './ProjectLinePropertiesApi';
import { VoucherTypesApi } from './VoucherTypesApi';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { LedgerTransType } from './LedgerTransType';
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
export class ExpenseJournalLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExpenseJournalLines<DeSerializersT>, DeSerializersT>
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
  ): ExpenseJournalLinesApi<DeSerializersT> {
    return new ExpenseJournalLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link projExpenseJournalLineOffsetLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJ_EXPENSE_JOURNAL_LINE_OFFSET_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      ExpenseJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projExpenseJournalLineLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJ_EXPENSE_JOURNAL_LINE_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      ExpenseJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectExpenseJournalLineCurrencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_EXPENSE_JOURNAL_LINE_CURRENCIES: OneToOneLink<
      ExpenseJournalLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link expenseJournalLineDefaultDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_JOURNAL_LINE_DEFAULT_DIMENSION: OneToOneLink<
      ExpenseJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      ExpenseJournalLines<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link expenseJournalLineOffsetDefaultDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_JOURNAL_LINE_OFFSET_DEFAULT_DIMENSION: OneToOneLink<
      ExpenseJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link expenseJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_JOURNAL_HEADER: OneToOneLink<
      ExpenseJournalLines<DeSerializersT>,
      DeSerializersT,
      ExpenseJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projExpenseJournalLineProperties} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJ_EXPENSE_JOURNAL_LINE_PROPERTIES: OneToOneLink<
      ExpenseJournalLines<DeSerializersT>,
      DeSerializersT,
      ProjectLinePropertiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link voucherType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VOUCHER_TYPE: OneToOneLink<
      ExpenseJournalLines<DeSerializersT>,
      DeSerializersT,
      VoucherTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      LegalEntitiesApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      ExpenseJournalHeadersApi<DeSerializersT>,
      ProjectLinePropertiesApi<DeSerializersT>,
      VoucherTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PROJ_EXPENSE_JOURNAL_LINE_OFFSET_LEDGER_DIMENSION_COMBINATION:
        new OneToOneLink(
          'ProjExpenseJournalLineOffsetLedgerDimensionCombination',
          this,
          linkedApis[0]
        ),
      PROJ_EXPENSE_JOURNAL_LINE_LEDGER_DIMENSION_COMBINATION: new OneToOneLink(
        'ProjExpenseJournalLineLedgerDimensionCombination',
        this,
        linkedApis[1]
      ),
      PROJECT_EXPENSE_JOURNAL_LINE_CURRENCIES: new OneToOneLink(
        'ProjectExpenseJournalLineCurrencies',
        this,
        linkedApis[2]
      ),
      EXPENSE_JOURNAL_LINE_DEFAULT_DIMENSION: new OneToOneLink(
        'ExpenseJournalLineDefaultDimension',
        this,
        linkedApis[3]
      ),
      LEGAL_ENTITY: new OneToOneLink('LegalEntity', this, linkedApis[4]),
      EXPENSE_JOURNAL_LINE_OFFSET_DEFAULT_DIMENSION: new OneToOneLink(
        'ExpenseJournalLineOffsetDefaultDimension',
        this,
        linkedApis[5]
      ),
      EXPENSE_JOURNAL_HEADER: new OneToOneLink(
        'ExpenseJournalHeader',
        this,
        linkedApis[6]
      ),
      PROJ_EXPENSE_JOURNAL_LINE_PROPERTIES: new OneToOneLink(
        'ProjExpenseJournalLineProperties',
        this,
        linkedApis[7]
      ),
      VOUCHER_TYPE: new OneToOneLink('VoucherType', this, linkedApis[8])
    };
    return this;
  }

  entityConstructor = ExpenseJournalLines;

  requestBuilder(): ExpenseJournalLinesRequestBuilder<DeSerializersT> {
    return new ExpenseJournalLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpenseJournalLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExpenseJournalLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExpenseJournalLines<DeSerializersT>,
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
    typeof ExpenseJournalLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpenseJournalLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_DATE: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_COST_QUANTITY: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TEXT: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_ACCOUNT_TYPE: EnumField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    RESOURCE_COMPANY_ID: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_TAX_ITEM_GROUP_SALES: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER_DATE: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_TAX_GROUP_SALES: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVED_BY: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_LINE_PROPERTY: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      LedgerTransType,
      true,
      true
    >;
    CHINESE_VOUCHER_TYPE: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEBIT_AMOUNT: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_TAX_CODE: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJECT_SALES_PRICE: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECT_CATEGORY: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESOURCE_ID: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_TRANSACTION_TEXT: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_SPECIFICATION: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_SALES_CURRENCY_CODE: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTUAL_SALES_TAX_AMOUNT: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    INVOICE: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJECT_DATE: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_REVERSING_ENTRY: EnumField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_METHOD: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_ID: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_COST_PRICE: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_EXCEMPT_NUMBER: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_AMOUNT: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OFFSET_COMPANY: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELAY_TAX_CALCULATION: EnumField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SECONDARY_EXCHANGE_RATE: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    APPROVED: EnumField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHINESE_VOUCHER: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVERSING_DATE: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACCOUNT_COMPANY: OrderableEdmTypeField<
      ExpenseJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projExpenseJournalLineOffsetLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJ_EXPENSE_JOURNAL_LINE_OFFSET_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      ExpenseJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projExpenseJournalLineLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJ_EXPENSE_JOURNAL_LINE_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      ExpenseJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectExpenseJournalLineCurrencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_EXPENSE_JOURNAL_LINE_CURRENCIES: OneToOneLink<
      ExpenseJournalLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link expenseJournalLineDefaultDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_JOURNAL_LINE_DEFAULT_DIMENSION: OneToOneLink<
      ExpenseJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      ExpenseJournalLines<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link expenseJournalLineOffsetDefaultDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_JOURNAL_LINE_OFFSET_DEFAULT_DIMENSION: OneToOneLink<
      ExpenseJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link expenseJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_JOURNAL_HEADER: OneToOneLink<
      ExpenseJournalLines<DeSerializersT>,
      DeSerializersT,
      ExpenseJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projExpenseJournalLineProperties} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJ_EXPENSE_JOURNAL_LINE_PROPERTIES: OneToOneLink<
      ExpenseJournalLines<DeSerializersT>,
      DeSerializersT,
      ProjectLinePropertiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link voucherType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VOUCHER_TYPE: OneToOneLink<
      ExpenseJournalLines<DeSerializersT>,
      DeSerializersT,
      VoucherTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExpenseJournalLines<DeSerializers>>;
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
         * Static representation of the {@link journalBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalBatchNumber',
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
         * Static representation of the {@link itemSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'ItemSalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashDiscountDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_DATE: fieldBuilder.buildEdmTypeField(
          'CashDiscountDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link projectCostQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_COST_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ProjectCostQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link text} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT: fieldBuilder.buildEdmTypeField('Text', 'Edm.String', true),
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
         * Static representation of the {@link offsetAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'OffsetAccountType',
          LedgerJournalAcType,
          true
        ),
        /**
         * Static representation of the {@link resourceCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'ResourceCompanyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectTaxItemGroupSales} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_TAX_ITEM_GROUP_SALES: fieldBuilder.buildEdmTypeField(
          'ProjectTaxItemGroupSales',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucherDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_DATE: fieldBuilder.buildEdmTypeField(
          'VoucherDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link activityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ActivityNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectTaxGroupSales} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_TAX_GROUP_SALES: fieldBuilder.buildEdmTypeField(
          'ProjectTaxGroupSales',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link approvedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVED_BY: fieldBuilder.buildEdmTypeField(
          'ApprovedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectLineProperty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_LINE_PROPERTY: fieldBuilder.buildEdmTypeField(
          'ProjectLineProperty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link document} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT: fieldBuilder.buildEdmTypeField(
          'Document',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CashDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          LedgerTransType,
          true
        ),
        /**
         * Static representation of the {@link chineseVoucherType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHINESE_VOUCHER_TYPE: fieldBuilder.buildEdmTypeField(
          'ChineseVoucherType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link debitAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DebitAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'DocumentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projectSalesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'ProjectSalesPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projectCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ProjectCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offsetAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OffsetAccountDisplayValue',
          'Edm.String',
          true
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
         * Static representation of the {@link cashDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'CashDiscount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link resourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'ResourceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offsetDefaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OffsetDefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offsetTransactionText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_TRANSACTION_TEXT: fieldBuilder.buildEdmTypeField(
          'OffsetTransactionText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentSpecification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SPECIFICATION: fieldBuilder.buildEdmTypeField(
          'PaymentSpecification',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectSalesCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_SALES_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'ProjectSalesCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link actualSalesTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_SALES_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ActualSalesTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          LedgerJournalAcType,
          true
        ),
        /**
         * Static representation of the {@link invoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE: fieldBuilder.buildEdmTypeField('Invoice', 'Edm.String', true),
        /**
         * Static representation of the {@link dueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE: fieldBuilder.buildEdmTypeField(
          'DueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projectDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_DATE: fieldBuilder.buildEdmTypeField(
          'ProjectDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link exchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isReversingEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REVERSING_ENTRY: fieldBuilder.buildEnumField(
          'IsReversingEntry',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link paymentMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD: fieldBuilder.buildEdmTypeField(
          'PaymentMethod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_ID: fieldBuilder.buildEdmTypeField(
          'PaymentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT: fieldBuilder.buildEdmTypeField('Payment', 'Edm.String', true),
        /**
         * Static representation of the {@link projectCostPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_COST_PRICE: fieldBuilder.buildEdmTypeField(
          'ProjectCostPrice',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link taxExcemptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXCEMPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaxExcemptNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CreditAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link overrideSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_SALES_TAX: fieldBuilder.buildEnumField(
          'OverrideSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link offsetCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_COMPANY: fieldBuilder.buildEdmTypeField(
          'OffsetCompany',
          'Edm.String',
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
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
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
         * Static representation of the {@link delayTaxCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELAY_TAX_CALCULATION: fieldBuilder.buildEnumField(
          'DelayTaxCalculation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link secondaryExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECONDARY_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'SecondaryExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link approved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVED: fieldBuilder.buildEnumField('Approved', NoYes, true),
        /**
         * Static representation of the {@link chineseVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHINESE_VOUCHER: fieldBuilder.buildEdmTypeField(
          'ChineseVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reversingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSING_DATE: fieldBuilder.buildEdmTypeField(
          'ReversingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link accountCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_COMPANY: fieldBuilder.buildEdmTypeField(
          'AccountCompany',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpenseJournalLines)
      };
    }

    return this._schema;
  }
}
