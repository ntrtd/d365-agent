/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerJournalHeadersCds } from './LedgerJournalHeadersCds';
import { LedgerJournalHeadersCdsRequestBuilder } from './LedgerJournalHeadersCdsRequestBuilder';
import { LedgerJournalCdsLinesApi } from './LedgerJournalCdsLinesApi';
import { LegalEntitiesApi } from './LegalEntitiesApi';
import { CurrentOperationsTax } from './CurrentOperationsTax';
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
  EnumField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class LedgerJournalHeadersCdsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LedgerJournalHeadersCds<DeSerializersT>, DeSerializersT>
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
  ): LedgerJournalHeadersCdsApi<DeSerializersT> {
    return new LedgerJournalHeadersCdsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link ledgerJournalCdsLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_CDS_LINE: OneToManyLink<
      LedgerJournalHeadersCds<DeSerializersT>,
      DeSerializersT,
      LedgerJournalCdsLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      LedgerJournalHeadersCds<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LedgerJournalCdsLinesApi<DeSerializersT>,
      LegalEntitiesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEDGER_JOURNAL_CDS_LINE: new OneToManyLink(
        'LedgerJournalCDSLine',
        this,
        linkedApis[0]
      ),
      LEGAL_ENTITY: new OneToOneLink('LegalEntity', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = LedgerJournalHeadersCds;

  requestBuilder(): LedgerJournalHeadersCdsRequestBuilder<DeSerializersT> {
    return new LedgerJournalHeadersCdsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LedgerJournalHeadersCds<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LedgerJournalHeadersCds<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LedgerJournalHeadersCds<DeSerializersT>,
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
    typeof LedgerJournalHeadersCds,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerJournalHeadersCds,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LedgerJournalHeadersCds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTEGRATION_COMPUTED_KEY: OrderableEdmTypeField<
      LedgerJournalHeadersCds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      LedgerJournalHeadersCds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_NAME: OrderableEdmTypeField<
      LedgerJournalHeadersCds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTEGRATION_KEY: OrderableEdmTypeField<
      LedgerJournalHeadersCds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      LedgerJournalHeadersCds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_LAYER: EnumField<
      LedgerJournalHeadersCds<DeSerializers>,
      DeSerializersT,
      CurrentOperationsTax,
      true,
      true
    >;
    IS_POSTED: EnumField<
      LedgerJournalHeadersCds<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOURNAL_TOTAL_CREDIT: OrderableEdmTypeField<
      LedgerJournalHeadersCds<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOURNAL_TOTAL_DEBIT: OrderableEdmTypeField<
      LedgerJournalHeadersCds<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerJournalCdsLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_CDS_LINE: OneToManyLink<
      LedgerJournalHeadersCds<DeSerializersT>,
      DeSerializersT,
      LedgerJournalCdsLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      LedgerJournalHeadersCds<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LedgerJournalHeadersCds<DeSerializers>>;
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
         * Static representation of the {@link integrationComputedKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEGRATION_COMPUTED_KEY: fieldBuilder.buildEdmTypeField(
          'IntegrationComputedKey',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link journalBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalBatchNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'JournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link integrationKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEGRATION_KEY: fieldBuilder.buildEdmTypeField(
          'IntegrationKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link isPosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POSTED: fieldBuilder.buildEnumField('IsPosted', NoYes, true),
        /**
         * Static representation of the {@link journalTotalCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_TOTAL_CREDIT: fieldBuilder.buildEdmTypeField(
          'JournalTotalCredit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link journalTotalDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_TOTAL_DEBIT: fieldBuilder.buildEdmTypeField(
          'JournalTotalDebit',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LedgerJournalHeadersCds)
      };
    }

    return this._schema;
  }
}
