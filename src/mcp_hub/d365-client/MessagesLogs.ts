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
import type { MessagesLogsApi } from './MessagesLogsApi';

/**
 * This class represents the entity "MessagesLogs" of service "d365_metadata".
 */
export class MessagesLogs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MessagesLogsType<T>
{
  /**
   * Technical entity name for MessagesLogs.
   */
  static override _entityName = 'MessagesLogs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MessagesLogs entity.
   */
  static _keys = ['dataAreaId', 'MessageId', 'ActionId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Message Id.
   */
  declare messageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Action Id.
   */
  declare actionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Message Status Id To.
   * @nullable
   */
  declare messageStatusIdTo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Processing Code.
   * @nullable
   */
  declare processingCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Processing Description.
   * @nullable
   */
  declare processingDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Message Status Id From.
   * @nullable
   */
  declare messageStatusIdFrom?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: MessagesLogsApi<T>) {
    super(_entityApi);
  }
}

export interface MessagesLogsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  messageId: DeserializedType<T, 'Edm.String'>;
  actionId: DeserializedType<T, 'Edm.String'>;
  messageStatusIdTo?: DeserializedType<T, 'Edm.String'> | null;
  processingCode?: DeserializedType<T, 'Edm.String'> | null;
  processingDescription?: DeserializedType<T, 'Edm.String'> | null;
  messageStatusIdFrom?: DeserializedType<T, 'Edm.String'> | null;
}
