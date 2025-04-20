/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerEntryBiEntities } from './LedgerEntryBiEntities';
import { LedgerEntryBiEntitiesRequestBuilder } from './LedgerEntryBiEntitiesRequestBuilder';
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
export class LedgerEntryBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LedgerEntryBiEntities<DeSerializersT>, DeSerializersT>
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
  ): LedgerEntryBiEntitiesApi<DeSerializersT> {
    return new LedgerEntryBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LedgerEntryBiEntities;

  requestBuilder(): LedgerEntryBiEntitiesRequestBuilder<DeSerializersT> {
    return new LedgerEntryBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LedgerEntryBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LedgerEntryBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LedgerEntryBiEntities<DeSerializersT>,
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
    typeof LedgerEntryBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerEntryBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SOURCE_KEY: OrderableEdmTypeField<
      LedgerEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PAYMENT_MODE: OrderableEdmTypeField<
      LedgerEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_BRIDGING_POSTING: EnumField<
      LedgerEntryBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      LedgerEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_EXCHANGE_ADJUSTMENT: EnumField<
      LedgerEntryBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONSOLIDATED_COMPANY: OrderableEdmTypeField<
      LedgerEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_DATA_AREA_ID: OrderableEdmTypeField<
      LedgerEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENERAL_JOURNAL_ACCOUNT_ENTRY: OrderableEdmTypeField<
      LedgerEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COMPANY_BANK_ACCOUNT: OrderableEdmTypeField<
      LedgerEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THIRD_PARTY_BANK_ACCOUNT: OrderableEdmTypeField<
      LedgerEntryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LedgerEntryBiEntities<DeSerializers>>;
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
         * Static representation of the {@link paymentMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_MODE: fieldBuilder.buildEdmTypeField(
          'PaymentMode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isBridgingPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BRIDGING_POSTING: fieldBuilder.buildEnumField(
          'IsBridgingPosting',
          NoYes,
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
         * Static representation of the {@link isExchangeAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXCHANGE_ADJUSTMENT: fieldBuilder.buildEnumField(
          'IsExchangeAdjustment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link consolidatedCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSOLIDATED_COMPANY: fieldBuilder.buildEdmTypeField(
          'ConsolidatedCompany',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'BankDataAreaId',
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
         * Static representation of the {@link companyBankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CompanyBankAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link thirdPartyBankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THIRD_PARTY_BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ThirdPartyBankAccount',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LedgerEntryBiEntities)
      };
    }

    return this._schema;
  }
}
