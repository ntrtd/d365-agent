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
import type { OutboundShipmentLineNotificationsApi } from './OutboundShipmentLineNotificationsApi';
import {
  OutboundShipmentNotifications,
  OutboundShipmentNotificationsType
} from './OutboundShipmentNotifications';

/**
 * This class represents the entity "OutboundShipmentLineNotifications" of service "d365_metadata".
 */
export class OutboundShipmentLineNotifications<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OutboundShipmentLineNotificationsType<T>
{
  /**
   * Technical entity name for OutboundShipmentLineNotifications.
   */
  static override _entityName = 'OutboundShipmentLineNotifications';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OutboundShipmentLineNotifications entity.
   */
  static _keys = [
    'dataAreaId',
    'OutboundNotificationNumber',
    'ShipmentNumber',
    'LineNumber'
  ];
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
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Created Cumulative Quantity.
   */
  declare workCreatedCumulativeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Work Created Quantity Unit Of Measure.
   * @nullable
   */
  declare workCreatedQuantityUnitOfMeasure?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link OutboundShipmentNotifications} entity.
   */
  declare outboundShipmentNotification?: OutboundShipmentNotifications<T> | null;

  constructor(_entityApi: OutboundShipmentLineNotificationsApi<T>) {
    super(_entityApi);
  }
}

export interface OutboundShipmentLineNotificationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  outboundNotificationNumber: DeserializedType<T, 'Edm.String'>;
  shipmentNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Int64'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  workCreatedCumulativeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  workCreatedQuantityUnitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  outboundShipmentNotification?: OutboundShipmentNotificationsType<T> | null;
}
