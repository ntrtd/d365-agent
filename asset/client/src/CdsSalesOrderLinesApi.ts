/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CdsSalesOrderLines } from './CdsSalesOrderLines';
import { CdsSalesOrderLinesRequestBuilder } from './CdsSalesOrderLinesRequestBuilder';
import { CdsSalesOrderHeadersApi } from './CdsSalesOrderHeadersApi';
import { SalesOrderLineDocumentAttachmentsV2Api } from './SalesOrderLineDocumentAttachmentsV2Api';
import { NoYes } from './NoYes';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { SalesOrderProcessingStatus } from './SalesOrderProcessingStatus';
import { SalesStatus } from './SalesStatus';
import { Timezone } from './Timezone';
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
  EnumField,
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class CdsSalesOrderLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CdsSalesOrderLines<DeSerializersT>, DeSerializersT>
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
  ): CdsSalesOrderLinesApi<DeSerializersT> {
    return new CdsSalesOrderLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link cdsSalesOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_SALES_ORDER_HEADER: OneToOneLink<
      CdsSalesOrderLines<DeSerializersT>,
      DeSerializersT,
      CdsSalesOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesOrderLineDocumentAttachments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_LINE_DOCUMENT_ATTACHMENTS: OneToManyLink<
      CdsSalesOrderLines<DeSerializersT>,
      DeSerializersT,
      SalesOrderLineDocumentAttachmentsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CdsSalesOrderHeadersApi<DeSerializersT>,
      SalesOrderLineDocumentAttachmentsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CDS_SALES_ORDER_HEADER: new OneToOneLink(
        'CDSSalesOrderHeader',
        this,
        linkedApis[0]
      ),
      SALES_ORDER_LINE_DOCUMENT_ATTACHMENTS: new OneToManyLink(
        'SalesOrderLineDocumentAttachments',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = CdsSalesOrderLines;

  requestBuilder(): CdsSalesOrderLinesRequestBuilder<DeSerializersT> {
    return new CdsSalesOrderLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CdsSalesOrderLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CdsSalesOrderLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CdsSalesOrderLines<DeSerializersT>,
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
    typeof CdsSalesOrderLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CdsSalesOrderLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ORDER_NUMBER: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_CREATION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ARE_TOTALS_CALCULATED: EnumField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_UNIT_SYMBOL: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOWED_UNDERDELIVERY_PERCENTAGE: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORDERED_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_SITE_ID: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARE_SALES_ORDER_TOTALS_UPDATED: EnumField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_PROMISING_METHOD: EnumField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      SalesDeliveryDateControlType,
      true,
      true
    >;
    MULTILINE_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_TERMS_ID: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DESCRIPTION: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_DELIVER_NOW: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIRMED_SHIPPING_DATE: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIPPING_WAREHOUSE_ID: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_RECEIPT_DATE: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_PRODUCT_CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDERED_SALES_QUANTITY: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_PROCESSING_STATUS: EnumField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      SalesOrderProcessingStatus,
      true,
      true
    >;
    PICKED_QUANTITY: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_AMOUNT: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_PRICE_QUANTITY: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_TAX_AMOUNT: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIXED_PRICE_CHARGES: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_PRIVATE: EnumField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_CITY: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MULTILINE_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_LINE_STOPPED: EnumField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_ORDER_LINE_STATUS: EnumField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      SalesStatus,
      true,
      true
    >;
    TOTAL_CHARGES_AMOUNT: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_POST_BOX: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_SHIPPING_DATE: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_PRODUCT_CATEGORY_NAME: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_LATITUDE: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOWED_OVERDELIVERY_PERCENTAGE: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_TIME_ZONE: EnumField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    DELIVERY_MODE_CODE: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_DELIVERY_ADDRESS: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_ITEM_NUMBER: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_NAME: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIRMED_RECEIPT_DATE: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJECT_CATEGORY_ID: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_NUMBER_HEADER: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_CUSTOMER_IS_EXTERNALLY_MAINTAINED: EnumField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_STATE_ID: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_ORIGIN_TYPE: EnumField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      SalesOriginType,
      true,
      true
    >;
    PROJECT_LINE_PROPERTY_ID: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDERING_CUSTOMER_IS_EXTERNALLY_MAINTAINED: EnumField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_DELIVERY_ADDRESS_ORDER_SPECIFIC: EnumField<
      CdsSalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsSalesOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_SALES_ORDER_HEADER: OneToOneLink<
      CdsSalesOrderLines<DeSerializersT>,
      DeSerializersT,
      CdsSalesOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesOrderLineDocumentAttachments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_LINE_DOCUMENT_ATTACHMENTS: OneToManyLink<
      CdsSalesOrderLines<DeSerializersT>,
      DeSerializersT,
      SalesOrderLineDocumentAttachmentsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CdsSalesOrderLines<DeSerializers>>;
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
         * Static representation of the {@link salesOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesOrderNumber',
          'Edm.String',
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
         * Static representation of the {@link areTotalsCalculated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_TOTALS_CALCULATED: fieldBuilder.buildEnumField(
          'AreTotalsCalculated',
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
         * Static representation of the {@link allowedUnderdeliveryPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWED_UNDERDELIVERY_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'AllowedUnderdeliveryPercentage',
          'Edm.Decimal',
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
         * Static representation of the {@link shippingSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link areSalesOrderTotalsUpdated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_SALES_ORDER_TOTALS_UPDATED: fieldBuilder.buildEnumField(
          'AreSalesOrderTotalsUpdated',
          NoYes,
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
         * Static representation of the {@link deliveryAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCountyId',
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
         * Static representation of the {@link salesOrderPromisingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_PROMISING_METHOD: fieldBuilder.buildEnumField(
          'SalesOrderPromisingMethod',
          SalesDeliveryDateControlType,
          true
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
         * Static representation of the {@link lineDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineDiscountAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link lineDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'LineDescription',
          'Edm.String',
          true
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
         * Static representation of the {@link deliveryAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressZipCode',
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
         * Static representation of the {@link shippingWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingWarehouseId',
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
         * Static representation of the {@link salesProductCategoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRODUCT_CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'SalesProductCategoryHierarchyName',
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
         * Static representation of the {@link deliveryAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesOrderProcessingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_PROCESSING_STATUS: fieldBuilder.buildEnumField(
          'SalesOrderProcessingStatus',
          SalesOrderProcessingStatus,
          true
        ),
        /**
         * Static representation of the {@link pickedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'PickedQuantity',
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
         * Static representation of the {@link lineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link lineDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'LineDiscountPercentage',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link fixedPriceCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_PRICE_CHARGES: fieldBuilder.buildEdmTypeField(
          'FixedPriceCharges',
          'Edm.Decimal',
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
         * Static representation of the {@link productName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NAME: fieldBuilder.buildEdmTypeField(
          'ProductName',
          'Edm.String',
          true
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
         * Static representation of the {@link multilineDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTILINE_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'MultilineDiscountPercentage',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link salesOrderLineStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_LINE_STATUS: fieldBuilder.buildEnumField(
          'SalesOrderLineStatus',
          SalesStatus,
          true
        ),
        /**
         * Static representation of the {@link totalChargesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_CHARGES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalChargesAmount',
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
         * Static representation of the {@link deliveryBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'DeliveryBuildingCompliment',
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
         * Static representation of the {@link deliveryAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDescription',
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
         * Static representation of the {@link requestedShippingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_SHIPPING_DATE: fieldBuilder.buildEdmTypeField(
          'RequestedShippingDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link totalDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalDiscountAmount',
          'Edm.Decimal',
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
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          true
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
         * Static representation of the {@link deliveryAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'DeliveryAddressTimeZone',
          Timezone,
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
         * Static representation of the {@link formattedDeliveryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_DELIVERY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedDeliveryAddress',
          'Edm.String',
          true
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
         * Static representation of the {@link itemBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemBatchNumber',
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
         * Static representation of the {@link confirmedReceiptDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_RECEIPT_DATE: fieldBuilder.buildEdmTypeField(
          'ConfirmedReceiptDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link salesOrderNumberHeader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_NUMBER_HEADER: fieldBuilder.buildEdmTypeField(
          'SalesOrderNumberHeader',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceCustomerIsExternallyMaintained} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_CUSTOMER_IS_EXTERNALLY_MAINTAINED: fieldBuilder.buildEnumField(
          'InvoiceCustomerIsExternallyMaintained',
          NoYes,
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
         * Static representation of the {@link salesOrderOriginType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_ORIGIN_TYPE: fieldBuilder.buildEnumField(
          'SalesOrderOriginType',
          SalesOriginType,
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
         * Static representation of the {@link orderingCustomerIsExternallyMaintained} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERING_CUSTOMER_IS_EXTERNALLY_MAINTAINED: fieldBuilder.buildEnumField(
          'OrderingCustomerIsExternallyMaintained',
          NoYes,
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
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
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
         * Static representation of the {@link isDeliveryAddressOrderSpecific} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELIVERY_ADDRESS_ORDER_SPECIFIC: fieldBuilder.buildEnumField(
          'IsDeliveryAddressOrderSpecific',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CdsSalesOrderLines)
      };
    }

    return this._schema;
  }
}
