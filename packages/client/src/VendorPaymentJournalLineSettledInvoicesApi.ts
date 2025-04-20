/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorPaymentJournalLineSettledInvoices } from './VendorPaymentJournalLineSettledInvoices';
import { VendorPaymentJournalLineSettledInvoicesRequestBuilder } from './VendorPaymentJournalLineSettledInvoicesRequestBuilder';
import { VendorPaymentJournalHeadersApi } from './VendorPaymentJournalHeadersApi';
import { VendorPaymentJournalLinesApi } from './VendorPaymentJournalLinesApi';
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
export class VendorPaymentJournalLineSettledInvoicesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      VendorPaymentJournalLineSettledInvoices<DeSerializersT>,
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
  ): VendorPaymentJournalLineSettledInvoicesApi<DeSerializersT> {
    return new VendorPaymentJournalLineSettledInvoicesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link vendorPaymentJournalHeaderRelatedRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_HEADER_RELATED_ROLE: OneToOneLink<
      VendorPaymentJournalLineSettledInvoices<DeSerializersT>,
      DeSerializersT,
      VendorPaymentJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPaymentJournalLineEntityRelatedRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_LINE_ENTITY_RELATED_ROLE: OneToOneLink<
      VendorPaymentJournalLineSettledInvoices<DeSerializersT>,
      DeSerializersT,
      VendorPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPaymentJournalLineSettledInvoiceAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_LINE_SETTLED_INVOICE_ACCOUNT_COMBINATION: OneToOneLink<
      VendorPaymentJournalLineSettledInvoices<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      VendorPaymentJournalHeadersApi<DeSerializersT>,
      VendorPaymentJournalLinesApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      VENDOR_PAYMENT_JOURNAL_HEADER_RELATED_ROLE: new OneToOneLink(
        'VendorPaymentJournalHeaderRelatedRole',
        this,
        linkedApis[0]
      ),
      VENDOR_PAYMENT_JOURNAL_LINE_ENTITY_RELATED_ROLE: new OneToOneLink(
        'VendorPaymentJournalLineEntityRelatedRole',
        this,
        linkedApis[1]
      ),
      VENDOR_PAYMENT_JOURNAL_LINE_SETTLED_INVOICE_ACCOUNT_COMBINATION:
        new OneToOneLink(
          'VendorPaymentJournalLineSettledInvoiceAccountCombination',
          this,
          linkedApis[2]
        )
    };
    return this;
  }

  entityConstructor = VendorPaymentJournalLineSettledInvoices;

  requestBuilder(): VendorPaymentJournalLineSettledInvoicesRequestBuilder<DeSerializersT> {
    return new VendorPaymentJournalLineSettledInvoicesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    VendorPaymentJournalLineSettledInvoices<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendorPaymentJournalLineSettledInvoices<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendorPaymentJournalLineSettledInvoices<DeSerializersT>,
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
    typeof VendorPaymentJournalLineSettledInvoices,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendorPaymentJournalLineSettledInvoices,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOURNAL_LINE_COMPANY: OrderableEdmTypeField<
      VendorPaymentJournalLineSettledInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      VendorPaymentJournalLineSettledInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_LINE_NUMBER: OrderableEdmTypeField<
      VendorPaymentJournalLineSettledInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_NUMBER: OrderableEdmTypeField<
      VendorPaymentJournalLineSettledInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_COMPANY: OrderableEdmTypeField<
      VendorPaymentJournalLineSettledInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_DUE_DATE: OrderableEdmTypeField<
      VendorPaymentJournalLineSettledInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_TO_PAYMENT_CROSS_RATE: OrderableEdmTypeField<
      VendorPaymentJournalLineSettledInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CASH_DISCOUNT_TO_TAKE_IN_INVOICE_CURRENCY: OrderableEdmTypeField<
      VendorPaymentJournalLineSettledInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SETTLEMENT_AMOUNT_IN_INVOICE_CURRENCY: OrderableEdmTypeField<
      VendorPaymentJournalLineSettledInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      VendorPaymentJournalLineSettledInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      VendorPaymentJournalLineSettledInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPaymentJournalHeaderRelatedRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_HEADER_RELATED_ROLE: OneToOneLink<
      VendorPaymentJournalLineSettledInvoices<DeSerializersT>,
      DeSerializersT,
      VendorPaymentJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPaymentJournalLineEntityRelatedRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_LINE_ENTITY_RELATED_ROLE: OneToOneLink<
      VendorPaymentJournalLineSettledInvoices<DeSerializersT>,
      DeSerializersT,
      VendorPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorPaymentJournalLineSettledInvoiceAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_LINE_SETTLED_INVOICE_ACCOUNT_COMBINATION: OneToOneLink<
      VendorPaymentJournalLineSettledInvoices<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      VendorPaymentJournalLineSettledInvoices<DeSerializers>
    >;
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
        ALL_FIELDS: new AllFields('*', VendorPaymentJournalLineSettledInvoices)
      };
    }

    return this._schema;
  }
}
