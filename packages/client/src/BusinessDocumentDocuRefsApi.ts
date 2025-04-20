/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessDocumentDocuRefs } from './BusinessDocumentDocuRefs';
import { BusinessDocumentDocuRefsRequestBuilder } from './BusinessDocumentDocuRefsRequestBuilder';
import { BusinessDocumentSalesInvoiceLineItemsApi } from './BusinessDocumentSalesInvoiceLineItemsApi';
import { BusinessDocumentSalesInvoiceBasesApi } from './BusinessDocumentSalesInvoiceBasesApi';
import { DocuRestriction } from './DocuRestriction';
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
  EdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BusinessDocumentDocuRefsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BusinessDocumentDocuRefs<DeSerializersT>, DeSerializersT>
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
  ): BusinessDocumentDocuRefsApi<DeSerializersT> {
    return new BusinessDocumentDocuRefsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link businessDocumentSalesInvoiceLineItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_SALES_INVOICE_LINE_ITEM: OneToOneLink<
      BusinessDocumentDocuRefs<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentSalesInvoiceLineItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessDocumentSalesInvoiceBase} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_SALES_INVOICE_BASE: OneToOneLink<
      BusinessDocumentDocuRefs<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentSalesInvoiceBasesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BusinessDocumentSalesInvoiceLineItemsApi<DeSerializersT>,
      BusinessDocumentSalesInvoiceBasesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUSINESS_DOCUMENT_SALES_INVOICE_LINE_ITEM: new OneToOneLink(
        'BusinessDocumentSalesInvoiceLineItem',
        this,
        linkedApis[0]
      ),
      BUSINESS_DOCUMENT_SALES_INVOICE_BASE: new OneToOneLink(
        'BusinessDocumentSalesInvoiceBase',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BusinessDocumentDocuRefs;

  requestBuilder(): BusinessDocumentDocuRefsRequestBuilder<DeSerializersT> {
    return new BusinessDocumentDocuRefsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BusinessDocumentDocuRefs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BusinessDocumentDocuRefs<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BusinessDocumentDocuRefs<DeSerializersT>,
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
    typeof BusinessDocumentDocuRefs,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BusinessDocumentDocuRefs,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DOCU_REF_REC_ID: OrderableEdmTypeField<
      BusinessDocumentDocuRefs<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    URI: OrderableEdmTypeField<
      BusinessDocumentDocuRefs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTENT_BASE_64: OrderableEdmTypeField<
      BusinessDocumentDocuRefs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESTRICTION_STR: OrderableEdmTypeField<
      BusinessDocumentDocuRefs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILE_TYPE: OrderableEdmTypeField<
      BusinessDocumentDocuRefs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_TYPE: OrderableEdmTypeField<
      BusinessDocumentDocuRefs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE_ID: OrderableEdmTypeField<
      BusinessDocumentDocuRefs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESTRICTION: EnumField<
      BusinessDocumentDocuRefs<DeSerializers>,
      DeSerializersT,
      DocuRestriction,
      true,
      true
    >;
    REF_TABLE_ID: OrderableEdmTypeField<
      BusinessDocumentDocuRefs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CONTENT: EdmTypeField<
      BusinessDocumentDocuRefs<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      BusinessDocumentDocuRefs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REF_REC_ID: OrderableEdmTypeField<
      BusinessDocumentDocuRefs<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FILE_NAME: OrderableEdmTypeField<
      BusinessDocumentDocuRefs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessDocumentSalesInvoiceLineItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_SALES_INVOICE_LINE_ITEM: OneToOneLink<
      BusinessDocumentDocuRefs<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentSalesInvoiceLineItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessDocumentSalesInvoiceBase} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_SALES_INVOICE_BASE: OneToOneLink<
      BusinessDocumentDocuRefs<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentSalesInvoiceBasesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BusinessDocumentDocuRefs<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link docuRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCU_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'DocuRefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link uri} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URI: fieldBuilder.buildEdmTypeField('URI', 'Edm.String', true),
        /**
         * Static representation of the {@link contentBase64} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTENT_BASE_64: fieldBuilder.buildEdmTypeField(
          'ContentBase64',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link restrictionStr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESTRICTION_STR: fieldBuilder.buildEdmTypeField(
          'RestrictionStr',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fileType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_TYPE: fieldBuilder.buildEdmTypeField(
          'FileType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'DocumentType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link typeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_ID: fieldBuilder.buildEdmTypeField('TypeId', 'Edm.String', true),
        /**
         * Static representation of the {@link restriction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESTRICTION: fieldBuilder.buildEnumField(
          'Restriction',
          DocuRestriction,
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
         * Static representation of the {@link content} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTENT: fieldBuilder.buildEdmTypeField('Content', 'Edm.Binary', true),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
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
         * Static representation of the {@link fileName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_NAME: fieldBuilder.buildEdmTypeField(
          'FileName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BusinessDocumentDocuRefs)
      };
    }

    return this._schema;
  }
}
