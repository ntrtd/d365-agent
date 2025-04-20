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
import type { IntegrationSourceMappingsApi } from './IntegrationSourceMappingsApi';
import { RetailTeamsIntegrationSourceType } from './RetailTeamsIntegrationSourceType';

/**
 * This class represents the entity "IntegrationSourceMappings" of service "d365_metadata".
 */
export class IntegrationSourceMappings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements IntegrationSourceMappingsType<T>
{
  /**
   * Technical entity name for IntegrationSourceMappings.
   */
  static override _entityName = 'IntegrationSourceMappings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IntegrationSourceMappings entity.
   */
  static _keys = ['SourceType', 'SourceId'];
  /**
   * Source Type.
   * @nullable
   */
  declare sourceType?: RetailTeamsIntegrationSourceType | null;
  /**
   * Source Id.
   */
  declare sourceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Team Id.
   * @nullable
   */
  declare teamId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: IntegrationSourceMappingsApi<T>) {
    super(_entityApi);
  }
}

export interface IntegrationSourceMappingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sourceType?: RetailTeamsIntegrationSourceType | null;
  sourceId: DeserializedType<T, 'Edm.String'>;
  teamId?: DeserializedType<T, 'Edm.String'> | null;
}
