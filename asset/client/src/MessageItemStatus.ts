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
import type { MessageItemStatusApi } from './MessageItemStatusApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "MessageItemStatus" of service "d365_metadata".
 */
export class MessageItemStatus<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MessageItemStatusType<T>
{
  /**
   * Technical entity name for MessageItemStatus.
   */
  static override _entityName = 'MessageItemStatus';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MessageItemStatus entity.
   */
  static _keys = ['dataAreaId', 'MessageItemStatus'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Message Item Status.
   */
  declare messageItemStatus: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: MessageItemStatusApi<T>) {
    super(_entityApi);
  }
}

export interface MessageItemStatusType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  messageItemStatus: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  allowDelete?: NoYes | null;
}
