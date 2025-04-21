/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GeneralJournalAccountEntryBiEntities } from './GeneralJournalAccountEntryBiEntities';
import { GeneralJournalAccountEntryBiEntitiesRequestBuilder } from './GeneralJournalAccountEntryBiEntitiesRequestBuilder';
import { LedgerPostingType } from './LedgerPostingType';
import { NoYes } from './NoYes';
import { LedgerTransType } from './LedgerTransType';
import { AssetLeasePostingTypes } from './AssetLeasePostingTypes';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class GeneralJournalAccountEntryBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      GeneralJournalAccountEntryBiEntities<DeSerializersT>,
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
  ): GeneralJournalAccountEntryBiEntitiesApi<DeSerializersT> {
    return new GeneralJournalAccountEntryBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = GeneralJournalAccountEntryBiEntities;

  requestBuilder(): GeneralJournalAccountEntryBiEntitiesRequestBuilder<DeSerializersT> {
    return new GeneralJournalAccountEntryBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    GeneralJournalAccountEntryBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      GeneralJournalAccountEntryBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    GeneralJournalAccountEntryBiEntities<DeSerializersT>,
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
    typeof GeneralJournalAccountEntryBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        GeneralJournalAccountEntryBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SOURCE_KEY: OrderableEdmTypeField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    POSTING_TYPE: EnumField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerPostingType,
      true,
      true
    >;
    ACCOUNTING_CURRENCY_AMOUNT: OrderableEdmTypeField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CREATED_BY_TRANSACTION_ID: OrderableEdmTypeField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_CREDIT: EnumField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FIN_TAG: OrderableEdmTypeField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    GENERAL_JOURNAL_ENTRY: OrderableEdmTypeField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REASON_REF: OrderableEdmTypeField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ASSET_LEASE_TRANSACTION_TYPE: EnumField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerTransType,
      true,
      true
    >;
    ASSET_LEASE_POSTING_TYPES: EnumField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      AssetLeasePostingTypes,
      true,
      true
    >;
    TRANSACTION_CURRENCY_CODE: OrderableEdmTypeField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_ACCOUNT: OrderableEdmTypeField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_REFERENCE: OrderableEdmTypeField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CURRENCY_AMOUNT: OrderableEdmTypeField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TEXT: OrderableEdmTypeField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT: OrderableEdmTypeField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_TABLE_DATA_AREA_ID: OrderableEdmTypeField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_ID_SA: OrderableEdmTypeField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CORRECTION: EnumField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HISTORICAL_EXCHANGE_RATE_DATE: OrderableEdmTypeField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALLOCATION_LEVEL: OrderableEdmTypeField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIGINAL_ACCOUNT_ENTRY: OrderableEdmTypeField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MAIN_ACCOUNT: OrderableEdmTypeField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      GeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<GeneralJournalAccountEntryBiEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link postingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_TYPE: fieldBuilder.buildEnumField(
          'PostingType',
          LedgerPostingType,
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
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link createdByTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'CreatedByTransactionId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link isCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CREDIT: fieldBuilder.buildEnumField('IsCredit', NoYes, true),
        /**
         * Static representation of the {@link finTag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIN_TAG: fieldBuilder.buildEdmTypeField('FinTag', 'Edm.Int64', false),
        /**
         * Static representation of the {@link generalJournalEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERAL_JOURNAL_ENTRY: fieldBuilder.buildEdmTypeField(
          'GeneralJournalEntry',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link reasonRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_REF: fieldBuilder.buildEdmTypeField(
          'ReasonRef',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link assetLeaseTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_LEASE_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'AssetLeaseTransactionType',
          LedgerTransType,
          true
        ),
        /**
         * Static representation of the {@link assetLeasePostingTypes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_LEASE_POSTING_TYPES: fieldBuilder.buildEnumField(
          'AssetLeasePostingTypes',
          AssetLeasePostingTypes,
          true
        ),
        /**
         * Static representation of the {@link transactionCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'LedgerAccount',
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
         * Static representation of the {@link reportingCurrencyAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link text} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT: fieldBuilder.buildEdmTypeField('Text', 'Edm.String', true),
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
         * Static representation of the {@link projTableDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TABLE_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'ProjTableDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projIdSa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID_SA: fieldBuilder.buildEdmTypeField(
          'ProjId_SA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isCorrection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CORRECTION: fieldBuilder.buildEnumField('IsCorrection', NoYes, true),
        /**
         * Static representation of the {@link historicalExchangeRateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HISTORICAL_EXCHANGE_RATE_DATE: fieldBuilder.buildEdmTypeField(
          'HistoricalExchangeRateDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link allocationLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_LEVEL: fieldBuilder.buildEdmTypeField(
          'AllocationLevel',
          'Edm.Int32',
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
         * Static representation of the {@link originalAccountEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_ACCOUNT_ENTRY: fieldBuilder.buildEdmTypeField(
          'OriginalAccountEntry',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link mainAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'MainAccount',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link ledgerDimensionValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_DIMENSION_VALUES_JSON: fieldBuilder.buildEdmTypeField(
          'LedgerDimensionValuesJson',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', GeneralJournalAccountEntryBiEntities)
      };
    }

    return this._schema;
  }
}
