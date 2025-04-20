/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactionPaymentLinesV2 } from './RetailTransactionPaymentLinesV2';
import { RetailTransactionPaymentLinesV2RequestBuilder } from './RetailTransactionPaymentLinesV2RequestBuilder';
import { RetailEntryStatus } from './RetailEntryStatus';
import { NoYes } from './NoYes';
import { RetailTenderVoidStatus } from './RetailTenderVoidStatus';
import { RetailTenderFunction } from './RetailTenderFunction';
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
export class RetailTransactionPaymentLinesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailTransactionPaymentLinesV2<DeSerializersT>, DeSerializersT>
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
  ): RetailTransactionPaymentLinesV2Api<DeSerializersT> {
    return new RetailTransactionPaymentLinesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTransactionPaymentLinesV2;

  requestBuilder(): RetailTransactionPaymentLinesV2RequestBuilder<DeSerializersT> {
    return new RetailTransactionPaymentLinesV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactionPaymentLinesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransactionPaymentLinesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactionPaymentLinesV2<DeSerializersT>,
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
    typeof RetailTransactionPaymentLinesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactionPaymentLinesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_NUMBER: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_STATUS: EnumField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      RetailEntryStatus,
      true,
      true
    >;
    GIFT_CARD_ID: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE_IN_TENDERED_CURRENCY: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_PAYMENT_CAPTURED: EnumField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINKED_PAYMENT_TRANSACTION_NUMBER: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_IN_TENDERED_CURRENCY: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_LINKED_REFUND: EnumField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AMOUNT_TENDERED: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_PREPAYMENT: EnumField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AMOUNT_TENDERED_ADJUSTMENT: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE_IN_ACCOUNTING_CURRENCY: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIPT_ID: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINKED_PAYMENT_STORE: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARD_TYPE_ID: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STAFF: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_VOUCHER_ID: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CHANGE_LINE: EnumField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINKED_PAYMENT_CURRENCY: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARD_NUMBER: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TENDER_TYPE: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINKED_PAYMENT_TERMINAL: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_NUMBER: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFUNDABLE_AMOUNT: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_IN_ACCOUNTING_CURRENCY: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOYALTY_CARD_ID: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINKED_PAYMENT_LINE_NUMBER: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VOID_STATUS: EnumField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      RetailTenderVoidStatus,
      true,
      true
    >;
    FUNCTION: EnumField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      RetailTenderFunction,
      true,
      true
    >;
    PAYMENT_CAPTURE_TOKEN: OrderableEdmTypeField<
      RetailTransactionPaymentLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailTransactionPaymentLinesV2<DeSerializers>>;
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
         * Static representation of the {@link store} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE: fieldBuilder.buildEdmTypeField('Store', 'Edm.String', false),
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
         * Static representation of the {@link giftCardId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_ID: fieldBuilder.buildEdmTypeField(
          'GiftCardId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exchangeRateInTenderedCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_IN_TENDERED_CURRENCY: fieldBuilder.buildEdmTypeField(
          'ExchangeRateInTenderedCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isPaymentCaptured} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PAYMENT_CAPTURED: fieldBuilder.buildEnumField(
          'IsPaymentCaptured',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link linkedPaymentTransactionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINKED_PAYMENT_TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'LinkedPaymentTransactionNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountInTenderedCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IN_TENDERED_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AmountInTenderedCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isLinkedRefund} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LINKED_REFUND: fieldBuilder.buildEnumField(
          'IsLinkedRefund',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link amountTendered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_TENDERED: fieldBuilder.buildEdmTypeField(
          'AmountTendered',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isPrepayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PREPAYMENT: fieldBuilder.buildEnumField('IsPrepayment', NoYes, true),
        /**
         * Static representation of the {@link amountTenderedAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_TENDERED_ADJUSTMENT: fieldBuilder.buildEdmTypeField(
          'AmountTenderedAdjustment',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link exchangeRateInAccountingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_IN_ACCOUNTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'ExchangeRateInAccountingCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link receiptId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_ID: fieldBuilder.buildEdmTypeField(
          'ReceiptId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link linkedPaymentStore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINKED_PAYMENT_STORE: fieldBuilder.buildEdmTypeField(
          'LinkedPaymentStore',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cardTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'CardTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link staff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAFF: fieldBuilder.buildEdmTypeField('Staff', 'Edm.String', true),
        /**
         * Static representation of the {@link creditVoucherId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_VOUCHER_ID: fieldBuilder.buildEdmTypeField(
          'CreditVoucherId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isChangeLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CHANGE_LINE: fieldBuilder.buildEnumField(
          'IsChangeLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link linkedPaymentCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINKED_PAYMENT_CURRENCY: fieldBuilder.buildEdmTypeField(
          'LinkedPaymentCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cardNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_NUMBER: fieldBuilder.buildEdmTypeField(
          'CardNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tenderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENDER_TYPE: fieldBuilder.buildEdmTypeField(
          'TenderType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link linkedPaymentTerminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINKED_PAYMENT_TERMINAL: fieldBuilder.buildEdmTypeField(
          'LinkedPaymentTerminal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link refundableAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFUNDABLE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RefundableAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountInAccountingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IN_ACCOUNTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AmountInAccountingCurrency',
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
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link linkedPaymentLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINKED_PAYMENT_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LinkedPaymentLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link voidStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOID_STATUS: fieldBuilder.buildEnumField(
          'VoidStatus',
          RetailTenderVoidStatus,
          true
        ),
        /**
         * Static representation of the {@link function} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTION: fieldBuilder.buildEnumField(
          'Function',
          RetailTenderFunction,
          true
        ),
        /**
         * Static representation of the {@link paymentCaptureToken} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_CAPTURE_TOKEN: fieldBuilder.buildEdmTypeField(
          'PaymentCaptureToken',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTransactionPaymentLinesV2)
      };
    }

    return this._schema;
  }
}
