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
import type { ElectronicMessagesApi } from './ElectronicMessagesApi';
import {
  MessagesAdditionalFields,
  MessagesAdditionalFieldsType
} from './MessagesAdditionalFields';

/**
 * This class represents the entity "ElectronicMessages" of service "d365_metadata".
 */
export class ElectronicMessages<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ElectronicMessagesType<T>
{
  /**
   * Technical entity name for ElectronicMessages.
   */
  static override _entityName = 'ElectronicMessages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ElectronicMessages entity.
   */
  static _keys = ['dataAreaId', 'MessageId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Message Id.
   */
  declare messageId: DeserializedType<T, 'Edm.String'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Processing Id.
   * @nullable
   */
  declare processingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Message Status Id.
   * @nullable
   */
  declare messageStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link MessagesAdditionalFields} entity.
   */
  declare messagesAdditionalFields: MessagesAdditionalFields<T>[];

  constructor(_entityApi: ElectronicMessagesApi<T>) {
    super(_entityApi);
  }
}

export interface ElectronicMessagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  messageId: DeserializedType<T, 'Edm.String'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  processingId?: DeserializedType<T, 'Edm.String'> | null;
  messageStatusId?: DeserializedType<T, 'Edm.String'> | null;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  messagesAdditionalFields: MessagesAdditionalFieldsType<T>[];
}
