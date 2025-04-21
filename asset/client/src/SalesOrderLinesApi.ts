/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderLines } from './SalesOrderLines';
import { SalesOrderLinesRequestBuilder } from './SalesOrderLinesRequestBuilder';
import { SalesOrderHeadersV2Api } from './SalesOrderHeadersV2Api';
import { SalesOrderHeadersV3Api } from './SalesOrderHeadersV3Api';
import { SalesOrderHeadersApi } from './SalesOrderHeadersApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { SalesOrderLineDocumentAttachmentsV2Api } from './SalesOrderLineDocumentAttachmentsV2Api';
import { NoYes } from './NoYes';
import { SalesStatus } from './SalesStatus';
import { ItemReservation } from './ItemReservation';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { McrGiftCardType } from './McrGiftCardType';
import { Timezone } from './Timezone';
import { MpsFullRunCtpStatus } from './MpsFullRunCtpStatus';
import { SalesSalesOrderCreationMethod } from './SalesSalesOrderCreationMethod';
import { RetailFulfillmentLineStatus } from './RetailFulfillmentLineStatus';
import { BundleLineType } from './BundleLineType';
import { BundleLineStatus } from './BundleLineStatus';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class SalesOrderLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesOrderLines<DeSerializersT>, DeSerializersT>
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
  ): SalesOrderLinesApi<DeSerializersT> {
    return new SalesOrderLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderHeaderV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADER_V_2: OneToOneLink<
      SalesOrderLines<DeSerializersT>,
      DeSerializersT,
      SalesOrderHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderHeaderV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADER_V_3: OneToOneLink<
      SalesOrderLines<DeSerializersT>,
      DeSerializersT,
      SalesOrderHeadersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADER: OneToOneLink<
      SalesOrderLines<DeSerializersT>,
      DeSerializersT,
      SalesOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      SalesOrderLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      SalesOrderLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesOrderLineDocumentAttachments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_LINE_DOCUMENT_ATTACHMENTS: OneToManyLink<
      SalesOrderLines<DeSerializersT>,
      DeSerializersT,
      SalesOrderLineDocumentAttachmentsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SalesOrderHeadersV2Api<DeSerializersT>,
      SalesOrderHeadersV3Api<DeSerializersT>,
      SalesOrderHeadersApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      SalesOrderLineDocumentAttachmentsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SALES_ORDER_HEADER_V_2: new OneToOneLink(
        'SalesOrderHeaderV2',
        this,
        linkedApis[0]
      ),
      SALES_ORDER_HEADER_V_3: new OneToOneLink(
        'SalesOrderHeaderV3',
        this,
        linkedApis[1]
      ),
      SALES_ORDER_HEADER: new OneToOneLink(
        'SalesOrderHeader',
        this,
        linkedApis[2]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[3]),
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[4]
      ),
      SALES_ORDER_LINE_DOCUMENT_ATTACHMENTS: new OneToManyLink(
        'SalesOrderLineDocumentAttachments',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = SalesOrderLines;

  requestBuilder(): SalesOrderLinesRequestBuilder<DeSerializersT> {
    return new SalesOrderLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesOrderLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesOrderLines<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SalesOrderLines<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SalesOrderLines, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesOrderLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_LOT_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXTERNAL_ITEM_NUMBER: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_REQUISITION_NUMBER: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SOFT_RESERVED_EXTERNALLY: EnumField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_SALES_TAX_GROUP_CODE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_SERVICE_ADJUSTMENT_OFFSET_DATASOURCE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_CALCULATED_MANUAL_LINE_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_ORDER_LINE_STATUS: EnumField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      SalesStatus,
      true,
      true
    >;
    INTRASTAT_PORT_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMS_DOCUMENT_DATE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SKIP_CREATE_AUTO_CHARGES: EnumField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENTORY_RESERVATION_METHOD: EnumField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      ItemReservation,
      true,
      true
    >;
    INTRASTAT_TRANSPORT_MODE_CODE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_SALES_TAX_ITEM_GROUP_CODE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_BUYER_EMAIL: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CFOP_CODE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMS_DOCUMENT_NAME: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNING_PRIORITY: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETAIL_CALCULATED_LINE_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_ORDER_NUMBER: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUFRAMA_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTE_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOWED_OVERDELIVERY_PERCENTAGE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_SERVICE_ADJUSTMENT_OFFSET_PHYSICAL_MEASURE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_CALCULATED_PERIODIC_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIXED_PRICE_CHARGES: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MULTILINE_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETAIL_CALCULATED_TENDER_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_SERVICE_RESERVATION_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_SPECIAL_MOVEMENT_CODE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_RECEIPT_DATE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONFIRMED_RECEIPT_DATE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUSTOMS_DOCUMENT_NUMBER: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_INVOICE_DIMENSION_ACCOUNT_CODE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOM_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_NOTE_REASON_CODE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_RECIPIENT_EMAIL: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CATALOG: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INTRASTAT_STATISTICS_PROCEDURE_CODE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_COMMODITY_CODE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_NUMBER: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_RECIPIENT_NAME: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_PRIVATE: EnumField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_CITY: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_REBATE_CALCULATION_EXCLUDE_LINE: EnumField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETAIL_CALCULATED_LINE_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_STREET: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_AUTOMATIC_INVENTORY_RESERVATION_CONSIDER_BATCH_ATTRIBUTES: EnumField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_TAX_GROUP_CODE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_WITHHOLDING_TAX_CODE_GROUP_CODE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_AMOUNT: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_FISCAL_INFORMATION_CODE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STATE_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMISSION_SALES_REPRESENTATIVE_GROUP_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDERED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRICE_LOCKED: EnumField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MULTILINE_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_DESCRIPTION: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_REBATE_PRODUCT_GROUP_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_CREATION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_DELIVER_NOW: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_INVOICE_PROPERTY_NUMBER: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_CALCULATED_TENDER_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORDER_LINE_REFERENCE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PRICE_QUANTITY: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETAIL_CALCULATED_TOTAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INTRASTAT_TRIANGULAR_DEAL: EnumField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETAIL_CALCULATED_MANUAL_LINE_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONFIRMED_SHIPPING_DATE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RETAIL_CALCULATED_TOTAL_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_GROUP_CODE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_NUMBER: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_PROMISING_METHOD: EnumField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      SalesDeliveryDateControlType,
      true,
      true
    >;
    DELIVERY_MODE_CODE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_TYPE: EnumField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      McrGiftCardType,
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_CALCULATED_PERIODIC_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIPPING_WAREHOUSE_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_CATEGORY_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_STATISTIC_VALUE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GIFT_CARD_BUYER_NAME: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PRODUCT_CATEGORY_NAME: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_LINE_STOPPED: EnumField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FORMATTED_DELVERY_ADDRESS: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TERMS_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMERS_LINE_NUMBER: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DELIVERY_ADDRESS_TIME_ZONE: EnumField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    FULL_RUN_CTP_STATUS: EnumField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      MpsFullRunCtpStatus,
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FULFILLMENT_STORE_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NGP_CODE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXCLUDE_FROM_MASTER_PLANNING: EnumField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_UNIT_SYMBOL: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_LINE_CREATION_METHOD: EnumField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      SalesSalesOrderCreationMethod,
      true,
      true
    >;
    ALLOWED_UNDERDELIVERY_PERCENTAGE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CALCULATE_LINE_AMOUNT: EnumField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_CFOP_CODE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_NAME: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKING_UNIT_SYMBOL: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_TRANSACTION_CODE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_ITEM_GROUP_CODE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_SITE_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDERED_SALES_QUANTITY: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FULFILLMENT_STATUS: EnumField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      RetailFulfillmentLineStatus,
      true,
      true
    >;
    PROJECT_LINE_PROPERTY_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_POST_BOX: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIFT_CARD_GIFT_MESSAGE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDERED_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_ORDER_SPECIFIC: EnumField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REQUESTED_SHIPPING_DATE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_ADDRESS_LATITUDE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_LINE_NUMBER_FROM_LINE_CREATION_SEQUENCE_NUMBER: EnumField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_DOCUMENT_TYPE_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BUNDLE_LINE_TYPE: EnumField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      BundleLineType,
      true,
      true
    >;
    BUNDLE_LINE_STATUS: EnumField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      BundleLineStatus,
      true,
      true
    >;
    SUB_BILL_REVENUE_SPLIT: EnumField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REV_REC_REVENUE_SCHEDULE_ID: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REV_REC_SALES_DELIVER_NOW: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REV_REC_CONTRACT_END_DATE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REV_REC_OCCURRENCES: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REV_REC_CONTRACT_START_DATE: OrderableEdmTypeField<
      SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderHeaderV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADER_V_2: OneToOneLink<
      SalesOrderLines<DeSerializersT>,
      DeSerializersT,
      SalesOrderHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderHeaderV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADER_V_3: OneToOneLink<
      SalesOrderLines<DeSerializersT>,
      DeSerializersT,
      SalesOrderHeadersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADER: OneToOneLink<
      SalesOrderLines<DeSerializersT>,
      DeSerializersT,
      SalesOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      SalesOrderLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      SalesOrderLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesOrderLineDocumentAttachments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_LINE_DOCUMENT_ATTACHMENTS: OneToManyLink<
      SalesOrderLines<DeSerializersT>,
      DeSerializersT,
      SalesOrderLineDocumentAttachmentsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesOrderLines<DeSerializers>>;
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
         * Static representation of the {@link inventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'InventoryLotId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link externalItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExternalItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerRequisitionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REQUISITION_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerRequisitionNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSoftReservedExternally} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SOFT_RESERVED_EXTERNALLY: fieldBuilder.buildEnumField(
          'IsSoftReservedExternally',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deliverySalesTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_SALES_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'DeliverySalesTaxGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryServiceAdjustmentOffsetDatasource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SERVICE_ADJUSTMENT_OFFSET_DATASOURCE:
          fieldBuilder.buildEdmTypeField(
            'InventoryServiceAdjustmentOffsetDatasource',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link retailCalculatedManualLineDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CALCULATED_MANUAL_LINE_DISCOUNT_PERCENTAGE:
          fieldBuilder.buildEdmTypeField(
            'RetailCalculatedManualLineDiscountPercentage',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link salesOrderLineStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_LINE_STATUS: fieldBuilder.buildEnumField(
          'SalesOrderLineStatus',
          SalesStatus,
          true
        ),
        /**
         * Static representation of the {@link intrastatPortId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_PORT_ID: fieldBuilder.buildEdmTypeField(
          'IntrastatPortId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customsDocumentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'CustomsDocumentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link skipCreateAutoCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_CREATE_AUTO_CHARGES: fieldBuilder.buildEnumField(
          'SkipCreateAutoCharges',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventoryReservationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_RESERVATION_METHOD: fieldBuilder.buildEnumField(
          'InventoryReservationMethod',
          ItemReservation,
          true
        ),
        /**
         * Static representation of the {@link intrastatTransportModeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_TRANSPORT_MODE_CODE: fieldBuilder.buildEdmTypeField(
          'IntrastatTransportModeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliverySalesTaxItemGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_SALES_TAX_ITEM_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'DeliverySalesTaxItemGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giftCardBuyerEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_BUYER_EMAIL: fieldBuilder.buildEdmTypeField(
          'GiftCardBuyerEmail',
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
         * Static representation of the {@link customsDocumentName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_DOCUMENT_NAME: fieldBuilder.buildEdmTypeField(
          'CustomsDocumentName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveryAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link planningPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNING_PRIORITY: fieldBuilder.buildEdmTypeField(
          'PlanningPriority',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link retailCalculatedLineDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CALCULATED_LINE_DISCOUNT_PERCENTAGE:
          fieldBuilder.buildEdmTypeField(
            'RetailCalculatedLineDiscountPercentage',
            'Edm.Decimal',
            false
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
         * Static representation of the {@link serviceOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ServiceOrderNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link suframaDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUFRAMA_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'SuframaDiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveryAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE:
          fieldBuilder.buildEdmTypeField(
            'DeliveryAddressCountryRegionISOCode',
            'Edm.String',
            true
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
         * Static representation of the {@link routeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_ID: fieldBuilder.buildEdmTypeField('RouteId', 'Edm.String', true),
        /**
         * Static representation of the {@link deliveryAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link allowedOverdeliveryPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWED_OVERDELIVERY_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'AllowedOverdeliveryPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'LineDiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventoryServiceAdjustmentOffsetPhysicalMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SERVICE_ADJUSTMENT_OFFSET_PHYSICAL_MEASURE:
          fieldBuilder.buildEdmTypeField(
            'InventoryServiceAdjustmentOffsetPhysicalMeasure',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link retailCalculatedPeriodicDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CALCULATED_PERIODIC_DISCOUNT_AMOUNT:
          fieldBuilder.buildEdmTypeField(
            'RetailCalculatedPeriodicDiscountAmount',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link fixedPriceCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_PRICE_CHARGES: fieldBuilder.buildEdmTypeField(
          'FixedPriceCharges',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link multilineDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTILINE_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MultilineDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link retailCalculatedTenderDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CALCULATED_TENDER_DISCOUNT_AMOUNT:
          fieldBuilder.buildEdmTypeField(
            'RetailCalculatedTenderDiscountAmount',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link inventoryServiceReservationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SERVICE_RESERVATION_ID: fieldBuilder.buildEdmTypeField(
          'InventoryServiceReservationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatSpecialMovementCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_SPECIAL_MOVEMENT_CODE: fieldBuilder.buildEdmTypeField(
          'IntrastatSpecialMovementCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestedReceiptDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_RECEIPT_DATE: fieldBuilder.buildEdmTypeField(
          'RequestedReceiptDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link confirmedReceiptDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_RECEIPT_DATE: fieldBuilder.buildEdmTypeField(
          'ConfirmedReceiptDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link customsDocumentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomsDocumentNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eInvoiceDimensionAccountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_INVOICE_DIMENSION_ACCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'EInvoiceDimensionAccountCode',
          'Edm.String',
          true
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
         * Static representation of the {@link bomId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ID: fieldBuilder.buildEdmTypeField('BOMId', 'Edm.String', true),
        /**
         * Static representation of the {@link creditNoteReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_NOTE_REASON_CODE: fieldBuilder.buildEdmTypeField(
          'CreditNoteReasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giftCardRecipientEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_RECIPIENT_EMAIL: fieldBuilder.buildEdmTypeField(
          'GiftCardRecipientEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingWarehouseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_WAREHOUSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'ShippingWarehouseLocationId',
          'Edm.String',
          true
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
         * Static representation of the {@link catalog} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATALOG: fieldBuilder.buildEdmTypeField('Catalog', 'Edm.Int64', false),
        /**
         * Static representation of the {@link intrastatStatisticsProcedureCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_STATISTICS_PROCEDURE_CODE: fieldBuilder.buildEdmTypeField(
          'IntrastatStatisticsProcedureCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatCommodityCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_COMMODITY_CODE: fieldBuilder.buildEdmTypeField(
          'IntrastatCommodityCode',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link salesOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giftCardRecipientName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_RECIPIENT_NAME: fieldBuilder.buildEdmTypeField(
          'GiftCardRecipientName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDeliveryAddressPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELIVERY_ADDRESS_PRIVATE: fieldBuilder.buildEnumField(
          'IsDeliveryAddressPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willRebateCalculationExcludeLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_REBATE_CALCULATION_EXCLUDE_LINE: fieldBuilder.buildEnumField(
          'WillRebateCalculationExcludeLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link retailCalculatedLineDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CALCULATED_LINE_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RetailCalculatedLineDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveryAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willAutomaticInventoryReservationConsiderBatchAttributes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_AUTOMATIC_INVENTORY_RESERVATION_CONSIDER_BATCH_ATTRIBUTES:
          fieldBuilder.buildEnumField(
            'WillAutomaticInventoryReservationConsiderBatchAttributes',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link salesTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemWithholdingTaxCodeGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_WITHHOLDING_TAX_CODE_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'ItemWithholdingTaxCodeGroupCode',
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
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceFiscalInformationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_FISCAL_INFORMATION_CODE: fieldBuilder.buildEdmTypeField(
          'ServiceFiscalInformationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link commissionSalesRepresentativeGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_SALES_REPRESENTATIVE_GROUP_ID:
          fieldBuilder.buildEdmTypeField(
            'CommissionSalesRepresentativeGroupId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link orderedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'OrderedCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveryAddressStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreetInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPriceLocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRICE_LOCKED: fieldBuilder.buildEnumField(
          'IsPriceLocked',
          NoYes,
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
         * Static representation of the {@link lineDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'LineDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesRebateProductGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_REBATE_PRODUCT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SalesRebateProductGroupId',
          'Edm.String',
          true
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
         * Static representation of the {@link salesDeliverNow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_DELIVER_NOW: fieldBuilder.buildEdmTypeField(
          'SalesDeliverNow',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemSerialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eInvoicePropertyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_INVOICE_PROPERTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'EInvoicePropertyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailCalculatedTenderDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CALCULATED_TENDER_DISCOUNT_PERCENTAGE:
          fieldBuilder.buildEdmTypeField(
            'RetailCalculatedTenderDiscountPercentage',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link orderLineReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_LINE_REFERENCE: fieldBuilder.buildEdmTypeField(
          'OrderLineReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesPriceQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'SalesPriceQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link retailCalculatedTotalDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CALCULATED_TOTAL_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RetailCalculatedTotalDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link mainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_ID_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'MainAccountIdDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isIntrastatTriangularDeal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INTRASTAT_TRIANGULAR_DEAL: fieldBuilder.buildEnumField(
          'IsIntrastatTriangularDeal',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link retailCalculatedManualLineDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CALCULATED_MANUAL_LINE_DISCOUNT_AMOUNT:
          fieldBuilder.buildEdmTypeField(
            'RetailCalculatedManualLineDiscountAmount',
            'Edm.Decimal',
            false
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
         * Static representation of the {@link retailCalculatedTotalDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CALCULATED_TOTAL_DISCOUNT_PERCENTAGE:
          fieldBuilder.buildEdmTypeField(
            'RetailCalculatedTotalDiscountPercentage',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link deliveryAddressDunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDunsNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giftCardNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_NUMBER: fieldBuilder.buildEdmTypeField(
          'GiftCardNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesOrderPromisingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_PROMISING_METHOD: fieldBuilder.buildEnumField(
          'SalesOrderPromisingMethod',
          SalesDeliveryDateControlType,
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
         * Static representation of the {@link giftCardType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_TYPE: fieldBuilder.buildEnumField(
          'GiftCardType',
          McrGiftCardType,
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailCalculatedPeriodicDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CALCULATED_PERIODIC_DISCOUNT_PERCENTAGE:
          fieldBuilder.buildEdmTypeField(
            'RetailCalculatedPeriodicDiscountPercentage',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link shippingWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProjectCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatStatisticValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_STATISTIC_VALUE: fieldBuilder.buildEdmTypeField(
          'IntrastatStatisticValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link giftCardBuyerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_BUYER_NAME: fieldBuilder.buildEdmTypeField(
          'GiftCardBuyerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesProductCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRODUCT_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'SalesProductCategoryName',
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
         * Static representation of the {@link isLineStopped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LINE_STOPPED: fieldBuilder.buildEnumField(
          'IsLineStopped',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link formattedDelveryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_DELVERY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedDelveryAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryTermsId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TERMS_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryTermsId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customersLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMERS_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomersLineNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link deliveryAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'DeliveryAddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link fullRunCtpStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULL_RUN_CTP_STATUS: fieldBuilder.buildEnumField(
          'FullRunCTPStatus',
          MpsFullRunCtpStatus,
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
         * Static representation of the {@link fulfillmentStoreId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULFILLMENT_STORE_ID: fieldBuilder.buildEdmTypeField(
          'FulfillmentStoreId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ngpCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NGP_CODE: fieldBuilder.buildEdmTypeField('NGPCode', 'Edm.Int64', false),
        /**
         * Static representation of the {@link excludeFromMasterPlanning} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE_FROM_MASTER_PLANNING: fieldBuilder.buildEnumField(
          'ExcludeFromMasterPlanning',
          NoYes,
          true
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
         * Static representation of the {@link salesOrderLineCreationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_LINE_CREATION_METHOD: fieldBuilder.buildEnumField(
          'SalesOrderLineCreationMethod',
          SalesSalesOrderCreationMethod,
          true
        ),
        /**
         * Static representation of the {@link allowedUnderdeliveryPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWED_UNDERDELIVERY_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'AllowedUnderdeliveryPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link calculateLineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATE_LINE_AMOUNT: fieldBuilder.buildEnumField(
          'CalculateLineAmount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deliveryCfopCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_CFOP_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryCFOPCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packingUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'PackingUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatTransactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'IntrastatTransactionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxItemGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_ITEM_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxItemGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderedSalesQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERED_SALES_QUANTITY: fieldBuilder.buildEdmTypeField(
          'OrderedSalesQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fulfillmentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULFILLMENT_STATUS: fieldBuilder.buildEnumField(
          'FulfillmentStatus',
          RetailFulfillmentLineStatus,
          true
        ),
        /**
         * Static representation of the {@link projectLinePropertyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_LINE_PROPERTY_ID: fieldBuilder.buildEdmTypeField(
          'ProjectLinePropertyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_POST_BOX: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressPostBox',
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
         * Static representation of the {@link giftCardGiftMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIFT_CARD_GIFT_MESSAGE: fieldBuilder.buildEdmTypeField(
          'GiftCardGiftMessage',
          'Edm.String',
          true
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
         * Static representation of the {@link isDeliveryAddressOrderSpecific} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELIVERY_ADDRESS_ORDER_SPECIFIC: fieldBuilder.buildEnumField(
          'IsDeliveryAddressOrderSpecific',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link requestedShippingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_SHIPPING_DATE: fieldBuilder.buildEdmTypeField(
          'RequestedShippingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link deliveryAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLatitude',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link defaultLineNumberFromLineCreationSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_LINE_NUMBER_FROM_LINE_CREATION_SEQUENCE_NUMBER:
          fieldBuilder.buildEnumField(
            'DefaultLineNumberFromLineCreationSequenceNumber',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
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
         * Static representation of the {@link overrideSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_SALES_TAX: fieldBuilder.buildEnumField(
          'OverrideSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link bundleLineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUNDLE_LINE_TYPE: fieldBuilder.buildEnumField(
          'BundleLineType',
          BundleLineType,
          true
        ),
        /**
         * Static representation of the {@link bundleLineStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUNDLE_LINE_STATUS: fieldBuilder.buildEnumField(
          'BundleLineStatus',
          BundleLineStatus,
          true
        ),
        /**
         * Static representation of the {@link subBillRevenueSplit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_REVENUE_SPLIT: fieldBuilder.buildEnumField(
          'SubBillRevenueSplit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link revRecRevenueScheduleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_REVENUE_SCHEDULE_ID: fieldBuilder.buildEdmTypeField(
          'RevRecRevenueScheduleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revRecSalesDeliverNow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_SALES_DELIVER_NOW: fieldBuilder.buildEdmTypeField(
          'RevRecSalesDeliverNow',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link revRecContractEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_CONTRACT_END_DATE: fieldBuilder.buildEdmTypeField(
          'RevRecContractEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link revRecOccurrences} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_OCCURRENCES: fieldBuilder.buildEdmTypeField(
          'RevRecOccurrences',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link revRecContractStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_CONTRACT_START_DATE: fieldBuilder.buildEdmTypeField(
          'RevRecContractStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesOrderLines)
      };
    }

    return this._schema;
  }
}
