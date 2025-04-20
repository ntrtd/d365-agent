/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactionsAuditable } from './RetailTransactionsAuditable';
import { RetailTransactionsAuditableRequestBuilder } from './RetailTransactionsAuditableRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { RetailTransactionAuditableTaxLinesApi } from './RetailTransactionAuditableTaxLinesApi';
import { RetailTransactionAuditableChargeLinesApi } from './RetailTransactionAuditableChargeLinesApi';
import { RetailTransactionAuditableAddressLinesApi } from './RetailTransactionAuditableAddressLinesApi';
import { RetailTransactionAuditableSalesLinesApi } from './RetailTransactionAuditableSalesLinesApi';
import { RetailTransactionAuditableDiscountLinesApi } from './RetailTransactionAuditableDiscountLinesApi';
import { RetailTransactionAuditablePaymentLinesApi } from './RetailTransactionAuditablePaymentLinesApi';
import { NoYes } from './NoYes';
import { RetailTransactionOrderTypes } from './RetailTransactionOrderTypes';
import { RetailTransactionOrderStatusType } from './RetailTransactionOrderStatusType';
import { RetailTransactionType } from './RetailTransactionType';
import { RetailEntryStatus } from './RetailEntryStatus';
import { TaxCalculationType } from './TaxCalculationType';
import { RetailTransactionValidationStatus } from './RetailTransactionValidationStatus';
import { RetailTransactionCode } from './RetailTransactionCode';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailTransactionsAuditableApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailTransactionsAuditable<DeSerializersT>, DeSerializersT>
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
  ): RetailTransactionsAuditableApi<DeSerializersT> {
    return new RetailTransactionsAuditableApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      RetailTransactionsAuditable<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTransactionAuditableTaxLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_TAX_LINE: OneToManyLink<
      RetailTransactionsAuditable<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditableTaxLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTransactionAuditableChargeLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_CHARGE_LINE: OneToManyLink<
      RetailTransactionsAuditable<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditableChargeLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTransactionAuditableAddressLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_ADDRESS_LINE: OneToManyLink<
      RetailTransactionsAuditable<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditableAddressLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTransactionAuditableSalesLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_SALES_LINE: OneToManyLink<
      RetailTransactionsAuditable<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditableSalesLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTransactionAuditableDiscountLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_DISCOUNT_LINE: OneToManyLink<
      RetailTransactionsAuditable<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditableDiscountLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTransactionAuditablePaymentLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_PAYMENT_LINE: OneToManyLink<
      RetailTransactionsAuditable<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditablePaymentLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionSetsApi<DeSerializersT>,
      RetailTransactionAuditableTaxLinesApi<DeSerializersT>,
      RetailTransactionAuditableChargeLinesApi<DeSerializersT>,
      RetailTransactionAuditableAddressLinesApi<DeSerializersT>,
      RetailTransactionAuditableSalesLinesApi<DeSerializersT>,
      RetailTransactionAuditableDiscountLinesApi<DeSerializersT>,
      RetailTransactionAuditablePaymentLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[0]),
      RETAIL_TRANSACTION_AUDITABLE_TAX_LINE: new OneToManyLink(
        'RetailTransactionAuditableTaxLine',
        this,
        linkedApis[1]
      ),
      RETAIL_TRANSACTION_AUDITABLE_CHARGE_LINE: new OneToManyLink(
        'RetailTransactionAuditableChargeLine',
        this,
        linkedApis[2]
      ),
      RETAIL_TRANSACTION_AUDITABLE_ADDRESS_LINE: new OneToManyLink(
        'RetailTransactionAuditableAddressLine',
        this,
        linkedApis[3]
      ),
      RETAIL_TRANSACTION_AUDITABLE_SALES_LINE: new OneToManyLink(
        'RetailTransactionAuditableSalesLine',
        this,
        linkedApis[4]
      ),
      RETAIL_TRANSACTION_AUDITABLE_DISCOUNT_LINE: new OneToManyLink(
        'RetailTransactionAuditableDiscountLine',
        this,
        linkedApis[5]
      ),
      RETAIL_TRANSACTION_AUDITABLE_PAYMENT_LINE: new OneToManyLink(
        'RetailTransactionAuditablePaymentLine',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = RetailTransactionsAuditable;

  requestBuilder(): RetailTransactionsAuditableRequestBuilder<DeSerializersT> {
    return new RetailTransactionsAuditableRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactionsAuditable<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransactionsAuditable<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactionsAuditable<DeSerializersT>,
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
    typeof RetailTransactionsAuditable,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactionsAuditable,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE_NUMBER: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGISTER_NUMBER: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TIME_WHEN_TRANSACTION_CLOSED: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_TAX_EXEMPTED_FOR_PRICE_INCLUSIVE: EnumField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OPERATING_UNIT_REC_ID: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    OPERATOR_ID: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODE_OF_DELIVERY: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NET_PRICE: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LAST_VALIDATION_TIME: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TOTAL_MANUAL_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_ORDER_TYPE: EnumField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      RetailTransactionOrderTypes,
      true,
      true
    >;
    BUSINESS_DATE: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ASYNCHRONOUS_ORDER_STATUS: EnumField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      RetailTransactionOrderStatusType,
      true,
      true
    >;
    CHANNEL_REFERENCE_ID: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REQUESTED_RECEIPT_DATE: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAYMENT_AMOUNT: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_ORDER: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_PAYMENT_LINES: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_ACTIVE_FROM: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      RetailTransactionType,
      true,
      true
    >;
    REQUESTED_SHIP_DATE: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ENTRY_STATUS: EnumField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      RetailEntryStatus,
      true,
      true
    >;
    CREATED_AT_REGISTER: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_BALANCE: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_TAX_INCLUDED_IN_PRICE: EnumField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FISCAL_DOCUMENT_ID: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_COMMENT: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_CALCULATION_TYPE: EnumField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      TaxCalculationType,
      true,
      true
    >;
    DISCOUNT_AMOUNT_EXCLUDING_TAX: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GIFT_CARD_ID_MASKED: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDATION_STATUS: EnumField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      RetailTransactionValidationStatus,
      true,
      true
    >;
    LOYALTY_CARD_NUMBER: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_SERIAL_ID: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_CODE: EnumField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      RetailTransactionCode,
      true,
      true
    >;
    SITE: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_EXPIRE_DATE: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NET_AMOUNT: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUMBER_OF_PRODUCTS: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SKIP_AGGREGATION: EnumField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUST_PURCHASE_ORDER: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ACCOUNT_ASYNC: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PAYMENT_DIFFERENCE: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUSPENDED_TRANSACTION_ID: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_INVOICE_AMOUNT: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUMBER_OF_PRODUCT_LINES: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_GROUP: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_DISCOUNT: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALE_ON_ACCOUNT: EnumField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIFT_REGISTER_ID: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOME_EXPENSE_AMOUNT: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATEMENT_NUMBER: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANNEL: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    GROSS_AMOUNT: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIPT_EMAIL: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_TIME: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CREATED_OFFLINE: EnumField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATEMENT_CODE: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_ISSUE_AMOUNT: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIFT_ID: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALE_IS_RETURN_SALE: EnumField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECEIPT_NUMBER: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINANCIAL_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_HISTORY_DETAILS: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_MANUAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUOTATION_EXPIRY_DATE: OrderableEdmTypeField<
      RetailTransactionsAuditable<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      RetailTransactionsAuditable<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTransactionAuditableTaxLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_TAX_LINE: OneToManyLink<
      RetailTransactionsAuditable<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditableTaxLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTransactionAuditableChargeLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_CHARGE_LINE: OneToManyLink<
      RetailTransactionsAuditable<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditableChargeLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTransactionAuditableAddressLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_ADDRESS_LINE: OneToManyLink<
      RetailTransactionsAuditable<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditableAddressLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTransactionAuditableSalesLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_SALES_LINE: OneToManyLink<
      RetailTransactionsAuditable<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditableSalesLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTransactionAuditableDiscountLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_DISCOUNT_LINE: OneToManyLink<
      RetailTransactionsAuditable<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditableDiscountLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTransactionAuditablePaymentLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_PAYMENT_LINE: OneToManyLink<
      RetailTransactionsAuditable<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditablePaymentLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailTransactionsAuditable<DeSerializers>>;
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
         * Static representation of the {@link timeWhenTransactionClosed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_WHEN_TRANSACTION_CLOSED: fieldBuilder.buildEdmTypeField(
          'TimeWhenTransactionClosed',
          'Edm.Int32',
          false
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
         * Static representation of the {@link operatingUnitRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_REC_ID: fieldBuilder.buildEdmTypeField(
          'OperatingUnitRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link operatorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATOR_ID: fieldBuilder.buildEdmTypeField(
          'OperatorID',
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
         * Static representation of the {@link discountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DiscountAmount',
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
         * Static representation of the {@link lastValidationTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_VALIDATION_TIME: fieldBuilder.buildEdmTypeField(
          'LastValidationTime',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link customerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerAccount',
          'Edm.String',
          true
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
         * Static representation of the {@link businessDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_DATE: fieldBuilder.buildEdmTypeField(
          'BusinessDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link asynchronousOrderStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASYNCHRONOUS_ORDER_STATUS: fieldBuilder.buildEnumField(
          'AsynchronousOrderStatus',
          RetailTransactionOrderStatusType,
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
         * Static representation of the {@link transactionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DATE: fieldBuilder.buildEdmTypeField(
          'TransactionDate',
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
         * Static representation of the {@link paymentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PaymentAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER: fieldBuilder.buildEdmTypeField(
          'SalesOrder',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link comment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT: fieldBuilder.buildEdmTypeField('Comment', 'Edm.String', true),
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
         * Static representation of the {@link giftCardActiveFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_ACTIVE_FROM: fieldBuilder.buildEdmTypeField(
          'GiftCardActiveFrom',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link requestedShipDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_SHIP_DATE: fieldBuilder.buildEdmTypeField(
          'RequestedShipDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link entryStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_STATUS: fieldBuilder.buildEnumField(
          'EntryStatus',
          RetailEntryStatus,
          true
        ),
        /**
         * Static representation of the {@link createdAtRegister} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_AT_REGISTER: fieldBuilder.buildEdmTypeField(
          'CreatedAtRegister',
          'Edm.String',
          true
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
         * Static representation of the {@link isTaxIncludedInPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TAX_INCLUDED_IN_PRICE: fieldBuilder.buildEnumField(
          'IsTaxIncludedInPrice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fiscalDocumentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_ID: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_COMMENT: fieldBuilder.buildEdmTypeField(
          'InvoiceComment',
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
         * Static representation of the {@link discountAmountExcludingTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_AMOUNT_EXCLUDING_TAX: fieldBuilder.buildEdmTypeField(
          'DiscountAmountExcludingTax',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link validationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATION_STATUS: fieldBuilder.buildEnumField(
          'ValidationStatus',
          RetailTransactionValidationStatus,
          true
        ),
        /**
         * Static representation of the {@link loyaltyCardNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_CARD_NUMBER: fieldBuilder.buildEdmTypeField(
          'LoyaltyCardNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalSerialId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_SERIAL_ID: fieldBuilder.buildEdmTypeField(
          'FiscalSerialId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_CODE: fieldBuilder.buildEnumField(
          'TransCode',
          RetailTransactionCode,
          true
        ),
        /**
         * Static representation of the {@link site} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE: fieldBuilder.buildEdmTypeField('Site', 'Edm.String', true),
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
         * Static representation of the {@link netAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NetAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link numberOfProducts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_PRODUCTS: fieldBuilder.buildEdmTypeField(
          'NumberOfProducts',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link skipAggregation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_AGGREGATION: fieldBuilder.buildEnumField(
          'SkipAggregation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link custPurchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_PURCHASE_ORDER: fieldBuilder.buildEdmTypeField(
          'CustPurchaseOrder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerAccountAsync} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_ASYNC: fieldBuilder.buildEdmTypeField(
          'CustomerAccountAsync',
          'Edm.String',
          true
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
         * Static representation of the {@link suspendedTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUSPENDED_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'SuspendedTransactionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE: fieldBuilder.buildEdmTypeField('Invoice', 'Edm.String', true),
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
         * Static representation of the {@link salesInvoiceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_INVOICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SalesInvoiceAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link numberOfProductLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_PRODUCT_LINES: fieldBuilder.buildEdmTypeField(
          'NumberOfProductLines',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link customerDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerDiscount',
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
         * Static representation of the {@link shiftRegisterId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIFT_REGISTER_ID: fieldBuilder.buildEdmTypeField(
          'ShiftRegisterID',
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
         * Static representation of the {@link statementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'StatementNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link channel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANNEL: fieldBuilder.buildEdmTypeField('Channel', 'Edm.Int64', false),
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
         * Static representation of the {@link receiptEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_EMAIL: fieldBuilder.buildEdmTypeField(
          'ReceiptEmail',
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
         * Static representation of the {@link createdOffline} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_OFFLINE: fieldBuilder.buildEnumField(
          'CreatedOffline',
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
         * Static representation of the {@link giftCardIssueAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_ISSUE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'GiftCardIssueAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shiftId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIFT_ID: fieldBuilder.buildEdmTypeField('ShiftID', 'Edm.Int64', false),
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
         * Static representation of the {@link saleIsReturnSale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALE_IS_RETURN_SALE: fieldBuilder.buildEnumField(
          'SaleIsReturnSale',
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
         * Static representation of the {@link financialDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCIAL_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'FinancialDimensionDisplayValue',
          'Edm.String',
          true
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
         * Static representation of the {@link totalManualDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_MANUAL_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalManualDiscountAmount',
          'Edm.Decimal',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTransactionsAuditable)
      };
    }

    return this._schema;
  }
}
