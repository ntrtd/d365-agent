/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GeneralJournalAccountEntryWBiEntities } from './GeneralJournalAccountEntryWBiEntities';
import { GeneralJournalAccountEntryWBiEntitiesRequestBuilder } from './GeneralJournalAccountEntryWBiEntitiesRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class GeneralJournalAccountEntryWBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      GeneralJournalAccountEntryWBiEntities<DeSerializersT>,
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
  ): GeneralJournalAccountEntryWBiEntitiesApi<DeSerializersT> {
    return new GeneralJournalAccountEntryWBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = GeneralJournalAccountEntryWBiEntities;

  requestBuilder(): GeneralJournalAccountEntryWBiEntitiesRequestBuilder<DeSerializersT> {
    return new GeneralJournalAccountEntryWBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    GeneralJournalAccountEntryWBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      GeneralJournalAccountEntryWBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    GeneralJournalAccountEntryWBiEntities<DeSerializersT>,
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
    typeof GeneralJournalAccountEntryWBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        GeneralJournalAccountEntryWBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SOURCE_KEY: OrderableEdmTypeField<
      GeneralJournalAccountEntryWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CONSOLIDATED_REF_REC_ID_BR: OrderableEdmTypeField<
      GeneralJournalAccountEntryWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      GeneralJournalAccountEntryWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    GENERAL_JOURNAL_ENTRY: OrderableEdmTypeField<
      GeneralJournalAccountEntryWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    GENERAL_JOURNAL_ACCOUNT_ENTRY: OrderableEdmTypeField<
      GeneralJournalAccountEntryWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CONSOLIDATED_VOUCHER_BR: OrderableEdmTypeField<
      GeneralJournalAccountEntryWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOND_BATCH_TRANS_RU: OrderableEdmTypeField<
      GeneralJournalAccountEntryWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_CREATED_TRANSACTION_ID: OrderableEdmTypeField<
      GeneralJournalAccountEntryWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_ACCOUNTING_CLOSING_BR: EnumField<
      GeneralJournalAccountEntryWBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<GeneralJournalAccountEntryWBiEntities<DeSerializers>>;
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
         * Static representation of the {@link consolidatedRefRecIdBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSOLIDATED_REF_REC_ID_BR: fieldBuilder.buildEdmTypeField(
          'ConsolidatedRefRecId_BR',
          'Edm.Int64',
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
         * Static representation of the {@link generalJournalEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERAL_JOURNAL_ENTRY: fieldBuilder.buildEdmTypeField(
          'GeneralJournalEntry',
          'Edm.Int64',
          false
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
         * Static representation of the {@link consolidatedVoucherBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSOLIDATED_VOUCHER_BR: fieldBuilder.buildEdmTypeField(
          'ConsolidatedVoucher_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bondBatchTransRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOND_BATCH_TRANS_RU: fieldBuilder.buildEdmTypeField(
          'BondBatchTrans_RU',
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
         * Static representation of the {@link isAccountingClosingBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACCOUNTING_CLOSING_BR: fieldBuilder.buildEnumField(
          'IsAccountingClosing_BR',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', GeneralJournalAccountEntryWBiEntities)
      };
    }

    return this._schema;
  }
}
