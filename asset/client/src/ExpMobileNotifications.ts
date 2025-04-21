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
import type { ExpMobileNotificationsApi } from './ExpMobileNotificationsApi';
import { NoYes } from './NoYes';
import { TrvExpMobileNotificationEventType } from './TrvExpMobileNotificationEventType';
import { TrvExpMobileNotificationType } from './TrvExpMobileNotificationType';
import { TrvDocumentType } from './TrvDocumentType';

/**
 * This class represents the entity "ExpMobileNotifications" of service "d365_metadata".
 */
export class ExpMobileNotifications<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExpMobileNotificationsType<T>
{
  /**
   * Technical entity name for ExpMobileNotifications.
   */
  static override _entityName = 'ExpMobileNotifications';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpMobileNotifications entity.
   */
  static _keys = ['EntRecId'];
  /**
   * Ent Rec Id.
   */
  declare entRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Marked Read.
   * @nullable
   */
  declare markedRead?: NoYes | null;
  /**
   * Notification Line 1.
   * @nullable
   */
  declare notificationLine1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Event Type.
   * @nullable
   */
  declare eventType?: TrvExpMobileNotificationEventType | null;
  /**
   * Event Time Stamp.
   */
  declare eventTimeStamp: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Notified Email Id.
   * @nullable
   */
  declare notifiedEmailId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Data Area Id.
   * @nullable
   */
  declare referenceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notification Type.
   * @nullable
   */
  declare notificationType?: TrvExpMobileNotificationType | null;
  /**
   * Exp Number.
   * @nullable
   */
  declare expNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Type.
   * @nullable
   */
  declare documentType?: TrvDocumentType | null;
  /**
   * Exp Trans Number.
   * @nullable
   */
  declare expTransNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ExpMobileNotificationsApi<T>) {
    super(_entityApi);
  }
}

export interface ExpMobileNotificationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  entRecId: DeserializedType<T, 'Edm.Int64'>;
  markedRead?: NoYes | null;
  notificationLine1?: DeserializedType<T, 'Edm.String'> | null;
  eventType?: TrvExpMobileNotificationEventType | null;
  eventTimeStamp: DeserializedType<T, 'Edm.DateTimeOffset'>;
  notifiedEmailId?: DeserializedType<T, 'Edm.String'> | null;
  referenceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  notificationType?: TrvExpMobileNotificationType | null;
  expNumber?: DeserializedType<T, 'Edm.String'> | null;
  documentType?: TrvDocumentType | null;
  expTransNumber?: DeserializedType<T, 'Edm.String'> | null;
}
