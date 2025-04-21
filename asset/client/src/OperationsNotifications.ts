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
import type { OperationsNotificationsApi } from './OperationsNotificationsApi';

/**
 * This class represents the entity "OperationsNotifications" of service "d365_metadata".
 */
export class OperationsNotifications<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OperationsNotificationsType<T>
{
  /**
   * Technical entity name for OperationsNotifications.
   */
  static override _entityName = 'OperationsNotifications';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OperationsNotifications entity.
   */
  static _keys = ['Id'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Notification Raised Date Time.
   */
  declare notificationRaisedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Payload.
   * @nullable
   */
  declare payload?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: OperationsNotificationsApi<T>) {
    super(_entityApi);
  }
}

export interface OperationsNotificationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  notificationRaisedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payload?: DeserializedType<T, 'Edm.String'> | null;
  type?: DeserializedType<T, 'Edm.String'> | null;
}
