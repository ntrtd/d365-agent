/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerReportingCurrencyAdjustmentJournalLines } from './LedgerReportingCurrencyAdjustmentJournalLines';
import { LedgerReportingCurrencyAdjustmentJournalLinesRequestBuilder } from './LedgerReportingCurrencyAdjustmentJournalLinesRequestBuilder';
import { LegalEntitiesApi } from './LegalEntitiesApi';
import { CurrenciesApi } from './CurrenciesApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { LedgerReportingCurrencyAdjustmentJournalHeadersApi } from './LedgerReportingCurrencyAdjustmentJournalHeadersApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class LedgerReportingCurrencyAdjustmentJournalLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      LedgerReportingCurrencyAdjustmentJournalLines<DeSerializersT>,
      DeSerializersT
    >
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
  ): LedgerReportingCurrencyAdjustmentJournalLinesApi<DeSerializersT> {
    return new LedgerReportingCurrencyAdjustmentJournalLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link ledgerReportingCurrencyAdjustmentJournalLineCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_LINE_COMPANY: OneToOneLink<
      LedgerReportingCurrencyAdjustmentJournalLines<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerReportingCurrencyAdjustmentJournalLineCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_LINE_CURRENCY: OneToOneLink<
      LedgerReportingCurrencyAdjustmentJournalLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      LedgerReportingCurrencyAdjustmentJournalLines<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerReportingCurrencyAdjustmentJournalLineLedgerDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_LINE_LEDGER_DIMENSION: OneToOneLink<
      LedgerReportingCurrencyAdjustmentJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerReportingCurrencyAdjustmentJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_HEADER: OneToOneLink<
      LedgerReportingCurrencyAdjustmentJournalLines<DeSerializersT>,
      DeSerializersT,
      LedgerReportingCurrencyAdjustmentJournalHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LegalEntitiesApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      LegalEntitiesApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      LedgerReportingCurrencyAdjustmentJournalHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_LINE_COMPANY:
        new OneToOneLink(
          'LedgerReportingCurrencyAdjustmentJournalLineCompany',
          this,
          linkedApis[0]
        ),
      LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_LINE_CURRENCY:
        new OneToOneLink(
          'LedgerReportingCurrencyAdjustmentJournalLineCurrency',
          this,
          linkedApis[1]
        ),
      LEGAL_ENTITY: new OneToOneLink('LegalEntity', this, linkedApis[2]),
      LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_LINE_LEDGER_DIMENSION:
        new OneToOneLink(
          'LedgerReportingCurrencyAdjustmentJournalLineLedgerDimension',
          this,
          linkedApis[3]
        ),
      LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_HEADER: new OneToOneLink(
        'LedgerReportingCurrencyAdjustmentJournalHeader',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = LedgerReportingCurrencyAdjustmentJournalLines;

  requestBuilder(): LedgerReportingCurrencyAdjustmentJournalLinesRequestBuilder<DeSerializersT> {
    return new LedgerReportingCurrencyAdjustmentJournalLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LedgerReportingCurrencyAdjustmentJournalLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LedgerReportingCurrencyAdjustmentJournalLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LedgerReportingCurrencyAdjustmentJournalLines<DeSerializersT>,
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
    typeof LedgerReportingCurrencyAdjustmentJournalLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerReportingCurrencyAdjustmentJournalLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LedgerReportingCurrencyAdjustmentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      LedgerReportingCurrencyAdjustmentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      LedgerReportingCurrencyAdjustmentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREDIT_AMOUNT: OrderableEdmTypeField<
      LedgerReportingCurrencyAdjustmentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEBIT_AMOUNT: OrderableEdmTypeField<
      LedgerReportingCurrencyAdjustmentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      LedgerReportingCurrencyAdjustmentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_NAME: OrderableEdmTypeField<
      LedgerReportingCurrencyAdjustmentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      LedgerReportingCurrencyAdjustmentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      LedgerReportingCurrencyAdjustmentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      LedgerReportingCurrencyAdjustmentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TEXT: OrderableEdmTypeField<
      LedgerReportingCurrencyAdjustmentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerReportingCurrencyAdjustmentJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerReportingCurrencyAdjustmentJournalLineCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_LINE_COMPANY: OneToOneLink<
      LedgerReportingCurrencyAdjustmentJournalLines<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerReportingCurrencyAdjustmentJournalLineCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_LINE_CURRENCY: OneToOneLink<
      LedgerReportingCurrencyAdjustmentJournalLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      LedgerReportingCurrencyAdjustmentJournalLines<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerReportingCurrencyAdjustmentJournalLineLedgerDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_LINE_LEDGER_DIMENSION: OneToOneLink<
      LedgerReportingCurrencyAdjustmentJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerReportingCurrencyAdjustmentJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_HEADER: OneToOneLink<
      LedgerReportingCurrencyAdjustmentJournalLines<DeSerializersT>,
      DeSerializersT,
      LedgerReportingCurrencyAdjustmentJournalHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      LedgerReportingCurrencyAdjustmentJournalLines<DeSerializers>
    >;
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
         * Static representation of the {@link creditAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CreditAmount',
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'JournalName',
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
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
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
         * Static representation of the {@link text} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT: fieldBuilder.buildEdmTypeField('Text', 'Edm.String', true),
        /**
         * Static representation of the {@link accountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'AccountDisplayValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          LedgerReportingCurrencyAdjustmentJournalLines
        )
      };
    }

    return this._schema;
  }
}
