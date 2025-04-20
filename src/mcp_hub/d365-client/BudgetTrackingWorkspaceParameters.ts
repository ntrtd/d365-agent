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
import type { BudgetTrackingWorkspaceParametersApi } from './BudgetTrackingWorkspaceParametersApi';
import { BudgetAnalysisPeriod } from './BudgetAnalysisPeriod';
import { NoYes } from './NoYes';
import {
  FinancialDimensionSets,
  FinancialDimensionSetsType
} from './FinancialDimensionSets';
import { FiscalPeriods, FiscalPeriodsType } from './FiscalPeriods';
import { BudgetModels, BudgetModelsType } from './BudgetModels';
import {
  OrganizationHierarchyTypes,
  OrganizationHierarchyTypesType
} from './OrganizationHierarchyTypes';
import { SystemUsers, SystemUsersType } from './SystemUsers';
import {
  BudgetPlanProcesses,
  BudgetPlanProcessesType
} from './BudgetPlanProcesses';
import { BudgetCycles, BudgetCyclesType } from './BudgetCycles';

/**
 * This class represents the entity "BudgetTrackingWorkspaceParameters" of service "d365_metadata".
 */
export class BudgetTrackingWorkspaceParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetTrackingWorkspaceParametersType<T>
{
  /**
   * Technical entity name for BudgetTrackingWorkspaceParameters.
   */
  static override _entityName = 'BudgetTrackingWorkspaceParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetTrackingWorkspaceParameters entity.
   */
  static _keys = ['dataAreaId', 'UserId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * User Id.
   */
  declare userId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Period End.
   */
  declare fiscalPeriodEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Budget Cycle Time Span Name.
   * @nullable
   */
  declare budgetCycleTimeSpanName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Cycle Name.
   * @nullable
   */
  declare budgetCycleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revenue Budget Threshold Percent.
   */
  declare revenueBudgetThresholdPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Active Forecasting Process.
   * @nullable
   */
  declare activeForecastingProcess?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Analysis Period.
   * @nullable
   */
  declare budgetAnalysisPeriod?: BudgetAnalysisPeriod | null;
  /**
   * Fiscal Period Name.
   * @nullable
   */
  declare fiscalPeriodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Period Year.
   * @nullable
   */
  declare fiscalPeriodYear?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Cycle Time Span Fiscal Calendar.
   * @nullable
   */
  declare budgetCycleTimeSpanFiscalCalendar?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Default.
   * @nullable
   */
  declare isDefault?: NoYes | null;
  /**
   * Expense Budget Threshold Percent.
   */
  declare expenseBudgetThresholdPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fiscal Period Start.
   */
  declare fiscalPeriodStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Fiscal Period Calendar.
   * @nullable
   */
  declare fiscalPeriodCalendar?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Hierarchy.
   * @nullable
   */
  declare organizationHierarchy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expense Dimension Set.
   * @nullable
   */
  declare expenseDimensionSet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revenue Dimension Set.
   * @nullable
   */
  declare revenueDimensionSet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Model Id.
   * @nullable
   */
  declare budgetModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link FinancialDimensionSets} entity.
   */
  declare expenseFinancialDimensionSets?: FinancialDimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link FiscalPeriods} entity.
   */
  declare fiscalPeriods?: FiscalPeriods<T> | null;
  /**
   * One-to-one navigation property to the {@link BudgetModels} entity.
   */
  declare budgetModels?: BudgetModels<T> | null;
  /**
   * One-to-one navigation property to the {@link OrganizationHierarchyTypes} entity.
   */
  declare organizationHierarchyTypes?: OrganizationHierarchyTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link FinancialDimensionSets} entity.
   */
  declare revenueFinancialDimensionSets?: FinancialDimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link SystemUsers} entity.
   */
  declare systemUsers?: SystemUsers<T> | null;
  /**
   * One-to-one navigation property to the {@link BudgetPlanProcesses} entity.
   */
  declare budgetPlanProcesses?: BudgetPlanProcesses<T> | null;
  /**
   * One-to-one navigation property to the {@link BudgetCycles} entity.
   */
  declare budgetCycles?: BudgetCycles<T> | null;

  constructor(_entityApi: BudgetTrackingWorkspaceParametersApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetTrackingWorkspaceParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  userId: DeserializedType<T, 'Edm.String'>;
  fiscalPeriodEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  budgetCycleTimeSpanName?: DeserializedType<T, 'Edm.String'> | null;
  budgetCycleName?: DeserializedType<T, 'Edm.String'> | null;
  revenueBudgetThresholdPercent: DeserializedType<T, 'Edm.Decimal'>;
  activeForecastingProcess?: DeserializedType<T, 'Edm.String'> | null;
  budgetAnalysisPeriod?: BudgetAnalysisPeriod | null;
  fiscalPeriodName?: DeserializedType<T, 'Edm.String'> | null;
  fiscalPeriodYear?: DeserializedType<T, 'Edm.String'> | null;
  budgetCycleTimeSpanFiscalCalendar?: DeserializedType<T, 'Edm.String'> | null;
  isDefault?: NoYes | null;
  expenseBudgetThresholdPercent: DeserializedType<T, 'Edm.Decimal'>;
  fiscalPeriodStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fiscalPeriodCalendar?: DeserializedType<T, 'Edm.String'> | null;
  organizationHierarchy?: DeserializedType<T, 'Edm.String'> | null;
  expenseDimensionSet?: DeserializedType<T, 'Edm.String'> | null;
  revenueDimensionSet?: DeserializedType<T, 'Edm.String'> | null;
  budgetModelId?: DeserializedType<T, 'Edm.String'> | null;
  expenseFinancialDimensionSets?: FinancialDimensionSetsType<T> | null;
  fiscalPeriods?: FiscalPeriodsType<T> | null;
  budgetModels?: BudgetModelsType<T> | null;
  organizationHierarchyTypes?: OrganizationHierarchyTypesType<T> | null;
  revenueFinancialDimensionSets?: FinancialDimensionSetsType<T> | null;
  systemUsers?: SystemUsersType<T> | null;
  budgetPlanProcesses?: BudgetPlanProcessesType<T> | null;
  budgetCycles?: BudgetCyclesType<T> | null;
}
