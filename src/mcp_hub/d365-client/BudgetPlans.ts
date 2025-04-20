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
import type { BudgetPlansApi } from './BudgetPlansApi';
import { BudgetPlanWorkflowStatus } from './BudgetPlanWorkflowStatus';
import { BudgetClass } from './BudgetClass';
import { BudgetPlanStatus } from './BudgetPlanStatus';
import { NoYes } from './NoYes';
import { BudgetPlanEstimateType } from './BudgetPlanEstimateType';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "BudgetPlans" of service "d365_metadata".
 */
export class BudgetPlans<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BudgetPlansType<T>
{
  /**
   * Technical entity name for BudgetPlans.
   */
  static override _entityName = 'BudgetPlans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetPlans entity.
   */
  static _keys = ['DocumentNumber', 'Scenario', 'LineReferenceId'];
  /**
   * Document Number.
   */
  declare documentNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Scenario.
   */
  declare scenario: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Reference Id.
   */
  declare lineReferenceId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Workflow Status.
   * @nullable
   */
  declare workflowStatus?: BudgetPlanWorkflowStatus | null;
  /**
   * Source Data Area Id.
   * @nullable
   */
  declare sourceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Budget Class.
   * @nullable
   */
  declare budgetClass?: BudgetClass | null;
  /**
   * Position Id.
   * @nullable
   */
  declare positionId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Transaction Unit Price.
   */
  declare transactionUnitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proposed Asset.
   * @nullable
   */
  declare proposedAsset?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Responsibility Center Party Number.
   * @nullable
   */
  declare responsibilityCenterPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Asset Id.
   * @nullable
   */
  declare assetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Historical.
   * @nullable
   */
  declare isHistorical?: NoYes | null;
  /**
   * Estimate Type.
   * @nullable
   */
  declare estimateType?: BudgetPlanEstimateType | null;
  /**
   * Is New Request.
   * @nullable
   */
  declare isNewRequest?: NoYes | null;
  /**
   * Transaction Currency Code.
   * @nullable
   */
  declare transactionCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Unit Price.
   */
  declare unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ledger Account Display Value.
   * @nullable
   */
  declare ledgerAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budgeting Organization Name.
   * @nullable
   */
  declare budgetingOrganizationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Recurring.
   * @nullable
   */
  declare isRecurring?: NoYes | null;
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
   * Transaction Currency Amount.
   */
  declare transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proposed Project.
   * @nullable
   */
  declare proposedProject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comment.
   * @nullable
   */
  declare comment?: DeserializedType<T, 'Edm.String'> | null;
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
   * Ledger Account Account Structure.
   * @nullable
   */
  declare ledgerAccountAccountStructure?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * User Group.
   * @nullable
   */
  declare userGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare ledgerDimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: BudgetPlansApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetPlansType<
  T extends DeSerializers = DefaultDeSerializers
> {
  documentNumber: DeserializedType<T, 'Edm.String'>;
  scenario: DeserializedType<T, 'Edm.String'>;
  lineReferenceId: DeserializedType<T, 'Edm.Guid'>;
  workflowStatus?: BudgetPlanWorkflowStatus | null;
  sourceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  parentBudgetPlan?: DeserializedType<T, 'Edm.String'> | null;
  layout?: DeserializedType<T, 'Edm.String'> | null;
  budgetClass?: BudgetClass | null;
  positionId?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  documentStatus?: BudgetPlanStatus | null;
  stage?: DeserializedType<T, 'Edm.String'> | null;
  preparerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  transactionUnitPrice: DeserializedType<T, 'Edm.Decimal'>;
  proposedAsset?: DeserializedType<T, 'Edm.String'> | null;
  responsibilityCenterPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  assetId?: DeserializedType<T, 'Edm.String'> | null;
  isHistorical?: NoYes | null;
  estimateType?: BudgetPlanEstimateType | null;
  isNewRequest?: NoYes | null;
  transactionCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  ledgerAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  budgetingOrganizationName?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  isRecurring?: NoYes | null;
  personnelName?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  priority?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  proposedProject?: DeserializedType<T, 'Edm.String'> | null;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  process?: DeserializedType<T, 'Edm.String'> | null;
  rank: DeserializedType<T, 'Edm.Int32'>;
  ledgerAccountAccountStructure?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  userGroup?: DeserializedType<T, 'Edm.String'> | null;
  ledgerDimensionCombination?: DimensionCombinationsType<T> | null;
}
