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
import type { MessageItemsApi } from './MessageItemsApi';

/**
 * This class represents the entity "MessageItems" of service "d365_metadata".
 */
export class MessageItems<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MessageItemsType<T>
{
  /**
   * Technical entity name for MessageItems.
   */
  static override _entityName = 'MessageItems';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MessageItems entity.
   */
  static _keys = ['dataAreaId', 'ItemId', 'ItemType', 'ProcessingId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Type.
   */
  declare itemType: DeserializedType<T, 'Edm.String'>;
  /**
   * Processing Id.
   */
  declare processingId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Status.
   * @nullable
   */
  declare itemStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Message Id.
   * @nullable
   */
  declare messageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Date.
   */
  declare itemDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Trans Date Time.
   */
  declare transDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: MessageItemsApi<T>) {
    super(_entityApi);
  }
}

export interface MessageItemsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  itemType: DeserializedType<T, 'Edm.String'>;
  processingId: DeserializedType<T, 'Edm.String'>;
  itemStatus?: DeserializedType<T, 'Edm.String'> | null;
  messageId?: DeserializedType<T, 'Edm.String'> | null;
  itemDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
