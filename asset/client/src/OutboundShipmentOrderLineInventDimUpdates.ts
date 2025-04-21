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
import type { OutboundShipmentOrderLineInventDimUpdatesApi } from './OutboundShipmentOrderLineInventDimUpdatesApi';
import {
  OutboundShipmentOrderLineUpdates,
  OutboundShipmentOrderLineUpdatesType
} from './OutboundShipmentOrderLineUpdates';

/**
 * This class represents the entity "OutboundShipmentOrderLineInventDimUpdates" of service "d365_metadata".
 */
export class OutboundShipmentOrderLineInventDimUpdates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OutboundShipmentOrderLineInventDimUpdatesType<T>
{
  /**
   * Technical entity name for OutboundShipmentOrderLineInventDimUpdates.
   */
  static override _entityName = 'OutboundShipmentOrderLineInventDimUpdates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OutboundShipmentOrderLineInventDimUpdates entity.
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
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * License Plate Number.
   * @nullable
   */
  declare licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipped Quantity.
   */
  declare shippedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ordered Inventory Status Id.
   * @nullable
   */
  declare orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Owner Id.
   * @nullable
   */
  declare inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Picked Quantity.
   */
  declare pickedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Symbol.
   * @nullable
   */
  declare unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Serial Number.
   * @nullable
   */
  declare itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link OutboundShipmentOrderLineUpdates} entity.
   */
  declare outboundShipmentOrderLineUpdate?: OutboundShipmentOrderLineUpdates<T> | null;

  constructor(_entityApi: OutboundShipmentOrderLineInventDimUpdatesApi<T>) {
    super(_entityApi);
  }
}

export interface OutboundShipmentOrderLineInventDimUpdatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  outboundShipmentOrderUpdateId: DeserializedType<T, 'Edm.String'>;
  outboundShipmentOrderOriginId: DeserializedType<T, 'Edm.String'>;
  orderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  shippedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  pickedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  outboundShipmentOrderLineUpdate?: OutboundShipmentOrderLineUpdatesType<T> | null;
}
