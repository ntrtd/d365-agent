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
import type { BudgetPlanScenariosApi } from './BudgetPlanScenariosApi';
import { UnitOfMeasureClass } from './UnitOfMeasureClass';

/**
 * This class represents the entity "BudgetPlanScenarios" of service "d365_metadata".
 */
export class BudgetPlanScenarios<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BudgetPlanScenariosType<T>
{
  /**
   * Technical entity name for BudgetPlanScenarios.
   */
  static override _entityName = 'BudgetPlanScenarios';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetPlanScenarios entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Unit Of Measure Symbol.
   * @nullable
   */
  declare unitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Of Measure Class.
   * @nullable
   */
  declare unitOfMeasureClass?: UnitOfMeasureClass | null;

  constructor(_entityApi: BudgetPlanScenariosApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetPlanScenariosType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  unitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  unitOfMeasureClass?: UnitOfMeasureClass | null;
}
