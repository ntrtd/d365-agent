/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactionSalesTransBiEntities } from './RetailTransactionSalesTransBiEntities';
import { RetailTransactionSalesTransBiEntitiesRequestBuilder } from './RetailTransactionSalesTransBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { RetailGiftCardSalesLineOperation } from './RetailGiftCardSalesLineOperation';
import { RetailItemTransactionCode } from './RetailItemTransactionCode';
import { RetailInventStatusSales } from './RetailInventStatusSales';
import { McrLineType } from './McrLineType';
import { McrUpSellOrigin } from './McrUpSellOrigin';
import { RetailEntryStatus } from './RetailEntryStatus';
import { RetailPeriodicDiscType } from './RetailPeriodicDiscType';
import { RetailGiftCardType } from './RetailGiftCardType';
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
export class RetailTransactionSalesTransBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailTransactionSalesTransBiEntities<DeSerializersT>,
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
  ): RetailTransactionSalesTransBiEntitiesApi<DeSerializersT> {
    return new RetailTransactionSalesTransBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTransactionSalesTransBiEntities;

  requestBuilder(): RetailTransactionSalesTransBiEntitiesRequestBuilder<DeSerializersT> {
    return new RetailTransactionSalesTransBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactionSalesTransBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransactionSalesTransBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactionSalesTransBiEntities<DeSerializersT>,
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
    typeof RetailTransactionSalesTransBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactionSalesTransBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SCALE_ITEM: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISC_AMOUNT: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CANCELLED_TRANSACTION_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_MARKUP: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIPT_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOYALTY_DISC_AMOUNT_RU: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WAREHOUSE_LOCATION: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIODIC_DISC_GROUP: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BARCODE: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_INVENT_TRANS_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_SERIAL_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTER: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STATEMENT_CODE: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTINUITY_SCHEDULE_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIM_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_CALCULATED_WMS_LOCATION_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_QTY: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIPPING_DATE_REQUESTED: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SECTION: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFTCARD: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRICE_IN_BARCODE: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GIFT_CARD_NUMBER: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_START_TIME: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_EXEMPT_PRICE_INCLUSIVE_ORIGINAL_PRICE: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GIFT_CARD_BALANCE: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_PRICE: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_RATE_PERCENT: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRICE: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BLOCK_QTY: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LICENSE_PLATE: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_STORE: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RFID_TAG_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIFT_DATE: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUST_ACCOUNT_ASYNC: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_QTY: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DISC_AMOUNT_WITHOUT_TAX: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISC_OFFER_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STAFF_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISC_GROUP_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_PRICE: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_TRANS_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIODIC_PERCENTAGE_DISCOUNT: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PUMP_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RETURN_TERMINAL_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_SITE_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_LINE_NUM: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GIFT_CARD_OPERATION: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      RetailGiftCardSalesLineOperation,
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ORIGINAL_OF_LINKED_ITEM_LIST: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NET_AMOUNT: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SERVICE_ACCOUNTING_CODE_IN: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_EXEMPT_PRICE_INCLUSIVE_REDUCTION_AMOUNT: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INFOCODE_DISC_AMOUNT: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_NO_SALE: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRESCRIPTION_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STD_NET_PRICE: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ELECTRONIC_DELIVERY_EMAIL_CONTENT: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGIN: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CODE: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      RetailItemTransactionCode,
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PURCH_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_STATUS_SALES: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      RetailInventStatusSales,
      true,
      true
    >;
    ORIGINAL_TAX_GROUP: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_BATCH_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_TYPE: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      McrLineType,
      true,
      true
    >;
    IS_TAX_EXEMPT_BY_TAX_OVERRIDE: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    UP_SELL_ORIGIN: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      McrUpSellOrigin,
      true,
      true
    >;
    TAX_RATE_TYPE: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_DISC_AMOUNT: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_DISC_PCT: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_STATUS: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      RetailEntryStatus,
      true,
      true
    >;
    REPLICATION_COUNTER_FROM_ORIGIN: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUST_INVOICE_DISC_AMOUNT: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HSN_CODE_IN: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOYALTY_DISC_PCT_RU: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_DSC_AMOUNT: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_MANUAL_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRICE_CHANGE: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TENDER_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_ID_SCANNED: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISC_AMOUNT_FROM_STD_PRICE: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_DISC_INFO_CODE_LINE_NUM: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_MANUAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_LOCATION_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_ROUNDED_AMOUNT: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHELF: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NET_PRICE: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_POSTING_GROUP: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATEMENT_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_DATE_REQUESTED: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NET_AMOUNT_INCL_TAX: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_WAS_DISCOUNTED: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BUSINESS_DATE: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DLV_MODE: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_PERCENTAGE_DISCOUNT: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIFT: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VARIANT_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LISTING_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSTALLMENT_ELIGIBLE: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUST_ACCOUNT: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STAFF: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_INVENT_DIM_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WEIGHT_MANUALLY_ENTERED: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_GROUP: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_CORRECTED_LINE: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETURN_TRANSACTION_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_DELIVERY_EMAIL: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KEYBOARD_ITEM_ENTRY: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_AMOUNT: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLICATED: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANS_TIME: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    QTY: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINKED_ITEM_NOT_ORIGINAL: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NON_GST_IN: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERIODIC_DISC_TYPE: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      RetailPeriodicDiscType,
      true,
      true
    >;
    GIFT_CARD_TYPE: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      RetailGiftCardType,
      true,
      true
    >;
    INVENT_STATUS: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXEMPT_IN: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERIODIC_DISC_AMOUNT: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WEIGHT_ITEM: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_OVERRIDE_CODE: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_AMOUNT_FOR_PRINTING: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TENDER_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_TRACKING_STATUS: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      RetailReturnTrackingStatusType,
      true,
      true
    >;
    TOTAL_DISC_AMOUNT: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIGINAL_TAX_ITEM_GROUP: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FULFILLMENT_STORE_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UP_SELL_ORIGIN_OFFER_ID: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_END_TIME: OrderableEdmTypeField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SKIP_SALES_LINE_RU: EnumField<
      RetailTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailTransactionSalesTransBiEntities<DeSerializers>>;
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
         * Static representation of the {@link store} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE: fieldBuilder.buildEdmTypeField('store', 'Edm.String', false),
        /**
         * Static representation of the {@link terminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'terminalId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'transactionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'lineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link scaleItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCALE_ITEM: fieldBuilder.buildEnumField('scaleItem', NoYes, true),
        /**
         * Static representation of the {@link discAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISC_AMOUNT: fieldBuilder.buildEdmTypeField(
          'discAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cancelledTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELLED_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'CancelledTransactionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesMarkup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_MARKUP: fieldBuilder.buildEdmTypeField(
          'SalesMarkup',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link receiptId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_ID: fieldBuilder.buildEdmTypeField(
          'receiptId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loyaltyDiscAmountRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_DISC_AMOUNT_RU: fieldBuilder.buildEdmTypeField(
          'LoyaltyDiscAmount_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link warehouseLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_LOCATION: fieldBuilder.buildEdmTypeField(
          'WarehouseLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodicDiscGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIODIC_DISC_GROUP: fieldBuilder.buildEdmTypeField(
          'periodicDiscGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link barcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE: fieldBuilder.buildEdmTypeField('barcode', 'Edm.String', true),
        /**
         * Static representation of the {@link parentInventTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_INVENT_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'ParentInventTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventSerialId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_SERIAL_ID: fieldBuilder.buildEdmTypeField(
          'InventSerialId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link counter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTER: fieldBuilder.buildEdmTypeField('counter', 'Edm.Int32', false),
        /**
         * Static representation of the {@link statementCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_CODE: fieldBuilder.buildEdmTypeField(
          'statementCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link continuityScheduleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTINUITY_SCHEDULE_ID: fieldBuilder.buildEdmTypeField(
          'ContinuityScheduleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIM_ID: fieldBuilder.buildEdmTypeField(
          'inventDimId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingCalculatedWmsLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_CALCULATED_WMS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'PostingCalculatedWMSLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link comment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT: fieldBuilder.buildEdmTypeField('comment', 'Edm.String', true),
        /**
         * Static representation of the {@link unitQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_QTY: fieldBuilder.buildEdmTypeField(
          'unitQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shippingDateRequested} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_DATE_REQUESTED: fieldBuilder.buildEdmTypeField(
          'ShippingDateRequested',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link section} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECTION: fieldBuilder.buildEdmTypeField('section', 'Edm.String', true),
        /**
         * Static representation of the {@link giftcard} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFTCARD: fieldBuilder.buildEnumField('giftcard', NoYes, true),
        /**
         * Static representation of the {@link priceInBarcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_IN_BARCODE: fieldBuilder.buildEnumField(
          'priceInBarcode',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link giftCardNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_NUMBER: fieldBuilder.buildEdmTypeField(
          'GiftCardNumber',
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
         * Static representation of the {@link giftCardBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_BALANCE: fieldBuilder.buildEdmTypeField(
          'GiftCardBalance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_PRICE: fieldBuilder.buildEdmTypeField(
          'unitPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxRatePercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_RATE_PERCENT: fieldBuilder.buildEdmTypeField(
          'TaxRatePercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link price} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE: fieldBuilder.buildEdmTypeField('price', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link blockQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCK_QTY: fieldBuilder.buildEdmTypeField(
          'BlockQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link licensePlate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LICENSE_PLATE: fieldBuilder.buildEdmTypeField(
          'LicensePlate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnStore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_STORE: fieldBuilder.buildEdmTypeField(
          'returnStore',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'SysModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxItemGroup',
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
         * Static representation of the {@link shiftDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIFT_DATE: fieldBuilder.buildEdmTypeField(
          'shiftDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link custAccountAsync} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCOUNT_ASYNC: fieldBuilder.buildEdmTypeField(
          'CustAccountAsync',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_QTY: fieldBuilder.buildEdmTypeField(
          'returnQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link discAmountWithoutTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISC_AMOUNT_WITHOUT_TAX: fieldBuilder.buildEdmTypeField(
          'discAmountWithoutTax',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link discOfferId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISC_OFFER_ID: fieldBuilder.buildEdmTypeField(
          'discOfferId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link staffId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAFF_ID: fieldBuilder.buildEdmTypeField('staffId', 'Edm.String', true),
        /**
         * Static representation of the {@link discGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISC_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'discGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originalPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_PRICE: fieldBuilder.buildEdmTypeField(
          'originalPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'inventTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodicPercentageDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIODIC_PERCENTAGE_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'PeriodicPercentageDiscount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pumpId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PUMP_ID: fieldBuilder.buildEdmTypeField('pumpId', 'Edm.Int32', false),
        /**
         * Static representation of the {@link returnTerminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'returnTerminalId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_SITE_ID: fieldBuilder.buildEdmTypeField(
          'InventSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'returnLineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link giftCardOperation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_OPERATION: fieldBuilder.buildEnumField(
          'GiftCardOperation',
          RetailGiftCardSalesLineOperation,
          true
        ),
        /**
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'transDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link originalOfLinkedItemList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_OF_LINKED_ITEM_LIST: fieldBuilder.buildEnumField(
          'originalOfLinkedItemList',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link netAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'netAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link serviceAccountingCodeIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ACCOUNTING_CODE_IN: fieldBuilder.buildEdmTypeField(
          'ServiceAccountingCode_IN',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link infocodeDiscAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFOCODE_DISC_AMOUNT: fieldBuilder.buildEdmTypeField(
          'infocodeDiscAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link returnNoSale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_NO_SALE: fieldBuilder.buildEnumField(
          'returnNoSale',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link prescriptionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRESCRIPTION_ID: fieldBuilder.buildEdmTypeField(
          'prescriptionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stdNetPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STD_NET_PRICE: fieldBuilder.buildEdmTypeField(
          'stdNetPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link electronicDeliveryEmailContent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_DELIVERY_EMAIL_CONTENT: fieldBuilder.buildEdmTypeField(
          'ElectronicDeliveryEmailContent',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link origin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN: fieldBuilder.buildEdmTypeField('Origin', 'Edm.String', true),
        /**
         * Static representation of the {@link transactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CODE: fieldBuilder.buildEnumField(
          'transactionCode',
          RetailItemTransactionCode,
          true
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link purchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_ID: fieldBuilder.buildEdmTypeField('purchId', 'Edm.String', true),
        /**
         * Static representation of the {@link inventStatusSales} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_STATUS_SALES: fieldBuilder.buildEnumField(
          'inventStatusSales',
          RetailInventStatusSales,
          true
        ),
        /**
         * Static representation of the {@link originalTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'OriginalTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventBatchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_BATCH_ID: fieldBuilder.buildEdmTypeField(
          'InventBatchId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TYPE: fieldBuilder.buildEnumField('LineType', McrLineType, true),
        /**
         * Static representation of the {@link isTaxExemptByTaxOverride} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TAX_EXEMPT_BY_TAX_OVERRIDE: fieldBuilder.buildEnumField(
          'IsTaxExemptByTaxOverride',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link upSellOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UP_SELL_ORIGIN: fieldBuilder.buildEnumField(
          'UpSellOrigin',
          McrUpSellOrigin,
          true
        ),
        /**
         * Static representation of the {@link taxRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'TaxRateType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custDiscAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_DISC_AMOUNT: fieldBuilder.buildEdmTypeField(
          'custDiscAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalDiscPct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISC_PCT: fieldBuilder.buildEdmTypeField(
          'totalDiscPct',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_STATUS: fieldBuilder.buildEnumField(
          'transactionStatus',
          RetailEntryStatus,
          true
        ),
        /**
         * Static representation of the {@link replicationCounterFromOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLICATION_COUNTER_FROM_ORIGIN: fieldBuilder.buildEdmTypeField(
          'replicationCounterFromOrigin',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link custInvoiceDiscAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_INVOICE_DISC_AMOUNT: fieldBuilder.buildEdmTypeField(
          'custInvoiceDiscAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link hsnCodeIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HSN_CODE_IN: fieldBuilder.buildEdmTypeField(
          'HSNCode_IN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loyaltyDiscPctRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_DISC_PCT_RU: fieldBuilder.buildEdmTypeField(
          'LoyaltyDiscPct_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineDscAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DSC_AMOUNT: fieldBuilder.buildEdmTypeField(
          'lineDscAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link priceChange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_CHANGE: fieldBuilder.buildEnumField('priceChange', NoYes, true),
        /**
         * Static representation of the {@link tenderDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENDER_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'TenderDiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemIdScanned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID_SCANNED: fieldBuilder.buildEnumField(
          'itemIdScanned',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link discAmountFromStdPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISC_AMOUNT_FROM_STD_PRICE: fieldBuilder.buildEdmTypeField(
          'discAmountFromStdPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalDiscInfoCodeLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISC_INFO_CODE_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'totalDiscInfoCodeLineNum',
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
         * Static representation of the {@link inventLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'InventLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalRoundedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_ROUNDED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'totalRoundedAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shelf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHELF: fieldBuilder.buildEdmTypeField('shelf', 'Edm.String', true),
        /**
         * Static representation of the {@link unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT: fieldBuilder.buildEdmTypeField('unit', 'Edm.String', true),
        /**
         * Static representation of the {@link netPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_PRICE: fieldBuilder.buildEdmTypeField(
          'netPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemPostingGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_POSTING_GROUP: fieldBuilder.buildEdmTypeField(
          'itemPostingGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_ID: fieldBuilder.buildEdmTypeField(
          'statementId',
          'Edm.String',
          true
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
         * Static representation of the {@link sysCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'SysCreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link netAmountInclTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_AMOUNT_INCL_TAX: fieldBuilder.buildEdmTypeField(
          'netAmountInclTax',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineWasDiscounted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_WAS_DISCOUNTED: fieldBuilder.buildEnumField(
          'lineWasDiscounted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link businessDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_DATE: fieldBuilder.buildEdmTypeField(
          'businessDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dlvMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_MODE: fieldBuilder.buildEdmTypeField('DlvMode', 'Edm.String', true),
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
         * Static representation of the {@link shift} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIFT: fieldBuilder.buildEdmTypeField('shift', 'Edm.String', true),
        /**
         * Static representation of the {@link variantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANT_ID: fieldBuilder.buildEdmTypeField(
          'variantId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LISTING_ID: fieldBuilder.buildEdmTypeField(
          'ListingId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link installmentEligible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTALLMENT_ELIGIBLE: fieldBuilder.buildEnumField(
          'InstallmentEligible',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'taxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link custAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'custAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link staff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAFF: fieldBuilder.buildEdmTypeField('staff', 'Edm.String', true),
        /**
         * Static representation of the {@link returnInventDimId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_INVENT_DIM_ID: fieldBuilder.buildEdmTypeField(
          'ReturnInventDimId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link weightManuallyEntered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT_MANUALLY_ENTERED: fieldBuilder.buildEnumField(
          'weightManuallyEntered',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemCorrectedLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CORRECTED_LINE: fieldBuilder.buildEnumField(
          'itemCorrectedLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link returnTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'returnTransactionId',
          'Edm.String',
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
         * Static representation of the {@link keyboardItemEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEYBOARD_ITEM_ENTRY: fieldBuilder.buildEnumField(
          'keyboardItemEntry',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('itemId', 'Edm.String', true),
        /**
         * Static representation of the {@link costAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'costAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_ID: fieldBuilder.buildEdmTypeField(
          'SourceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link replicated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLICATED: fieldBuilder.buildEnumField('replicated', NoYes, true),
        /**
         * Static representation of the {@link transTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_TIME: fieldBuilder.buildEdmTypeField(
          'transTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link qty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY: fieldBuilder.buildEdmTypeField('qty', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link linkedItemNotOriginal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINKED_ITEM_NOT_ORIGINAL: fieldBuilder.buildEnumField(
          'linkedItemNotOriginal',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link nonGstIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_GST_IN: fieldBuilder.buildEnumField('NonGST_IN', NoYes, true),
        /**
         * Static representation of the {@link periodicDiscType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIODIC_DISC_TYPE: fieldBuilder.buildEnumField(
          'periodicDiscType',
          RetailPeriodicDiscType,
          true
        ),
        /**
         * Static representation of the {@link giftCardType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_TYPE: fieldBuilder.buildEnumField(
          'GiftCardType',
          RetailGiftCardType,
          true
        ),
        /**
         * Static representation of the {@link inventStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_STATUS: fieldBuilder.buildEdmTypeField(
          'InventStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exemptIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT_IN: fieldBuilder.buildEnumField('Exempt_IN', NoYes, true),
        /**
         * Static representation of the {@link periodicDiscAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIODIC_DISC_AMOUNT: fieldBuilder.buildEdmTypeField(
          'periodicDiscAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link weightItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT_ITEM: fieldBuilder.buildEnumField('weightItem', NoYes, true),
        /**
         * Static representation of the {@link taxOverrideCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_OVERRIDE_CODE: fieldBuilder.buildEdmTypeField(
          'TaxOverrideCode',
          'Edm.String',
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
         * Static representation of the {@link taxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'taxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tenderDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENDER_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TenderDiscountAmount',
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
         * Static representation of the {@link totalDiscAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISC_AMOUNT: fieldBuilder.buildEdmTypeField(
          'totalDiscAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link originalTaxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'OriginalTaxItemGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fulfillmentStoreId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULFILLMENT_STORE_ID: fieldBuilder.buildEdmTypeField(
          'FulfillmentStoreId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link upSellOriginOfferId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UP_SELL_ORIGIN_OFFER_ID: fieldBuilder.buildEdmTypeField(
          'UpSellOriginOfferId',
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
        /**
         * Static representation of the {@link skipSalesLineRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_SALES_LINE_RU: fieldBuilder.buildEnumField(
          'SkipSalesLine_RU',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTransactionSalesTransBiEntities)
      };
    }

    return this._schema;
  }
}
