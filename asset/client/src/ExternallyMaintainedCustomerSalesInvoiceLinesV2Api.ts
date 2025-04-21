/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternallyMaintainedCustomerSalesInvoiceLinesV2 } from './ExternallyMaintainedCustomerSalesInvoiceLinesV2';
import { ExternallyMaintainedCustomerSalesInvoiceLinesV2RequestBuilder } from './ExternallyMaintainedCustomerSalesInvoiceLinesV2RequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class ExternallyMaintainedCustomerSalesInvoiceLinesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ExternallyMaintainedCustomerSalesInvoiceLinesV2<DeSerializersT>,
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
  ): ExternallyMaintainedCustomerSalesInvoiceLinesV2Api<DeSerializersT> {
    return new ExternallyMaintainedCustomerSalesInvoiceLinesV2Api(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExternallyMaintainedCustomerSalesInvoiceLinesV2;

  requestBuilder(): ExternallyMaintainedCustomerSalesInvoiceLinesV2RequestBuilder<DeSerializersT> {
    return new ExternallyMaintainedCustomerSalesInvoiceLinesV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ExternallyMaintainedCustomerSalesInvoiceLinesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExternallyMaintainedCustomerSalesInvoiceLinesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExternallyMaintainedCustomerSalesInvoiceLinesV2<DeSerializersT>,
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
    typeof ExternallyMaintainedCustomerSalesInvoiceLinesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExternallyMaintainedCustomerSalesInvoiceLinesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_NUMBER: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LINE_CREATION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LEDGER_VOUCHER: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICED_QUANTITY: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_TOTAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_DESCRIPTION: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_TOTAL_TAX_AMOUNT: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_TOTAL_CHARGE_AMOUNT: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_UNIT_SYMBOL: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIRMED_SHIPPING_DATE: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_AMOUNT: OrderableEdmTypeField<
      ExternallyMaintainedCustomerSalesInvoiceLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      ExternallyMaintainedCustomerSalesInvoiceLinesV2<DeSerializers>
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
         * Static representation of the {@link lineCreationSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_CREATION_SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineCreationSequenceNumber',
          'Edm.Int32',
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
         * Static representation of the {@link invoicedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'InvoicedQuantity',
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
         * Static representation of the {@link lineTotalDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TOTAL_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineTotalDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ProductDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineTotalTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TOTAL_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineTotalTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NAME: fieldBuilder.buildEdmTypeField(
          'ProductName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineTotalChargeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TOTAL_CHARGE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineTotalChargeAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'SalesUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link confirmedShippingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_SHIPPING_DATE: fieldBuilder.buildEdmTypeField(
          'ConfirmedShippingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link salesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'SalesPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineAmount',
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
          ExternallyMaintainedCustomerSalesInvoiceLinesV2
        )
      };
    }

    return this._schema;
  }
}
