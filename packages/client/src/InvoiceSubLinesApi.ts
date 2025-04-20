/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InvoiceSubLines } from './InvoiceSubLines';
import { InvoiceSubLinesRequestBuilder } from './InvoiceSubLinesRequestBuilder';
import { VendorInvoiceLinesApi } from './VendorInvoiceLinesApi';
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
export class InvoiceSubLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InvoiceSubLines<DeSerializersT>, DeSerializersT>
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
  ): InvoiceSubLinesApi<DeSerializersT> {
    return new InvoiceSubLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link vendorInvoiceLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_INVOICE_LINE: OneToOneLink<
      InvoiceSubLines<DeSerializersT>,
      DeSerializersT,
      VendorInvoiceLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [VendorInvoiceLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      VENDOR_INVOICE_LINE: new OneToOneLink(
        'VendorInvoiceLine',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = InvoiceSubLines;

  requestBuilder(): InvoiceSubLinesRequestBuilder<DeSerializersT> {
    return new InvoiceSubLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InvoiceSubLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InvoiceSubLines<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<InvoiceSubLines<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof InvoiceSubLines, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InvoiceSubLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InvoiceSubLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_RECEIPT_NUMBER: OrderableEdmTypeField<
      InvoiceSubLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_LINE_REFERENCE: OrderableEdmTypeField<
      InvoiceSubLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER: OrderableEdmTypeField<
      InvoiceSubLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_LINE_NUMBER: OrderableEdmTypeField<
      InvoiceSubLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_QUANTITY: OrderableEdmTypeField<
      InvoiceSubLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorInvoiceLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_INVOICE_LINE: OneToOneLink<
      InvoiceSubLines<DeSerializersT>,
      DeSerializersT,
      VendorInvoiceLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InvoiceSubLines<DeSerializers>>;
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
         * Static representation of the {@link productReceiptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_RECEIPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductReceiptNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link invoiceLineReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_LINE_REFERENCE: fieldBuilder.buildEdmTypeField(
          'InvoiceLineReference',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrder',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link invoiceLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchaseQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'PurchaseQuantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InvoiceSubLines)
      };
    }

    return this._schema;
  }
}
