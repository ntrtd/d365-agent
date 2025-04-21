/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessDocumentNonStockedPackingSlipLinesV2 } from './BusinessDocumentNonStockedPackingSlipLinesV2';
import { BusinessDocumentNonStockedPackingSlipLinesV2RequestBuilder } from './BusinessDocumentNonStockedPackingSlipLinesV2RequestBuilder';
import { BusinessDocumentSalesInvoiceLineItemsApi } from './BusinessDocumentSalesInvoiceLineItemsApi';
import { BusinessDocumentSalesInvoiceBasesApi } from './BusinessDocumentSalesInvoiceBasesApi';
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
export class BusinessDocumentNonStockedPackingSlipLinesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      BusinessDocumentNonStockedPackingSlipLinesV2<DeSerializersT>,
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
  ): BusinessDocumentNonStockedPackingSlipLinesV2Api<DeSerializersT> {
    return new BusinessDocumentNonStockedPackingSlipLinesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link businessDocumentSalesInvoiceLineItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_SALES_INVOICE_LINE_ITEM: OneToOneLink<
      BusinessDocumentNonStockedPackingSlipLinesV2<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentSalesInvoiceLineItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessDocumentSalesInvoiceBase} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_SALES_INVOICE_BASE: OneToOneLink<
      BusinessDocumentNonStockedPackingSlipLinesV2<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentSalesInvoiceBasesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BusinessDocumentSalesInvoiceLineItemsApi<DeSerializersT>,
      BusinessDocumentSalesInvoiceBasesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUSINESS_DOCUMENT_SALES_INVOICE_LINE_ITEM: new OneToOneLink(
        'BusinessDocumentSalesInvoiceLineItem',
        this,
        linkedApis[0]
      ),
      BUSINESS_DOCUMENT_SALES_INVOICE_BASE: new OneToOneLink(
        'BusinessDocumentSalesInvoiceBase',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BusinessDocumentNonStockedPackingSlipLinesV2;

  requestBuilder(): BusinessDocumentNonStockedPackingSlipLinesV2RequestBuilder<DeSerializersT> {
    return new BusinessDocumentNonStockedPackingSlipLinesV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BusinessDocumentNonStockedPackingSlipLinesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BusinessDocumentNonStockedPackingSlipLinesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BusinessDocumentNonStockedPackingSlipLinesV2<DeSerializersT>,
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
    typeof BusinessDocumentNonStockedPackingSlipLinesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BusinessDocumentNonStockedPackingSlipLinesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BusinessDocumentNonStockedPackingSlipLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ID: OrderableEdmTypeField<
      BusinessDocumentNonStockedPackingSlipLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PACKING_SLIP_ID: OrderableEdmTypeField<
      BusinessDocumentNonStockedPackingSlipLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_DATE: OrderableEdmTypeField<
      BusinessDocumentNonStockedPackingSlipLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      BusinessDocumentNonStockedPackingSlipLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIG_SALES_ID: OrderableEdmTypeField<
      BusinessDocumentNonStockedPackingSlipLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_JOUR_REC_ID: OrderableEdmTypeField<
      BusinessDocumentNonStockedPackingSlipLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INVOICE_TRANS_REC_ID: OrderableEdmTypeField<
      BusinessDocumentNonStockedPackingSlipLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      BusinessDocumentNonStockedPackingSlipLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessDocumentSalesInvoiceLineItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_SALES_INVOICE_LINE_ITEM: OneToOneLink<
      BusinessDocumentNonStockedPackingSlipLinesV2<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentSalesInvoiceLineItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessDocumentSalesInvoiceBase} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_SALES_INVOICE_BASE: OneToOneLink<
      BusinessDocumentNonStockedPackingSlipLinesV2<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentSalesInvoiceBasesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      BusinessDocumentNonStockedPackingSlipLinesV2<DeSerializers>
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
         * Static representation of the {@link salesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ID: fieldBuilder.buildEdmTypeField(
          'SalesId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link packingSlipId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_SLIP_ID: fieldBuilder.buildEdmTypeField(
          'PackingSlipId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link deliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'DeliveryDate',
          'Edm.DateTimeOffset',
          false
        ),
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
         * Static representation of the {@link origSalesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_SALES_ID: fieldBuilder.buildEdmTypeField(
          'OrigSalesId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link invoiceJourRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_JOUR_REC_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceJourRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link invoiceTransRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_TRANS_REC_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceTransRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
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
          BusinessDocumentNonStockedPackingSlipLinesV2
        )
      };
    }

    return this._schema;
  }
}
