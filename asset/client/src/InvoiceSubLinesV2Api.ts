/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InvoiceSubLinesV2 } from './InvoiceSubLinesV2';
import { InvoiceSubLinesV2RequestBuilder } from './InvoiceSubLinesV2RequestBuilder';
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
export class InvoiceSubLinesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InvoiceSubLinesV2<DeSerializersT>, DeSerializersT>
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
  ): InvoiceSubLinesV2Api<DeSerializersT> {
    return new InvoiceSubLinesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link vendorInvoiceLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_INVOICE_LINE: OneToOneLink<
      InvoiceSubLinesV2<DeSerializersT>,
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

  entityConstructor = InvoiceSubLinesV2;

  requestBuilder(): InvoiceSubLinesV2RequestBuilder<DeSerializersT> {
    return new InvoiceSubLinesV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InvoiceSubLinesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InvoiceSubLinesV2<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<InvoiceSubLinesV2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof InvoiceSubLinesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InvoiceSubLinesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InvoiceSubLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_RECEIPT_NUMBER: OrderableEdmTypeField<
      InvoiceSubLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_LINE_REFERENCE: OrderableEdmTypeField<
      InvoiceSubLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER: OrderableEdmTypeField<
      InvoiceSubLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_LINE_NUMBER: OrderableEdmTypeField<
      InvoiceSubLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_ORDER_LINE_NUMBER: OrderableEdmTypeField<
      InvoiceSubLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PURCHASE_QUANTITY: OrderableEdmTypeField<
      InvoiceSubLinesV2<DeSerializers>,
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
      InvoiceSubLinesV2<DeSerializersT>,
      DeSerializersT,
      VendorInvoiceLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InvoiceSubLinesV2<DeSerializers>>;
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
         * Static representation of the {@link purchaseOrderLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderLineNumber',
          'Edm.Int64',
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
        ALL_FIELDS: new AllFields('*', InvoiceSubLinesV2)
      };
    }

    return this._schema;
  }
}
