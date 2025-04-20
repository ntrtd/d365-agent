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
import type { InboundShipmentOrderLineInventDimUpdatesApi } from './InboundShipmentOrderLineInventDimUpdatesApi';
import {
  InboundShipmentOrderLineUpdates,
  InboundShipmentOrderLineUpdatesType
} from './InboundShipmentOrderLineUpdates';

/**
 * This class represents the entity "InboundShipmentOrderLineInventDimUpdates" of service "d365_metadata".
 */
export class InboundShipmentOrderLineInventDimUpdates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InboundShipmentOrderLineInventDimUpdatesType<T>
{
  /**
   * Technical entity name for InboundShipmentOrderLineInventDimUpdates.
   */
  static override _entityName = 'InboundShipmentOrderLineInventDimUpdates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InboundShipmentOrderLineInventDimUpdates entity.
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
   * Received Quantity.
   */
  declare receivedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Owner Id.
   * @nullable
   */
  declare inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordered Inventory Status Id.
   * @nullable
   */
  declare orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System Disposition Code.
   * @nullable
   */
  declare sourceSystemDispositionCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * One-to-one navigation property to the {@link InboundShipmentOrderLineUpdates} entity.
   */
  declare inboundShipmentOrderLineUpdate?: InboundShipmentOrderLineUpdates<T> | null;

  constructor(_entityApi: InboundShipmentOrderLineInventDimUpdatesApi<T>) {
    super(_entityApi);
  }
}

export interface InboundShipmentOrderLineInventDimUpdatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inboundShipmentOrderUpdateId: DeserializedType<T, 'Edm.String'>;
  inboundShipmentOrderOriginId: DeserializedType<T, 'Edm.String'>;
  orderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  receivedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemDispositionCode?: DeserializedType<T, 'Edm.String'> | null;
  unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  inboundShipmentOrderLineUpdate?: InboundShipmentOrderLineUpdatesType<T> | null;
}
