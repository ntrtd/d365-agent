/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SadDocumentInvoiceLineLedgerJournals } from './SadDocumentInvoiceLineLedgerJournals';
import { SadDocumentInvoiceLineLedgerJournalsRequestBuilder } from './SadDocumentInvoiceLineLedgerJournalsRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { SadDocumentInvoiceLedgerJournalsApi } from './SadDocumentInvoiceLedgerJournalsApi';
import { SadDocumentLineLedgerJournalsApi } from './SadDocumentLineLedgerJournalsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class SadDocumentInvoiceLineLedgerJournalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SadDocumentInvoiceLineLedgerJournals<DeSerializersT>,
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
  ): SadDocumentInvoiceLineLedgerJournalsApi<DeSerializersT> {
    return new SadDocumentInvoiceLineLedgerJournalsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      SadDocumentInvoiceLineLedgerJournals<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sadDocumentInvoiceLedgerJournal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SAD_DOCUMENT_INVOICE_LEDGER_JOURNAL: OneToOneLink<
      SadDocumentInvoiceLineLedgerJournals<DeSerializersT>,
      DeSerializersT,
      SadDocumentInvoiceLedgerJournalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sadDocumentLineLedgerJournal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SAD_DOCUMENT_LINE_LEDGER_JOURNAL: OneToOneLink<
      SadDocumentInvoiceLineLedgerJournals<DeSerializersT>,
      DeSerializersT,
      SadDocumentLineLedgerJournalsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      SadDocumentInvoiceLedgerJournalsApi<DeSerializersT>,
      SadDocumentLineLedgerJournalsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      ),
      SAD_DOCUMENT_INVOICE_LEDGER_JOURNAL: new OneToOneLink(
        'SADDocumentInvoiceLedgerJournal',
        this,
        linkedApis[1]
      ),
      SAD_DOCUMENT_LINE_LEDGER_JOURNAL: new OneToOneLink(
        'SADDocumentLineLedgerJournal',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = SadDocumentInvoiceLineLedgerJournals;

  requestBuilder(): SadDocumentInvoiceLineLedgerJournalsRequestBuilder<DeSerializersT> {
    return new SadDocumentInvoiceLineLedgerJournalsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SadDocumentInvoiceLineLedgerJournals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SadDocumentInvoiceLineLedgerJournals<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SadDocumentInvoiceLineLedgerJournals<DeSerializersT>,
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
    typeof SadDocumentInvoiceLineLedgerJournals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SadDocumentInvoiceLineLedgerJournals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SadDocumentInvoiceLineLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECORD_ID: OrderableEdmTypeField<
      SadDocumentInvoiceLineLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      SadDocumentInvoiceLineLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      SadDocumentInvoiceLineLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEDGER_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      SadDocumentInvoiceLineLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_COMMODITY_CODE: OrderableEdmTypeField<
      SadDocumentInvoiceLineLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSITION: OrderableEdmTypeField<
      SadDocumentInvoiceLineLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SAD_DATE: OrderableEdmTypeField<
      SadDocumentInvoiceLineLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE: OrderableEdmTypeField<
      SadDocumentInvoiceLineLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAD_NUMBER: OrderableEdmTypeField<
      SadDocumentInvoiceLineLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      SadDocumentInvoiceLineLedgerJournals<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sadDocumentInvoiceLedgerJournal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SAD_DOCUMENT_INVOICE_LEDGER_JOURNAL: OneToOneLink<
      SadDocumentInvoiceLineLedgerJournals<DeSerializersT>,
      DeSerializersT,
      SadDocumentInvoiceLedgerJournalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sadDocumentLineLedgerJournal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SAD_DOCUMENT_LINE_LEDGER_JOURNAL: OneToOneLink<
      SadDocumentInvoiceLineLedgerJournals<DeSerializersT>,
      DeSerializersT,
      SadDocumentLineLedgerJournalsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SadDocumentInvoiceLineLedgerJournals<DeSerializers>>;
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
         * Static representation of the {@link recordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_ID: fieldBuilder.buildEdmTypeField(
          'RecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link invoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link ledgerAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'LedgerAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemCommodityCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_COMMODITY_CODE: fieldBuilder.buildEdmTypeField(
          'ItemCommodityCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link position} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION: fieldBuilder.buildEdmTypeField(
          'Position',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link sadDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAD_DATE: fieldBuilder.buildEdmTypeField(
          'SADDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link invoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE: fieldBuilder.buildEdmTypeField('Invoice', 'Edm.String', true),
        /**
         * Static representation of the {@link sadNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAD_NUMBER: fieldBuilder.buildEdmTypeField(
          'SADNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SadDocumentInvoiceLineLedgerJournals)
      };
    }

    return this._schema;
  }
}
