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
import type { OutboundShipmentOrderLineUpdatesApi } from './OutboundShipmentOrderLineUpdatesApi';
import {
  OutboundShipmentOrderUpdates,
  OutboundShipmentOrderUpdatesType
} from './OutboundShipmentOrderUpdates';
import {
  OutboundShipmentOrderLineInventDimUpdates,
  OutboundShipmentOrderLineInventDimUpdatesType
} from './OutboundShipmentOrderLineInventDimUpdates';

/**
 * This class represents the entity "OutboundShipmentOrderLineUpdates" of service "d365_metadata".
 */
export class OutboundShipmentOrderLineUpdates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OutboundShipmentOrderLineUpdatesType<T>
{
  /**
   * Technical entity name for OutboundShipmentOrderLineUpdates.
   */
  static override _entityName = 'OutboundShipmentOrderLineUpdates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OutboundShipmentOrderLineUpdates entity.
   */
  static _keys = [
    'dataAreaId',
    'OutboundShipmentOrderUpdateId',
    'OutboundShipmentOrderOriginId',
    'OrderLineNumber'
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
   * Order Line Number.
   */
  declare orderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Total Shipped Quantity.
   */
  declare totalShippedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Remaining Quantity.
   */
  declare remainingQuantity: DeserializedType<T, 'Edm.Decimal'>;
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
   * Total Picked Quantity.
   */
  declare totalPickedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link OutboundShipmentOrderUpdates} entity.
   */
  declare outboundShipmentOrderUpdate?: OutboundShipmentOrderUpdates<T> | null;
  /**
   * One-to-many navigation property to the {@link OutboundShipmentOrderLineInventDimUpdates} entity.
   */
  declare outboundShipmentOrderLineInventDimUpdate: OutboundShipmentOrderLineInventDimUpdates<T>[];

  constructor(_entityApi: OutboundShipmentOrderLineUpdatesApi<T>) {
    super(_entityApi);
  }
}

export interface OutboundShipmentOrderLineUpdatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  outboundShipmentOrderUpdateId: DeserializedType<T, 'Edm.String'>;
  outboundShipmentOrderOriginId: DeserializedType<T, 'Edm.String'>;
  orderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  totalShippedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  remainingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  orderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  orderedUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  totalPickedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  outboundShipmentOrderUpdate?: OutboundShipmentOrderUpdatesType<T> | null;
  outboundShipmentOrderLineInventDimUpdate: OutboundShipmentOrderLineInventDimUpdatesType<T>[];
}
