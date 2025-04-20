/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DocumentCustVendCreditInvoicingJours } from './DocumentCustVendCreditInvoicingJours';
import { DocumentCustVendCreditInvoicingJoursRequestBuilder } from './DocumentCustVendCreditInvoicingJoursRequestBuilder';
import { BusinessDocumentSalesInvoiceBasesApi } from './BusinessDocumentSalesInvoiceBasesApi';
import { DocumentProjectInvoiceBasesApi } from './DocumentProjectInvoiceBasesApi';
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
export class DocumentCustVendCreditInvoicingJoursApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      DocumentCustVendCreditInvoicingJours<DeSerializersT>,
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
  ): DocumentCustVendCreditInvoicingJoursApi<DeSerializersT> {
    return new DocumentCustVendCreditInvoicingJoursApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link custInvoiceJourCorrection} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_INVOICE_JOUR_CORRECTION: OneToOneLink<
      DocumentCustVendCreditInvoicingJours<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentSalesInvoiceBasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projInvoiceJourCorrected} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJ_INVOICE_JOUR_CORRECTED: OneToOneLink<
      DocumentCustVendCreditInvoicingJours<DeSerializersT>,
      DeSerializersT,
      DocumentProjectInvoiceBasesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BusinessDocumentSalesInvoiceBasesApi<DeSerializersT>,
      DocumentProjectInvoiceBasesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CUST_INVOICE_JOUR_CORRECTION: new OneToOneLink(
        'CustInvoiceJourCorrection',
        this,
        linkedApis[0]
      ),
      PROJ_INVOICE_JOUR_CORRECTED: new OneToOneLink(
        'ProjInvoiceJourCorrected',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = DocumentCustVendCreditInvoicingJours;

  requestBuilder(): DocumentCustVendCreditInvoicingJoursRequestBuilder<DeSerializersT> {
    return new DocumentCustVendCreditInvoicingJoursRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    DocumentCustVendCreditInvoicingJours<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DocumentCustVendCreditInvoicingJours<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DocumentCustVendCreditInvoicingJours<DeSerializersT>,
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
    typeof DocumentCustVendCreditInvoicingJours,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DocumentCustVendCreditInvoicingJours,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DocumentCustVendCreditInvoicingJours<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_TABLE_ID: OrderableEdmTypeField<
      DocumentCustVendCreditInvoicingJours<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INVOICE_REC_ID: OrderableEdmTypeField<
      DocumentCustVendCreditInvoicingJours<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DATA_AREA: OrderableEdmTypeField<
      DocumentCustVendCreditInvoicingJours<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_REF_REC_ID: OrderableEdmTypeField<
      DocumentCustVendCreditInvoicingJours<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CORRECTED_INVOICE_REC_ID: OrderableEdmTypeField<
      DocumentCustVendCreditInvoicingJours<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUST_VEND_CORRECTED_INVOICE_DATE: OrderableEdmTypeField<
      DocumentCustVendCreditInvoicingJours<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_INVOICE_OPERATION: OrderableEdmTypeField<
      DocumentCustVendCreditInvoicingJours<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custInvoiceJourCorrection} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_INVOICE_JOUR_CORRECTION: OneToOneLink<
      DocumentCustVendCreditInvoicingJours<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentSalesInvoiceBasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projInvoiceJourCorrected} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJ_INVOICE_JOUR_CORRECTED: OneToOneLink<
      DocumentCustVendCreditInvoicingJours<DeSerializersT>,
      DeSerializersT,
      DocumentProjectInvoiceBasesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DocumentCustVendCreditInvoicingJours<DeSerializers>>;
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
         * Static representation of the {@link invoiceTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link invoiceRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_REC_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceRecId',
          'Edm.Int64',
          false
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
         * Static representation of the {@link reasonRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'ReasonRefRecID',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link correctedInvoiceRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED_INVOICE_REC_ID: fieldBuilder.buildEdmTypeField(
          'CorrectedInvoiceRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link custVendCorrectedInvoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_VEND_CORRECTED_INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'CustVendCorrectedInvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxInvoiceOperation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_INVOICE_OPERATION: fieldBuilder.buildEdmTypeField(
          'TaxInvoiceOperation',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DocumentCustVendCreditInvoicingJours)
      };
    }

    return this._schema;
  }
}
