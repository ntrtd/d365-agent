/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessDocumentSalesInvoiceLineItems } from './BusinessDocumentSalesInvoiceLineItems';
import { BusinessDocumentSalesInvoiceLineItemsRequestBuilder } from './BusinessDocumentSalesInvoiceLineItemsRequestBuilder';
import { BusinessDocumentSalesInvoiceBasesApi } from './BusinessDocumentSalesInvoiceBasesApi';
import { BusinessDocumentNonStockedPackingSlipLinesApi } from './BusinessDocumentNonStockedPackingSlipLinesApi';
import { BusinessDocumentDocuRefsApi } from './BusinessDocumentDocuRefsApi';
import { BusinessDocumentStockedPackingSlipLinesV3Api } from './BusinessDocumentStockedPackingSlipLinesV3Api';
import { BusinessDocumentInvoicedPackingSlipLinesV3Api } from './BusinessDocumentInvoicedPackingSlipLinesV3Api';
import { BusinessDocumentInvoicedPackingSlipLinesV2Api } from './BusinessDocumentInvoicedPackingSlipLinesV2Api';
import { BusinessDocumentNonStockedPackingSlipLinesV2Api } from './BusinessDocumentNonStockedPackingSlipLinesV2Api';
import { BusinessDocumentNonStockedPackingSlipLinesV3Api } from './BusinessDocumentNonStockedPackingSlipLinesV3Api';
import { BusinessDocumentTaxTransactionsApi } from './BusinessDocumentTaxTransactionsApi';
import { BusinessDocumentStockedPackingSlipLinesV2Api } from './BusinessDocumentStockedPackingSlipLinesV2Api';
import { BusinessDocumentInvoicedPackingSlipLinesApi } from './BusinessDocumentInvoicedPackingSlipLinesApi';
import { BusinessDocumentMarkupTransactionsApi } from './BusinessDocumentMarkupTransactionsApi';
import { BusinessDocumentStockedPackingSlipLinesApi } from './BusinessDocumentStockedPackingSlipLinesApi';
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
export class BusinessDocumentSalesInvoiceLineItemsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
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
  ): BusinessDocumentSalesInvoiceLineItemsApi<DeSerializersT> {
    return new BusinessDocumentSalesInvoiceLineItemsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link businessDocumentSalesInvoiceBase} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_SALES_INVOICE_BASE: OneToOneLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentSalesInvoiceBasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentNonStockedPackingSlipLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_NON_STOCKED_PACKING_SLIP_LINE: OneToManyLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentNonStockedPackingSlipLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentDocuRef} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_DOCU_REF: OneToManyLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentDocuRefsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentStockedPackingSlipLineV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_STOCKED_PACKING_SLIP_LINE_V_3: OneToManyLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentStockedPackingSlipLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentInvoicedPackingSlipLineV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_INVOICED_PACKING_SLIP_LINE_V_3: OneToManyLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentInvoicedPackingSlipLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentInvoicedPackingSlipLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_INVOICED_PACKING_SLIP_LINE_V_2: OneToManyLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentInvoicedPackingSlipLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentNonStockedPackingSlipLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_NON_STOCKED_PACKING_SLIP_LINE_V_2: OneToManyLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentNonStockedPackingSlipLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentNonStockedPackingSlipLineV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_NON_STOCKED_PACKING_SLIP_LINE_V_3: OneToManyLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentNonStockedPackingSlipLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentTaxTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_TAX_TRANSACTION: OneToManyLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentTaxTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentStockedPackingSlipLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_STOCKED_PACKING_SLIP_LINE_V_2: OneToManyLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentStockedPackingSlipLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentInvoicedPackingSlipLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_INVOICED_PACKING_SLIP_LINE: OneToManyLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentInvoicedPackingSlipLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentMarkupTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_MARKUP_TRANSACTION: OneToManyLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentMarkupTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentStockedPackingSlipLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_STOCKED_PACKING_SLIP_LINE: OneToManyLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentStockedPackingSlipLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BusinessDocumentSalesInvoiceBasesApi<DeSerializersT>,
      BusinessDocumentNonStockedPackingSlipLinesApi<DeSerializersT>,
      BusinessDocumentDocuRefsApi<DeSerializersT>,
      BusinessDocumentStockedPackingSlipLinesV3Api<DeSerializersT>,
      BusinessDocumentInvoicedPackingSlipLinesV3Api<DeSerializersT>,
      BusinessDocumentInvoicedPackingSlipLinesV2Api<DeSerializersT>,
      BusinessDocumentNonStockedPackingSlipLinesV2Api<DeSerializersT>,
      BusinessDocumentNonStockedPackingSlipLinesV3Api<DeSerializersT>,
      BusinessDocumentTaxTransactionsApi<DeSerializersT>,
      BusinessDocumentStockedPackingSlipLinesV2Api<DeSerializersT>,
      BusinessDocumentInvoicedPackingSlipLinesApi<DeSerializersT>,
      BusinessDocumentMarkupTransactionsApi<DeSerializersT>,
      BusinessDocumentStockedPackingSlipLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUSINESS_DOCUMENT_SALES_INVOICE_BASE: new OneToOneLink(
        'BusinessDocumentSalesInvoiceBase',
        this,
        linkedApis[0]
      ),
      BUSINESS_DOCUMENT_NON_STOCKED_PACKING_SLIP_LINE: new OneToManyLink(
        'BusinessDocumentNonStockedPackingSlipLine',
        this,
        linkedApis[1]
      ),
      BUSINESS_DOCUMENT_DOCU_REF: new OneToManyLink(
        'BusinessDocumentDocuRef',
        this,
        linkedApis[2]
      ),
      BUSINESS_DOCUMENT_STOCKED_PACKING_SLIP_LINE_V_3: new OneToManyLink(
        'BusinessDocumentStockedPackingSlipLineV3',
        this,
        linkedApis[3]
      ),
      BUSINESS_DOCUMENT_INVOICED_PACKING_SLIP_LINE_V_3: new OneToManyLink(
        'BusinessDocumentInvoicedPackingSlipLineV3',
        this,
        linkedApis[4]
      ),
      BUSINESS_DOCUMENT_INVOICED_PACKING_SLIP_LINE_V_2: new OneToManyLink(
        'BusinessDocumentInvoicedPackingSlipLineV2',
        this,
        linkedApis[5]
      ),
      BUSINESS_DOCUMENT_NON_STOCKED_PACKING_SLIP_LINE_V_2: new OneToManyLink(
        'BusinessDocumentNonStockedPackingSlipLineV2',
        this,
        linkedApis[6]
      ),
      BUSINESS_DOCUMENT_NON_STOCKED_PACKING_SLIP_LINE_V_3: new OneToManyLink(
        'BusinessDocumentNonStockedPackingSlipLineV3',
        this,
        linkedApis[7]
      ),
      BUSINESS_DOCUMENT_TAX_TRANSACTION: new OneToManyLink(
        'BusinessDocumentTaxTransaction',
        this,
        linkedApis[8]
      ),
      BUSINESS_DOCUMENT_STOCKED_PACKING_SLIP_LINE_V_2: new OneToManyLink(
        'BusinessDocumentStockedPackingSlipLineV2',
        this,
        linkedApis[9]
      ),
      BUSINESS_DOCUMENT_INVOICED_PACKING_SLIP_LINE: new OneToManyLink(
        'BusinessDocumentInvoicedPackingSlipLine',
        this,
        linkedApis[10]
      ),
      BUSINESS_DOCUMENT_MARKUP_TRANSACTION: new OneToManyLink(
        'BusinessDocumentMarkupTransaction',
        this,
        linkedApis[11]
      ),
      BUSINESS_DOCUMENT_STOCKED_PACKING_SLIP_LINE: new OneToManyLink(
        'BusinessDocumentStockedPackingSlipLine',
        this,
        linkedApis[12]
      )
    };
    return this;
  }

  entityConstructor = BusinessDocumentSalesInvoiceLineItems;

  requestBuilder(): BusinessDocumentSalesInvoiceLineItemsRequestBuilder<DeSerializersT> {
    return new BusinessDocumentSalesInvoiceLineItemsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
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
    typeof BusinessDocumentSalesInvoiceLineItems,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BusinessDocumentSalesInvoiceLineItems,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LINE_CREATION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LINE_AMOUNT_TAX_MST: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PARENT_REC_ID: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_AMOUNT_TAX: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISC_AMOUNT: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QTY: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIG_SALES_ID: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_UNIT: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_DIM_ID: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DISC: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEDGER_VOUCHER: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISC_PERCENT: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXTERNAL_ITEM_DESCRIPTION: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_AMOUNT: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DATA_AREA: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_INVOICE_TRANS_REC_ID: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ITEM_BAR_CODE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_INVOICE_TRANS_TABLE_ID: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUM_LINE_DISC: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXTERNAL_ITEM_ID: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_UNIT: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_REVERSE_CHARGE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_EXEMPT_CODE_REASON_IT: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_PRICE_NET: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_NAME: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_TYPE_IT: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_AMOUNT_MST: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_NAME: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_RATE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_COUNTRY_REGION_TYPE: OrderableEdmTypeField<
      BusinessDocumentSalesInvoiceLineItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessDocumentSalesInvoiceBase} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_SALES_INVOICE_BASE: OneToOneLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentSalesInvoiceBasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentNonStockedPackingSlipLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_NON_STOCKED_PACKING_SLIP_LINE: OneToManyLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentNonStockedPackingSlipLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentDocuRef} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_DOCU_REF: OneToManyLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentDocuRefsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentStockedPackingSlipLineV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_STOCKED_PACKING_SLIP_LINE_V_3: OneToManyLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentStockedPackingSlipLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentInvoicedPackingSlipLineV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_INVOICED_PACKING_SLIP_LINE_V_3: OneToManyLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentInvoicedPackingSlipLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentInvoicedPackingSlipLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_INVOICED_PACKING_SLIP_LINE_V_2: OneToManyLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentInvoicedPackingSlipLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentNonStockedPackingSlipLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_NON_STOCKED_PACKING_SLIP_LINE_V_2: OneToManyLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentNonStockedPackingSlipLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentNonStockedPackingSlipLineV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_NON_STOCKED_PACKING_SLIP_LINE_V_3: OneToManyLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentNonStockedPackingSlipLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentTaxTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_TAX_TRANSACTION: OneToManyLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentTaxTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentStockedPackingSlipLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_STOCKED_PACKING_SLIP_LINE_V_2: OneToManyLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentStockedPackingSlipLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentInvoicedPackingSlipLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_INVOICED_PACKING_SLIP_LINE: OneToManyLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentInvoicedPackingSlipLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentMarkupTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_MARKUP_TRANSACTION: OneToManyLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentMarkupTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessDocumentStockedPackingSlipLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_DOCUMENT_STOCKED_PACKING_SLIP_LINE: OneToManyLink<
      BusinessDocumentSalesInvoiceLineItems<DeSerializersT>,
      DeSerializersT,
      BusinessDocumentStockedPackingSlipLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BusinessDocumentSalesInvoiceLineItems<DeSerializers>>;
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
         * Static representation of the {@link invoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceId',
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
         * Static representation of the {@link lineAmountTaxMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT_TAX_MST: fieldBuilder.buildEdmTypeField(
          'LineAmountTaxMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link parentRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_REC_ID: fieldBuilder.buildEdmTypeField(
          'ParentRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link lineAmountTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT_TAX: fieldBuilder.buildEdmTypeField(
          'LineAmountTax',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link discAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISC_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DiscAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link qty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY: fieldBuilder.buildEdmTypeField('Qty', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link origSalesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_SALES_ID: fieldBuilder.buildEdmTypeField(
          'OrigSalesId',
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
         * Static representation of the {@link priceUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_UNIT: fieldBuilder.buildEdmTypeField(
          'PriceUnit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventDimId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIM_ID: fieldBuilder.buildEdmTypeField(
          'InventDimId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISC: fieldBuilder.buildEdmTypeField(
          'LineDisc',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ledgerVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_VOUCHER: fieldBuilder.buildEdmTypeField(
          'LedgerVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISC_PERCENT: fieldBuilder.buildEdmTypeField(
          'DiscPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link externalItemDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_ITEM_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ExternalItemDescription',
          'Edm.String',
          true
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
        /**
         * Static representation of the {@link dataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA: fieldBuilder.buildEdmTypeField(
          'DataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custInvoiceTransRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_INVOICE_TRANS_REC_ID: fieldBuilder.buildEdmTypeField(
          'CustInvoiceTransRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link itemBarCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BAR_CODE: fieldBuilder.buildEdmTypeField(
          'ItemBarCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custInvoiceTransTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_INVOICE_TRANS_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'CustInvoiceTransTableId',
          'Edm.Int32',
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
         * Static representation of the {@link sumLineDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_LINE_DISC: fieldBuilder.buildEdmTypeField(
          'SumLineDisc',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link externalItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'ExternalItemId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT: fieldBuilder.buildEdmTypeField(
          'SalesUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isReverseCharge} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REVERSE_CHARGE: fieldBuilder.buildEdmTypeField(
          'IsReverseCharge',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link taxExemptCodeReasonIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_CODE_REASON_IT: fieldBuilder.buildEdmTypeField(
          'TaxExemptCodeReason_IT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitPriceNet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_PRICE_NET: fieldBuilder.buildEdmTypeField(
          'UnitPriceNet',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_NAME: fieldBuilder.buildEdmTypeField('TaxName', 'Edm.String', true),
        /**
         * Static representation of the {@link taxTypeIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TYPE_IT: fieldBuilder.buildEdmTypeField(
          'TaxType_IT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineAmountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'LineAmountMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NAME: fieldBuilder.buildEdmTypeField(
          'ItemName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_RATE: fieldBuilder.buildEdmTypeField(
          'TaxRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxCountryRegionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_COUNTRY_REGION_TYPE: fieldBuilder.buildEdmTypeField(
          'TaxCountryRegionType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BusinessDocumentSalesInvoiceLineItems)
      };
    }

    return this._schema;
  }
}
