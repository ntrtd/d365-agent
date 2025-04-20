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
import type { ConfiguratorDefinitionGroupFieldsApi } from './ConfiguratorDefinitionGroupFieldsApi';
import {
  ConfiguratorDefinitionGroups,
  ConfiguratorDefinitionGroupsType
} from './ConfiguratorDefinitionGroups';

/**
 * This class represents the entity "ConfiguratorDefinitionGroupFields" of service "d365_metadata".
 */
export class ConfiguratorDefinitionGroupFields<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ConfiguratorDefinitionGroupFieldsType<T>
{
  /**
   * Technical entity name for ConfiguratorDefinitionGroupFields.
   */
  static override _entityName = 'ConfiguratorDefinitionGroupFields';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ConfiguratorDefinitionGroupFields entity.
   */
  static _keys = [
    'dataAreaId',
    'DefinitionGroupId',
    'DataSourceNumber',
    'TableName',
    'SortOrder'
  ];
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
   * Table Name.
   */
  declare tableName: DeserializedType<T, 'Edm.String'>;
  /**
   * Sort Order.
   */
  declare sortOrder: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Field Group.
   * @nullable
   */
  declare fieldGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Field Name.
   * @nullable
   */
  declare fieldName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ConfiguratorDefinitionGroups} entity.
   */
  declare configuratorDefinitionGroup?: ConfiguratorDefinitionGroups<T> | null;

  constructor(_entityApi: ConfiguratorDefinitionGroupFieldsApi<T>) {
    super(_entityApi);
  }
}

export interface ConfiguratorDefinitionGroupFieldsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  definitionGroupId: DeserializedType<T, 'Edm.String'>;
  dataSourceNumber: DeserializedType<T, 'Edm.Int32'>;
  tableName: DeserializedType<T, 'Edm.String'>;
  sortOrder: DeserializedType<T, 'Edm.Int32'>;
  fieldGroup?: DeserializedType<T, 'Edm.String'> | null;
  fieldName?: DeserializedType<T, 'Edm.String'> | null;
  configuratorDefinitionGroup?: ConfiguratorDefinitionGroupsType<T> | null;
}
