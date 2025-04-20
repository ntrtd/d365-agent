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
import type { CdxDataStoreChannelsApi } from './CdxDataStoreChannelsApi';

/**
 * This class represents the entity "CDXDataStoreChannels" of service "d365_metadata".
 */
export class CdxDataStoreChannels<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CdxDataStoreChannelsType<T>
{
  /**
   * Technical entity name for CdxDataStoreChannels.
   */
  static override _entityName = 'CDXDataStoreChannels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdxDataStoreChannels entity.
   */
  static _keys = ['ChannelId', 'ChannelDatabaseId'];
  /**
   * Channel Id.
   */
  declare channelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Channel Database Id.
   */
  declare channelDatabaseId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: CdxDataStoreChannelsApi<T>) {
    super(_entityApi);
  }
}

export interface CdxDataStoreChannelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  channelId: DeserializedType<T, 'Edm.String'>;
  channelDatabaseId: DeserializedType<T, 'Edm.String'>;
}
