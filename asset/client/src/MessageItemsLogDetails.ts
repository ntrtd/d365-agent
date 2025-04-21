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
import type { MessageItemsLogDetailsApi } from './MessageItemsLogDetailsApi';

/**
 * This class represents the entity "MessageItemsLogDetails" of service "d365_metadata".
 */
export class MessageItemsLogDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MessageItemsLogDetailsType<T>
{
  /**
   * Technical entity name for MessageItemsLogDetails.
   */
  static override _entityName = 'MessageItemsLogDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MessageItemsLogDetails entity.
   */
  static _keys = [
    'dataAreaId',
    'ItemId',
    'MessageId',
    'ActionId',
    'ItemTypeId',
    'ProcessingId'
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
   * Message Id.
   */
  declare messageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Action Id.
   */
  declare actionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Type Id.
   */
  declare itemTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Processing Id.
   */
  declare processingId: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: MessageItemsLogDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface MessageItemsLogDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  messageId: DeserializedType<T, 'Edm.String'>;
  actionId: DeserializedType<T, 'Edm.String'>;
  itemTypeId: DeserializedType<T, 'Edm.String'>;
  processingId: DeserializedType<T, 'Edm.String'>;
  processingCode?: DeserializedType<T, 'Edm.String'> | null;
  processingDescription?: DeserializedType<T, 'Edm.String'> | null;
}
