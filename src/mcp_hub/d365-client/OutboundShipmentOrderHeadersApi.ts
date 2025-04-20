/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OutboundShipmentOrderHeaders } from './OutboundShipmentOrderHeaders';
import { OutboundShipmentOrderHeadersRequestBuilder } from './OutboundShipmentOrderHeadersRequestBuilder';
import { ShippingCarriersApi } from './ShippingCarriersApi';
import { WarehouseIntegrationSourceSystemsApi } from './WarehouseIntegrationSourceSystemsApi';
import { TransportationModesApi } from './TransportationModesApi';
import { ShippingCarrierServicesApi } from './ShippingCarrierServicesApi';
import { DeliveryTermsApi } from './DeliveryTermsApi';
import { RetailDlvModesApi } from './RetailDlvModesApi';
import { WarehousesApi } from './WarehousesApi';
import { ShippingCarrierServicesGroupsApi } from './ShippingCarrierServicesGroupsApi';
import { TransportationRoutePlansApi } from './TransportationRoutePlansApi';
import { OutboundShipmentOrderLinesApi } from './OutboundShipmentOrderLinesApi';
import { Timezone } from './Timezone';
import { WhsOutboundShipmentType } from './WhsOutboundShipmentType';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class OutboundShipmentOrderHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<OutboundShipmentOrderHeaders<DeSerializersT>, DeSerializersT>
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
  ): OutboundShipmentOrderHeadersApi<DeSerializersT> {
    return new OutboundShipmentOrderHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER: OneToOneLink<
      OutboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ShippingCarriersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sourceSystem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOURCE_SYSTEM: OneToOneLink<
      OutboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      WarehouseIntegrationSourceSystemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transportationMode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSPORTATION_MODE: OneToOneLink<
      OutboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      TransportationModesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrierService} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER_SERVICE: OneToOneLink<
      OutboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ShippingCarrierServicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryTerms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_TERMS: OneToOneLink<
      OutboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      DeliveryTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryMode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_MODE: OneToOneLink<
      OutboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      RetailDlvModesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_WAREHOUSE: OneToOneLink<
      OutboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrierServiceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER_SERVICE_GROUP: OneToOneLink<
      OutboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ShippingCarrierServicesGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transportationRoutePlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSPORTATION_ROUTE_PLAN: OneToOneLink<
      OutboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      TransportationRoutePlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link outboundShipmentOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_LINES: OneToManyLink<
      OutboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ShippingCarriersApi<DeSerializersT>,
      WarehouseIntegrationSourceSystemsApi<DeSerializersT>,
      TransportationModesApi<DeSerializersT>,
      ShippingCarrierServicesApi<DeSerializersT>,
      DeliveryTermsApi<DeSerializersT>,
      RetailDlvModesApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      ShippingCarrierServicesGroupsApi<DeSerializersT>,
      TransportationRoutePlansApi<DeSerializersT>,
      OutboundShipmentOrderLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SHIPPING_CARRIER: new OneToOneLink(
        'ShippingCarrier',
        this,
        linkedApis[0]
      ),
      SOURCE_SYSTEM: new OneToOneLink('SourceSystem', this, linkedApis[1]),
      TRANSPORTATION_MODE: new OneToOneLink(
        'TransportationMode',
        this,
        linkedApis[2]
      ),
      SHIPPING_CARRIER_SERVICE: new OneToOneLink(
        'ShippingCarrierService',
        this,
        linkedApis[3]
      ),
      DELIVERY_TERMS: new OneToOneLink('DeliveryTerms', this, linkedApis[4]),
      DELIVERY_MODE: new OneToOneLink('DeliveryMode', this, linkedApis[5]),
      SHIPPING_WAREHOUSE: new OneToOneLink(
        'ShippingWarehouse',
        this,
        linkedApis[6]
      ),
      SHIPPING_CARRIER_SERVICE_GROUP: new OneToOneLink(
        'ShippingCarrierServiceGroup',
        this,
        linkedApis[7]
      ),
      TRANSPORTATION_ROUTE_PLAN: new OneToOneLink(
        'TransportationRoutePlan',
        this,
        linkedApis[8]
      ),
      OUTBOUND_SHIPMENT_ORDER_LINES: new OneToManyLink(
        'OutboundShipmentOrderLines',
        this,
        linkedApis[9]
      )
    };
    return this;
  }

  entityConstructor = OutboundShipmentOrderHeaders;

  requestBuilder(): OutboundShipmentOrderHeadersRequestBuilder<DeSerializersT> {
    return new OutboundShipmentOrderHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    OutboundShipmentOrderHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OutboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OutboundShipmentOrderHeaders<DeSerializersT>,
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
    typeof OutboundShipmentOrderHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OutboundShipmentOrderHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OUTBOUND_SHIPMENT_ORDER_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECEIVER_NAME: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_ORDER_TYPE: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_ROUTE_PLAN_ID: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_STREET: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_STREET_IN_KANA: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_CITY: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_COUNTY: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_COUNTRY_REGION_ID: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_SERVICE_ID: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_STREET_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_ID: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_ORIGIN: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_NAME: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_ZIP_CODE: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_EMAIL: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_SHIPPING_PERIOD_START: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RECEIVER_CONTACT_NAME: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNED_TRANSPORTATION_ID: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_COUNTRY_REGION_ID: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_CITYIN_KANA: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_ORDER_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_FROM_WAREHOUSE_ID: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_DELIVERY_PERIOD_END: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RECEIVER_CITY: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TERMS_CODE: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_MODE_ID: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_STATE: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_EMAIL: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_TIME_ZONE: EnumField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    REQUESTED_DELIVERY_PERIOD_START: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONSIGNEE_POST_BOX: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_STREET: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_BROKER_ID: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_STATE: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_ACCOUNT_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_LONGITUDE: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIVER_ZIP_CODE: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_COUNTY: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_STREET_IN_KANA: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_DISTRICT: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CONSIGNEE_DISTRICT: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    OUTBOUND_SHIPMENT_TYPE: EnumField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      WhsOutboundShipmentType,
      true,
      true
    >;
    DELIVERY_MODE_CODE: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_STREET_NUMBER: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_ID: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_CHANNEL: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_LATITUDE: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSIGNEE_TIME_ZONE: EnumField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    RECEIVER_LONGITUDE: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQUESTED_SHIPPING_PERIOD_END: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIPPING_CARRIER_SERVICE_GROUP_ID: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_POST_BOX: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_TELEPHONE: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_LATITUDE: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSIGNEE_TELEPHONE: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_REFERENCE: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_CITY_IN_KANA: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_CONTACT_NAME: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESERVATION_AT_IMPORT_POLICY: EnumField<
      OutboundShipmentOrderHeaders<DeSerializers>,
      DeSerializersT,
      WhsOutboundShipmentOrderReservationAtImportPolicy,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER: OneToOneLink<
      OutboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ShippingCarriersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sourceSystem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOURCE_SYSTEM: OneToOneLink<
      OutboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      WarehouseIntegrationSourceSystemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transportationMode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSPORTATION_MODE: OneToOneLink<
      OutboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      TransportationModesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrierService} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER_SERVICE: OneToOneLink<
      OutboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ShippingCarrierServicesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryTerms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_TERMS: OneToOneLink<
      OutboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      DeliveryTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryMode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_MODE: OneToOneLink<
      OutboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      RetailDlvModesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_WAREHOUSE: OneToOneLink<
      OutboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingCarrierServiceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_CARRIER_SERVICE_GROUP: OneToOneLink<
      OutboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ShippingCarrierServicesGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transportationRoutePlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSPORTATION_ROUTE_PLAN: OneToOneLink<
      OutboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      TransportationRoutePlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link outboundShipmentOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_LINES: OneToManyLink<
      OutboundShipmentOrderHeaders<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OutboundShipmentOrderHeaders<DeSerializers>>;
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
         * Static representation of the {@link outboundShipmentOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTBOUND_SHIPMENT_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'OutboundShipmentOrderNumber',
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
         * Static representation of the {@link sourceSystemOrderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ORDER_TYPE: fieldBuilder.buildEdmTypeField(
          'SourceSystemOrderType',
          'Edm.String',
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
         * Static representation of the {@link consigneeStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_STREET: fieldBuilder.buildEdmTypeField(
          'ConsigneeStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'ReceiverStreetInKana',
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
         * Static representation of the {@link shippingCarrierServiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_SERVICE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierServiceId',
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
         * Static representation of the {@link shippingCarrierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ORIGIN: fieldBuilder.buildEdmTypeField(
          'OrderOrigin',
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
         * Static representation of the {@link receiverEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_EMAIL: fieldBuilder.buildEdmTypeField(
          'ReceiverEmail',
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
         * Static representation of the {@link receiverContactName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_CONTACT_NAME: fieldBuilder.buildEdmTypeField(
          'ReceiverContactName',
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
         * Static representation of the {@link receiverCityinKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_CITYIN_KANA: fieldBuilder.buildEdmTypeField(
          'ReceiverCityinKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceSystemOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourceSystemOrderNumber',
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
         * Static representation of the {@link deliveryTermsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TERMS_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryTermsCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationModeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_MODE_ID: fieldBuilder.buildEdmTypeField(
          'TransportationModeId',
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
         * Static representation of the {@link consigneeEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_EMAIL: fieldBuilder.buildEdmTypeField(
          'ConsigneeEmail',
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
         * Static representation of the {@link transportationBrokerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_BROKER_ID: fieldBuilder.buildEdmTypeField(
          'TransportationBrokerId',
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
         * Static representation of the {@link outboundShipmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTBOUND_SHIPMENT_TYPE: fieldBuilder.buildEnumField(
          'OutboundShipmentType',
          WhsOutboundShipmentType,
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
         * Static representation of the {@link receiverStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReceiverStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceSystemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ID: fieldBuilder.buildEdmTypeField(
          'SourceSystemId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderChannel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_CHANNEL: fieldBuilder.buildEdmTypeField(
          'OrderChannel',
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
         * Static representation of the {@link shippingCarrierServiceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_SERVICE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierServiceGroupId',
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
         * Static representation of the {@link receiverTelephone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_TELEPHONE: fieldBuilder.buildEdmTypeField(
          'ReceiverTelephone',
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
         * Static representation of the {@link consigneeTelephone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_TELEPHONE: fieldBuilder.buildEdmTypeField(
          'ConsigneeTelephone',
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
         * Static representation of the {@link consigneeCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'ConsigneeCityInKana',
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
        ALL_FIELDS: new AllFields('*', OutboundShipmentOrderHeaders)
      };
    }

    return this._schema;
  }
}
