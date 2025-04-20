/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactionTableBiEntities } from './RetailTransactionTableBiEntities';
import { RetailTransactionTableBiEntitiesRequestBuilder } from './RetailTransactionTableBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { McrsoAllocPriority } from './McrsoAllocPriority';
import { McrPaymOutOfBalance } from './McrPaymOutOfBalance';
import { RetailTransactionCode } from './RetailTransactionCode';
import { RetailTransactionOrderTypes } from './RetailTransactionOrderTypes';
import { RetailTransactionValidationStatus } from './RetailTransactionValidationStatus';
import { TaxCalculationType } from './TaxCalculationType';
import { RetailTransactionType } from './RetailTransactionType';
import { RetailEntryStatus } from './RetailEntryStatus';
import { McrContinuityLineEval } from './McrContinuityLineEval';
import { McrOutOfBalanceReleaseType } from './McrOutOfBalanceReleaseType';
import { UnknownNoYes } from './UnknownNoYes';
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
export class RetailTransactionTableBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailTransactionTableBiEntities<DeSerializersT>, DeSerializersT>
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
  ): RetailTransactionTableBiEntitiesApi<DeSerializersT> {
    return new RetailTransactionTableBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTransactionTableBiEntities;

  requestBuilder(): RetailTransactionTableBiEntitiesRequestBuilder<DeSerializersT> {
    return new RetailTransactionTableBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactionTableBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransactionTableBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactionTableBiEntities<DeSerializersT>,
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
    typeof RetailTransactionTableBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactionTableBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TO_ACCOUNT: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SELL_TO_CONTACT_ID: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISC_AMOUNT: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOCATION_PRIORITY: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      McrsoAllocPriority,
      true,
      true
    >;
    RECEIPT_ID: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOYALTY_DISC_AMOUNT_RU: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COUNTER: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PAYM_OUT_OF_BALANCE_TYPE: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      McrPaymOutOfBalance,
      true,
      true
    >;
    STATEMENT_CODE: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_MANUAL_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_COMMENT: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_CODE: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      RetailTransactionCode,
      true,
      true
    >;
    SHIPPING_DATE_REQUESTED: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BATCH_TERMINAL_ID: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_TAX_INCLUDED_IN_PRICE: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_TAX_EXEMPTED_FOR_PRICE_INCLUSIVE: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECEIPT_EMAIL: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDATION_DATE_TIME: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    GIFT_CARD_BALANCE: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GIFT_CARD_EXPIRE_DATE: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FISCAL_SERIAL_ID: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_ORDER_TYPE: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      RetailTransactionOrderTypes,
      true,
      true
    >;
    TIME_WHEN_TRANS_CLOSED: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXCH_RATE: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BATCH_ID: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ITEMS_POSTED: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUSPENDED_TRANSACTION_ID: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPEN_DRAWER: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIFT_DATE: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_ACCOUNT_ASYNC: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_TO_ACCOUNT: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EDIT_AUDIT_DATE_TIME: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DISC_AMOUNT_WITHOUT_TAX: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TIME_WHEN_TOTAL_PRESSED: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FTC_EXEMPT: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DIMENSION_STAMPED: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTERNAL_TRANSACTION_ID: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_ID_MASKED: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BEGIN_DATE_TIME: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALIDATION_STATUS: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      RetailTransactionValidationStatus,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_SITE_ID: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSTALLMENT_BILLING_PROMPT: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NET_AMOUNT: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_INVOICE_AMOUNT: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_CALCULATION_TYPE: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      TaxCalculationType,
      true,
      true
    >;
    INSTALLMENT_ORDER_SUBMITTED: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TYPE: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      RetailTransactionType,
      true,
      true
    >;
    ORIGIN: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_MANUAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REFUND_RECEIPT_ID: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PAYMENT_DIFFERENCE: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYMENT_AMOUNT: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENTRY_STATUS: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      RetailEntryStatus,
      true,
      true
    >;
    CUST_DISC_AMOUNT: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INCOME_EXPENSE_AMOUNT: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPLICATION_COUNTER_FROM_ORIGIN: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    GIFT_CARD_HISTORY_DETAILS: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_ON_POS_TERMINAL: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_ACTIVE_FROM: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SKIP_AGGREGATION: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_NAME: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_OVERRIDE: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOYALTY_CARD_ID: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_PAYMENT_LINES: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INVENT_LOCATION_ID: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCLUDED_IN_STATISTICS: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NET_PRICE: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WRONG_SHIFT: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATEMENT_ID: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTINUITY_LINE_EVAL: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      McrContinuityLineEval,
      true,
      true
    >;
    RECEIPT_DATE_REQUESTED: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NUMBER_OF_ITEMS: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANNEL_REFERENCE_ID: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUT_OF_BALANCE_RELEASE_TYPE: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      McrOutOfBalanceReleaseType,
      true,
      true
    >;
    BUSINESS_DATE: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DLV_MODE: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUOTATION_EXPIRY_DATE: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIFT: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_ISSUE_AMOUNT: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONTINUITY_ORDER: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUST_ACCOUNT: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_INVOICES: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_DEPOSIT_OVERRIDDEN: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    STAFF: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_AS_SHIPMENT: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_GROUP: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETRIEVED_FROM_RECEIPT_ID: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_OFFLINE: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GROSS_AMOUNT: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COST_AMOUNT: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_ID: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLICATED: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FISCAL_DOCUMENT_ID: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_TIME: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CONTINUITY_CHILD: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALE_ON_ACCOUNT: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NUMBER_OF_ITEM_LINES: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUNDED_AMOUNT: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INFOCODE_DISC_GROUP: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATALOG_UP_SELL_SHOWN: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_ORDER_ID: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_TABLE_ID: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RECEIPT_EMAIL_SENT: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_ORDER_AMOUNT: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_DISC_AMOUNT: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUST_PURCHASE_ORDER: OrderableEdmTypeField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALE_IS_RETURN_SALE: EnumField<
      RetailTransactionTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailTransactionTableBiEntities<DeSerializers>>;
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
         * Static representation of the {@link terminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL: fieldBuilder.buildEdmTypeField(
          'terminal',
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
         * Static representation of the {@link toAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_ACCOUNT: fieldBuilder.buildEnumField('toAccount', NoYes, true),
        /**
         * Static representation of the {@link sellToContactId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SELL_TO_CONTACT_ID: fieldBuilder.buildEdmTypeField(
          'sellToContactId',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link allocationPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_PRIORITY: fieldBuilder.buildEnumField(
          'AllocationPriority',
          McrsoAllocPriority,
          true
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
         * Static representation of the {@link counter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTER: fieldBuilder.buildEdmTypeField('counter', 'Edm.Int32', false),
        /**
         * Static representation of the {@link paymOutOfBalanceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_OUT_OF_BALANCE_TYPE: fieldBuilder.buildEnumField(
          'PaymOutOfBalanceType',
          McrPaymOutOfBalance,
          true
        ),
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
         * Static representation of the {@link totalManualDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_MANUAL_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'TotalManualDiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link comment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT: fieldBuilder.buildEdmTypeField('comment', 'Edm.String', true),
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
         * Static representation of the {@link transCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_CODE: fieldBuilder.buildEnumField(
          'transCode',
          RetailTransactionCode,
          true
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
         * Static representation of the {@link isTaxExemptedForPriceInclusive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TAX_EXEMPTED_FOR_PRICE_INCLUSIVE: fieldBuilder.buildEnumField(
          'IsTaxExemptedForPriceInclusive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link receiptEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_EMAIL: fieldBuilder.buildEdmTypeField(
          'receiptEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validationDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATION_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ValidationDateTime',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link fiscalSerialId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_SERIAL_ID: fieldBuilder.buildEdmTypeField(
          'FiscalSerialId',
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
         * Static representation of the {@link timeWhenTransClosed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_WHEN_TRANS_CLOSED: fieldBuilder.buildEdmTypeField(
          'timeWhenTransClosed',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link exchRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_RATE: fieldBuilder.buildEdmTypeField(
          'exchRate',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link batchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_ID: fieldBuilder.buildEdmTypeField('BatchID', 'Edm.Int64', false),
        /**
         * Static representation of the {@link itemsPosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEMS_POSTED: fieldBuilder.buildEnumField('itemsPosted', NoYes, true),
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
         * Static representation of the {@link openDrawer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPEN_DRAWER: fieldBuilder.buildEnumField('openDrawer', NoYes, true),
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
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
         * Static representation of the {@link amountToAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_TO_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'amountToAccount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link editAuditDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EDIT_AUDIT_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'EditAuditDateTime',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link timeWhenTotalPressed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_WHEN_TOTAL_PRESSED: fieldBuilder.buildEdmTypeField(
          'timeWhenTotalPressed',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link ftcExempt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FTC_EXEMPT: fieldBuilder.buildEnumField('FTCExempt', NoYes, true),
        /**
         * Static representation of the {@link invoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'invoiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultDimensionStamped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_STAMPED: fieldBuilder.buildEnumField(
          'DefaultDimensionStamped',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link internalTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'InternalTransactionId',
          'Edm.Guid',
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
         * Static representation of the {@link validationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATION_STATUS: fieldBuilder.buildEnumField(
          'ValidationStatus',
          RetailTransactionValidationStatus,
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
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link installmentBillingPrompt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTALLMENT_BILLING_PROMPT: fieldBuilder.buildEnumField(
          'InstallmentBillingPrompt',
          NoYes,
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
         * Static representation of the {@link netAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'netAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesInvoiceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_INVOICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'salesInvoiceAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link installmentOrderSubmitted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTALLMENT_ORDER_SUBMITTED: fieldBuilder.buildEnumField(
          'InstallmentOrderSubmitted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('type', RetailTransactionType, true),
        /**
         * Static representation of the {@link origin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN: fieldBuilder.buildEdmTypeField('Origin', 'Edm.String', true),
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link refundReceiptId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFUND_RECEIPT_ID: fieldBuilder.buildEdmTypeField(
          'refundReceiptId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesPaymentDifference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PAYMENT_DIFFERENCE: fieldBuilder.buildEdmTypeField(
          'salesPaymentDifference',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link paymentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'paymentAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link entryStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_STATUS: fieldBuilder.buildEnumField(
          'entryStatus',
          RetailEntryStatus,
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
         * Static representation of the {@link incomeExpenseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOME_EXPENSE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'incomeExpenseAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link giftCardHistoryDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_HISTORY_DETAILS: fieldBuilder.buildEdmTypeField(
          'GiftCardHistoryDetails',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdOnPosTerminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON_POS_TERMINAL: fieldBuilder.buildEdmTypeField(
          'createdOnPosTerminal',
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
         * Static representation of the {@link skipAggregation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_AGGREGATION: fieldBuilder.buildEnumField(
          'SkipAggregation',
          NoYes,
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
         * Static representation of the {@link priceOverride} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_OVERRIDE: fieldBuilder.buildEnumField(
          'PriceOverride',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link loyaltyCardId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_CARD_ID: fieldBuilder.buildEdmTypeField(
          'loyaltyCardId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberOfPaymentLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_PAYMENT_LINES: fieldBuilder.buildEdmTypeField(
          'numberOfPaymentLines',
          'Edm.Int32',
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
         * Static representation of the {@link includedInStatistics} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDED_IN_STATISTICS: fieldBuilder.buildEnumField(
          'includedInStatistics',
          NoYes,
          true
        ),
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
         * Static representation of the {@link wrongShift} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRONG_SHIFT: fieldBuilder.buildEnumField('wrongShift', NoYes, true),
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
         * Static representation of the {@link continuityLineEval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTINUITY_LINE_EVAL: fieldBuilder.buildEnumField(
          'ContinuityLineEval',
          McrContinuityLineEval,
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
         * Static representation of the {@link numberOfItems} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_ITEMS: fieldBuilder.buildEdmTypeField(
          'numberOfItems',
          'Edm.Decimal',
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
         * Static representation of the {@link channelReferenceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANNEL_REFERENCE_ID: fieldBuilder.buildEdmTypeField(
          'ChannelReferenceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link outOfBalanceReleaseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUT_OF_BALANCE_RELEASE_TYPE: fieldBuilder.buildEnumField(
          'OutOfBalanceReleaseType',
          McrOutOfBalanceReleaseType,
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
         * Static representation of the {@link quotationExpiryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUOTATION_EXPIRY_DATE: fieldBuilder.buildEdmTypeField(
          'QuotationExpiryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shift} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIFT: fieldBuilder.buildEdmTypeField('shift', 'Edm.String', true),
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
         * Static representation of the {@link continuityOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTINUITY_ORDER: fieldBuilder.buildEnumField(
          'ContinuityOrder',
          NoYes,
          true
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
         * Static representation of the {@link numberOfInvoices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_INVOICES: fieldBuilder.buildEdmTypeField(
          'numberOfInvoices',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isDepositOverridden} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEPOSIT_OVERRIDDEN: fieldBuilder.buildEnumField(
          'IsDepositOverridden',
          UnknownNoYes,
          true
        ),
        /**
         * Static representation of the {@link staff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAFF: fieldBuilder.buildEdmTypeField('staff', 'Edm.String', true),
        /**
         * Static representation of the {@link postAsShipment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_AS_SHIPMENT: fieldBuilder.buildEnumField(
          'postAsShipment',
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
         * Static representation of the {@link retrievedFromReceiptId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETRIEVED_FROM_RECEIPT_ID: fieldBuilder.buildEdmTypeField(
          'retrievedFromReceiptId',
          'Edm.String',
          true
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
         * Static representation of the {@link grossAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_AMOUNT: fieldBuilder.buildEdmTypeField(
          'grossAmount',
          'Edm.Decimal',
          false
        ),
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
         * Static representation of the {@link fiscalDocumentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_ID: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentId',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link continuityChild} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTINUITY_CHILD: fieldBuilder.buildEnumField(
          'ContinuityChild',
          NoYes,
          true
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
         * Static representation of the {@link numberOfItemLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_ITEM_LINES: fieldBuilder.buildEdmTypeField(
          'numberOfItemLines',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link roundedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'roundedAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link infocodeDiscGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFOCODE_DISC_GROUP: fieldBuilder.buildEdmTypeField(
          'infocodeDiscGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link catalogUpSellShown} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATALOG_UP_SELL_SHOWN: fieldBuilder.buildEnumField(
          'CatalogUpSellShown',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'salesOrderId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'transTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link receiptEmailSent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_EMAIL_SENT: fieldBuilder.buildEnumField(
          'receiptEmailSent',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesOrderAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_AMOUNT: fieldBuilder.buildEdmTypeField(
          'salesOrderAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link custPurchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_PURCHASE_ORDER: fieldBuilder.buildEdmTypeField(
          'CustPurchaseOrder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link saleIsReturnSale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALE_IS_RETURN_SALE: fieldBuilder.buildEnumField(
          'saleIsReturnSale',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTransactionTableBiEntities)
      };
    }

    return this._schema;
  }
}
