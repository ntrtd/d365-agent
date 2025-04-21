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
import type { BudgetPlanWorkflowStagesApi } from './BudgetPlanWorkflowStagesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "BudgetPlanWorkflowStages" of service "d365_metadata".
 */
export class BudgetPlanWorkflowStages<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetPlanWorkflowStagesType<T>
{
  /**
   * Technical entity name for BudgetPlanWorkflowStages.
   */
  static override _entityName = 'BudgetPlanWorkflowStages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetPlanWorkflowStages entity.
   */
  static _keys = ['WorkflowName', 'StageName'];
  /**
   * Workflow Name.
   */
  declare workflowName: DeserializedType<T, 'Edm.String'>;
  /**
   * Stage Name.
   */
  declare stageName: DeserializedType<T, 'Edm.String'>;
  /**
   * Workflow Id.
   * @nullable
   */
  declare workflowId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Restrict Reset Budget Plan.
   * @nullable
   */
  declare restrictResetBudgetPlan?: NoYes | null;
  /**
   * Prior Budget Planning Workflow Name.
   * @nullable
   */
  declare priorBudgetPlanningWorkflowName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Restrict Delete Budget Plan.
   * @nullable
   */
  declare restrictDeleteBudgetPlan?: NoYes | null;
  /**
   * Prior Budget Planning Stage Name.
   * @nullable
   */
  declare priorBudgetPlanningStageName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Parent Budget Plan Required.
   * @nullable
   */
  declare isParentBudgetPlanRequired?: NoYes | null;

  constructor(_entityApi: BudgetPlanWorkflowStagesApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetPlanWorkflowStagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  workflowName: DeserializedType<T, 'Edm.String'>;
  stageName: DeserializedType<T, 'Edm.String'>;
  workflowId?: DeserializedType<T, 'Edm.String'> | null;
  restrictResetBudgetPlan?: NoYes | null;
  priorBudgetPlanningWorkflowName?: DeserializedType<T, 'Edm.String'> | null;
  restrictDeleteBudgetPlan?: NoYes | null;
  priorBudgetPlanningStageName?: DeserializedType<T, 'Edm.String'> | null;
  isParentBudgetPlanRequired?: NoYes | null;
}
