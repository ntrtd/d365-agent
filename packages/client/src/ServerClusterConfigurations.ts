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
import type { ServerClusterConfigurationsApi } from './ServerClusterConfigurationsApi';

/**
 * This class represents the entity "ServerClusterConfigurations" of service "d365_metadata".
 */
export class ServerClusterConfigurations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ServerClusterConfigurationsType<T>
{
  /**
   * Technical entity name for ServerClusterConfigurations.
   */
  static override _entityName = 'ServerClusterConfigurations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ServerClusterConfigurations entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ServerClusterConfigurationsApi<T>) {
    super(_entityApi);
  }
}

export interface ServerClusterConfigurationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
