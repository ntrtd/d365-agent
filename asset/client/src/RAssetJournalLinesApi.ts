/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RAssetJournalLines } from './RAssetJournalLines';
import { RAssetJournalLinesRequestBuilder } from './RAssetJournalLinesRequestBuilder';
import { AssetJournalHeadersApi } from './AssetJournalHeadersApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { CurrenciesApi } from './CurrenciesApi';
import { LegalEntitiesApi } from './LegalEntitiesApi';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { RAssetTransType } from './RAssetTransType';
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
export class RAssetJournalLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RAssetJournalLines<DeSerializersT>, DeSerializersT>
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
  ): RAssetJournalLinesApi<DeSerializersT> {
    return new RAssetJournalLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_HEADER: OneToOneLink<
      RAssetJournalLines<DeSerializersT>,
      DeSerializersT,
      AssetJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rAssetJournalLineOffsetLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    R_ASSET_JOURNAL_LINE_OFFSET_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      RAssetJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rAssetJournalLineCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    R_ASSET_JOURNAL_LINE_CURRENCY: OneToOneLink<
      RAssetJournalLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      RAssetJournalLines<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rAssetJournalLineLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    R_ASSET_JOURNAL_LINE_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      RAssetJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetJournalHeadersApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      LegalEntitiesApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_JOURNAL_HEADER: new OneToOneLink(
        'AssetJournalHeader',
        this,
        linkedApis[0]
      ),
      R_ASSET_JOURNAL_LINE_OFFSET_LEDGER_DIMENSION_COMBINATION:
        new OneToOneLink(
          'RAssetJournalLineOffsetLedgerDimensionCombination',
          this,
          linkedApis[1]
        ),
      R_ASSET_JOURNAL_LINE_CURRENCY: new OneToOneLink(
        'RAssetJournalLineCurrency',
        this,
        linkedApis[2]
      ),
      LEGAL_ENTITY: new OneToOneLink('LegalEntity', this, linkedApis[3]),
      R_ASSET_JOURNAL_LINE_LEDGER_DIMENSION_COMBINATION: new OneToOneLink(
        'RAssetJournalLineLedgerDimensionCombination',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = RAssetJournalLines;

  requestBuilder(): RAssetJournalLinesRequestBuilder<DeSerializersT> {
    return new RAssetJournalLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RAssetJournalLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RAssetJournalLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RAssetJournalLines<DeSerializersT>,
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
    typeof RAssetJournalLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RAssetJournalLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RAssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      RAssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      RAssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEBIT_AMOUNT: OrderableEdmTypeField<
      RAssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREDIT_AMOUNT: OrderableEdmTypeField<
      RAssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEPRECIATION_BONUS: OrderableEdmTypeField<
      RAssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE_MODEL: OrderableEdmTypeField<
      RAssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      RAssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      RAssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      RAssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      RAssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TEXT: OrderableEdmTypeField<
      RAssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      RAssetJournalLines<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      RAssetJournalLines<DeSerializers>,
      DeSerializersT,
      RAssetTransType,
      true,
      true
    >;
    ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      RAssetJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_ACCOUNT_TYPE: EnumField<
      RAssetJournalLines<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_HEADER: OneToOneLink<
      RAssetJournalLines<DeSerializersT>,
      DeSerializersT,
      AssetJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rAssetJournalLineOffsetLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    R_ASSET_JOURNAL_LINE_OFFSET_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      RAssetJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rAssetJournalLineCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    R_ASSET_JOURNAL_LINE_CURRENCY: OneToOneLink<
      RAssetJournalLines<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      RAssetJournalLines<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rAssetJournalLineLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    R_ASSET_JOURNAL_LINE_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      RAssetJournalLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RAssetJournalLines<DeSerializers>>;
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
         * Static representation of the {@link debitAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DebitAmount',
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
         * Static representation of the {@link depreciationBonus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_BONUS: fieldBuilder.buildEdmTypeField(
          'DepreciationBonus',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
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
         * Static representation of the {@link offsetAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OffsetAccountDisplayValue',
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
         * Static representation of the {@link text} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT: fieldBuilder.buildEdmTypeField('Text', 'Edm.String', true),
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
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          RAssetTransType,
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
         * Static representation of the {@link offsetAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'OffsetAccountType',
          LedgerJournalAcType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RAssetJournalLines)
      };
    }

    return this._schema;
  }
}
