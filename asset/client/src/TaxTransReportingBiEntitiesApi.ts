/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxTransReportingBiEntities } from './TaxTransReportingBiEntities';
import { TaxTransReportingBiEntitiesRequestBuilder } from './TaxTransReportingBiEntitiesRequestBuilder';
import { UnknownNoYes } from './UnknownNoYes';
import { LedgerJournalType } from './LedgerJournalType';
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
export class TaxTransReportingBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TaxTransReportingBiEntities<DeSerializersT>, DeSerializersT>
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
  ): TaxTransReportingBiEntitiesApi<DeSerializersT> {
    return new TaxTransReportingBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxTransReportingBiEntities;

  requestBuilder(): TaxTransReportingBiEntitiesRequestBuilder<DeSerializersT> {
    return new TaxTransReportingBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxTransReportingBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TaxTransReportingBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TaxTransReportingBiEntities<DeSerializersT>,
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
    typeof TaxTransReportingBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxTransReportingBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxTransReportingBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      TaxTransReportingBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_TRANSACTION_REVERSAL: EnumField<
      TaxTransReportingBiEntities<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    IS_ORIGINAL_DOCUMENT_CREDIT_NOTE: EnumField<
      TaxTransReportingBiEntities<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    TAX_TRANS: OrderableEdmTypeField<
      TaxTransReportingBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LEDGER_JOURNAL_TYPE: EnumField<
      TaxTransReportingBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerJournalType,
      true,
      true
    >;
    IS_TAX_TRANS_CREDIT_NOTE: EnumField<
      TaxTransReportingBiEntities<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    VEND_TRANS: OrderableEdmTypeField<
      TaxTransReportingBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<TaxTransReportingBiEntities<DeSerializers>>;
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
         * Static representation of the {@link isTransactionReversal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TRANSACTION_REVERSAL: fieldBuilder.buildEnumField(
          'IsTransactionReversal',
          UnknownNoYes,
          true
        ),
        /**
         * Static representation of the {@link isOriginalDocumentCreditNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ORIGINAL_DOCUMENT_CREDIT_NOTE: fieldBuilder.buildEnumField(
          'IsOriginalDocumentCreditNote',
          UnknownNoYes,
          true
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
         * Static representation of the {@link ledgerJournalType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_JOURNAL_TYPE: fieldBuilder.buildEnumField(
          'LedgerJournalType',
          LedgerJournalType,
          true
        ),
        /**
         * Static representation of the {@link isTaxTransCreditNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TAX_TRANS_CREDIT_NOTE: fieldBuilder.buildEnumField(
          'IsTaxTransCreditNote',
          UnknownNoYes,
          true
        ),
        /**
         * Static representation of the {@link vendTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_TRANS: fieldBuilder.buildEdmTypeField(
          'VendTrans',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxTransReportingBiEntities)
      };
    }

    return this._schema;
  }
}
