/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GeneralJournalEntryBiEntities } from './GeneralJournalEntryBiEntities';
import { GeneralJournalEntryBiEntitiesRequestBuilder } from './GeneralJournalEntryBiEntitiesRequestBuilder';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { LedgerTransType } from './LedgerTransType';
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
export class GeneralJournalEntryBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<GeneralJournalEntryBiEntities<DeSerializersT>, DeSerializersT>
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
  ): GeneralJournalEntryBiEntitiesApi<DeSerializersT> {
    return new GeneralJournalEntryBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = GeneralJournalEntryBiEntities;

  requestBuilder(): GeneralJournalEntryBiEntitiesRequestBuilder<DeSerializersT> {
    return new GeneralJournalEntryBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    GeneralJournalEntryBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      GeneralJournalEntryBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    GeneralJournalEntryBiEntities<DeSerializersT>,
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
    typeof GeneralJournalEntryBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        GeneralJournalEntryBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOURNAL_NUMBER: OrderableEdmTypeField<
      GeneralJournalEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_CALENDAR_YEAR: OrderableEdmTypeField<
      GeneralJournalEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LEDGER: OrderableEdmTypeField<
      GeneralJournalEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    POSTING_LAYER: EnumField<
      GeneralJournalEntryBiEntities<DeSerializers>,
      DeSerializersT,
      CurrentOperationsTax,
      true,
      true
    >;
    SYS_CREATED_TRANSACTION_ID: OrderableEdmTypeField<
      GeneralJournalEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUBLEDGER_VOUCHER_DATA_AREA_ID: OrderableEdmTypeField<
      GeneralJournalEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_SOURCE_LEDGER_ENTRY_POSTED: OrderableEdmTypeField<
      GeneralJournalEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LEDGER_ENTRY_JOURNAL: OrderableEdmTypeField<
      GeneralJournalEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ACCOUNTING_DATE: OrderableEdmTypeField<
      GeneralJournalEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      GeneralJournalEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      GeneralJournalEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_CATEGORY: EnumField<
      GeneralJournalEntryBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerTransType,
      true,
      true
    >;
    LEDGER_POSTING_JOURNAL: OrderableEdmTypeField<
      GeneralJournalEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      GeneralJournalEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LEDGER_POSTING_JOURNAL_DATA_AREA_ID: OrderableEdmTypeField<
      GeneralJournalEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBLEDGER_JOURNAL_ENTRY: OrderableEdmTypeField<
      GeneralJournalEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DOCUMENT_NUMBER: OrderableEdmTypeField<
      GeneralJournalEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBLEDGER_VOUCHER: OrderableEdmTypeField<
      GeneralJournalEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      GeneralJournalEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANSFER_ID: OrderableEdmTypeField<
      GeneralJournalEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      GeneralJournalEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FISCAL_CALENDAR_PERIOD: OrderableEdmTypeField<
      GeneralJournalEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ACKNOWLEDGEMENT_DATE: OrderableEdmTypeField<
      GeneralJournalEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<GeneralJournalEntryBiEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link journalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fiscalCalendarYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CALENDAR_YEAR: fieldBuilder.buildEdmTypeField(
          'FiscalCalendarYear',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link ledger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER: fieldBuilder.buildEdmTypeField('Ledger', 'Edm.Int64', false),
        /**
         * Static representation of the {@link postingLayer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_LAYER: fieldBuilder.buildEnumField(
          'PostingLayer',
          CurrentOperationsTax,
          true
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
         * Static representation of the {@link subledgerVoucherDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBLEDGER_VOUCHER_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SubledgerVoucherDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetSourceLedgerEntryPosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_SOURCE_LEDGER_ENTRY_POSTED: fieldBuilder.buildEdmTypeField(
          'BudgetSourceLedgerEntryPosted',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link ledgerEntryJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_ENTRY_JOURNAL: fieldBuilder.buildEdmTypeField(
          'LedgerEntryJournal',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link accountingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DATE: fieldBuilder.buildEdmTypeField(
          'AccountingDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link sysCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'SysCreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_CATEGORY: fieldBuilder.buildEnumField(
          'JournalCategory',
          LedgerTransType,
          true
        ),
        /**
         * Static representation of the {@link ledgerPostingJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_POSTING_JOURNAL: fieldBuilder.buildEdmTypeField(
          'LedgerPostingJournal',
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
         * Static representation of the {@link ledgerPostingJournalDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_POSTING_JOURNAL_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'LedgerPostingJournalDataAreaId',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link documentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DocumentNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subledgerVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBLEDGER_VOUCHER: fieldBuilder.buildEdmTypeField(
          'SubledgerVoucher',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link transferId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_ID: fieldBuilder.buildEdmTypeField(
          'TransferId',
          'Edm.Int64',
          false
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
         * Static representation of the {@link fiscalCalendarPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CALENDAR_PERIOD: fieldBuilder.buildEdmTypeField(
          'FiscalCalendarPeriod',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link acknowledgementDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACKNOWLEDGEMENT_DATE: fieldBuilder.buildEdmTypeField(
          'AcknowledgementDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', GeneralJournalEntryBiEntities)
      };
    }

    return this._schema;
  }
}
