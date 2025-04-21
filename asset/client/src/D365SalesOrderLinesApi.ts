/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { D365SalesOrderLines } from './D365SalesOrderLines';
import { D365SalesOrderLinesRequestBuilder } from './D365SalesOrderLinesRequestBuilder';
import { D365SalesOrderHeadersApi } from './D365SalesOrderHeadersApi';
import { SalesStatus } from './SalesStatus';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { NoYes } from './NoYes';
import { SalesOrderIntegrationCreationType } from './SalesOrderIntegrationCreationType';
import { Timezone } from './Timezone';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class D365SalesOrderLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<D365SalesOrderLines<DeSerializersT>, DeSerializersT>
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
  ): D365SalesOrderLinesApi<DeSerializersT> {
    return new D365SalesOrderLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link d365SalesOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    D_365_SALES_ORDER_HEADER: OneToOneLink<
      D365SalesOrderLines<DeSerializersT>,
      DeSerializersT,
      D365SalesOrderHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [D365SalesOrderHeadersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      D_365_SALES_ORDER_HEADER: new OneToOneLink(
        'D365SalesOrderHeader',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = D365SalesOrderLines;

  requestBuilder(): D365SalesOrderLinesRequestBuilder<DeSerializersT> {
    return new D365SalesOrderLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    D365SalesOrderLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<D365SalesOrderLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    D365SalesOrderLines<DeSerializersT>,
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
    typeof D365SalesOrderLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        D365SalesOrderLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ORDER_NUMBER: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_CREATION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REQUESTED_RECEIPT_DATE: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_ORDER_LINE_STATUS: EnumField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      SalesStatus,
      true,
      true
    >;
    PROJECT_CATEGORY_ID: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MULTILINE_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIPPING_WAREHOUSE_ID: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PRODUCT_CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MULTILINE_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LATITUDE: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_CITY: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PRODUCT_CATEGORY_NAME: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_PROMISING_METHOD: EnumField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      SalesDeliveryDateControlType,
      true,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_LINE_PROPERTY_ID: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_UNIT_SYMBOL: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_DELIVER_NOW: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONFIRMED_RECEIPT_DATE: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FIXED_PRICE_CHARGES: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TERMS_ID: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_NAME: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDERED_SALES_QUANTITY: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_SITE_ID: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_PRIVATE: EnumField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ARE_TOTALS_CALCULATED: EnumField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TOTAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_SERVICE_RESERVATION_ID: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDERED_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_INTEGRATION_CREATION_TYPE: EnumField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      SalesOrderIntegrationCreationType,
      true,
      true
    >;
    TOTAL_TAX_AMOUNT: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DESCRIPTION: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_MODE_CODE: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIRMED_SHIPPING_DATE: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVENTORY_LOT_ID: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_ORDER_SPECIFIC: EnumField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TOTAL_CHARGES_AMOUNT: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOWED_UNDERDELIVERY_PERCENTAGE: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOWED_OVERDELIVERY_PERCENTAGE: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_TIME_ZONE: EnumField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    DELIVERY_ADDRESS_STATE_ID: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_POST_BOX: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_AMOUNT: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_PRICE_QUANTITY: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQUESTED_SHIPPING_DATE: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SKIP_CREATE_AUTO_CHARGES: EnumField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXTERNAL_ITEM_NUMBER: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_DELIVERY_ADDRESS: OrderableEdmTypeField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_LINE_STOPPED: EnumField<
      D365SalesOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link d365SalesOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    D_365_SALES_ORDER_HEADER: OneToOneLink<
      D365SalesOrderLines<DeSerializersT>,
      DeSerializersT,
      D365SalesOrderHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<D365SalesOrderLines<DeSerializers>>;
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
         * Static representation of the {@link requestedReceiptDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_RECEIPT_DATE: fieldBuilder.buildEdmTypeField(
          'RequestedReceiptDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link projectCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProjectCategoryId',
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
         * Static representation of the {@link multilineDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTILINE_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'MultilineDiscountPercentage',
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
         * Static representation of the {@link salesProductCategoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRODUCT_CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'SalesProductCategoryHierarchyName',
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
         * Static representation of the {@link multilineDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTILINE_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MultilineDiscountAmount',
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
         * Static representation of the {@link deliveryAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCountryRegionId',
          'Edm.String',
          true
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
         * Static representation of the {@link deliveryAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCity',
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
         * Static representation of the {@link salesOrderPromisingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_PROMISING_METHOD: fieldBuilder.buildEnumField(
          'SalesOrderPromisingMethod',
          SalesDeliveryDateControlType,
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
         * Static representation of the {@link projectLinePropertyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_LINE_PROPERTY_ID: fieldBuilder.buildEdmTypeField(
          'ProjectLinePropertyId',
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
         * Static representation of the {@link deliveryAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCountyId',
          'Edm.String',
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
         * Static representation of the {@link salesDeliverNow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_DELIVER_NOW: fieldBuilder.buildEdmTypeField(
          'SalesDeliverNow',
          'Edm.Decimal',
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
         * Static representation of the {@link fixedPriceCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_PRICE_CHARGES: fieldBuilder.buildEdmTypeField(
          'FixedPriceCharges',
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
         * Static representation of the {@link deliveryAddressDunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDunsNumber',
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
         * Static representation of the {@link deliveryAddressName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressName',
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
         * Static representation of the {@link deliveryAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreetNumber',
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
         * Static representation of the {@link isDeliveryAddressPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELIVERY_ADDRESS_PRIVATE: fieldBuilder.buildEnumField(
          'IsDeliveryAddressPrivate',
          NoYes,
          true
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
         * Static representation of the {@link totalDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalDiscountAmount',
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
         * Static representation of the {@link orderedInventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERED_INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'OrderedInventoryStatusId',
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
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesOrderIntegrationCreationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_INTEGRATION_CREATION_TYPE: fieldBuilder.buildEnumField(
          'SalesOrderIntegrationCreationType',
          SalesOrderIntegrationCreationType,
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
         * Static representation of the {@link deliveryAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLocationId',
          'Edm.String',
          true
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
         * Static representation of the {@link lineDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'LineDescription',
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
         * Static representation of the {@link deliveryModeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_MODE_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryModeCode',
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
         * Static representation of the {@link inventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'InventoryLotId',
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
         * Static representation of the {@link totalChargesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_CHARGES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalChargesAmount',
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
         * Static representation of the {@link salesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'SalesPrice',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link allowedOverdeliveryPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWED_OVERDELIVERY_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'AllowedOverdeliveryPercentage',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link deliveryAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStateId',
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
         * Static representation of the {@link requestedShippingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_SHIPPING_DATE: fieldBuilder.buildEdmTypeField(
          'RequestedShippingDate',
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
         * Static representation of the {@link externalItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExternalItemNumber',
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
         * Static representation of the {@link isLineStopped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LINE_STOPPED: fieldBuilder.buildEnumField(
          'IsLineStopped',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', D365SalesOrderLines)
      };
    }

    return this._schema;
  }
}
