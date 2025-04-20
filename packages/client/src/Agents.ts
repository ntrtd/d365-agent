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
import type { AgentsApi } from './AgentsApi';

/**
 * This class represents the entity "Agents" of service "d365_metadata".
 */
export class Agents<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AgentsType<T>
{
  /**
   * Technical entity name for Agents.
   */
  static override _entityName = 'Agents';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Agents entity.
   */
  static _keys = ['dataAreaId', 'AgentId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Agent Id.
   */
  declare agentId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Reg Num.
   * @nullable
   */
  declare taxRegNum?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AgentsApi<T>) {
    super(_entityApi);
  }
}

export interface AgentsType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  agentId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  taxRegNum?: DeserializedType<T, 'Edm.String'> | null;
}
