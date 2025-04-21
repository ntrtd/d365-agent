/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestForQuotationJournalHeaders } from './RequestForQuotationJournalHeaders';
import { RequestForQuotationJournalHeadersRequestBuilder } from './RequestForQuotationJournalHeadersRequestBuilder';
import { WorkersApi } from './WorkersApi';
import { NoYes } from './NoYes';
import { PurchRfqType } from './PurchRfqType';
import { Timezone } from './Timezone';
import { PurchRfqStatus } from './PurchRfqStatus';
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
export class RequestForQuotationJournalHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RequestForQuotationJournalHeaders<DeSerializersT>, DeSerializersT>
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
  ): RequestForQuotationJournalHeadersApi<DeSerializersT> {
    return new RequestForQuotationJournalHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      RequestForQuotationJournalHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [WorkersApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      WORKER: new OneToOneLink('Worker', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = RequestForQuotationJournalHeaders;

  requestBuilder(): RequestForQuotationJournalHeadersRequestBuilder<DeSerializersT> {
    return new RequestForQuotationJournalHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RequestForQuotationJournalHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RequestForQuotationJournalHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RequestForQuotationJournalHeaders<DeSerializersT>,
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
    typeof RequestForQuotationJournalHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RequestForQuotationJournalHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RFQ_NUMBER: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RFQ_JOURNAL_DATE: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INTERNAL_RFQ_JOURNAL_NUMBER: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_QUOTATION_REPLY_LINE_EXTERNAL_ITEM_NUMBER_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TOTAL_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PAYMENT_METHOD_SPECIFICATION_NAME: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_QUOTATION_REPLY_LINE_EXTERNAL_ITEM_DESCRIPTION_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RESULTING_PURCHASE_DOCUMENT_TYPE: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      PurchRfqType,
      true,
      true
    >;
    RFQ_NAME: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_CASH_DISCOUNT_CODE: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_AGREEMENT_ID: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_SEQUENCE_GROUP_ID: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_QUOTATION_REPLY_LINE_DOCUMENTATION_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_EMAIL_ADDRESS: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_ROUND_OFF_AMOUNT: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_QUOTATION_REPLY_LINE_PRICE_QUANTITY_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_QUOTATION_REPLY_LINE_MULTILINE_DISCOUNT_AMOUNT_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PAYMENT_METHOD_NAME: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_QUOTATION_REPLY_LINE_DELIVERY_DATE_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_SCHEDULE_NAME: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_TERMS_NAME: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_TAX_AMOUNT: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_QUOTATION_REPLY_LINE_VALID_FROM_DATE_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_QUOTATION_REPLY_HEADER_CURRENCY_CODE_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_QUOTATION_REPLY_HEADER_DOCUMENTATION_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_QUOTATION_REPLY_LINE_MULTILINE_DISCOUNT_PERCENTAGE_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_GROUP_CODE: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MULTILINE_DISCOUNT_VENDOR_GROUP_CODE: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_QUOTATION_REPLY_LINE_UNIT_SYMBOL_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BID_UNSEALING_PERSON_PARTY_NUMBER: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_QUOTATION_REPLY_HEADER_PAYMENT_TERMS_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_QUOTATION_REPLY_LINE_WORKING_DAYS_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TOTAL_CHARGE_AMOUNT: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_DATE: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_QUOTATION_REPLY_LINE_LINE_DISCOUNT_AMOUNT_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REQUESTING_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_QUOTATION_REPLY_HEADER_DELIVERY_DATE_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_REPLY_SHEET_INCLUDED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_QUOTATION_REPLY_HEADER_TOTAL_DISCOUNT_PERCENTAGE_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BID_SUBMITTING_PERSON_PARTY_NUMBER: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_PRIVATE: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_REASON_CODE: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_CITY: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TERMS_CODE: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PHONE_NUMBER: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_QUOTATION_REPLY_HEADER_DELIVERY_TERMS_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_QUOTATION_REPLY_LINE_LEAD_TIME_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TOTAL_BALANCE: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_POST_BOX: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ARE_PRICES_INCLUDING_SALES_TAX: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_LATITUDE: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RFQ_EXPIRATION_DATE_TIME: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_ADDRESS_TIME_ZONE: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    RESULTING_PURCHASE_AGREEMENT_EFFECTIVE_DATE: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_QUOTATION_REPLY_HEADER_VALID_FROM_DATE_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_MODE_CODE: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_QUOTATION_REPLY_HEADER_PURCHASE_CHARGE_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FORMATTED_DELIVERY_ADDRESS: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_QUOTATION_REPLY_LINE_PURCHASE_CHARGE_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RESULTING_PURCHASE_AGREEMENT_EXPIRATION_DATE: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_QUOTATION_REPLY_LINE_DISCOUNT_PERCENT_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHARGE_VENDOR_GROUP_ID: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_NAME: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDERING_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_QUOTATION_REPLY_HEADER_VEND_REFERENCE_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STATE_ID: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_VENDOR_GROUP_CODE: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RFQ_STATUS: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      PurchRfqStatus,
      true,
      true
    >;
    DELIVERY_ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_EXEMPT_NUMBER: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_QUOTATION_REPLY_HEADER_VALID_TO_DATE_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RFQ_CASE_NUMBER: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_REASON_COMMENT: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VENDOR_ORDER_REFERENCE: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARE_PRICES_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TOTAL_LINE_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_QUOTATION_REPLY_LINE_VALID_TO_DATE_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_QUOTATION_REPLY_LINE_QUANTITY_DISPLAYED: EnumField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BUYER_GROUP_ID: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_RFQ_AMOUNT: OrderableEdmTypeField<
      RequestForQuotationJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      RequestForQuotationJournalHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RequestForQuotationJournalHeaders<DeSerializers>>;
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
         * Static representation of the {@link rfqNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_NUMBER: fieldBuilder.buildEdmTypeField(
          'RFQNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link rfqJournalDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_JOURNAL_DATE: fieldBuilder.buildEdmTypeField(
          'RFQJournalDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link internalRfqJournalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_RFQ_JOURNAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'InternalRFQJournalNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isQuotationReplyLineExternalItemNumberDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_LINE_EXTERNAL_ITEM_NUMBER_DISPLAYED:
          fieldBuilder.buildEnumField(
            'IsQuotationReplyLineExternalItemNumberDisplayed',
            NoYes,
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
         * Static representation of the {@link vendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorPaymentMethodSpecificationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PAYMENT_METHOD_SPECIFICATION_NAME:
          fieldBuilder.buildEdmTypeField(
            'VendorPaymentMethodSpecificationName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link isQuotationReplyLineExternalItemDescriptionDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_LINE_EXTERNAL_ITEM_DESCRIPTION_DISPLAYED:
          fieldBuilder.buildEnumField(
            'IsQuotationReplyLineExternalItemDescriptionDisplayed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link resultingPurchaseDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESULTING_PURCHASE_DOCUMENT_TYPE: fieldBuilder.buildEnumField(
          'ResultingPurchaseDocumentType',
          PurchRfqType,
          true
        ),
        /**
         * Static representation of the {@link rfqName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_NAME: fieldBuilder.buildEdmTypeField('RFQName', 'Edm.String', true),
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
         * Static representation of the {@link vendorCashDiscountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_CASH_DISCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'VendorCashDiscountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseAgreementId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressBuildingCompliment',
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
         * Static representation of the {@link isQuotationReplyLineDocumentationDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_LINE_DOCUMENTATION_DISPLAYED:
          fieldBuilder.buildEnumField(
            'IsQuotationReplyLineDocumentationDisplayed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link vendorEmailAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'VendorEmailAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalRoundOffAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_ROUND_OFF_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalRoundOffAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isQuotationReplyLinePriceQuantityDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_LINE_PRICE_QUANTITY_DISPLAYED:
          fieldBuilder.buildEnumField(
            'IsQuotationReplyLinePriceQuantityDisplayed',
            NoYes,
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
         * Static representation of the {@link isQuotationReplyLineMultilineDiscountAmountDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_LINE_MULTILINE_DISCOUNT_AMOUNT_DISPLAYED:
          fieldBuilder.buildEnumField(
            'IsQuotationReplyLineMultilineDiscountAmountDisplayed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
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
         * Static representation of the {@link purchaseOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderNumber',
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
         * Static representation of the {@link vendorPaymentMethodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PAYMENT_METHOD_NAME: fieldBuilder.buildEdmTypeField(
          'VendorPaymentMethodName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isQuotationReplyLineDeliveryDateDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_LINE_DELIVERY_DATE_DISPLAYED:
          fieldBuilder.buildEnumField(
            'IsQuotationReplyLineDeliveryDateDisplayed',
            NoYes,
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
         * Static representation of the {@link paymentTermsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERMS_NAME: fieldBuilder.buildEdmTypeField(
          'PaymentTermsName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isQuotationReplyLineValidFromDateDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_LINE_VALID_FROM_DATE_DISPLAYED:
          fieldBuilder.buildEnumField(
            'IsQuotationReplyLineValidFromDateDisplayed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isQuotationReplyHeaderCurrencyCodeDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_HEADER_CURRENCY_CODE_DISPLAYED:
          fieldBuilder.buildEnumField(
            'IsQuotationReplyHeaderCurrencyCodeDisplayed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isQuotationReplyHeaderDocumentationDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_HEADER_DOCUMENTATION_DISPLAYED:
          fieldBuilder.buildEnumField(
            'IsQuotationReplyHeaderDocumentationDisplayed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isQuotationReplyLineMultilineDiscountPercentageDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_LINE_MULTILINE_DISCOUNT_PERCENTAGE_DISPLAYED:
          fieldBuilder.buildEnumField(
            'IsQuotationReplyLineMultilineDiscountPercentageDisplayed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link taxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'TaxGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link multilineDiscountVendorGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTILINE_DISCOUNT_VENDOR_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'MultilineDiscountVendorGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isQuotationReplyLineUnitSymbolDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_LINE_UNIT_SYMBOL_DISPLAYED:
          fieldBuilder.buildEnumField(
            'IsQuotationReplyLineUnitSymbolDisplayed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link bidUnsealingPersonPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BID_UNSEALING_PERSON_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'BidUnsealingPersonPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isQuotationReplyHeaderPaymentTermsDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_HEADER_PAYMENT_TERMS_DISPLAYED:
          fieldBuilder.buildEnumField(
            'IsQuotationReplyHeaderPaymentTermsDisplayed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isQuotationReplyLineWorkingDaysDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_LINE_WORKING_DAYS_DISPLAYED:
          fieldBuilder.buildEnumField(
            'IsQuotationReplyLineWorkingDaysDisplayed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link totalChargeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_CHARGE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalChargeAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveryAddressDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DATE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isQuotationReplyLineLineDiscountAmountDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_LINE_LINE_DISCOUNT_AMOUNT_DISPLAYED:
          fieldBuilder.buildEnumField(
            'IsQuotationReplyLineLineDiscountAmountDisplayed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link requestingWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTING_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'RequestingWorkerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isQuotationReplyHeaderDeliveryDateDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_HEADER_DELIVERY_DATE_DISPLAYED:
          fieldBuilder.buildEnumField(
            'IsQuotationReplyHeaderDeliveryDateDisplayed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isReplySheetIncluded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REPLY_SHEET_INCLUDED: fieldBuilder.buildEnumField(
          'IsReplySheetIncluded',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isQuotationReplyHeaderTotalDiscountPercentageDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_HEADER_TOTAL_DISCOUNT_PERCENTAGE_DISPLAYED:
          fieldBuilder.buildEnumField(
            'IsQuotationReplyHeaderTotalDiscountPercentageDisplayed',
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
         * Static representation of the {@link bidSubmittingPersonPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BID_SUBMITTING_PERSON_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'BidSubmittingPersonPartyNumber',
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
         * Static representation of the {@link vendorReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_REASON_CODE: fieldBuilder.buildEdmTypeField(
          'VendorReasonCode',
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
         * Static representation of the {@link deliveryTermsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TERMS_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryTermsCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPhoneNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PHONE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ContactPhoneNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isQuotationReplyHeaderDeliveryTermsDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_HEADER_DELIVERY_TERMS_DISPLAYED:
          fieldBuilder.buildEnumField(
            'IsQuotationReplyHeaderDeliveryTermsDisplayed',
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
         * Static representation of the {@link isQuotationReplyLineLeadTimeDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_LINE_LEAD_TIME_DISPLAYED:
          fieldBuilder.buildEnumField(
            'IsQuotationReplyLineLeadTimeDisplayed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link totalBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_BALANCE: fieldBuilder.buildEdmTypeField(
          'TotalBalance',
          'Edm.Decimal',
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
         * Static representation of the {@link rfqExpirationDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_EXPIRATION_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'RFQExpirationDateTime',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link resultingPurchaseAgreementEffectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESULTING_PURCHASE_AGREEMENT_EFFECTIVE_DATE:
          fieldBuilder.buildEdmTypeField(
            'ResultingPurchaseAgreementEffectiveDate',
            'Edm.DateTimeOffset',
            false
          ),
        /**
         * Static representation of the {@link isQuotationReplyHeaderValidFromDateDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_HEADER_VALID_FROM_DATE_DISPLAYED:
          fieldBuilder.buildEnumField(
            'IsQuotationReplyHeaderValidFromDateDisplayed',
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
         * Static representation of the {@link isQuotationReplyHeaderPurchaseChargeDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_HEADER_PURCHASE_CHARGE_DISPLAYED:
          fieldBuilder.buildEnumField(
            'IsQuotationReplyHeaderPurchaseChargeDisplayed',
            NoYes,
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
         * Static representation of the {@link isQuotationReplyLinePurchaseChargeDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_LINE_PURCHASE_CHARGE_DISPLAYED:
          fieldBuilder.buildEnumField(
            'IsQuotationReplyLinePurchaseChargeDisplayed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link resultingPurchaseAgreementExpirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESULTING_PURCHASE_AGREEMENT_EXPIRATION_DATE:
          fieldBuilder.buildEdmTypeField(
            'ResultingPurchaseAgreementExpirationDate',
            'Edm.DateTimeOffset',
            false
          ),
        /**
         * Static representation of the {@link isQuotationReplyLineDiscountPercentDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_LINE_DISCOUNT_PERCENT_DISPLAYED:
          fieldBuilder.buildEnumField(
            'IsQuotationReplyLineDiscountPercentDisplayed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link chargeVendorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_VENDOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ChargeVendorGroupId',
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
         * Static representation of the {@link orderingWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERING_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrderingWorkerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isQuotationReplyHeaderVendReferenceDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_HEADER_VEND_REFERENCE_DISPLAYED:
          fieldBuilder.buildEnumField(
            'IsQuotationReplyHeaderVendReferenceDisplayed',
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
         * Static representation of the {@link deliveryAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceVendorGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_VENDOR_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'PriceVendorGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rfqStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_STATUS: fieldBuilder.buildEnumField(
          'RFQStatus',
          PurchRfqStatus,
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
         * Static representation of the {@link taxExemptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaxExemptNumber',
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
         * Static representation of the {@link isQuotationReplyHeaderValidToDateDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_HEADER_VALID_TO_DATE_DISPLAYED:
          fieldBuilder.buildEnumField(
            'IsQuotationReplyHeaderValidToDateDisplayed',
            NoYes,
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
         * Static representation of the {@link rfqCaseNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_CASE_NUMBER: fieldBuilder.buildEdmTypeField(
          'RFQCaseNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorReasonComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_REASON_COMMENT: fieldBuilder.buildEdmTypeField(
          'VendorReasonComment',
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
         * Static representation of the {@link deliveryAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vendorOrderReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ORDER_REFERENCE: fieldBuilder.buildEdmTypeField(
          'VendorOrderReference',
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
         * Static representation of the {@link arePricesDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_PRICES_DISPLAYED: fieldBuilder.buildEnumField(
          'ArePricesDisplayed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link totalLineDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_LINE_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalLineDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isQuotationReplyLineValidToDateDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_LINE_VALID_TO_DATE_DISPLAYED:
          fieldBuilder.buildEnumField(
            'IsQuotationReplyLineValidToDateDisplayed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isQuotationReplyLineQuantityDisplayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUOTATION_REPLY_LINE_QUANTITY_DISPLAYED: fieldBuilder.buildEnumField(
          'IsQuotationReplyLineQuantityDisplayed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link buyerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUYER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'BuyerGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalRfqAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_RFQ_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalRFQAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RequestForQuotationJournalHeaders)
      };
    }

    return this._schema;
  }
}
