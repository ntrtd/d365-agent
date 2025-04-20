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
import type { BudgetPlanHeadersApi } from './BudgetPlanHeadersApi';
import { BudgetPlanWorkflowStatus } from './BudgetPlanWorkflowStatus';
import { BudgetPlanStatus } from './BudgetPlanStatus';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "BudgetPlanHeaders" of service "d365_metadata".
 */
export class BudgetPlanHeaders<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BudgetPlanHeadersType<T>
{
  /**
   * Technical entity name for BudgetPlanHeaders.
   */
  static override _entityName = 'BudgetPlanHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetPlanHeaders entity.
   */
  static _keys = ['DocumentNumber'];
  /**
   * Document Number.
   */
  declare documentNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Workflow Status.
   * @nullable
   */
  declare workflowStatus?: BudgetPlanWorkflowStatus | null;
  /**
   * Parent Budget Plan.
   * @nullable
   */
  declare parentBudgetPlan?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Layout.
   * @nullable
   */
  declare layout?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Status.
   * @nullable
   */
  declare documentStatus?: BudgetPlanStatus | null;
  /**
   * Stage.
   * @nullable
   */
  declare stage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Preparer Personnel Number.
   * @nullable
   */
  declare preparerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Responsibility Center Party Number.
   * @nullable
   */
  declare responsibilityCenterPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Historical.
   * @nullable
   */
  declare isHistorical?: NoYes | null;
  /**
   * In Use By.
   * @nullable
   */
  declare inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budgeting Organization Name.
   * @nullable
   */
  declare budgetingOrganizationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Personnel Name.
   * @nullable
   */
  declare personnelName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Priority.
   * @nullable
   */
  declare priority?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Process.
   * @nullable
   */
  declare process?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rank.
   */
  declare rank: DeserializedType<T, 'Edm.Int32'>;
  /**
   * User Group.
   * @nullable
   */
  declare userGroup?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BudgetPlanHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetPlanHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  documentNumber: DeserializedType<T, 'Edm.String'>;
  workflowStatus?: BudgetPlanWorkflowStatus | null;
  parentBudgetPlan?: DeserializedType<T, 'Edm.String'> | null;
  layout?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  documentStatus?: BudgetPlanStatus | null;
  stage?: DeserializedType<T, 'Edm.String'> | null;
  preparerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  responsibilityCenterPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  isHistorical?: NoYes | null;
  inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  budgetingOrganizationName?: DeserializedType<T, 'Edm.String'> | null;
  personnelName?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  priority?: DeserializedType<T, 'Edm.String'> | null;
  process?: DeserializedType<T, 'Edm.String'> | null;
  rank: DeserializedType<T, 'Edm.Int32'>;
  userGroup?: DeserializedType<T, 'Edm.String'> | null;
}
