/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SadDocumentLineLedgerJournals } from './SadDocumentLineLedgerJournals';
import { SadDocumentLineLedgerJournalsRequestBuilder } from './SadDocumentLineLedgerJournalsRequestBuilder';
import { SadDocumentLedgerJournalsApi } from './SadDocumentLedgerJournalsApi';
import { SadDocumentInvoiceLineLedgerJournalsApi } from './SadDocumentInvoiceLineLedgerJournalsApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class SadDocumentLineLedgerJournalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SadDocumentLineLedgerJournals<DeSerializersT>, DeSerializersT>
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
  ): SadDocumentLineLedgerJournalsApi<DeSerializersT> {
    return new SadDocumentLineLedgerJournalsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link sadDocumentLedgerJournal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SAD_DOCUMENT_LEDGER_JOURNAL: OneToOneLink<
      SadDocumentLineLedgerJournals<DeSerializersT>,
      DeSerializersT,
      SadDocumentLedgerJournalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sadDocumentInvoiceLineLedgerJournal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SAD_DOCUMENT_INVOICE_LINE_LEDGER_JOURNAL: OneToManyLink<
      SadDocumentLineLedgerJournals<DeSerializersT>,
      DeSerializersT,
      SadDocumentInvoiceLineLedgerJournalsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SadDocumentLedgerJournalsApi<DeSerializersT>,
      SadDocumentInvoiceLineLedgerJournalsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SAD_DOCUMENT_LEDGER_JOURNAL: new OneToOneLink(
        'SADDocumentLedgerJournal',
        this,
        linkedApis[0]
      ),
      SAD_DOCUMENT_INVOICE_LINE_LEDGER_JOURNAL: new OneToManyLink(
        'SADDocumentInvoiceLineLedgerJournal',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = SadDocumentLineLedgerJournals;

  requestBuilder(): SadDocumentLineLedgerJournalsRequestBuilder<DeSerializersT> {
    return new SadDocumentLineLedgerJournalsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SadDocumentLineLedgerJournals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SadDocumentLineLedgerJournals<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SadDocumentLineLedgerJournals<DeSerializersT>,
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
    typeof SadDocumentLineLedgerJournals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SadDocumentLineLedgerJournals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SadDocumentLineLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAD_DATE: OrderableEdmTypeField<
      SadDocumentLineLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SAD_NUMBER: OrderableEdmTypeField<
      SadDocumentLineLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSITION: OrderableEdmTypeField<
      SadDocumentLineLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_TAX_AMOUNT: OrderableEdmTypeField<
      SadDocumentLineLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      SadDocumentLineLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUTY: OrderableEdmTypeField<
      SadDocumentLineLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_TAX_CODE: OrderableEdmTypeField<
      SadDocumentLineLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCISE: OrderableEdmTypeField<
      SadDocumentLineLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      SadDocumentLineLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BASE_FOR_SAD: OrderableEdmTypeField<
      SadDocumentLineLedgerJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sadDocumentLedgerJournal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SAD_DOCUMENT_LEDGER_JOURNAL: OneToOneLink<
      SadDocumentLineLedgerJournals<DeSerializersT>,
      DeSerializersT,
      SadDocumentLedgerJournalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sadDocumentInvoiceLineLedgerJournal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SAD_DOCUMENT_INVOICE_LINE_LEDGER_JOURNAL: OneToManyLink<
      SadDocumentLineLedgerJournals<DeSerializersT>,
      DeSerializersT,
      SadDocumentInvoiceLineLedgerJournalsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SadDocumentLineLedgerJournals<DeSerializers>>;
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
         * Static representation of the {@link sadDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAD_DATE: fieldBuilder.buildEdmTypeField(
          'SADDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sadNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAD_NUMBER: fieldBuilder.buildEdmTypeField(
          'SADNumber',
          'Edm.String',
          false
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
         * Static representation of the {@link salesTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SalesTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link duty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUTY: fieldBuilder.buildEdmTypeField('Duty', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link salesTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link excise} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE: fieldBuilder.buildEdmTypeField('Excise', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link taxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxItemGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link baseForSad} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_FOR_SAD: fieldBuilder.buildEdmTypeField(
          'BaseForSAD',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SadDocumentLineLedgerJournals)
      };
    }

    return this._schema;
  }
}
