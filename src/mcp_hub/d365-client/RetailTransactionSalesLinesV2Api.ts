/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactionSalesLinesV2 } from './RetailTransactionSalesLinesV2';
import { RetailTransactionSalesLinesV2RequestBuilder } from './RetailTransactionSalesLinesV2RequestBuilder';
import { NoYes } from './NoYes';
import { RetailItemTransactionCode } from './RetailItemTransactionCode';
import { RetailEntryStatus } from './RetailEntryStatus';
import { RetailInventStatusSales } from './RetailInventStatusSales';
import { RetailReturnTrackingStatusType } from './RetailReturnTrackingStatusType';
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
export class RetailTransactionSalesLinesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailTransactionSalesLinesV2<DeSerializersT>, DeSerializersT>
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
  ): RetailTransactionSalesLinesV2Api<DeSerializersT> {
    return new RetailTransactionSalesLinesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTransactionSalesLinesV2;

  requestBuilder(): RetailTransactionSalesLinesV2RequestBuilder<DeSerializersT> {
    return new RetailTransactionSalesLinesV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactionSalesLinesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransactionSalesLinesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactionSalesLinesV2<DeSerializersT>,
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
    typeof RetailTransactionSalesLinesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactionSalesLinesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_NUMBER: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_DISCOUNT: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQUESTED_RECEIPT_DATE: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CASH_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOGISTICS_POSTAL_ADDRESS_VALID_FROM: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ORIGINAL_ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SITE_ID: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_EMAIL_ADDRESS_CONTENT: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_SIZE: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODE_OF_DELIVERY: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SKIP_REPORTS: EnumField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WAREHOUSE: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_START_TIME: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TOTAL_DISCOUNT: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_EXEMPT_PRICE_INCLUSIVE_ORIGINAL_PRICE: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_LINKED_PRODUCT_NOT_ORIGINAL: EnumField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISCOUNT_AMOUNT_WITHOUT_TAX: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NET_PRICE: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRICE_GROUPS: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RFID_TAG_ID: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VARIANT_NUMBER: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CODE: EnumField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      RetailItemTransactionCode,
      true,
      true
    >;
    TOTAL_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIXED_PRICE_CHARGES: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_EXEMPT_PRICE_INCLUSIVE_REDUCTION_AMOUNT: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRICE_IN_BAR_CODE: EnumField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOT_ID: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_QUANTITY: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_PRICE: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_RELATION: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_SHIP_DATE: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSACTION_STATUS: EnumField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      RetailEntryStatus,
      true,
      true
    >;
    ITEM_CONFIG_ID: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DISCOUNT: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NET_AMOUNT_INCLUSIVE_TAX: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_STATUS: EnumField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      RetailInventStatusSales,
      true,
      true
    >;
    LINE_MANUAL_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GIFT_CARD: EnumField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHANNEL_LISTING_ID: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NET_AMOUNT: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_COLOR: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRICE_CHANGE: EnumField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BAR_CODE: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_QUANTITY: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_MANUAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STANDARD_NET_PRICE: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BUSINESS_DATE: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITEM_VERSION: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_TERMINAL: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_WEIGHT_PRODUCT: EnumField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOGISTIC_LOCATION_ID: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SCALE_PRODUCT: EnumField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ORIGINAL_OF_LINKED_PRODUCT_LIST: EnumField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_STYLE: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_NUMBER: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_PERCENTAGE_DISCOUNT: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REASON_CODE_DISCOUNT: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CATEGORY_NAME: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_DISCOUNT_INFO_CODE_LINE_NUM: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    KEYBOARD_PRODUCT_ENTRY: EnumField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CANCELLED_TRANSACTION_NUMBER: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_RETURN_NO_SALE: EnumField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ELECTRONIC_DELIVERY_EMAIL: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_AMOUNT: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_TRANSACTION_NUMBER: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRICE: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_PRICE: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_SALES_TAX_GROUP: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_LINE_DISCOUNTED: EnumField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHELF_NUMBER: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERIAL_NUMBER: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFER_NUMBER: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_AMOUNT: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SECTION_NUMBER: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_WEIGHT_MANUALLY_ENTERED: EnumField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISCOUNT_AMOUNT_FOR_PRINTING: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMER_INVOICE_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_SCANNED: EnumField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERIODIC_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_TRACKING_STATUS: EnumField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      RetailReturnTrackingStatusType,
      true,
      true
    >;
    RETURN_LINE_NUMBER: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERIODIC_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERIODIC_DISCOUNT_GROUP: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_END_TIME: OrderableEdmTypeField<
      RetailTransactionSalesLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailTransactionSalesLinesV2<DeSerializers>>;
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
         * Static representation of the {@link terminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL: fieldBuilder.buildEdmTypeField(
          'Terminal',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'TransactionNumber',
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
         * Static representation of the {@link operatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperatingUnitNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link customerDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerDiscount',
          'Edm.Decimal',
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
         * Static representation of the {@link cashDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CashDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DATE: fieldBuilder.buildEdmTypeField(
          'TransactionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link logisticsPostalAddressValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGISTICS_POSTAL_ADDRESS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'LogisticsPostalAddressValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link originalItemSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_ITEM_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'OriginalItemSalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link siteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE_ID: fieldBuilder.buildEdmTypeField('SiteId', 'Edm.String', true),
        /**
         * Static representation of the {@link retailEmailAddressContent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_EMAIL_ADDRESS_CONTENT: fieldBuilder.buildEdmTypeField(
          'RetailEmailAddressContent',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SIZE: fieldBuilder.buildEdmTypeField(
          'ItemSize',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link modeOfDelivery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODE_OF_DELIVERY: fieldBuilder.buildEdmTypeField(
          'ModeOfDelivery',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link skipReports} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_REPORTS: fieldBuilder.buildEnumField('SkipReports', NoYes, true),
        /**
         * Static representation of the {@link warehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'Warehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupStartTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_START_TIME: fieldBuilder.buildEdmTypeField(
          'PickupStartTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link totalDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'TotalDiscount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxExemptPriceInclusiveOriginalPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_PRICE_INCLUSIVE_ORIGINAL_PRICE:
          fieldBuilder.buildEdmTypeField(
            'TaxExemptPriceInclusiveOriginalPrice',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link isLinkedProductNotOriginal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LINKED_PRODUCT_NOT_ORIGINAL: fieldBuilder.buildEnumField(
          'IsLinkedProductNotOriginal',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link discountAmountWithoutTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_AMOUNT_WITHOUT_TAX: fieldBuilder.buildEdmTypeField(
          'DiscountAmountWithoutTax',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link netPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_PRICE: fieldBuilder.buildEdmTypeField(
          'NetPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link priceGroups} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_GROUPS: fieldBuilder.buildEdmTypeField(
          'PriceGroups',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rfidTagId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFID_TAG_ID: fieldBuilder.buildEdmTypeField(
          'RFIDTagId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link variantNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VariantNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link categoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryHierarchyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CODE: fieldBuilder.buildEnumField(
          'TransactionCode',
          RetailItemTransactionCode,
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
         * Static representation of the {@link fixedPriceCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_PRICE_CHARGES: fieldBuilder.buildEdmTypeField(
          'FixedPriceCharges',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT: fieldBuilder.buildEdmTypeField('Unit', 'Edm.String', true),
        /**
         * Static representation of the {@link taxExemptPriceInclusiveReductionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_PRICE_INCLUSIVE_REDUCTION_AMOUNT:
          fieldBuilder.buildEdmTypeField(
            'TaxExemptPriceInclusiveReductionAmount',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link priceInBarCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_IN_BAR_CODE: fieldBuilder.buildEnumField(
          'PriceInBarCode',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOT_ID: fieldBuilder.buildEdmTypeField('LotID', 'Edm.String', true),
        /**
         * Static representation of the {@link returnQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReturnQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link customerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originalPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_PRICE: fieldBuilder.buildEdmTypeField(
          'OriginalPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_RELATION: fieldBuilder.buildEdmTypeField(
          'ItemRelation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestedShipDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_SHIP_DATE: fieldBuilder.buildEdmTypeField(
          'RequestedShipDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link transactionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_STATUS: fieldBuilder.buildEnumField(
          'TransactionStatus',
          RetailEntryStatus,
          true
        ),
        /**
         * Static representation of the {@link itemConfigId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CONFIG_ID: fieldBuilder.buildEdmTypeField(
          'ItemConfigId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnOperatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReturnOperatingUnitNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'LineDiscount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link netAmountInclusiveTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_AMOUNT_INCLUSIVE_TAX: fieldBuilder.buildEdmTypeField(
          'NetAmountInclusiveTax',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventoryStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_STATUS: fieldBuilder.buildEnumField(
          'InventoryStatus',
          RetailInventStatusSales,
          true
        ),
        /**
         * Static representation of the {@link lineManualDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_MANUAL_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'LineManualDiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link giftCard} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD: fieldBuilder.buildEnumField('GiftCard', NoYes, true),
        /**
         * Static representation of the {@link channelListingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANNEL_LISTING_ID: fieldBuilder.buildEdmTypeField(
          'ChannelListingID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link netAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NetAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemColor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_COLOR: fieldBuilder.buildEdmTypeField(
          'ItemColor',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPriceChange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRICE_CHANGE: fieldBuilder.buildEnumField(
          'IsPriceChange',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link barCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BAR_CODE: fieldBuilder.buildEdmTypeField('BarCode', 'Edm.String', true),
        /**
         * Static representation of the {@link unitQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'UnitQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineManualDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_MANUAL_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineManualDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link standardNetPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDARD_NET_PRICE: fieldBuilder.buildEdmTypeField(
          'StandardNetPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link businessDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_DATE: fieldBuilder.buildEdmTypeField(
          'BusinessDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link itemVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_VERSION: fieldBuilder.buildEdmTypeField(
          'ItemVersion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnTerminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_TERMINAL: fieldBuilder.buildEdmTypeField(
          'ReturnTerminal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isWeightProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WEIGHT_PRODUCT: fieldBuilder.buildEnumField(
          'IsWeightProduct',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link logisticLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGISTIC_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LogisticLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isScaleProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SCALE_PRODUCT: fieldBuilder.buildEnumField(
          'IsScaleProduct',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isOriginalOfLinkedProductList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ORIGINAL_OF_LINKED_PRODUCT_LIST: fieldBuilder.buildEnumField(
          'IsOriginalOfLinkedProductList',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link itemStyle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_STYLE: fieldBuilder.buildEdmTypeField(
          'ItemStyle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReceiptNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link linePercentageDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PERCENTAGE_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'LinePercentageDiscount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reasonCodeDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'ReasonCodeDiscount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link categoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalDiscountInfoCodeLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT_INFO_CODE_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'TotalDiscountInfoCodeLineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link keyboardProductEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEYBOARD_PRODUCT_ENTRY: fieldBuilder.buildEnumField(
          'KeyboardProductEntry',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cancelledTransactionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELLED_TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'CancelledTransactionNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isReturnNoSale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RETURN_NO_SALE: fieldBuilder.buildEnumField(
          'IsReturnNoSale',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link electronicDeliveryEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_DELIVERY_EMAIL: fieldBuilder.buildEdmTypeField(
          'ElectronicDeliveryEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link salesTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SalesTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link returnTransactionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReturnTransactionNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link price} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE: fieldBuilder.buildEdmTypeField('Price', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link unitPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_PRICE: fieldBuilder.buildEdmTypeField(
          'UnitPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originalSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'OriginalSalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isLineDiscounted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LINE_DISCOUNTED: fieldBuilder.buildEnumField(
          'IsLineDiscounted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shelfNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHELF_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShelfNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'ItemSalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'SerialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offerNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFER_NUMBER: fieldBuilder.buildEdmTypeField(
          'OfferNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CostAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sectionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'SectionNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isWeightManuallyEntered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WEIGHT_MANUALLY_ENTERED: fieldBuilder.buildEnumField(
          'IsWeightManuallyEntered',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link discountAmountForPrinting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_AMOUNT_FOR_PRINTING: fieldBuilder.buildEdmTypeField(
          'DiscountAmountForPrinting',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link customerInvoiceDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_INVOICE_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerInvoiceDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productScanned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SCANNED: fieldBuilder.buildEnumField(
          'ProductScanned',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link periodicDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIODIC_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'PeriodicDiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link returnTrackingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_TRACKING_STATUS: fieldBuilder.buildEnumField(
          'ReturnTrackingStatus',
          RetailReturnTrackingStatusType,
          true
        ),
        /**
         * Static representation of the {@link returnLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReturnLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link periodicDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIODIC_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PeriodicDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link periodicDiscountGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIODIC_DISCOUNT_GROUP: fieldBuilder.buildEdmTypeField(
          'PeriodicDiscountGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupEndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_END_TIME: fieldBuilder.buildEdmTypeField(
          'PickupEndTime',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTransactionSalesLinesV2)
      };
    }

    return this._schema;
  }
}
