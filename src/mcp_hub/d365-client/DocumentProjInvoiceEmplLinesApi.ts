/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DocumentProjInvoiceEmplLines } from './DocumentProjInvoiceEmplLines';
import { DocumentProjInvoiceEmplLinesRequestBuilder } from './DocumentProjInvoiceEmplLinesRequestBuilder';
import { DocumentProjectInvoiceBasesApi } from './DocumentProjectInvoiceBasesApi';
import { BusinessDocumentTaxTransactionsApi } from './BusinessDocumentTaxTransactionsApi';
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
export class DocumentProjInvoiceEmplLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DocumentProjInvoiceEmplLines<DeSerializersT>, DeSerializersT>
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
  ): DocumentProjInvoiceEmplLinesApi<DeSerializersT> {
    return new DocumentProjInvoiceEmplLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link documentProjectInvoiceBase} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJECT_INVOICE_BASE: OneToOneLink<
      DocumentProjInvoiceEmplLines<DeSerializersT>,
      DeSerializersT,
      DocumentProjectInvoiceBasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentTaxTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_TAX_TRANSACTION: OneToManyLink<
      DocumentProjInvoiceEmplLines<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentTaxTransactionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DocumentProjectInvoiceBasesApi<DeSerializersT>,
      BusinessDocumentTaxTransactionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DOCUMENT_PROJECT_INVOICE_BASE: new OneToOneLink(
        'DocumentProjectInvoiceBase',
        this,
        linkedApis[0]
      ),
      BUSINESS_DOCUMENT_TAX_TRANSACTION: new OneToManyLink(
        'BusinessDocumentTaxTransaction',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = DocumentProjInvoiceEmplLines;

  requestBuilder(): DocumentProjInvoiceEmplLinesRequestBuilder<DeSerializersT> {
    return new DocumentProjInvoiceEmplLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DocumentProjInvoiceEmplLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DocumentProjInvoiceEmplLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DocumentProjInvoiceEmplLines<DeSerializersT>,
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
    typeof DocumentProjInvoiceEmplLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DocumentProjInvoiceEmplLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DocumentProjInvoiceEmplLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANS_ID: OrderableEdmTypeField<
      DocumentProjInvoiceEmplLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TXT: OrderableEdmTypeField<
      DocumentProjInvoiceEmplLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_INVOICE_ID: OrderableEdmTypeField<
      DocumentProjInvoiceEmplLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_AREA: OrderableEdmTypeField<
      DocumentProjInvoiceEmplLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      DocumentProjInvoiceEmplLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEDGER_VOUCHER: OrderableEdmTypeField<
      DocumentProjInvoiceEmplLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QTY: OrderableEdmTypeField<
      DocumentProjInvoiceEmplLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      DocumentProjInvoiceEmplLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_INVOICE_EMPL_TABLE_ID: OrderableEdmTypeField<
      DocumentProjInvoiceEmplLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PROJ_INVOICE_EMPL_REC_ID: OrderableEdmTypeField<
      DocumentProjInvoiceEmplLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      DocumentProjInvoiceEmplLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      DocumentProjInvoiceEmplLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_GROUP_ID: OrderableEdmTypeField<
      DocumentProjInvoiceEmplLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_AMOUNT: OrderableEdmTypeField<
      DocumentProjInvoiceEmplLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link documentProjectInvoiceBase} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJECT_INVOICE_BASE: OneToOneLink<
      DocumentProjInvoiceEmplLines<DeSerializersT>,
      DeSerializersT,
      DocumentProjectInvoiceBasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentTaxTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_TAX_TRANSACTION: OneToManyLink<
      DocumentProjInvoiceEmplLines<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentTaxTransactionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DocumentProjInvoiceEmplLines<DeSerializers>>;
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
         * Static representation of the {@link transId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_ID: fieldBuilder.buildEdmTypeField(
          'TransId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link txt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TXT: fieldBuilder.buildEdmTypeField('Txt', 'Edm.String', true),
        /**
         * Static representation of the {@link projInvoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'ProjInvoiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA: fieldBuilder.buildEdmTypeField(
          'DataArea',
          'Edm.String',
          true
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
         * Static representation of the {@link ledgerVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_VOUCHER: fieldBuilder.buildEdmTypeField(
          'LedgerVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY: fieldBuilder.buildEdmTypeField('Qty', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link taxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projInvoiceEmplTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_INVOICE_EMPL_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'ProjInvoiceEmplTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link projInvoiceEmplRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_INVOICE_EMPL_REC_ID: fieldBuilder.buildEdmTypeField(
          'ProjInvoiceEmplRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'TransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link salesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'SalesPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'TaxGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DocumentProjInvoiceEmplLines)
      };
    }

    return this._schema;
  }
}
