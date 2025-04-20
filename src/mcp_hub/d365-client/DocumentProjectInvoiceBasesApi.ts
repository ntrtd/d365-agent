/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DocumentProjectInvoiceBases } from './DocumentProjectInvoiceBases';
import { DocumentProjectInvoiceBasesRequestBuilder } from './DocumentProjectInvoiceBasesRequestBuilder';
import { DocumentProjInvoiceOnAccLinesApi } from './DocumentProjInvoiceOnAccLinesApi';
import { DocumentCustTransApi } from './DocumentCustTransApi';
import { DocumentProjInvoiceRevenueLinesApi } from './DocumentProjInvoiceRevenueLinesApi';
import { DocumentProjInvoiceCostLinesApi } from './DocumentProjInvoiceCostLinesApi';
import { DocumentProjInvoiceEmplLinesApi } from './DocumentProjInvoiceEmplLinesApi';
import { BusinessDocumentTaxTransactionsApi } from './BusinessDocumentTaxTransactionsApi';
import { DocumentProjInvoiceItemLinesApi } from './DocumentProjInvoiceItemLinesApi';
import { DocumentCustVendCreditInvoicingJoursApi } from './DocumentCustVendCreditInvoicingJoursApi';
import { NoYes } from './NoYes';
import { ProjInvoiceType } from './ProjInvoiceType';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class DocumentProjectInvoiceBasesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DocumentProjectInvoiceBases<DeSerializersT>, DeSerializersT>
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
  ): DocumentProjectInvoiceBasesApi<DeSerializersT> {
    return new DocumentProjectInvoiceBasesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link documentProjInvoiceOnAccLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJ_INVOICE_ON_ACC_LINE: OneToManyLink<
      DocumentProjectInvoiceBases<DeSerializersT>,
      DeSerializersT,
      DocumentProjInvoiceOnAccLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link documentCustTrans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_CUST_TRANS: OneToManyLink<
      DocumentProjectInvoiceBases<DeSerializersT>,
      DeSerializersT,
      DocumentCustTransApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link documentProjInvoiceRevenueLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJ_INVOICE_REVENUE_LINE: OneToManyLink<
      DocumentProjectInvoiceBases<DeSerializersT>,
      DeSerializersT,
      DocumentProjInvoiceRevenueLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link documentProjInvoiceCostLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJ_INVOICE_COST_LINE: OneToManyLink<
      DocumentProjectInvoiceBases<DeSerializersT>,
      DeSerializersT,
      DocumentProjInvoiceCostLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link documentProjInvoiceEmplLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJ_INVOICE_EMPL_LINE: OneToManyLink<
      DocumentProjectInvoiceBases<DeSerializersT>,
      DeSerializersT,
      DocumentProjInvoiceEmplLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentTaxTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_TAX_TRANSACTION: OneToManyLink<
      DocumentProjectInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentTaxTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link documentProjInvoiceItemLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJ_INVOICE_ITEM_LINE: OneToManyLink<
      DocumentProjectInvoiceBases<DeSerializersT>,
      DeSerializersT,
      DocumentProjInvoiceItemLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link custVendCreditInvoicingJour} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_VEND_CREDIT_INVOICING_JOUR: OneToManyLink<
      DocumentProjectInvoiceBases<DeSerializersT>,
      DeSerializersT,
      DocumentCustVendCreditInvoicingJoursApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DocumentProjInvoiceOnAccLinesApi<DeSerializersT>,
      DocumentCustTransApi<DeSerializersT>,
      DocumentProjInvoiceRevenueLinesApi<DeSerializersT>,
      DocumentProjInvoiceCostLinesApi<DeSerializersT>,
      DocumentProjInvoiceEmplLinesApi<DeSerializersT>,
      BusinessDocumentTaxTransactionsApi<DeSerializersT>,
      DocumentProjInvoiceItemLinesApi<DeSerializersT>,
      DocumentCustVendCreditInvoicingJoursApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DOCUMENT_PROJ_INVOICE_ON_ACC_LINE: new OneToManyLink(
        'DocumentProjInvoiceOnAccLine',
        this,
        linkedApis[0]
      ),
      DOCUMENT_CUST_TRANS: new OneToManyLink(
        'DocumentCustTrans',
        this,
        linkedApis[1]
      ),
      DOCUMENT_PROJ_INVOICE_REVENUE_LINE: new OneToManyLink(
        'DocumentProjInvoiceRevenueLine',
        this,
        linkedApis[2]
      ),
      DOCUMENT_PROJ_INVOICE_COST_LINE: new OneToManyLink(
        'DocumentProjInvoiceCostLine',
        this,
        linkedApis[3]
      ),
      DOCUMENT_PROJ_INVOICE_EMPL_LINE: new OneToManyLink(
        'DocumentProjInvoiceEmplLine',
        this,
        linkedApis[4]
      ),
      BUSINESS_DOCUMENT_TAX_TRANSACTION: new OneToManyLink(
        'BusinessDocumentTaxTransaction',
        this,
        linkedApis[5]
      ),
      DOCUMENT_PROJ_INVOICE_ITEM_LINE: new OneToManyLink(
        'DocumentProjInvoiceItemLine',
        this,
        linkedApis[6]
      ),
      CUST_VEND_CREDIT_INVOICING_JOUR: new OneToManyLink(
        'CustVendCreditInvoicingJour',
        this,
        linkedApis[7]
      )
    };
    return this;
  }

  entityConstructor = DocumentProjectInvoiceBases;

  requestBuilder(): DocumentProjectInvoiceBasesRequestBuilder<DeSerializersT> {
    return new DocumentProjectInvoiceBasesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DocumentProjectInvoiceBases<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DocumentProjectInvoiceBases<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DocumentProjectInvoiceBases<DeSerializersT>,
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
    typeof DocumentProjectInvoiceBases,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DocumentProjectInvoiceBases,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DocumentProjectInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJ_INVOICE_ID: OrderableEdmTypeField<
      DocumentProjectInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      DocumentProjectInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NUMBER_SEQUENCE_GROUP_ID: OrderableEdmTypeField<
      DocumentProjectInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_ACCOUNT_VAT_REGISTRATION_NUMBER: OrderableEdmTypeField<
      DocumentProjectInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_TABLE_REC_ID: OrderableEdmTypeField<
      DocumentProjectInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DATA_AREA: OrderableEdmTypeField<
      DocumentProjectInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      DocumentProjectInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_VOUCHER: OrderableEdmTypeField<
      DocumentProjectInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_INVOICE_JOUR_REC_ID: OrderableEdmTypeField<
      DocumentProjectInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_INVOICE_SALES_ID_ID: OrderableEdmTypeField<
      DocumentProjectInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_INVOICE_TYPE_STR: OrderableEdmTypeField<
      DocumentProjectInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT_ADDRESS: OrderableEdmTypeField<
      DocumentProjectInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREPAYMENT: EnumField<
      DocumentProjectInvoiceBases<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_ACCOUNT_NAME: OrderableEdmTypeField<
      DocumentProjectInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_AMOUNT: OrderableEdmTypeField<
      DocumentProjectInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUM_LINE_DISC: OrderableEdmTypeField<
      DocumentProjectInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_INVOICE_JOUR_TABLE_ID: OrderableEdmTypeField<
      DocumentProjectInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INVOICE_ACCOUNT_ADDRESS_ADDITIONAL: OrderableEdmTypeField<
      DocumentProjectInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_INVOICE_TYPE: EnumField<
      DocumentProjectInvoiceBases<DeSerializers>,
      DeSerializersT,
      ProjInvoiceType,
      true,
      true
    >;
    ORDER_ACCOUNT: OrderableEdmTypeField<
      DocumentProjectInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_ID: OrderableEdmTypeField<
      DocumentProjectInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link documentProjInvoiceOnAccLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJ_INVOICE_ON_ACC_LINE: OneToManyLink<
      DocumentProjectInvoiceBases<DeSerializersT>,
      DeSerializersT,
      DocumentProjInvoiceOnAccLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link documentCustTrans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_CUST_TRANS: OneToManyLink<
      DocumentProjectInvoiceBases<DeSerializersT>,
      DeSerializersT,
      DocumentCustTransApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link documentProjInvoiceRevenueLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJ_INVOICE_REVENUE_LINE: OneToManyLink<
      DocumentProjectInvoiceBases<DeSerializersT>,
      DeSerializersT,
      DocumentProjInvoiceRevenueLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link documentProjInvoiceCostLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJ_INVOICE_COST_LINE: OneToManyLink<
      DocumentProjectInvoiceBases<DeSerializersT>,
      DeSerializersT,
      DocumentProjInvoiceCostLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link documentProjInvoiceEmplLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJ_INVOICE_EMPL_LINE: OneToManyLink<
      DocumentProjectInvoiceBases<DeSerializersT>,
      DeSerializersT,
      DocumentProjInvoiceEmplLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentTaxTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_TAX_TRANSACTION: OneToManyLink<
      DocumentProjectInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentTaxTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link documentProjInvoiceItemLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_PROJ_INVOICE_ITEM_LINE: OneToManyLink<
      DocumentProjectInvoiceBases<DeSerializersT>,
      DeSerializersT,
      DocumentProjInvoiceItemLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link custVendCreditInvoicingJour} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_VEND_CREDIT_INVOICING_JOUR: OneToManyLink<
      DocumentProjectInvoiceBases<DeSerializersT>,
      DeSerializersT,
      DocumentCustVendCreditInvoicingJoursApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DocumentProjectInvoiceBases<DeSerializers>>;
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
         * Static representation of the {@link projInvoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'ProjInvoiceId',
          'Edm.String',
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
         * Static representation of the {@link numberSequenceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'NumberSequenceGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link invoiceAccountVatRegistrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT_VAT_REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceAccountVATRegistrationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custTableRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_TABLE_REC_ID: fieldBuilder.buildEdmTypeField(
          'CustTableRecId',
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
         * Static representation of the {@link invoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAccount',
          'Edm.String',
          true
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
         * Static representation of the {@link projInvoiceJourRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_INVOICE_JOUR_REC_ID: fieldBuilder.buildEdmTypeField(
          'ProjInvoiceJourRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxInvoiceSalesIdId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_INVOICE_SALES_ID_ID: fieldBuilder.buildEdmTypeField(
          'TaxInvoiceSalesId_ID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projInvoiceTypeStr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_INVOICE_TYPE_STR: fieldBuilder.buildEdmTypeField(
          'ProjInvoiceTypeStr',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAccountAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT_ADDRESS: fieldBuilder.buildEdmTypeField(
          'InvoiceAccountAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prepayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPAYMENT: fieldBuilder.buildEnumField('Prepayment', NoYes, true),
        /**
         * Static representation of the {@link invoiceAccountName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT_NAME: fieldBuilder.buildEdmTypeField(
          'InvoiceAccountName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sumLineDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_LINE_DISC: fieldBuilder.buildEdmTypeField(
          'SumLineDisc',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projInvoiceJourTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_INVOICE_JOUR_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'ProjInvoiceJourTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link invoiceAccountAddressAdditional} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT_ADDRESS_ADDITIONAL: fieldBuilder.buildEdmTypeField(
          'InvoiceAccountAddressAdditional',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projInvoiceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_INVOICE_TYPE: fieldBuilder.buildEnumField(
          'ProjInvoiceType',
          ProjInvoiceType,
          true
        ),
        /**
         * Static representation of the {@link orderAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'OrderAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_ID: fieldBuilder.buildEdmTypeField(
          'CurrencyId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DocumentProjectInvoiceBases)
      };
    }

    return this._schema;
  }
}
