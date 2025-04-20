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
import type { MessagesAdditionalFieldsApi } from './MessagesAdditionalFieldsApi';
import {
  ElectronicMessages,
  ElectronicMessagesType
} from './ElectronicMessages';

/**
 * This class represents the entity "MessagesAdditionalFields" of service "d365_metadata".
 */
export class MessagesAdditionalFields<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MessagesAdditionalFieldsType<T>
{
  /**
   * Technical entity name for MessagesAdditionalFields.
   */
  static override _entityName = 'MessagesAdditionalFields';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MessagesAdditionalFields entity.
   */
  static _keys = ['dataAreaId', 'MessageId', 'AdditionalFieldId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Message Id.
   */
  declare messageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Additional Field Id.
   */
  declare additionalFieldId: DeserializedType<T, 'Edm.String'>;
  /**
   * Additional Field Value.
   * @nullable
   */
  declare additionalFieldValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ElectronicMessages} entity.
   */
  declare electronicMessages?: ElectronicMessages<T> | null;

  constructor(_entityApi: MessagesAdditionalFieldsApi<T>) {
    super(_entityApi);
  }
}

export interface MessagesAdditionalFieldsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  messageId: DeserializedType<T, 'Edm.String'>;
  additionalFieldId: DeserializedType<T, 'Edm.String'>;
  additionalFieldValue?: DeserializedType<T, 'Edm.String'> | null;
  electronicMessages?: ElectronicMessagesType<T> | null;
}
