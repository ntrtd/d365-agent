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
import type { ConfiguratorDefinitionGroupSummationsApi } from './ConfiguratorDefinitionGroupSummationsApi';
import {
  ConfiguratorDefinitionGroups,
  ConfiguratorDefinitionGroupsType
} from './ConfiguratorDefinitionGroups';

/**
 * This class represents the entity "ConfiguratorDefinitionGroupSummations" of service "d365_metadata".
 */
export class ConfiguratorDefinitionGroupSummations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ConfiguratorDefinitionGroupSummationsType<T>
{
  /**
   * Technical entity name for ConfiguratorDefinitionGroupSummations.
   */
  static override _entityName = 'ConfiguratorDefinitionGroupSummations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ConfiguratorDefinitionGroupSummations entity.
   */
  static _keys = ['dataAreaId', 'DefinitionGroupId', 'TableName', 'FieldName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Definition Group Id.
   */
  declare definitionGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Table Name.
   */
  declare tableName: DeserializedType<T, 'Edm.String'>;
  /**
   * Field Name.
   */
  declare fieldName: DeserializedType<T, 'Edm.String'>;
  /**
   * Count All.
   */
  declare countAll: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Average Selected.
   */
  declare averageSelected: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Count Selected.
   */
  declare countSelected: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Average.
   */
  declare average: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sum Selected.
   */
  declare sumSelected: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sum All.
   */
  declare sumAll: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link ConfiguratorDefinitionGroups} entity.
   */
  declare configuratorDefinitionGroup?: ConfiguratorDefinitionGroups<T> | null;

  constructor(_entityApi: ConfiguratorDefinitionGroupSummationsApi<T>) {
    super(_entityApi);
  }
}

export interface ConfiguratorDefinitionGroupSummationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  definitionGroupId: DeserializedType<T, 'Edm.String'>;
  tableName: DeserializedType<T, 'Edm.String'>;
  fieldName: DeserializedType<T, 'Edm.String'>;
  countAll: DeserializedType<T, 'Edm.Int32'>;
  averageSelected: DeserializedType<T, 'Edm.Int32'>;
  countSelected: DeserializedType<T, 'Edm.Int32'>;
  average: DeserializedType<T, 'Edm.Decimal'>;
  sumSelected: DeserializedType<T, 'Edm.Int32'>;
  sumAll: DeserializedType<T, 'Edm.Decimal'>;
  configuratorDefinitionGroup?: ConfiguratorDefinitionGroupsType<T> | null;
}
