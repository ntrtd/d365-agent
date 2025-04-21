/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustAdvancedInvoices } from './CustAdvancedInvoices';
import { CustAdvancedInvoicesRequestBuilder } from './CustAdvancedInvoicesRequestBuilder';
import { NoYes } from './NoYes';
import { Listcode } from './Listcode';
import { CzAdvanceInvoiceStatus } from './CzAdvanceInvoiceStatus';
import { Timezone } from './Timezone';
import { PlFiscalDocState } from './PlFiscalDocState';
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
export class CustAdvancedInvoicesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustAdvancedInvoices<DeSerializersT>, DeSerializersT>
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
  ): CustAdvancedInvoicesApi<DeSerializersT> {
    return new CustAdvancedInvoicesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustAdvancedInvoices;

  requestBuilder(): CustAdvancedInvoicesRequestBuilder<DeSerializersT> {
    return new CustAdvancedInvoicesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustAdvancedInvoices<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustAdvancedInvoices<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustAdvancedInvoices<DeSerializersT>,
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
    typeof CustAdvancedInvoices,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustAdvancedInvoices,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEAD_ID: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_COUNTY: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TERMS_OF_PAYMENT: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_VAT: EnumField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_DISTRICT_NAME: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_LOCATION_ID: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LISTCODE: EnumField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      Listcode,
      true,
      true
    >;
    ONE_TIME_CUSTOMER: EnumField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      CzAdvanceInvoiceStatus,
      true,
      true
    >;
    METHOD_OF_PAYMENT: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATE_TAX_DOCUMENT: EnumField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETAIL_TERMINAL_ID: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_STORE_ID: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_STATE: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREPAYMENT_POSTING_PROFILE: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECIPIENT: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_CUR: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSTED: EnumField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_TXT: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_GROUP: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_SEQUENCE_GROUP: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_DUNS_NUMBER: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_VAT_UNTIL: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSTAL_ADDRESS: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DELIVERY_VALID_TO: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FISCAL_ORDER_ACCOUNT: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_POST_BOX: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_SPECIFICATION: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ZIP_CODE: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_COUNTRY_REGION_ID: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_DOCUMENT_DATE: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RETAIL_TRANSACTION_ID: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_CITY: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETAIL_ORDER_REFERENCE_ID: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_LONGITUDE: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_TIME_ZONE: EnumField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    SALES_DOCUMENT_STATUS: EnumField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      PlFiscalDocState,
      true,
      true
    >;
    CORRECTION_DESCRIPTION: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_IS_PRIVATE: EnumField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_LATITUDE: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_SCHEDULE: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADVANCE_INVOICE_VOUCHER: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADVANCE_INVOICE: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_STREET: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_INVOICE_ACCOUNT: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_STREET_NUMBER: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSTANT_SYMBOL: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_DESCRIPTION: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_PRINTER: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_VALID_FROM: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRIANGULATION: EnumField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SECONDARY_EXCHANGE_RATE: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VAT_REGISTER_DATE: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_AMOUNT: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      CustAdvancedInvoices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CustAdvancedInvoices<DeSerializers>>;
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
         * Static representation of the {@link headId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEAD_ID: fieldBuilder.buildEdmTypeField('HeadId', 'Edm.Guid', false),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveryCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_COUNTY: fieldBuilder.buildEdmTypeField(
          'DeliveryCounty',
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
        /**
         * Static representation of the {@link postVat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_VAT: fieldBuilder.buildEnumField('PostVAT', NoYes, true),
        /**
         * Static representation of the {@link deliveryDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LISTCODE: fieldBuilder.buildEnumField('Listcode', Listcode, true),
        /**
         * Static representation of the {@link oneTimeCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONE_TIME_CUSTOMER: fieldBuilder.buildEnumField(
          'OneTimeCustomer',
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
         * Static representation of the {@link countryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'CountryRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          CzAdvanceInvoiceStatus,
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
         * Static representation of the {@link createTaxDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_TAX_DOCUMENT: fieldBuilder.buildEnumField(
          'CreateTaxDocument',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link retailTerminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'RetailTerminalId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER: fieldBuilder.buildEdmTypeField(
          'SalesOrder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailStoreId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_STORE_ID: fieldBuilder.buildEdmTypeField(
          'RetailStoreId',
          'Edm.String',
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
         * Static representation of the {@link deliveryState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_STATE: fieldBuilder.buildEdmTypeField(
          'DeliveryState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prepaymentPostingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPAYMENT_POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PrepaymentPostingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recipient} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECIPIENT: fieldBuilder.buildEdmTypeField(
          'Recipient',
          'Edm.String',
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
         * Static representation of the {@link taxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxItemGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'AmountCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link posted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED: fieldBuilder.buildEnumField('Posted', NoYes, true),
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
         * Static representation of the {@link invoiceTxt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_TXT: fieldBuilder.buildEdmTypeField(
          'InvoiceTxt',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_GROUP: fieldBuilder.buildEdmTypeField(
          'CustGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberSequenceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_GROUP: fieldBuilder.buildEdmTypeField(
          'NumberSequenceGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryDunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryDunsNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postVatUntil} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_VAT_UNTIL: fieldBuilder.buildEdmTypeField(
          'PostVATUntil',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link postalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTAL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'PostalAddress',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link deliveryValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_VALID_TO: fieldBuilder.buildEdmTypeField(
          'DeliveryValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link fiscalOrderAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_ORDER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'FiscalOrderAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link language} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE: fieldBuilder.buildEdmTypeField(
          'Language',
          'Edm.String',
          true
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
         * Static representation of the {@link deliveryPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_POST_BOX: fieldBuilder.buildEdmTypeField(
          'DeliveryPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryCountryRegionISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentSpecification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SPECIFICATION: fieldBuilder.buildEdmTypeField(
          'PaymentSpecification',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'DeliveryBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalDocumentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link retailTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'RetailTransactionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_CITY: fieldBuilder.buildEdmTypeField(
          'DeliveryCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link taxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxGroup',
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
         * Static representation of the {@link exchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link retailOrderReferenceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_ORDER_REFERENCE_ID: fieldBuilder.buildEdmTypeField(
          'RetailOrderReferenceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'DeliveryAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveryTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TIME_ZONE: fieldBuilder.buildEnumField(
          'DeliveryTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link salesDocumentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_DOCUMENT_STATUS: fieldBuilder.buildEnumField(
          'SalesDocumentStatus',
          PlFiscalDocState,
          true
        ),
        /**
         * Static representation of the {@link correctionDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'CorrectionDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_IS_PRIVATE: fieldBuilder.buildEnumField(
          'DeliveryIsPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deliveryLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_LATITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryLatitude',
          'Edm.Decimal',
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
         * Static representation of the {@link paymentSchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SCHEDULE: fieldBuilder.buildEdmTypeField(
          'PaymentSchedule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link advanceInvoiceVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_INVOICE_VOUCHER: fieldBuilder.buildEdmTypeField(
          'AdvanceInvoiceVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link advanceInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_INVOICE: fieldBuilder.buildEdmTypeField(
          'AdvanceInvoice',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offsetLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OffsetLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_STREET: fieldBuilder.buildEdmTypeField(
          'DeliveryStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalInvoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_INVOICE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'FiscalInvoiceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link constantSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSTANT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'ConstantSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DeliveryDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalPrinter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_PRINTER: fieldBuilder.buildEdmTypeField(
          'FiscalPrinter',
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
         * Static representation of the {@link deliveryValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'DeliveryValidFrom',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link triangulation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRIANGULATION: fieldBuilder.buildEnumField(
          'Triangulation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link secondaryExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECONDARY_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'SecondaryExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vatRegisterDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_REGISTER_DATE: fieldBuilder.buildEdmTypeField(
          'VATRegisterDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link invoiceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAmount',
          'Edm.Decimal',
          false
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustAdvancedInvoices)
      };
    }

    return this._schema;
  }
}
