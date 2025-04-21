/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessDocumentBaseDocuments } from './BusinessDocumentBaseDocuments';
import { BusinessDocumentBaseDocumentsRequestBuilder } from './BusinessDocumentBaseDocumentsRequestBuilder';
import { BusinessDocumentSalesInvoiceBasesApi } from './BusinessDocumentSalesInvoiceBasesApi';
import { DocumentTypeIt } from './DocumentTypeIt';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BusinessDocumentBaseDocumentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BusinessDocumentBaseDocuments<DeSerializersT>, DeSerializersT>
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
  ): BusinessDocumentBaseDocumentsApi<DeSerializersT> {
    return new BusinessDocumentBaseDocumentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link businessDocumentSalesInvoiceBase} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_SALES_INVOICE_BASE: OneToOneLink<
      BusinessDocumentBaseDocuments<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentSalesInvoiceBasesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BusinessDocumentSalesInvoiceBasesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BUSINESS_DOCUMENT_SALES_INVOICE_BASE: new OneToOneLink(
        'BusinessDocumentSalesInvoiceBase',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = BusinessDocumentBaseDocuments;

  requestBuilder(): BusinessDocumentBaseDocumentsRequestBuilder<DeSerializersT> {
    return new BusinessDocumentBaseDocumentsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BusinessDocumentBaseDocuments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BusinessDocumentBaseDocuments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BusinessDocumentBaseDocuments<DeSerializersT>,
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
    typeof BusinessDocumentBaseDocuments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BusinessDocumentBaseDocuments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BusinessDocumentBaseDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_DOCUMENT_REC_ID: OrderableEdmTypeField<
      BusinessDocumentBaseDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CIP_ECODE: OrderableEdmTypeField<
      BusinessDocumentBaseDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      BusinessDocumentBaseDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ORDER_OR_AGREEMENT_CODE: OrderableEdmTypeField<
      BusinessDocumentBaseDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_NUMBER: OrderableEdmTypeField<
      BusinessDocumentBaseDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      BusinessDocumentBaseDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TENDER_CODE: OrderableEdmTypeField<
      BusinessDocumentBaseDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REF_REC_ID: OrderableEdmTypeField<
      BusinessDocumentBaseDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SALES_ID: OrderableEdmTypeField<
      BusinessDocumentBaseDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_TYPE: EnumField<
      BusinessDocumentBaseDocuments<DeSerializers>,
      DeSerializersT,
      DocumentTypeIt,
      true,
      true
    >;
    DOCUMENT_TYPE_STR: OrderableEdmTypeField<
      BusinessDocumentBaseDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REF_TABLE_ID: OrderableEdmTypeField<
      BusinessDocumentBaseDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      BusinessDocumentBaseDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessDocumentSalesInvoiceBase} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_SALES_INVOICE_BASE: OneToOneLink<
      BusinessDocumentBaseDocuments<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentSalesInvoiceBasesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BusinessDocumentBaseDocuments<DeSerializers>>;
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
         * Static representation of the {@link baseDocumentRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_DOCUMENT_REC_ID: fieldBuilder.buildEdmTypeField(
          'BaseDocumentRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link cipEcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CIP_ECODE: fieldBuilder.buildEdmTypeField(
          'CIPEcode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'DocumentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link orderOrAgreementCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_OR_AGREEMENT_CODE: fieldBuilder.buildEdmTypeField(
          'OrderOrAgreementCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DocumentNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tenderCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENDER_CODE: fieldBuilder.buildEdmTypeField(
          'TenderCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link refRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'RefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link salesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ID: fieldBuilder.buildEdmTypeField('SalesId', 'Edm.String', true),
        /**
         * Static representation of the {@link documentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TYPE: fieldBuilder.buildEnumField(
          'DocumentType',
          DocumentTypeIt,
          true
        ),
        /**
         * Static representation of the {@link documentTypeStr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TYPE_STR: fieldBuilder.buildEdmTypeField(
          'DocumentTypeStr',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link refTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'RefTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BusinessDocumentBaseDocuments)
      };
    }

    return this._schema;
  }
}
