/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FreeTextInvoiceHeaders } from './FreeTextInvoiceHeaders';
import { FreeTextInvoiceHeadersRequestBuilder } from './FreeTextInvoiceHeadersRequestBuilder';
import { FreeTextInvoiceLinesApi } from './FreeTextInvoiceLinesApi';
import { CustomersV3Api } from './CustomersV3Api';
import { CustomerPaymentMethodsApi } from './CustomerPaymentMethodsApi';
import { PaymentSchedulesApi } from './PaymentSchedulesApi';
import { CurrenciesApi } from './CurrenciesApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { PaymentTermsApi } from './PaymentTermsApi';
import { CashDiscountsApi } from './CashDiscountsApi';
import { NoYes } from './NoYes';
import { PaymentStub } from './PaymentStub';
import { FactureCorrectionTypeRu } from './FactureCorrectionTypeRu';
import { EfDocPresenceTypeBr } from './EfDocPresenceTypeBr';
import { InvoiceComplementaryTypeBr } from './InvoiceComplementaryTypeBr';
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
export class FreeTextInvoiceHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FreeTextInvoiceHeaders<DeSerializersT>, DeSerializersT>
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
  ): FreeTextInvoiceHeadersApi<DeSerializersT> {
    return new FreeTextInvoiceHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link custFreeTextInvoiceHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_FREE_TEXT_INVOICE_HEADER: OneToManyLink<
      FreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      FreeTextInvoiceLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link freeTextInvoiceHeaderEntityCustAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_ENTITY_CUST_ACCOUNT: OneToOneLink<
      FreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link freeTextInvoiceHeaderEntityInvoiceAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_ENTITY_INVOICE_ACCOUNT: OneToOneLink<
      FreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link freeTextInvoiceHeaderEntityMethodOfPayment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_ENTITY_METHOD_OF_PAYMENT: OneToOneLink<
      FreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link freeTextInvoiceHeaderEntityPaymentSchedule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_ENTITY_PAYMENT_SCHEDULE: OneToOneLink<
      FreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      PaymentSchedulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link freeTextInvoiceHeaderEntityCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_ENTITY_CURRENCY: OneToOneLink<
      FreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link freeTextInvoiceHeaderEntityDefaultDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_ENTITY_DEFAULT_DIMENSION: OneToOneLink<
      FreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link freeTextInvoiceHeaderEntityPaymentTerm} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_ENTITY_PAYMENT_TERM: OneToOneLink<
      FreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      PaymentTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link freeTextInvoiceHeaderEntityCashDiscount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_ENTITY_CASH_DISCOUNT: OneToOneLink<
      FreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      CashDiscountsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      FreeTextInvoiceLinesApi<DeSerializersT>,
      CustomersV3Api<DeSerializersT>,
      CustomersV3Api<DeSerializersT>,
      CustomerPaymentMethodsApi<DeSerializersT>,
      PaymentSchedulesApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      PaymentTermsApi<DeSerializersT>,
      CashDiscountsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CUST_FREE_TEXT_INVOICE_HEADER: new OneToManyLink(
        'CustFreeTextInvoiceHeader',
        this,
        linkedApis[0]
      ),
      FREE_TEXT_INVOICE_HEADER_ENTITY_CUST_ACCOUNT: new OneToOneLink(
        'FreeTextInvoiceHeaderEntityCustAccount',
        this,
        linkedApis[1]
      ),
      FREE_TEXT_INVOICE_HEADER_ENTITY_INVOICE_ACCOUNT: new OneToOneLink(
        'FreeTextInvoiceHeaderEntityInvoiceAccount',
        this,
        linkedApis[2]
      ),
      FREE_TEXT_INVOICE_HEADER_ENTITY_METHOD_OF_PAYMENT: new OneToOneLink(
        'FreeTextInvoiceHeaderEntityMethodOfPayment',
        this,
        linkedApis[3]
      ),
      FREE_TEXT_INVOICE_HEADER_ENTITY_PAYMENT_SCHEDULE: new OneToOneLink(
        'FreeTextInvoiceHeaderEntityPaymentSchedule',
        this,
        linkedApis[4]
      ),
      FREE_TEXT_INVOICE_HEADER_ENTITY_CURRENCY: new OneToOneLink(
        'FreeTextInvoiceHeaderEntityCurrency',
        this,
        linkedApis[5]
      ),
      FREE_TEXT_INVOICE_HEADER_ENTITY_DEFAULT_DIMENSION: new OneToOneLink(
        'FreeTextInvoiceHeaderEntityDefaultDimension',
        this,
        linkedApis[6]
      ),
      FREE_TEXT_INVOICE_HEADER_ENTITY_PAYMENT_TERM: new OneToOneLink(
        'FreeTextInvoiceHeaderEntityPaymentTerm',
        this,
        linkedApis[7]
      ),
      FREE_TEXT_INVOICE_HEADER_ENTITY_CASH_DISCOUNT: new OneToOneLink(
        'FreeTextInvoiceHeaderEntityCashDiscount',
        this,
        linkedApis[8]
      )
    };
    return this;
  }

  entityConstructor = FreeTextInvoiceHeaders;

  requestBuilder(): FreeTextInvoiceHeadersRequestBuilder<DeSerializersT> {
    return new FreeTextInvoiceHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FreeTextInvoiceHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FreeTextInvoiceHeaders<DeSerializersT>,
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
    typeof FreeTextInvoiceHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FreeTextInvoiceHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_IDENTIFIER: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUSTOMER_REFERENCE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT_ID: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_DATE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    E_INVOICE_ACCOUNT_CODE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_ACCOUNT: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_SCHEDULE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_PAYMENT_FINE_CODE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_FINAL_USER: EnumField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CENTRAL_BANK_PURPOSE_CODE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIRO_TYPE: EnumField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      PaymentStub,
      true,
      true
    >;
    CORRECTED_PERIOD: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    METHOD_OF_PAYMENT: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_POSTED: EnumField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_LUMP_SUM_RECOVERY_TEXT_PRINTED: EnumField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_PAYMENT_FINANCIAL_INTEREST_CODE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CORRECTED_FACTURE_EXTERNAL_ID: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADJUSTING_INVOICE_DATE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CASH_DISCOUNT_CODE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_INVOICE_ID: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ONE_TIME_CUSTOMER: EnumField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_TERMS_BASE_DATE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CFPS_CODE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    E_INVOICE_IS_LINE_SPECIFIC: EnumField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_ORIGIN_CODE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_ESTABLISHMENT_ID: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CENTRAL_BANK_PURPOSE_TEXT: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CFOP_CODE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_SEQUENCE_GROUP: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_GROUP: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_ON_PAYMENT: EnumField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_FLOW_FORECAST: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_TAX_GROUP_ID: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREE_TEXT_NUMBER: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CORRECTION: EnumField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTPONED_VAT: EnumField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMPLIMENTED_INVOICE_ID: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCL_TAX: EnumField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_TERMS_BASE_DAYS: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_ITEM_GROUP_ID: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_DOCUMENT_OPERATION_TYPE_ID: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_DOCUMENT_LINE_ID: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    SALES_DATE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CORRECTED_INVOICE_DATE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_NAME: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECTION_TYPE: EnumField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      FactureCorrectionTypeRu,
      true,
      true
    >;
    VAT_DUE_DATE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BILLING_CLASSIFICATION: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIRECT_DEBIT_MANDATE_REFERENCE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONSIGNOR_ACCOUNT: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_OPERATION_PRESENCE_TYPE: EnumField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      EfDocPresenceTypeBr,
      true,
      true
    >;
    CASH_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CORRECTED_FACTURE_DATE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_SERVICE_DELIVERY_ADDRESS_BASED: EnumField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUSTOMER_REQUISITION: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPLEMENTARY_FISCAL_DOCUMENT_TYPE: EnumField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      InvoiceComplementaryTypeBr,
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NON_REAL_REVENUE: EnumField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_POSTED_VIA_INTERCOMPANY: EnumField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CORRECTED_INVOICE_ID: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_DOCUMENT_TYPE_ID: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TERMS_OF_PAYMENT: OrderableEdmTypeField<
      FreeTextInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link custFreeTextInvoiceHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_FREE_TEXT_INVOICE_HEADER: OneToManyLink<
      FreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      FreeTextInvoiceLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link freeTextInvoiceHeaderEntityCustAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_ENTITY_CUST_ACCOUNT: OneToOneLink<
      FreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link freeTextInvoiceHeaderEntityInvoiceAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_ENTITY_INVOICE_ACCOUNT: OneToOneLink<
      FreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link freeTextInvoiceHeaderEntityMethodOfPayment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_ENTITY_METHOD_OF_PAYMENT: OneToOneLink<
      FreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link freeTextInvoiceHeaderEntityPaymentSchedule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_ENTITY_PAYMENT_SCHEDULE: OneToOneLink<
      FreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      PaymentSchedulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link freeTextInvoiceHeaderEntityCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_ENTITY_CURRENCY: OneToOneLink<
      FreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link freeTextInvoiceHeaderEntityDefaultDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_ENTITY_DEFAULT_DIMENSION: OneToOneLink<
      FreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link freeTextInvoiceHeaderEntityPaymentTerm} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_ENTITY_PAYMENT_TERM: OneToOneLink<
      FreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      PaymentTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link freeTextInvoiceHeaderEntityCashDiscount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_ENTITY_CASH_DISCOUNT: OneToOneLink<
      FreeTextInvoiceHeaders<DeSerializersT>,
      DeSerializersT,
      CashDiscountsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FreeTextInvoiceHeaders<DeSerializers>>;
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
         * Static representation of the {@link invoiceIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'InvoiceIdentifier',
          'Edm.Int64',
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
         * Static representation of the {@link bankAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'BankAccountId',
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
         * Static representation of the {@link eInvoiceAccountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_INVOICE_ACCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'EInvoiceAccountCode',
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
         * Static representation of the {@link consigneeAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ConsigneeAccount',
          'Edm.String',
          true
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
         * Static representation of the {@link customerPaymentFineCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_PAYMENT_FINE_CODE: fieldBuilder.buildEdmTypeField(
          'CustomerPaymentFineCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isFinalUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FINAL_USER: fieldBuilder.buildEnumField('IsFinalUser', NoYes, true),
        /**
         * Static representation of the {@link centralBankPurposeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CENTRAL_BANK_PURPOSE_CODE: fieldBuilder.buildEdmTypeField(
          'CentralBankPurposeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giroType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIRO_TYPE: fieldBuilder.buildEnumField('GiroType', PaymentStub, true),
        /**
         * Static representation of the {@link correctedPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED_PERIOD: fieldBuilder.buildEdmTypeField(
          'CorrectedPeriod',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link isLumpSumRecoveryTextPrinted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LUMP_SUM_RECOVERY_TEXT_PRINTED: fieldBuilder.buildEnumField(
          'IsLumpSumRecoveryTextPrinted',
          NoYes,
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
         * Static representation of the {@link invoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerPaymentFinancialInterestCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_PAYMENT_FINANCIAL_INTEREST_CODE:
          fieldBuilder.buildEdmTypeField(
            'CustomerPaymentFinancialInterestCode',
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
         * Static representation of the {@link correctedFactureExternalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED_FACTURE_EXTERNAL_ID: fieldBuilder.buildEdmTypeField(
          'CorrectedFactureExternalId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link adjustingInvoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTING_INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'AdjustingInvoiceDate',
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
         * Static representation of the {@link externalInvoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'ExternalInvoiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOneTimeCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ONE_TIME_CUSTOMER: fieldBuilder.buildEnumField(
          'IsOneTimeCustomer',
          NoYes,
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
         * Static representation of the {@link cfpsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFPS_CODE: fieldBuilder.buildEdmTypeField(
          'CFPSCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link eInvoiceIsLineSpecific} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_INVOICE_IS_LINE_SPECIFIC: fieldBuilder.buildEnumField(
          'EInvoiceIsLineSpecific',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceOriginCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ORIGIN_CODE: fieldBuilder.buildEdmTypeField(
          'InvoiceOriginCode',
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
         * Static representation of the {@link fiscalEstablishmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_ESTABLISHMENT_ID: fieldBuilder.buildEdmTypeField(
          'FiscalEstablishmentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link centralBankPurposeText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CENTRAL_BANK_PURPOSE_TEXT: fieldBuilder.buildEdmTypeField(
          'CentralBankPurposeText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cfopCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFOP_CODE: fieldBuilder.buildEdmTypeField(
          'CFOPCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberSequenceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_GROUP: fieldBuilder.buildEdmTypeField(
          'numberSequenceGroup',
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
         * Static representation of the {@link vatOnPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_ON_PAYMENT: fieldBuilder.buildEnumField(
          'VATOnPayment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cashFlowForecast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_FLOW_FORECAST: fieldBuilder.buildEdmTypeField(
          'CashFlowForecast',
          'Edm.Int32',
          false
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
         * Static representation of the {@link freeTextNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_TEXT_NUMBER: fieldBuilder.buildEdmTypeField(
          'FreeTextNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isCorrection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CORRECTION: fieldBuilder.buildEnumField('IsCorrection', NoYes, true),
        /**
         * Static representation of the {@link postponedVat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTPONED_VAT: fieldBuilder.buildEnumField('PostponedVAT', NoYes, true),
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
         * Static representation of the {@link postingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PostingProfile',
          'Edm.String',
          true
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
         * Static representation of the {@link fiscalDocumentOperationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_OPERATION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentOperationTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationDocumentLineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_DOCUMENT_LINE_ID: fieldBuilder.buildEdmTypeField(
          'TransportationDocumentLineId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link salesDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_DATE: fieldBuilder.buildEdmTypeField(
          'SalesDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link correctedInvoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED_INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'CorrectedInvoiceDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link invoiceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_NAME: fieldBuilder.buildEdmTypeField(
          'InvoiceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link correctionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_TYPE: fieldBuilder.buildEnumField(
          'CorrectionType',
          FactureCorrectionTypeRu,
          true
        ),
        /**
         * Static representation of the {@link vatDueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_DUE_DATE: fieldBuilder.buildEdmTypeField(
          'VatDueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link billingClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_CLASSIFICATION: fieldBuilder.buildEdmTypeField(
          'BillingClassification',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link directDebitMandateReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT_DEBIT_MANDATE_REFERENCE: fieldBuilder.buildEdmTypeField(
          'DirectDebitMandateReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overrideSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_SALES_TAX: fieldBuilder.buildEnumField(
          'OverrideSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link consignorAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNOR_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ConsignorAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalOperationPresenceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_OPERATION_PRESENCE_TYPE: fieldBuilder.buildEnumField(
          'FiscalOperationPresenceType',
          EfDocPresenceTypeBr,
          true
        ),
        /**
         * Static representation of the {@link cashDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'CashDiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link correctedFactureDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED_FACTURE_DATE: fieldBuilder.buildEdmTypeField(
          'CorrectedFactureDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isServiceDeliveryAddressBased} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SERVICE_DELIVERY_ADDRESS_BASED: fieldBuilder.buildEnumField(
          'IsServiceDeliveryAddressBased',
          NoYes,
          true
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
         * Static representation of the {@link complementaryFiscalDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLEMENTARY_FISCAL_DOCUMENT_TYPE: fieldBuilder.buildEnumField(
          'ComplementaryFiscalDocumentType',
          InvoiceComplementaryTypeBr,
          true
        ),
        /**
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nonRealRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_REAL_REVENUE: fieldBuilder.buildEnumField(
          'NonRealRevenue',
          NoYes,
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
         * Static representation of the {@link correctedInvoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED_INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'CorrectedInvoiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalDocumentTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentTypeId',
          'Edm.String',
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
        ALL_FIELDS: new AllFields('*', FreeTextInvoiceHeaders)
      };
    }

    return this._schema;
  }
}
