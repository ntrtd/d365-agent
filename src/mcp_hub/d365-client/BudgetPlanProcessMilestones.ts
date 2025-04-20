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
import type { BudgetPlanProcessMilestonesApi } from './BudgetPlanProcessMilestonesApi';

/**
 * This class represents the entity "BudgetPlanProcessMilestones" of service "d365_metadata".
 */
export class BudgetPlanProcessMilestones<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetPlanProcessMilestonesType<T>
{
  /**
   * Technical entity name for BudgetPlanProcessMilestones.
   */
  static override _entityName = 'BudgetPlanProcessMilestones';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetPlanProcessMilestones entity.
   */
  static _keys = ['dataAreaId', 'Name', 'Process'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Process.
   */
  declare process: DeserializedType<T, 'Edm.String'>;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Completed Date.
   */
  declare completedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: BudgetPlanProcessMilestonesApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetPlanProcessMilestonesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  process: DeserializedType<T, 'Edm.String'>;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  completedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
