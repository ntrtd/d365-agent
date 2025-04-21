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
import type { MessageItemsLogsV2Api } from './MessageItemsLogsV2Api';

/**
 * This class represents the entity "MessageItemsLogsV2" of service "d365_metadata".
 */
export class MessageItemsLogsV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MessageItemsLogsV2Type<T>
{
  /**
   * Technical entity name for MessageItemsLogsV2.
   */
  static override _entityName = 'MessageItemsLogsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MessageItemsLogsV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'ItemId',
    'ItemTypeId',
    'MessageId',
    'ActionId',
    'CreatedDTime'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Type Id.
   */
  declare itemTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Message Id.
   */
  declare messageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Action Id.
   */
  declare actionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Created D Time.
   */
  declare createdDTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Item Status To.
   * @nullable
   */
  declare itemStatusTo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Processing Id.
   * @nullable
   */
  declare processingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Status From.
   * @nullable
   */
  declare itemStatusFrom?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: MessageItemsLogsV2Api<T>) {
    super(_entityApi);
  }
}

export interface MessageItemsLogsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  itemTypeId: DeserializedType<T, 'Edm.String'>;
  messageId: DeserializedType<T, 'Edm.String'>;
  actionId: DeserializedType<T, 'Edm.String'>;
  createdDTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itemStatusTo?: DeserializedType<T, 'Edm.String'> | null;
  processingId?: DeserializedType<T, 'Edm.String'> | null;
  itemStatusFrom?: DeserializedType<T, 'Edm.String'> | null;
}
