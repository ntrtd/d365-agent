/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubledgerJournalAccountEntryBiEntities } from './SubledgerJournalAccountEntryBiEntities';
import { SubledgerJournalAccountEntryBiEntitiesRequestBuilder } from './SubledgerJournalAccountEntryBiEntitiesRequestBuilder';
import { TransferPolicy } from './TransferPolicy';
import { SubledgerJournalAccountEntryEventRole } from './SubledgerJournalAccountEntryEventRole';
import { NoYes } from './NoYes';
import { LedgerPostingType } from './LedgerPostingType';
import { DebitCredit } from './DebitCredit';
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
export class SubledgerJournalAccountEntryBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SubledgerJournalAccountEntryBiEntities<DeSerializersT>,
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
  ): SubledgerJournalAccountEntryBiEntitiesApi<DeSerializersT> {
    return new SubledgerJournalAccountEntryBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubledgerJournalAccountEntryBiEntities;

  requestBuilder(): SubledgerJournalAccountEntryBiEntitiesRequestBuilder<DeSerializersT> {
    return new SubledgerJournalAccountEntryBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubledgerJournalAccountEntryBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubledgerJournalAccountEntryBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubledgerJournalAccountEntryBiEntities<DeSerializersT>,
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
    typeof SubledgerJournalAccountEntryBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubledgerJournalAccountEntryBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SOURCE_KEY: OrderableEdmTypeField<
      SubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_CREATED_TRANSACTION_ID: OrderableEdmTypeField<
      SubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXCHANGE_RATE_DATE: OrderableEdmTypeField<
      SubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_TRANSFERRED_IN_DETAIL: EnumField<
      SubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      TransferPolicy,
      true,
      true
    >;
    REPORTING_CURRENCY_AMOUNT: OrderableEdmTypeField<
      SubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNT_ENTRY_EVENT_ROLE: EnumField<
      SubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      SubledgerJournalAccountEntryEventRole,
      true,
      true
    >;
    ORIGINAL_TRANSFER_POLICY: EnumField<
      SubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      TransferPolicy,
      true,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT: OrderableEdmTypeField<
      SubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      SubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY: OrderableEdmTypeField<
      SubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      SubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACCOUNTING_CURRENCY_AMOUNT: OrderableEdmTypeField<
      SubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_CORRECTION: EnumField<
      SubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUBLEDGER_JOURNAL_ENTRY: OrderableEdmTypeField<
      SubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REPORTING_EXCHANGE_RATE: OrderableEdmTypeField<
      SubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      SubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENERAL_JOURNAL_ACCOUNT_ENTRY: OrderableEdmTypeField<
      SubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    POSTING_TYPE: EnumField<
      SubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerPostingType,
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      SubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    HISTORICAL_EXCHANGE_RATE_DATE: OrderableEdmTypeField<
      SubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYS_EXCHANGE_RATE: OrderableEdmTypeField<
      SubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SIDE: EnumField<
      SubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      DebitCredit,
      true,
      true
    >;
    SYS_REPORTING_EXCHANGE_RATE: OrderableEdmTypeField<
      SubledgerJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      SubledgerJournalAccountEntryBiEntities<DeSerializers>
    >;
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
         * Static representation of the {@link sysCreatedTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'SysCreatedTransactionId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link exchangeRateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_DATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRateDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isTransferredInDetail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TRANSFERRED_IN_DETAIL: fieldBuilder.buildEnumField(
          'IsTransferredInDetail',
          TransferPolicy,
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
         * Static representation of the {@link accountEntryEventRole} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_ENTRY_EVENT_ROLE: fieldBuilder.buildEnumField(
          'AccountEntryEventRole',
          SubledgerJournalAccountEntryEventRole,
          true
        ),
        /**
         * Static representation of the {@link originalTransferPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_TRANSFER_POLICY: fieldBuilder.buildEnumField(
          'OriginalTransferPolicy',
          TransferPolicy,
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
         * Static representation of the {@link exchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'TransactionCurrency',
          'Edm.String',
          true
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
         * Static representation of the {@link accountingCurrencyAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_CURRENCY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AccountingCurrencyAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isCorrection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CORRECTION: fieldBuilder.buildEnumField('IsCorrection', NoYes, true),
        /**
         * Static representation of the {@link subledgerJournalEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBLEDGER_JOURNAL_ENTRY: fieldBuilder.buildEdmTypeField(
          'SubledgerJournalEntry',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link reportingExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ReportingExchangeRate',
          'Edm.Decimal',
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
        /**
         * Static representation of the {@link generalJournalAccountEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERAL_JOURNAL_ACCOUNT_ENTRY: fieldBuilder.buildEdmTypeField(
          'GeneralJournalAccountEntry',
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
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
          false
        ),
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
         * Static representation of the {@link sysExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'SysExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link side} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIDE: fieldBuilder.buildEnumField('Side', DebitCredit, true),
        /**
         * Static representation of the {@link sysReportingExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REPORTING_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'SysReportingExchangeRate',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubledgerJournalAccountEntryBiEntities)
      };
    }

    return this._schema;
  }
}
