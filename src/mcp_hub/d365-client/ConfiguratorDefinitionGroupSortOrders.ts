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
import type { ConfiguratorDefinitionGroupSortOrdersApi } from './ConfiguratorDefinitionGroupSortOrdersApi';
import { SortOrder } from './SortOrder';
import {
  ConfiguratorDefinitionGroups,
  ConfiguratorDefinitionGroupsType
} from './ConfiguratorDefinitionGroups';

/**
 * This class represents the entity "ConfiguratorDefinitionGroupSortOrders" of service "d365_metadata".
 */
export class ConfiguratorDefinitionGroupSortOrders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ConfiguratorDefinitionGroupSortOrdersType<T>
{
  /**
   * Technical entity name for ConfiguratorDefinitionGroupSortOrders.
   */
  static override _entityName = 'ConfiguratorDefinitionGroupSortOrders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ConfiguratorDefinitionGroupSortOrders entity.
   */
  static _keys = [
    'dataAreaId',
    'DefinitionGroupId',
    'TableName',
    'FieldName',
    'SortingNumber'
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
   * Table Name.
   */
  declare tableName: DeserializedType<T, 'Edm.String'>;
  /**
   * Field Name.
   */
  declare fieldName: DeserializedType<T, 'Edm.String'>;
  /**
   * Sorting Number.
   */
  declare sortingNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sort Order.
   * @nullable
   */
  declare sortOrder?: SortOrder | null;
  /**
   * One-to-one navigation property to the {@link ConfiguratorDefinitionGroups} entity.
   */
  declare configuratorDefinitionGroup?: ConfiguratorDefinitionGroups<T> | null;

  constructor(_entityApi: ConfiguratorDefinitionGroupSortOrdersApi<T>) {
    super(_entityApi);
  }
}

export interface ConfiguratorDefinitionGroupSortOrdersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  definitionGroupId: DeserializedType<T, 'Edm.String'>;
  tableName: DeserializedType<T, 'Edm.String'>;
  fieldName: DeserializedType<T, 'Edm.String'>;
  sortingNumber: DeserializedType<T, 'Edm.Int32'>;
  sortOrder?: SortOrder | null;
  configuratorDefinitionGroup?: ConfiguratorDefinitionGroupsType<T> | null;
}
