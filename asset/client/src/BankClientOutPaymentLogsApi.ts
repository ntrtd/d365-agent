/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankClientOutPaymentLogs } from './BankClientOutPaymentLogs';
import { BankClientOutPaymentLogsRequestBuilder } from './BankClientOutPaymentLogsRequestBuilder';
import { PaymOrderStatusRu } from './PaymOrderStatusRu';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { BankClientDocumentTypeCategoryRu } from './BankClientDocumentTypeCategoryRu';
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
export class BankClientOutPaymentLogsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BankClientOutPaymentLogs<DeSerializersT>, DeSerializersT>
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
  ): BankClientOutPaymentLogsApi<DeSerializersT> {
    return new BankClientOutPaymentLogsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BankClientOutPaymentLogs;

  requestBuilder(): BankClientOutPaymentLogsRequestBuilder<DeSerializersT> {
    return new BankClientOutPaymentLogsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BankClientOutPaymentLogs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BankClientOutPaymentLogs<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BankClientOutPaymentLogs<DeSerializersT>,
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
    typeof BankClientOutPaymentLogs,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BankClientOutPaymentLogs,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BankClientOutPaymentLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORDER_NUMBER: OrderableEdmTypeField<
      BankClientOutPaymentLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORDER_DATE: OrderableEdmTypeField<
      BankClientOutPaymentLogs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAYMENT_ORDER_STATUS: EnumField<
      BankClientOutPaymentLogs<DeSerializers>,
      DeSerializersT,
      PaymOrderStatusRu,
      true,
      true
    >;
    METHOD_OF_PAYMENT: OrderableEdmTypeField<
      BankClientOutPaymentLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_IN_TRANSACTION_CURRENCY: OrderableEdmTypeField<
      BankClientOutPaymentLogs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BANK_CURRENCY_TRANSFER: OrderableEdmTypeField<
      BankClientOutPaymentLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE: OrderableEdmTypeField<
      BankClientOutPaymentLogs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BANK_ACCOUNT: OrderableEdmTypeField<
      BankClientOutPaymentLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      BankClientOutPaymentLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_AND_TIME: OrderableEdmTypeField<
      BankClientOutPaymentLogs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      BankClientOutPaymentLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_ORDER_NUMBER: OrderableEdmTypeField<
      BankClientOutPaymentLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTERAGENT: OrderableEdmTypeField<
      BankClientOutPaymentLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      BankClientOutPaymentLogs<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    DOCUMENT_TYPE: EnumField<
      BankClientOutPaymentLogs<DeSerializers>,
      DeSerializersT,
      BankClientDocumentTypeCategoryRu,
      true,
      true
    >;
    JOURNAL_NUMBER: OrderableEdmTypeField<
      BankClientOutPaymentLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_ORDER_DATE: OrderableEdmTypeField<
      BankClientOutPaymentLogs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<BankClientOutPaymentLogs<DeSerializers>>;
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
         * Static representation of the {@link orderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link orderDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_DATE: fieldBuilder.buildEdmTypeField(
          'OrderDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link paymentOrderStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_ORDER_STATUS: fieldBuilder.buildEnumField(
          'PaymentOrderStatus',
          PaymOrderStatusRu,
          true
        ),
        /**
         * Static representation of the {@link methodOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        METHOD_OF_PAYMENT: fieldBuilder.buildEdmTypeField(
          'MethodOfPayment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountInTransactionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IN_TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AmountInTransactionCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bankCurrencyTransfer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CURRENCY_TRANSFER: fieldBuilder.buildEdmTypeField(
          'BankCurrencyTransfer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField(
          'Date',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link bankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'BankAccount',
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
         * Static representation of the {@link dateAndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_AND_TIME: fieldBuilder.buildEdmTypeField(
          'DateAndTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link paymentOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'PaymentOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link counteragent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTERAGENT: fieldBuilder.buildEdmTypeField(
          'Counteragent',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          LedgerJournalAcType,
          true
        ),
        /**
         * Static representation of the {@link documentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TYPE: fieldBuilder.buildEnumField(
          'DocumentType',
          BankClientDocumentTypeCategoryRu,
          true
        ),
        /**
         * Static representation of the {@link journalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentOrderDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_ORDER_DATE: fieldBuilder.buildEdmTypeField(
          'PaymentOrderDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BankClientOutPaymentLogs)
      };
    }

    return this._schema;
  }
}
