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
import type { ConfiguratorDefinitionGroupTablesApi } from './ConfiguratorDefinitionGroupTablesApi';
import { NoYes } from './NoYes';
import {
  ConfiguratorDefinitionGroups,
  ConfiguratorDefinitionGroupsType
} from './ConfiguratorDefinitionGroups';

/**
 * This class represents the entity "ConfiguratorDefinitionGroupTables" of service "d365_metadata".
 */
export class ConfiguratorDefinitionGroupTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ConfiguratorDefinitionGroupTablesType<T>
{
  /**
   * Technical entity name for ConfiguratorDefinitionGroupTables.
   */
  static override _entityName = 'ConfiguratorDefinitionGroupTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ConfiguratorDefinitionGroupTables entity.
   */
  static _keys = ['dataAreaId', 'DefinitionGroupId', 'DataSourceNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Definition Group Id.
   */
  declare definitionGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Data Source Number.
   */
  declare dataSourceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Related Table Name.
   * @nullable
   */
  declare relatedTableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Relation.
   * @nullable
   */
  declare sysRelation?: NoYes | null;
  /**
   * Table Name.
   * @nullable
   */
  declare tableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ConfiguratorDefinitionGroups} entity.
   */
  declare configuratorDefinitionGroup?: ConfiguratorDefinitionGroups<T> | null;

  constructor(_entityApi: ConfiguratorDefinitionGroupTablesApi<T>) {
    super(_entityApi);
  }
}

export interface ConfiguratorDefinitionGroupTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  definitionGroupId: DeserializedType<T, 'Edm.String'>;
  dataSourceNumber: DeserializedType<T, 'Edm.Int32'>;
  relatedTableName?: DeserializedType<T, 'Edm.String'> | null;
  sysRelation?: NoYes | null;
  tableName?: DeserializedType<T, 'Edm.String'> | null;
  configuratorDefinitionGroup?: ConfiguratorDefinitionGroupsType<T> | null;
}
