/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CdsSalesQuotationHeaders } from './CdsSalesQuotationHeaders';
import { CdsSalesQuotationHeadersRequestBuilder } from './CdsSalesQuotationHeadersRequestBuilder';
import { CdsSalesQuotationLinesApi } from './CdsSalesQuotationLinesApi';
import { CdsSalesOrderHeadersApi } from './CdsSalesOrderHeadersApi';
import { NoYes } from './NoYes';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { SalesQuotationStatus } from './SalesQuotationStatus';
import { Timezone } from './Timezone';
import { SalesQuotationCreationMethod } from './SalesQuotationCreationMethod';
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
export class CdsSalesQuotationHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CdsSalesQuotationHeaders<DeSerializersT>, DeSerializersT>
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
  ): CdsSalesQuotationHeadersApi<DeSerializersT> {
    return new CdsSalesQuotationHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link cdsSalesQuotationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_SALES_QUOTATION_LINES: OneToManyLink<
      CdsSalesQuotationHeaders<DeSerializersT>,
      DeSerializersT,
      CdsSalesQuotationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsSalesOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_SALES_ORDER_HEADER: OneToOneLink<
      CdsSalesQuotationHeaders<DeSerializersT>,
      DeSerializersT,
      CdsSalesOrderHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CdsSalesQuotationLinesApi<DeSerializersT>,
      CdsSalesOrderHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CDS_SALES_QUOTATION_LINES: new OneToManyLink(
        'CDSSalesQuotationLines',
        this,
        linkedApis[0]
      ),
      CDS_SALES_ORDER_HEADER: new OneToOneLink(
        'CDSSalesOrderHeader',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = CdsSalesQuotationHeaders;

  requestBuilder(): CdsSalesQuotationHeadersRequestBuilder<DeSerializersT> {
    return new CdsSalesQuotationHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CdsSalesQuotationHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CdsSalesQuotationHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CdsSalesQuotationHeaders<DeSerializersT>,
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
    typeof CdsSalesQuotationHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CdsSalesQuotationHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_QUOTATION_NUMBER: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_ADDRESS_STREET: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_QUOTATION_NAME: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_SHIPPING_SITE_ID: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INVOICE_ADDRESS_PRIVATE: EnumField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    QUOTATION_RESPONSIBLE_PERSONNEL_NUMBER: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENERATED_SALES_ORDER_NUMBER: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_ORIGIN_CODE: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_LATITUDE: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CASH_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LATITUDE: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_CITY: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTING_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_PROMISING_METHOD: EnumField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      SalesDeliveryDateControlType,
      true,
      true
    >;
    TOTAL_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_QUOTATION_EXPIRY_DATE: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_STATE_ID: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_QUOTATION_FOLLOW_UP_DATE: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_ADDRESS_NAME: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUOTATION_TOTAL_TAX_AMOUNT: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_PRIVATE: EnumField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ARE_TOTALS_CALCULATED: EnumField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TOTAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FORMATTED_INVOICE_ADDRESS: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_CODE: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARE_PRICES_INCLUDING_SALES_TAX: EnumField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUOTATION_TOTAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIPT_DATE_REQUESTED: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROSPECT_ID: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_MODE_CODE: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_ORDER_SPECIFIC: EnumField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_REQUISITION_NUMBER: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_ADDRESS_CITY: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_POST_BOX: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_QUOTATION_STATUS: EnumField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      SalesQuotationStatus,
      true,
      true
    >;
    QUOTATION_TOTAL_AMOUNT: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUOTATION_HEADER_TAX_AMOUNT: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYMENT_TERMS_NAME: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TERMS_CODE: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_TIME_ZONE: EnumField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    DEFAULT_SHIPPING_WAREHOUSE_ID: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUOTATION_TAKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STATE_ID: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_QUOTATION_HEADER_CREATION_METHOD: EnumField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      SalesQuotationCreationMethod,
      true,
      true
    >;
    DELIVERY_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMERS_REFERENCE: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_POST_BOX: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_TIME_ZONE: EnumField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    OPPORTUNITY_ID: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUOTATION_TOTAL_CHARGES_AMOUNT: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_QUOTATION_CONFIRMATION_DATE: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_CUSTOMER_GROUP_CODE: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_SHIPPING_DATE: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OPERATING_UNIT_PARTY_NUMBER: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_DELIVERY_ADDRESS: OrderableEdmTypeField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SKIP_GLOBAL_UNIFIED_PRICING_CALCULATION: EnumField<
      CdsSalesQuotationHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsSalesQuotationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_SALES_QUOTATION_LINES: OneToManyLink<
      CdsSalesQuotationHeaders<DeSerializersT>,
      DeSerializersT,
      CdsSalesQuotationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsSalesOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_SALES_ORDER_HEADER: OneToOneLink<
      CdsSalesQuotationHeaders<DeSerializersT>,
      DeSerializersT,
      CdsSalesOrderHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CdsSalesQuotationHeaders<DeSerializers>>;
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
         * Static representation of the {@link salesQuotationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_QUOTATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesQuotationNumber',
          'Edm.String',
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
         * Static representation of the {@link salesQuotationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_QUOTATION_NAME: fieldBuilder.buildEdmTypeField(
          'SalesQuotationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
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
         * Static representation of the {@link deliveryAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDescription',
          'Edm.String',
          true
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
         * Static representation of the {@link quotationResponsiblePersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUOTATION_RESPONSIBLE_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'QuotationResponsiblePersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link generatedSalesOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERATED_SALES_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'GeneratedSalesOrderNumber',
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
         * Static representation of the {@link invoiceAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cashDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'CashDiscountPercentage',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link deliveryAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLatitude',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link requestingCustomerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTING_CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'RequestingCustomerAccountNumber',
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
         * Static representation of the {@link totalDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'TotalDiscountPercentage',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link deliveryAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCountyId',
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
         * Static representation of the {@link salesQuotationExpiryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_QUOTATION_EXPIRY_DATE: fieldBuilder.buildEdmTypeField(
          'SalesQuotationExpiryDate',
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
         * Static representation of the {@link deliveryAddressDunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDunsNumber',
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
         * Static representation of the {@link salesQuotationFollowUpDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_QUOTATION_FOLLOW_UP_DATE: fieldBuilder.buildEdmTypeField(
          'SalesQuotationFollowUpDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link quotationTotalTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUOTATION_TOTAL_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'QuotationTotalTaxAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link deliveryAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreetNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link isDeliveryAddressPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELIVERY_ADDRESS_PRIVATE: fieldBuilder.buildEnumField(
          'IsDeliveryAddressPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link areTotalsCalculated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_TOTALS_CALCULATED: fieldBuilder.buildEnumField(
          'AreTotalsCalculated',
          NoYes,
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
         * Static representation of the {@link formattedInvoiceAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_INVOICE_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedInvoiceAddress',
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
         * Static representation of the {@link cashDiscountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'CashDiscountCode',
          'Edm.String',
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
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('URL', 'Edm.String', true),
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
         * Static representation of the {@link arePricesIncludingSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_PRICES_INCLUDING_SALES_TAX: fieldBuilder.buildEnumField(
          'ArePricesIncludingSalesTax',
          NoYes,
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
         * Static representation of the {@link deliveryAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quotationTotalDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUOTATION_TOTAL_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'QuotationTotalDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link receiptDateRequested} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_DATE_REQUESTED: fieldBuilder.buildEdmTypeField(
          'ReceiptDateRequested',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link prospectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROSPECT_ID: fieldBuilder.buildEdmTypeField(
          'ProspectId',
          'Edm.String',
          true
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
         * Static representation of the {@link deliveryModeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_MODE_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryModeCode',
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
         * Static representation of the {@link customerRequisitionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REQUISITION_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerRequisitionNumber',
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
         * Static representation of the {@link invoiceAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressCity',
          'Edm.String',
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
         * Static representation of the {@link contactPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'ContactPersonId',
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
         * Static representation of the {@link salesQuotationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_QUOTATION_STATUS: fieldBuilder.buildEnumField(
          'SalesQuotationStatus',
          SalesQuotationStatus,
          true
        ),
        /**
         * Static representation of the {@link quotationTotalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUOTATION_TOTAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'QuotationTotalAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quotationHeaderTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUOTATION_HEADER_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'QuotationHeaderTaxAmount',
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
         * Static representation of the {@link deliveryAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLongitude',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link deliveryTermsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TERMS_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryTermsCode',
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
         * Static representation of the {@link defaultShippingWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_SHIPPING_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultShippingWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quotationTakerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUOTATION_TAKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'QuotationTakerPersonnelNumber',
          'Edm.String',
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
         * Static representation of the {@link salesQuotationHeaderCreationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_QUOTATION_HEADER_CREATION_METHOD: fieldBuilder.buildEnumField(
          'SalesQuotationHeaderCreationMethod',
          SalesQuotationCreationMethod,
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
         * Static representation of the {@link customersReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMERS_REFERENCE: fieldBuilder.buildEdmTypeField(
          'CustomersReference',
          'Edm.String',
          true
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
         * Static representation of the {@link invoiceAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'InvoiceAddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link opportunityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPPORTUNITY_ID: fieldBuilder.buildEdmTypeField(
          'OpportunityId',
          'Edm.String',
          true
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
         * Static representation of the {@link quotationTotalChargesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUOTATION_TOTAL_CHARGES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'QuotationTotalChargesAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesQuotationConfirmationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_QUOTATION_CONFIRMATION_DATE: fieldBuilder.buildEdmTypeField(
          'SalesQuotationConfirmationDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link priceCustomerGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_CUSTOMER_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'PriceCustomerGroupCode',
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
         * Static representation of the {@link operatingUnitPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperatingUnitPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formattedDeliveryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_DELIVERY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedDeliveryAddress',
          'Edm.String',
          true
        ),
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
        ALL_FIELDS: new AllFields('*', CdsSalesQuotationHeaders)
      };
    }

    return this._schema;
  }
}
