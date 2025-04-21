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
import type { BudgetPlanProcessesApi } from './BudgetPlanProcessesApi';
import { BudgetPlanningApprovalProcessState } from './BudgetPlanningApprovalProcessState';
import {
  BudgetTrackingWorkspaceParameters,
  BudgetTrackingWorkspaceParametersType
} from './BudgetTrackingWorkspaceParameters';

/**
 * This class represents the entity "BudgetPlanProcesses" of service "d365_metadata".
 */
export class BudgetPlanProcesses<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BudgetPlanProcessesType<T>
{
  /**
   * Technical entity name for BudgetPlanProcesses.
   */
  static override _entityName = 'BudgetPlanProcesses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetPlanProcesses entity.
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
  /**
   * Approval Process State.
   * @nullable
   */
  declare approvalProcessState?: BudgetPlanningApprovalProcessState | null;
  /**
   * Organizationt Hierarchy Type.
   * @nullable
   */
  declare organizationtHierarchyType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Cycle Time Span.
   * @nullable
   */
  declare budgetCycleTimeSpan?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Structure.
   * @nullable
   */
  declare accountStructure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Calendar Id.
   * @nullable
   */
  declare fiscalCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger.
   * @nullable
   */
  declare ledger?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Cycle.
   * @nullable
   */
  declare budgetCycle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link BudgetTrackingWorkspaceParameters} entity.
   */
  declare budgetTrackingWorkspaceParametersBudgetPlanProcess: BudgetTrackingWorkspaceParameters<T>[];

  constructor(_entityApi: BudgetPlanProcessesApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetPlanProcessesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  approvalProcessState?: BudgetPlanningApprovalProcessState | null;
  organizationtHierarchyType?: DeserializedType<T, 'Edm.String'> | null;
  budgetCycleTimeSpan?: DeserializedType<T, 'Edm.String'> | null;
  accountStructure?: DeserializedType<T, 'Edm.String'> | null;
  fiscalCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  ledger?: DeserializedType<T, 'Edm.String'> | null;
  budgetCycle?: DeserializedType<T, 'Edm.String'> | null;
  budgetTrackingWorkspaceParametersBudgetPlanProcess: BudgetTrackingWorkspaceParametersType<T>[];
}
