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
import type { ProjectStageRuleSettingEntitiesApi } from './ProjectStageRuleSettingEntitiesApi';
import { ProjStatus } from './ProjStatus';
import { ProjType } from './ProjType';
import { ProjStatusRule } from './ProjStatusRule';

/**
 * This class represents the entity "ProjectStageRuleSettingEntities" of service "d365_metadata".
 */
export class ProjectStageRuleSettingEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectStageRuleSettingEntitiesType<T>
{
  /**
   * Technical entity name for ProjectStageRuleSettingEntities.
   */
  static override _entityName = 'ProjectStageRuleSettingEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectStageRuleSettingEntities entity.
   */
  static _keys = ['dataAreaId', 'ProjStatus', 'ProjType', 'ProjStatusRule'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Proj Status.
   * @nullable
   */
  declare projStatus?: ProjStatus | null;
  /**
   * Proj Type.
   * @nullable
   */
  declare projType?: ProjType | null;
  /**
   * Proj Status Rule.
   * @nullable
   */
  declare projStatusRule?: ProjStatusRule | null;

  constructor(_entityApi: ProjectStageRuleSettingEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectStageRuleSettingEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projStatus?: ProjStatus | null;
  projType?: ProjType | null;
  projStatusRule?: ProjStatusRule | null;
}
