/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailParameters } from './RetailParameters';
import { RetailParametersRequestBuilder } from './RetailParametersRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { NoYes } from './NoYes';
import { RetailCustomerOrderTaxCalculationBehavior } from './RetailCustomerOrderTaxCalculationBehavior';
import { RetailCustomerOrderType } from './RetailCustomerOrderType';
import { RetailTaxCalculationBehavior } from './RetailTaxCalculationBehavior';
import { RetailBookingLedgerAccountTypeBase } from './RetailBookingLedgerAccountTypeBase';
import { RetailNoneItemGroupDepartment } from './RetailNoneItemGroupDepartment';
import { RetailItemLabelSetupMissingAction } from './RetailItemLabelSetupMissingAction';
import { RetailReceiptOptionBase } from './RetailReceiptOptionBase';
import { RetailReplenishmentRespectAssortments } from './RetailReplenishmentRespectAssortments';
import { DetailSummary } from './DetailSummary';
import { RetailDefaultCustomerPostingBase } from './RetailDefaultCustomerPostingBase';
import { RetailIncludeSalesOrderDetailsPolicy } from './RetailIncludeSalesOrderDetailsPolicy';
import { RetailInventoryAvailabilityQuantityReturnType } from './RetailInventoryAvailabilityQuantityReturnType';
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
export class RetailParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailParameters<DeSerializersT>, DeSerializersT>
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
  ): RetailParametersApi<DeSerializersT> {
    return new RetailParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      RetailParameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RetailParameters;

  requestBuilder(): RetailParametersRequestBuilder<DeSerializersT> {
    return new RetailParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailParameters<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RetailParameters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RetailParameters, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USE_ADVANCED_AUTO_CHARGES: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_LABELS_FOR_NEGATIVE_STOCK: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYSTEM_IN_USE: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_BATCH_ID_ON_SALE_FOR_CASH_AND_CARRY_SALES: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CANCELLATION_CHARGE: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    USE_DEFAULT_BATCH_ID_ON_SALE_FOR_CUSTOMER_ORDER: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PASSWORD_EXPIRY_INTERVAL: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ASYNC_ORDERS_EDIT_HOLD_CODE: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_CUSTOMER_DISCOUNT: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_LABEL_LAST_ACTION: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREPAYMENT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_DEFAULT_TRADE_DATES: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POST_PERIODIC_DISCOUNT: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHARGE_OVERRIDE_REASON_CODE: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ORDER_TAX_CALCULATION_BEHAVIOR: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      RetailCustomerOrderTaxCalculationBehavior,
      true,
      true
    >;
    IGNORE_RETURN_LINK: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_ORDERTYPE: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      RetailCustomerOrderType,
      true,
      true
    >;
    DISCOUNT_OFFER_ACTIVITY_TYPE: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOGIN_COUNTER_RESET_DURATION: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_ON_GIFT_CARDS: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SMALL_BUSINESS_ACCOUNT_EXPORT_PROFILE_NAME: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HIDE_SYSTEM_INVENTORY_IN_STOCK_COUNT: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_GIFT_CARD_POLICIES: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_CALCULATION_BEHAVIOR: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      RetailTaxCalculationBehavior,
      true,
      true
    >;
    TOTAL_DISCOUNT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLENISHMENT_ASSORTMENTS_COVERAGE_DAYS: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_JOURNAL_NAME_4_CATEGORY_PRICE: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_ACCOUNT_TYPE: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      RetailBookingLedgerAccountTypeBase,
      true,
      true
    >;
    RECALCULATE_DIMENSIONS_ON_POSTING_ERROR: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENTORY_ENABLE_AUTOMATIC_VALIDATION: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_SALES_STATISTICS_ON: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      RetailNoneItemGroupDepartment,
      true,
      true
    >;
    LOCKOUT_THRESHOLD: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENABLE_DELAYED_PRICE_AND_DISCOUNT_CALCULATION: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AGGREGATE_SALES_AND_RETURNS: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_LABEL_SETUP_MISSING_ACTION: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      RetailItemLabelSetupMissingAction,
      true,
      true
    >;
    CANCELLATION_CHARGE_CODE: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALL_CENTER_GIFT_CARD_VOID_JOURNAL_NAME: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_SYSTEM_LOOKUP: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POST_INFOCODE_DISCOUNT: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_STATISTICS: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_LEDGER_JOURNAL_NAME: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UPDATE_SALES_STAFF_TO_CURRENT_USER_ON_EDIT: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ORGANIZATION_HIERARCHY_ENABLED_ON_SALES_AGREEMENT: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_NUMBER_OF_THREADS_CUSTOMER_ORDER: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AGGREGATE_CUSTOMER_PAYMENTS: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOURNAL_NAME_FOR_KIT_PRICING: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_LOCATION_ID_FOR_SALES_ORDER: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EVENT_NOTIFICATION_PROFILE_ID: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_DEFAULT_BATCH_ID_ON_SALE_FOR_CASH_AND_CARRY_SALES: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REQUIRE_UPPERCASE: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENTORY_LOCATION_ID_FOR_PURCHASE_ORDER: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGGREGATE_INCOME_EXPENSE_TRANSACTIONS: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MULTI_BUY_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MULTIBUY_ACTIVITY_TYPE: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_ANONYMOUS_USER_ORDER_SEARCH: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHOW_ONLY_CARRIER_OPTIONS_FOR_SHIP_ORDERS: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_CONCLUDE_CREDIT_MEMO_TRANSACTIONS_WHEN_OFFLINE: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOCKOUT_DURATION: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REQUIRE_NUMERIC_CHARACTER: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_THRESHOLD_JOIN_EXCLUSIVE_COMPETITION: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_SESSION_DATE_FOR_CALCULATING_PRICES_AND_DISCOUNTS: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECEIPT_OPTION: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      RetailReceiptOptionBase,
      true,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INVENTORY_PRODUCT_AVAILABILITY_SORTABLE_ATTRIBUTE: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CROSS_DOCKING_RESPECT_ASSORTMENTS: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      RetailReplenishmentRespectAssortments,
      true,
      true
    >;
    AGGREGATE_BEFORE_POSTING: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POST_SALES_ORDER_WHEN_PAID: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GIFT_CARD_CLOSING_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EAN_LICENSE_NO: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIX_AND_MATCH_ACTIVITY_TYPE: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DO_NOT_AGGREGATE_RETURNS: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TERMINAL_STATISTICS: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_CUSTOMER_PAYMENT_JOURNAL_NAME: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_RETURNS_FOR_MULTIPLE_ORDER_INVOICES: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POST_TOTAL_DISCOUNT: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_RTS_FOR_ONLINE_ORDER_CREATION: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PICK_UP_DELIVERY_MODE_CODE: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUIRE_SPECIAL_CHARACTER: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    APPLY_DISCOUNTS_TO_PRICE_KEYED_IN: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GIFT_CARD_LEDGER_JOURNAL_NAME: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIORITIZE_DIMENSIONS_FROM_PAYMENT_METHOD_FOR_STATEMENTS: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STMT_AUTO_SETTLE_CUSTOMER_DEPOSIT: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CLEANUP_EXPIRED_DISCOUNTS_REQUIRED_DAYS: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    POST_PERIODIC_DISCOUNT_FOR_ORDERS: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHELF_LABEL_LAST_ACTION: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFTCARD_ITEM: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ATTRIBUTE_GROUP_NAME: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_PRODUCT_OUT_OF_STOCK_ATTRIBUTE_VALUE: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    POST_LINE_DISCOUNT: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DETAIL_SUMMARY: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      DetailSummary,
      true,
      true
    >;
    SHIPPING_CHARGE_CODE: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARALLEL_SALES_ORDER_POSTING: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WISH_LIST_INVITATION_EMAIL_ID: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_PASSWORD_LENGTH: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ELECTRONIC_DELIVERY_MODE_CODE: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STAFF_STATISTICS: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISABLE_POST_ROUNDING_DIFFERENCE: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_CHANNEL_RETURN_POLICIES: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISCOUNT_ACCOUNT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PASSWORD_EXPIRY_NOTIFICATION_THRESHOLD: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    USE_RETAIL_RETURN_TAX_GROUP: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GIFT_CARD_INQUIRY_PRINT_HISTORY_COUNT: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MAX_SALES_ORDERS_PER_TASK: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RECEIPT_EMAIL_TEXT: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPLY_DISCOUNTS_TO_PRICE_OVERRIDES: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OFFER_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_NON_RETAIL_ORDERS_IN_ECOMMERCE_ORDER_HISTORY: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENTORY_LOCATION_ID_FOR_INVENTORY: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_EMAIL_SUBJECT: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_INVENTORY_JOURNAL_NAME: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_ADVANCE_INVOICE: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AGGREGATE_TENDER_REMOVE_AND_FLOAT: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    THRESHOLD_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_BANKED_SUM: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETURN_DISPOSITION_CODE_ID: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_FINANCIAL_DIMENSION_FROM_RETURN_STORE: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENTORY_PRODUCT_ATTRIBUTE: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    USE_DEFAULT_LEDGER_ACCOUNT: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POST_SAFE_SUM: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_ATTRIBUTE_GROUP: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DEFAULT_CUSTOMER_POSTING: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      RetailDefaultCustomerPostingBase,
      true,
      true
    >;
    MINIMUM_DEPOSIT_FOR_SALES_ORDER: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MIX_MATCH_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRE_PAYMENT_LEDGER_JOURNAL_NAME: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INHERIT_PRICE_INCLUDES_TAX_FROM_ORDER_ORIGIN_AT_PICKUP: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_VALIDATION_OF_SERIAL_NUMBERS_ON_POS_RETURNS: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTO_SETTLE: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_R_CASH_JOURNAL_NAME: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_EXCHANGE_ON_RETURN_ORDERS: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECEIPT_EMAIL_FILENAME: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCLUDE_SALES_ORDER_DETAILS_POLICY: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      RetailIncludeSalesOrderDetailsPolicy,
      true,
      true
    >;
    MAX_NUMBER_OF_STATEMENTS_POST_IN_PARALLEL: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COUPON_BARCODE_SETUP_ID: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLIENT_BOOK_ATTRIBUTE_GROUP: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DISABLE_B_2_B_PROSPECT_ADDRESS_ASSOC_WITH_CUSTOMER: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENTORY_AVAILABILITY_QUANTITY_RETURN_TYPE: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      RetailInventoryAvailabilityQuantityReturnType,
      true,
      true
    >;
    ALLOW_CONCLUDE_GIFT_CARD_TRANSACTIONS_WHEN_OFFLINE: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BUYERS_PUSH_RESPECT_ASSORTMENTS: EnumField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      RetailReplenishmentRespectAssortments,
      true,
      true
    >;
    AGGREGATED_TRANSACTIONS_BUNDLE_SIZE: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PAYMENT: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_BATCH_ID_ON_SALE_FOR_CUSTOMER_ORDER: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_MODE: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_COMPANY: OrderableEdmTypeField<
      RetailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      RetailParameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailParameters<DeSerializers>>;
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
         * Static representation of the {@link useAdvancedAutoCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_ADVANCED_AUTO_CHARGES: fieldBuilder.buildEnumField(
          'UseAdvancedAutoCharges',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link itemLabelsForNegativeStock} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_LABELS_FOR_NEGATIVE_STOCK: fieldBuilder.buildEnumField(
          'ItemLabelsForNegativeStock',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link systemInUse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_IN_USE: fieldBuilder.buildEnumField('SystemInUse', NoYes, true),
        /**
         * Static representation of the {@link defaultBatchIdOnSaleForCashAndCarrySales} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_BATCH_ID_ON_SALE_FOR_CASH_AND_CARRY_SALES:
          fieldBuilder.buildEdmTypeField(
            'DefaultBatchIdOnSaleForCashAndCarrySales',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link cancellationCharge} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELLATION_CHARGE: fieldBuilder.buildEdmTypeField(
          'CancellationCharge',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link useDefaultBatchIdOnSaleForCustomerOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_DEFAULT_BATCH_ID_ON_SALE_FOR_CUSTOMER_ORDER:
          fieldBuilder.buildEnumField(
            'UseDefaultBatchIdOnSaleForCustomerOrder',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link passwordExpiryInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASSWORD_EXPIRY_INTERVAL: fieldBuilder.buildEdmTypeField(
          'PasswordExpiryInterval',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link asyncOrdersEditHoldCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASYNC_ORDERS_EDIT_HOLD_CODE: fieldBuilder.buildEdmTypeField(
          'AsyncOrdersEditHoldCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postCustomerDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_CUSTOMER_DISCOUNT: fieldBuilder.buildEnumField(
          'PostCustomerDiscount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link itemLabelLastAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_LABEL_LAST_ACTION: fieldBuilder.buildEdmTypeField(
          'ItemLabelLastAction',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prepaymentLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPAYMENT_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'PrepaymentLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link useDefaultTradeDates} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_DEFAULT_TRADE_DATES: fieldBuilder.buildEnumField(
          'UseDefaultTradeDates',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postPeriodicDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_PERIODIC_DISCOUNT: fieldBuilder.buildEnumField(
          'PostPeriodicDiscount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link chargeOverrideReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_OVERRIDE_REASON_CODE: fieldBuilder.buildEdmTypeField(
          'ChargeOverrideReasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerOrderTaxCalculationBehavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ORDER_TAX_CALCULATION_BEHAVIOR: fieldBuilder.buildEnumField(
          'CustomerOrderTaxCalculationBehavior',
          RetailCustomerOrderTaxCalculationBehavior,
          true
        ),
        /**
         * Static representation of the {@link ignoreReturnLink} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IGNORE_RETURN_LINK: fieldBuilder.buildEnumField(
          'IgnoreReturnLink',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultOrdertype} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_ORDERTYPE: fieldBuilder.buildEnumField(
          'DefaultOrdertype',
          RetailCustomerOrderType,
          true
        ),
        /**
         * Static representation of the {@link discountOfferActivityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_OFFER_ACTIVITY_TYPE: fieldBuilder.buildEdmTypeField(
          'DiscountOfferActivityType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loginCounterResetDuration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGIN_COUNTER_RESET_DURATION: fieldBuilder.buildEdmTypeField(
          'LoginCounterResetDuration',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link taxOnGiftCards} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ON_GIFT_CARDS: fieldBuilder.buildEnumField(
          'TaxOnGiftCards',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link smallBusinessAccountExportProfileName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SMALL_BUSINESS_ACCOUNT_EXPORT_PROFILE_NAME:
          fieldBuilder.buildEdmTypeField(
            'SmallBusinessAccountExportProfileName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link hideSystemInventoryInStockCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIDE_SYSTEM_INVENTORY_IN_STOCK_COUNT: fieldBuilder.buildEnumField(
          'HideSystemInventoryInStockCount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useGiftCardPolicies} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_GIFT_CARD_POLICIES: fieldBuilder.buildEnumField(
          'UseGiftCardPolicies',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxCalculationBehavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CALCULATION_BEHAVIOR: fieldBuilder.buildEnumField(
          'TaxCalculationBehavior',
          RetailTaxCalculationBehavior,
          true
        ),
        /**
         * Static representation of the {@link totalDiscountLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'TotalDiscountLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link replenishmentAssortmentsCoverageDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLENISHMENT_ASSORTMENTS_COVERAGE_DAYS: fieldBuilder.buildEdmTypeField(
          'ReplenishmentAssortmentsCoverageDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link defaultJournalName4CategoryPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_JOURNAL_NAME_4_CATEGORY_PRICE: fieldBuilder.buildEdmTypeField(
          'DefaultJournalName4CategoryPrice',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'LedgerAccountType',
          RetailBookingLedgerAccountTypeBase,
          true
        ),
        /**
         * Static representation of the {@link recalculateDimensionsOnPostingError} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECALCULATE_DIMENSIONS_ON_POSTING_ERROR: fieldBuilder.buildEnumField(
          'RecalculateDimensionsOnPostingError',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventoryEnableAutomaticValidation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_ENABLE_AUTOMATIC_VALIDATION: fieldBuilder.buildEnumField(
          'InventoryEnableAutomaticValidation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link itemSalesStatisticsOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SALES_STATISTICS_ON: fieldBuilder.buildEnumField(
          'ItemSalesStatisticsOn',
          RetailNoneItemGroupDepartment,
          true
        ),
        /**
         * Static representation of the {@link lockoutThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCKOUT_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'LockoutThreshold',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link enableDelayedPriceAndDiscountCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_DELAYED_PRICE_AND_DISCOUNT_CALCULATION:
          fieldBuilder.buildEnumField(
            'EnableDelayedPriceAndDiscountCalculation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link aggregateSalesAndReturns} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGGREGATE_SALES_AND_RETURNS: fieldBuilder.buildEnumField(
          'AggregateSalesAndReturns',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link itemLabelSetupMissingAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_LABEL_SETUP_MISSING_ACTION: fieldBuilder.buildEnumField(
          'ItemLabelSetupMissingAction',
          RetailItemLabelSetupMissingAction,
          true
        ),
        /**
         * Static representation of the {@link cancellationChargeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELLATION_CHARGE_CODE: fieldBuilder.buildEdmTypeField(
          'CancellationChargeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link callCenterGiftCardVoidJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALL_CENTER_GIFT_CARD_VOID_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'CallCenterGiftCardVoidJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overrideSystemLookup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_SYSTEM_LOOKUP: fieldBuilder.buildEnumField(
          'OverrideSystemLookup',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postInfocodeDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_INFOCODE_DISCOUNT: fieldBuilder.buildEnumField(
          'PostInfocodeDiscount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link paymentStatistics} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_STATISTICS: fieldBuilder.buildEnumField(
          'PaymentStatistics',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultLedgerJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_LEDGER_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'DefaultLedgerJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link updateSalesStaffToCurrentUserOnEdit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_SALES_STAFF_TO_CURRENT_USER_ON_EDIT: fieldBuilder.buildEnumField(
          'UpdateSalesStaffToCurrentUserOnEdit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isOrganizationHierarchyEnabledOnSalesAgreement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ORGANIZATION_HIERARCHY_ENABLED_ON_SALES_AGREEMENT:
          fieldBuilder.buildEnumField(
            'IsOrganizationHierarchyEnabledOnSalesAgreement',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link maxNumberOfThreadsCustomerOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_NUMBER_OF_THREADS_CUSTOMER_ORDER: fieldBuilder.buildEdmTypeField(
          'MaxNumberOfThreadsCustomerOrder',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link aggregateCustomerPayments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGGREGATE_CUSTOMER_PAYMENTS: fieldBuilder.buildEnumField(
          'AggregateCustomerPayments',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link journalNameForKitPricing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NAME_FOR_KIT_PRICING: fieldBuilder.buildEdmTypeField(
          'JournalNameForKitPricing',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryLocationIdForSalesOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_LOCATION_ID_FOR_SALES_ORDER: fieldBuilder.buildEdmTypeField(
          'InventoryLocationIdForSalesOrder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eventNotificationProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT_NOTIFICATION_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'EventNotificationProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useDefaultBatchIdOnSaleForCashAndCarrySales} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_DEFAULT_BATCH_ID_ON_SALE_FOR_CASH_AND_CARRY_SALES:
          fieldBuilder.buildEnumField(
            'UseDefaultBatchIdOnSaleForCashAndCarrySales',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link requireUppercase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRE_UPPERCASE: fieldBuilder.buildEnumField(
          'RequireUppercase',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventoryLocationIdForPurchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_LOCATION_ID_FOR_PURCHASE_ORDER:
          fieldBuilder.buildEdmTypeField(
            'InventoryLocationIdForPurchaseOrder',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link aggregateIncomeExpenseTransactions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGGREGATE_INCOME_EXPENSE_TRANSACTIONS: fieldBuilder.buildEnumField(
          'AggregateIncomeExpenseTransactions',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link multiBuyLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTI_BUY_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'MultiBuyLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link multibuyActivityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTIBUY_ACTIVITY_TYPE: fieldBuilder.buildEdmTypeField(
          'MultibuyActivityType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enableAnonymousUserOrderSearch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_ANONYMOUS_USER_ORDER_SEARCH: fieldBuilder.buildEnumField(
          'EnableAnonymousUserOrderSearch',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link showOnlyCarrierOptionsForShipOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_ONLY_CARRIER_OPTIONS_FOR_SHIP_ORDERS: fieldBuilder.buildEnumField(
          'ShowOnlyCarrierOptionsForShipOrders',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowConcludeCreditMemoTransactionsWhenOffline} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CONCLUDE_CREDIT_MEMO_TRANSACTIONS_WHEN_OFFLINE:
          fieldBuilder.buildEnumField(
            'AllowConcludeCreditMemoTransactionsWhenOffline',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link lockoutDuration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCKOUT_DURATION: fieldBuilder.buildEdmTypeField(
          'LockoutDuration',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link requireNumericCharacter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRE_NUMERIC_CHARACTER: fieldBuilder.buildEnumField(
          'RequireNumericCharacter',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowThresholdJoinExclusiveCompetition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_THRESHOLD_JOIN_EXCLUSIVE_COMPETITION: fieldBuilder.buildEnumField(
          'AllowThresholdJoinExclusiveCompetition',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useSessionDateForCalculatingPricesAndDiscounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_SESSION_DATE_FOR_CALCULATING_PRICES_AND_DISCOUNTS:
          fieldBuilder.buildEnumField(
            'UseSessionDateForCalculatingPricesAndDiscounts',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link receiptOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_OPTION: fieldBuilder.buildEnumField(
          'ReceiptOption',
          RetailReceiptOptionBase,
          true
        ),
        /**
         * Static representation of the {@link expirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationDate',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link inventoryProductAvailabilitySortableAttribute} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_PRODUCT_AVAILABILITY_SORTABLE_ATTRIBUTE:
          fieldBuilder.buildEdmTypeField(
            'InventoryProductAvailabilitySortableAttribute',
            'Edm.Int64',
            false
          ),
        /**
         * Static representation of the {@link crossDockingRespectAssortments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CROSS_DOCKING_RESPECT_ASSORTMENTS: fieldBuilder.buildEnumField(
          'CrossDockingRespectAssortments',
          RetailReplenishmentRespectAssortments,
          true
        ),
        /**
         * Static representation of the {@link aggregateBeforePosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGGREGATE_BEFORE_POSTING: fieldBuilder.buildEnumField(
          'AggregateBeforePosting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postSalesOrderWhenPaid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_SALES_ORDER_WHEN_PAID: fieldBuilder.buildEnumField(
          'PostSalesOrderWhenPaid',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link giftCardClosingLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_CLOSING_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'GiftCardClosingLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link eanLicenseNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EAN_LICENSE_NO: fieldBuilder.buildEdmTypeField(
          'EANLicenseNo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mixAndMatchActivityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIX_AND_MATCH_ACTIVITY_TYPE: fieldBuilder.buildEdmTypeField(
          'MixAndMatchActivityType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link doNotAggregateReturns} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DO_NOT_AGGREGATE_RETURNS: fieldBuilder.buildEnumField(
          'DoNotAggregateReturns',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link terminalStatistics} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL_STATISTICS: fieldBuilder.buildEnumField(
          'TerminalStatistics',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultCustomerPaymentJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CUSTOMER_PAYMENT_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'DefaultCustomerPaymentJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enableReturnsForMultipleOrderInvoices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_RETURNS_FOR_MULTIPLE_ORDER_INVOICES: fieldBuilder.buildEnumField(
          'EnableReturnsForMultipleOrderInvoices',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postTotalDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_TOTAL_DISCOUNT: fieldBuilder.buildEnumField(
          'PostTotalDiscount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useRtsForOnlineOrderCreation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_RTS_FOR_ONLINE_ORDER_CREATION: fieldBuilder.buildEnumField(
          'UseRTSForOnlineOrderCreation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link pickUpDeliveryModeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICK_UP_DELIVERY_MODE_CODE: fieldBuilder.buildEdmTypeField(
          'PickUpDeliveryModeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requireSpecialCharacter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRE_SPECIAL_CHARACTER: fieldBuilder.buildEnumField(
          'RequireSpecialCharacter',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link applyDiscountsToPriceKeyedIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_DISCOUNTS_TO_PRICE_KEYED_IN: fieldBuilder.buildEnumField(
          'ApplyDiscountsToPriceKeyedIn',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link giftCardLedgerJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_LEDGER_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'GiftCardLedgerJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prioritizeDimensionsFromPaymentMethodForStatements} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITIZE_DIMENSIONS_FROM_PAYMENT_METHOD_FOR_STATEMENTS:
          fieldBuilder.buildEnumField(
            'PrioritizeDimensionsFromPaymentMethodForStatements',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link stmtAutoSettleCustomerDeposit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STMT_AUTO_SETTLE_CUSTOMER_DEPOSIT: fieldBuilder.buildEnumField(
          'StmtAutoSettleCustomerDeposit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cleanupExpiredDiscountsRequiredDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLEANUP_EXPIRED_DISCOUNTS_REQUIRED_DAYS: fieldBuilder.buildEdmTypeField(
          'CleanupExpiredDiscountsRequiredDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link postPeriodicDiscountForOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_PERIODIC_DISCOUNT_FOR_ORDERS: fieldBuilder.buildEnumField(
          'PostPeriodicDiscountForOrders',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shelfLabelLastAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHELF_LABEL_LAST_ACTION: fieldBuilder.buildEdmTypeField(
          'ShelfLabelLastAction',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giftcardItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFTCARD_ITEM: fieldBuilder.buildEdmTypeField(
          'GiftcardItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerAttributeGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ATTRIBUTE_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'CustomerAttributeGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryProductOutOfStockAttributeValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_PRODUCT_OUT_OF_STOCK_ATTRIBUTE_VALUE:
          fieldBuilder.buildEdmTypeField(
            'InventoryProductOutOfStockAttributeValue',
            'Edm.Int64',
            false
          ),
        /**
         * Static representation of the {@link postLineDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_LINE_DISCOUNT: fieldBuilder.buildEnumField(
          'PostLineDiscount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link detailSummary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DETAIL_SUMMARY: fieldBuilder.buildEnumField(
          'DetailSummary',
          DetailSummary,
          true
        ),
        /**
         * Static representation of the {@link shippingChargeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CHARGE_CODE: fieldBuilder.buildEdmTypeField(
          'ShippingChargeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parallelSalesOrderPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARALLEL_SALES_ORDER_POSTING: fieldBuilder.buildEnumField(
          'ParallelSalesOrderPosting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link wishListInvitationEmailId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WISH_LIST_INVITATION_EMAIL_ID: fieldBuilder.buildEdmTypeField(
          'WishListInvitationEmailId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minimumPasswordLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_PASSWORD_LENGTH: fieldBuilder.buildEdmTypeField(
          'MinimumPasswordLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link electronicDeliveryModeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_DELIVERY_MODE_CODE: fieldBuilder.buildEdmTypeField(
          'ElectronicDeliveryModeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link staffStatistics} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAFF_STATISTICS: fieldBuilder.buildEnumField(
          'StaffStatistics',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link disablePostRoundingDifference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISABLE_POST_ROUNDING_DIFFERENCE: fieldBuilder.buildEnumField(
          'DisablePostRoundingDifference',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enableChannelReturnPolicies} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_CHANNEL_RETURN_POLICIES: fieldBuilder.buildEnumField(
          'EnableChannelReturnPolicies',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link discountAccountLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_ACCOUNT_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'DiscountAccountLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link passwordExpiryNotificationThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASSWORD_EXPIRY_NOTIFICATION_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'PasswordExpiryNotificationThreshold',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link useRetailReturnTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_RETAIL_RETURN_TAX_GROUP: fieldBuilder.buildEnumField(
          'UseRetailReturnTaxGroup',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link giftCardInquiryPrintHistoryCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_INQUIRY_PRINT_HISTORY_COUNT: fieldBuilder.buildEdmTypeField(
          'GiftCardInquiryPrintHistoryCount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link maxSalesOrdersPerTask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_SALES_ORDERS_PER_TASK: fieldBuilder.buildEdmTypeField(
          'MaxSalesOrdersPerTask',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link receiptEmailText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_EMAIL_TEXT: fieldBuilder.buildEdmTypeField(
          'ReceiptEmailText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link applyDiscountsToPriceOverrides} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_DISCOUNTS_TO_PRICE_OVERRIDES: fieldBuilder.buildEnumField(
          'ApplyDiscountsToPriceOverrides',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link offerLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFER_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OfferLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link displayNonRetailOrdersInEcommerceOrderHistory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_NON_RETAIL_ORDERS_IN_ECOMMERCE_ORDER_HISTORY:
          fieldBuilder.buildEnumField(
            'DisplayNonRetailOrdersInEcommerceOrderHistory',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link inventoryLocationIdForInventory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_LOCATION_ID_FOR_INVENTORY: fieldBuilder.buildEdmTypeField(
          'InventoryLocationIdForInventory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiptEmailSubject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_EMAIL_SUBJECT: fieldBuilder.buildEdmTypeField(
          'ReceiptEmailSubject',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultInventoryJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_INVENTORY_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'DefaultInventoryJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useAdvanceInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_ADVANCE_INVOICE: fieldBuilder.buildEnumField(
          'UseAdvanceInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link aggregateTenderRemoveAndFloat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGGREGATE_TENDER_REMOVE_AND_FLOAT: fieldBuilder.buildEnumField(
          'AggregateTenderRemoveAndFloat',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link thresholdLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THRESHOLD_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'ThresholdLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link postBankedSum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_BANKED_SUM: fieldBuilder.buildEnumField(
          'PostBankedSum',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link returnDispositionCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_DISPOSITION_CODE_ID: fieldBuilder.buildEdmTypeField(
          'ReturnDispositionCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useFinancialDimensionFromReturnStore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_FINANCIAL_DIMENSION_FROM_RETURN_STORE: fieldBuilder.buildEnumField(
          'UseFinancialDimensionFromReturnStore',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventoryProductAttribute} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_PRODUCT_ATTRIBUTE: fieldBuilder.buildEdmTypeField(
          'InventoryProductAttribute',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link useDefaultLedgerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_DEFAULT_LEDGER_ACCOUNT: fieldBuilder.buildEnumField(
          'UseDefaultLedgerAccount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postSafeSum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_SAFE_SUM: fieldBuilder.buildEnumField('PostSafeSum', NoYes, true),
        /**
         * Static representation of the {@link customerAttributeGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ATTRIBUTE_GROUP: fieldBuilder.buildEdmTypeField(
          'CustomerAttributeGroup',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link defaultCustomerPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CUSTOMER_POSTING: fieldBuilder.buildEnumField(
          'DefaultCustomerPosting',
          RetailDefaultCustomerPostingBase,
          true
        ),
        /**
         * Static representation of the {@link minimumDepositForSalesOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_DEPOSIT_FOR_SALES_ORDER: fieldBuilder.buildEdmTypeField(
          'MinimumDepositForSalesOrder',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link mixMatchLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIX_MATCH_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'MixMatchLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link prePaymentLedgerJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRE_PAYMENT_LEDGER_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'PrePaymentLedgerJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inheritPriceIncludesTaxFromOrderOriginAtPickup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INHERIT_PRICE_INCLUDES_TAX_FROM_ORDER_ORIGIN_AT_PICKUP:
          fieldBuilder.buildEnumField(
            'InheritPriceIncludesTaxFromOrderOriginAtPickup',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link enableValidationOfSerialNumbersOnPosReturns} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_VALIDATION_OF_SERIAL_NUMBERS_ON_POS_RETURNS:
          fieldBuilder.buildEnumField(
            'EnableValidationOfSerialNumbersOnPosReturns',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link autoSettle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_SETTLE: fieldBuilder.buildEnumField('AutoSettle', NoYes, true),
        /**
         * Static representation of the {@link defaultRCashJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_R_CASH_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'DefaultRCashJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowExchangeOnReturnOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_EXCHANGE_ON_RETURN_ORDERS: fieldBuilder.buildEnumField(
          'AllowExchangeOnReturnOrders',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link receiptEmailFilename} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_EMAIL_FILENAME: fieldBuilder.buildEdmTypeField(
          'ReceiptEmailFilename',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link includeSalesOrderDetailsPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_SALES_ORDER_DETAILS_POLICY: fieldBuilder.buildEnumField(
          'IncludeSalesOrderDetailsPolicy',
          RetailIncludeSalesOrderDetailsPolicy,
          true
        ),
        /**
         * Static representation of the {@link maxNumberOfStatementsPostInParallel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_NUMBER_OF_STATEMENTS_POST_IN_PARALLEL:
          fieldBuilder.buildEdmTypeField(
            'MaxNumberOfStatementsPostInParallel',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link couponBarcodeSetupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUPON_BARCODE_SETUP_ID: fieldBuilder.buildEdmTypeField(
          'CouponBarcodeSetupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link clientBookAttributeGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLIENT_BOOK_ATTRIBUTE_GROUP: fieldBuilder.buildEdmTypeField(
          'ClientBookAttributeGroup',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link disableB2BProspectAddressAssocWithCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISABLE_B_2_B_PROSPECT_ADDRESS_ASSOC_WITH_CUSTOMER:
          fieldBuilder.buildEnumField(
            'DisableB2BProspectAddressAssocWithCustomer',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link inventoryAvailabilityQuantityReturnType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_AVAILABILITY_QUANTITY_RETURN_TYPE:
          fieldBuilder.buildEnumField(
            'InventoryAvailabilityQuantityReturnType',
            RetailInventoryAvailabilityQuantityReturnType,
            true
          ),
        /**
         * Static representation of the {@link allowConcludeGiftCardTransactionsWhenOffline} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CONCLUDE_GIFT_CARD_TRANSACTIONS_WHEN_OFFLINE:
          fieldBuilder.buildEnumField(
            'AllowConcludeGiftCardTransactionsWhenOffline',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link buyersPushRespectAssortments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUYERS_PUSH_RESPECT_ASSORTMENTS: fieldBuilder.buildEnumField(
          'BuyersPushRespectAssortments',
          RetailReplenishmentRespectAssortments,
          true
        ),
        /**
         * Static representation of the {@link aggregatedTransactionsBundleSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGGREGATED_TRANSACTIONS_BUNDLE_SIZE: fieldBuilder.buildEdmTypeField(
          'AggregatedTransactionsBundleSize',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link payment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT: fieldBuilder.buildEdmTypeField('Payment', 'Edm.String', true),
        /**
         * Static representation of the {@link defaultBatchIdOnSaleForCustomerOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_BATCH_ID_ON_SALE_FOR_CUSTOMER_ORDER:
          fieldBuilder.buildEdmTypeField(
            'DefaultBatchIdOnSaleForCustomerOrder',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link paymentMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_MODE: fieldBuilder.buildEdmTypeField(
          'PaymentMode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giftCardCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_COMPANY: fieldBuilder.buildEdmTypeField(
          'GiftCardCompany',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailParameters)
      };
    }

    return this._schema;
  }
}
