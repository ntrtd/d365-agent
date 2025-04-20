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
import type { ForecastModelsApi } from './ForecastModelsApi';
import { NoYes } from './NoYes';
import { ProjBudgetType } from './ProjBudgetType';
import {
  SupplyForecastEntries,
  SupplyForecastEntriesType
} from './SupplyForecastEntries';

/**
 * This class represents the entity "ForecastModels" of service "d365_metadata".
 */
export class ForecastModels<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ForecastModelsType<T>
{
  /**
   * Technical entity name for ForecastModels.
   */
  static override _entityName = 'ForecastModels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ForecastModels entity.
   */
  static _keys = ['dataAreaId', 'ModelId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Model Id.
   */
  declare modelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Time And Material Project Included.
   * @nullable
   */
  declare isTimeAndMaterialProjectIncluded?: NoYes | null;
  /**
   * Are Sufficient Project Item Funds Required.
   * @nullable
   */
  declare areSufficientProjectItemFundsRequired?: NoYes | null;
  /**
   * Is Fixed Price Project Wip Included.
   * @nullable
   */
  declare isFixedPriceProjectWipIncluded?: NoYes | null;
  /**
   * Is Project Hour Forecast Automatically Reduced.
   * @nullable
   */
  declare isProjectHourForecastAutomaticallyReduced?: NoYes | null;
  /**
   * Is Model Stopped.
   * @nullable
   */
  declare isModelStopped?: NoYes | null;
  /**
   * Will Project Forecast Generation Use Project Date.
   * @nullable
   */
  declare willProjectForecastGenerationUseProjectDate?: NoYes | null;
  /**
   * Is Project Item Forecast Automatically Reduced.
   * @nullable
   */
  declare isProjectItemForecastAutomaticallyReduced?: NoYes | null;
  /**
   * Budget Control Type.
   * @nullable
   */
  declare budgetControlType?: ProjBudgetType | null;
  /**
   * Are Sufficient Project Hour Funds Required.
   * @nullable
   */
  declare areSufficientProjectHourFundsRequired?: NoYes | null;
  /**
   * Is Cash Flow Forecast Generated.
   * @nullable
   */
  declare isCashFlowForecastGenerated?: NoYes | null;
  /**
   * Are Sufficient Project Expense Funds Required.
   * @nullable
   */
  declare areSufficientProjectExpenseFundsRequired?: NoYes | null;
  /**
   * Is Investment Project Wip Included.
   * @nullable
   */
  declare isInvestmentProjectWipIncluded?: NoYes | null;
  /**
   * Is Project Expense Forecast Automatically Reduced.
   * @nullable
   */
  declare isProjectExpenseForecastAutomaticallyReduced?: NoYes | null;
  /**
   * Model Name.
   * @nullable
   */
  declare modelName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link SupplyForecastEntries} entity.
   */
  declare supplyForecastEntries: SupplyForecastEntries<T>[];

  constructor(_entityApi: ForecastModelsApi<T>) {
    super(_entityApi);
  }
}

export interface ForecastModelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  modelId: DeserializedType<T, 'Edm.String'>;
  isTimeAndMaterialProjectIncluded?: NoYes | null;
  areSufficientProjectItemFundsRequired?: NoYes | null;
  isFixedPriceProjectWipIncluded?: NoYes | null;
  isProjectHourForecastAutomaticallyReduced?: NoYes | null;
  isModelStopped?: NoYes | null;
  willProjectForecastGenerationUseProjectDate?: NoYes | null;
  isProjectItemForecastAutomaticallyReduced?: NoYes | null;
  budgetControlType?: ProjBudgetType | null;
  areSufficientProjectHourFundsRequired?: NoYes | null;
  isCashFlowForecastGenerated?: NoYes | null;
  areSufficientProjectExpenseFundsRequired?: NoYes | null;
  isInvestmentProjectWipIncluded?: NoYes | null;
  isProjectExpenseForecastAutomaticallyReduced?: NoYes | null;
  modelName?: DeserializedType<T, 'Edm.String'> | null;
  supplyForecastEntries: SupplyForecastEntriesType<T>[];
}
