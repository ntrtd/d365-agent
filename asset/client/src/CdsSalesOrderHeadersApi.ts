/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CdsSalesOrderHeaders } from './CdsSalesOrderHeaders';
import { CdsSalesOrderHeadersRequestBuilder } from './CdsSalesOrderHeadersRequestBuilder';
import { CdsSalesOrderLinesApi } from './CdsSalesOrderLinesApi';
import { SalesInvoiceHeadersV4Api } from './SalesInvoiceHeadersV4Api';
import { ProjectsApi } from './ProjectsApi';
import { SalesOrderHeaderDocumentAttachmentsV2Api } from './SalesOrderHeaderDocumentAttachmentsV2Api';
import { CdsSalesQuotationHeadersApi } from './CdsSalesQuotationHeadersApi';
import { CdsSalesOrderLinesV2Api } from './CdsSalesOrderLinesV2Api';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { SalesOrderProcessingStatus } from './SalesOrderProcessingStatus';
import { Timezone } from './Timezone';
import { SalesStatus } from './SalesStatus';
import { NoYes } from './NoYes';
import { SalesExternalWorkOrderStatus } from './SalesExternalWorkOrderStatus';
import { SalesOriginType } from './SalesOriginType';
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
export class CdsSalesOrderHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CdsSalesOrderHeaders<DeSerializersT>, DeSerializersT>
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
  ): CdsSalesOrderHeadersApi<DeSerializersT> {
    return new CdsSalesOrderHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link cdsSalesOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_SALES_ORDER_LINES: OneToManyLink<
      CdsSalesOrderHeaders<DeSerializersT>,
      DeSerializersT,
      CdsSalesOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesInvoiceHeaderV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_INVOICE_HEADER_V_2: OneToManyLink<
      CdsSalesOrderHeaders<DeSerializersT>,
      DeSerializersT,
      SalesInvoiceHeadersV4Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      CdsSalesOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesOrderHeaderDocumentAttachments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADER_DOCUMENT_ATTACHMENTS: OneToManyLink<
      CdsSalesOrderHeaders<DeSerializersT>,
      DeSerializersT,
      SalesOrderHeaderDocumentAttachmentsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsSalesQuotationHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_SALES_QUOTATION_HEADER: OneToOneLink<
      CdsSalesOrderHeaders<DeSerializersT>,
      DeSerializersT,
      CdsSalesQuotationHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsSalesOrderLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_SALES_ORDER_LINES_V_2: OneToManyLink<
      CdsSalesOrderHeaders<DeSerializersT>,
      DeSerializersT,
      CdsSalesOrderLinesV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CdsSalesOrderLinesApi<DeSerializersT>,
      SalesInvoiceHeadersV4Api<DeSerializersT>,
      ProjectsApi<DeSerializersT>,
      SalesOrderHeaderDocumentAttachmentsV2Api<DeSerializersT>,
      CdsSalesQuotationHeadersApi<DeSerializersT>,
      CdsSalesOrderLinesV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CDS_SALES_ORDER_LINES: new OneToManyLink(
        'CDSSalesOrderLines',
        this,
        linkedApis[0]
      ),
      SALES_INVOICE_HEADER_V_2: new OneToManyLink(
        'SalesInvoiceHeaderV2',
        this,
        linkedApis[1]
      ),
      PROJECT: new OneToOneLink('Project', this, linkedApis[2]),
      SALES_ORDER_HEADER_DOCUMENT_ATTACHMENTS: new OneToManyLink(
        'SalesOrderHeaderDocumentAttachments',
        this,
        linkedApis[3]
      ),
      CDS_SALES_QUOTATION_HEADER: new OneToOneLink(
        'CDSSalesQuotationHeader',
        this,
        linkedApis[4]
      ),
      CDS_SALES_ORDER_LINES_V_2: new OneToManyLink(
        'CDSSalesOrderLinesV2',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = CdsSalesOrderHeaders;

  requestBuilder(): CdsSalesOrderHeadersRequestBuilder<DeSerializersT> {
    return new CdsSalesOrderHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CdsSalesOrderHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CdsSalesOrderHeaders<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CdsSalesOrderHeaders<DeSerializersT>,
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
    typeof CdsSalesOrderHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CdsSalesOrderHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ORDER_NUMBER: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_POSTAL_ADDRESS_REC_ID: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ORDER_TOTAL_TAX_AMOUNT: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_ORDER_NAME: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_STATE_ID: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_PROMISING_METHOD: EnumField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      SalesDeliveryDateControlType,
      true,
      true
    >;
    INVOICE_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMERS_ORDER_REFERENCE: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_LATITUDE: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FORMATTED_INVOICE_ADDRESS: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIRMED_SHIPPING_DATE: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REQUESTED_RECEIPT_DATE: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_ADDRESS_STREET: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAKER: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FORMATTED_DELVERY_ADDRESS: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_PROCESSING_STATUS: EnumField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      SalesOrderProcessingStatus,
      true,
      true
    >;
    DELIVERY_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_TIME_ZONE: EnumField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    ORDER_TOTAL_CHARGES_AMOUNT: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYMENT_TERMS_NAME: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_TAKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_CODE: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_STATUS: EnumField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      SalesStatus,
      true,
      true
    >;
    SALES_RESPONSIBLE: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INVOICE_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_VALID_FROM: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_INVOICE_ADDRESS_PRIVATE: EnumField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORDER_CREATION_DATE_TIME: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRICE_CUSTOMER_GROUP_CODE: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_CITY: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_WORK_ORDER_STATUS: EnumField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      SalesExternalWorkOrderStatus,
      true,
      true
    >;
    INVOICE_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_VALID_TO: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_ADDRESS_STREET: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_TERMS_BASE_DATE: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_DELIVERY_ADDRESS_PRIVATE: EnumField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_CITY: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_TERMS_CODE: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ONE_TIME_CUSTOMER: EnumField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_TOTAL_AMOUNT: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    URL: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_VALID_TO: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_ADDRESS_POST_BOX: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_SHIPPING_DATE: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFAULT_SHIPPING_WAREHOUSE_ID: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ARE_PRICES_INCLUDING_SALES_TAX: EnumField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_LATITUDE: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_REQUISITION_NUMBER: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_TIME_ZONE: EnumField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    ARE_TOTALS_UPDATED: EnumField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORDERING_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_MODE_CODE: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SALES_PROCESSING_STOPPED: EnumField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_ADDRESS_POST_BOX: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_ORIGIN_CODE: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_RESPONSIBLE_PERSONNEL_NUMBER: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_NAME: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIRMED_RECEIPT_DATE: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_CUSTOMER_IS_EXTERNALLY_MAINTAINED: EnumField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_STATE_ID: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_ORIGIN_TYPE: EnumField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      SalesOriginType,
      true,
      true
    >;
    ORDER_HEADER_TAX_AMOUNT: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORDERING_CUSTOMER_IS_EXTERNALLY_MAINTAINED: EnumField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORDER_TOTAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_VALID_FROM: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFAULT_SHIPPING_SITE_ID: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUOTATION_NUMBER: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_ORDER_SPECIFIC: EnumField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SKIP_GLOBAL_UNIFIED_PRICING_CALCULATION: EnumField<
      CdsSalesOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsSalesOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_SALES_ORDER_LINES: OneToManyLink<
      CdsSalesOrderHeaders<DeSerializersT>,
      DeSerializersT,
      CdsSalesOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesInvoiceHeaderV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_INVOICE_HEADER_V_2: OneToManyLink<
      CdsSalesOrderHeaders<DeSerializersT>,
      DeSerializersT,
      SalesInvoiceHeadersV4Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToOneLink<
      CdsSalesOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesOrderHeaderDocumentAttachments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADER_DOCUMENT_ATTACHMENTS: OneToManyLink<
      CdsSalesOrderHeaders<DeSerializersT>,
      DeSerializersT,
      SalesOrderHeaderDocumentAttachmentsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsSalesQuotationHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_SALES_QUOTATION_HEADER: OneToOneLink<
      CdsSalesOrderHeaders<DeSerializersT>,
      DeSerializersT,
      CdsSalesQuotationHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsSalesOrderLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_SALES_ORDER_LINES_V_2: OneToManyLink<
      CdsSalesOrderHeaders<DeSerializersT>,
      DeSerializersT,
      CdsSalesOrderLinesV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CdsSalesOrderHeaders<DeSerializers>>;
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
         * Static representation of the {@link salesOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link deliveryPostalAddressRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_POSTAL_ADDRESS_REC_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryPostalAddressRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link orderTotalTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_TOTAL_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OrderTotalTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesOrderName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_NAME: fieldBuilder.buildEdmTypeField(
          'SalesOrderName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE:
          fieldBuilder.buildEdmTypeField(
            'DeliveryAddressCountryRegionISOCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link invoiceAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesOrderPromisingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_PROMISING_METHOD: fieldBuilder.buildEnumField(
          'SalesOrderPromisingMethod',
          SalesDeliveryDateControlType,
          true
        ),
        /**
         * Static representation of the {@link invoiceBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'InvoiceBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customersOrderReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMERS_ORDER_REFERENCE: fieldBuilder.buildEdmTypeField(
          'CustomersOrderReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link formattedInvoiceAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_INVOICE_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedInvoiceAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link confirmedShippingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_SHIPPING_DATE: fieldBuilder.buildEdmTypeField(
          'ConfirmedShippingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link requestedReceiptDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_RECEIPT_DATE: fieldBuilder.buildEdmTypeField(
          'RequestedReceiptDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link invoiceAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAKER: fieldBuilder.buildEdmTypeField(
          'SalesTaker',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link formattedDelveryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_DELVERY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedDelveryAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesOrderProcessingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_PROCESSING_STATUS: fieldBuilder.buildEnumField(
          'SalesOrderProcessingStatus',
          SalesOrderProcessingStatus,
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressDunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDunsNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'InvoiceAddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link orderTotalChargesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_TOTAL_CHARGES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OrderTotalChargesAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link paymentTermsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERMS_NAME: fieldBuilder.buildEdmTypeField(
          'PaymentTermsName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderTakerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_TAKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrderTakerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashDiscountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'CashDiscountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceCustomerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceCustomerAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesOrderStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_STATUS: fieldBuilder.buildEnumField(
          'SalesOrderStatus',
          SalesStatus,
          true
        ),
        /**
         * Static representation of the {@link salesResponsible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_RESPONSIBLE: fieldBuilder.buildEdmTypeField(
          'SalesResponsible',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link invoiceAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'InvoiceValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isInvoiceAddressPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INVOICE_ADDRESS_PRIVATE: fieldBuilder.buildEnumField(
          'IsInvoiceAddressPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link orderCreationDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_CREATION_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'OrderCreationDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link priceCustomerGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_CUSTOMER_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'PriceCustomerGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalWorkOrderStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_WORK_ORDER_STATUS: fieldBuilder.buildEnumField(
          'ExternalWorkOrderStatus',
          SalesExternalWorkOrderStatus,
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressCountryRegionISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_VALID_TO: fieldBuilder.buildEdmTypeField(
          'DeliveryValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link deliveryAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentTermsBaseDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERMS_BASE_DATE: fieldBuilder.buildEdmTypeField(
          'PaymentTermsBaseDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isDeliveryAddressPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELIVERY_ADDRESS_PRIVATE: fieldBuilder.buildEnumField(
          'IsDeliveryAddressPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveryTermsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TERMS_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryTermsCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOneTimeCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ONE_TIME_CUSTOMER: fieldBuilder.buildEnumField(
          'IsOneTimeCustomer',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'DeliveryBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderTotalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_TOTAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OrderTotalAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('URL', 'Edm.String', true),
        /**
         * Static representation of the {@link invoiceValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_VALID_TO: fieldBuilder.buildEdmTypeField(
          'InvoiceValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link deliveryAddressPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_POST_BOX: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestedShippingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_SHIPPING_DATE: fieldBuilder.buildEdmTypeField(
          'RequestedShippingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link defaultShippingWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_SHIPPING_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultShippingWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link arePricesIncludingSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_PRICES_INCLUDING_SALES_TAX: fieldBuilder.buildEnumField(
          'ArePricesIncludingSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerRequisitionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REQUISITION_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerRequisitionNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'DeliveryAddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link areTotalsUpdated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_TOTALS_UPDATED: fieldBuilder.buildEnumField(
          'AreTotalsUpdated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link orderingCustomerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERING_CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrderingCustomerAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryModeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_MODE_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryModeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSalesProcessingStopped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALES_PROCESSING_STOPPED: fieldBuilder.buildEnumField(
          'IsSalesProcessingStopped',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_POST_BOX: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesOrderOriginCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_ORIGIN_CODE: fieldBuilder.buildEdmTypeField(
          'SalesOrderOriginCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderResponsiblePersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_RESPONSIBLE_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrderResponsiblePersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link confirmedReceiptDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_RECEIPT_DATE: fieldBuilder.buildEdmTypeField(
          'ConfirmedReceiptDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceCustomerIsExternallyMaintained} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_CUSTOMER_IS_EXTERNALLY_MAINTAINED: fieldBuilder.buildEnumField(
          'InvoiceCustomerIsExternallyMaintained',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesOrderOriginType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_ORIGIN_TYPE: fieldBuilder.buildEnumField(
          'SalesOrderOriginType',
          SalesOriginType,
          true
        ),
        /**
         * Static representation of the {@link orderHeaderTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_HEADER_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OrderHeaderTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link orderingCustomerIsExternallyMaintained} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERING_CUSTOMER_IS_EXTERNALLY_MAINTAINED: fieldBuilder.buildEnumField(
          'OrderingCustomerIsExternallyMaintained',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link orderTotalDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_TOTAL_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OrderTotalDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveryValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'DeliveryValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link defaultShippingSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_SHIPPING_SITE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultShippingSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quotationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUOTATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'QuotationNumber',
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
         * Static representation of the {@link deliveryAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoiceAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDeliveryAddressOrderSpecific} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELIVERY_ADDRESS_ORDER_SPECIFIC: fieldBuilder.buildEnumField(
          'IsDeliveryAddressOrderSpecific',
          NoYes,
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
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
        /**
         * Static representation of the {@link skipGlobalUnifiedPricingCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_GLOBAL_UNIFIED_PRICING_CALCULATION: fieldBuilder.buildEnumField(
          'SkipGlobalUnifiedPricingCalculation',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CdsSalesOrderHeaders)
      };
    }

    return this._schema;
  }
}
