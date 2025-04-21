/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesInvoiceHeadersV4 } from './SalesInvoiceHeadersV4';
import { SalesInvoiceHeadersV4RequestBuilder } from './SalesInvoiceHeadersV4RequestBuilder';
import { CdsSalesOrderHeadersApi } from './CdsSalesOrderHeadersApi';
import { SalesOrderOriginCodesApi } from './SalesOrderOriginCodesApi';
import { D365SalesOrderHeadersApi } from './D365SalesOrderHeadersApi';
import { SalesInvoiceV4LinesApi } from './SalesInvoiceV4LinesApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class SalesInvoiceHeadersV4Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesInvoiceHeadersV4<DeSerializersT>, DeSerializersT>
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
  ): SalesInvoiceHeadersV4Api<DeSerializersT> {
    return new SalesInvoiceHeadersV4Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderHeaderCds} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADER_CDS: OneToOneLink<
      SalesInvoiceHeadersV4<DeSerializersT>,
      DeSerializersT,
      CdsSalesOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderOrigin} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_ORIGIN: OneToOneLink<
      SalesInvoiceHeadersV4<DeSerializersT>,
      DeSerializersT,
      SalesOrderOriginCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderHeaderD365Sales} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADER_D_365_SALES: OneToOneLink<
      SalesInvoiceHeadersV4<DeSerializersT>,
      DeSerializersT,
      D365SalesOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesInvoiceLinesV4} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_INVOICE_LINES_V_4: OneToManyLink<
      SalesInvoiceHeadersV4<DeSerializersT>,
      DeSerializersT,
      SalesInvoiceV4LinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CdsSalesOrderHeadersApi<DeSerializersT>,
      SalesOrderOriginCodesApi<DeSerializersT>,
      D365SalesOrderHeadersApi<DeSerializersT>,
      SalesInvoiceV4LinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SALES_ORDER_HEADER_CDS: new OneToOneLink(
        'SalesOrderHeaderCDS',
        this,
        linkedApis[0]
      ),
      SALES_ORDER_ORIGIN: new OneToOneLink(
        'SalesOrderOrigin',
        this,
        linkedApis[1]
      ),
      SALES_ORDER_HEADER_D_365_SALES: new OneToOneLink(
        'SalesOrderHeaderD365Sales',
        this,
        linkedApis[2]
      ),
      SALES_INVOICE_LINES_V_4: new OneToManyLink(
        'SalesInvoiceLinesV4',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = SalesInvoiceHeadersV4;

  requestBuilder(): SalesInvoiceHeadersV4RequestBuilder<DeSerializersT> {
    return new SalesInvoiceHeadersV4RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesInvoiceHeadersV4<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesInvoiceHeadersV4<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesInvoiceHeadersV4<DeSerializersT>,
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
    typeof SalesInvoiceHeadersV4,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesInvoiceHeadersV4,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_NUMBER: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEDGER_VOUCHER: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ORDER_ORIGIN_CODE: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TERMS_CODE: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_HEADER_TAX_AMOUNT: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_ORDER_NUMBER: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DISCOUNT: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMERS_ORDER_REFERENCE: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_RESPONSIBLE_PERSONNEL_NUMBER: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_CHARGE_AMOUNT: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_INVOICE_AMOUNT: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_ADDRESS_STREET: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_DISCOUNT_CUSTOMER_GROUP_CODE: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_MODE_CODE: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_LINE_DISCOUNT: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_ADDRESS_CITY: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_TAX_AMOUNT: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_TERMS_NAME: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_ADDRESS_STATE: OrderableEdmTypeField<
      SalesInvoiceHeadersV4<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderHeaderCds} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADER_CDS: OneToOneLink<
      SalesInvoiceHeadersV4<DeSerializersT>,
      DeSerializersT,
      CdsSalesOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderOrigin} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_ORIGIN: OneToOneLink<
      SalesInvoiceHeadersV4<DeSerializersT>,
      DeSerializersT,
      SalesOrderOriginCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderHeaderD365Sales} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADER_D_365_SALES: OneToOneLink<
      SalesInvoiceHeadersV4<DeSerializersT>,
      DeSerializersT,
      D365SalesOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesInvoiceLinesV4} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_INVOICE_LINES_V_4: OneToManyLink<
      SalesInvoiceHeadersV4<DeSerializersT>,
      DeSerializersT,
      SalesInvoiceV4LinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesInvoiceHeadersV4<DeSerializers>>;
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
         * Static representation of the {@link salesOrderOriginCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_ORIGIN_CODE: fieldBuilder.buildEdmTypeField(
          'SalesOrderOriginCode',
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
         * Static representation of the {@link invoiceCustomerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceCustomerAccountNumber',
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
         * Static representation of the {@link deliveryTermsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TERMS_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryTermsCode',
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
         * Static representation of the {@link salesOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'EndDiscount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link totalChargeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_CHARGE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalChargeAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link invoiceAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressZipCode',
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
         * Static representation of the {@link totalDiscountCustomerGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT_CUSTOMER_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'TotalDiscountCustomerGroupCode',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link totalLineDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_LINE_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'TotalLineDiscount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link invoiceAddressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ADDRESS_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'InvoiceAddressCountryRegionISOCode',
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
         * Static representation of the {@link paymentTermsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERMS_NAME: fieldBuilder.buildEdmTypeField(
          'PaymentTermsName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'CashDiscount',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesInvoiceHeadersV4)
      };
    }

    return this._schema;
  }
}
