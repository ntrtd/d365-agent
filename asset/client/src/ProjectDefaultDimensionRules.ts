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
import type { ProjectDefaultDimensionRulesApi } from './ProjectDefaultDimensionRulesApi';
import { TableAll } from './TableAll';
import { TableGroupAll } from './TableGroupAll';
import { ProjDefaultDimensionPriority } from './ProjDefaultDimensionPriority';

/**
 * This class represents the entity "ProjectDefaultDimensionRules" of service "d365_metadata".
 */
export class ProjectDefaultDimensionRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectDefaultDimensionRulesType<T>
{
  /**
   * Technical entity name for ProjectDefaultDimensionRules.
   */
  static override _entityName = 'ProjectDefaultDimensionRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectDefaultDimensionRules entity.
   */
  static _keys = [
    'dataAreaId',
    'ContractLineGroupRelation',
    'ContractLineGroupId',
    'RevenueProfileRelation',
    'RevenueProfileId',
    'ContractRelation',
    'ContractId',
    'ProjectRelation',
    'ProjectRelationId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Contract Line Group Relation.
   * @nullable
   */
  declare contractLineGroupRelation?: TableAll | null;
  /**
   * Contract Line Group Id.
   */
  declare contractLineGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Revenue Profile Relation.
   * @nullable
   */
  declare revenueProfileRelation?: TableAll | null;
  /**
   * Revenue Profile Id.
   */
  declare revenueProfileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Contract Relation.
   * @nullable
   */
  declare contractRelation?: TableAll | null;
  /**
   * Contract Id.
   */
  declare contractId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Relation.
   * @nullable
   */
  declare projectRelation?: TableGroupAll | null;
  /**
   * Project Relation Id.
   */
  declare projectRelationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Default Dimension Priority.
   * @nullable
   */
  declare defaultDimensionPriority?: ProjDefaultDimensionPriority | null;

  constructor(_entityApi: ProjectDefaultDimensionRulesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectDefaultDimensionRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  contractLineGroupRelation?: TableAll | null;
  contractLineGroupId: DeserializedType<T, 'Edm.String'>;
  revenueProfileRelation?: TableAll | null;
  revenueProfileId: DeserializedType<T, 'Edm.String'>;
  contractRelation?: TableAll | null;
  contractId: DeserializedType<T, 'Edm.String'>;
  projectRelation?: TableGroupAll | null;
  projectRelationId: DeserializedType<T, 'Edm.String'>;
  defaultDimensionPriority?: ProjDefaultDimensionPriority | null;
}
