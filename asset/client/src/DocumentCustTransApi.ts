/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DocumentCustTrans } from './DocumentCustTrans';
import { DocumentCustTransRequestBuilder } from './DocumentCustTransRequestBuilder';
import { DocumentProjectInvoiceBasesApi } from './DocumentProjectInvoiceBasesApi';
import { BusinessDocumentSalesInvoiceBasesApi } from './BusinessDocumentSalesInvoiceBasesApi';
import { LedgerTransType } from './LedgerTransType';
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
export class DocumentCustTransApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DocumentCustTrans<DeSerializersT>, DeSerializersT>
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
  ): DocumentCustTransApi<DeSerializersT> {
    return new DocumentCustTransApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link documentProjectInvoiceBase} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJECT_INVOICE_BASE: OneToOneLink<
      DocumentCustTrans<DeSerializersT>,
      DeSerializersT,
      DocumentProjectInvoiceBasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessDocumentSalesInvoiceBase} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_SALES_INVOICE_BASE: OneToOneLink<
      DocumentCustTrans<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentSalesInvoiceBasesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DocumentProjectInvoiceBasesApi<DeSerializersT>,
      BusinessDocumentSalesInvoiceBasesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DOCUMENT_PROJECT_INVOICE_BASE: new OneToOneLink(
        'DocumentProjectInvoiceBase',
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

  entityConstructor = DocumentCustTrans;

  requestBuilder(): DocumentCustTransRequestBuilder<DeSerializersT> {
    return new DocumentCustTransRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DocumentCustTrans<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DocumentCustTrans<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DocumentCustTrans<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof DocumentCustTrans,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DocumentCustTrans,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DocumentCustTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      DocumentCustTrans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      DocumentCustTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE: OrderableEdmTypeField<
      DocumentCustTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATA_AREA: OrderableEdmTypeField<
      DocumentCustTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_TYPE: EnumField<
      DocumentCustTrans<DeSerializers>,
      DeSerializersT,
      LedgerTransType,
      true,
      true
    >;
    ACCOUNT_NUM: OrderableEdmTypeField<
      DocumentCustTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_TRANS_REC_ID: OrderableEdmTypeField<
      DocumentCustTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    AMOUNT_CUR: OrderableEdmTypeField<
      DocumentCustTrans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANS_TYPE_STR: OrderableEdmTypeField<
      DocumentCustTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link documentProjectInvoiceBase} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJECT_INVOICE_BASE: OneToOneLink<
      DocumentCustTrans<DeSerializersT>,
      DeSerializersT,
      DocumentProjectInvoiceBasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessDocumentSalesInvoiceBase} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_SALES_INVOICE_BASE: OneToOneLink<
      DocumentCustTrans<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentSalesInvoiceBasesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DocumentCustTrans<DeSerializers>>;
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
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'TransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', false),
        /**
         * Static representation of the {@link invoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE: fieldBuilder.buildEdmTypeField('Invoice', 'Edm.String', false),
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
         * Static representation of the {@link transType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_TYPE: fieldBuilder.buildEnumField(
          'TransType',
          LedgerTransType,
          true
        ),
        /**
         * Static representation of the {@link accountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'AccountNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custTransRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_TRANS_REC_ID: fieldBuilder.buildEdmTypeField(
          'CustTransRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link amountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'AmountCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transTypeStr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_TYPE_STR: fieldBuilder.buildEdmTypeField(
          'TransTypeStr',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DocumentCustTrans)
      };
    }

    return this._schema;
  }
}
