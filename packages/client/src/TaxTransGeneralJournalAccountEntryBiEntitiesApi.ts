/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxTransGeneralJournalAccountEntryBiEntities } from './TaxTransGeneralJournalAccountEntryBiEntities';
import { TaxTransGeneralJournalAccountEntryBiEntitiesRequestBuilder } from './TaxTransGeneralJournalAccountEntryBiEntitiesRequestBuilder';
import { TaxTransRelationshipType } from './TaxTransRelationshipType';
import { MonetaryAmount } from './MonetaryAmount';
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
export class TaxTransGeneralJournalAccountEntryBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TaxTransGeneralJournalAccountEntryBiEntities<DeSerializersT>,
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
  ): TaxTransGeneralJournalAccountEntryBiEntitiesApi<DeSerializersT> {
    return new TaxTransGeneralJournalAccountEntryBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxTransGeneralJournalAccountEntryBiEntities;

  requestBuilder(): TaxTransGeneralJournalAccountEntryBiEntitiesRequestBuilder<DeSerializersT> {
    return new TaxTransGeneralJournalAccountEntryBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TaxTransGeneralJournalAccountEntryBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TaxTransGeneralJournalAccountEntryBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TaxTransGeneralJournalAccountEntryBiEntities<DeSerializersT>,
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
    typeof TaxTransGeneralJournalAccountEntryBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxTransGeneralJournalAccountEntryBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxTransGeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      TaxTransGeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_TRANS_RELATIONSHIP: EnumField<
      TaxTransGeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      TaxTransRelationshipType,
      true,
      true
    >;
    ACCOUNTING_CURRENCY_AMOUNT: OrderableEdmTypeField<
      TaxTransGeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_TRANS: OrderableEdmTypeField<
      TaxTransGeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUBLEDGER_JOURNAL_ACCOUNT_ENTRY: OrderableEdmTypeField<
      TaxTransGeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT: OrderableEdmTypeField<
      TaxTransGeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CURRENCY: OrderableEdmTypeField<
      TaxTransGeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENERAL_JOURNAL_ACCOUNT_ENTRY: OrderableEdmTypeField<
      TaxTransGeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_UNCOMMITTED: OrderableEdmTypeField<
      TaxTransGeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MONETARY_AMOUNT_TYPE: EnumField<
      TaxTransGeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      MonetaryAmount,
      true,
      true
    >;
    ALLOCATION_FACTOR: OrderableEdmTypeField<
      TaxTransGeneralJournalAccountEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      TaxTransGeneralJournalAccountEntryBiEntities<DeSerializers>
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxTransRelationship} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TRANS_RELATIONSHIP: fieldBuilder.buildEnumField(
          'TaxTransRelationship',
          TaxTransRelationshipType,
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
         * Static representation of the {@link taxTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TRANS: fieldBuilder.buildEdmTypeField(
          'TaxTrans',
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
         * Static representation of the {@link transactionCurrencyAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount',
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
         * Static representation of the {@link generalJournalAccountEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERAL_JOURNAL_ACCOUNT_ENTRY: fieldBuilder.buildEdmTypeField(
          'GeneralJournalAccountEntry',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxUncommitted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_UNCOMMITTED: fieldBuilder.buildEdmTypeField(
          'TaxUncommitted',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link monetaryAmountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONETARY_AMOUNT_TYPE: fieldBuilder.buildEnumField(
          'MonetaryAmountType',
          MonetaryAmount,
          true
        ),
        /**
         * Static representation of the {@link allocationFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_FACTOR: fieldBuilder.buildEdmTypeField(
          'AllocationFactor',
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
          TaxTransGeneralJournalAccountEntryBiEntities
        )
      };
    }

    return this._schema;
  }
}
