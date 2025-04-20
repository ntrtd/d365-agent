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
import type { ProjectControlCostGroupsApi } from './ProjectControlCostGroupsApi';
import { ProjControlPeriodCostGroupCtcMethod } from './ProjControlPeriodCostGroupCtcMethod';
import { ProjCostType } from './ProjCostType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ProjectControlCostGroups" of service "d365_metadata".
 */
export class ProjectControlCostGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectControlCostGroupsType<T>
{
  /**
   * Technical entity name for ProjectControlCostGroups.
   */
  static override _entityName = 'ProjectControlCostGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectControlCostGroups entity.
   */
  static _keys = ['dataAreaId', 'CostTemplateId', 'CostLineId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Template Id.
   */
  declare costTemplateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Line Id.
   */
  declare costLineId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost To Complete Method.
   * @nullable
   */
  declare costToCompleteMethod?: ProjControlPeriodCostGroupCtcMethod | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: ProjCostType | null;
  /**
   * Mandatory Cost Line.
   * @nullable
   */
  declare mandatoryCostLine?: NoYes | null;
  /**
   * Percentage Of Completion.
   * @nullable
   */
  declare percentageOfCompletion?: NoYes | null;

  constructor(_entityApi: ProjectControlCostGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectControlCostGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  costTemplateId: DeserializedType<T, 'Edm.String'>;
  costLineId: DeserializedType<T, 'Edm.String'>;
  costToCompleteMethod?: ProjControlPeriodCostGroupCtcMethod | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  transactionType?: ProjCostType | null;
  mandatoryCostLine?: NoYes | null;
  percentageOfCompletion?: NoYes | null;
}
