/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GeneralJournalEntryWBiEntities } from './GeneralJournalEntryWBiEntities';
import { GeneralJournalEntryWBiEntitiesRequestBuilder } from './GeneralJournalEntryWBiEntitiesRequestBuilder';
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
export class GeneralJournalEntryWBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<GeneralJournalEntryWBiEntities<DeSerializersT>, DeSerializersT>
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
  ): GeneralJournalEntryWBiEntitiesApi<DeSerializersT> {
    return new GeneralJournalEntryWBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = GeneralJournalEntryWBiEntities;

  requestBuilder(): GeneralJournalEntryWBiEntitiesRequestBuilder<DeSerializersT> {
    return new GeneralJournalEntryWBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    GeneralJournalEntryWBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      GeneralJournalEntryWBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    GeneralJournalEntryWBiEntities<DeSerializersT>,
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
    typeof GeneralJournalEntryWBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        GeneralJournalEntryWBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SOURCE_KEY: OrderableEdmTypeField<
      GeneralJournalEntryWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      GeneralJournalEntryWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      GeneralJournalEntryWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REVERSED_CN: EnumField<
      GeneralJournalEntryWBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VOUCHER_CN: OrderableEdmTypeField<
      GeneralJournalEntryWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENERAL_JOURNAL_ENTRY: OrderableEdmTypeField<
      GeneralJournalEntryWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_CREATED_TRANSACTION_ID: OrderableEdmTypeField<
      GeneralJournalEntryWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_EXTEMPORANEOUS_TYPE_BR: EnumField<
      GeneralJournalEntryWBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEDGER_VOUCHER_TYPE_CN: OrderableEdmTypeField<
      GeneralJournalEntryWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      GeneralJournalEntryWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<GeneralJournalEntryWBiEntities<DeSerializers>>;
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
         * Static representation of the {@link sysCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'SysCreatedBy',
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
         * Static representation of the {@link reversedCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSED_CN: fieldBuilder.buildEnumField('Reversed_CN', NoYes, true),
        /**
         * Static representation of the {@link voucherCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_CN: fieldBuilder.buildEdmTypeField(
          'Voucher_CN',
          'Edm.String',
          true
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
         * Static representation of the {@link sysCreatedTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'SysCreatedTransactionId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link isExtemporaneousTypeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXTEMPORANEOUS_TYPE_BR: fieldBuilder.buildEnumField(
          'IsExtemporaneousType_BR',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link ledgerVoucherTypeCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_VOUCHER_TYPE_CN: fieldBuilder.buildEdmTypeField(
          'LedgerVoucherType_CN',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', GeneralJournalEntryWBiEntities)
      };
    }

    return this._schema;
  }
}
