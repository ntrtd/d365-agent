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
import type { OutboundShipmentOrderUpdatesApi } from './OutboundShipmentOrderUpdatesApi';
import { WhsEwShipmentOrderUpdateStatus } from './WhsEwShipmentOrderUpdateStatus';
import {
  OutboundShipmentOrderLineUpdates,
  OutboundShipmentOrderLineUpdatesType
} from './OutboundShipmentOrderLineUpdates';

/**
 * This class represents the entity "OutboundShipmentOrderUpdates" of service "d365_metadata".
 */
export class OutboundShipmentOrderUpdates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OutboundShipmentOrderUpdatesType<T>
{
  /**
   * Technical entity name for OutboundShipmentOrderUpdates.
   */
  static override _entityName = 'OutboundShipmentOrderUpdates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OutboundShipmentOrderUpdates entity.
   */
  static _keys = [
    'dataAreaId',
    'OutboundShipmentOrderUpdateId',
    'OutboundShipmentOrderOriginId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Outbound Shipment Order Update Id.
   */
  declare outboundShipmentOrderUpdateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Outbound Shipment Order Origin Id.
   */
  declare outboundShipmentOrderOriginId: DeserializedType<T, 'Edm.String'>;
  /**
   * Actual Shipping Date Time.
   */
  declare actualShippingDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Packing Slip Number.
   * @nullable
   */
  declare packingSlipNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planned Delivery Date Time.
   */
  declare plannedDeliveryDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Processing Status.
   * @nullable
   */
  declare processingStatus?: WhsEwShipmentOrderUpdateStatus | null;
  /**
   * Transportation Id.
   * @nullable
   */
  declare transportationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packing Slip Document Date.
   */
  declare packingSlipDocumentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Planned Shipping Date Time.
   */
  declare plannedShippingDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link OutboundShipmentOrderLineUpdates} entity.
   */
  declare outboundShipmentOrderLineUpdate: OutboundShipmentOrderLineUpdates<T>[];

  constructor(_entityApi: OutboundShipmentOrderUpdatesApi<T>) {
    super(_entityApi);
  }
}

export interface OutboundShipmentOrderUpdatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  outboundShipmentOrderUpdateId: DeserializedType<T, 'Edm.String'>;
  outboundShipmentOrderOriginId: DeserializedType<T, 'Edm.String'>;
  actualShippingDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  packingSlipNumber?: DeserializedType<T, 'Edm.String'> | null;
  plannedDeliveryDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  processingStatus?: WhsEwShipmentOrderUpdateStatus | null;
  transportationId?: DeserializedType<T, 'Edm.String'> | null;
  packingSlipDocumentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  plannedShippingDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  outboundShipmentOrderLineUpdate: OutboundShipmentOrderLineUpdatesType<T>[];
}
