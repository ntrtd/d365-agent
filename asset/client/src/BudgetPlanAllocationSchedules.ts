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
import type { BudgetPlanAllocationSchedulesApi } from './BudgetPlanAllocationSchedulesApi';
import { BudgetPlanAllocateType } from './BudgetPlanAllocateType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "BudgetPlanAllocationSchedules" of service "d365_metadata".
 */
export class BudgetPlanAllocationSchedules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetPlanAllocationSchedulesType<T>
{
  /**
   * Technical entity name for BudgetPlanAllocationSchedules.
   */
  static override _entityName = 'BudgetPlanAllocationSchedules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetPlanAllocationSchedules entity.
   */
  static _keys = ['AllocationSchedule'];
  /**
   * Allocation Schedule.
   */
  declare allocationSchedule: DeserializedType<T, 'Edm.String'>;
  /**
   * Factor.
   */
  declare factor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Destination Scenario.
   * @nullable
   */
  declare destinationScenario?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allocation Rule.
   * @nullable
   */
  declare allocationRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Scenario.
   * @nullable
   */
  declare sourceScenario?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Allocation Term.
   * @nullable
   */
  declare budgetAllocationTerm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allocation Method.
   * @nullable
   */
  declare allocationMethod?: BudgetPlanAllocateType | null;
  /**
   * Basis Scenario.
   * @nullable
   */
  declare basisScenario?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period Key.
   * @nullable
   */
  declare periodKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Source Effective Date.
   * @nullable
   */
  declare useSourceEffectiveDate?: NoYes | null;
  /**
   * Append Lines.
   * @nullable
   */
  declare appendLines?: NoYes | null;
  /**
   * Ledger.
   * @nullable
   */
  declare ledger?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BudgetPlanAllocationSchedulesApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetPlanAllocationSchedulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  allocationSchedule: DeserializedType<T, 'Edm.String'>;
  factor: DeserializedType<T, 'Edm.Decimal'>;
  destinationScenario?: DeserializedType<T, 'Edm.String'> | null;
  allocationRule?: DeserializedType<T, 'Edm.String'> | null;
  sourceScenario?: DeserializedType<T, 'Edm.String'> | null;
  budgetAllocationTerm?: DeserializedType<T, 'Edm.String'> | null;
  allocationMethod?: BudgetPlanAllocateType | null;
  basisScenario?: DeserializedType<T, 'Edm.String'> | null;
  periodKey?: DeserializedType<T, 'Edm.String'> | null;
  useSourceEffectiveDate?: NoYes | null;
  appendLines?: NoYes | null;
  ledger?: DeserializedType<T, 'Edm.String'> | null;
}
