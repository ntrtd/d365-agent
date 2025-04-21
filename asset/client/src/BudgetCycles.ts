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
import type { BudgetCyclesApi } from './BudgetCyclesApi';
import { BudgetCycleLengthOption } from './BudgetCycleLengthOption';
import {
  BudgetControlCycleModels,
  BudgetControlCycleModelsType
} from './BudgetControlCycleModels';
import {
  BudgetTrackingWorkspaceParameters,
  BudgetTrackingWorkspaceParametersType
} from './BudgetTrackingWorkspaceParameters';

/**
 * This class represents the entity "BudgetCycles" of service "d365_metadata".
 */
export class BudgetCycles<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BudgetCyclesType<T>
{
  /**
   * Technical entity name for BudgetCycles.
   */
  static override _entityName = 'BudgetCycles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetCycles entity.
   */
  static _keys = [
    'BudgetCycleTimeSpanName',
    'FiscalCalendar',
    'BudgetCycleName'
  ];
  /**
   * Budget Cycle Time Span Name.
   */
  declare budgetCycleTimeSpanName: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Calendar.
   */
  declare fiscalCalendar: DeserializedType<T, 'Edm.String'>;
  /**
   * Budget Cycle Name.
   */
  declare budgetCycleName: DeserializedType<T, 'Edm.String'>;
  /**
   * Length Of Budget Cycle.
   * @nullable
   */
  declare lengthOfBudgetCycle?: BudgetCycleLengthOption | null;
  /**
   * Number Of Fiscal Periods.
   */
  declare numberOfFiscalPeriods: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link BudgetControlCycleModels} entity.
   */
  declare budgetControlCycleModelBudgetCycle: BudgetControlCycleModels<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetTrackingWorkspaceParameters} entity.
   */
  declare budgetTrackingWorkspaceParametersBudgetCycle: BudgetTrackingWorkspaceParameters<T>[];

  constructor(_entityApi: BudgetCyclesApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetCyclesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  budgetCycleTimeSpanName: DeserializedType<T, 'Edm.String'>;
  fiscalCalendar: DeserializedType<T, 'Edm.String'>;
  budgetCycleName: DeserializedType<T, 'Edm.String'>;
  lengthOfBudgetCycle?: BudgetCycleLengthOption | null;
  numberOfFiscalPeriods: DeserializedType<T, 'Edm.Int32'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  budgetControlCycleModelBudgetCycle: BudgetControlCycleModelsType<T>[];
  budgetTrackingWorkspaceParametersBudgetCycle: BudgetTrackingWorkspaceParametersType<T>[];
}
