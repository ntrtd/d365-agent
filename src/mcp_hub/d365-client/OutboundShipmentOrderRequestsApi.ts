/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OutboundShipmentOrderRequests } from './OutboundShipmentOrderRequests';
import { OutboundShipmentOrderRequestsRequestBuilder } from './OutboundShipmentOrderRequestsRequestBuilder';
import { OutboundShipmentOrderLineRequestsApi } from './OutboundShipmentOrderLineRequestsApi';
import { Timezone } from './Timezone';
import { WhsOutboundShipmentOrderReservationAtImportPolicy } from './WhsOutboundShipmentOrderReservationAtImportPolicy';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class OutboundShipmentOrderRequestsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<OutboundShipmentOrderRequests<DeSerializersT>, DeSerializersT>
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
  ): OutboundShipmentOrderRequestsApi<DeSerializersT> {
    return new OutboundShipmentOrderRequestsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link lines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LINES: OneToManyLink<
      OutboundShipmentOrderRequests<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderLineRequestsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [OutboundShipmentOrderLineRequestsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      LINES: new OneToManyLink('Lines', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = OutboundShipmentOrderRequests;

  requestBuilder(): OutboundShipmentOrderRequestsRequestBuilder<DeSerializersT> {
    return new OutboundShipmentOrderRequestsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    OutboundShipmentOrderRequests<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OutboundShipmentOrderRequests<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OutboundShipmentOrderRequests<DeSerializersT>,
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
    typeof OutboundShipmentOrderRequests,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OutboundShipmentOrderRequests,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OUTBOUND_SHIPMENT_ORDER_REQUEST_ID: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECEIVER_NAME: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_CITY_KANA_JP: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_STREET: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DLV_MODE_ID: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARRIER_CODE: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_STREET_KANA_JP: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BROKER_CODE: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_CITY: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_COUNTY: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_COUNTRY_REGION_ID: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_STREET_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_PURCHASE_ORDER_ID: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_CONTACT_EMAIL: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_NAME: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_ZIP_CODE: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_SHIPPING_PERIOD_START: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSPORTATION_MODE_CODE: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNED_TRANSPORTATION_ID: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_COUNTRY_REGION_ID: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTE_CONFIG_CODE: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARRIER_SERVICE_CODE: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_FROM_WAREHOUSE_ID: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_DELIVERY_PERIOD_END: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RECEIVER_CITY: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_STATE: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_TIME_ZONE: EnumField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    REQUESTED_DELIVERY_PERIOD_START: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONSIGNEE_POST_BOX: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_STREET: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_STATE: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_ACCOUNT_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_LONGITUDE: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIVER_ZIP_CODE: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_COUNTY: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_STREET_IN_KANA: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_DISTRICT: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CONSIGNEE_DISTRICT: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REQUEST_VERSION: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RECEIVER_STREET_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUTBOUND_SHIPMENT_ORDER_ORIGIN_ID: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_LATITUDE: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSIGNEE_TIME_ZONE: EnumField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    RECEIVER_LONGITUDE: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQUESTED_SHIPPING_PERIOD_END: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DLV_TERM_ID: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARRIER_GROUP_CODE: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_POST_BOX: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_CITY_KANA_JP: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_LATITUDE: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSIGNEE_CONTACT_PHONE: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_REFERENCE: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_CONTACT_NAME: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESERVATION_AT_IMPORT_POLICY: EnumField<
      OutboundShipmentOrderRequests<DeSerializers>,
      DeSerializersT,
      WhsOutboundShipmentOrderReservationAtImportPolicy,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link lines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LINES: OneToManyLink<
      OutboundShipmentOrderRequests<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderLineRequestsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OutboundShipmentOrderRequests<DeSerializers>>;
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
         * Static representation of the {@link outboundShipmentOrderRequestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTBOUND_SHIPMENT_ORDER_REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'OutboundShipmentOrderRequestId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link receiverName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_NAME: fieldBuilder.buildEdmTypeField(
          'ReceiverName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverCityKanaJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_CITY_KANA_JP: fieldBuilder.buildEdmTypeField(
          'ReceiverCityKana_JP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_STREET: fieldBuilder.buildEdmTypeField(
          'ConsigneeStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dlvModeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_MODE_ID: fieldBuilder.buildEdmTypeField(
          'DlvModeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link carrierCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARRIER_CODE: fieldBuilder.buildEdmTypeField(
          'CarrierCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverStreetKanaJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_STREET_KANA_JP: fieldBuilder.buildEdmTypeField(
          'ReceiverStreetKana_JP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link brokerCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BROKER_CODE: fieldBuilder.buildEdmTypeField(
          'BrokerCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_CITY: fieldBuilder.buildEdmTypeField(
          'ConsigneeCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_COUNTY: fieldBuilder.buildEdmTypeField(
          'ReceiverCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'ConsigneeCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConsigneeStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneePurchaseOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_PURCHASE_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'ConsigneePurchaseOrderId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeContactEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_CONTACT_EMAIL: fieldBuilder.buildEdmTypeField(
          'ConsigneeContactEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_NAME: fieldBuilder.buildEdmTypeField(
          'ConsigneeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'ConsigneeZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestedShippingPeriodStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_SHIPPING_PERIOD_START: fieldBuilder.buildEdmTypeField(
          'RequestedShippingPeriodStart',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link plannedTransportationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_TRANSPORTATION_ID: fieldBuilder.buildEdmTypeField(
          'PlannedTransportationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'ReceiverCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link routeConfigCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_CONFIG_CODE: fieldBuilder.buildEdmTypeField(
          'RouteConfigCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link carrierServiceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARRIER_SERVICE_CODE: fieldBuilder.buildEdmTypeField(
          'CarrierServiceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipFromWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_FROM_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ShipFromWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestedDeliveryPeriodEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_DELIVERY_PERIOD_END: fieldBuilder.buildEdmTypeField(
          'RequestedDeliveryPeriodEnd',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link receiverCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_CITY: fieldBuilder.buildEdmTypeField(
          'ReceiverCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'ConsigneeBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_STATE: fieldBuilder.buildEdmTypeField(
          'ReceiverState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_TIME_ZONE: fieldBuilder.buildEnumField(
          'ReceiverTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link requestedDeliveryPeriodStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_DELIVERY_PERIOD_START: fieldBuilder.buildEdmTypeField(
          'RequestedDeliveryPeriodStart',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link consigneePostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_POST_BOX: fieldBuilder.buildEdmTypeField(
          'ConsigneePostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_STREET: fieldBuilder.buildEdmTypeField(
          'ReceiverStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_STATE: fieldBuilder.buildEdmTypeField(
          'ConsigneeState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConsigneeAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'ConsigneeLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link receiverZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'ReceiverZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_COUNTY: fieldBuilder.buildEdmTypeField(
          'ConsigneeCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'ConsigneeStreetInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverDistrict} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_DISTRICT: fieldBuilder.buildEdmTypeField(
          'ReceiverDistrict',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link consigneeDistrict} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_DISTRICT: fieldBuilder.buildEdmTypeField(
          'ConsigneeDistrict',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link requestVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_VERSION: fieldBuilder.buildEdmTypeField(
          'RequestVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link receiverStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReceiverStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link outboundShipmentOrderOriginId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTBOUND_SHIPMENT_ORDER_ORIGIN_ID: fieldBuilder.buildEdmTypeField(
          'OutboundShipmentOrderOriginId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_LATITUDE: fieldBuilder.buildEdmTypeField(
          'ReceiverLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link consigneeTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_TIME_ZONE: fieldBuilder.buildEnumField(
          'ConsigneeTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link receiverLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'ReceiverLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link requestedShippingPeriodEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_SHIPPING_PERIOD_END: fieldBuilder.buildEdmTypeField(
          'RequestedShippingPeriodEnd',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dlvTermId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_TERM_ID: fieldBuilder.buildEdmTypeField(
          'DlvTermId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link carrierGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARRIER_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'CarrierGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_POST_BOX: fieldBuilder.buildEdmTypeField(
          'ReceiverPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeCityKanaJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_CITY_KANA_JP: fieldBuilder.buildEdmTypeField(
          'ConsigneeCityKana_JP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_LATITUDE: fieldBuilder.buildEdmTypeField(
          'ConsigneeLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link consigneeContactPhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_CONTACT_PHONE: fieldBuilder.buildEdmTypeField(
          'ConsigneeContactPhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_REFERENCE: fieldBuilder.buildEdmTypeField(
          'ConsigneeReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeContactName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_CONTACT_NAME: fieldBuilder.buildEdmTypeField(
          'ConsigneeContactName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'ReceiverBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reservationAtImportPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVATION_AT_IMPORT_POLICY: fieldBuilder.buildEnumField(
          'ReservationAtImportPolicy',
          WhsOutboundShipmentOrderReservationAtImportPolicy,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OutboundShipmentOrderRequests)
      };
    }

    return this._schema;
  }
}
