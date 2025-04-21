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
import type { BudgetPlanStageAllocationsApi } from './BudgetPlanStageAllocationsApi';

/**
 * This class represents the entity "BudgetPlanStageAllocations" of service "d365_metadata".
 */
export class BudgetPlanStageAllocations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetPlanStageAllocationsType<T>
{
  /**
   * Technical entity name for BudgetPlanStageAllocations.
   */
  static override _entityName = 'BudgetPlanStageAllocations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetPlanStageAllocations entity.
   */
  static _keys = ['Workflow', 'Stage', 'AllocationSchedule'];
  /**
   * Workflow.
   */
  declare workflow: DeserializedType<T, 'Edm.String'>;
  /**
   * Stage.
   */
  declare stage: DeserializedType<T, 'Edm.String'>;
  /**
   * Allocation Schedule.
   */
  declare allocationSchedule: DeserializedType<T, 'Edm.String'>;
  /**
   * Ordinal.
   */
  declare ordinal: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: BudgetPlanStageAllocationsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetPlanStageAllocationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  workflow: DeserializedType<T, 'Edm.String'>;
  stage: DeserializedType<T, 'Edm.String'>;
  allocationSchedule: DeserializedType<T, 'Edm.String'>;
  ordinal: DeserializedType<T, 'Edm.Int32'>;
}
