/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ConsignmentReplenishmentOrderLines } from './ConsignmentReplenishmentOrderLines';
import { ConsignmentReplenishmentOrderLinesRequestBuilder } from './ConsignmentReplenishmentOrderLinesRequestBuilder';
import { ConsignmentReplenishmentOrderHeadersApi } from './ConsignmentReplenishmentOrderHeadersApi';
import { NoYes } from './NoYes';
import { ConsignmentReplenishmentOrderLineStatus } from './ConsignmentReplenishmentOrderLineStatus';
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
export class ConsignmentReplenishmentOrderLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ConsignmentReplenishmentOrderLines<DeSerializersT>,
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
  ): ConsignmentReplenishmentOrderLinesApi<DeSerializersT> {
    return new ConsignmentReplenishmentOrderLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link consignmentReplenishmentOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONSIGNMENT_REPLENISHMENT_ORDER_HEADER: OneToOneLink<
      ConsignmentReplenishmentOrderLines<DeSerializersT>,
      DeSerializersT,
      ConsignmentReplenishmentOrderHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ConsignmentReplenishmentOrderHeadersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CONSIGNMENT_REPLENISHMENT_ORDER_HEADER: new OneToOneLink(
        'ConsignmentReplenishmentOrderHeader',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ConsignmentReplenishmentOrderLines;

  requestBuilder(): ConsignmentReplenishmentOrderLinesRequestBuilder<DeSerializersT> {
    return new ConsignmentReplenishmentOrderLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ConsignmentReplenishmentOrderLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ConsignmentReplenishmentOrderLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ConsignmentReplenishmentOrderLines<DeSerializersT>,
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
    typeof ConsignmentReplenishmentOrderLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ConsignmentReplenishmentOrderLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONSIGNMENT_REPLENISHMENT_ORDER_NUMBER: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ORDERED_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_SITE_ID: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_PRIVATE: EnumField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_CITY: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNMENT_REPLENISHMENT_ORDER_LINE_STATUS: EnumField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      ConsignmentReplenishmentOrderLineStatus,
      true,
      true
    >;
    ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_UNIT_SYMBOL: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_POST_BOX: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNMENT_REPLENISHMENT_QUANTITY: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LATITUDE: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_TIME_ZONE: EnumField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    FORMATTED_DELIVERY_ADDRESS: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNMENT_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIRMED_DELIVERY_DATE: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_ADDRESS_NAME: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STATE_ID: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNMENT_REPLENISHMENT_INVENTORY_QUANTITY: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_DELIVERY_ADDRESS_ORDER_SPECIFIC: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_WAREHOUSE_ID: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_OWNER_ID: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_DELIVERY_DATE: OrderableEdmTypeField<
      ConsignmentReplenishmentOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link consignmentReplenishmentOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONSIGNMENT_REPLENISHMENT_ORDER_HEADER: OneToOneLink<
      ConsignmentReplenishmentOrderLines<DeSerializersT>,
      DeSerializersT,
      ConsignmentReplenishmentOrderHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ConsignmentReplenishmentOrderLines<DeSerializers>>;
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
         * Static representation of the {@link consignmentReplenishmentOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNMENT_REPLENISHMENT_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConsignmentReplenishmentOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
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
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
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
         * Static representation of the {@link deliveryAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingSiteId',
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
         * Static representation of the {@link deliveryAddressBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressBuildingCompliment',
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
         * Static representation of the {@link deliveryAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressZipCode',
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
         * Static representation of the {@link deliveryAddressDunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDunsNumber',
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
         * Static representation of the {@link consignmentReplenishmentOrderLineStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNMENT_REPLENISHMENT_ORDER_LINE_STATUS:
          fieldBuilder.buildEnumField(
            'ConsignmentReplenishmentOrderLineStatus',
            ConsignmentReplenishmentOrderLineStatus,
            true
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
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
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
         * Static representation of the {@link purchaseUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'PurchaseUnitSymbol',
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
         * Static representation of the {@link consignmentReplenishmentQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNMENT_REPLENISHMENT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ConsignmentReplenishmentQuantity',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link deliveryAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLatitude',
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
         * Static representation of the {@link formattedDeliveryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_DELIVERY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedDeliveryAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consignmentVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNMENT_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConsignmentVendorAccountNumber',
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
         * Static representation of the {@link confirmedDeliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'ConfirmedDeliveryDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
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
         * Static representation of the {@link deliveryAddressCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCityInKana',
          'Edm.String',
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
         * Static representation of the {@link consignmentReplenishmentInventoryQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNMENT_REPLENISHMENT_INVENTORY_QUANTITY:
          fieldBuilder.buildEdmTypeField(
            'ConsignmentReplenishmentInventoryQuantity',
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
        IS_DELIVERY_ADDRESS_ORDER_SPECIFIC: fieldBuilder.buildEdmTypeField(
          'IsDeliveryAddressOrderSpecific',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryOwnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_OWNER_ID: fieldBuilder.buildEdmTypeField(
          'InventoryOwnerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestedDeliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'RequestedDeliveryDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ConsignmentReplenishmentOrderLines)
      };
    }

    return this._schema;
  }
}
