/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { OutboundShipmentOrderRequestsApi } from './OutboundShipmentOrderRequestsApi';
import { Timezone } from './Timezone';
import { WhsOutboundShipmentOrderReservationAtImportPolicy } from './WhsOutboundShipmentOrderReservationAtImportPolicy';
import {
  OutboundShipmentOrderLineRequests,
  OutboundShipmentOrderLineRequestsType
} from './OutboundShipmentOrderLineRequests';

/**
 * This class represents the entity "OutboundShipmentOrderRequests" of service "d365_metadata".
 */
export class OutboundShipmentOrderRequests<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OutboundShipmentOrderRequestsType<T>
{
  /**
   * Technical entity name for OutboundShipmentOrderRequests.
   */
  static override _entityName = 'OutboundShipmentOrderRequests';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OutboundShipmentOrderRequests entity.
   */
  static _keys = ['dataAreaId', 'OutboundShipmentOrderRequestId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Outbound Shipment Order Request Id.
   */
  declare outboundShipmentOrderRequestId: DeserializedType<T, 'Edm.String'>;
  /**
   * Receiver Name.
   * @nullable
   */
  declare receiverName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver City Kana Jp.
   * @nullable
   */
  declare receiverCityKanaJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Street.
   * @nullable
   */
  declare consigneeStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dlv Mode Id.
   * @nullable
   */
  declare dlvModeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Carrier Code.
   * @nullable
   */
  declare carrierCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Street Kana Jp.
   * @nullable
   */
  declare receiverStreetKanaJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Broker Code.
   * @nullable
   */
  declare brokerCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee City.
   * @nullable
   */
  declare consigneeCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver County.
   * @nullable
   */
  declare receiverCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Country Region Id.
   * @nullable
   */
  declare consigneeCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Street Number.
   * @nullable
   */
  declare consigneeStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Purchase Order Id.
   * @nullable
   */
  declare consigneePurchaseOrderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Contact Email.
   * @nullable
   */
  declare consigneeContactEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Name.
   * @nullable
   */
  declare consigneeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Zip Code.
   * @nullable
   */
  declare consigneeZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Shipping Period Start.
   */
  declare requestedShippingPeriodStart: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Transportation Mode Code.
   * @nullable
   */
  declare transportationModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planned Transportation Id.
   * @nullable
   */
  declare plannedTransportationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Country Region Id.
   * @nullable
   */
  declare receiverCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Route Config Code.
   * @nullable
   */
  declare routeConfigCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Carrier Service Code.
   * @nullable
   */
  declare carrierServiceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship From Warehouse Id.
   * @nullable
   */
  declare shipFromWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Delivery Period End.
   */
  declare requestedDeliveryPeriodEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Receiver City.
   * @nullable
   */
  declare receiverCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Building Compliment.
   * @nullable
   */
  declare consigneeBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Receiver State.
   * @nullable
   */
  declare receiverState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Time Zone.
   * @nullable
   */
  declare receiverTimeZone?: Timezone | null;
  /**
   * Requested Delivery Period Start.
   */
  declare requestedDeliveryPeriodStart: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Consignee Post Box.
   * @nullable
   */
  declare consigneePostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Street.
   * @nullable
   */
  declare receiverStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee State.
   * @nullable
   */
  declare consigneeState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Account Number.
   * @nullable
   */
  declare consigneeAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Longitude.
   */
  declare consigneeLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receiver Zip Code.
   * @nullable
   */
  declare receiverZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee County.
   * @nullable
   */
  declare consigneeCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Street In Kana.
   * @nullable
   */
  declare consigneeStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver District.
   */
  declare receiverDistrict: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Consignee District.
   */
  declare consigneeDistrict: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Request Version.
   */
  declare requestVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Receiver Street Number.
   * @nullable
   */
  declare receiverStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Outbound Shipment Order Origin Id.
   * @nullable
   */
  declare outboundShipmentOrderOriginId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Receiver Latitude.
   */
  declare receiverLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consignee Time Zone.
   * @nullable
   */
  declare consigneeTimeZone?: Timezone | null;
  /**
   * Receiver Longitude.
   */
  declare receiverLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Requested Shipping Period End.
   */
  declare requestedShippingPeriodEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Dlv Term Id.
   * @nullable
   */
  declare dlvTermId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Carrier Group Code.
   * @nullable
   */
  declare carrierGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Post Box.
   * @nullable
   */
  declare receiverPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee City Kana Jp.
   * @nullable
   */
  declare consigneeCityKanaJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Latitude.
   */
  declare consigneeLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consignee Contact Phone.
   * @nullable
   */
  declare consigneeContactPhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Reference.
   * @nullable
   */
  declare consigneeReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Contact Name.
   * @nullable
   */
  declare consigneeContactName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Building Compliment.
   * @nullable
   */
  declare receiverBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reservation At Import Policy.
   * @nullable
   */
  declare reservationAtImportPolicy?: WhsOutboundShipmentOrderReservationAtImportPolicy | null;
  /**
   * One-to-many navigation property to the {@link OutboundShipmentOrderLineRequests} entity.
   */
  declare lines: OutboundShipmentOrderLineRequests<T>[];

  constructor(_entityApi: OutboundShipmentOrderRequestsApi<T>) {
    super(_entityApi);
  }
}

export interface OutboundShipmentOrderRequestsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  outboundShipmentOrderRequestId: DeserializedType<T, 'Edm.String'>;
  receiverName?: DeserializedType<T, 'Edm.String'> | null;
  receiverCityKanaJp?: DeserializedType<T, 'Edm.String'> | null;
  consigneeStreet?: DeserializedType<T, 'Edm.String'> | null;
  dlvModeId?: DeserializedType<T, 'Edm.String'> | null;
  carrierCode?: DeserializedType<T, 'Edm.String'> | null;
  receiverStreetKanaJp?: DeserializedType<T, 'Edm.String'> | null;
  brokerCode?: DeserializedType<T, 'Edm.String'> | null;
  consigneeCity?: DeserializedType<T, 'Edm.String'> | null;
  receiverCounty?: DeserializedType<T, 'Edm.String'> | null;
  consigneeCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  consigneeStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  consigneePurchaseOrderId?: DeserializedType<T, 'Edm.String'> | null;
  consigneeContactEmail?: DeserializedType<T, 'Edm.String'> | null;
  consigneeName?: DeserializedType<T, 'Edm.String'> | null;
  consigneeZipCode?: DeserializedType<T, 'Edm.String'> | null;
  requestedShippingPeriodStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transportationModeCode?: DeserializedType<T, 'Edm.String'> | null;
  plannedTransportationId?: DeserializedType<T, 'Edm.String'> | null;
  receiverCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  routeConfigCode?: DeserializedType<T, 'Edm.String'> | null;
  carrierServiceCode?: DeserializedType<T, 'Edm.String'> | null;
  shipFromWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  requestedDeliveryPeriodEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  receiverCity?: DeserializedType<T, 'Edm.String'> | null;
  consigneeBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  receiverState?: DeserializedType<T, 'Edm.String'> | null;
  receiverTimeZone?: Timezone | null;
  requestedDeliveryPeriodStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  consigneePostBox?: DeserializedType<T, 'Edm.String'> | null;
  receiverStreet?: DeserializedType<T, 'Edm.String'> | null;
  consigneeState?: DeserializedType<T, 'Edm.String'> | null;
  consigneeAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  consigneeLongitude: DeserializedType<T, 'Edm.Decimal'>;
  receiverZipCode?: DeserializedType<T, 'Edm.String'> | null;
  consigneeCounty?: DeserializedType<T, 'Edm.String'> | null;
  consigneeStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  receiverDistrict: DeserializedType<T, 'Edm.Int64'>;
  consigneeDistrict: DeserializedType<T, 'Edm.Int64'>;
  requestVersion: DeserializedType<T, 'Edm.Int32'>;
  receiverStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  outboundShipmentOrderOriginId?: DeserializedType<T, 'Edm.String'> | null;
  receiverLatitude: DeserializedType<T, 'Edm.Decimal'>;
  consigneeTimeZone?: Timezone | null;
  receiverLongitude: DeserializedType<T, 'Edm.Decimal'>;
  requestedShippingPeriodEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dlvTermId?: DeserializedType<T, 'Edm.String'> | null;
  carrierGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  receiverPostBox?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  consigneeCityKanaJp?: DeserializedType<T, 'Edm.String'> | null;
  consigneeLatitude: DeserializedType<T, 'Edm.Decimal'>;
  consigneeContactPhone?: DeserializedType<T, 'Edm.String'> | null;
  consigneeReference?: DeserializedType<T, 'Edm.String'> | null;
  consigneeContactName?: DeserializedType<T, 'Edm.String'> | null;
  receiverBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  reservationAtImportPolicy?: WhsOutboundShipmentOrderReservationAtImportPolicy | null;
  lines: OutboundShipmentOrderLineRequestsType<T>[];
}
