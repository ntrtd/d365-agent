/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FreightBillDetails } from './FreightBillDetails';
import { FreightBillDetailsRequestBuilder } from './FreightBillDetailsRequestBuilder';
import { ShippingCarriersApi } from './ShippingCarriersApi';
import { TransportationModesApi } from './TransportationModesApi';
import { VendorsV2Api } from './VendorsV2Api';
import { CustomersV3Api } from './CustomersV3Api';
import { Timezone } from './Timezone';
import { NoYes } from './NoYes';
import { TmsDirection } from './TmsDirection';
import { TmsFreightBillMatchStatus } from './TmsFreightBillMatchStatus';
import { TmsLineType } from './TmsLineType';
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
export class FreightBillDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FreightBillDetails<DeSerializersT>, DeSerializersT>
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
  ): FreightBillDetailsApi<DeSerializersT> {
    return new FreightBillDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER: OneToOneLink<
      FreightBillDetails<DeSerializersT>,
      DeSerializersT,
      ShippingCarriersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transportationMode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSPORTATION_MODE: OneToOneLink<
      FreightBillDetails<DeSerializersT>,
      DeSerializersT,
      TransportationModesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrierVendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER_VENDOR: OneToOneLink<
      FreightBillDetails<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link loadCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAD_CUSTOMER: OneToOneLink<
      FreightBillDetails<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ShippingCarriersApi<DeSerializersT>,
      TransportationModesApi<DeSerializersT>,
      VendorsV2Api<DeSerializersT>,
      CustomersV3Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SHIPPING_CARRIER: new OneToOneLink(
        'ShippingCarrier',
        this,
        linkedApis[0]
      ),
      TRANSPORTATION_MODE: new OneToOneLink(
        'TransportationMode',
        this,
        linkedApis[1]
      ),
      SHIPPING_CARRIER_VENDOR: new OneToOneLink(
        'ShippingCarrierVendor',
        this,
        linkedApis[2]
      ),
      LOAD_CUSTOMER: new OneToOneLink('LoadCustomer', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = FreightBillDetails;

  requestBuilder(): FreightBillDetailsRequestBuilder<DeSerializersT> {
    return new FreightBillDetailsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FreightBillDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FreightBillDetails<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FreightBillDetails<DeSerializersT>,
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
    typeof FreightBillDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FreightBillDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FREIGHT_BILL_ID: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FREIGHT_BILL_DETAIL_ENTRY_NUMBER: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PICKUP_ADDRESS_STATE_ID: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DROP_OFF_ADDRESS_LATITUDE: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOAD_SALES_ORDER_NUMBER: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_RATE: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DROP_OFF_ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_TIME_ZONE: EnumField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    TRANSPORTATION_ROUTE_PLAN_ID: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEQUENCE_NUMBER: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DROP_OFF_ADDRESS_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_DROP_OFF_ADDRESS: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_POST_BOX: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CYCLE_COUNT_DATE_TIME: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RATE_NOTES: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_SERVICE_ID: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_ID: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREIGHT_BILL_TYPE_ID: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RATE_UNIT: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRO_NUMBER_CODE: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RATE_UNIT_METHOD: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSPORTATION_BOOKING_NUMBER: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREIGHT_BILL_ORDER_QUANTITY: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PICKUP_ADDRESS_CITY: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DROP_OFF_ADDRESS_PRIVATE: EnumField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOAD_PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_HUB_ID: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_MODE_CODE: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_BILLING_GROUP_ID: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOAD_ID: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_PICKUP_ADDRESS: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPMENT_ID: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STANDARD_TRANSPORTATION_COMMODITY_CODE: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_TIME_ZONE: EnumField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    TRAILER_NUMBER: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_MOVEMENT_DIRECTION_RULE: EnumField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      TmsDirection,
      true,
      true
    >;
    DROP_OFF_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOAD_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECONCILIATION_STATUS: EnumField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      TmsFreightBillMatchStatus,
      true,
      true
    >;
    TRANSPORTATION_EQUIPMENT_CODE: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREIGHT_BILL_ORDER_AMOUNT: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_POST_BOX: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_STREET: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOYAGE_NUM: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_LINE_TYPE: EnumField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      TmsLineType,
      true,
      true
    >;
    PICKUP_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VESSEL_NAME: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRACTOR_NUMBER: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_LATITUDE: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PICKUP_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSPORTATION_EXTERNAL_CODE: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCESSORIAL_CHARGE_MASTER_CODE: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_STATE_ID: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_STREET: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_OF_LADING_ID: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PICKUP_ADDRESS_PRIVATE: EnumField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIPPING_CARRIER_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_CITY: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOAD_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOLDING_FREIGHT_END_DATETIME: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PHYSICAL_WEIGHT: OrderableEdmTypeField<
      FreightBillDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER: OneToOneLink<
      FreightBillDetails<DeSerializersT>,
      DeSerializersT,
      ShippingCarriersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transportationMode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSPORTATION_MODE: OneToOneLink<
      FreightBillDetails<DeSerializersT>,
      DeSerializersT,
      TransportationModesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrierVendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER_VENDOR: OneToOneLink<
      FreightBillDetails<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link loadCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAD_CUSTOMER: OneToOneLink<
      FreightBillDetails<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FreightBillDetails<DeSerializers>>;
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
         * Static representation of the {@link freightBillId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT_BILL_ID: fieldBuilder.buildEdmTypeField(
          'FreightBillId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link freightBillDetailEntryNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT_BILL_DETAIL_ENTRY_NUMBER: fieldBuilder.buildEdmTypeField(
          'FreightBillDetailEntryNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link pickupAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'PickupAddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'DropOffAddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dropOffAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'DropOffAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link loadSalesOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_SALES_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'LoadSalesOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'PickupAddressBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_RATE: fieldBuilder.buildEdmTypeField(
          'TotalRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dropOffAddressCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'DropOffAddressCityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'DropOffAddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link transportationRoutePlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_ROUTE_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'TransportationRoutePlanId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SequenceNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link dropOffAddressBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'DropOffAddressBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formattedDropOffAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_DROP_OFF_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedDropOffAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'DropOffAddressStreetInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_POST_BOX: fieldBuilder.buildEdmTypeField(
          'DropOffAddressPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastCycleCountDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CYCLE_COUNT_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'LastCycleCountDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link rateNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_NOTES: fieldBuilder.buildEdmTypeField(
          'RateNotes',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingCarrierServiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_SERVICE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierServiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_COUNTRY_REGION_ISO_CODE:
          fieldBuilder.buildEdmTypeField(
            'DropOffAddressCountryRegionISOCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link dropOffAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'DropOffAddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingCarrierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freightBillTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT_BILL_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'FreightBillTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'PickupAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rateUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_UNIT: fieldBuilder.buildEdmTypeField(
          'RateUnit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link proNumberCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRO_NUMBER_CODE: fieldBuilder.buildEdmTypeField(
          'ProNumberCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'PickupAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PickupAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rateUnitMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_UNIT_METHOD: fieldBuilder.buildEdmTypeField(
          'RateUnitMethod',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transportationBookingNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_BOOKING_NUMBER: fieldBuilder.buildEdmTypeField(
          'TransportationBookingNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freightBillOrderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT_BILL_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'FreightBillOrderQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link pickupAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'PickupAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDropOffAddressPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DROP_OFF_ADDRESS_PRIVATE: fieldBuilder.buildEnumField(
          'IsDropOffAddressPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link loadPurchaseOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_PURCHASE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'LoadPurchaseOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationHubId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_HUB_ID: fieldBuilder.buildEdmTypeField(
          'TransportationHubId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressDunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'DropOffAddressDunsNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'DropOffAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationModeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_MODE_CODE: fieldBuilder.buildEdmTypeField(
          'TransportationModeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationBillingGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_BILLING_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'TransportationBillingGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_ID: fieldBuilder.buildEdmTypeField('LoadId', 'Edm.String', true),
        /**
         * Static representation of the {@link dropOffAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'DropOffAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formattedPickupAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_PICKUP_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedPickupAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'PickupAddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_ID: fieldBuilder.buildEdmTypeField(
          'ShipmentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link standardTransportationCommodityCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDARD_TRANSPORTATION_COMMODITY_CODE: fieldBuilder.buildEdmTypeField(
          'StandardTransportationCommodityCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'PickupAddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link trailerNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRAILER_NUMBER: fieldBuilder.buildEdmTypeField(
          'TrailerNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'DropOffAddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'PickupAddressCityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'DropOffAddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productMovementDirectionRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_MOVEMENT_DIRECTION_RULE: fieldBuilder.buildEnumField(
          'ProductMovementDirectionRule',
          TmsDirection,
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DropOffAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadCustomerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'LoadCustomerAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reconciliationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECONCILIATION_STATUS: fieldBuilder.buildEnumField(
          'ReconciliationStatus',
          TmsFreightBillMatchStatus,
          true
        ),
        /**
         * Static representation of the {@link transportationEquipmentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_EQUIPMENT_CODE: fieldBuilder.buildEdmTypeField(
          'TransportationEquipmentCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freightBillOrderAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT_BILL_ORDER_AMOUNT: fieldBuilder.buildEdmTypeField(
          'FreightBillOrderAmount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_POST_BOX: fieldBuilder.buildEdmTypeField(
          'PickupAddressPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'DropOffAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voyageNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOYAGE_NUM: fieldBuilder.buildEdmTypeField(
          'VoyageNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceLineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_LINE_TYPE: fieldBuilder.buildEnumField(
          'InvoiceLineType',
          TmsLineType,
          true
        ),
        /**
         * Static representation of the {@link pickupAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'PickupAddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vesselName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VESSEL_NAME: fieldBuilder.buildEdmTypeField(
          'VesselName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tractorNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACTOR_NUMBER: fieldBuilder.buildEdmTypeField(
          'TractorNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'PickupAddressStreetInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'PickupAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link pickupAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'PickupAddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transportationExternalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_EXTERNAL_CODE: fieldBuilder.buildEdmTypeField(
          'TransportationExternalCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accessorialChargeMasterCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCESSORIAL_CHARGE_MASTER_CODE: fieldBuilder.buildEdmTypeField(
          'AccessorialChargeMasterCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'DropOffAddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'PickupAddressCountryRegionISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'PickupAddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'PickupAddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'PickupAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'DropOffAddressStreetNumber',
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
         * Static representation of the {@link billOfLadingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_LADING_ID: fieldBuilder.buildEdmTypeField(
          'BillOfLadingId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPickupAddressPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PICKUP_ADDRESS_PRIVATE: fieldBuilder.buildEnumField(
          'IsPickupAddressPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shippingCarrierVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressDunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'PickupAddressDunsNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'DropOffAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'LoadVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link holdingFreightEndDatetime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOLDING_FREIGHT_END_DATETIME: fieldBuilder.buildEdmTypeField(
          'HoldingFreightEndDatetime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link physicalWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_WEIGHT: fieldBuilder.buildEdmTypeField(
          'PhysicalWeight',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FreightBillDetails)
      };
    }

    return this._schema;
  }
}
