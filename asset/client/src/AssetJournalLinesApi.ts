/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetJournalLines } from './AssetJournalLines';
import { AssetJournalLinesRequestBuilder } from './AssetJournalLinesRequestBuilder';
import { AssetJournalHeadersApi } from './AssetJournalHeadersApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { VoucherTypesApi } from './VoucherTypesApi';
import { CurrenciesApi } from './CurrenciesApi';
import { LegalEntitiesApi } from './LegalEntitiesApi';
import { ValueModelSetupsApi } from './ValueModelSetupsApi';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { AssetTransTypeJournal } from './AssetTransTypeJournal';
import { AssetDocumentTypeJp } from './AssetDocumentTypeJp';
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
export class AssetJournalLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetJournalLines<DeSerializersT>, DeSerializersT>
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
  ): AssetJournalLinesApi<DeSerializersT> {
    return new AssetJournalLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_HEADER: OneToOneLink<
      AssetJournalLines<DeSerializersT>,
      DeSerializersT,
      AssetJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetJournalLineOffsetLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_LINE_OFFSET_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      AssetJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link voucherType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VOUCHER_TYPE: OneToOneLink<
      AssetJournalLines<DeSerializersT>,
      DeSerializersT,
      VoucherTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetJournalLineCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_LINE_CURRENCY: OneToOneLink<
      AssetJournalLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      AssetJournalLines<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetJournalLineLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_LINE_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      AssetJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetJournalLineValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_LINE_VALUE_MODEL: OneToOneLink<
      AssetJournalLines<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetJournalHeadersApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      VoucherTypesApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      LegalEntitiesApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      ValueModelSetupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_JOURNAL_HEADER: new OneToOneLink(
        'AssetJournalHeader',
        this,
        linkedApis[0]
      ),
      ASSET_JOURNAL_LINE_OFFSET_LEDGER_DIMENSION_COMBINATION: new OneToOneLink(
        'AssetJournalLineOffsetLedgerDimensionCombination',
        this,
        linkedApis[1]
      ),
      VOUCHER_TYPE: new OneToOneLink('VoucherType', this, linkedApis[2]),
      ASSET_JOURNAL_LINE_CURRENCY: new OneToOneLink(
        'AssetJournalLineCurrency',
        this,
        linkedApis[3]
      ),
      LEGAL_ENTITY: new OneToOneLink('LegalEntity', this, linkedApis[4]),
      ASSET_JOURNAL_LINE_LEDGER_DIMENSION_COMBINATION: new OneToOneLink(
        'AssetJournalLineLedgerDimensionCombination',
        this,
        linkedApis[5]
      ),
      ASSET_JOURNAL_LINE_VALUE_MODEL: new OneToOneLink(
        'AssetJournalLineValueModel',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = AssetJournalLines;

  requestBuilder(): AssetJournalLinesRequestBuilder<DeSerializersT> {
    return new AssetJournalLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetJournalLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AssetJournalLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AssetJournalLines<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof AssetJournalLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetJournalLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      AssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      AssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREDIT_AMOUNT: OrderableEdmTypeField<
      AssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OFFSET_ACCOUNT_TYPE: EnumField<
      AssetJournalLines<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      AssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSUMPTION_UNITS: OrderableEdmTypeField<
      AssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      AssetJournalLines<DeSerializers>,
      DeSerializersT,
      AssetTransTypeJournal,
      true,
      true
    >;
    OFFSET_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      AssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIN_TAG_DISPLAY_VALUE: OrderableEdmTypeField<
      AssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEXT: OrderableEdmTypeField<
      AssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE_MODEL: OrderableEdmTypeField<
      AssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      AssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      AssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHINESE_VOUCHER: OrderableEdmTypeField<
      AssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHINESE_VOUCHER_TYPE: OrderableEdmTypeField<
      AssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_TYPE: EnumField<
      AssetJournalLines<DeSerializers>,
      DeSerializersT,
      AssetDocumentTypeJp,
      true,
      true
    >;
    DEBIT_AMOUNT: OrderableEdmTypeField<
      AssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      AssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      AssetJournalLines<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    OFFSET_FIN_TAG_DISPLAY_VALUE: OrderableEdmTypeField<
      AssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_ID: OrderableEdmTypeField<
      AssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_AMOUNT_REPORTING_CURRENCY: OrderableEdmTypeField<
      AssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEBIT_AMOUNT_REPORTING_CURRENCY: OrderableEdmTypeField<
      AssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_HEADER: OneToOneLink<
      AssetJournalLines<DeSerializersT>,
      DeSerializersT,
      AssetJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetJournalLineOffsetLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_LINE_OFFSET_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      AssetJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link voucherType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VOUCHER_TYPE: OneToOneLink<
      AssetJournalLines<DeSerializersT>,
      DeSerializersT,
      VoucherTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetJournalLineCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_LINE_CURRENCY: OneToOneLink<
      AssetJournalLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      AssetJournalLines<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetJournalLineLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_LINE_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      AssetJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetJournalLineValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_LINE_VALUE_MODEL: OneToOneLink<
      AssetJournalLines<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetJournalLines<DeSerializers>>;
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
         * Static representation of the {@link offsetAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'OffsetAccountType',
          LedgerJournalAcType,
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
         * Static representation of the {@link consumptionUnits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_UNITS: fieldBuilder.buildEdmTypeField(
          'ConsumptionUnits',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          AssetTransTypeJournal,
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
         * Static representation of the {@link finTagDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIN_TAG_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'FinTagDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link text} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT: fieldBuilder.buildEdmTypeField('Text', 'Edm.String', true),
        /**
         * Static representation of the {@link valueModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_MODEL: fieldBuilder.buildEdmTypeField(
          'ValueModel',
          'Edm.String',
          true
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
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link chineseVoucherType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHINESE_VOUCHER_TYPE: fieldBuilder.buildEdmTypeField(
          'ChineseVoucherType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TYPE: fieldBuilder.buildEnumField(
          'DocumentType',
          AssetDocumentTypeJp,
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
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
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
         * Static representation of the {@link offsetFinTagDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_FIN_TAG_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OffsetFinTagDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_ID: fieldBuilder.buildEdmTypeField(
          'DocumentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditAmountReportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_AMOUNT_REPORTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'CreditAmountReportingCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link debitAmountReportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_AMOUNT_REPORTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'DebitAmountReportingCurrency',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetJournalLines)
      };
    }

    return this._schema;
  }
}
