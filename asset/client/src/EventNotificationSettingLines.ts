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
import type { EventNotificationSettingLinesApi } from './EventNotificationSettingLinesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "EventNotificationSettingLines" of service "d365_metadata".
 */
export class EventNotificationSettingLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EventNotificationSettingLinesType<T>
{
  /**
   * Technical entity name for EventNotificationSettingLines.
   */
  static override _entityName = 'EventNotificationSettingLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EventNotificationSettingLines entity.
   */
  static _keys = ['dataAreaId', 'ProfileId', 'NotificationType', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Profile Id.
   */
  declare profileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Notification Type.
   */
  declare notificationType: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Int32'>;
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
  /**
   * Delivery Mode Code.
   * @nullable
   */
  declare deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EventNotificationSettingLinesApi<T>) {
    super(_entityApi);
  }
}

export interface EventNotificationSettingLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  profileId: DeserializedType<T, 'Edm.String'>;
  notificationType: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Int32'>;
  emailId?: DeserializedType<T, 'Edm.String'> | null;
  active?: NoYes | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
}
