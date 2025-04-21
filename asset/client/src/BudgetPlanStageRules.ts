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
import type { BudgetPlanStageRulesApi } from './BudgetPlanStageRulesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "BudgetPlanStageRules" of service "d365_metadata".
 */
export class BudgetPlanStageRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetPlanStageRulesType<T>
{
  /**
   * Technical entity name for BudgetPlanStageRules.
   */
  static override _entityName = 'BudgetPlanStageRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetPlanStageRules entity.
   */
  static _keys = ['Process', 'Workflow', 'Stage'];
  /**
   * Process.
   */
  declare process: DeserializedType<T, 'Edm.String'>;
  /**
   * Workflow.
   */
  declare workflow: DeserializedType<T, 'Edm.String'>;
  /**
   * Stage.
   */
  declare stage: DeserializedType<T, 'Edm.String'>;
  /**
   * Can Add Budget Plan Lines.
   * @nullable
   */
  declare canAddBudgetPlanLines?: NoYes | null;
  /**
   * Layout.
   * @nullable
   */
  declare layout?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Can Add Child Budget Plans.
   * @nullable
   */
  declare canAddChildBudgetPlans?: NoYes | null;
  /**
   * Can Modify Budget Plan Lines.
   * @nullable
   */
  declare canModifyBudgetPlanLines?: NoYes | null;

  constructor(_entityApi: BudgetPlanStageRulesApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetPlanStageRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  process: DeserializedType<T, 'Edm.String'>;
  workflow: DeserializedType<T, 'Edm.String'>;
  stage: DeserializedType<T, 'Edm.String'>;
  canAddBudgetPlanLines?: NoYes | null;
  layout?: DeserializedType<T, 'Edm.String'> | null;
  canAddChildBudgetPlans?: NoYes | null;
  canModifyBudgetPlanLines?: NoYes | null;
}
