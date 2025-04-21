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
import type { Relations_BrApi } from './Relations_BrApi';
import { ConfRelationshipsBr } from './ConfRelationshipsBr';
import {
  ConfiguratorDefinitionGroups,
  ConfiguratorDefinitionGroupsType
} from './ConfiguratorDefinitionGroups';

/**
 * This class represents the entity "Relations_BR" of service "d365_metadata".
 */
export class Relations_Br<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Relations_BrType<T>
{
  /**
   * Technical entity name for Relations_Br.
   */
  static override _entityName = 'Relations_BR';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Relations_Br entity.
   */
  static _keys = [
    'dataAreaId',
    'DefinitionGroupId',
    'FixedValue',
    'RelatedField',
    'RelatedTable',
    'RelationshipType',
    'SourceFieldName',
    'SourceTableName'
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
   * Fixed Value.
   */
  declare fixedValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Related Field.
   */
  declare relatedField: DeserializedType<T, 'Edm.String'>;
  /**
   * Related Table.
   */
  declare relatedTable: DeserializedType<T, 'Edm.String'>;
  /**
   * Relationship Type.
   * @nullable
   */
  declare relationshipType?: ConfRelationshipsBr | null;
  /**
   * Source Field Name.
   */
  declare sourceFieldName: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Table Name.
   */
  declare sourceTableName: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link ConfiguratorDefinitionGroups} entity.
   */
  declare configuratorDefinitionGroup?: ConfiguratorDefinitionGroups<T> | null;

  constructor(_entityApi: Relations_BrApi<T>) {
    super(_entityApi);
  }
}

export interface Relations_BrType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  definitionGroupId: DeserializedType<T, 'Edm.String'>;
  fixedValue: DeserializedType<T, 'Edm.Int32'>;
  relatedField: DeserializedType<T, 'Edm.String'>;
  relatedTable: DeserializedType<T, 'Edm.String'>;
  relationshipType?: ConfRelationshipsBr | null;
  sourceFieldName: DeserializedType<T, 'Edm.String'>;
  sourceTableName: DeserializedType<T, 'Edm.String'>;
  configuratorDefinitionGroup?: ConfiguratorDefinitionGroupsType<T> | null;
}
