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
import type { BudgetPlanAlternateLayoutsApi } from './BudgetPlanAlternateLayoutsApi';

/**
 * This class represents the entity "BudgetPlanAlternateLayouts" of service "d365_metadata".
 */
export class BudgetPlanAlternateLayouts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetPlanAlternateLayoutsType<T>
{
  /**
   * Technical entity name for BudgetPlanAlternateLayouts.
   */
  static override _entityName = 'BudgetPlanAlternateLayouts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetPlanAlternateLayouts entity.
   */
  static _keys = [
    'BudgetPlanLayout',
    'BudgetPlanningProcess',
    'BudgetPlanningWorkflow',
    'BudgetPlanningStage'
  ];
  /**
   * Budget Plan Layout.
   */
  declare budgetPlanLayout: DeserializedType<T, 'Edm.String'>;
  /**
   * Budget Planning Process.
   */
  declare budgetPlanningProcess: DeserializedType<T, 'Edm.String'>;
  /**
   * Budget Planning Workflow.
   */
  declare budgetPlanningWorkflow: DeserializedType<T, 'Edm.String'>;
  /**
   * Budget Planning Stage.
   */
  declare budgetPlanningStage: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: BudgetPlanAlternateLayoutsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetPlanAlternateLayoutsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  budgetPlanLayout: DeserializedType<T, 'Edm.String'>;
  budgetPlanningProcess: DeserializedType<T, 'Edm.String'>;
  budgetPlanningWorkflow: DeserializedType<T, 'Edm.String'>;
  budgetPlanningStage: DeserializedType<T, 'Edm.String'>;
}
