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
import type { MessageProcessingsApi } from './MessageProcessingsApi';

/**
 * This class represents the entity "MessageProcessings" of service "d365_metadata".
 */
export class MessageProcessings<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MessageProcessingsType<T>
{
  /**
   * Technical entity name for MessageProcessings.
   */
  static override _entityName = 'MessageProcessings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MessageProcessings entity.
   */
  static _keys = ['dataAreaId', 'Processing'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Processing.
   */
  declare processing: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: MessageProcessingsApi<T>) {
    super(_entityApi);
  }
}

export interface MessageProcessingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  processing: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
