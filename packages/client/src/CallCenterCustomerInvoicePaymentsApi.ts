/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CallCenterCustomerInvoicePayments } from './CallCenterCustomerInvoicePayments';
import { CallCenterCustomerInvoicePaymentsRequestBuilder } from './CallCenterCustomerInvoicePaymentsRequestBuilder';
import { NoYes } from './NoYes';
import { McrCustPaymStatus } from './McrCustPaymStatus';
import { McrCustPaymType } from './McrCustPaymType';
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
export class CallCenterCustomerInvoicePaymentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CallCenterCustomerInvoicePayments<DeSerializersT>, DeSerializersT>
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
  ): CallCenterCustomerInvoicePaymentsApi<DeSerializersT> {
    return new CallCenterCustomerInvoicePaymentsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CallCenterCustomerInvoicePayments;

  requestBuilder(): CallCenterCustomerInvoicePaymentsRequestBuilder<DeSerializersT> {
    return new CallCenterCustomerInvoicePaymentsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CallCenterCustomerInvoicePayments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CallCenterCustomerInvoicePayments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CallCenterCustomerInvoicePayments<DeSerializersT>,
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
    typeof CallCenterCustomerInvoicePayments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CallCenterCustomerInvoicePayments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CallCenterCustomerInvoicePayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      CallCenterCustomerInvoicePayments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      CallCenterCustomerInvoicePayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_PLAN_REFUND: EnumField<
      CallCenterCustomerInvoicePayments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETAIL_CHANNEL_ID: OrderableEdmTypeField<
      CallCenterCustomerInvoicePayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIQUE_CREDIT_CARD_ID: OrderableEdmTypeField<
      CallCenterCustomerInvoicePayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_GIFT_CARD_ID: OrderableEdmTypeField<
      CallCenterCustomerInvoicePayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      CallCenterCustomerInvoicePayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERCENT_AMOUNT: OrderableEdmTypeField<
      CallCenterCustomerInvoicePayments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_CREDIT_CARD_PROCESSED: EnumField<
      CallCenterCustomerInvoicePayments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHECK_NUMBER: OrderableEdmTypeField<
      CallCenterCustomerInvoicePayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CHECK_AUTHORIZED: EnumField<
      CallCenterCustomerInvoicePayments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      CallCenterCustomerInvoicePayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHORIZATION_RETRY_NUMBER: OrderableEdmTypeField<
      CallCenterCustomerInvoicePayments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_PREPAY: EnumField<
      CallCenterCustomerInvoicePayments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      CallCenterCustomerInvoicePayments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_ON_ACCOUNT_AUTHORIZED: EnumField<
      CallCenterCustomerInvoicePayments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTED_AMOUNT: OrderableEdmTypeField<
      CallCenterCustomerInvoicePayments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATUS: EnumField<
      CallCenterCustomerInvoicePayments<DeSerializers>,
      DeSerializersT,
      McrCustPaymStatus,
      true,
      true
    >;
    RETAIL_STORE_TENDER_TYPE_ID: OrderableEdmTypeField<
      CallCenterCustomerInvoicePayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_PAYMENT_TYPE: EnumField<
      CallCenterCustomerInvoicePayments<DeSerializers>,
      DeSerializersT,
      McrCustPaymType,
      true,
      true
    >;
    RETAIL_STORE_CARD_TYPE_ID: OrderableEdmTypeField<
      CallCenterCustomerInvoicePayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_SCHED_ID: OrderableEdmTypeField<
      CallCenterCustomerInvoicePayments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CallCenterCustomerInvoicePayments<DeSerializers>>;
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
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isPlanRefund} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PLAN_REFUND: fieldBuilder.buildEnumField(
          'IsPlanRefund',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link retailChannelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CHANNEL_ID: fieldBuilder.buildEdmTypeField(
          'RetailChannelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uniqueCreditCardId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIQUE_CREDIT_CARD_ID: fieldBuilder.buildEdmTypeField(
          'UniqueCreditCardId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailGiftCardId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_GIFT_CARD_ID: fieldBuilder.buildEdmTypeField(
          'RetailGiftCardId',
          'Edm.String',
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
         * Static representation of the {@link percentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PercentAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isCreditCardProcessed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CREDIT_CARD_PROCESSED: fieldBuilder.buildEnumField(
          'IsCreditCardProcessed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link checkNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_NUMBER: fieldBuilder.buildEdmTypeField(
          'CheckNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isCheckAuthorized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CHECK_AUTHORIZED: fieldBuilder.buildEnumField(
          'IsCheckAuthorized',
          NoYes,
          true
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
         * Static representation of the {@link authorizationRetryNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZATION_RETRY_NUMBER: fieldBuilder.buildEdmTypeField(
          'AuthorizationRetryNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isPrepay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PREPAY: fieldBuilder.buildEnumField('IsPrepay', NoYes, true),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link isOnAccountAuthorized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ON_ACCOUNT_AUTHORIZED: fieldBuilder.buildEnumField(
          'IsOnAccountAuthorized',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PostedAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', McrCustPaymStatus, true),
        /**
         * Static representation of the {@link retailStoreTenderTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_STORE_TENDER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'RetailStoreTenderTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerPaymentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_PAYMENT_TYPE: fieldBuilder.buildEnumField(
          'CustomerPaymentType',
          McrCustPaymType,
          true
        ),
        /**
         * Static representation of the {@link retailStoreCardTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_STORE_CARD_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'RetailStoreCardTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentSchedId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SCHED_ID: fieldBuilder.buildEdmTypeField(
          'PaymentSchedId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CallCenterCustomerInvoicePayments)
      };
    }

    return this._schema;
  }
}
