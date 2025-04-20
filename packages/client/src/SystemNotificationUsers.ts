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
import type { SystemNotificationUsersApi } from './SystemNotificationUsersApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "SystemNotificationUsers" of service "d365_metadata".
 */
export class SystemNotificationUsers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SystemNotificationUsersType<T>
{
  /**
   * Technical entity name for SystemNotificationUsers.
   */
  static override _entityName = 'SystemNotificationUsers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SystemNotificationUsers entity.
   */
  static _keys = ['UserId'];
  /**
   * User Id.
   */
  declare userId: DeserializedType<T, 'Edm.String'>;
  /**
   * Dismissed.
   * @nullable
   */
  declare dismissed?: NoYes | null;
  /**
   * System Notification Id.
   */
  declare systemNotificationId: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: SystemNotificationUsersApi<T>) {
    super(_entityApi);
  }
}

export interface SystemNotificationUsersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  userId: DeserializedType<T, 'Edm.String'>;
  dismissed?: NoYes | null;
  systemNotificationId: DeserializedType<T, 'Edm.Int64'>;
}
