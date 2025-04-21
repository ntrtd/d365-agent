/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubledgerJournalAccountEntryDistributionBiEntities } from './SubledgerJournalAccountEntryDistributionBiEntities';
import { SubledgerJournalAccountEntryDistributionBiEntitiesRequestBuilder } from './SubledgerJournalAccountEntryDistributionBiEntitiesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class SubledgerJournalAccountEntryDistributionBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SubledgerJournalAccountEntryDistributionBiEntities<DeSerializersT>,
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
  ): SubledgerJournalAccountEntryDistributionBiEntitiesApi<DeSerializersT> {
    return new SubledgerJournalAccountEntryDistributionBiEntitiesApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubledgerJournalAccountEntryDistributionBiEntities;

  requestBuilder(): SubledgerJournalAccountEntryDistributionBiEntitiesRequestBuilder<DeSerializersT> {
    return new SubledgerJournalAccountEntryDistributionBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubledgerJournalAccountEntryDistributionBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubledgerJournalAccountEntryDistributionBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubledgerJournalAccountEntryDistributionBiEntities<DeSerializersT>,
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
    typeof SubledgerJournalAccountEntryDistributionBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubledgerJournalAccountEntryDistributionBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ACCOUNTING_DISTRIBUTION: OrderableEdmTypeField<
      SubledgerJournalAccountEntryDistributionBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUBLEDGER_JOURNAL_ACCOUNT_ENTRY: OrderableEdmTypeField<
      SubledgerJournalAccountEntryDistributionBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ACCOUNTING_CURRENCY_AMOUNT: OrderableEdmTypeField<
      SubledgerJournalAccountEntryDistributionBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      SubledgerJournalAccountEntryDistributionBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      SubledgerJournalAccountEntryDistributionBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SOURCE_DOCUMENT_LINE: OrderableEdmTypeField<
      SubledgerJournalAccountEntryDistributionBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_CREATED_TRANSACTION_ID: OrderableEdmTypeField<
      SubledgerJournalAccountEntryDistributionBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PARENT_DISTRIBUTION: OrderableEdmTypeField<
      SubledgerJournalAccountEntryDistributionBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REPORTING_CURRENCY_AMOUNT: OrderableEdmTypeField<
      SubledgerJournalAccountEntryDistributionBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      SubledgerJournalAccountEntryDistributionBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      SubledgerJournalAccountEntryDistributionBiEntities<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link accountingDistribution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DISTRIBUTION: fieldBuilder.buildEdmTypeField(
          'AccountingDistribution',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link subledgerJournalAccountEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBLEDGER_JOURNAL_ACCOUNT_ENTRY: fieldBuilder.buildEdmTypeField(
          'SubledgerJournalAccountEntry',
          'Edm.Int64',
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
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
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
         * Static representation of the {@link sourceDocumentLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DOCUMENT_LINE: fieldBuilder.buildEdmTypeField(
          'SourceDocumentLine',
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
         * Static representation of the {@link parentDistribution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_DISTRIBUTION: fieldBuilder.buildEdmTypeField(
          'ParentDistribution',
          'Edm.Int64',
          false
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
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          SubledgerJournalAccountEntryDistributionBiEntities
        )
      };
    }

    return this._schema;
  }
}
