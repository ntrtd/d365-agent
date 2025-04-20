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
import type { SystemNotificationsApi } from './SystemNotificationsApi';
import { SystemNotificationType } from './SystemNotificationType';
import { SystemNotificationSeverity } from './SystemNotificationSeverity';
import { SystemNotificationState } from './SystemNotificationState';

/**
 * This class represents the entity "SystemNotifications" of service "d365_metadata".
 */
export class SystemNotifications<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SystemNotificationsType<T>
{
  /**
   * Technical entity name for SystemNotifications.
   */
  static override _entityName = 'SystemNotifications';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SystemNotifications entity.
   */
  static _keys = ['RuleId'];
  /**
   * Rule Id.
   */
  declare ruleId: DeserializedType<T, 'Edm.String'>;
  /**
   * System Notification Id.
   */
  declare systemNotificationId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Title.
   * @nullable
   */
  declare title?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expiration Date Time.
   */
  declare expirationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reminder Interval.
   */
  declare reminderInterval: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Message.
   * @nullable
   */
  declare message?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: SystemNotificationType | null;
  /**
   * Severity.
   * @nullable
   */
  declare severity?: SystemNotificationSeverity | null;
  /**
   * Sequence Id.
   */
  declare sequenceId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * State.
   * @nullable
   */
  declare state?: SystemNotificationState | null;

  constructor(_entityApi: SystemNotificationsApi<T>) {
    super(_entityApi);
  }
}

export interface SystemNotificationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  ruleId: DeserializedType<T, 'Edm.String'>;
  systemNotificationId: DeserializedType<T, 'Edm.Int64'>;
  title?: DeserializedType<T, 'Edm.String'> | null;
  expirationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reminderInterval: DeserializedType<T, 'Edm.Int64'>;
  message?: DeserializedType<T, 'Edm.String'> | null;
  type?: SystemNotificationType | null;
  severity?: SystemNotificationSeverity | null;
  sequenceId: DeserializedType<T, 'Edm.Int64'>;
  state?: SystemNotificationState | null;
}
