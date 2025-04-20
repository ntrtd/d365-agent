/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorInvoiceLines } from './VendorInvoiceLines';
import { VendorInvoiceLinesRequestBuilder } from './VendorInvoiceLinesRequestBuilder';
import { InvoiceSubLinesV2Api } from './InvoiceSubLinesV2Api';
import { InvoiceSubLinesApi } from './InvoiceSubLinesApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { VendorInvoiceHeadersApi } from './VendorInvoiceHeadersApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { NoYes } from './NoYes';
import { Tax1099Type } from './Tax1099Type';
import { VendInvoiceRequestStatus } from './VendInvoiceRequestStatus';
import { PurchInvoiceLineType } from './PurchInvoiceLineType';
import { DocumentStatus } from './DocumentStatus';
import { VendorOperationTypeMx } from './VendorOperationTypeMx';
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
  EdmTypeField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class VendorInvoiceLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendorInvoiceLines<DeSerializersT>, DeSerializersT>
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
  ): VendorInvoiceLinesApi<DeSerializersT> {
    return new VendorInvoiceLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link invoiceSubLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICE_SUB_LINE_V_2: OneToManyLink<
      VendorInvoiceLines<DeSerializersT>,
      DeSerializersT,
      InvoiceSubLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoiceSubLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICE_SUB_LINE: OneToManyLink<
      VendorInvoiceLines<DeSerializersT>,
      DeSerializersT,
      InvoiceSubLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      VendorInvoiceLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorInvoiceHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_INVOICE_HEADER: OneToOneLink<
      VendorInvoiceLines<DeSerializersT>,
      DeSerializersT,
      VendorInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      VendorInvoiceLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      InvoiceSubLinesV2Api<DeSerializersT>,
      InvoiceSubLinesApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      VendorInvoiceHeadersApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      INVOICE_SUB_LINE_V_2: new OneToManyLink(
        'InvoiceSubLineV2',
        this,
        linkedApis[0]
      ),
      INVOICE_SUB_LINE: new OneToManyLink(
        'InvoiceSubLine',
        this,
        linkedApis[1]
      ),
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[2]
      ),
      VENDOR_INVOICE_HEADER: new OneToOneLink(
        'VendorInvoiceHeader',
        this,
        linkedApis[3]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = VendorInvoiceLines;

  requestBuilder(): VendorInvoiceLinesRequestBuilder<DeSerializersT> {
    return new VendorInvoiceLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendorInvoiceLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VendorInvoiceLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendorInvoiceLines<DeSerializersT>,
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
    typeof VendorInvoiceLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendorInvoiceLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEADER_REFERENCE: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_LINE_NUMBER: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROCUREMENT_CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_S_ADDRESS_OR_LEGAL_DESCRIPTION: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_UNIT: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_1099_G_TAX_YEAR: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NAME: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MULTILINE_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_NOW: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_SALES_TAX: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_GROUP: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAIN_AFTER_INVENT: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROCUREMENT_CATEGORY_NAME: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_TAX_1099_S_PROPERTY_OR_SERVICES: EnumField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELEASE_ALL_RETAINED_AMOUNT: EnumField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_WITHHOLD_GROUP: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_ID: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_G_VENDOR_STATE_ID: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_PERCENT: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADJUSTED_UNIT_PRICE: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_1099_TYPE: EnumField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      Tax1099Type,
      true,
      true
    >;
    MULTILINE_DISCOUNT: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANGE_QUANTITY_MANUALLY: EnumField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PORT: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CODE: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_TAX_1099_G_TRADE_OR_BUSINESS_INCOME: EnumField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENTORY_WAREHOUSE_ID: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_RETAINED_AMOUNT: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_1099_S_BUYER_PART_OF_REAL_ESTATE_TAX_AMOUNT: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_DELIVER_REMAINDER: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_1099_S_CLOSING_DATE: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    UNIT: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_INVOICE_LINE_REVIEW_STATUS: EnumField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      VendInvoiceRequestStatus,
      true,
      true
    >;
    RECEIVE_NOW: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSPORT: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_RESERVATION_LINE_NUMBER: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATE_OF_ORIGIN: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAIN_BEFORE: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_TYPE: EnumField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      PurchInvoiceLineType,
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_AREA_COMPANY: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_LINE_NUMBER: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ORDERED_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTY_ORIG_DEST: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAINAGE_AMOUNT: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERCENTAGE: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NET_AMOUNT: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CW_UPDATE: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_ORDER: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDERING: EnumField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      DocumentStatus,
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_G_STATE_TAX_WITHHELD_AMOUNT: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIG_COUNTRY_REGION_ID: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_DESCRIPTION: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIN_PERCENTAGE: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMAIN_BEFORE_INVENT: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PACKED_EXTENSIONS: EdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    DELIVERY_NAME: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_BOX: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CW_DELIVERY_REMAINDER: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_SERVICE_CODE: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ACCOUNT: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLOSE_FOR_RECEIPT: EnumField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REMAIN_AFTER: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_PRICE: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BUDGET_RESERVATION_DOCUMENT_NUMBER: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGES_ON_PURCHASES: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_WITHHOLD_ITEM_GROUP_NAME: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CFOP_CODE: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_STATE_AMOUNT: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNTING_DISTRIBUTION_TEMPLATE_ID: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTICS_PROCEDURE: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CW_REMAINING_QUANTITY: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIMENSION_NUMBER: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIN_TAG_DISPLAY_VALUE: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_AMOUNT: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PDS_CALCULATION_ID: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_G_VENDOR_STATE_TAX_ID: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_ITEM_GROUP: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_STATE: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_SITE_ID: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMODITY: OrderableEdmTypeField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIOT_OPERATION_TYPE: EnumField<
      VendorInvoiceLines<DeSerializers>,
      DeSerializersT,
      VendorOperationTypeMx,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoiceSubLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICE_SUB_LINE_V_2: OneToManyLink<
      VendorInvoiceLines<DeSerializersT>,
      DeSerializersT,
      InvoiceSubLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link invoiceSubLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVOICE_SUB_LINE: OneToManyLink<
      VendorInvoiceLines<DeSerializersT>,
      DeSerializersT,
      InvoiceSubLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      VendorInvoiceLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorInvoiceHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_INVOICE_HEADER: OneToOneLink<
      VendorInvoiceLines<DeSerializersT>,
      DeSerializersT,
      VendorInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      VendorInvoiceLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VendorInvoiceLines<DeSerializers>>;
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
         * Static representation of the {@link headerReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_REFERENCE: fieldBuilder.buildEdmTypeField(
          'HeaderReference',
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
         * Static representation of the {@link procurementCategoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCUREMENT_CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'ProcurementCategoryHierarchyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tax1099SAddressOrLegalDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_S_ADDRESS_OR_LEGAL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Tax1099SAddressOrLegalDescription',
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
         * Static representation of the {@link tax1099GTaxYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_G_TAX_YEAR: fieldBuilder.buildEdmTypeField(
          'Tax1099GTaxYear',
          'Edm.Int32',
          false
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
         * Static representation of the {@link itemName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NAME: fieldBuilder.buildEdmTypeField(
          'ItemName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link multilineDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTILINE_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'MultilineDiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventNow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_NOW: fieldBuilder.buildEdmTypeField(
          'InventNow',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SALES_TAX: fieldBuilder.buildEdmTypeField(
          'ItemSalesTax',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mainAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'MainAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remainAfterInvent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAIN_AFTER_INVENT: fieldBuilder.buildEdmTypeField(
          'RemainAfterInvent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link procurementCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCUREMENT_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'ProcurementCategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isTax1099SPropertyOrServices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TAX_1099_S_PROPERTY_OR_SERVICES: fieldBuilder.buildEnumField(
          'IsTax1099SPropertyOrServices',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link releaseAllRetainedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_ALL_RETAINED_AMOUNT: fieldBuilder.buildEnumField(
          'ReleaseAllRetainedAmount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxWithholdGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxWithholdGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_ID: fieldBuilder.buildEdmTypeField('PartyID', 'Edm.String', true),
        /**
         * Static representation of the {@link tax1099GVendorStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_G_VENDOR_STATE_ID: fieldBuilder.buildEdmTypeField(
          'Tax1099GVendorStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discountPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_PERCENT: fieldBuilder.buildEdmTypeField(
          'DiscountPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link adjustedUnitPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTED_UNIT_PRICE: fieldBuilder.buildEdmTypeField(
          'AdjustedUnitPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tax1099Type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_TYPE: fieldBuilder.buildEnumField(
          'Tax1099Type',
          Tax1099Type,
          true
        ),
        /**
         * Static representation of the {@link multilineDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTILINE_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'MultilineDiscount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemBatchNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link changeQuantityManually} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_QUANTITY_MANUALLY: fieldBuilder.buildEnumField(
          'ChangeQuantityManually',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link port} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORT: fieldBuilder.buildEdmTypeField('Port', 'Edm.String', true),
        /**
         * Static representation of the {@link transactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'TransactionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isTax1099GTradeOrBusinessIncome} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TAX_1099_G_TRADE_OR_BUSINESS_INCOME: fieldBuilder.buildEnumField(
          'IsTax1099GTradeOrBusinessIncome',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventoryWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'InventoryWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalRetainedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_RETAINED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalRetainedAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tax1099SBuyerPartOfRealEstateTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_S_BUYER_PART_OF_REAL_ESTATE_TAX_AMOUNT:
          fieldBuilder.buildEdmTypeField(
            'Tax1099SBuyerPartOfRealEstateTaxAmount',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link dimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originalDeliverRemainder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_DELIVER_REMAINDER: fieldBuilder.buildEdmTypeField(
          'OriginalDeliverRemainder',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tax1099SClosingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_S_CLOSING_DATE: fieldBuilder.buildEdmTypeField(
          'Tax1099SClosingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT: fieldBuilder.buildEdmTypeField('Unit', 'Edm.String', true),
        /**
         * Static representation of the {@link vendorInvoiceLineReviewStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_INVOICE_LINE_REVIEW_STATUS: fieldBuilder.buildEnumField(
          'VendorInvoiceLineReviewStatus',
          VendInvoiceRequestStatus,
          true
        ),
        /**
         * Static representation of the {@link receiveNow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVE_NOW: fieldBuilder.buildEdmTypeField(
          'ReceiveNow',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORT: fieldBuilder.buildEdmTypeField(
          'Transport',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetReservationLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_RESERVATION_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'BudgetReservationLineNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link stateOfOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_OF_ORIGIN: fieldBuilder.buildEdmTypeField(
          'StateOfOrigin',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remainBefore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAIN_BEFORE: fieldBuilder.buildEdmTypeField(
          'RemainBefore',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TYPE: fieldBuilder.buildEnumField(
          'LineType',
          PurchInvoiceLineType,
          true
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
         * Static representation of the {@link dataAreaCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_COMPANY: fieldBuilder.buildEdmTypeField(
          'DataAreaCompany',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurchLineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link orderedInventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERED_INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'OrderedInventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countyOrigDest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY_ORIG_DEST: fieldBuilder.buildEdmTypeField(
          'CountyOrigDest',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retainageAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAINAGE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RetainageAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link percentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'Percentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link netAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NetAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cwUpdate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CW_UPDATE: fieldBuilder.buildEdmTypeField(
          'CWUpdate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ordering} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERING: fieldBuilder.buildEnumField('Ordering', DocumentStatus, true),
        /**
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tax1099GStateTaxWithheldAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_G_STATE_TAX_WITHHELD_AMOUNT: fieldBuilder.buildEdmTypeField(
          'Tax1099GStateTaxWithheldAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link origCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'OrigCountryRegionId',
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
         * Static representation of the {@link lineDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'LineDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retainPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIN_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'RetainPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link remainBeforeInvent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAIN_BEFORE_INVENT: fieldBuilder.buildEdmTypeField(
          'RemainBeforeInvent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link packedExtensions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKED_EXTENSIONS: fieldBuilder.buildEdmTypeField(
          'PackedExtensions',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link deliveryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tax1099Box} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_BOX: fieldBuilder.buildEdmTypeField(
          'Tax1099Box',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cwDeliveryRemainder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CW_DELIVERY_REMAINDER: fieldBuilder.buildEdmTypeField(
          'CWDeliveryRemainder',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxServiceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_SERVICE_CODE: fieldBuilder.buildEdmTypeField(
          'TaxServiceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendorAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link closeForReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSE_FOR_RECEIPT: fieldBuilder.buildEnumField(
          'CloseForReceipt',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link remainAfter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAIN_AFTER: fieldBuilder.buildEdmTypeField(
          'RemainAfter',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_PRICE: fieldBuilder.buildEdmTypeField(
          'UnitPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link budgetReservationDocumentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_RESERVATION_DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'BudgetReservationDocumentNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chargesOnPurchases} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGES_ON_PURCHASES: fieldBuilder.buildEdmTypeField(
          'ChargesOnPurchases',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxWithholdItemGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_ITEM_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'TaxWithholdItemGroupName',
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
         * Static representation of the {@link tax1099StateAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_STATE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'Tax1099StateAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accountingDistributionTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DISTRIBUTION_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'AccountingDistributionTemplateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statisticsProcedure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICS_PROCEDURE: fieldBuilder.buildEdmTypeField(
          'StatisticsProcedure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cwRemainingQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CW_REMAINING_QUANTITY: fieldBuilder.buildEdmTypeField(
          'CWRemainingQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dimensionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_NUMBER: fieldBuilder.buildEdmTypeField(
          'DimensionNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link finTagDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIN_TAG_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'FinTagDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tax1099Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_AMOUNT: fieldBuilder.buildEdmTypeField(
          'Tax1099Amount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link pdsCalculationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CALCULATION_ID: fieldBuilder.buildEdmTypeField(
          'PDSCalculationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tax1099GVendorStateTaxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_G_VENDOR_STATE_TAX_ID: fieldBuilder.buildEdmTypeField(
          'Tax1099GVendorStateTaxId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxItemGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT: fieldBuilder.buildEdmTypeField(
          'Discount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link inventorySiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SITE_ID: fieldBuilder.buildEdmTypeField(
          'InventorySiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link commodity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMODITY: fieldBuilder.buildEdmTypeField(
          'Commodity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link diotOperationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIOT_OPERATION_TYPE: fieldBuilder.buildEnumField(
          'DiotOperationType',
          VendorOperationTypeMx,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendorInvoiceLines)
      };
    }

    return this._schema;
  }
}
