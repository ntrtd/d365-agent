/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternallyMaintainedCustomerSalesInvoiceHeaders } from './ExternallyMaintainedCustomerSalesInvoiceHeaders';
import { ExternallyMaintainedCustomerSalesInvoiceHeadersRequestBuilder } from './ExternallyMaintainedCustomerSalesInvoiceHeadersRequestBuilder';
import { SalesOriginType } from './SalesOriginType';
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
export class ExternallyMaintainedCustomerSalesInvoiceHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializersT>,
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
  ): ExternallyMaintainedCustomerSalesInvoiceHeadersApi<DeSerializersT> {
    return new ExternallyMaintainedCustomerSalesInvoiceHeadersApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExternallyMaintainedCustomerSalesInvoiceHeaders;

  requestBuilder(): ExternallyMaintainedCustomerSalesInvoiceHeadersRequestBuilder<DeSerializersT> {
    return new ExternallyMaintainedCustomerSalesInvoiceHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializersT>,
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
    typeof ExternallyMaintainedCustomerSalesInvoiceHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExternallyMaintainedCustomerSalesInvoiceHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_NUMBER: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEDGER_VOUCHER: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_TAX_AMOUNT: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_DISCOUNT_CUSTOMER_GROUP_CODE: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_ADDRESS_STREET: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_CHARGE_AMOUNT: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_NUMBER: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TERMS_CODE: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_ORIGIN_TYPE: EnumField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      SalesOriginType,
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_RESPONSIBLE_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_TERMS_NAME: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_MODE_CODE: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_CITY: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_HEADER_TAX_AMOUNT: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_ADDRESS_STATE: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMERS_ORDER_REFERENCE: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_INVOICE_AMOUNT: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      ExternallyMaintainedCustomerSalesInvoiceHeaders<DeSerializers>
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
         * Static representation of the {@link invoiceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceNumber',
          'Edm.String',
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
         * Static representation of the {@link ledgerVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_VOUCHER: fieldBuilder.buildEdmTypeField(
          'LedgerVoucher',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link invoiceAddressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressCountryRegionISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoiceAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalDiscountCustomerGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT_CUSTOMER_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'TotalDiscountCustomerGroupCode',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoiceAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalChargeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_CHARGE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalChargeAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalDiscountAmount',
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
         * Static representation of the {@link salesOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryTermsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TERMS_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryTermsCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesOrderOriginType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_ORIGIN_TYPE: fieldBuilder.buildEnumField(
          'SalesOrderOriginType',
          SalesOriginType,
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
         * Static representation of the {@link salesOrderResponsiblePersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_RESPONSIBLE_PERSONNEL_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'SalesOrderResponsiblePersonnelNumber',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link paymentTermsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERMS_NAME: fieldBuilder.buildEdmTypeField(
          'PaymentTermsName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryModeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_MODE_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryModeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceCustomerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceCustomerAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceHeaderTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_HEADER_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceHeaderTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoiceAddressState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_STATE: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customersOrderReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMERS_ORDER_REFERENCE: fieldBuilder.buildEdmTypeField(
          'CustomersOrderReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalInvoiceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_INVOICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalInvoiceAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          ExternallyMaintainedCustomerSalesInvoiceHeaders
        )
      };
    }

    return this._schema;
  }
}
