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
import type { BudgetModelsApi } from './BudgetModelsApi';
import { NoYes } from './NoYes';
import {
  BudgetRegisterEntries,
  BudgetRegisterEntriesType
} from './BudgetRegisterEntries';
import { BudgetSubModels, BudgetSubModelsType } from './BudgetSubModels';
import {
  BudgetRegisterEntryHeaders,
  BudgetRegisterEntryHeadersType
} from './BudgetRegisterEntryHeaders';
import {
  BudgetTrackingWorkspaceParameters,
  BudgetTrackingWorkspaceParametersType
} from './BudgetTrackingWorkspaceParameters';

/**
 * This class represents the entity "BudgetModels" of service "d365_metadata".
 */
export class BudgetModels<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BudgetModelsType<T>
{
  /**
   * Technical entity name for BudgetModels.
   */
  static override _entityName = 'BudgetModels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetModels entity.
   */
  static _keys = ['dataAreaId', 'BudgetModel'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Budget Model.
   */
  declare budgetModel: DeserializedType<T, 'Edm.String'>;
  /**
   * Stopped.
   * @nullable
   */
  declare stopped?: NoYes | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Flow Forecasts.
   * @nullable
   */
  declare cashFlowForecasts?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link BudgetRegisterEntries} entity.
   */
  declare budgetRegisterEntryBudgetModel?: BudgetRegisterEntries<T> | null;
  /**
   * One-to-many navigation property to the {@link BudgetSubModels} entity.
   */
  declare budgetSubmodelBudgetModel: BudgetSubModels<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetSubModels} entity.
   */
  declare budgetSubmodel: BudgetSubModels<T>[];
  /**
   * One-to-one navigation property to the {@link BudgetRegisterEntryHeaders} entity.
   */
  declare budgetRegisterEntryHeaderBudgetModel?: BudgetRegisterEntryHeaders<T> | null;
  /**
   * One-to-many navigation property to the {@link BudgetTrackingWorkspaceParameters} entity.
   */
  declare budgetTrackingWorkspaceParametersBudgetModel: BudgetTrackingWorkspaceParameters<T>[];

  constructor(_entityApi: BudgetModelsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetModelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  budgetModel: DeserializedType<T, 'Edm.String'>;
  stopped?: NoYes | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  cashFlowForecasts?: NoYes | null;
  budgetRegisterEntryBudgetModel?: BudgetRegisterEntriesType<T> | null;
  budgetSubmodelBudgetModel: BudgetSubModelsType<T>[];
  budgetSubmodel: BudgetSubModelsType<T>[];
  budgetRegisterEntryHeaderBudgetModel?: BudgetRegisterEntryHeadersType<T> | null;
  budgetTrackingWorkspaceParametersBudgetModel: BudgetTrackingWorkspaceParametersType<T>[];
}
