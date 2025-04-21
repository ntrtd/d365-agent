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
import type { OutboundShipmentNotificationsApi } from './OutboundShipmentNotificationsApi';
import {
  OutboundShipmentLineNotifications,
  OutboundShipmentLineNotificationsType
} from './OutboundShipmentLineNotifications';
import {
  OutboundNotifications,
  OutboundNotificationsType
} from './OutboundNotifications';

/**
 * This class represents the entity "OutboundShipmentNotifications" of service "d365_metadata".
 */
export class OutboundShipmentNotifications<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OutboundShipmentNotificationsType<T>
{
  /**
   * Technical entity name for OutboundShipmentNotifications.
   */
  static override _entityName = 'OutboundShipmentNotifications';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OutboundShipmentNotifications entity.
   */
  static _keys = ['dataAreaId', 'OutboundNotificationNumber', 'ShipmentNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Outbound Notification Number.
   */
  declare outboundNotificationNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipment Number.
   */
  declare shipmentNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Order Number.
   * @nullable
   */
  declare orderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link OutboundShipmentLineNotifications} entity.
   */
  declare outboundShipmentLineNotifications: OutboundShipmentLineNotifications<T>[];
  /**
   * One-to-one navigation property to the {@link OutboundNotifications} entity.
   */
  declare outboundNotification?: OutboundNotifications<T> | null;

  constructor(_entityApi: OutboundShipmentNotificationsApi<T>) {
    super(_entityApi);
  }
}

export interface OutboundShipmentNotificationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  outboundNotificationNumber: DeserializedType<T, 'Edm.String'>;
  shipmentNumber: DeserializedType<T, 'Edm.String'>;
  orderNumber?: DeserializedType<T, 'Edm.String'> | null;
  outboundShipmentLineNotifications: OutboundShipmentLineNotificationsType<T>[];
  outboundNotification?: OutboundNotificationsType<T> | null;
}
