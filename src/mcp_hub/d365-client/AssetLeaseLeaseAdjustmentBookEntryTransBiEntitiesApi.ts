/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetLeaseLeaseAdjustmentBookEntryTransBiEntities } from './AssetLeaseLeaseAdjustmentBookEntryTransBiEntities';
import { AssetLeaseLeaseAdjustmentBookEntryTransBiEntitiesRequestBuilder } from './AssetLeaseLeaseAdjustmentBookEntryTransBiEntitiesRequestBuilder';
import { AssetLeasePostingTypes } from './AssetLeasePostingTypes';
import { LedgerJournalAcType } from './LedgerJournalAcType';
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
export class AssetLeaseLeaseAdjustmentBookEntryTransBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<DeSerializersT>,
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
  ): AssetLeaseLeaseAdjustmentBookEntryTransBiEntitiesApi<DeSerializersT> {
    return new AssetLeaseLeaseAdjustmentBookEntryTransBiEntitiesApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetLeaseLeaseAdjustmentBookEntryTransBiEntities;

  requestBuilder(): AssetLeaseLeaseAdjustmentBookEntryTransBiEntitiesRequestBuilder<DeSerializersT> {
    return new AssetLeaseLeaseAdjustmentBookEntryTransBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<DeSerializersT>,
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
    typeof AssetLeaseLeaseAdjustmentBookEntryTransBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetLeaseLeaseAdjustmentBookEntryTransBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEASE_ADJUSTMENT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LEASE_BOOK_ID: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TXT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_AMOUNT_CREDIT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSTING_TYPES: EnumField<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<DeSerializers>,
      DeSerializersT,
      AssetLeasePostingTypes,
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    AMOUNT_DEBIT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPORTING_AMOUNT_CREDIT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_CREDIT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPORTING_AMOUNT_DEBIT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerTransType,
      true,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEDGER_DIMENSION: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ACCOUNTING_AMOUNT_DEBIT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<DeSerializers>
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
         * Static representation of the {@link leaseAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_ADJUSTMENT: fieldBuilder.buildEdmTypeField(
          'LeaseAdjustment',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link leaseBookId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_BOOK_ID: fieldBuilder.buildEdmTypeField(
          'LeaseBookId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link txt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TXT: fieldBuilder.buildEdmTypeField('Txt', 'Edm.String', true),
        /**
         * Static representation of the {@link accountingAmountCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_AMOUNT_CREDIT: fieldBuilder.buildEdmTypeField(
          'AccountingAmountCredit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link postingTypes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_TYPES: fieldBuilder.buildEnumField(
          'PostingTypes',
          AssetLeasePostingTypes,
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
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link amountDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_DEBIT: fieldBuilder.buildEdmTypeField(
          'AmountDebit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reportingAmountCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_AMOUNT_CREDIT: fieldBuilder.buildEdmTypeField(
          'ReportingAmountCredit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_CREDIT: fieldBuilder.buildEdmTypeField(
          'AmountCredit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reportingAmountDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_AMOUNT_DEBIT: fieldBuilder.buildEdmTypeField(
          'ReportingAmountDebit',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          LedgerTransType,
          true
        ),
        /**
         * Static representation of the {@link transactionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DATE: fieldBuilder.buildEdmTypeField(
          'TransactionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link ledgerDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_DIMENSION: fieldBuilder.buildEdmTypeField(
          'LedgerDimension',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link accountingAmountDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_AMOUNT_DEBIT: fieldBuilder.buildEdmTypeField(
          'AccountingAmountDebit',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          AssetLeaseLeaseAdjustmentBookEntryTransBiEntities
        )
      };
    }

    return this._schema;
  }
}
