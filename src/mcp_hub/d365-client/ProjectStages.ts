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
import type { ProjectStagesApi } from './ProjectStagesApi';
import { ProjStatus } from './ProjStatus';

/**
 * This class represents the entity "ProjectStages" of service "d365_metadata".
 */
export class ProjectStages<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjectStagesType<T>
{
  /**
   * Technical entity name for ProjectStages.
   */
  static override _entityName = 'ProjectStages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectStages entity.
   */
  static _keys = ['dataAreaId', 'Language', 'Status'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Language.
   */
  declare language: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: ProjStatus | null;
  /**
   * Stage.
   * @nullable
   */
  declare stage?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProjectStagesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectStagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  language: DeserializedType<T, 'Edm.String'>;
  status?: ProjStatus | null;
  stage?: DeserializedType<T, 'Edm.String'> | null;
}
