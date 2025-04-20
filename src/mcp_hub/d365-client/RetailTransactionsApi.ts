/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactions } from './RetailTransactions';
import { RetailTransactionsRequestBuilder } from './RetailTransactionsRequestBuilder';
import { RetailGiftCardTransactionsApi } from './RetailGiftCardTransactionsApi';
import { GiftCardTransactionsV2Api } from './GiftCardTransactionsV2Api';
import { NoYes } from './NoYes';
import { RetailTransactionType } from './RetailTransactionType';
import { RetailTransactionOrderTypes } from './RetailTransactionOrderTypes';
import { TaxCalculationType } from './TaxCalculationType';
import { RetailEntryStatus } from './RetailEntryStatus';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailTransactionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailTransactions<DeSerializersT>, DeSerializersT>
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
  ): RetailTransactionsApi<DeSerializersT> {
    return new RetailTransactionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailGiftCardTransactions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_GIFT_CARD_TRANSACTIONS: OneToManyLink<
      RetailTransactions<DeSerializersT>,
      DeSerializersT,
      RetailGiftCardTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link giftCardTransactionV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GIFT_CARD_TRANSACTION_V_2: OneToManyLink<
      RetailTransactions<DeSerializersT>,
      DeSerializersT,
      GiftCardTransactionsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailGiftCardTransactionsApi<DeSerializersT>,
      GiftCardTransactionsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_GIFT_CARD_TRANSACTIONS: new OneToManyLink(
        'RetailGiftCardTransactions',
        this,
        linkedApis[0]
      ),
      GIFT_CARD_TRANSACTION_V_2: new OneToManyLink(
        'GiftCardTransactionV2',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = RetailTransactions;

  requestBuilder(): RetailTransactionsRequestBuilder<DeSerializersT> {
    return new RetailTransactionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailTransactions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactions<DeSerializersT>,
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
    typeof RetailTransactions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_NUMBER: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AMOUNT_POSTED_TO_ACCOUNT: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POST_AS_SHIPMENT: EnumField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REFUND_RECEIPT_ID: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOGISTICS_POSTAL_ADDRESS_VALID_FROM: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INFOCODE_DISCOUNT_GROUP: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEMS_POSTED: EnumField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SITE_ID: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_PAYMENT_LINES: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TOTAL_MANUAL_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIPPING_DATE_REQUESTED: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BATCH_TERMINAL_ID: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_TAX_INCLUDED_IN_PRICE: EnumField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WAREHOUSE: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_TAX_EXEMPTED_FOR_PRICE_INCLUSIVE: EnumField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_ORDER_AMOUNT: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMER_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GIFT_CARD_BALANCE: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GIFT_CARD_EXPIRE_DATE: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOGISTIC_POSTAL_ADDRESS_VALID_TO: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RRECEIPT_ID: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      RetailTransactionType,
      true,
      true
    >;
    DISCOUNT_AMOUNT_WITHOUT_TAX: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_ORDER_TYPE: EnumField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      RetailTransactionOrderTypes,
      true,
      true
    >;
    NET_PRICE: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BATCH_ID: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUSPENDED_TRANSACTION_ID: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETAIL_TRANSACTION_AGGREGATION_FIELD_LIST: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANSACTION_TIME: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_PAYMENT_DIFFERENCE: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_MODE: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_ID_MASKED: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BEGIN_DATE_TIME: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOGISTICS_POSTAL_COUNTY: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOME_EXPENSE_AMOUNT: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_CALCULATION_TYPE: EnumField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      TaxCalculationType,
      true,
      true
    >;
    GROSS_AMOUNT: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUMBER_OF_ITEMS: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREATED_ON_POS_TERMINAL: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_MANUAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_STATUS: EnumField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      RetailEntryStatus,
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GIFT_CARD_HISTORY_DETAILS: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_ACTIVE_FROM: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NET_AMOUNT: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOGISTICS_POSTAL_STREET: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_NAME: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIFT: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STAFF: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANNEL_REFERENCE_ID: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_DATE: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    QUOTATION_EXPIRY_DATE: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GIFT_CARD_ISSUE_AMOUNT: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOYALTY_CARD_ID: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_ITEM_LINES: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREATED_OFFLINE: EnumField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_INVOICE_AMOUNT: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALE_IS_RETURN_SALE: EnumField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOGISTICS_POSTAL_CITY: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_AMOUNT: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALE_ON_ACCOUNT: EnumField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOGISTICS_POSTAL_STATE: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOGISTICS_LOCATION_ID: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_ACCOUNT: EnumField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COST_AMOUNT: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOGISTICS_POSTAL_ZIP_CODE: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_ID: OrderableEdmTypeField<
      RetailTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailGiftCardTransactions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_GIFT_CARD_TRANSACTIONS: OneToManyLink<
      RetailTransactions<DeSerializersT>,
      DeSerializersT,
      RetailGiftCardTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link giftCardTransactionV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GIFT_CARD_TRANSACTION_V_2: OneToManyLink<
      RetailTransactions<DeSerializersT>,
      DeSerializersT,
      GiftCardTransactionsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailTransactions<DeSerializers>>;
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
         * Static representation of the {@link transactionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'TransactionNumber',
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
         * Static representation of the {@link terminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL: fieldBuilder.buildEdmTypeField(
          'Terminal',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link amountPostedToAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_POSTED_TO_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'AmountPostedToAccount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link postAsShipment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_AS_SHIPMENT: fieldBuilder.buildEnumField(
          'PostAsShipment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link refundReceiptId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFUND_RECEIPT_ID: fieldBuilder.buildEdmTypeField(
          'RefundReceiptId',
          'Edm.String',
          true
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
         * Static representation of the {@link infocodeDiscountGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFOCODE_DISCOUNT_GROUP: fieldBuilder.buildEdmTypeField(
          'InfocodeDiscountGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemsPosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEMS_POSTED: fieldBuilder.buildEnumField('ItemsPosted', NoYes, true),
        /**
         * Static representation of the {@link siteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE_ID: fieldBuilder.buildEdmTypeField('SiteId', 'Edm.String', true),
        /**
         * Static representation of the {@link numberOfPaymentLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_PAYMENT_LINES: fieldBuilder.buildEdmTypeField(
          'NumberOfPaymentLines',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link totalManualDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_MANUAL_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'TotalManualDiscountPercentage',
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
         * Static representation of the {@link batchTerminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'BatchTerminalId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isTaxIncludedInPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TAX_INCLUDED_IN_PRICE: fieldBuilder.buildEnumField(
          'IsTaxIncludedInPrice',
          NoYes,
          true
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
         * Static representation of the {@link isTaxExemptedForPriceInclusive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TAX_EXEMPTED_FOR_PRICE_INCLUSIVE: fieldBuilder.buildEnumField(
          'IsTaxExemptedForPriceInclusive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesOrderAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SalesOrderAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link customerDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerDiscountAmount',
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
         * Static representation of the {@link giftCardExpireDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_EXPIRE_DATE: fieldBuilder.buildEdmTypeField(
          'GiftCardExpireDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link logisticPostalAddressValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGISTIC_POSTAL_ADDRESS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'LogisticPostalAddressValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link rreceiptId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RRECEIPT_ID: fieldBuilder.buildEdmTypeField(
          'RreceiptId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          RetailTransactionType,
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
         * Static representation of the {@link transactionOrderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ORDER_TYPE: fieldBuilder.buildEnumField(
          'TransactionOrderType',
          RetailTransactionOrderTypes,
          true
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
         * Static representation of the {@link batchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_ID: fieldBuilder.buildEdmTypeField('BatchID', 'Edm.Int64', false),
        /**
         * Static representation of the {@link suspendedTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUSPENDED_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'SuspendedTransactionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link retailTransactionAggregationFieldList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_TRANSACTION_AGGREGATION_FIELD_LIST:
          fieldBuilder.buildEdmTypeField(
            'RetailTransactionAggregationFieldList',
            'Edm.Int64',
            false
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
         * Static representation of the {@link salesPaymentDifference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PAYMENT_DIFFERENCE: fieldBuilder.buildEdmTypeField(
          'SalesPaymentDifference',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveryMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_MODE: fieldBuilder.buildEdmTypeField(
          'DeliveryMode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giftCardIdMasked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_ID_MASKED: fieldBuilder.buildEdmTypeField(
          'GiftCardIdMasked',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link beginDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEGIN_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'BeginDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link logisticsPostalCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGISTICS_POSTAL_COUNTY: fieldBuilder.buildEdmTypeField(
          'LogisticsPostalCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link incomeExpenseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOME_EXPENSE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'IncomeExpenseAmount',
          'Edm.Decimal',
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
         * Static representation of the {@link taxCalculationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CALCULATION_TYPE: fieldBuilder.buildEnumField(
          'TaxCalculationType',
          TaxCalculationType,
          true
        ),
        /**
         * Static representation of the {@link grossAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_AMOUNT: fieldBuilder.buildEdmTypeField(
          'GrossAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link numberOfItems} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_ITEMS: fieldBuilder.buildEdmTypeField(
          'NumberOfItems',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link createdOnPosTerminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON_POS_TERMINAL: fieldBuilder.buildEdmTypeField(
          'CreatedOnPosTerminal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalManualDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_MANUAL_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalManualDiscountAmount',
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
         * Static representation of the {@link transactionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_STATUS: fieldBuilder.buildEnumField(
          'TransactionStatus',
          RetailEntryStatus,
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
         * Static representation of the {@link giftCardHistoryDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_HISTORY_DETAILS: fieldBuilder.buildEdmTypeField(
          'GiftCardHistoryDetails',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giftCardActiveFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_ACTIVE_FROM: fieldBuilder.buildEdmTypeField(
          'GiftCardActiveFrom',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link logisticsPostalStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGISTICS_POSTAL_STREET: fieldBuilder.buildEdmTypeField(
          'LogisticsPostalStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_NAME: fieldBuilder.buildEdmTypeField(
          'CustomerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shift} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIFT: fieldBuilder.buildEdmTypeField('Shift', 'Edm.String', true),
        /**
         * Static representation of the {@link staff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAFF: fieldBuilder.buildEdmTypeField('Staff', 'Edm.String', true),
        /**
         * Static representation of the {@link invoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link channelReferenceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANNEL_REFERENCE_ID: fieldBuilder.buildEdmTypeField(
          'ChannelReferenceId',
          'Edm.String',
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
         * Static representation of the {@link quotationExpiryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUOTATION_EXPIRY_DATE: fieldBuilder.buildEdmTypeField(
          'QuotationExpiryDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link giftCardIssueAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_ISSUE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'GiftCardIssueAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link loyaltyCardId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_CARD_ID: fieldBuilder.buildEdmTypeField(
          'LoyaltyCardId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link comment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT: fieldBuilder.buildEdmTypeField('Comment', 'Edm.String', true),
        /**
         * Static representation of the {@link numberOfItemLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_ITEM_LINES: fieldBuilder.buildEdmTypeField(
          'NumberOfItemLines',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link createdOffline} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_OFFLINE: fieldBuilder.buildEnumField(
          'CreatedOffline',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesInvoiceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_INVOICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SalesInvoiceAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link saleIsReturnSale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALE_IS_RETURN_SALE: fieldBuilder.buildEnumField(
          'SaleIsReturnSale',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link logisticsPostalCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGISTICS_POSTAL_CITY: fieldBuilder.buildEdmTypeField(
          'LogisticsPostalCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PaymentAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link saleOnAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALE_ON_ACCOUNT: fieldBuilder.buildEnumField(
          'SaleOnAccount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link logisticsPostalState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGISTICS_POSTAL_STATE: fieldBuilder.buildEdmTypeField(
          'LogisticsPostalState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link logisticsLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGISTICS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LogisticsLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_ACCOUNT: fieldBuilder.buildEnumField('ToAccount', NoYes, true),
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
         * Static representation of the {@link logisticsPostalZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGISTICS_POSTAL_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'LogisticsPostalZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'SalesOrderId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTransactions)
      };
    }

    return this._schema;
  }
}
