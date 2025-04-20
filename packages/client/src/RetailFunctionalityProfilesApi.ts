/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailFunctionalityProfiles } from './RetailFunctionalityProfiles';
import { RetailFunctionalityProfilesRequestBuilder } from './RetailFunctionalityProfilesRequestBuilder';
import { RetailStoresApi } from './RetailStoresApi';
import { NoYes } from './NoYes';
import { RetailRequirePaymentForFulfillment } from './RetailRequirePaymentForFulfillment';
import { RetailEmployeeLogonType } from './RetailEmployeeLogonType';
import { RetailCustomerHistoryType } from './RetailCustomerHistoryType';
import { RetailDenominationsToDisplay } from './RetailDenominationsToDisplay';
import { RetailCustomerSearchScope } from './RetailCustomerSearchScope';
import { RetailProductSearchType } from './RetailProductSearchType';
import { Abc } from './Abc';
import { RetailNoneManualAutomatic } from './RetailNoneManualAutomatic';
import { RetailChangeDueBehavior } from './RetailChangeDueBehavior';
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
export class RetailFunctionalityProfilesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailFunctionalityProfiles<DeSerializersT>, DeSerializersT>
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
  ): RetailFunctionalityProfilesApi<DeSerializersT> {
    return new RetailFunctionalityProfilesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToManyLink<
      RetailFunctionalityProfiles<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailStoresApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_STORE: new OneToManyLink('RetailStore', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = RetailFunctionalityProfiles;

  requestBuilder(): RetailFunctionalityProfilesRequestBuilder<DeSerializersT> {
    return new RetailFunctionalityProfilesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailFunctionalityProfiles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailFunctionalityProfiles<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailFunctionalityProfiles<DeSerializersT>,
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
    typeof RetailFunctionalityProfiles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailFunctionalityProfiles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROFILE_ID: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AGGREGATE_ITEMS_FOR_PRINTING: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISPLAY_TAX_EXEMPT_IN_LINE_DETAILS: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MINIMUM_PASSWORD_LENGTH: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NO_SALE: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_DELETE_REMINDER: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AMOUNT_ROUNDING_TO: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TENDER_DECLARATION: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEGATIVE_SALES_LINE: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIFT_RECONCILIATION: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADD_TAX_ON_PRICES: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REQUIRE_PAYMENT_FOR_FULFILLMENT: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      RetailRequirePaymentForFulfillment,
      true,
      true
    >;
    SECONDARY_TOTAL_CURRENCY: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SKIP_TAX_ON_RECEIPT: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISCOUNT_AT_TOTAL: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_OF_TRANSACTION: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCLUDE_PROJECT_INVOICES: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    END_OF_TRANSACTION: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COPILOT_REPORT_INSIGHTS: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYNCHRONIZE_NUMBER_SEQUENCES_AT_POS_STARTUP: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREATE_ASYNC_CUSTOMERS: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCLUDE_SALES_ORDER_INVOICES: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROMPT_EDIT_CONTACT_FOR_ASYNC_ORDER_CANCELLATION: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EMPLOYEE_LOGON_TYPE: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      RetailEmployeeLogonType,
      true,
      true
    >;
    IS_PRODUCT_SUGGESTIONS_ENABLED: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NEGATIVE_ADJUSTMENT: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_EXEMPT_RECEIPT_INDICATOR: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STAFF_BARCODE_LOGON_REQUIRES_PASSWORD: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BACKUP_TRAINING_TRANSACTIONS: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUPPORTED_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCLUDE_CREDIT_NOTE_INVOICES: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DAYS_CUSTOMER_HISTORY: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      RetailCustomerHistoryType,
      true,
      true
    >;
    VOID_PAYMENT: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DENOMINATIONS_TO_DISPLAY: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      RetailDenominationsToDisplay,
      true,
      true
    >;
    DEFAULT_CUSTOMER_SEARCH_MODE: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      RetailCustomerSearchScope,
      true,
      true
    >;
    USE_FINANCIAL_RECONCIALIATION_IN_STORE: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COPILOT_CUSTOMER_INSIGHTS: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STAFF_BARCODE_LOGON: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MUST_KEY_IN_PRICE_IF_ZERO: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VOID_TRANSACTION: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_TAX_CHANGE: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BLOCKED_CLOSED_ACCOUNT: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_FISCAL_CUSTOMER_REQUIRED_FOR_TRANSACTION: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NO_TAX_USED: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_FREE_TEXT_INVOICES: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORDER_ATTRIBUTE_NAME_FOR_TIN: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUIRE_AMOUNT_DECLARATION: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LIMIT_STAFF_LIST_TO_STORE: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SERIAL_NUMBER: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EOD_BANK_TOTALS_VERIFICATION: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DECIMAL_NOT_REQUIRED_FOR_MINOR_CURRENCY_UNIT: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_NOT_ON_FILE: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_X_REPORT_ON_TERMINAL: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENCY_SYMBOL: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_ATTENDANCE_ENABLE_REGISTRATION: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    APPLY_DISCOUNT_ON_UNIT_PRICES: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_SEARCH_TYPE: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      RetailProductSearchType,
      true,
      true
    >;
    TAX_REGISTRATION_NUMBER_ON_RECEIPT: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      Abc,
      true,
      true
    >;
    CREATE_ASYNC_CUSTOMER_ORDERS: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISPLAY_SECONDARY_TOTAL_CURRENCY: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AGGREGATE_PAYMENTS: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SKIP_SALES_INVOICE_SELECTION_DURING_RETURN: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRINT_RECEIPTS_ON_CARD_DECLINE: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REJECT_ORDER_FULFILLMENT: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PERSON_MODE: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      RetailNoneManualAutomatic,
      true,
      true
    >;
    PRICE_DECIMAL_PLACES: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_STORE_TRANS_LOG: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MARK_UP: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANUAL_CHARGE_CALCULATION: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NOTIFICATION_REFRESH_INTERVAL: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_PERSON: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_MODE_DEFAULT_AS_CUSTOMER_ORDER: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CENTRAL_TABLE_SERVER: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHOW_STAFF_LIST_AT_LOG_ON: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRINT_VOID_TRANSACTION_RECEIPTS: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DAYS_TRANSACTIONS_EXISTS: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    USE_QUICK_PAY_SHORTCUTS: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRICE_ROUNDING_TO: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MARK_DOWN: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUDIT_ENABLED: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_ADVANCED_CASH_MANAGEMENT: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VOID_IS_PRESSED: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANUAL_TAX_CALCULATION: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAXIMUM_QUANTITY: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CHANGE_DUE_BEHAVIOR: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      RetailChangeDueBehavior,
      true,
      true
    >;
    PROHIBIT_MIXING_SALES_AND_RETURNS: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MULTIBLE_ITEM_SYMBOL: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_PRICE: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAX_TRANSACTION_SEARCH_RESULTS: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CENTRAL_TABLE_SERVER_PORT: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_DECIMAL_PLACES: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_ATTRIBUTE_TYPE_NAME_FOR_TIN: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_ITEM_TAX_CHANGE: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFUND_SALE: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTINGENCY_REASON: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOID_SUSPENDED_TRANSACTIONS_ON_CLOSE_SHIFT: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MANUAL_CALCULATE_DISCOUNTS: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREATE_CUSTOMER_ORDERS_WITH_ASYNC_FALLBACK: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREATE_CUSTOMER_ORDER_WAIT_TIMEOUT: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AGGREGATE_ITEMS: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CANCEL_REASON: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COPILOT_PRODUCT_INSIGHTS: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OVERRIDE_PRICE: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALWAYS_EXPAND_TRANSACTION_SCREEN_LINE_DETAILS: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETAIL_RECEIPT_PROFILE: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESS_NUMBER: OrderableEdmTypeField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCLUDE_KIT_COMPONENTS: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STAFF_CARD_LOGON: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STAFF_CARD_LOGON_REQUIRES_PASSWORD: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISABLE_EDITING_OF_PARTIALLY_FULFILLED_ORDERS: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GENERATE_LOYALTY_CARD_NUMBER: EnumField<
      RetailFunctionalityProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToManyLink<
      RetailFunctionalityProfiles<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailFunctionalityProfiles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link profileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'profileId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link aggregateItemsForPrinting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGGREGATE_ITEMS_FOR_PRINTING: fieldBuilder.buildEnumField(
          'aggregateItemsForPrinting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link displayTaxExemptInLineDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_TAX_EXEMPT_IN_LINE_DETAILS: fieldBuilder.buildEnumField(
          'DisplayTaxExemptInLineDetails',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link minimumPasswordLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_PASSWORD_LENGTH: fieldBuilder.buildEdmTypeField(
          'minimumPasswordLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link noSale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NO_SALE: fieldBuilder.buildEdmTypeField('noSale', 'Edm.String', true),
        /**
         * Static representation of the {@link transactionDeleteReminder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DELETE_REMINDER: fieldBuilder.buildEdmTypeField(
          'transactionDeleteReminder',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link amountRoundingTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_ROUNDING_TO: fieldBuilder.buildEdmTypeField(
          'amountRoundingTo',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tenderDeclaration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENDER_DECLARATION: fieldBuilder.buildEdmTypeField(
          'tenderDeclaration',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link negativeSalesLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEGATIVE_SALES_LINE: fieldBuilder.buildEdmTypeField(
          'negativeSalesLine',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shiftReconciliation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIFT_RECONCILIATION: fieldBuilder.buildEdmTypeField(
          'ShiftReconciliation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addTaxOnPrices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADD_TAX_ON_PRICES: fieldBuilder.buildEnumField(
          'addTaxOnPrices',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link requirePaymentForFulfillment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRE_PAYMENT_FOR_FULFILLMENT: fieldBuilder.buildEnumField(
          'RequirePaymentForFulfillment',
          RetailRequirePaymentForFulfillment,
          true
        ),
        /**
         * Static representation of the {@link secondaryTotalCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECONDARY_TOTAL_CURRENCY: fieldBuilder.buildEdmTypeField(
          'secondaryTotalCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link skipTaxOnReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_TAX_ON_RECEIPT: fieldBuilder.buildEnumField(
          'skipTaxOnReceipt',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link discountAtTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_AT_TOTAL: fieldBuilder.buildEdmTypeField(
          'discountAtTotal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startOfTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_OF_TRANSACTION: fieldBuilder.buildEdmTypeField(
          'startOfTransaction',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link includeProjectInvoices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_PROJECT_INVOICES: fieldBuilder.buildEnumField(
          'IncludeProjectInvoices',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link endOfTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_OF_TRANSACTION: fieldBuilder.buildEdmTypeField(
          'endOfTransaction',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link copilotReportInsights} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COPILOT_REPORT_INSIGHTS: fieldBuilder.buildEnumField(
          'CopilotReportInsights',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link synchronizeNumberSequencesAtPosStartup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYNCHRONIZE_NUMBER_SEQUENCES_AT_POS_STARTUP:
          fieldBuilder.buildEnumField(
            'SynchronizeNumberSequencesAtPosStartup',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link createAsyncCustomers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_ASYNC_CUSTOMERS: fieldBuilder.buildEnumField(
          'CreateAsyncCustomers',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link excludeSalesOrderInvoices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE_SALES_ORDER_INVOICES: fieldBuilder.buildEnumField(
          'ExcludeSalesOrderInvoices',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link promptEditContactForAsyncOrderCancellation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMPT_EDIT_CONTACT_FOR_ASYNC_ORDER_CANCELLATION:
          fieldBuilder.buildEnumField(
            'PromptEditContactForAsyncOrderCancellation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link employeeLogonType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_LOGON_TYPE: fieldBuilder.buildEnumField(
          'EmployeeLogonType',
          RetailEmployeeLogonType,
          true
        ),
        /**
         * Static representation of the {@link isProductSuggestionsEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRODUCT_SUGGESTIONS_ENABLED: fieldBuilder.buildEnumField(
          'IsProductSuggestionsEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link negativeAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEGATIVE_ADJUSTMENT: fieldBuilder.buildEdmTypeField(
          'negativeAdjustment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxExemptReceiptIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_RECEIPT_INDICATOR: fieldBuilder.buildEdmTypeField(
          'TaxExemptReceiptIndicator',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link staffBarcodeLogonRequiresPassword} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAFF_BARCODE_LOGON_REQUIRES_PASSWORD: fieldBuilder.buildEnumField(
          'StaffBarcodeLogonRequiresPassword',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link backupTrainingTransactions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BACKUP_TRAINING_TRANSACTIONS: fieldBuilder.buildEnumField(
          'backupTrainingTransactions',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link supportedCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORTED_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'supportedCountryRegionISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link includeCreditNoteInvoices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_CREDIT_NOTE_INVOICES: fieldBuilder.buildEnumField(
          'IncludeCreditNoteInvoices',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link daysCustomerHistory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAYS_CUSTOMER_HISTORY: fieldBuilder.buildEnumField(
          'DaysCustomerHistory',
          RetailCustomerHistoryType,
          true
        ),
        /**
         * Static representation of the {@link voidPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOID_PAYMENT: fieldBuilder.buildEdmTypeField(
          'voidPayment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link denominationsToDisplay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DENOMINATIONS_TO_DISPLAY: fieldBuilder.buildEnumField(
          'DenominationsToDisplay',
          RetailDenominationsToDisplay,
          true
        ),
        /**
         * Static representation of the {@link defaultCustomerSearchMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CUSTOMER_SEARCH_MODE: fieldBuilder.buildEnumField(
          'DefaultCustomerSearchMode',
          RetailCustomerSearchScope,
          true
        ),
        /**
         * Static representation of the {@link useFinancialReconcialiationInStore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_FINANCIAL_RECONCIALIATION_IN_STORE: fieldBuilder.buildEnumField(
          'UseFinancialReconcialiationInStore',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link copilotCustomerInsights} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COPILOT_CUSTOMER_INSIGHTS: fieldBuilder.buildEnumField(
          'CopilotCustomerInsights',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link staffBarcodeLogon} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAFF_BARCODE_LOGON: fieldBuilder.buildEnumField(
          'staffBarcodeLogon',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mustKeyInPriceIfZero} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MUST_KEY_IN_PRICE_IF_ZERO: fieldBuilder.buildEnumField(
          'mustKeyInPriceIfZero',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link voidTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOID_TRANSACTION: fieldBuilder.buildEdmTypeField(
          'voidTransaction',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionTaxChange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TAX_CHANGE: fieldBuilder.buildEdmTypeField(
          'transactionTaxChange',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link blockedClosedAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCKED_CLOSED_ACCOUNT: fieldBuilder.buildEnumField(
          'blockedClosedAccount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isFiscalCustomerRequiredForTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FISCAL_CUSTOMER_REQUIRED_FOR_TRANSACTION:
          fieldBuilder.buildEnumField(
            'IsFiscalCustomerRequiredForTransaction',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link noTaxUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NO_TAX_USED: fieldBuilder.buildEnumField('noTaxUsed', NoYes, true),
        /**
         * Static representation of the {@link includeFreeTextInvoices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_FREE_TEXT_INVOICES: fieldBuilder.buildEnumField(
          'IncludeFreeTextInvoices',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link orderAttributeNameForTin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ATTRIBUTE_NAME_FOR_TIN: fieldBuilder.buildEdmTypeField(
          'OrderAttributeNameForTIN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requireAmountDeclaration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRE_AMOUNT_DECLARATION: fieldBuilder.buildEnumField(
          'RequireAmountDeclaration',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link limitStaffListToStore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIMIT_STAFF_LIST_TO_STORE: fieldBuilder.buildEnumField(
          'limitStaffListToStore',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link serialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'serialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eodBankTotalsVerification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EOD_BANK_TOTALS_VERIFICATION: fieldBuilder.buildEnumField(
          'EODBankTotalsVerification',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link decimalNotRequiredForMinorCurrencyUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECIMAL_NOT_REQUIRED_FOR_MINOR_CURRENCY_UNIT:
          fieldBuilder.buildEnumField(
            'DecimalNotRequiredForMinorCurrencyUnit',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link itemNotOnFile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NOT_ON_FILE: fieldBuilder.buildEdmTypeField(
          'itemNotOnFile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printXReportOnTerminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_X_REPORT_ON_TERMINAL: fieldBuilder.buildEnumField(
          'printXReportOnTerminal',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link currencySymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_SYMBOL: fieldBuilder.buildEdmTypeField(
          'currencySymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeAttendanceEnableRegistration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_ATTENDANCE_ENABLE_REGISTRATION: fieldBuilder.buildEnumField(
          'TimeAttendanceEnableRegistration',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link applyDiscountOnUnitPrices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_DISCOUNT_ON_UNIT_PRICES: fieldBuilder.buildEnumField(
          'ApplyDiscountOnUnitPrices',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link productSearchType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SEARCH_TYPE: fieldBuilder.buildEnumField(
          'ProductSearchType',
          RetailProductSearchType,
          true
        ),
        /**
         * Static representation of the {@link taxRegistrationNumberOnReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REGISTRATION_NUMBER_ON_RECEIPT: fieldBuilder.buildEnumField(
          'taxRegistrationNumberOnReceipt',
          Abc,
          true
        ),
        /**
         * Static representation of the {@link createAsyncCustomerOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_ASYNC_CUSTOMER_ORDERS: fieldBuilder.buildEnumField(
          'CreateAsyncCustomerOrders',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link displaySecondaryTotalCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_SECONDARY_TOTAL_CURRENCY: fieldBuilder.buildEnumField(
          'displaySecondaryTotalCurrency',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link aggregatePayments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGGREGATE_PAYMENTS: fieldBuilder.buildEnumField(
          'aggregatePayments',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link skipSalesInvoiceSelectionDuringReturn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_SALES_INVOICE_SELECTION_DURING_RETURN: fieldBuilder.buildEnumField(
          'SkipSalesInvoiceSelectionDuringReturn',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link printReceiptsOnCardDecline} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_RECEIPTS_ON_CARD_DECLINE: fieldBuilder.buildEnumField(
          'PrintReceiptsOnCardDecline',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link rejectOrderFulfillment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REJECT_ORDER_FULFILLMENT: fieldBuilder.buildEdmTypeField(
          'RejectOrderFulfillment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesPersonMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PERSON_MODE: fieldBuilder.buildEnumField(
          'salesPersonMode',
          RetailNoneManualAutomatic,
          true
        ),
        /**
         * Static representation of the {@link priceDecimalPlaces} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_DECIMAL_PLACES: fieldBuilder.buildEdmTypeField(
          'PriceDecimalPlaces',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maximumStoreTransLog} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_STORE_TRANS_LOG: fieldBuilder.buildEdmTypeField(
          'maximumStoreTransLog',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link markUp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARK_UP: fieldBuilder.buildEdmTypeField('markUp', 'Edm.String', true),
        /**
         * Static representation of the {@link manualChargeCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL_CHARGE_CALCULATION: fieldBuilder.buildEnumField(
          'ManualChargeCalculation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link notificationRefreshInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTIFICATION_REFRESH_INTERVAL: fieldBuilder.buildEdmTypeField(
          'NotificationRefreshInterval',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link salesPerson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PERSON: fieldBuilder.buildEdmTypeField(
          'salesPerson',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesModeDefaultAsCustomerOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_MODE_DEFAULT_AS_CUSTOMER_ORDER: fieldBuilder.buildEnumField(
          'SalesModeDefaultAsCustomerOrder',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link centralTableServer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CENTRAL_TABLE_SERVER: fieldBuilder.buildEdmTypeField(
          'centralTableServer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link showStaffListAtLogOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_STAFF_LIST_AT_LOG_ON: fieldBuilder.buildEnumField(
          'showStaffListAtLogOn',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link printVoidTransactionReceipts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_VOID_TRANSACTION_RECEIPTS: fieldBuilder.buildEnumField(
          'PrintVoidTransactionReceipts',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link daysTransactionsExists} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAYS_TRANSACTIONS_EXISTS: fieldBuilder.buildEdmTypeField(
          'daysTransactionsExists',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link useQuickPayShortcuts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_QUICK_PAY_SHORTCUTS: fieldBuilder.buildEnumField(
          'UseQuickPayShortcuts',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link priceRoundingTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_ROUNDING_TO: fieldBuilder.buildEdmTypeField(
          'priceRoundingTo',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link markDown} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARK_DOWN: fieldBuilder.buildEdmTypeField(
          'markDown',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link auditEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUDIT_ENABLED: fieldBuilder.buildEnumField('AuditEnabled', NoYes, true),
        /**
         * Static representation of the {@link useAdvancedCashManagement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_ADVANCED_CASH_MANAGEMENT: fieldBuilder.buildEnumField(
          'UseAdvancedCashManagement',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link voidIsPressed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOID_IS_PRESSED: fieldBuilder.buildEdmTypeField(
          'voidIsPressed',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link manualTaxCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL_TAX_CALCULATION: fieldBuilder.buildEnumField(
          'ManualTaxCalculation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maximumQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_QUANTITY: fieldBuilder.buildEdmTypeField(
          'maximumQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link changeDueBehavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_DUE_BEHAVIOR: fieldBuilder.buildEnumField(
          'ChangeDueBehavior',
          RetailChangeDueBehavior,
          true
        ),
        /**
         * Static representation of the {@link prohibitMixingSalesAndReturns} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROHIBIT_MIXING_SALES_AND_RETURNS: fieldBuilder.buildEnumField(
          'ProhibitMixingSalesAndReturns',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link multibleItemSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTIBLE_ITEM_SYMBOL: fieldBuilder.buildEdmTypeField(
          'multibleItemSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maximumPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_PRICE: fieldBuilder.buildEdmTypeField(
          'maximumPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maxTransactionSearchResults} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_TRANSACTION_SEARCH_RESULTS: fieldBuilder.buildEdmTypeField(
          'maxTransactionSearchResults',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link centralTableServerPort} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CENTRAL_TABLE_SERVER_PORT: fieldBuilder.buildEdmTypeField(
          'centralTableServerPort',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountDecimalPlaces} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_DECIMAL_PLACES: fieldBuilder.buildEdmTypeField(
          'AmountDecimalPlaces',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderAttributeTypeNameForTin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ATTRIBUTE_TYPE_NAME_FOR_TIN: fieldBuilder.buildEdmTypeField(
          'OrderAttributeTypeNameForTIN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineItemTaxChange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_ITEM_TAX_CHANGE: fieldBuilder.buildEdmTypeField(
          'lineItemTaxChange',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', true),
        /**
         * Static representation of the {@link refundSale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFUND_SALE: fieldBuilder.buildEdmTypeField(
          'refundSale',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contingencyReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTINGENCY_REASON: fieldBuilder.buildEdmTypeField(
          'contingencyReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voidSuspendedTransactionsOnCloseShift} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOID_SUSPENDED_TRANSACTIONS_ON_CLOSE_SHIFT: fieldBuilder.buildEnumField(
          'VoidSuspendedTransactionsOnCloseShift',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link manualCalculateDiscounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL_CALCULATE_DISCOUNTS: fieldBuilder.buildEnumField(
          'ManualCalculateDiscounts',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link createCustomerOrdersWithAsyncFallback} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_CUSTOMER_ORDERS_WITH_ASYNC_FALLBACK: fieldBuilder.buildEnumField(
          'CreateCustomerOrdersWithAsyncFallback',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link createCustomerOrderWaitTimeout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_CUSTOMER_ORDER_WAIT_TIMEOUT: fieldBuilder.buildEdmTypeField(
          'CreateCustomerOrderWaitTimeout',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link aggregateItems} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGGREGATE_ITEMS: fieldBuilder.buildEnumField(
          'aggregateItems',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cancelReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCEL_REASON: fieldBuilder.buildEdmTypeField(
          'cancelReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link copilotProductInsights} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COPILOT_PRODUCT_INSIGHTS: fieldBuilder.buildEnumField(
          'CopilotProductInsights',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link overridePrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_PRICE: fieldBuilder.buildEdmTypeField(
          'overridePrice',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alwaysExpandTransactionScreenLineDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALWAYS_EXPAND_TRANSACTION_SCREEN_LINE_DETAILS:
          fieldBuilder.buildEnumField(
            'AlwaysExpandTransactionScreenLineDetails',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link retailReceiptProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_RECEIPT_PROFILE: fieldBuilder.buildEdmTypeField(
          'RetailReceiptProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link processNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProcessNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link includeKitComponents} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_KIT_COMPONENTS: fieldBuilder.buildEnumField(
          'includeKitComponents',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link staffCardLogon} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAFF_CARD_LOGON: fieldBuilder.buildEnumField(
          'staffCardLogon',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link staffCardLogonRequiresPassword} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAFF_CARD_LOGON_REQUIRES_PASSWORD: fieldBuilder.buildEnumField(
          'StaffCardLogonRequiresPassword',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link disableEditingOfPartiallyFulfilledOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISABLE_EDITING_OF_PARTIALLY_FULFILLED_ORDERS:
          fieldBuilder.buildEnumField(
            'DisableEditingOfPartiallyFulfilledOrders',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link generateLoyaltyCardNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERATE_LOYALTY_CARD_NUMBER: fieldBuilder.buildEnumField(
          'GenerateLoyaltyCardNumber',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailFunctionalityProfiles)
      };
    }

    return this._schema;
  }
}
