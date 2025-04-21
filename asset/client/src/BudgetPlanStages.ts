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
import type { BudgetPlanStagesApi } from './BudgetPlanStagesApi';

/**
 * This class represents the entity "BudgetPlanStages" of service "d365_metadata".
 */
export class BudgetPlanStages<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BudgetPlanStagesType<T>
{
  /**
   * Technical entity name for BudgetPlanStages.
   */
  static override _entityName = 'BudgetPlanStages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetPlanStages entity.
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

  constructor(_entityApi: BudgetPlanStagesApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetPlanStagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
