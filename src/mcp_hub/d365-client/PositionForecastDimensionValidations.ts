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
import type { PositionForecastDimensionValidationsApi } from './PositionForecastDimensionValidationsApi';

/**
 * This class represents the entity "PositionForecastDimensionValidations" of service "d365_metadata".
 */
export class PositionForecastDimensionValidations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PositionForecastDimensionValidationsType<T>
{
  /**
   * Technical entity name for PositionForecastDimensionValidations.
   */
  static override _entityName = 'PositionForecastDimensionValidations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PositionForecastDimensionValidations entity.
   */
  static _keys = [
    'PositionId',
    'BudgetPlanningProcessName',
    'BudgetPlanScenarioName'
  ];
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Budget Planning Process Name.
   */
  declare budgetPlanningProcessName: DeserializedType<T, 'Edm.String'>;
  /**
   * Budget Plan Scenario Name.
   */
  declare budgetPlanScenarioName: DeserializedType<T, 'Edm.String'>;
  /**
   * Dimension Validated By.
   * @nullable
   */
  declare dimensionValidatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Validated Date Time.
   */
  declare dimensionValidatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: PositionForecastDimensionValidationsApi<T>) {
    super(_entityApi);
  }
}

export interface PositionForecastDimensionValidationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  positionId: DeserializedType<T, 'Edm.String'>;
  budgetPlanningProcessName: DeserializedType<T, 'Edm.String'>;
  budgetPlanScenarioName: DeserializedType<T, 'Edm.String'>;
  dimensionValidatedBy?: DeserializedType<T, 'Edm.String'> | null;
  dimensionValidatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
