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
import type { InboundShipmentOrderRequestsApi } from './InboundShipmentOrderRequestsApi';
import { Timezone } from './Timezone';
import {
  InboundShipmentOrderLineRequests,
  InboundShipmentOrderLineRequestsType
} from './InboundShipmentOrderLineRequests';

/**
 * This class represents the entity "InboundShipmentOrderRequests" of service "d365_metadata".
 */
export class InboundShipmentOrderRequests<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InboundShipmentOrderRequestsType<T>
{
  /**
   * Technical entity name for InboundShipmentOrderRequests.
   */
  static override _entityName = 'InboundShipmentOrderRequests';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InboundShipmentOrderRequests entity.
   */
  static _keys = ['dataAreaId', 'InboundShipmentOrderRequestId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inbound Shipment Order Request Id.
   */
  declare inboundShipmentOrderRequestId: DeserializedType<T, 'Edm.String'>;
  /**
   * Consigner State.
   * @nullable
   */
  declare consignerState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Post Box.
   * @nullable
   */
  declare consignerPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender State.
   * @nullable
   */
  declare senderState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender City In Kana.
   * @nullable
   */
  declare senderCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inbound Shipment Order Origin Id.
   * @nullable
   */
  declare inboundShipmentOrderOriginId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sender Name.
   * @nullable
   */
  declare senderName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Contact Name.
   * @nullable
   */
  declare consignerContactName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Post Box.
   * @nullable
   */
  declare senderPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Longitude.
   */
  declare consignerLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consigner Street.
   * @nullable
   */
  declare consignerStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Building Compliment.
   * @nullable
   */
  declare consignerBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Consigner District.
   */
  declare consignerDistrict: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Consigner Country Region Id.
   * @nullable
   */
  declare consignerCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Zip Code.
   * @nullable
   */
  declare consignerZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Account Number.
   * @nullable
   */
  declare consignerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Street Number.
   * @nullable
   */
  declare senderStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Contact Email.
   * @nullable
   */
  declare consignerContactEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Country Region Id.
   * @nullable
   */
  declare senderCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Latitude.
   */
  declare consignerLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Planned Receipt Period Start.
   */
  declare plannedReceiptPeriodStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Consigner Name.
   * @nullable
   */
  declare consignerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner City In Kana.
   * @nullable
   */
  declare consignerCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Street.
   * @nullable
   */
  declare senderStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Warehouse Id.
   * @nullable
   */
  declare receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender County.
   * @nullable
   */
  declare senderCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender City.
   * @nullable
   */
  declare senderCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender District.
   */
  declare senderDistrict: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Consigner Street Number.
   * @nullable
   */
  declare consignerStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Longitude.
   */
  declare senderLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consigner County.
   * @nullable
   */
  declare consignerCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Building Compliment.
   * @nullable
   */
  declare senderBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Reference.
   * @nullable
   */
  declare consignerReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Street In Kana.
   * @nullable
   */
  declare senderStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Time Zone.
   * @nullable
   */
  declare senderTimeZone?: Timezone | null;
  /**
   * Sender Latitude.
   */
  declare senderLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consigner Contact Phone.
   * @nullable
   */
  declare consignerContactPhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planned Receipt Period End.
   */
  declare plannedReceiptPeriodEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Consigner Street In Kana.
   * @nullable
   */
  declare consignerStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Request Version.
   */
  declare requestVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Consigner Time Zone.
   * @nullable
   */
  declare consignerTimeZone?: Timezone | null;
  /**
   * Consigner City.
   * @nullable
   */
  declare consignerCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Zip Code.
   * @nullable
   */
  declare senderZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link InboundShipmentOrderLineRequests} entity.
   */
  declare lines: InboundShipmentOrderLineRequests<T>[];

  constructor(_entityApi: InboundShipmentOrderRequestsApi<T>) {
    super(_entityApi);
  }
}

export interface InboundShipmentOrderRequestsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inboundShipmentOrderRequestId: DeserializedType<T, 'Edm.String'>;
  consignerState?: DeserializedType<T, 'Edm.String'> | null;
  consignerPostBox?: DeserializedType<T, 'Edm.String'> | null;
  senderState?: DeserializedType<T, 'Edm.String'> | null;
  senderCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  inboundShipmentOrderOriginId?: DeserializedType<T, 'Edm.String'> | null;
  senderName?: DeserializedType<T, 'Edm.String'> | null;
  consignerContactName?: DeserializedType<T, 'Edm.String'> | null;
  senderPostBox?: DeserializedType<T, 'Edm.String'> | null;
  consignerLongitude: DeserializedType<T, 'Edm.Decimal'>;
  consignerStreet?: DeserializedType<T, 'Edm.String'> | null;
  consignerBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  consignerDistrict: DeserializedType<T, 'Edm.Int64'>;
  consignerCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  consignerZipCode?: DeserializedType<T, 'Edm.String'> | null;
  consignerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  senderStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  consignerContactEmail?: DeserializedType<T, 'Edm.String'> | null;
  senderCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  consignerLatitude: DeserializedType<T, 'Edm.Decimal'>;
  plannedReceiptPeriodStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  consignerName?: DeserializedType<T, 'Edm.String'> | null;
  consignerCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  senderStreet?: DeserializedType<T, 'Edm.String'> | null;
  receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  senderCounty?: DeserializedType<T, 'Edm.String'> | null;
  senderCity?: DeserializedType<T, 'Edm.String'> | null;
  senderDistrict: DeserializedType<T, 'Edm.Int64'>;
  consignerStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  senderLongitude: DeserializedType<T, 'Edm.Decimal'>;
  consignerCounty?: DeserializedType<T, 'Edm.String'> | null;
  senderBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  consignerReference?: DeserializedType<T, 'Edm.String'> | null;
  senderStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  senderTimeZone?: Timezone | null;
  senderLatitude: DeserializedType<T, 'Edm.Decimal'>;
  consignerContactPhone?: DeserializedType<T, 'Edm.String'> | null;
  plannedReceiptPeriodEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  consignerStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  requestVersion: DeserializedType<T, 'Edm.Int32'>;
  consignerTimeZone?: Timezone | null;
  consignerCity?: DeserializedType<T, 'Edm.String'> | null;
  senderZipCode?: DeserializedType<T, 'Edm.String'> | null;
  lines: InboundShipmentOrderLineRequestsType<T>[];
}
