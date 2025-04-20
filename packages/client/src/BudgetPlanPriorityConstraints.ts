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
import type { BudgetPlanPriorityConstraintsApi } from './BudgetPlanPriorityConstraintsApi';

/**
 * This class represents the entity "BudgetPlanPriorityConstraints" of service "d365_metadata".
 */
export class BudgetPlanPriorityConstraints<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetPlanPriorityConstraintsType<T>
{
  /**
   * Technical entity name for BudgetPlanPriorityConstraints.
   */
  static override _entityName = 'BudgetPlanPriorityConstraints';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetPlanPriorityConstraints entity.
   */
  static _keys = ['Process', 'Priority'];
  /**
   * Process.
   */
  declare process: DeserializedType<T, 'Edm.String'>;
  /**
   * Priority.
   */
  declare priority: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: BudgetPlanPriorityConstraintsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetPlanPriorityConstraintsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  process: DeserializedType<T, 'Edm.String'>;
  priority: DeserializedType<T, 'Edm.String'>;
}
