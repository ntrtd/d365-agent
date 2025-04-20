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
import type { InboundShipmentOrderUpdatesApi } from './InboundShipmentOrderUpdatesApi';
import { WhsInboundShipmentOrderOriginLinkType } from './WhsInboundShipmentOrderOriginLinkType';
import { WhsEwShipmentOrderUpdateStatus } from './WhsEwShipmentOrderUpdateStatus';
import {
  InboundShipmentOrderLineUpdates,
  InboundShipmentOrderLineUpdatesType
} from './InboundShipmentOrderLineUpdates';

/**
 * This class represents the entity "InboundShipmentOrderUpdates" of service "d365_metadata".
 */
export class InboundShipmentOrderUpdates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InboundShipmentOrderUpdatesType<T>
{
  /**
   * Technical entity name for InboundShipmentOrderUpdates.
   */
  static override _entityName = 'InboundShipmentOrderUpdates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InboundShipmentOrderUpdates entity.
   */
  static _keys = [
    'dataAreaId',
    'InboundShipmentOrderUpdateId',
    'InboundShipmentOrderOriginId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inbound Shipment Order Update Id.
   */
  declare inboundShipmentOrderUpdateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inbound Shipment Order Origin Id.
   */
  declare inboundShipmentOrderOriginId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipment Receipt Number.
   * @nullable
   */
  declare shipmentReceiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Actual Receipt Date Time.
   */
  declare actualReceiptDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Planned Delivery Date Time.
   */
  declare plannedDeliveryDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Planned Receipt Date Time.
   */
  declare plannedReceiptDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Inbound Shipment Order Origin Link Type.
   * @nullable
   */
  declare inboundShipmentOrderOriginLinkType?: WhsInboundShipmentOrderOriginLinkType | null;
  /**
   * Processing Status.
   * @nullable
   */
  declare processingStatus?: WhsEwShipmentOrderUpdateStatus | null;
  /**
   * Shipment Receipt Document Date.
   */
  declare shipmentReceiptDocumentDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * One-to-many navigation property to the {@link InboundShipmentOrderLineUpdates} entity.
   */
  declare inboundShipmentOrderLineUpdate: InboundShipmentOrderLineUpdates<T>[];

  constructor(_entityApi: InboundShipmentOrderUpdatesApi<T>) {
    super(_entityApi);
  }
}

export interface InboundShipmentOrderUpdatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inboundShipmentOrderUpdateId: DeserializedType<T, 'Edm.String'>;
  inboundShipmentOrderOriginId: DeserializedType<T, 'Edm.String'>;
  shipmentReceiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  actualReceiptDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  plannedDeliveryDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  plannedReceiptDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inboundShipmentOrderOriginLinkType?: WhsInboundShipmentOrderOriginLinkType | null;
  processingStatus?: WhsEwShipmentOrderUpdateStatus | null;
  shipmentReceiptDocumentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inboundShipmentOrderLineUpdate: InboundShipmentOrderLineUpdatesType<T>[];
}
