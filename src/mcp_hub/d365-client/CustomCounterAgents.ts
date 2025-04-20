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
import type { CustomCounterAgentsApi } from './CustomCounterAgentsApi';
import { CustomServiceProviderRu } from './CustomServiceProviderRu';
import { CustomPartnerTypeRu } from './CustomPartnerTypeRu';

/**
 * This class represents the entity "CustomCounterAgents" of service "d365_metadata".
 */
export class CustomCounterAgents<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustomCounterAgentsType<T>
{
  /**
   * Technical entity name for CustomCounterAgents.
   */
  static override _entityName = 'CustomCounterAgents';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomCounterAgents entity.
   */
  static _keys = ['dataAreaId', 'AgentAccountNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Agent Account Number.
   */
  declare agentAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Acquit Method.
   * @nullable
   */
  declare acquitMethod?: CustomServiceProviderRu | null;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agent Type.
   * @nullable
   */
  declare agentType?: CustomPartnerTypeRu | null;

  constructor(_entityApi: CustomCounterAgentsApi<T>) {
    super(_entityApi);
  }
}

export interface CustomCounterAgentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  agentAccountNumber: DeserializedType<T, 'Edm.String'>;
  acquitMethod?: CustomServiceProviderRu | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  agentType?: CustomPartnerTypeRu | null;
}
