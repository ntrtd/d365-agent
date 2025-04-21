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
import type { PositionForecastsV2Api } from './PositionForecastsV2Api';
import { HcmPositionForecastBudgetAcctLineSource } from './HcmPositionForecastBudgetAcctLineSource';
import { NoYes } from './NoYes';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "PositionForecastsV2" of service "d365_metadata".
 */
export class PositionForecastsV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PositionForecastsV2Type<T>
{
  /**
   * Technical entity name for PositionForecastsV2.
   */
  static override _entityName = 'PositionForecastsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PositionForecastsV2 entity.
   */
  static _keys = [
    'ForecastPositionId',
    'BudgetPlanningProcessName',
    'BudgetPlanScenarioName',
    'CostElementName',
    'CostElementDataAreaId',
    'CostElementEffectiveDate',
    'CostElementExpirationDate',
    'CostElementLineStartDate',
    'CostElementLineEndDate'
  ];
  /**
   * Forecast Position Id.
   */
  declare forecastPositionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Budget Planning Process Name.
   */
  declare budgetPlanningProcessName: DeserializedType<T, 'Edm.String'>;
  /**
   * Budget Plan Scenario Name.
   */
  declare budgetPlanScenarioName: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Element Name.
   */
  declare costElementName: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Element Data Area Id.
   */
  declare costElementDataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Element Effective Date.
   */
  declare costElementEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cost Element Expiration Date.
   */
  declare costElementExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cost Element Line Start Date.
   */
  declare costElementLineStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cost Element Line End Date.
   */
  declare costElementLineEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Anniversary Date.
   */
  declare anniversaryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cost Element Source.
   * @nullable
   */
  declare costElementSource?: HcmPositionForecastBudgetAcctLineSource | null;
  /**
   * Department Number.
   * @nullable
   */
  declare departmentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Assigned Worker.
   * @nullable
   */
  declare assignedWorker?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Title Id.
   * @nullable
   */
  declare titleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Element Line Main Account Display Value.
   * @nullable
   */
  declare costElementLineMainAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Forecast Position Activation Date.
   */
  declare forecastPositionActivationDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Forecast Position Ref Point Id.
   * @nullable
   */
  declare forecastPositionRefPointId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Percent.
   */
  declare percent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cost Element Line Reference Point Id.
   * @nullable
   */
  declare costElementLineReferencePointId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Forecast Position Full Time Equivalency.
   */
  declare forecastPositionFullTimeEquivalency: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Forecast Position Retirement Date.
   */
  declare forecastPositionRetirementDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Compensation Region Id.
   * @nullable
   */
  declare compensationRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Percentage Based.
   * @nullable
   */
  declare isPercentageBased?: NoYes | null;
  /**
   * Annual Amount.
   */
  declare annualAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Job Id.
   * @nullable
   */
  declare jobId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Position Compensation Group Data Area Id.
   * @nullable
   */
  declare forecastPositionCompensationGroupDataAreaId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Forecast Position Ref Point Setup Id.
   * @nullable
   */
  declare forecastPositionRefPointSetupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Element Line Reference Setup Id.
   * @nullable
   */
  declare costElementLineReferenceSetupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Compensation Level Id.
   * @nullable
   */
  declare compensationLevelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Position Compensation Group Id.
   * @nullable
   */
  declare forecastPositionCompensationGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Budget Amount.
   */
  declare budgetAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Position Type Id.
   * @nullable
   */
  declare positionTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Forecast Position Legal Enityt Name.
   * @nullable
   */
  declare forecastPositionLegalEnitytName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: PositionForecastsV2Api<T>) {
    super(_entityApi);
  }
}

export interface PositionForecastsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  forecastPositionId: DeserializedType<T, 'Edm.String'>;
  budgetPlanningProcessName: DeserializedType<T, 'Edm.String'>;
  budgetPlanScenarioName: DeserializedType<T, 'Edm.String'>;
  costElementName: DeserializedType<T, 'Edm.String'>;
  costElementDataAreaId: DeserializedType<T, 'Edm.String'>;
  costElementEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  costElementExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  costElementLineStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  costElementLineEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  anniversaryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  costElementSource?: HcmPositionForecastBudgetAcctLineSource | null;
  departmentNumber?: DeserializedType<T, 'Edm.String'> | null;
  assignedWorker?: DeserializedType<T, 'Edm.String'> | null;
  titleId?: DeserializedType<T, 'Edm.String'> | null;
  costElementLineMainAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  forecastPositionActivationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  forecastPositionRefPointId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  percent: DeserializedType<T, 'Edm.Decimal'>;
  costElementLineReferencePointId?: DeserializedType<T, 'Edm.String'> | null;
  forecastPositionFullTimeEquivalency: DeserializedType<T, 'Edm.Decimal'>;
  forecastPositionRetirementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  compensationRegionId?: DeserializedType<T, 'Edm.String'> | null;
  isPercentageBased?: NoYes | null;
  annualAmount: DeserializedType<T, 'Edm.Decimal'>;
  jobId?: DeserializedType<T, 'Edm.String'> | null;
  forecastPositionCompensationGroupDataAreaId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  forecastPositionRefPointSetupId?: DeserializedType<T, 'Edm.String'> | null;
  costElementLineReferenceSetupId?: DeserializedType<T, 'Edm.String'> | null;
  compensationLevelId?: DeserializedType<T, 'Edm.String'> | null;
  forecastPositionCompensationGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  budgetAmount: DeserializedType<T, 'Edm.Decimal'>;
  positionTypeId?: DeserializedType<T, 'Edm.String'> | null;
  forecastPositionLegalEnitytName?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
