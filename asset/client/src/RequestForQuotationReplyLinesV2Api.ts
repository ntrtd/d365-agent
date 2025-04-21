/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestForQuotationReplyLinesV2 } from './RequestForQuotationReplyLinesV2';
import { RequestForQuotationReplyLinesV2RequestBuilder } from './RequestForQuotationReplyLinesV2RequestBuilder';
import { PurchRfqStatus } from './PurchRfqStatus';
import { NoYes } from './NoYes';
import { PurchRfqLineItemType } from './PurchRfqLineItemType';
import { AssetTransTypePurch } from './AssetTransTypePurch';
import { Timezone } from './Timezone';
import { PurchRfqType } from './PurchRfqType';
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
export class RequestForQuotationReplyLinesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RequestForQuotationReplyLinesV2<DeSerializersT>, DeSerializersT>
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
  ): RequestForQuotationReplyLinesV2Api<DeSerializersT> {
    return new RequestForQuotationReplyLinesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RequestForQuotationReplyLinesV2;

  requestBuilder(): RequestForQuotationReplyLinesV2RequestBuilder<DeSerializersT> {
    return new RequestForQuotationReplyLinesV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RequestForQuotationReplyLinesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RequestForQuotationReplyLinesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RequestForQuotationReplyLinesV2<DeSerializersT>,
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
    typeof RequestForQuotationReplyLinesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RequestForQuotationReplyLinesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RFQ_NUMBER: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_VENDOR_REASON_CODE: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESULTING_PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_VALUE_MODEL_ID: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_STATUS: EnumField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      PurchRfqStatus,
      true,
      true
    >;
    RFQ_REPLY_LINE_EFFECTIVE_DATE: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY_UNIT_SYMBOL: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_SITE_ID: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCUREMENT_LEAD_TIME_DAYS: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MULTILINE_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RFQ_CASE_PLANNED_ORDER_REQUIREMENT_PLAN_ID: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DESCRIPTION: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NAME: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNED_PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_AMOUNT: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_QUANTITY: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_RFQ_LINE_ACCEPTED: EnumField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIXED_PRICE_CHARGES: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RFQ_REPLY_LINE_EXPIRATION_DATE: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJECT_SALES_PRICE: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_TAX_GROUP_CODE: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_VENDOR_REASON_COMMENT: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_DISTRIBUTION_TEMPLATE_LEGAL_ENTITY_PARTY_NUMBER: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_PRICE_QUANTITY: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_DELIVERY_ADDRESS_PRIVATE: EnumField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCHASE_PRICE: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_CITY: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_TYPE: EnumField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      PurchRfqLineItemType,
      true,
      true
    >;
    MULTILINE_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECT_TRANSACTION_ID: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_ASSET_NUMBER: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_SALES_CURRENCY_CODE: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_QUANTITY: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_ASSET_TRANSACTION_TYPE: EnumField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      AssetTransTypePurch,
      true,
      true
    >;
    PROJECT_ACTIVITY_NUMBER: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_POST_BOX: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_RFQ_REPLY_LINE_SELECTED: EnumField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PROCUREMENT_USING_WORKING_DAYS: EnumField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_TAX_ITEM_GROUP_CODE: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LATITUDE: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RFQ_CASE_LINE_LINE_NUMBER: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DELIVERY_ADDRESS_TIME_ZONE: EnumField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    PROJECT_SALES_UNIT_SYMBOL: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_DELIVERY_ADDRESS: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_ITEM_NUMBER: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ALTERNATE_PRODUCT: EnumField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_NAME: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIRMED_DELIVERY_DATE: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_CATEGORY_ID: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STATE_ID: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_LINE_PROPERTY_ID: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_TAX_GROUP_CODE: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_TAX_ITEM_GROUP_CODE: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCUREMENT_PRODUCT_CATEGORY_NAME: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_RFQ_PURCHASE_ORDER_TYPE: EnumField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      PurchRfqType,
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RFQ_CASE_NUMBER: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_DATE: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_DELIVERY_ADDRESS_ORDER_SPECIFIC: EnumField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCOUNTING_DISTRIBUTION_TEMPLATE_NAME: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RFQ_CASE_LINE_EXPIRATION_DATE_TIME: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RECEIVING_WAREHOUSE_ID: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_DISTRIBUTION_TEMPLATE_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESULTING_PURCHASE_AGREEMENT_ID: OrderableEdmTypeField<
      RequestForQuotationReplyLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RequestForQuotationReplyLinesV2<DeSerializers>>;
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
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
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
         * Static representation of the {@link lineVendorReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_VENDOR_REASON_CODE: fieldBuilder.buildEdmTypeField(
          'LineVendorReasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link resultingPurchaseOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESULTING_PURCHASE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ResultingPurchaseOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetValueModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_VALUE_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'AssetValueModelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_STATUS: fieldBuilder.buildEnumField(
          'LineStatus',
          PurchRfqStatus,
          true
        ),
        /**
         * Static representation of the {@link rfqReplyLineEffectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_REPLY_LINE_EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'RFQReplyLineEffectiveDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link quantityUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'QuantityUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingSiteId',
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
         * Static representation of the {@link procurementLeadTimeDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCUREMENT_LEAD_TIME_DAYS: fieldBuilder.buildEdmTypeField(
          'ProcurementLeadTimeDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link multilineDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTILINE_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MultilineDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rfqCasePlannedOrderRequirementPlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_CASE_PLANNED_ORDER_REQUIREMENT_PLAN_ID:
          fieldBuilder.buildEdmTypeField(
            'RFQCasePlannedOrderRequirementPlanId',
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
         * Static representation of the {@link lineDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'LineDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NAME: fieldBuilder.buildEdmTypeField(
          'ItemName',
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
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plannedPurchaseOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_PURCHASE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'PlannedPurchaseOrderNumber',
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
         * Static representation of the {@link lineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'PurchaseQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isRfqLineAccepted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RFQ_LINE_ACCEPTED: fieldBuilder.buildEnumField(
          'IsRFQLineAccepted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lineDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'LineDiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fixedPriceCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_PRICE_CHARGES: fieldBuilder.buildEdmTypeField(
          'FixedPriceCharges',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rfqReplyLineExpirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_REPLY_LINE_EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'RFQReplyLineExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projectSalesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'ProjectSalesPrice',
          'Edm.Decimal',
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
         * Static representation of the {@link lineVendorReasonComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_VENDOR_REASON_COMMENT: fieldBuilder.buildEdmTypeField(
          'LineVendorReasonComment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingDistributionTemplateLegalEntityPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DISTRIBUTION_TEMPLATE_LEGAL_ENTITY_PARTY_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'AccountingDistributionTemplateLegalEntityPartyNumber',
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
         * Static representation of the {@link purchasePriceQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PRICE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'PurchasePriceQuantity',
          'Edm.Decimal',
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
         * Static representation of the {@link purchasePrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PRICE: fieldBuilder.buildEdmTypeField(
          'PurchasePrice',
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
         * Static representation of the {@link lineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TYPE: fieldBuilder.buildEnumField(
          'LineType',
          PurchRfqLineItemType,
          true
        ),
        /**
         * Static representation of the {@link multilineDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTILINE_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'MultilineDiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projectTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'ProjectTransactionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedAssetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSET_NUMBER: fieldBuilder.buildEdmTypeField(
          'FixedAssetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectSalesCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_SALES_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'ProjectSalesCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RequestedQuantity',
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
         * Static representation of the {@link fixedAssetTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSET_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'FixedAssetTransactionType',
          AssetTransTypePurch,
          true
        ),
        /**
         * Static representation of the {@link projectActivityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProjectActivityNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link catchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'CatchWeightQuantity',
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
         * Static representation of the {@link isRfqReplyLineSelected} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RFQ_REPLY_LINE_SELECTED: fieldBuilder.buildEnumField(
          'IsRFQReplyLineSelected',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isProcurementUsingWorkingDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PROCUREMENT_USING_WORKING_DAYS: fieldBuilder.buildEnumField(
          'IsProcurementUsingWorkingDays',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesTaxItemGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_ITEM_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxItemGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
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
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rfqCaseLineLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_CASE_LINE_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'RFQCaseLineLineNumber',
          'Edm.Int64',
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
         * Static representation of the {@link projectSalesUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_SALES_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'ProjectSalesUnitSymbol',
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
         * Static representation of the {@link externalItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExternalItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isAlternateProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ALTERNATE_PRODUCT: fieldBuilder.buildEnumField(
          'IsAlternateProduct',
          NoYes,
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
         * Static representation of the {@link confirmedDeliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'ConfirmedDeliveryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
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
         * Static representation of the {@link projectCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProjectCategoryId',
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
         * Static representation of the {@link projectLinePropertyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_LINE_PROPERTY_ID: fieldBuilder.buildEdmTypeField(
          'ProjectLinePropertyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'ProjectTaxGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectTaxItemGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_TAX_ITEM_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'ProjectTaxItemGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link procurementProductCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCUREMENT_PRODUCT_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'ProcurementProductCategoryName',
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
         * Static representation of the {@link deliveryAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultRfqPurchaseOrderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_RFQ_PURCHASE_ORDER_TYPE: fieldBuilder.buildEnumField(
          'DefaultRFQPurchaseOrderType',
          PurchRfqType,
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
         * Static representation of the {@link deliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'DeliveryDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link isDeliveryAddressOrderSpecific} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELIVERY_ADDRESS_ORDER_SPECIFIC: fieldBuilder.buildEnumField(
          'IsDeliveryAddressOrderSpecific',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link accountingDistributionTemplateName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DISTRIBUTION_TEMPLATE_NAME: fieldBuilder.buildEdmTypeField(
          'AccountingDistributionTemplateName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rfqCaseLineExpirationDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_CASE_LINE_EXPIRATION_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'RFQCaseLineExpirationDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link receivingWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingDistributionTemplateLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DISTRIBUTION_TEMPLATE_LEGAL_ENTITY_ID:
          fieldBuilder.buildEdmTypeField(
            'AccountingDistributionTemplateLegalEntityId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link resultingPurchaseAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESULTING_PURCHASE_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'ResultingPurchaseAgreementId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RequestForQuotationReplyLinesV2)
      };
    }

    return this._schema;
  }
}
