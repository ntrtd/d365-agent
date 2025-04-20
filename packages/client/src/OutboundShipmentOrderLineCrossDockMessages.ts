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
import type { OutboundShipmentOrderLineCrossDockMessagesApi } from './OutboundShipmentOrderLineCrossDockMessagesApi';
import {
  OutboundShipmentOrderLineMessages,
  OutboundShipmentOrderLineMessagesType
} from './OutboundShipmentOrderLineMessages';

/**
 * This class represents the entity "OutboundShipmentOrderLineCrossDockMessages" of service "d365_metadata".
 */
export class OutboundShipmentOrderLineCrossDockMessages<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OutboundShipmentOrderLineCrossDockMessagesType<T>
{
  /**
   * Technical entity name for OutboundShipmentOrderLineCrossDockMessages.
   */
  static override _entityName = 'OutboundShipmentOrderLineCrossDockMessages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OutboundShipmentOrderLineCrossDockMessages entity.
   */
  static _keys = [
    'dataAreaId',
    'OrderNumber',
    'SourceSystemId',
    'MessageId',
    'OrderLineNumber',
    'CrossDockSourceId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Order Number.
   */
  declare orderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Source System Id.
   */
  declare sourceSystemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Message Id.
   */
  declare messageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Order Line Number.
   */
  declare orderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cross Dock Source Id.
   */
  declare crossDockSourceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Line Requested Quantity.
   */
  declare sourceLineRequestedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link OutboundShipmentOrderLineMessages} entity.
   */
  declare outboundShipmentOrderLineMessage?: OutboundShipmentOrderLineMessages<T> | null;

  constructor(_entityApi: OutboundShipmentOrderLineCrossDockMessagesApi<T>) {
    super(_entityApi);
  }
}

export interface OutboundShipmentOrderLineCrossDockMessagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  orderNumber: DeserializedType<T, 'Edm.String'>;
  sourceSystemId: DeserializedType<T, 'Edm.String'>;
  messageId: DeserializedType<T, 'Edm.String'>;
  orderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  crossDockSourceId: DeserializedType<T, 'Edm.String'>;
  sourceLineRequestedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  outboundShipmentOrderLineMessage?: OutboundShipmentOrderLineMessagesType<T> | null;
}
