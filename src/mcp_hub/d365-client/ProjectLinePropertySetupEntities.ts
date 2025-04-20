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
import type { ProjectLinePropertySetupEntitiesApi } from './ProjectLinePropertySetupEntitiesApi';
import { TableGroupAll } from './TableGroupAll';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ProjectLinePropertySetupEntities" of service "d365_metadata".
 */
export class ProjectLinePropertySetupEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectLinePropertySetupEntitiesType<T>
{
  /**
   * Technical entity name for ProjectLinePropertySetupEntities.
   */
  static override _entityName = 'ProjectLinePropertySetupEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectLinePropertySetupEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'ProjectCode',
    'ProjectRelation',
    'CategoryCode',
    'CategoryRelation'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Code.
   * @nullable
   */
  declare projectCode?: TableGroupAll | null;
  /**
   * Project Relation.
   */
  declare projectRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Code.
   * @nullable
   */
  declare categoryCode?: TableGroupAll | null;
  /**
   * Category Relation.
   */
  declare categoryRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Property Id.
   * @nullable
   */
  declare linePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Debit Note Setup Enabled.
   * @nullable
   */
  declare isDebitNoteSetupEnabled?: NoYes | null;

  constructor(_entityApi: ProjectLinePropertySetupEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectLinePropertySetupEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectCode?: TableGroupAll | null;
  projectRelation: DeserializedType<T, 'Edm.String'>;
  categoryCode?: TableGroupAll | null;
  categoryRelation: DeserializedType<T, 'Edm.String'>;
  linePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  isDebitNoteSetupEnabled?: NoYes | null;
}
