/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderHeaderV2ExistAddrReadOnlys } from './SalesOrderHeaderV2ExistAddrReadOnlys';
import { SalesOrderHeaderV2ExistAddrReadOnlysRequestBuilder } from './SalesOrderHeaderV2ExistAddrReadOnlysRequestBuilder';
import { NoYes } from './NoYes';
import { DocumentTypeIt } from './DocumentTypeIt';
import { SalesStatus } from './SalesStatus';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { EfDocPresenceTypeBr } from './EfDocPresenceTypeBr';
import { InvoiceTypeMy } from './InvoiceTypeMy';
import { SettlementType } from './SettlementType';
import { Listcode } from './Listcode';
import { Timezone } from './Timezone';
import { PaymentStub } from './PaymentStub';
import { ItemReservation } from './ItemReservation';
import { SalesOrderProcessingStatus } from './SalesOrderProcessingStatus';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class SalesOrderHeaderV2ExistAddrReadOnlysApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializersT>,
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
  ): SalesOrderHeaderV2ExistAddrReadOnlysApi<DeSerializersT> {
    return new SalesOrderHeaderV2ExistAddrReadOnlysApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SalesOrderHeaderV2ExistAddrReadOnlys;

  requestBuilder(): SalesOrderHeaderV2ExistAddrReadOnlysRequestBuilder<DeSerializersT> {
    return new SalesOrderHeaderV2ExistAddrReadOnlysRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializersT>,
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
    typeof SalesOrderHeaderV2ExistAddrReadOnlys,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesOrderHeaderV2ExistAddrReadOnlys,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_VALID_FROM: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ORDER_TOTAL_CHARGES_AMOUNT: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FISCAL_DOCUMENT_OPERATION_TYPE_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_TAKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_RECEIPT_DATE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    E_INVOICE_DIMENSION_ACCOUNT_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_OWN_ENTRY_CERTIFICATE_ISSUED: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_ADDRESS_STREET: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAMPAIGN_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_DELVERY_ADDRESS: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BASE_DOCUMENT_LINE_NUMBER: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BASE_DOCUMENT_TYPE: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      DocumentTypeIt,
      true,
      true
    >;
    DEFAULT_SHIPPING_SITE_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_BROKER_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_MODE_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CFPS_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INVOICE_ADDRESS_PRIVATE: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SALES_PROCESSING_STOPPED: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TMA_CUSTOMER_GROUP_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_SPECIFIC_SYMBOL: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_STATUS: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      SalesStatus,
      true,
      true
    >;
    NUMBER_SEQUENCE_GROUP_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_LATITUDE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_ORDER_ORIGIN_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_PAYMENT_FINANCIAL_INTEREST_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_TEMPLATE_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CONSTANT_SYMBOL: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_TOTAL_TAX_AMOUNT: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_ONE_TIME_CUSTOMER: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_ORDER_POOL_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LATITUDE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_DISCOUNT_CUSTOMER_GROUP_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_CITY: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_REBATE_CUSTOMER_GROUP_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_PROMISING_METHOD: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      SalesDeliveryDateControlType,
      true,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIRMED_RECEIPT_DATE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BASE_DOCUMENT_ITEM_NUMBER: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_OPERATION_PRESENCE_TYPE: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      EfDocPresenceTypeBr,
      true,
      true
    >;
    QUOTATION_NUMBER: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CONSOLIDATED_INVOICE_TARGET: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MULTILINE_DISCOUNT_CUSTOMER_GROUP_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BASE_DOCUMENT_NUMBER: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_STATE_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_PAYMENT_METHOD_SPECIFICATION_NAME: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_FISCAL_INFORMATION_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMISSION_CUSTOMER_GROUP_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_NAME: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_TERMS_BASE_DATE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CREDIT_NOTE_REASON_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_CUSTOMER_GROUP_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_EXEMPT_NUMBER: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_PRIVATE: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ARE_TOTALS_CALCULATED: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TOTAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORDER_TOTAL_AMOUNT: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMERS_ORDER_REFERENCE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_INVOICE_ADDRESS: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPORT_REASON: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_RESPONSIBLE_PERSONNEL_NUMBER: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_OR_AGREEMENT_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_SCHEDULE_NAME: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_TRANSACTION_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_TOTAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_TYPE: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      InvoiceTypeMy,
      true,
      true
    >;
    ORDER_CREATION_DATE_TIME: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ARE_PRICES_INCLUDING_SALES_TAX: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_TRANSACTION_SETTLEMENT_TYPE: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      SettlementType,
      true,
      true
    >;
    COMMISSION_SALES_REPRESENTATIVE_GROUP_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_AUTOMATIC_INVENTORY_RESERVATION_CONSIDER_BATCH_ATTRIBUTES: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_E_INVOICE_DIMENSION_ACCOUNT_CODE_SPECIFIED_PER_LINE: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTRASTAT_STATISTICS_PROCEDURE_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_EXPORT_SALE: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_MODE_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIRMED_SHIPPING_DATE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FIXED_DUE_DATE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSPORTATION_DOCUMENT_LINE_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    SALES_TAX_GROUP_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_ORDER_SPECIFIC: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_REQUISITION_NUMBER: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_NUMBER: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_ADDRESS_CITY: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_FINAL_USER: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_ADDRESS_POST_BOX: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_SERVICE_GROUP_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EU_SALES_LIST_CODE: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      Listcode,
      true,
      true
    >;
    INVOICE_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_TERMS_NAME: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BASE_DOCUMENT_DATE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUSTOMER_POSTING_PROFILE_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TENDER_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TERMS_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_SERVICE_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_TIME_ZONE: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    SALES_ORDER_NAME: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_SHIPPING_WAREHOUSE_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ENTRY_CERTIFICATE_REQUIRED: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_STATE_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_TRANSPORT_MODE_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_PAYMENT_ATTACHMENT_TYPE: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      PaymentStub,
      true,
      true
    >;
    DELIVERY_ADDRESS_POST_BOX: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_TIME_ZONE: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    INVOICE_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIRECT_DEBIT_MANDATE_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DISCOUNT_CUSTOMER_GROUP_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_PORT_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CIP_ECODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDERING_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_PAYMENT_FINE_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_CUSTOMER_GROUP_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_REASON_CODE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CURRENCY_FIXED_EXCHANGE_RATE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_SERVICE_DELIVERY_ADDRESS_BASED: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORDER_HEADER_TAX_AMOUNT: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_RESERVATION_METHOD: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      ItemReservation,
      true,
      true
    >;
    REQUESTED_SHIPPING_DATE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_ORDER_PROCESSING_STATUS: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      SalesOrderProcessingStatus,
      true,
      true
    >;
    TRANSPORTATION_ROUTE_PLAN_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SKIP_CREATE_AUTO_CHARGES: EnumField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_PAYMENT_METHOD_NAME: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_UNIT_ID: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_EXCHANGE_RATE: OrderableEdmTypeField<
      SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SalesOrderHeaderV2ExistAddrReadOnlys<DeSerializers>>;
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
         * Static representation of the {@link deliveryAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLocationId',
          'Edm.String',
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
         * Static representation of the {@link orderTotalChargesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_TOTAL_CHARGES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OrderTotalChargesAmount',
          'Edm.Decimal',
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
         * Static representation of the {@link orderTakerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_TAKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrderTakerPersonnelNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link eInvoiceDimensionAccountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_INVOICE_DIMENSION_ACCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'EInvoiceDimensionAccountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOwnEntryCertificateIssued} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OWN_ENTRY_CERTIFICATE_ISSUED: fieldBuilder.buildEnumField(
          'IsOwnEntryCertificateIssued',
          NoYes,
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
         * Static representation of the {@link campaignId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAMPAIGN_ID: fieldBuilder.buildEdmTypeField(
          'CampaignId',
          'Edm.String',
          true
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
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
        /**
         * Static representation of the {@link baseDocumentLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_DOCUMENT_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'BaseDocumentLineNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link baseDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_DOCUMENT_TYPE: fieldBuilder.buildEnumField(
          'BaseDocumentType',
          DocumentTypeIt,
          true
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
         * Static representation of the {@link transportationBrokerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_BROKER_ID: fieldBuilder.buildEdmTypeField(
          'TransportationBrokerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationModeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_MODE_ID: fieldBuilder.buildEdmTypeField(
          'TransportationModeId',
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
         * Static representation of the {@link cfpsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFPS_CODE: fieldBuilder.buildEdmTypeField(
          'CFPSCode',
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
         * Static representation of the {@link isSalesProcessingStopped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALES_PROCESSING_STOPPED: fieldBuilder.buildEnumField(
          'IsSalesProcessingStopped',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link tmaCustomerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TMA_CUSTOMER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'TMACustomerGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankSpecificSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_SPECIFIC_SYMBOL: fieldBuilder.buildEdmTypeField(
          'BankSpecificSymbol',
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
         * Static representation of the {@link transportationTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'TransportationTemplateId',
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
         * Static representation of the {@link bankConstantSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CONSTANT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'BankConstantSymbol',
          'Edm.String',
          true
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
         * Static representation of the {@link isOneTimeCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ONE_TIME_CUSTOMER: fieldBuilder.buildEnumField(
          'IsOneTimeCustomer',
          NoYes,
          true
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
         * Static representation of the {@link salesRebateCustomerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_REBATE_CUSTOMER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SalesRebateCustomerGroupId',
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
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingCarrierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierId',
          'Edm.String',
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
         * Static representation of the {@link confirmedReceiptDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_RECEIPT_DATE: fieldBuilder.buildEdmTypeField(
          'ConfirmedReceiptDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link baseDocumentItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_DOCUMENT_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'BaseDocumentItemNumber',
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
         * Static representation of the {@link fiscalOperationPresenceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_OPERATION_PRESENCE_TYPE: fieldBuilder.buildEnumField(
          'FiscalOperationPresenceType',
          EfDocPresenceTypeBr,
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
         * Static representation of the {@link isConsolidatedInvoiceTarget} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CONSOLIDATED_INVOICE_TARGET: fieldBuilder.buildEnumField(
          'IsConsolidatedInvoiceTarget',
          NoYes,
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
         * Static representation of the {@link multilineDiscountCustomerGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTILINE_DISCOUNT_CUSTOMER_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'MultilineDiscountCustomerGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link baseDocumentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'BaseDocumentNumber',
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
         * Static representation of the {@link serviceFiscalInformationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_FISCAL_INFORMATION_CODE: fieldBuilder.buildEdmTypeField(
          'ServiceFiscalInformationCode',
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
         * Static representation of the {@link invoiceAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressCountryRegionId',
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
         * Static representation of the {@link creditNoteReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_NOTE_REASON_CODE: fieldBuilder.buildEdmTypeField(
          'CreditNoteReasonCode',
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
         * Static representation of the {@link deliveryAddressStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreetInKana',
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
         * Static representation of the {@link taxExemptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaxExemptNumber',
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
         * Static representation of the {@link orderTotalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_TOTAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OrderTotalAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link orderResponsiblePersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_RESPONSIBLE_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrderResponsiblePersonnelNumber',
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
         * Static representation of the {@link orderOrAgreementCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_OR_AGREEMENT_CODE: fieldBuilder.buildEdmTypeField(
          'OrderOrAgreementCode',
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
         * Static representation of the {@link paymentScheduleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SCHEDULE_NAME: fieldBuilder.buildEdmTypeField(
          'PaymentScheduleName',
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
         * Static representation of the {@link orderTotalDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_TOTAL_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OrderTotalDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoiceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_TYPE: fieldBuilder.buildEnumField(
          'InvoiceType',
          InvoiceTypeMy,
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
         * Static representation of the {@link willAutomaticInventoryReservationConsiderBatchAttributes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_AUTOMATIC_INVENTORY_RESERVATION_CONSIDER_BATCH_ATTRIBUTES:
          fieldBuilder.buildEnumField(
            'WillAutomaticInventoryReservationConsiderBatchAttributes',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isEInvoiceDimensionAccountCodeSpecifiedPerLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_E_INVOICE_DIMENSION_ACCOUNT_CODE_SPECIFIED_PER_LINE:
          fieldBuilder.buildEnumField(
            'IsEInvoiceDimensionAccountCodeSpecifiedPerLine',
            NoYes,
            true
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
         * Static representation of the {@link deliveryAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isExportSale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXPORT_SALE: fieldBuilder.buildEnumField(
          'IsExportSale',
          NoYes,
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
         * Static representation of the {@link confirmedShippingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_SHIPPING_DATE: fieldBuilder.buildEdmTypeField(
          'ConfirmedShippingDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link transportationDocumentLineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_DOCUMENT_LINE_ID: fieldBuilder.buildEdmTypeField(
          'TransportationDocumentLineId',
          'Edm.Guid',
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
         * Static representation of the {@link salesOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesOrderNumber',
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
         * Static representation of the {@link isFinalUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FINAL_USER: fieldBuilder.buildEnumField('IsFinalUser', NoYes, true),
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
         * Static representation of the {@link shippingCarrierServiceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_SERVICE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierServiceGroupId',
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
         * Static representation of the {@link baseDocumentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'BaseDocumentDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link tenderCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENDER_CODE: fieldBuilder.buildEdmTypeField(
          'TenderCode',
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
         * Static representation of the {@link shippingCarrierServiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_SERVICE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierServiceId',
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
         * Static representation of the {@link salesOrderName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_NAME: fieldBuilder.buildEdmTypeField(
          'SalesOrderName',
          'Edm.String',
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
         * Static representation of the {@link isEntryCertificateRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ENTRY_CERTIFICATE_REQUIRED: fieldBuilder.buildEnumField(
          'IsEntryCertificateRequired',
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
         * Static representation of the {@link invoicePaymentAttachmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_PAYMENT_ATTACHMENT_TYPE: fieldBuilder.buildEnumField(
          'InvoicePaymentAttachmentType',
          PaymentStub,
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
         * Static representation of the {@link invoiceAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link directDebitMandateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT_DEBIT_MANDATE_ID: fieldBuilder.buildEdmTypeField(
          'DirectDebitMandateId',
          'Edm.String',
          true
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
         * Static representation of the {@link cipEcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CIP_ECODE: fieldBuilder.buildEdmTypeField(
          'CIPEcode',
          'Edm.String',
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
         * Static representation of the {@link isServiceDeliveryAddressBased} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SERVICE_DELIVERY_ADDRESS_BASED: fieldBuilder.buildEnumField(
          'IsServiceDeliveryAddressBased',
          NoYes,
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
         * Static representation of the {@link inventoryReservationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_RESERVATION_METHOD: fieldBuilder.buildEnumField(
          'InventoryReservationMethod',
          ItemReservation,
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
         * Static representation of the {@link salesOrderProcessingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_PROCESSING_STATUS: fieldBuilder.buildEnumField(
          'SalesOrderProcessingStatus',
          SalesOrderProcessingStatus,
          true
        ),
        /**
         * Static representation of the {@link transportationRoutePlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_ROUTE_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'TransportationRoutePlanId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link skipCreateAutoCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_CREATE_AUTO_CHARGES: fieldBuilder.buildEnumField(
          'SkipCreateAutoCharges',
          NoYes,
          true
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
        ALL_FIELDS: new AllFields('*', SalesOrderHeaderV2ExistAddrReadOnlys)
      };
    }

    return this._schema;
  }
}
