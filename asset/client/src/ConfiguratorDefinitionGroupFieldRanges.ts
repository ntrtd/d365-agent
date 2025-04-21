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
import type { ConfiguratorDefinitionGroupFieldRangesApi } from './ConfiguratorDefinitionGroupFieldRangesApi';
import {
  ConfiguratorDefinitionGroups,
  ConfiguratorDefinitionGroupsType
} from './ConfiguratorDefinitionGroups';

/**
 * This class represents the entity "ConfiguratorDefinitionGroupFieldRanges" of service "d365_metadata".
 */
export class ConfiguratorDefinitionGroupFieldRanges<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ConfiguratorDefinitionGroupFieldRangesType<T>
{
  /**
   * Technical entity name for ConfiguratorDefinitionGroupFieldRanges.
   */
  static override _entityName = 'ConfiguratorDefinitionGroupFieldRanges';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ConfiguratorDefinitionGroupFieldRanges entity.
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
   * Range.
   * @nullable
   */
  declare range?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ConfiguratorDefinitionGroups} entity.
   */
  declare configuratorDefinitionGroup?: ConfiguratorDefinitionGroups<T> | null;

  constructor(_entityApi: ConfiguratorDefinitionGroupFieldRangesApi<T>) {
    super(_entityApi);
  }
}

export interface ConfiguratorDefinitionGroupFieldRangesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  definitionGroupId: DeserializedType<T, 'Edm.String'>;
  tableName: DeserializedType<T, 'Edm.String'>;
  fieldName: DeserializedType<T, 'Edm.String'>;
  range?: DeserializedType<T, 'Edm.String'> | null;
  configuratorDefinitionGroup?: ConfiguratorDefinitionGroupsType<T> | null;
}
