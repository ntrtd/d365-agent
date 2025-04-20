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
import type { ServerConfigurationsApi } from './ServerConfigurationsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ServerConfigurations" of service "d365_metadata".
 */
export class ServerConfigurations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ServerConfigurationsType<T>
{
  /**
   * Technical entity name for ServerConfigurations.
   */
  static override _entityName = 'ServerConfigurations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ServerConfigurations entity.
   */
  static _keys = ['AOSInstanceName', 'LoadBalancer', 'ClusterName'];
  /**
   * Aos Instance Name.
   */
  declare aosInstanceName: DeserializedType<T, 'Edm.String'>;
  /**
   * Load Balancer.
   * @nullable
   */
  declare loadBalancer?: NoYes | null;
  /**
   * Cluster Name.
   */
  declare clusterName: DeserializedType<T, 'Edm.String'>;
  /**
   * Azure Deployment Id.
   * @nullable
   */
  declare azureDeploymentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Alive.
   */
  declare timeAlive: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Role Idle.
   * @nullable
   */
  declare isRoleIdle?: NoYes | null;
  /**
   * Max Concurrent Sessions.
   */
  declare maxConcurrentSessions: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Batch Server.
   * @nullable
   */
  declare isBatchServer?: NoYes | null;
  /**
   * Server Guid.
   */
  declare serverGuid: DeserializedType<T, 'Edm.Guid'>;

  constructor(_entityApi: ServerConfigurationsApi<T>) {
    super(_entityApi);
  }
}

export interface ServerConfigurationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  aosInstanceName: DeserializedType<T, 'Edm.String'>;
  loadBalancer?: NoYes | null;
  clusterName: DeserializedType<T, 'Edm.String'>;
  azureDeploymentId?: DeserializedType<T, 'Edm.String'> | null;
  timeAlive: DeserializedType<T, 'Edm.Int32'>;
  isRoleIdle?: NoYes | null;
  maxConcurrentSessions: DeserializedType<T, 'Edm.Int32'>;
  isBatchServer?: NoYes | null;
  serverGuid: DeserializedType<T, 'Edm.Guid'>;
}
