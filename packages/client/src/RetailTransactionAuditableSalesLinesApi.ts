/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactionAuditableSalesLines } from './RetailTransactionAuditableSalesLines';
import { RetailTransactionAuditableSalesLinesRequestBuilder } from './RetailTransactionAuditableSalesLinesRequestBuilder';
import { RetailTransactionAuditableTaxLinesApi } from './RetailTransactionAuditableTaxLinesApi';
import { RetailTransactionAuditableChargeLinesApi } from './RetailTransactionAuditableChargeLinesApi';
import { RetailTransactionAuditableAddressLinesApi } from './RetailTransactionAuditableAddressLinesApi';
import { RetailTransactionsAuditableApi } from './RetailTransactionsAuditableApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { RetailTransactionAuditableDiscountLinesApi } from './RetailTransactionAuditableDiscountLinesApi';
import { RetailTransactionValidationStatus } from './RetailTransactionValidationStatus';
import { NoYes } from './NoYes';
import { RetailItemTransactionCode } from './RetailItemTransactionCode';
import { RetailGiftCardSalesLineOperation } from './RetailGiftCardSalesLineOperation';
import { RetailTransactionType } from './RetailTransactionType';
import { RetailEntryStatus } from './RetailEntryStatus';
import { RetailTransactionOrderStatusType } from './RetailTransactionOrderStatusType';
import { RetailGiftCardType } from './RetailGiftCardType';
import { RetailReturnTrackingStatusType } from './RetailReturnTrackingStatusType';
import { RetailInventStatusSales } from './RetailInventStatusSales';
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
export class RetailTransactionAuditableSalesLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailTransactionAuditableSalesLines<DeSerializersT>,
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
  ): RetailTransactionAuditableSalesLinesApi<DeSerializersT> {
    return new RetailTransactionAuditableSalesLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailTransactionAuditableTaxLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_TAX_LINE: OneToManyLink<
      RetailTransactionAuditableSalesLines<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditableTaxLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTransactionAuditableChargeLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_CHARGE_LINE: OneToManyLink<
      RetailTransactionAuditableSalesLines<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditableChargeLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTransactionAuditableAddressLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_ADDRESS_LINE: OneToManyLink<
      RetailTransactionAuditableSalesLines<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditableAddressLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTransactionAuditable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE: OneToOneLink<
      RetailTransactionAuditableSalesLines<DeSerializersT>,
      DeSerializersT,
      RetailTransactionsAuditableApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      RetailTransactionAuditableSalesLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTransactionAuditableDiscountLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_DISCOUNT_LINE: OneToManyLink<
      RetailTransactionAuditableSalesLines<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditableDiscountLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailTransactionAuditableTaxLinesApi<DeSerializersT>,
      RetailTransactionAuditableChargeLinesApi<DeSerializersT>,
      RetailTransactionAuditableAddressLinesApi<DeSerializersT>,
      RetailTransactionsAuditableApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      RetailTransactionAuditableDiscountLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_TRANSACTION_AUDITABLE_TAX_LINE: new OneToManyLink(
        'RetailTransactionAuditableTaxLine',
        this,
        linkedApis[0]
      ),
      RETAIL_TRANSACTION_AUDITABLE_CHARGE_LINE: new OneToManyLink(
        'RetailTransactionAuditableChargeLine',
        this,
        linkedApis[1]
      ),
      RETAIL_TRANSACTION_AUDITABLE_ADDRESS_LINE: new OneToManyLink(
        'RetailTransactionAuditableAddressLine',
        this,
        linkedApis[2]
      ),
      RETAIL_TRANSACTION_AUDITABLE: new OneToOneLink(
        'RetailTransactionAuditable',
        this,
        linkedApis[3]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[4]),
      RETAIL_TRANSACTION_AUDITABLE_DISCOUNT_LINE: new OneToManyLink(
        'RetailTransactionAuditableDiscountLine',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = RetailTransactionAuditableSalesLines;

  requestBuilder(): RetailTransactionAuditableSalesLinesRequestBuilder<DeSerializersT> {
    return new RetailTransactionAuditableSalesLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactionAuditableSalesLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransactionAuditableSalesLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactionAuditableSalesLines<DeSerializersT>,
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
    typeof RetailTransactionAuditableSalesLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactionAuditableSalesLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGISTER_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SITE: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_RECEIPT_DATE: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ORIGINAL_ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_EMAIL_ADDRESS_CONTENT: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_VALIDATION_STATUS: EnumField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      RetailTransactionValidationStatus,
      true,
      true
    >;
    ORIGINAL_OF_LINKED_PRODUCT_LIST: EnumField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODE_OF_DELIVERY: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NET_AMOUNT_INCLUDING_TAX: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WAREHOUSE: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BATCH_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_START_TIME: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_STAFF: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_EXEMPT_PRICE_INCLUSIVE_ORIGINAL_PRICE: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GIFT_CARD_BALANCE: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BARCODE: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_OVERRIDE: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_CHANGE: EnumField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VARIANT_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_DIMENSION_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_STORE: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_TIME: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TRANSACTION_CODE: EnumField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      RetailItemTransactionCode,
      true,
      true
    >;
    TOTAL_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_PRICE_CHARGES: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GIFT_CARD_OPERATION: EnumField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      RetailGiftCardSalesLineOperation,
      true,
      true
    >;
    UNIT: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_TRANSACTION_TYPE: EnumField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      RetailTransactionType,
      true,
      true
    >;
    TAX_EXEMPT_PRICE_INCLUSIVE_REDUCTION_AMOUNT: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOT_ID: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_QUANTITY: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_PRICE: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQUESTED_SHIP_DATE: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSACTION_STATUS: EnumField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      RetailEntryStatus,
      true,
      true
    >;
    IS_TAX_EXEMPT_BY_TAX_OVERRIDE: EnumField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATEMENT_CODE: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HEADER_ASYNCHRONOUS_ORDER_STATUS: EnumField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      RetailTransactionOrderStatusType,
      true,
      true
    >;
    LINE_MANUAL_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NET_AMOUNT: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_MANUAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BUSINESS_DATE: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRICE_IN_BARCODE: EnumField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECEIPT_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINKED_PRODUCT_NOT_ORIGINAL: EnumField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    KEYBOARD_PRODUCT_ENTRY: EnumField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_GROUP: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATEMENT_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_REGISTER_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFTCARD: EnumField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FULFILLMENT_STORE_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_AMOUNT: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_TRANSACTION_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRICE: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_SALES_TAX_GROUP: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_TYPE: EnumField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      RetailGiftCardType,
      true,
      true
    >;
    SERIAL_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_AMOUNT: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_AMOUNT_EXCLUDING_TAX: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_SCANNED: EnumField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERIODIC_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_TRACKING_STATUS: EnumField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      RetailReturnTrackingStatusType,
      true,
      true
    >;
    RETURN_LINE_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERIODIC_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_STATUS_SALES: EnumField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      RetailInventStatusSales,
      true,
      true
    >;
    PICKUP_END_TIME: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INVENTORY_DIMENSION_FOR_RETURN: OrderableEdmTypeField<
      RetailTransactionAuditableSalesLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTransactionAuditableTaxLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_TAX_LINE: OneToManyLink<
      RetailTransactionAuditableSalesLines<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditableTaxLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTransactionAuditableChargeLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_CHARGE_LINE: OneToManyLink<
      RetailTransactionAuditableSalesLines<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditableChargeLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTransactionAuditableAddressLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_ADDRESS_LINE: OneToManyLink<
      RetailTransactionAuditableSalesLines<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditableAddressLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTransactionAuditable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE: OneToOneLink<
      RetailTransactionAuditableSalesLines<DeSerializersT>,
      DeSerializersT,
      RetailTransactionsAuditableApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      RetailTransactionAuditableSalesLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTransactionAuditableDiscountLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_DISCOUNT_LINE: OneToManyLink<
      RetailTransactionAuditableSalesLines<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditableDiscountLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailTransactionAuditableSalesLines<DeSerializers>>;
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
         * Static representation of the {@link operatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperatingUnitNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link storeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_NUMBER: fieldBuilder.buildEdmTypeField(
          'StoreNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link registerNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTER_NUMBER: fieldBuilder.buildEdmTypeField(
          'RegisterNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'TransactionId',
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
         * Static representation of the {@link site} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE: fieldBuilder.buildEdmTypeField('Site', 'Edm.String', true),
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
         * Static representation of the {@link transactionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DATE: fieldBuilder.buildEdmTypeField(
          'TransactionDate',
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
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
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
         * Static representation of the {@link headerValidationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_VALIDATION_STATUS: fieldBuilder.buildEnumField(
          'HeaderValidationStatus',
          RetailTransactionValidationStatus,
          true
        ),
        /**
         * Static representation of the {@link originalOfLinkedProductList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_OF_LINKED_PRODUCT_LIST: fieldBuilder.buildEnumField(
          'OriginalOfLinkedProductList',
          NoYes,
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
         * Static representation of the {@link modeOfDelivery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODE_OF_DELIVERY: fieldBuilder.buildEdmTypeField(
          'ModeOfDelivery',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link netAmountIncludingTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_AMOUNT_INCLUDING_TAX: fieldBuilder.buildEdmTypeField(
          'NetAmountIncludingTax',
          'Edm.Decimal',
          false
        ),
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
         * Static representation of the {@link batchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'BatchNumber',
          'Edm.String',
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
         * Static representation of the {@link salesStaff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_STAFF: fieldBuilder.buildEdmTypeField(
          'SalesStaff',
          'Edm.String',
          true
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
         * Static representation of the {@link lineDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link barcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE: fieldBuilder.buildEdmTypeField('Barcode', 'Edm.String', true),
        /**
         * Static representation of the {@link salesTaxOverride} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_OVERRIDE: fieldBuilder.buildEdmTypeField(
          'SalesTaxOverride',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceChange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_CHANGE: fieldBuilder.buildEnumField('PriceChange', NoYes, true),
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
         * Static representation of the {@link inventoryDimensionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_DIMENSION_NUMBER: fieldBuilder.buildEdmTypeField(
          'InventoryDimensionNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnStore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_STORE: fieldBuilder.buildEdmTypeField(
          'ReturnStore',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TIME: fieldBuilder.buildEdmTypeField(
          'TransactionTime',
          'Edm.Int32',
          false
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
         * Static representation of the {@link dimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionDisplayValue',
          'Edm.String',
          true
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
         * Static representation of the {@link giftCardOperation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_OPERATION: fieldBuilder.buildEnumField(
          'GiftCardOperation',
          RetailGiftCardSalesLineOperation,
          true
        ),
        /**
         * Static representation of the {@link unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT: fieldBuilder.buildEdmTypeField('Unit', 'Edm.String', true),
        /**
         * Static representation of the {@link headerTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'HeaderTransactionType',
          RetailTransactionType,
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
         * Static representation of the {@link isTaxExemptByTaxOverride} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TAX_EXEMPT_BY_TAX_OVERRIDE: fieldBuilder.buildEnumField(
          'IsTaxExemptByTaxOverride',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link statementCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_CODE: fieldBuilder.buildEdmTypeField(
          'StatementCode',
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
         * Static representation of the {@link totalDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link headerAsynchronousOrderStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_ASYNCHRONOUS_ORDER_STATUS: fieldBuilder.buildEnumField(
          'HeaderAsynchronousOrderStatus',
          RetailTransactionOrderStatusType,
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
         * Static representation of the {@link netAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NetAmount',
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
         * Static representation of the {@link businessDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_DATE: fieldBuilder.buildEdmTypeField(
          'BusinessDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link priceInBarcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_IN_BARCODE: fieldBuilder.buildEnumField(
          'PriceInBarcode',
          NoYes,
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
         * Static representation of the {@link linkedProductNotOriginal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINKED_PRODUCT_NOT_ORIGINAL: fieldBuilder.buildEnumField(
          'LinkedProductNotOriginal',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link discountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
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
         * Static representation of the {@link keyboardProductEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEYBOARD_PRODUCT_ENTRY: fieldBuilder.buildEnumField(
          'KeyboardProductEntry',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link comment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT: fieldBuilder.buildEdmTypeField('Comment', 'Edm.String', true),
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
         * Static representation of the {@link statementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'StatementNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnRegisterNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_REGISTER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReturnRegisterNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giftcard} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFTCARD: fieldBuilder.buildEnumField('Giftcard', NoYes, true),
        /**
         * Static representation of the {@link fulfillmentStoreNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULFILLMENT_STORE_NUMBER: fieldBuilder.buildEdmTypeField(
          'FulfillmentStoreNumber',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link itemSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'ItemSalesTaxGroup',
          'Edm.String',
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
         * Static representation of the {@link serialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'SerialNumber',
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
         * Static representation of the {@link discountAmountExcludingTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_AMOUNT_EXCLUDING_TAX: fieldBuilder.buildEdmTypeField(
          'DiscountAmountExcludingTax',
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
         * Static representation of the {@link inventoryStatusSales} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_STATUS_SALES: fieldBuilder.buildEnumField(
          'InventoryStatusSales',
          RetailInventStatusSales,
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
         * Static representation of the {@link inventoryDimensionForReturn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_DIMENSION_FOR_RETURN: fieldBuilder.buildEdmTypeField(
          'InventoryDimensionForReturn',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTransactionAuditableSalesLines)
      };
    }

    return this._schema;
  }
}
