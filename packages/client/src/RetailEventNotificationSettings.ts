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
import type { RetailEventNotificationSettingsApi } from './RetailEventNotificationSettingsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailEventNotificationSettings" of service "d365_metadata".
 */
export class RetailEventNotificationSettings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailEventNotificationSettingsType<T>
{
  /**
   * Technical entity name for RetailEventNotificationSettings.
   */
  static override _entityName = 'RetailEventNotificationSettings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailEventNotificationSettings entity.
   */
  static _keys = ['dataAreaId', 'NotificationType', 'ProfileId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Notification Type.
   */
  declare notificationType: DeserializedType<T, 'Edm.String'>;
  /**
   * Profile Id.
   */
  declare profileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Email Id.
   * @nullable
   */
  declare emailId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active.
   * @nullable
   */
  declare active?: NoYes | null;

  constructor(_entityApi: RetailEventNotificationSettingsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailEventNotificationSettingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  notificationType: DeserializedType<T, 'Edm.String'>;
  profileId: DeserializedType<T, 'Edm.String'>;
  emailId?: DeserializedType<T, 'Edm.String'> | null;
  active?: NoYes | null;
}
