/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessDocumentSalesInvoiceBases } from './BusinessDocumentSalesInvoiceBases';
import { BusinessDocumentSalesInvoiceBasesRequestBuilder } from './BusinessDocumentSalesInvoiceBasesRequestBuilder';
import { BusinessDocumentEInvoicePropertiesApi } from './BusinessDocumentEInvoicePropertiesApi';
import { BusinessDocumentSalesInvoiceLineItemsApi } from './BusinessDocumentSalesInvoiceLineItemsApi';
import { BusinessDocumentNonStockedPackingSlipLinesApi } from './BusinessDocumentNonStockedPackingSlipLinesApi';
import { BusinessDocumentDocuRefsApi } from './BusinessDocumentDocuRefsApi';
import { BusinessDocumentStockedPackingSlipLinesV3Api } from './BusinessDocumentStockedPackingSlipLinesV3Api';
import { BusinessDocumentInvoicedPackingSlipLinesV3Api } from './BusinessDocumentInvoicedPackingSlipLinesV3Api';
import { DocumentCustTransApi } from './DocumentCustTransApi';
import { DocumentBatchSubmissionItemsApi } from './DocumentBatchSubmissionItemsApi';
import { BusinessDocumentInvoicedPackingSlipLinesV2Api } from './BusinessDocumentInvoicedPackingSlipLinesV2Api';
import { BusinessDocumentNonStockedPackingSlipLinesV2Api } from './BusinessDocumentNonStockedPackingSlipLinesV2Api';
import { BusinessDocumentNonStockedPackingSlipLinesV3Api } from './BusinessDocumentNonStockedPackingSlipLinesV3Api';
import { BusinessDocumentTaxTransactionsApi } from './BusinessDocumentTaxTransactionsApi';
import { BusinessDocumentCustPaymSchedulesApi } from './BusinessDocumentCustPaymSchedulesApi';
import { BusinessDocumentStockedPackingSlipLinesV2Api } from './BusinessDocumentStockedPackingSlipLinesV2Api';
import { BusinessDocumentBaseDocumentsApi } from './BusinessDocumentBaseDocumentsApi';
import { DocumentCustVendCreditInvoicingJoursApi } from './DocumentCustVendCreditInvoicingJoursApi';
import { BusinessDocumentInvoicedPackingSlipLinesApi } from './BusinessDocumentInvoicedPackingSlipLinesApi';
import { BusinessDocumentMarkupTransactionsApi } from './BusinessDocumentMarkupTransactionsApi';
import { BusinessDocumentStockedPackingSlipLinesApi } from './BusinessDocumentStockedPackingSlipLinesApi';
import { NoYes } from './NoYes';
import { SoleShareholderIt } from './SoleShareholderIt';
import { LiquidationIt } from './LiquidationIt';
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
export class BusinessDocumentSalesInvoiceBasesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BusinessDocumentSalesInvoiceBases<DeSerializersT>, DeSerializersT>
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
  ): BusinessDocumentSalesInvoiceBasesApi<DeSerializersT> {
    return new BusinessDocumentSalesInvoiceBasesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentEInvoiceProperty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_E_INVOICE_PROPERTY: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentEInvoicePropertiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentSalesInvoiceLineItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_SALES_INVOICE_LINE_ITEM: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentSalesInvoiceLineItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentNonStockedPackingSlipLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_NON_STOCKED_PACKING_SLIP_LINE: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentNonStockedPackingSlipLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentDocuRef} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_DOCU_REF: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentDocuRefsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentStockedPackingSlipLineV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_STOCKED_PACKING_SLIP_LINE_V_3: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentStockedPackingSlipLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentInvoicedPackingSlipLineV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_INVOICED_PACKING_SLIP_LINE_V_3: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentInvoicedPackingSlipLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link documentCustTrans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_CUST_TRANS: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      DocumentCustTransApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link documentBatchSubmissionItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_BATCH_SUBMISSION_ITEM: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      DocumentBatchSubmissionItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentInvoicedPackingSlipLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_INVOICED_PACKING_SLIP_LINE_V_2: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentInvoicedPackingSlipLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentNonStockedPackingSlipLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_NON_STOCKED_PACKING_SLIP_LINE_V_2: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentNonStockedPackingSlipLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentNonStockedPackingSlipLineV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_NON_STOCKED_PACKING_SLIP_LINE_V_3: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentNonStockedPackingSlipLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentTaxTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_TAX_TRANSACTION: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentTaxTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentCustPaymSchedule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_CUST_PAYM_SCHEDULE: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentCustPaymSchedulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentStockedPackingSlipLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_STOCKED_PACKING_SLIP_LINE_V_2: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentStockedPackingSlipLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentBaseDocument} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_BASE_DOCUMENT: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentBaseDocumentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custVendCreditInvoicingJour} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_VEND_CREDIT_INVOICING_JOUR: OneToOneLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      DocumentCustVendCreditInvoicingJoursApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentInvoicedPackingSlipLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_INVOICED_PACKING_SLIP_LINE: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentInvoicedPackingSlipLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentMarkupTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_MARKUP_TRANSACTION: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentMarkupTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentStockedPackingSlipLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_STOCKED_PACKING_SLIP_LINE: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentStockedPackingSlipLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BusinessDocumentEInvoicePropertiesApi<DeSerializersT>,
      BusinessDocumentSalesInvoiceLineItemsApi<DeSerializersT>,
      BusinessDocumentNonStockedPackingSlipLinesApi<DeSerializersT>,
      BusinessDocumentDocuRefsApi<DeSerializersT>,
      BusinessDocumentStockedPackingSlipLinesV3Api<DeSerializersT>,
      BusinessDocumentInvoicedPackingSlipLinesV3Api<DeSerializersT>,
      DocumentCustTransApi<DeSerializersT>,
      DocumentBatchSubmissionItemsApi<DeSerializersT>,
      BusinessDocumentInvoicedPackingSlipLinesV2Api<DeSerializersT>,
      BusinessDocumentNonStockedPackingSlipLinesV2Api<DeSerializersT>,
      BusinessDocumentNonStockedPackingSlipLinesV3Api<DeSerializersT>,
      BusinessDocumentTaxTransactionsApi<DeSerializersT>,
      BusinessDocumentCustPaymSchedulesApi<DeSerializersT>,
      BusinessDocumentStockedPackingSlipLinesV2Api<DeSerializersT>,
      BusinessDocumentBaseDocumentsApi<DeSerializersT>,
      DocumentCustVendCreditInvoicingJoursApi<DeSerializersT>,
      BusinessDocumentInvoicedPackingSlipLinesApi<DeSerializersT>,
      BusinessDocumentMarkupTransactionsApi<DeSerializersT>,
      BusinessDocumentStockedPackingSlipLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUSINESS_DOCUMENT_E_INVOICE_PROPERTY: new OneToManyLink(
        'BusinessDocumentEInvoiceProperty',
        this,
        linkedApis[0]
      ),
      BUSINESS_DOCUMENT_SALES_INVOICE_LINE_ITEM: new OneToManyLink(
        'BusinessDocumentSalesInvoiceLineItem',
        this,
        linkedApis[1]
      ),
      BUSINESS_DOCUMENT_NON_STOCKED_PACKING_SLIP_LINE: new OneToManyLink(
        'BusinessDocumentNonStockedPackingSlipLine',
        this,
        linkedApis[2]
      ),
      BUSINESS_DOCUMENT_DOCU_REF: new OneToManyLink(
        'BusinessDocumentDocuRef',
        this,
        linkedApis[3]
      ),
      BUSINESS_DOCUMENT_STOCKED_PACKING_SLIP_LINE_V_3: new OneToManyLink(
        'BusinessDocumentStockedPackingSlipLineV3',
        this,
        linkedApis[4]
      ),
      BUSINESS_DOCUMENT_INVOICED_PACKING_SLIP_LINE_V_3: new OneToManyLink(
        'BusinessDocumentInvoicedPackingSlipLineV3',
        this,
        linkedApis[5]
      ),
      DOCUMENT_CUST_TRANS: new OneToManyLink(
        'DocumentCustTrans',
        this,
        linkedApis[6]
      ),
      DOCUMENT_BATCH_SUBMISSION_ITEM: new OneToManyLink(
        'DocumentBatchSubmissionItem',
        this,
        linkedApis[7]
      ),
      BUSINESS_DOCUMENT_INVOICED_PACKING_SLIP_LINE_V_2: new OneToManyLink(
        'BusinessDocumentInvoicedPackingSlipLineV2',
        this,
        linkedApis[8]
      ),
      BUSINESS_DOCUMENT_NON_STOCKED_PACKING_SLIP_LINE_V_2: new OneToManyLink(
        'BusinessDocumentNonStockedPackingSlipLineV2',
        this,
        linkedApis[9]
      ),
      BUSINESS_DOCUMENT_NON_STOCKED_PACKING_SLIP_LINE_V_3: new OneToManyLink(
        'BusinessDocumentNonStockedPackingSlipLineV3',
        this,
        linkedApis[10]
      ),
      BUSINESS_DOCUMENT_TAX_TRANSACTION: new OneToManyLink(
        'BusinessDocumentTaxTransaction',
        this,
        linkedApis[11]
      ),
      BUSINESS_DOCUMENT_CUST_PAYM_SCHEDULE: new OneToManyLink(
        'BusinessDocumentCustPaymSchedule',
        this,
        linkedApis[12]
      ),
      BUSINESS_DOCUMENT_STOCKED_PACKING_SLIP_LINE_V_2: new OneToManyLink(
        'BusinessDocumentStockedPackingSlipLineV2',
        this,
        linkedApis[13]
      ),
      BUSINESS_DOCUMENT_BASE_DOCUMENT: new OneToManyLink(
        'BusinessDocumentBaseDocument',
        this,
        linkedApis[14]
      ),
      CUST_VEND_CREDIT_INVOICING_JOUR: new OneToOneLink(
        'CustVendCreditInvoicingJour',
        this,
        linkedApis[15]
      ),
      BUSINESS_DOCUMENT_INVOICED_PACKING_SLIP_LINE: new OneToManyLink(
        'BusinessDocumentInvoicedPackingSlipLine',
        this,
        linkedApis[16]
      ),
      BUSINESS_DOCUMENT_MARKUP_TRANSACTION: new OneToManyLink(
        'BusinessDocumentMarkupTransaction',
        this,
        linkedApis[17]
      ),
      BUSINESS_DOCUMENT_STOCKED_PACKING_SLIP_LINE: new OneToManyLink(
        'BusinessDocumentStockedPackingSlipLine',
        this,
        linkedApis[18]
      )
    };
    return this;
  }

  entityConstructor = BusinessDocumentSalesInvoiceBases;

  requestBuilder(): BusinessDocumentSalesInvoiceBasesRequestBuilder<DeSerializersT> {
    return new BusinessDocumentSalesInvoiceBasesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BusinessDocumentSalesInvoiceBases<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BusinessDocumentSalesInvoiceBases<DeSerializersT>,
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
    typeof BusinessDocumentSalesInvoiceBases,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BusinessDocumentSalesInvoiceBases,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_ORGANIZATION: EnumField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMPANY_COUNTY: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_COMPANY_PROF_REG_DATE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PARAMETERS_IT_COMPANY_TELE_FAX: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTENT_LETTER_ID: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_NAME: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT_STATE_ADDITIONAL: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_AMOUNT_MST: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMER_ACCOUNT_NUM: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_COMPANY_PROF_REG_NUMBER: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GOODS_FOR_FREE: EnumField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PARAMETERS_IT_TAX_REP_COUNTRY_REGION_IS_OCODE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_COMPANY_PROF_REG_NAME: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_TAX_REP_COMPANY_DESIGNATION: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT_ADDRESS_ADDITIONAL: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_NUM: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT_VAT_REGISTRATION_NUMBER: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT_ADDRESS: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT_NAME: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT_VAT_NUM: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SELF_INVOICE: EnumField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_ACCOUNT_STATE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_TABLE_PARTY: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PARAMETERS_IT_TAX_REP_FIRST_NAME: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THIRD_PARTY_BANK_SWIFT: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_CUSTOMER_AUTHORITY_OFFICE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_COMPANY_CODE_EORI: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_ACCOUNT_TYPE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_AMOUNT: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PREPAYMENT: EnumField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_ACCOUNT_COUNTY_ADDITIONAL: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_INVOICE_JOUR_REC_ID: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SELF_INVOICE_ACCOUNT_ID: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_EMAIL: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_COMPANY_DESIGNATION: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THIRD_PARTY_BANK_IBAN: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_ADDRESS: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_TRN_IS_FILING_FOR_SAME_LEGAL_ENTITY: EnumField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMPANY_STATE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_COUNTRY_ISO_CODE_ADDITIONAL: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT_COUNTRY_ISO_CODE_ADDITIONAL: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_ART_SHARE_CAPITAL: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_TABLE_TABLE_ID: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CITY: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_TAX_REG_NUMBER: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_COUNTY_ADDITIONAL: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_TAX_REP_TAX_EXEMP_NUMBER: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT_ZIP_CODE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_COMPANY_IDENTIFICATIOIN_CODE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DISC_PERCENT: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PARAMETERS_IT_TRN_COUNTRY_REGION_IS_OCODE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_INVOICE_SALES_ID: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_ZIP_CODE_ADDITIONAL: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_INVOICE_JOUR_TABLE_ID: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CURRENCY_CODE_ISO: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_TRN_E_INVOICE_TRANSMISSION_NAME: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_TAX_REP_CODE_EORI: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CO_REG_NUM: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RFC_MX: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_SWIFT: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCL_TAX: EnumField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ZIP_CODE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_TAX_REP_LAST_NAME: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_ADDRESS_ADDITIONAL: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_TAX_REP_IS_COMPANY: EnumField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMPANY_BANK_IBAN: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_COUNTRY_ISO_CODE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_STREET_ADDITIONAL: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_ART_SOLE_SHAREHOLDER: EnumField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      SoleShareholderIt,
      true,
      true
    >;
    PARAMETERS_IT_ART_SOLE_SHAREHOLDER_STR: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_ART_2250_REGISTRATION: EnumField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_ACCOUNT_ZIP_CODE_ADDITIONAL: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET_NUMBER: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_TRN_TAX_EXEMP_NUMBER: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_TABLE_REC_ID: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COMPANY_BANK_NAME: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_ART_LIQUIDATION_STR: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUSTOMER_ORDER_ACCOUNT_NUM: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_INFO_REC_ID: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COMPANY_CITY_ADDITIONAL: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_TAX_REP_FISCAL_CODE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_CITY: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_ART_PROVINCE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_COMPANY_TAX_SYSTEM: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_STREET: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT_FIRST_NAME: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT_COUNTY: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUM_LINE_DISCOUNT: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_ID: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_TRANS_PAYM_MODE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_TAX_REP_TITLE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_BILL_OF_EXCHANGE: EnumField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PARAMETERS_IT_TRN_EMAIL: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_COMPANY_COUNTRY_IS_OCODE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_ART_REGISTRATION_NUM: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT_CITY: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_AREA: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_TRN_PHONE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_COMPANY_PHONE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_TRANS_AMOUNT_CUR: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_ACCOUNT_FISCAL_CODE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_COMPANY_FISCAL_CODE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT_LAST_NAME: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_ZIP_CODE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_BANK_SWIFT: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT_STREET_ADDITIONAL: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_VOUCHER: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEVILERY_REASON: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_INFO_TABLE_ID: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BANK_IBAN: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT_CITY_ADDITIONAL: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT_COUNTRY_ISO_CODE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_TAX_REP_COUNTRY_CODE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_ART_LIQUIDATION: EnumField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      LiquidationIt,
      true,
      true
    >;
    PARAMETERS_IT_TAX_REP_IS_TAX_REP: EnumField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    THIRD_PARTY_BANK_NAME: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_COMPANY_PROF_REG_PROVINCE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT_STREET: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETERS_IT_COMPANY_EMAIL: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_NAME: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT_MIDDLE_NAME: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_STATE_ADDITIONAL: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_DATE_TIME: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    END_DISC: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_MODE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUM_TAX: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceBases<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentEInvoiceProperty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_E_INVOICE_PROPERTY: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentEInvoicePropertiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentSalesInvoiceLineItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_SALES_INVOICE_LINE_ITEM: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentSalesInvoiceLineItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentNonStockedPackingSlipLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_NON_STOCKED_PACKING_SLIP_LINE: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentNonStockedPackingSlipLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentDocuRef} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_DOCU_REF: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentDocuRefsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentStockedPackingSlipLineV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_STOCKED_PACKING_SLIP_LINE_V_3: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentStockedPackingSlipLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentInvoicedPackingSlipLineV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_INVOICED_PACKING_SLIP_LINE_V_3: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentInvoicedPackingSlipLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link documentCustTrans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_CUST_TRANS: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      DocumentCustTransApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link documentBatchSubmissionItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_BATCH_SUBMISSION_ITEM: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      DocumentBatchSubmissionItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentInvoicedPackingSlipLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_INVOICED_PACKING_SLIP_LINE_V_2: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentInvoicedPackingSlipLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentNonStockedPackingSlipLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_NON_STOCKED_PACKING_SLIP_LINE_V_2: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentNonStockedPackingSlipLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentNonStockedPackingSlipLineV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_NON_STOCKED_PACKING_SLIP_LINE_V_3: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentNonStockedPackingSlipLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentTaxTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_TAX_TRANSACTION: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentTaxTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentCustPaymSchedule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_CUST_PAYM_SCHEDULE: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentCustPaymSchedulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentStockedPackingSlipLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_STOCKED_PACKING_SLIP_LINE_V_2: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentStockedPackingSlipLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentBaseDocument} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_BASE_DOCUMENT: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentBaseDocumentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link custVendCreditInvoicingJour} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_VEND_CREDIT_INVOICING_JOUR: OneToOneLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      DocumentCustVendCreditInvoicingJoursApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentInvoicedPackingSlipLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_INVOICED_PACKING_SLIP_LINE: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentInvoicedPackingSlipLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentMarkupTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_MARKUP_TRANSACTION: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentMarkupTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentStockedPackingSlipLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_STOCKED_PACKING_SLIP_LINE: OneToManyLink<
      BusinessDocumentSalesInvoiceBases<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentStockedPackingSlipLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BusinessDocumentSalesInvoiceBases<DeSerializers>>;
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
         * Static representation of the {@link invoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceId',
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
         * Static representation of the {@link isOrganization} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ORGANIZATION: fieldBuilder.buildEnumField(
          'IsOrganization',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link companyCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_COUNTY: fieldBuilder.buildEdmTypeField(
          'CompanyCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItCompanyProfRegDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_COMPANY_PROF_REG_DATE: fieldBuilder.buildEdmTypeField(
          'ParametersITCompanyProfRegDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link parametersItCompanyTeleFax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_COMPANY_TELE_FAX: fieldBuilder.buildEdmTypeField(
          'ParametersITCompanyTeleFax',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intentLetterId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTENT_LETTER_ID: fieldBuilder.buildEdmTypeField(
          'IntentLetterId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_NAME: fieldBuilder.buildEdmTypeField(
          'CompanyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAccountStateAdditional} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT_STATE_ADDITIONAL: fieldBuilder.buildEdmTypeField(
          'InvoiceAccountStateAdditional',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAmountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'InvoiceAmountMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link customerAccountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'CustomerAccountNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItCompanyProfRegNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_COMPANY_PROF_REG_NUMBER: fieldBuilder.buildEdmTypeField(
          'ParametersITCompanyProfRegNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link goodsForFree} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_FOR_FREE: fieldBuilder.buildEnumField(
          'GoodsForFree',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link parametersItTaxRepCountryRegionIsOcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_TAX_REP_COUNTRY_REGION_IS_OCODE:
          fieldBuilder.buildEdmTypeField(
            'ParametersITTaxRepCountryRegionISOcode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link parametersItCompanyProfRegName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_COMPANY_PROF_REG_NAME: fieldBuilder.buildEdmTypeField(
          'ParametersITCompanyProfRegName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItTaxRepCompanyDesignation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_TAX_REP_COMPANY_DESIGNATION:
          fieldBuilder.buildEdmTypeField(
            'ParametersITTaxRepCompanyDesignation',
            'Edm.String',
            true
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
         * Static representation of the {@link vatNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_NUM: fieldBuilder.buildEdmTypeField('VATNum', 'Edm.String', true),
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
         * Static representation of the {@link invoiceAccountAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT_ADDRESS: fieldBuilder.buildEdmTypeField(
          'InvoiceAccountAddress',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link invoiceAccountVatNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT_VAT_NUM: fieldBuilder.buildEdmTypeField(
          'InvoiceAccountVATNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSelfInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SELF_INVOICE: fieldBuilder.buildEnumField(
          'IsSelfInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceAccountState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT_STATE: fieldBuilder.buildEdmTypeField(
          'InvoiceAccountState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custTableParty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_TABLE_PARTY: fieldBuilder.buildEdmTypeField(
          'CustTableParty',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link parametersItTaxRepFirstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_TAX_REP_FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'ParametersITTaxRepFirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link thirdPartyBankSwift} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THIRD_PARTY_BANK_SWIFT: fieldBuilder.buildEdmTypeField(
          'ThirdPartyBankSWIFT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItCustomerAuthorityOffice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_CUSTOMER_AUTHORITY_OFFICE: fieldBuilder.buildEdmTypeField(
          'ParametersITCustomerAuthorityOffice',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItCompanyCodeEori} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_COMPANY_CODE_EORI: fieldBuilder.buildEdmTypeField(
          'ParametersITCompanyCodeEORI',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_ACCOUNT_TYPE: fieldBuilder.buildEdmTypeField(
          'PaymentAccountType',
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
         * Static representation of the {@link prepayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPAYMENT: fieldBuilder.buildEnumField('Prepayment', NoYes, true),
        /**
         * Static representation of the {@link invoiceAccountCountyAdditional} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT_COUNTY_ADDITIONAL: fieldBuilder.buildEdmTypeField(
          'InvoiceAccountCountyAdditional',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custInvoiceJourRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_INVOICE_JOUR_REC_ID: fieldBuilder.buildEdmTypeField(
          'CustInvoiceJourRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link selfInvoiceAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SELF_INVOICE_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'SelfInvoiceAccountId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_EMAIL: fieldBuilder.buildEdmTypeField(
          'CustomerEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItCompanyDesignation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_COMPANY_DESIGNATION: fieldBuilder.buildEdmTypeField(
          'ParametersITCompanyDesignation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link thirdPartyBankIban} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THIRD_PARTY_BANK_IBAN: fieldBuilder.buildEdmTypeField(
          'ThirdPartyBankIBAN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'CompanyAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItTrnIsFilingForSameLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_TRN_IS_FILING_FOR_SAME_LEGAL_ENTITY:
          fieldBuilder.buildEnumField(
            'ParametersITTrnIsFilingForSameLegalEntity',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link companyState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_STATE: fieldBuilder.buildEdmTypeField(
          'CompanyState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyCountryIsoCodeAdditional} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_COUNTRY_ISO_CODE_ADDITIONAL: fieldBuilder.buildEdmTypeField(
          'CompanyCountryISOCodeAdditional',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAccountCountryIsoCodeAdditional} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT_COUNTRY_ISO_CODE_ADDITIONAL:
          fieldBuilder.buildEdmTypeField(
            'InvoiceAccountCountryISOCodeAdditional',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link parametersItArtShareCapital} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_ART_SHARE_CAPITAL: fieldBuilder.buildEdmTypeField(
          'ParametersITArtShareCapital',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custTableTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_TABLE_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'CustTableTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
        /**
         * Static representation of the {@link companyTaxRegNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_TAX_REG_NUMBER: fieldBuilder.buildEdmTypeField(
          'CompanyTaxRegNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyCountyAdditional} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_COUNTY_ADDITIONAL: fieldBuilder.buildEdmTypeField(
          'CompanyCountyAdditional',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItTaxRepTaxExempNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_TAX_REP_TAX_EXEMP_NUMBER: fieldBuilder.buildEdmTypeField(
          'ParametersITTaxRepTaxExempNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAccountZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'InvoiceAccountZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItCompanyIdentificatioinCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_COMPANY_IDENTIFICATIOIN_CODE:
          fieldBuilder.buildEdmTypeField(
            'ParametersITCompanyIdentificatioinCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link endDiscPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DISC_PERCENT: fieldBuilder.buildEdmTypeField(
          'EndDiscPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link parametersItTrnCountryRegionIsOcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_TRN_COUNTRY_REGION_IS_OCODE:
          fieldBuilder.buildEdmTypeField(
            'ParametersITTrnCountryRegionISOcode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link cashDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'CashDiscount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxInvoiceSalesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_INVOICE_SALES_ID: fieldBuilder.buildEdmTypeField(
          'TaxInvoiceSalesId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyZipCodeAdditional} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_ZIP_CODE_ADDITIONAL: fieldBuilder.buildEdmTypeField(
          'CompanyZipCodeAdditional',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custInvoiceJourTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_INVOICE_JOUR_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'CustInvoiceJourTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link currencyCodeIso} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE_ISO: fieldBuilder.buildEdmTypeField(
          'CurrencyCodeISO',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItTrnEInvoiceTransmissionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_TRN_E_INVOICE_TRANSMISSION_NAME:
          fieldBuilder.buildEdmTypeField(
            'ParametersITTrnEInvoiceTransmissionName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link parametersItTaxRepCodeEori} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_TAX_REP_CODE_EORI: fieldBuilder.buildEdmTypeField(
          'ParametersITTaxRepCodeEORI',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link coRegNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CO_REG_NUM: fieldBuilder.buildEdmTypeField(
          'CoRegNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rfcMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFC_MX: fieldBuilder.buildEdmTypeField('Rfc_MX', 'Edm.String', true),
        /**
         * Static representation of the {@link bankSwift} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_SWIFT: fieldBuilder.buildEdmTypeField(
          'BankSWIFT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inclTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCL_TAX: fieldBuilder.buildEnumField('InclTax', NoYes, true),
        /**
         * Static representation of the {@link zipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIP_CODE: fieldBuilder.buildEdmTypeField('ZipCode', 'Edm.String', true),
        /**
         * Static representation of the {@link parametersItTaxRepLastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_TAX_REP_LAST_NAME: fieldBuilder.buildEdmTypeField(
          'ParametersITTaxRepLastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyAddressAdditional} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_ADDRESS_ADDITIONAL: fieldBuilder.buildEdmTypeField(
          'CompanyAddressAdditional',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItTaxRepIsCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_TAX_REP_IS_COMPANY: fieldBuilder.buildEnumField(
          'ParametersITTaxRepIsCompany',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link companyBankIban} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_BANK_IBAN: fieldBuilder.buildEdmTypeField(
          'CompanyBankIBAN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyCountryIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_COUNTRY_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'CompanyCountryISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyStreetAdditional} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_STREET_ADDITIONAL: fieldBuilder.buildEdmTypeField(
          'CompanyStreetAdditional',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItArtSoleShareholder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_ART_SOLE_SHAREHOLDER: fieldBuilder.buildEnumField(
          'ParametersITArtSoleShareholder',
          SoleShareholderIt,
          true
        ),
        /**
         * Static representation of the {@link parametersItArtSoleShareholderStr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_ART_SOLE_SHAREHOLDER_STR: fieldBuilder.buildEdmTypeField(
          'ParametersITArtSoleShareholderStr',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItArt2250Registration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_ART_2250_REGISTRATION: fieldBuilder.buildEnumField(
          'ParametersITArt2250registration',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceAccountZipCodeAdditional} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT_ZIP_CODE_ADDITIONAL: fieldBuilder.buildEdmTypeField(
          'InvoiceAccountZipCodeAdditional',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link streetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'StreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItTrnTaxExempNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_TRN_TAX_EXEMP_NUMBER: fieldBuilder.buildEdmTypeField(
          'ParametersITTrnTaxExempNumber',
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
         * Static representation of the {@link companyBankName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_BANK_NAME: fieldBuilder.buildEdmTypeField(
          'CompanyBankName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItArtLiquidationStr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_ART_LIQUIDATION_STR: fieldBuilder.buildEdmTypeField(
          'ParametersITArtLiquidationStr',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE: fieldBuilder.buildEdmTypeField(
          'DueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link customerOrderAccountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ORDER_ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'CustomerOrderAccountNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyInfoRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_INFO_REC_ID: fieldBuilder.buildEdmTypeField(
          'CompanyInfoRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link companyCityAdditional} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CITY_ADDITIONAL: fieldBuilder.buildEdmTypeField(
          'CompanyCityAdditional',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItTaxRepFiscalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_TAX_REP_FISCAL_CODE: fieldBuilder.buildEdmTypeField(
          'ParametersITTaxRepFiscalCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CITY: fieldBuilder.buildEdmTypeField(
          'CompanyCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItArtProvince} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_ART_PROVINCE: fieldBuilder.buildEdmTypeField(
          'ParametersITArtProvince',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItCompanyTaxSystem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_COMPANY_TAX_SYSTEM: fieldBuilder.buildEdmTypeField(
          'ParametersITCompanyTaxSystem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_STREET: fieldBuilder.buildEdmTypeField(
          'CompanyStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAccountFirstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT_FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'InvoiceAccountFirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAccountCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT_COUNTY: fieldBuilder.buildEdmTypeField(
          'InvoiceAccountCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sumLineDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_LINE_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'SumLineDiscount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ID: fieldBuilder.buildEdmTypeField('SalesId', 'Edm.String', true),
        /**
         * Static representation of the {@link custTransPaymMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_TRANS_PAYM_MODE: fieldBuilder.buildEdmTypeField(
          'CustTransPaymMode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItTaxRepTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_TAX_REP_TITLE: fieldBuilder.buildEdmTypeField(
          'ParametersITTaxRepTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isBillOfExchange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BILL_OF_EXCHANGE: fieldBuilder.buildEnumField(
          'IsBillOfExchange',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link parametersItTrnEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_TRN_EMAIL: fieldBuilder.buildEdmTypeField(
          'ParametersITTrnEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItCompanyCountryIsOcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_COMPANY_COUNTRY_IS_OCODE: fieldBuilder.buildEdmTypeField(
          'ParametersITCompanyCountryISOcode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'CountryRegionISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItArtRegistrationNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_ART_REGISTRATION_NUM: fieldBuilder.buildEdmTypeField(
          'ParametersITArtRegistrationNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAccountCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT_CITY: fieldBuilder.buildEdmTypeField(
          'InvoiceAccountCity',
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
         * Static representation of the {@link contactPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'ContactPersonId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItTrnPhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_TRN_PHONE: fieldBuilder.buildEdmTypeField(
          'ParametersITTrnPhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItCompanyPhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_COMPANY_PHONE: fieldBuilder.buildEdmTypeField(
          'ParametersITCompanyPhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custTransAmountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_TRANS_AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'CustTransAmountCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoiceAccountFiscalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT_FISCAL_CODE: fieldBuilder.buildEdmTypeField(
          'InvoiceAccountFiscalCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItCompanyFiscalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_COMPANY_FISCAL_CODE: fieldBuilder.buildEdmTypeField(
          'ParametersITCompanyFiscalCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAccountLastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT_LAST_NAME: fieldBuilder.buildEdmTypeField(
          'InvoiceAccountLastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'CompanyZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyBankSwift} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_BANK_SWIFT: fieldBuilder.buildEdmTypeField(
          'CompanyBankSWIFT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAccountStreetAdditional} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT_STREET_ADDITIONAL: fieldBuilder.buildEdmTypeField(
          'InvoiceAccountStreetAdditional',
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
         * Static representation of the {@link devileryReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEVILERY_REASON: fieldBuilder.buildEdmTypeField(
          'DevileryReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyInfoTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_INFO_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'CompanyInfoTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link bankIban} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_IBAN: fieldBuilder.buildEdmTypeField(
          'BankIBAN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAccountCityAdditional} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT_CITY_ADDITIONAL: fieldBuilder.buildEdmTypeField(
          'InvoiceAccountCityAdditional',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAccountCountryIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT_COUNTRY_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'InvoiceAccountCountryISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link street} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET: fieldBuilder.buildEdmTypeField('Street', 'Edm.String', true),
        /**
         * Static representation of the {@link parametersItTaxRepCountryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_TAX_REP_COUNTRY_CODE: fieldBuilder.buildEdmTypeField(
          'ParametersITTaxRepCountryCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItArtLiquidation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_ART_LIQUIDATION: fieldBuilder.buildEnumField(
          'ParametersITArtLiquidation',
          LiquidationIt,
          true
        ),
        /**
         * Static representation of the {@link parametersItTaxRepIsTaxRep} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_TAX_REP_IS_TAX_REP: fieldBuilder.buildEnumField(
          'ParametersITTaxRepIsTaxRep',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link thirdPartyBankName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THIRD_PARTY_BANK_NAME: fieldBuilder.buildEdmTypeField(
          'ThirdPartyBankName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItCompanyProfRegProvince} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_COMPANY_PROF_REG_PROVINCE: fieldBuilder.buildEdmTypeField(
          'ParametersITCompanyProfRegProvince',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAccountStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT_STREET: fieldBuilder.buildEdmTypeField(
          'InvoiceAccountStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parametersItCompanyEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETERS_IT_COMPANY_EMAIL: fieldBuilder.buildEdmTypeField(
          'ParametersITCompanyEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_NAME: fieldBuilder.buildEdmTypeField(
          'BankName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAccountMiddleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT_MIDDLE_NAME: fieldBuilder.buildEdmTypeField(
          'InvoiceAccountMiddleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyStateAdditional} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_STATE_ADDITIONAL: fieldBuilder.buildEdmTypeField(
          'CompanyStateAdditional',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'InvoiceDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link endDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DISC: fieldBuilder.buildEdmTypeField(
          'EndDisc',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
        /**
         * Static representation of the {@link paymentMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_MODE: fieldBuilder.buildEdmTypeField(
          'PaymentMode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sumTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_TAX: fieldBuilder.buildEdmTypeField('SumTax', 'Edm.Decimal', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BusinessDocumentSalesInvoiceBases)
      };
    }

    return this._schema;
  }
}
