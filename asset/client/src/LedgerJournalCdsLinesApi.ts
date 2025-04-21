/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerJournalCdsLines } from './LedgerJournalCdsLines';
import { LedgerJournalCdsLinesRequestBuilder } from './LedgerJournalCdsLinesRequestBuilder';
import { CurrenciesApi } from './CurrenciesApi';
import { LegalEntitiesApi } from './LegalEntitiesApi';
import { TaxGroupsApi } from './TaxGroupsApi';
import { TaxItemGroupHeadingsApi } from './TaxItemGroupHeadingsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { LedgerJournalHeadersCdsApi } from './LedgerJournalHeadersCdsApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
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
export class LedgerJournalCdsLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LedgerJournalCdsLines<DeSerializersT>, DeSerializersT>
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
  ): LedgerJournalCdsLinesApi<DeSerializersT> {
    return new LedgerJournalCdsLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCdsCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_CURRENCY: OneToOneLink<
      LedgerJournalCdsLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCdsCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_COMPANY: OneToOneLink<
      LedgerJournalCdsLines<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCdsSalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_SALES_TAX_GROUP: OneToOneLink<
      LedgerJournalCdsLines<DeSerializersT>,
      DeSerializersT,
      TaxGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCdsOffsetCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_OFFSET_COMPANY: OneToOneLink<
      LedgerJournalCdsLines<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCdsItemSalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_ITEM_SALES_TAX_GROUP: OneToOneLink<
      LedgerJournalCdsLines<DeSerializersT>,
      DeSerializersT,
      TaxItemGroupHeadingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCdsDefaultDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_DEFAULT_DIMENSION: OneToOneLink<
      LedgerJournalCdsLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntityCds} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY_CDS: OneToOneLink<
      LedgerJournalCdsLines<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCdsOffsetDefaultDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_OFFSET_DEFAULT_DIMENSION: OneToOneLink<
      LedgerJournalCdsLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalHeaderCds} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_HEADER_CDS: OneToOneLink<
      LedgerJournalCdsLines<DeSerializersT>,
      DeSerializersT,
      LedgerJournalHeadersCdsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCdsOffsetLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_OFFSET_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      LedgerJournalCdsLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCdsLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      LedgerJournalCdsLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
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
      LedgerJournalHeadersCdsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEDGER_JOURNAL_LINE_CDS_CURRENCY: new OneToOneLink(
        'LedgerJournalLineCDSCurrency',
        this,
        linkedApis[0]
      ),
      LEDGER_JOURNAL_LINE_CDS_COMPANY: new OneToOneLink(
        'LedgerJournalLineCDSCompany',
        this,
        linkedApis[1]
      ),
      LEDGER_JOURNAL_LINE_CDS_SALES_TAX_GROUP: new OneToOneLink(
        'LedgerJournalLineCDSSalesTaxGroup',
        this,
        linkedApis[2]
      ),
      LEDGER_JOURNAL_LINE_CDS_OFFSET_COMPANY: new OneToOneLink(
        'LedgerJournalLineCDSOffsetCompany',
        this,
        linkedApis[3]
      ),
      LEDGER_JOURNAL_LINE_CDS_ITEM_SALES_TAX_GROUP: new OneToOneLink(
        'LedgerJournalLineCDSItemSalesTaxGroup',
        this,
        linkedApis[4]
      ),
      LEDGER_JOURNAL_LINE_CDS_DEFAULT_DIMENSION: new OneToOneLink(
        'LedgerJournalLineCDSDefaultDimension',
        this,
        linkedApis[5]
      ),
      LEGAL_ENTITY_CDS: new OneToOneLink('LegalEntityCDS', this, linkedApis[6]),
      LEDGER_JOURNAL_LINE_CDS_OFFSET_DEFAULT_DIMENSION: new OneToOneLink(
        'LedgerJournalLineCDSOffsetDefaultDimension',
        this,
        linkedApis[7]
      ),
      LEDGER_JOURNAL_HEADER_CDS: new OneToOneLink(
        'LedgerJournalHeaderCDS',
        this,
        linkedApis[8]
      ),
      LEDGER_JOURNAL_LINE_CDS_OFFSET_LEDGER_DIMENSION_COMBINATION:
        new OneToOneLink(
          'LedgerJournalLineCDSOffsetLedgerDimensionCombination',
          this,
          linkedApis[9]
        ),
      LEDGER_JOURNAL_LINE_CDS_LEDGER_DIMENSION_COMBINATION: new OneToOneLink(
        'LedgerJournalLineCDSLedgerDimensionCombination',
        this,
        linkedApis[10]
      )
    };
    return this;
  }

  entityConstructor = LedgerJournalCdsLines;

  requestBuilder(): LedgerJournalCdsLinesRequestBuilder<DeSerializersT> {
    return new LedgerJournalCdsLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LedgerJournalCdsLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LedgerJournalCdsLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LedgerJournalCdsLines<DeSerializersT>,
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
    typeof LedgerJournalCdsLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerJournalCdsLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTEGRATION_COMPUTED_KEY: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REVERSE_ENTRY: EnumField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_DATE: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEXT: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_ACCOUNT_TYPE: EnumField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    REVERSE_DATE: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_REFERENCE: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCH_RATE: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEBIT_AMOUNT: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_TAX_CODE: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OFFSET_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    INVOICE: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REPORTING_CURRENCY_EXCH_RATE: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYMENT_METHOD: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_ID: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCH_RATE_SECOND: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREDIT_AMOUNT: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_COMPANY: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_EXEMPT_NUMBER: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CURRENCY_EXCH_RATE_SECONDARY: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OFFSET_TEXT: OrderableEdmTypeField<
      LedgerJournalCdsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCdsCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_CURRENCY: OneToOneLink<
      LedgerJournalCdsLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCdsCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_COMPANY: OneToOneLink<
      LedgerJournalCdsLines<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCdsSalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_SALES_TAX_GROUP: OneToOneLink<
      LedgerJournalCdsLines<DeSerializersT>,
      DeSerializersT,
      TaxGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCdsOffsetCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_OFFSET_COMPANY: OneToOneLink<
      LedgerJournalCdsLines<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCdsItemSalesTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_ITEM_SALES_TAX_GROUP: OneToOneLink<
      LedgerJournalCdsLines<DeSerializersT>,
      DeSerializersT,
      TaxItemGroupHeadingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCdsDefaultDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_DEFAULT_DIMENSION: OneToOneLink<
      LedgerJournalCdsLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntityCds} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY_CDS: OneToOneLink<
      LedgerJournalCdsLines<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCdsOffsetDefaultDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_OFFSET_DEFAULT_DIMENSION: OneToOneLink<
      LedgerJournalCdsLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalHeaderCds} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_HEADER_CDS: OneToOneLink<
      LedgerJournalCdsLines<DeSerializersT>,
      DeSerializersT,
      LedgerJournalHeadersCdsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCdsOffsetLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_OFFSET_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      LedgerJournalCdsLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerJournalLineCdsLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE_CDS_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      LedgerJournalCdsLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LedgerJournalCdsLines<DeSerializers>>;
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
         * Static representation of the {@link integrationComputedKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEGRATION_COMPUTED_KEY: fieldBuilder.buildEdmTypeField(
          'IntegrationComputedKey',
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
         * Static representation of the {@link journalBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalBatchNumber',
          'Edm.String',
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
        ALL_FIELDS: new AllFields('*', LedgerJournalCdsLines)
      };
    }

    return this._schema;
  }
}
