/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactionPaymentTransBiEntities } from './RetailTransactionPaymentTransBiEntities';
import { RetailTransactionPaymentTransBiEntitiesRequestBuilder } from './RetailTransactionPaymentTransBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { RetailEntryStatus } from './RetailEntryStatus';
import { CreditCardProcessorStatus } from './CreditCardProcessorStatus';
import { RetailTenderVoidStatus } from './RetailTenderVoidStatus';
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
export class RetailTransactionPaymentTransBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailTransactionPaymentTransBiEntities<DeSerializersT>,
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
  ): RetailTransactionPaymentTransBiEntitiesApi<DeSerializersT> {
    return new RetailTransactionPaymentTransBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTransactionPaymentTransBiEntities;

  requestBuilder(): RetailTransactionPaymentTransBiEntitiesRequestBuilder<DeSerializersT> {
    return new RetailTransactionPaymentTransBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactionPaymentTransBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransactionPaymentTransBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactionPaymentTransBiEntities<DeSerializersT>,
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
    typeof RetailTransactionPaymentTransBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactionPaymentTransBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_CAPTURE_FAILED: EnumField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTHORIZED_AMOUNT: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSACTION_STATUS: EnumField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      RetailEntryStatus,
      true,
      true
    >;
    SIG_CAP_DATA: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCH_RATE_MST: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GIFT_CARD_ID: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINKED_PAYMENT_TERMINAL_ID: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PAYMENT_CAPTURED: EnumField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STAFF: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_CARD_PROCESSOR_STATUS: EnumField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      CreditCardProcessorStatus,
      true,
      true
    >;
    IS_PAYMENT_DATA_ARCHIVED: EnumField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MESSAGE_NUM: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CREDIT_VOUCHER_ID: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_LINKED_REFUND: EnumField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PAYMENT_DATA_COMPRESSED: EnumField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAYMENT_CAPTURE_TOKEN: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCH_RATE: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIFT_DATE: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RECEIPT_ID: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QTY: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPLICATED: EnumField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTHENTICATION_CODE: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTER: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_PREPAYMENT: EnumField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATEMENT_CODE: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATEMENT_ID: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_MST: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINKED_PAYMENT_STORE: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFUNDABLE_AMOUNT: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_CUSTOMER_ACCOUNT_FLOOR_LIMIT_USED: EnumField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_AUTHORIZATION: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_CARD_TOKEN: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIFT: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_DATE: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ORIGIN: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DOC_ID_RU: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANAGER_KEY_LIVE: EnumField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINKED_PAYMENT_CURRENCY: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARD_OR_ACCOUNT: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TENDER_TYPE: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_TENDERED: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOYALTY_CARD_ID: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANGE_LINE: EnumField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LINKED_PAYMENT_TRANSACTION_ID: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARD_PAYMENT_ACCOUNT_ID: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOID_STATUS: EnumField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      RetailTenderVoidStatus,
      true,
      true
    >;
    AMOUNT_CUR: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CARD_TYPE_ID: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_TIME: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REPLICATION_COUNTER_FROM_ORIGIN: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LINKED_PAYMENT_LINE_NUMBER: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      RetailTransactionPaymentTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      RetailTransactionPaymentTransBiEntities<DeSerializers>
    >;
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
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'lineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isCaptureFailed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CAPTURE_FAILED: fieldBuilder.buildEnumField(
          'IsCaptureFailed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link authorizedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AuthorizedAmount',
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
         * Static representation of the {@link transactionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_STATUS: fieldBuilder.buildEnumField(
          'transactionStatus',
          RetailEntryStatus,
          true
        ),
        /**
         * Static representation of the {@link sigCapData} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIG_CAP_DATA: fieldBuilder.buildEdmTypeField(
          'sigCapData',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exchRateMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_RATE_MST: fieldBuilder.buildEdmTypeField(
          'exchRateMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link giftCardId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_ID: fieldBuilder.buildEdmTypeField(
          'giftCardId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link linkedPaymentTerminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINKED_PAYMENT_TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'LinkedPaymentTerminalId',
          'Edm.String',
          true
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
         * Static representation of the {@link staff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAFF: fieldBuilder.buildEdmTypeField('staff', 'Edm.String', true),
        /**
         * Static representation of the {@link creditCardProcessorStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_PROCESSOR_STATUS: fieldBuilder.buildEnumField(
          'CreditCardProcessorStatus',
          CreditCardProcessorStatus,
          true
        ),
        /**
         * Static representation of the {@link isPaymentDataArchived} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PAYMENT_DATA_ARCHIVED: fieldBuilder.buildEnumField(
          'IsPaymentDataArchived',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link messageNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_NUM: fieldBuilder.buildEdmTypeField(
          'messageNum',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link creditVoucherId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_VOUCHER_ID: fieldBuilder.buildEdmTypeField(
          'creditVoucherId',
          'Edm.String',
          true
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
         * Static representation of the {@link isPaymentDataCompressed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PAYMENT_DATA_COMPRESSED: fieldBuilder.buildEnumField(
          'IsPaymentDataCompressed',
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
         * Static representation of the {@link paymentCaptureToken} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_CAPTURE_TOKEN: fieldBuilder.buildEdmTypeField(
          'PaymentCaptureToken',
          'Edm.String',
          true
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
         * Static representation of the {@link shiftDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIFT_DATE: fieldBuilder.buildEdmTypeField(
          'shiftDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link sysCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'SysCreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY: fieldBuilder.buildEdmTypeField('qty', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link replicated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLICATED: fieldBuilder.buildEnumField('replicated', NoYes, true),
        /**
         * Static representation of the {@link authenticationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHENTICATION_CODE: fieldBuilder.buildEdmTypeField(
          'authenticationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link counter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTER: fieldBuilder.buildEdmTypeField('counter', 'Edm.Int32', false),
        /**
         * Static representation of the {@link isPrepayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PREPAYMENT: fieldBuilder.buildEnumField('isPrepayment', NoYes, true),
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
         * Static representation of the {@link statementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_ID: fieldBuilder.buildEdmTypeField(
          'statementId',
          'Edm.String',
          true
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
         * Static representation of the {@link amountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'amountMST',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link refundableAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFUNDABLE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RefundableAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isCustomerAccountFloorLimitUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CUSTOMER_ACCOUNT_FLOOR_LIMIT_USED: fieldBuilder.buildEnumField(
          'IsCustomerAccountFloorLimitUsed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link paymentAuthorization} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_AUTHORIZATION: fieldBuilder.buildEdmTypeField(
          'paymentAuthorization',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentCardToken} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_CARD_TOKEN: fieldBuilder.buildEdmTypeField(
          'paymentCardToken',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shift} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIFT: fieldBuilder.buildEdmTypeField('shift', 'Edm.String', true),
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
         * Static representation of the {@link origin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN: fieldBuilder.buildEdmTypeField('Origin', 'Edm.String', true),
        /**
         * Static representation of the {@link cashDocIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DOC_ID_RU: fieldBuilder.buildEdmTypeField(
          'CashDocId_RU',
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
         * Static representation of the {@link managerKeyLive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANAGER_KEY_LIVE: fieldBuilder.buildEnumField(
          'managerKeyLive',
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
         * Static representation of the {@link cardOrAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_OR_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'cardOrAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tenderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENDER_TYPE: fieldBuilder.buildEdmTypeField(
          'tenderType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountTendered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_TENDERED: fieldBuilder.buildEdmTypeField(
          'amountTendered',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link changeLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_LINE: fieldBuilder.buildEnumField('changeLine', NoYes, true),
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
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link linkedPaymentTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINKED_PAYMENT_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'LinkedPaymentTransactionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cardPaymentAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_PAYMENT_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'CardPaymentAccountId',
          'Edm.String',
          true
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
         * Static representation of the {@link amountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'amountCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cardTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'cardTypeId',
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
         * Static representation of the {@link replicationCounterFromOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLICATION_COUNTER_FROM_ORIGIN: fieldBuilder.buildEdmTypeField(
          'replicationCounterFromOrigin',
          'Edm.Int32',
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
         * Static representation of the {@link sysModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'SysModifiedBy',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTransactionPaymentTransBiEntities)
      };
    }

    return this._schema;
  }
}
