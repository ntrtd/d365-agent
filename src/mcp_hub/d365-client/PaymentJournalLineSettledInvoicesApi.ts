/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentJournalLineSettledInvoices } from './PaymentJournalLineSettledInvoices';
import { PaymentJournalLineSettledInvoicesRequestBuilder } from './PaymentJournalLineSettledInvoicesRequestBuilder';
import { CustomerPaymentJournalLinesApi } from './CustomerPaymentJournalLinesApi';
import { CustomerPaymentJournalHeadersApi } from './CustomerPaymentJournalHeadersApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PaymentJournalLineSettledInvoicesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PaymentJournalLineSettledInvoices<DeSerializersT>, DeSerializersT>
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
  ): PaymentJournalLineSettledInvoicesApi<DeSerializersT> {
    return new PaymentJournalLineSettledInvoicesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLineRelatedRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_RELATED_ROLE: OneToOneLink<
      PaymentJournalLineSettledInvoices<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalHeaderRelatedRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_HEADER_RELATED_ROLE: OneToOneLink<
      PaymentJournalLineSettledInvoices<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLineSettledInvoiceAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_SETTLED_INVOICE_ACCOUNT_COMBINATION: OneToOneLink<
      PaymentJournalLineSettledInvoices<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CustomerPaymentJournalLinesApi<DeSerializersT>,
      CustomerPaymentJournalHeadersApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CUSTOMER_PAYMENT_JOURNAL_LINE_RELATED_ROLE: new OneToOneLink(
        'CustomerPaymentJournalLineRelatedRole',
        this,
        linkedApis[0]
      ),
      CUSTOMER_PAYMENT_JOURNAL_HEADER_RELATED_ROLE: new OneToOneLink(
        'CustomerPaymentJournalHeaderRelatedRole',
        this,
        linkedApis[1]
      ),
      CUSTOMER_PAYMENT_JOURNAL_LINE_SETTLED_INVOICE_ACCOUNT_COMBINATION:
        new OneToOneLink(
          'CustomerPaymentJournalLineSettledInvoiceAccountCombination',
          this,
          linkedApis[2]
        )
    };
    return this;
  }

  entityConstructor = PaymentJournalLineSettledInvoices;

  requestBuilder(): PaymentJournalLineSettledInvoicesRequestBuilder<DeSerializersT> {
    return new PaymentJournalLineSettledInvoicesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PaymentJournalLineSettledInvoices<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PaymentJournalLineSettledInvoices<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PaymentJournalLineSettledInvoices<DeSerializersT>,
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
    typeof PaymentJournalLineSettledInvoices,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PaymentJournalLineSettledInvoices,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOURNAL_LINE_COMPANY: OrderableEdmTypeField<
      PaymentJournalLineSettledInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      PaymentJournalLineSettledInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_LINE_NUMBER: OrderableEdmTypeField<
      PaymentJournalLineSettledInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_NUMBER: OrderableEdmTypeField<
      PaymentJournalLineSettledInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_COMPANY: OrderableEdmTypeField<
      PaymentJournalLineSettledInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_DUE_DATE: OrderableEdmTypeField<
      PaymentJournalLineSettledInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_TO_PAYMENT_CROSS_RATE: OrderableEdmTypeField<
      PaymentJournalLineSettledInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CASH_DISCOUNT_TO_TAKE_IN_INVOICE_CURRENCY: OrderableEdmTypeField<
      PaymentJournalLineSettledInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SETTLEMENT_AMOUNT_IN_INVOICE_CURRENCY: OrderableEdmTypeField<
      PaymentJournalLineSettledInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      PaymentJournalLineSettledInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      PaymentJournalLineSettledInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLineRelatedRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_RELATED_ROLE: OneToOneLink<
      PaymentJournalLineSettledInvoices<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalHeaderRelatedRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_HEADER_RELATED_ROLE: OneToOneLink<
      PaymentJournalLineSettledInvoices<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLineSettledInvoiceAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_SETTLED_INVOICE_ACCOUNT_COMBINATION: OneToOneLink<
      PaymentJournalLineSettledInvoices<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PaymentJournalLineSettledInvoices<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link journalLineCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_LINE_COMPANY: fieldBuilder.buildEdmTypeField(
          'JournalLineCompany',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link journalBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalBatchNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link journalLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoiceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link invoiceCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_COMPANY: fieldBuilder.buildEdmTypeField(
          'InvoiceCompany',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link invoiceDueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_DUE_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceDueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link invoiceToPaymentCrossRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_TO_PAYMENT_CROSS_RATE: fieldBuilder.buildEdmTypeField(
          'InvoiceToPaymentCrossRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cashDiscountToTakeInInvoiceCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_TO_TAKE_IN_INVOICE_CURRENCY:
          fieldBuilder.buildEdmTypeField(
            'CashDiscountToTakeInInvoiceCurrency',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link settlementAmountInInvoiceCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_AMOUNT_IN_INVOICE_CURRENCY: fieldBuilder.buildEdmTypeField(
          'SettlementAmountInInvoiceCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'invoiceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'AccountDisplayValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PaymentJournalLineSettledInvoices)
      };
    }

    return this._schema;
  }
}
