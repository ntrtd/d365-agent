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
import type { OutboundNotificationsApi } from './OutboundNotificationsApi';
import { WhsOutboundNotificationStatus } from './WhsOutboundNotificationStatus';
import {
  OutboundShipmentNotifications,
  OutboundShipmentNotificationsType
} from './OutboundShipmentNotifications';
import {
  WarehouseIntegrationSourceSystems,
  WarehouseIntegrationSourceSystemsType
} from './WarehouseIntegrationSourceSystems';

/**
 * This class represents the entity "OutboundNotifications" of service "d365_metadata".
 */
export class OutboundNotifications<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OutboundNotificationsType<T>
{
  /**
   * Technical entity name for OutboundNotifications.
   */
  static override _entityName = 'OutboundNotifications';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OutboundNotifications entity.
   */
  static _keys = ['dataAreaId', 'OutboundNotificationNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Outbound Notification Number.
   */
  declare outboundNotificationNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Outbound Notification Status.
   * @nullable
   */
  declare outboundNotificationStatus?: WhsOutboundNotificationStatus | null;
  /**
   * Source System Id.
   * @nullable
   */
  declare sourceSystemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link OutboundShipmentNotifications} entity.
   */
  declare outboundShipmentNotifications: OutboundShipmentNotifications<T>[];
  /**
   * One-to-one navigation property to the {@link WarehouseIntegrationSourceSystems} entity.
   */
  declare sourceSystem?: WarehouseIntegrationSourceSystems<T> | null;

  constructor(_entityApi: OutboundNotificationsApi<T>) {
    super(_entityApi);
  }
}

export interface OutboundNotificationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  outboundNotificationNumber: DeserializedType<T, 'Edm.String'>;
  outboundNotificationStatus?: WhsOutboundNotificationStatus | null;
  sourceSystemId?: DeserializedType<T, 'Edm.String'> | null;
  outboundShipmentNotifications: OutboundShipmentNotificationsType<T>[];
  sourceSystem?: WarehouseIntegrationSourceSystemsType<T> | null;
}
