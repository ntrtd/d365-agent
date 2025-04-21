/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerJournalLines } from './LedgerJournalLines';
import { LedgerJournalLinesRequestBuilder } from './LedgerJournalLinesRequestBuilder';
import { CurrenciesApi } from './CurrenciesApi';
import { LegalEntitiesApi } from './LegalEntitiesApi';
import { TaxGroupsApi } from './TaxGroupsApi';
import { TaxItemGroupHeadingsApi } from './TaxItemGroupHeadingsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { LedgerJournalHeadersApi } from './LedgerJournalHeadersApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { VoucherTypesApi } from './VoucherTypesApi';
import { NoYes } from './NoYes';
import { LedgerJournalAcType } from './LedgerJournalAcType';
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
export class LedgerJournalLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LedgerJournalLines<DeSerializersT>, DeSerializersT>
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
  ): LedgerJournalLinesApi<DeSerializersT> {
    return new LedgerJournalLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CURRENCY: OneToOneLink<
      LedgerJournalLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_COMPANY: OneToOneLink<
      LedgerJournalLines<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineSalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_SALES_TAX_GROUP: OneToOneLink<
      LedgerJournalLines<DeSerializersT>,
      DeSerializersT,
      TaxGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineOffsetCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_OFFSET_COMPANY: OneToOneLink<
      LedgerJournalLines<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineItemSalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_ITEM_SALES_TAX_GROUP: OneToOneLink<
      LedgerJournalLines<DeSerializersT>,
      DeSerializersT,
      TaxItemGroupHeadingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineDefaultDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_DEFAULT_DIMENSION: OneToOneLink<
      LedgerJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      LedgerJournalLines<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineOffsetDefaultDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_OFFSET_DEFAULT_DIMENSION: OneToOneLink<
      LedgerJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_HEADER: OneToOneLink<
      LedgerJournalLines<DeSerializersT>,
      DeSerializersT,
      LedgerJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineOffsetLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_OFFSET_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      LedgerJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      LedgerJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link voucherType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VOUCHER_TYPE: OneToOneLink<
      LedgerJournalLines<DeSerializersT>,
      DeSerializersT,
      VoucherTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CurrenciesApi<DeSerializersT>,
      LegalEntitiesApi<DeSerializersT>,
      TaxGroupsApi<DeSerializersT>,
      LegalEntitiesApi<DeSerializersT>,
      TaxItemGroupHeadingsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      LegalEntitiesApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      LedgerJournalHeadersApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      VoucherTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEDGER_JOURNAL_LINE_CURRENCY: new OneToOneLink(
        'LedgerJournalLineCurrency',
        this,
        linkedApis[0]
      ),
      LEDGER_JOURNAL_LINE_COMPANY: new OneToOneLink(
        'LedgerJournalLineCompany',
        this,
        linkedApis[1]
      ),
      LEDGER_JOURNAL_LINE_SALES_TAX_GROUP: new OneToOneLink(
        'LedgerJournalLineSalesTaxGroup',
        this,
        linkedApis[2]
      ),
      LEDGER_JOURNAL_LINE_OFFSET_COMPANY: new OneToOneLink(
        'LedgerJournalLineOffsetCompany',
        this,
        linkedApis[3]
      ),
      LEDGER_JOURNAL_LINE_ITEM_SALES_TAX_GROUP: new OneToOneLink(
        'LedgerJournalLineItemSalesTaxGroup',
        this,
        linkedApis[4]
      ),
      LEDGER_JOURNAL_LINE_DEFAULT_DIMENSION: new OneToOneLink(
        'LedgerJournalLineDefaultDimension',
        this,
        linkedApis[5]
      ),
      LEGAL_ENTITY: new OneToOneLink('LegalEntity', this, linkedApis[6]),
      LEDGER_JOURNAL_LINE_OFFSET_DEFAULT_DIMENSION: new OneToOneLink(
        'LedgerJournalLineOffsetDefaultDimension',
        this,
        linkedApis[7]
      ),
      LEDGER_JOURNAL_HEADER: new OneToOneLink(
        'LedgerJournalHeader',
        this,
        linkedApis[8]
      ),
      LEDGER_JOURNAL_LINE_OFFSET_LEDGER_DIMENSION_COMBINATION: new OneToOneLink(
        'LedgerJournalLineOffsetLedgerDimensionCombination',
        this,
        linkedApis[9]
      ),
      LEDGER_JOURNAL_LINE_LEDGER_DIMENSION_COMBINATION: new OneToOneLink(
        'LedgerJournalLineLedgerDimensionCombination',
        this,
        linkedApis[10]
      ),
      VOUCHER_TYPE: new OneToOneLink('VoucherType', this, linkedApis[11])
    };
    return this;
  }

  entityConstructor = LedgerJournalLines;

  requestBuilder(): LedgerJournalLinesRequestBuilder<DeSerializersT> {
    return new LedgerJournalLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LedgerJournalLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LedgerJournalLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LedgerJournalLines<DeSerializersT>,
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
    typeof LedgerJournalLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerJournalLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REVERSE_ENTRY: EnumField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_DATE: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEXT: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_ACCOUNT_TYPE: EnumField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    IS_WITHHOLDING_CALCULATION_ENABLED: EnumField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REVERSE_DATE: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_REFERENCE: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCH_RATE: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CHINESE_VOUCHER_TYPE: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEBIT_AMOUNT: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_TAX_CODE: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OFFSET_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_FIN_TAG_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    INVOICE: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REPORTING_CURRENCY_EXCH_RATE: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIN_TAG_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_METHOD: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_ID: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCH_RATE_SECOND: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREDIT_AMOUNT: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OFFSET_COMPANY: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_WITHHOLDING_TAX_GROUP_CODE: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_EXEMPT_NUMBER: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CURRENCY_EXCH_RATE_SECONDARY: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHINESE_VOUCHER: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OFFSET_TEXT: OrderableEdmTypeField<
      LedgerJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CURRENCY: OneToOneLink<
      LedgerJournalLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_COMPANY: OneToOneLink<
      LedgerJournalLines<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineSalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_SALES_TAX_GROUP: OneToOneLink<
      LedgerJournalLines<DeSerializersT>,
      DeSerializersT,
      TaxGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineOffsetCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_OFFSET_COMPANY: OneToOneLink<
      LedgerJournalLines<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineItemSalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_ITEM_SALES_TAX_GROUP: OneToOneLink<
      LedgerJournalLines<DeSerializersT>,
      DeSerializersT,
      TaxItemGroupHeadingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineDefaultDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_DEFAULT_DIMENSION: OneToOneLink<
      LedgerJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      LedgerJournalLines<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineOffsetDefaultDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_OFFSET_DEFAULT_DIMENSION: OneToOneLink<
      LedgerJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_HEADER: OneToOneLink<
      LedgerJournalLines<DeSerializersT>,
      DeSerializersT,
      LedgerJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineOffsetLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_OFFSET_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      LedgerJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      LedgerJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link voucherType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VOUCHER_TYPE: OneToOneLink<
      LedgerJournalLines<DeSerializersT>,
      DeSerializersT,
      VoucherTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LedgerJournalLines<DeSerializers>>;
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
         * Static representation of the {@link reverseEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_ENTRY: fieldBuilder.buildEnumField('ReverseEntry', NoYes, true),
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
         * Static representation of the {@link text} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT: fieldBuilder.buildEdmTypeField('Text', 'Edm.String', true),
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
         * Static representation of the {@link isWithholdingCalculationEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WITHHOLDING_CALCULATION_ENABLED: fieldBuilder.buildEnumField(
          'IsWithholdingCalculationEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reverseDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_DATE: fieldBuilder.buildEdmTypeField(
          'ReverseDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'TransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_REFERENCE: fieldBuilder.buildEdmTypeField(
          'PaymentReference',
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
         * Static representation of the {@link exchRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_RATE: fieldBuilder.buildEdmTypeField(
          'ExchRate',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link offsetDefaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OffsetDefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offsetFinTagDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_FIN_TAG_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OffsetFinTagDisplayValue',
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
         * Static representation of the {@link reportingCurrencyExchRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_EXCH_RATE: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyExchRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link finTagDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIN_TAG_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'FinTagDisplayValue',
          'Edm.String',
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
         * Static representation of the {@link postingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PostingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exchRateSecond} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_RATE_SECOND: fieldBuilder.buildEdmTypeField(
          'ExchRateSecond',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link itemWithholdingTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_WITHHOLDING_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'ItemWithholdingTaxGroupCode',
          'Edm.String',
          true
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
         * Static representation of the {@link reportingCurrencyExchRateSecondary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_EXCH_RATE_SECONDARY: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyExchRateSecondary',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
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
         * Static representation of the {@link discountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'DiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link offsetText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_TEXT: fieldBuilder.buildEdmTypeField(
          'OffsetText',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LedgerJournalLines)
      };
    }

    return this._schema;
  }
}
