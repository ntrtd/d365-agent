/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerReportingCurrencyAdjustmentJournalHeaders } from './LedgerReportingCurrencyAdjustmentJournalHeaders';
import { LedgerReportingCurrencyAdjustmentJournalHeadersRequestBuilder } from './LedgerReportingCurrencyAdjustmentJournalHeadersRequestBuilder';
import { LedgerReportingCurrencyAdjustmentJournalLinesApi } from './LedgerReportingCurrencyAdjustmentJournalLinesApi';
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
export class LedgerReportingCurrencyAdjustmentJournalHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      LedgerReportingCurrencyAdjustmentJournalHeaders<DeSerializersT>,
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
  ): LedgerReportingCurrencyAdjustmentJournalHeadersApi<DeSerializersT> {
    return new LedgerReportingCurrencyAdjustmentJournalHeadersApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link ledgerReportingCurrencyAdjustmentJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_LINE: OneToManyLink<
      LedgerReportingCurrencyAdjustmentJournalHeaders<DeSerializersT>,
      DeSerializersT,
      LedgerReportingCurrencyAdjustmentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      LedgerReportingCurrencyAdjustmentJournalHeaders<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LedgerReportingCurrencyAdjustmentJournalLinesApi<DeSerializersT>,
      LegalEntitiesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_LINE: new OneToManyLink(
        'LedgerReportingCurrencyAdjustmentJournalLine',
        this,
        linkedApis[0]
      ),
      LEGAL_ENTITY: new OneToOneLink('LegalEntity', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = LedgerReportingCurrencyAdjustmentJournalHeaders;

  requestBuilder(): LedgerReportingCurrencyAdjustmentJournalHeadersRequestBuilder<DeSerializersT> {
    return new LedgerReportingCurrencyAdjustmentJournalHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LedgerReportingCurrencyAdjustmentJournalHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LedgerReportingCurrencyAdjustmentJournalHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LedgerReportingCurrencyAdjustmentJournalHeaders<DeSerializersT>,
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
    typeof LedgerReportingCurrencyAdjustmentJournalHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerReportingCurrencyAdjustmentJournalHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LedgerReportingCurrencyAdjustmentJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      LedgerReportingCurrencyAdjustmentJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REPORTING_CURRENCY: OrderableEdmTypeField<
      LedgerReportingCurrencyAdjustmentJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_TOTAL_DEBIT_REPORTING_CURRENCY: OrderableEdmTypeField<
      LedgerReportingCurrencyAdjustmentJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOURNAL_NAME: OrderableEdmTypeField<
      LedgerReportingCurrencyAdjustmentJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      LedgerReportingCurrencyAdjustmentJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_LAYER: EnumField<
      LedgerReportingCurrencyAdjustmentJournalHeaders<DeSerializers>,
      DeSerializersT,
      CurrentOperationsTax,
      true,
      true
    >;
    IS_POSTED: EnumField<
      LedgerReportingCurrencyAdjustmentJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOURNAL_TOTAL_CREDIT_REPORTING_CURRENCY: OrderableEdmTypeField<
      LedgerReportingCurrencyAdjustmentJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerReportingCurrencyAdjustmentJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_REPORTING_CURRENCY_ADJUSTMENT_JOURNAL_LINE: OneToManyLink<
      LedgerReportingCurrencyAdjustmentJournalHeaders<DeSerializersT>,
      DeSerializersT,
      LedgerReportingCurrencyAdjustmentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      LedgerReportingCurrencyAdjustmentJournalHeaders<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      LedgerReportingCurrencyAdjustmentJournalHeaders<DeSerializers>
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
         * Static representation of the {@link journalBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalBatchNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link reportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'ReportingCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalTotalDebitReportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_TOTAL_DEBIT_REPORTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'JournalTotalDebitReportingCurrency',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link journalTotalCreditReportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_TOTAL_CREDIT_REPORTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'JournalTotalCreditReportingCurrency',
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
          LedgerReportingCurrencyAdjustmentJournalHeaders
        )
      };
    }

    return this._schema;
  }
}
