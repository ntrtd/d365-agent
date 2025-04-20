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
import type { InboundShipmentOrderLineUpdatesApi } from './InboundShipmentOrderLineUpdatesApi';
import {
  InboundShipmentOrderLineInventDimUpdates,
  InboundShipmentOrderLineInventDimUpdatesType
} from './InboundShipmentOrderLineInventDimUpdates';
import {
  InboundShipmentOrderUpdates,
  InboundShipmentOrderUpdatesType
} from './InboundShipmentOrderUpdates';

/**
 * This class represents the entity "InboundShipmentOrderLineUpdates" of service "d365_metadata".
 */
export class InboundShipmentOrderLineUpdates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InboundShipmentOrderLineUpdatesType<T>
{
  /**
   * Technical entity name for InboundShipmentOrderLineUpdates.
   */
  static override _entityName = 'InboundShipmentOrderLineUpdates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InboundShipmentOrderLineUpdates entity.
   */
  static _keys = [
    'dataAreaId',
    'InboundShipmentOrderUpdateId',
    'InboundShipmentOrderOriginId',
    'OrderLineNumber'
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
   * Order Line Number.
   */
  declare orderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ordered Quantity.
   */
  declare orderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ordered Unit Symbol.
   * @nullable
   */
  declare orderedUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Received Quantity.
   */
  declare receivedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Remaining Quantity.
   */
  declare remainingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link InboundShipmentOrderLineInventDimUpdates} entity.
   */
  declare inboundShipmentOrderLineInventDimUpdate?: InboundShipmentOrderLineInventDimUpdates<T> | null;
  /**
   * One-to-one navigation property to the {@link InboundShipmentOrderUpdates} entity.
   */
  declare inboundShipmentOrderUpdate?: InboundShipmentOrderUpdates<T> | null;

  constructor(_entityApi: InboundShipmentOrderLineUpdatesApi<T>) {
    super(_entityApi);
  }
}

export interface InboundShipmentOrderLineUpdatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inboundShipmentOrderUpdateId: DeserializedType<T, 'Edm.String'>;
  inboundShipmentOrderOriginId: DeserializedType<T, 'Edm.String'>;
  orderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  orderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  orderedUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  receivedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  remainingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  inboundShipmentOrderLineInventDimUpdate?: InboundShipmentOrderLineInventDimUpdatesType<T> | null;
  inboundShipmentOrderUpdate?: InboundShipmentOrderUpdatesType<T> | null;
}
