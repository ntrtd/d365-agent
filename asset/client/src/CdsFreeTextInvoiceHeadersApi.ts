/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CdsFreeTextInvoiceHeaders } from './CdsFreeTextInvoiceHeaders';
import { CdsFreeTextInvoiceHeadersRequestBuilder } from './CdsFreeTextInvoiceHeadersRequestBuilder';
import { CdsFreeTextInvoiceLinesApi } from './CdsFreeTextInvoiceLinesApi';
import { CurrenciesApi } from './CurrenciesApi';
import { CustomersV3Api } from './CustomersV3Api';
import { CashDiscountsApi } from './CashDiscountsApi';
import { CustomerPaymentMethodsApi } from './CustomerPaymentMethodsApi';
import { PaymentTermsApi } from './PaymentTermsApi';
import { CustomerInvoiceOriginType } from './CustomerInvoiceOriginType';
import { PaymentStub } from './PaymentStub';
import { NoYes } from './NoYes';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CdsFreeTextInvoiceHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CdsFreeTextInvoiceHeaders<DeSerializersT>, DeSerializersT>
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
  ): CdsFreeTextInvoiceHeadersApi<DeSerializersT> {
    return new CdsFreeTextInvoiceHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link cdsFreeTextInvoiceLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_FREE_TEXT_INVOICE_LINES: OneToManyLink<
      CdsFreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      CdsFreeTextInvoiceLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      CdsFreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link orderingCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDERING_CUSTOMER: OneToOneLink<
      CdsFreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cashDiscount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CASH_DISCOUNT: OneToOneLink<
      CdsFreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      CashDiscountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_METHOD: OneToOneLink<
      CdsFreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentTerm} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_TERM: OneToOneLink<
      CdsFreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      PaymentTermsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CdsFreeTextInvoiceLinesApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      CustomersV3Api<DeSerializersT>,
      CashDiscountsApi<DeSerializersT>,
      CustomerPaymentMethodsApi<DeSerializersT>,
      PaymentTermsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CDS_FREE_TEXT_INVOICE_LINES: new OneToManyLink(
        'CDSFreeTextInvoiceLines',
        this,
        linkedApis[0]
      ),
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[1]),
      ORDERING_CUSTOMER: new OneToOneLink(
        'OrderingCustomer',
        this,
        linkedApis[2]
      ),
      CASH_DISCOUNT: new OneToOneLink('CashDiscount', this, linkedApis[3]),
      PAYMENT_METHOD: new OneToOneLink('PaymentMethod', this, linkedApis[4]),
      PAYMENT_TERM: new OneToOneLink('PaymentTerm', this, linkedApis[5])
    };
    return this;
  }

  entityConstructor = CdsFreeTextInvoiceHeaders;

  requestBuilder(): CdsFreeTextInvoiceHeadersRequestBuilder<DeSerializersT> {
    return new CdsFreeTextInvoiceHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CdsFreeTextInvoiceHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CdsFreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CdsFreeTextInvoiceHeaders<DeSerializersT>,
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
    typeof CdsFreeTextInvoiceHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CdsFreeTextInvoiceHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXTERNAL_INVOICE_ID: OrderableEdmTypeField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_REFERENCE: OrderableEdmTypeField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_DATE: OrderableEdmTypeField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAYMENT_SCHEDULE: OrderableEdmTypeField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ORIGIN_TYPE: EnumField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      CustomerInvoiceOriginType,
      true,
      true
    >;
    GIRO_TYPE: EnumField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      PaymentStub,
      true,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    METHOD_OF_PAYMENT: OrderableEdmTypeField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_POSTED: EnumField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CASH_DISCOUNT_CODE: OrderableEdmTypeField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_TERMS_BASE_DATE: OrderableEdmTypeField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_GROUP: OrderableEdmTypeField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREE_TEXT_NUMBER: OrderableEdmTypeField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP_ID: OrderableEdmTypeField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPLIMENTED_INVOICE_ID: OrderableEdmTypeField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCL_TAX: EnumField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_TERMS_BASE_DAYS: OrderableEdmTypeField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_TAX_ITEM_GROUP_ID: OrderableEdmTypeField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_NAME: OrderableEdmTypeField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUSTOMER_REQUISITION: OrderableEdmTypeField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_POSTED_VIA_INTERCOMPANY: EnumField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TERMS_OF_PAYMENT: OrderableEdmTypeField<
      CdsFreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsFreeTextInvoiceLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_FREE_TEXT_INVOICE_LINES: OneToManyLink<
      CdsFreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      CdsFreeTextInvoiceLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      CdsFreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link orderingCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDERING_CUSTOMER: OneToOneLink<
      CdsFreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cashDiscount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CASH_DISCOUNT: OneToOneLink<
      CdsFreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      CashDiscountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_METHOD: OneToOneLink<
      CdsFreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentTerm} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_TERM: OneToOneLink<
      CdsFreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      PaymentTermsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CdsFreeTextInvoiceHeaders<DeSerializers>>;
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
         * Static representation of the {@link externalInvoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'ExternalInvoiceId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link customerReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REFERENCE: fieldBuilder.buildEdmTypeField(
          'CustomerReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashDiscountDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_DATE: fieldBuilder.buildEdmTypeField(
          'CashDiscountDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link paymentSchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SCHEDULE: fieldBuilder.buildEdmTypeField(
          'PaymentSchedule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'ContactPersonId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceOriginType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ORIGIN_TYPE: fieldBuilder.buildEnumField(
          'InvoiceOriginType',
          CustomerInvoiceOriginType,
          true
        ),
        /**
         * Static representation of the {@link giroType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIRO_TYPE: fieldBuilder.buildEnumField('GiroType', PaymentStub, true),
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
         * Static representation of the {@link methodOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        METHOD_OF_PAYMENT: fieldBuilder.buildEdmTypeField(
          'MethodOfPayment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POSTED: fieldBuilder.buildEnumField('IsPosted', NoYes, true),
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
         * Static representation of the {@link invoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'DocumentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link cashDiscountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'CashDiscountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentTermsBaseDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERMS_BASE_DATE: fieldBuilder.buildEdmTypeField(
          'PaymentTermsBaseDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link customerGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_GROUP: fieldBuilder.buildEdmTypeField(
          'CustomerGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freeTextNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_TEXT_NUMBER: fieldBuilder.buildEdmTypeField(
          'FreeTextNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link complimentedInvoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLIMENTED_INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'ComplimentedInvoiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inclTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCL_TAX: fieldBuilder.buildEnumField('InclTax', NoYes, true),
        /**
         * Static representation of the {@link paymentTermsBaseDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERMS_BASE_DAYS: fieldBuilder.buildEdmTypeField(
          'PaymentTermsBaseDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link salesTaxItemGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_ITEM_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SalesTaxItemGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_NAME: fieldBuilder.buildEdmTypeField(
          'InvoiceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE: fieldBuilder.buildEdmTypeField(
          'DueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link invoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link customerRequisition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REQUISITION: fieldBuilder.buildEdmTypeField(
          'CustomerRequisition',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPostedViaIntercompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POSTED_VIA_INTERCOMPANY: fieldBuilder.buildEnumField(
          'IsPostedViaIntercompany',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link termsOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMS_OF_PAYMENT: fieldBuilder.buildEdmTypeField(
          'TermsOfPayment',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CdsFreeTextInvoiceHeaders)
      };
    }

    return this._schema;
  }
}
