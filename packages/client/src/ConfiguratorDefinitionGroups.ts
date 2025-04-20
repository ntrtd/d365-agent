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
import type { ConfiguratorDefinitionGroupsApi } from './ConfiguratorDefinitionGroupsApi';
import { NoYes } from './NoYes';
import {
  ConfiguratorDefinitionGroupFieldRanges,
  ConfiguratorDefinitionGroupFieldRangesType
} from './ConfiguratorDefinitionGroupFieldRanges';
import { Relations_Br, Relations_BrType } from './Relations_Br';
import {
  ConfiguratorDefinitionGroupFields,
  ConfiguratorDefinitionGroupFieldsType
} from './ConfiguratorDefinitionGroupFields';
import {
  ConfiguratorDefinitionGroupTables,
  ConfiguratorDefinitionGroupTablesType
} from './ConfiguratorDefinitionGroupTables';
import {
  ConfiguratorDefinitionGroupSortOrders,
  ConfiguratorDefinitionGroupSortOrdersType
} from './ConfiguratorDefinitionGroupSortOrders';
import {
  ConfiguratorLayoutGroups,
  ConfiguratorLayoutGroupsType
} from './ConfiguratorLayoutGroups';
import {
  ConfiguratorDefinitionGroupSummations,
  ConfiguratorDefinitionGroupSummationsType
} from './ConfiguratorDefinitionGroupSummations';

/**
 * This class represents the entity "ConfiguratorDefinitionGroups" of service "d365_metadata".
 */
export class ConfiguratorDefinitionGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ConfiguratorDefinitionGroupsType<T>
{
  /**
   * Technical entity name for ConfiguratorDefinitionGroups.
   */
  static override _entityName = 'ConfiguratorDefinitionGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ConfiguratorDefinitionGroups entity.
   */
  static _keys = ['dataAreaId', 'DefinitionGroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Definition Group Id.
   */
  declare definitionGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Query Title.
   * @nullable
   */
  declare queryTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Query Based.
   * @nullable
   */
  declare isQueryBased?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link ConfiguratorDefinitionGroupFieldRanges} entity.
   */
  declare configuratorDefinitionGroupFieldRange: ConfiguratorDefinitionGroupFieldRanges<T>[];
  /**
   * One-to-many navigation property to the {@link Relations_Br} entity.
   */
  declare relationsBr: Relations_Br<T>[];
  /**
   * One-to-many navigation property to the {@link ConfiguratorDefinitionGroupFields} entity.
   */
  declare configuratorDefinitionGroupField: ConfiguratorDefinitionGroupFields<T>[];
  /**
   * One-to-many navigation property to the {@link ConfiguratorDefinitionGroupTables} entity.
   */
  declare configuratorDefinitionGroupTable: ConfiguratorDefinitionGroupTables<T>[];
  /**
   * One-to-many navigation property to the {@link ConfiguratorDefinitionGroupSortOrders} entity.
   */
  declare configuratorDefinitionGroupSortOrder: ConfiguratorDefinitionGroupSortOrders<T>[];
  /**
   * One-to-many navigation property to the {@link ConfiguratorLayoutGroups} entity.
   */
  declare configuratorLayoutGroup: ConfiguratorLayoutGroups<T>[];
  /**
   * One-to-many navigation property to the {@link ConfiguratorDefinitionGroupSummations} entity.
   */
  declare configuratorDefinitionGroupSummation: ConfiguratorDefinitionGroupSummations<T>[];

  constructor(_entityApi: ConfiguratorDefinitionGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ConfiguratorDefinitionGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  definitionGroupId: DeserializedType<T, 'Edm.String'>;
  queryTitle?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  isQueryBased?: NoYes | null;
  configuratorDefinitionGroupFieldRange: ConfiguratorDefinitionGroupFieldRangesType<T>[];
  relationsBr: Relations_BrType<T>[];
  configuratorDefinitionGroupField: ConfiguratorDefinitionGroupFieldsType<T>[];
  configuratorDefinitionGroupTable: ConfiguratorDefinitionGroupTablesType<T>[];
  configuratorDefinitionGroupSortOrder: ConfiguratorDefinitionGroupSortOrdersType<T>[];
  configuratorLayoutGroup: ConfiguratorLayoutGroupsType<T>[];
  configuratorDefinitionGroupSummation: ConfiguratorDefinitionGroupSummationsType<T>[];
}
