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
import type { BudgetPlanPrioritiesApi } from './BudgetPlanPrioritiesApi';

/**
 * This class represents the entity "BudgetPlanPriorities" of service "d365_metadata".
 */
export class BudgetPlanPriorities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetPlanPrioritiesType<T>
{
  /**
   * Technical entity name for BudgetPlanPriorities.
   */
  static override _entityName = 'BudgetPlanPriorities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetPlanPriorities entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BudgetPlanPrioritiesApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetPlanPrioritiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
