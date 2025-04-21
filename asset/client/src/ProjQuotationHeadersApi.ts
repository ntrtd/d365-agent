/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjQuotationHeaders } from './ProjQuotationHeaders';
import { ProjQuotationHeadersRequestBuilder } from './ProjQuotationHeadersRequestBuilder';
import { ProjQuotationLinesApi } from './ProjQuotationLinesApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { NoYes } from './NoYes';
import { SalesQuotationStatus } from './SalesQuotationStatus';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { BankLgDocumentType } from './BankLgDocumentType';
import { SettlementType } from './SettlementType';
import { Listcode } from './Listcode';
import { Timezone } from './Timezone';
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
export class ProjQuotationHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjQuotationHeaders<DeSerializersT>, DeSerializersT>
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
  ): ProjQuotationHeadersApi<DeSerializersT> {
    return new ProjQuotationHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link projQuotationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJ_QUOTATION_LINES: OneToManyLink<
      ProjQuotationHeaders<DeSerializersT>,
      DeSerializersT,
      ProjQuotationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ProjQuotationHeaders<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProjQuotationLinesApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PROJ_QUOTATION_LINES: new OneToManyLink(
        'ProjQuotationLines',
        this,
        linkedApis[0]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = ProjQuotationHeaders;

  requestBuilder(): ProjQuotationHeadersRequestBuilder<DeSerializersT> {
    return new ProjQuotationHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjQuotationHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProjQuotationHeaders<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjQuotationHeaders<DeSerializersT>,
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
    typeof ProjQuotationHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjQuotationHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJ_QUOTATION_NUMBER: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_DOCUMENT_OPERATION_TYPE_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_QUOTATION_TEMPLATE_NAME: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_STREET: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CUSTOMER_FINAL_USER: EnumField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CAMPAIGN_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_SHIPPING_SITE_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_INVOICE_PROJ_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INVOICE_ADDRESS_PRIVATE: EnumField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    QUOTATION_DOCUMENT_INTRODUCTION_NAME: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUOTATION_RESPONSIBLE_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENERATED_SALES_ORDER_NUMBER: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_QUOTATION_STATUS: EnumField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      SalesQuotationStatus,
      true,
      true
    >;
    TELE_MARKETING_CALL_LIST_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_SEQUENCE_GROUP_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_LATITUDE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_ORDER_ORIGIN_CODE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_PAYMENT_FINANCIAL_INTEREST_CODE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_ORDER_POOL_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LATITUDE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_DISCOUNT_CUSTOMER_GROUP_CODE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_CITY: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTING_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_PROMISING_METHOD: EnumField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      SalesDeliveryDateControlType,
      true,
      true
    >;
    TOTAL_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSA_EST_PROJ_START_DATE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MULTILINE_DISCOUNT_CUSTOMER_GROUP_CODE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_DOCUMENT_TYPE: EnumField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      BankLgDocumentType,
      true,
      true
    >;
    INVOICE_ADDRESS_STATE_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_QUOTATION_NAME: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_PAYMENT_METHOD_SPECIFICATION_NAME: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMISSION_CUSTOMER_GROUP_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_NAME: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUOTATION_REASON_CODE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUOTATION_FOLLOW_UP_ACTIVITY: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUOTATION_TOTAL_TAX_AMOUNT: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSA_EXTERNAL_DESCRIPTION: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_ACCOUNT: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUOTATION_DOCUMENT_TITLE_NAME: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_CUSTOMER_GROUP_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSA_SCHED_CALENDAR_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_PRIVATE: EnumField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_EXEMPT_NUMBER: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARE_TOTALS_CALCULATED: EnumField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TOTAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FORMATTED_INVOICE_ADDRESS: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPORT_REASON: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_CODE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_QUOTATION_EXPIRY_DATE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_TRANSACTION_CODE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSA_ESTD_PROJ_DURATION: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    URL: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSA_EST_PROJ_END_DATE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SERVICE_AGREEMENT_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARE_PRICES_INCLUDING_SALES_TAX: EnumField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSA_SCHED_IGNORE_CALENDAR: EnumField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_TRANSACTION_SETTLEMENT_TYPE: EnumField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      SettlementType,
      true,
      true
    >;
    COMMISSION_SALES_REPRESENTATIVE_GROUP_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUOTATION_TOTAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIPT_DATE_REQUESTED: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INTRASTAT_STATISTICS_PROCEDURE_CODE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROSPECT_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_MODE_CODE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSA_INTERNAL_DESCRIPTION: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_DUE_DATE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_TAX_GROUP_CODE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_ORDER_SPECIFIC: EnumField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_REQUISITION_NUMBER: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_ADDRESS_CITY: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_POST_BOX: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EU_SALES_LIST_CODE: EnumField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      Listcode,
      true,
      true
    >;
    INVOICE_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUOTATION_TOTAL_AMOUNT: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUOTATION_HEADER_TAX_AMOUNT: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_QUOTATION_TEMPLATE_GROUP_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SALES_QUOTATION_TEMPLATE_ACTIVE: EnumField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_TERMS_NAME: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_POSTING_PROFILE_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUOTATION_DOCUMENT_CONCLUSION_NAME: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TERMS_CODE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_TIME_ZONE: EnumField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    DEFAULT_SHIPPING_WAREHOUSE_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUOTATION_TAKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STATE_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_TRANSPORT_MODE_CODE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMERS_REFERENCE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_POST_BOX: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_TIME_ZONE: EnumField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    OPPORTUNITY_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUOTATION_TOTAL_CHARGES_AMOUNT: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_DISCOUNT_CUSTOMER_GROUP_CODE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_PORT_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_QUOTATION_CONFIRMATION_DATE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUSTOMER_PAYMENT_FINE_CODE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_CUSTOMER_GROUP_CODE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_REASON_CODE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CURRENCY_FIXED_EXCHANGE_RATE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_QUOTATION_FOLLOW_UP_DATE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REQUESTED_SHIPPING_DATE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUSTOMER_PAYMENT_METHOD_NAME: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_UNIT_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_DELIVERY_ADDRESS: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_EXCHANGE_RATE: OrderableEdmTypeField<
      ProjQuotationHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projQuotationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJ_QUOTATION_LINES: OneToManyLink<
      ProjQuotationHeaders<DeSerializersT>,
      DeSerializersT,
      ProjQuotationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ProjQuotationHeaders<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProjQuotationHeaders<DeSerializers>>;
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
         * Static representation of the {@link projQuotationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_QUOTATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProjQuotationNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fiscalDocumentOperationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_OPERATION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentOperationTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesQuotationTemplateName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_QUOTATION_TEMPLATE_NAME: fieldBuilder.buildEdmTypeField(
          'SalesQuotationTemplateName',
          'Edm.String',
          true
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
         * Static representation of the {@link isCustomerFinalUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CUSTOMER_FINAL_USER: fieldBuilder.buildEnumField(
          'IsCustomerFinalUser',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link campaignId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAMPAIGN_ID: fieldBuilder.buildEdmTypeField(
          'CampaignId',
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
         * Static representation of the {@link projInvoiceProjId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_INVOICE_PROJ_ID: fieldBuilder.buildEdmTypeField(
          'ProjInvoiceProjId',
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
         * Static representation of the {@link quotationDocumentIntroductionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUOTATION_DOCUMENT_INTRODUCTION_NAME: fieldBuilder.buildEdmTypeField(
          'QuotationDocumentIntroductionName',
          'Edm.String',
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
         * Static representation of the {@link projQuotationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_QUOTATION_STATUS: fieldBuilder.buildEnumField(
          'ProjQuotationStatus',
          SalesQuotationStatus,
          true
        ),
        /**
         * Static representation of the {@link teleMarketingCallListId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TELE_MARKETING_CALL_LIST_ID: fieldBuilder.buildEdmTypeField(
          'TeleMarketingCallListId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberSequenceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'NumberSequenceGroupId',
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
         * Static representation of the {@link salesOrderOriginCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_ORIGIN_CODE: fieldBuilder.buildEdmTypeField(
          'SalesOrderOriginCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerPaymentFinancialInterestCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_PAYMENT_FINANCIAL_INTEREST_CODE:
          fieldBuilder.buildEdmTypeField(
            'CustomerPaymentFinancialInterestCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link invoiceAddressStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressStreetInKana',
          'Edm.String',
          true
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
         * Static representation of the {@link salesOrderPoolId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_POOL_ID: fieldBuilder.buildEdmTypeField(
          'SalesOrderPoolId',
          'Edm.String',
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
         * Static representation of the {@link deliveryAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalDiscountCustomerGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT_CUSTOMER_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'TotalDiscountCustomerGroupCode',
          'Edm.String',
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
         * Static representation of the {@link psaEstProjStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_EST_PROJ_START_DATE: fieldBuilder.buildEdmTypeField(
          'PSAEstProjStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link multilineDiscountCustomerGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTILINE_DISCOUNT_CUSTOMER_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'MultilineDiscountCustomerGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_DOCUMENT_TYPE: fieldBuilder.buildEnumField(
          'BankDocumentType',
          BankLgDocumentType,
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
         * Static representation of the {@link projQuotationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_QUOTATION_NAME: fieldBuilder.buildEdmTypeField(
          'ProjQuotationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerPaymentMethodSpecificationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_PAYMENT_METHOD_SPECIFICATION_NAME:
          fieldBuilder.buildEdmTypeField(
            'CustomerPaymentMethodSpecificationName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link commissionCustomerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_CUSTOMER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CommissionCustomerGroupId',
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
         * Static representation of the {@link quotationReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUOTATION_REASON_CODE: fieldBuilder.buildEdmTypeField(
          'QuotationReasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quotationFollowUpActivity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUOTATION_FOLLOW_UP_ACTIVITY: fieldBuilder.buildEdmTypeField(
          'QuotationFollowUpActivity',
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
         * Static representation of the {@link psaExternalDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_EXTERNAL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PSAExternalDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreetInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quotationDocumentTitleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUOTATION_DOCUMENT_TITLE_NAME: fieldBuilder.buildEdmTypeField(
          'QuotationDocumentTitleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chargeCustomerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_CUSTOMER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ChargeCustomerGroupId',
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
         * Static representation of the {@link psaSchedCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_SCHED_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'PSASchedCalendarId',
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
         * Static representation of the {@link taxExemptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaxExemptNumber',
          'Edm.String',
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
         * Static representation of the {@link exportReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT_REASON: fieldBuilder.buildEdmTypeField(
          'ExportReason',
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
         * Static representation of the {@link projQuotationExpiryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_QUOTATION_EXPIRY_DATE: fieldBuilder.buildEdmTypeField(
          'ProjQuotationExpiryDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link intrastatTransactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'IntrastatTransactionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link psaEstdProjDuration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_ESTD_PROJ_DURATION: fieldBuilder.buildEdmTypeField(
          'PSAEstdProjDuration',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link psaEstProjEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_EST_PROJ_END_DATE: fieldBuilder.buildEdmTypeField(
          'PSAEstProjEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link serviceAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'ServiceAgreementId',
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
         * Static representation of the {@link psaSchedIgnoreCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_SCHED_IGNORE_CALENDAR: fieldBuilder.buildEnumField(
          'PSASchedIgnoreCalendar',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link customerTransactionSettlementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_TRANSACTION_SETTLEMENT_TYPE: fieldBuilder.buildEnumField(
          'CustomerTransactionSettlementType',
          SettlementType,
          true
        ),
        /**
         * Static representation of the {@link commissionSalesRepresentativeGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_SALES_REPRESENTATIVE_GROUP_ID:
          fieldBuilder.buildEdmTypeField(
            'CommissionSalesRepresentativeGroupId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link invoiceAddressCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressCityInKana',
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
         * Static representation of the {@link intrastatStatisticsProcedureCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_STATISTICS_PROCEDURE_CODE: fieldBuilder.buildEdmTypeField(
          'IntrastatStatisticsProcedureCode',
          'Edm.String',
          true
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
         * Static representation of the {@link overrideSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_SALES_TAX: fieldBuilder.buildEnumField(
          'OverrideSalesTax',
          NoYes,
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
         * Static representation of the {@link psaInternalDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_INTERNAL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PSAInternalDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedDueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_DUE_DATE: fieldBuilder.buildEdmTypeField(
          'FixedDueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link salesTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroupCode',
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
         * Static representation of the {@link euSalesListCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EU_SALES_LIST_CODE: fieldBuilder.buildEnumField(
          'EUSalesListCode',
          Listcode,
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
         * Static representation of the {@link salesQuotationTemplateGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_QUOTATION_TEMPLATE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SalesQuotationTemplateGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSalesQuotationTemplateActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALES_QUOTATION_TEMPLATE_ACTIVE: fieldBuilder.buildEnumField(
          'IsSalesQuotationTemplateActive',
          NoYes,
          true
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
         * Static representation of the {@link deliveryAddressCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerPostingProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_POSTING_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'CustomerPostingProfileId',
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
         * Static representation of the {@link quotationDocumentConclusionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUOTATION_DOCUMENT_CONCLUSION_NAME: fieldBuilder.buildEdmTypeField(
          'QuotationDocumentConclusionName',
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
         * Static representation of the {@link deliveryTermsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TERMS_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryTermsCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultLedgerDimensionDisplayValue',
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
         * Static representation of the {@link deliveryBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'DeliveryBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatTransportModeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_TRANSPORT_MODE_CODE: fieldBuilder.buildEdmTypeField(
          'IntrastatTransportModeCode',
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
         * Static representation of the {@link lineDiscountCustomerGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT_CUSTOMER_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'LineDiscountCustomerGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatPortId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_PORT_ID: fieldBuilder.buildEdmTypeField(
          'IntrastatPortId',
          'Edm.String',
          true
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
         * Static representation of the {@link customerPaymentFineCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_PAYMENT_FINE_CODE: fieldBuilder.buildEdmTypeField(
          'CustomerPaymentFineCode',
          'Edm.String',
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
         * Static representation of the {@link priceCustomerGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_CUSTOMER_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'PriceCustomerGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_REASON_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryReasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportingCurrencyFixedExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_FIXED_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyFixedExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projQuotationFollowUpDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_QUOTATION_FOLLOW_UP_DATE: fieldBuilder.buildEdmTypeField(
          'ProjQuotationFollowUpDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link customerPaymentMethodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_PAYMENT_METHOD_NAME: fieldBuilder.buildEdmTypeField(
          'CustomerPaymentMethodName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'SalesUnitId',
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
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        /**
         * Static representation of the {@link fixedExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'FixedExchangeRate',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjQuotationHeaders)
      };
    }

    return this._schema;
  }
}
