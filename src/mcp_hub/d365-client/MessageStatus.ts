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
import type { MessageStatusApi } from './MessageStatusApi';
import { NoYes } from './NoYes';
import { EmResponseType } from './EmResponseType';

/**
 * This class represents the entity "MessageStatus" of service "d365_metadata".
 */
export class MessageStatus<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MessageStatusType<T>
{
  /**
   * Technical entity name for MessageStatus.
   */
  static override _entityName = 'MessageStatus';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MessageStatus entity.
   */
  static _keys = ['dataAreaId', 'MessageStatus'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Message Status.
   */
  declare messageStatus: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Delete.
   * @nullable
   */
  declare allowDelete?: NoYes | null;
  /**
   * Message Item Status.
   * @nullable
   */
  declare messageItemStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Response Type.
   * @nullable
   */
  declare responseType?: EmResponseType | null;

  constructor(_entityApi: MessageStatusApi<T>) {
    super(_entityApi);
  }
}

export interface MessageStatusType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  messageStatus: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  allowDelete?: NoYes | null;
  messageItemStatus?: DeserializedType<T, 'Edm.String'> | null;
  responseType?: EmResponseType | null;
}
