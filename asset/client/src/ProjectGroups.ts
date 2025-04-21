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
import type { ProjectGroupsApi } from './ProjectGroupsApi';
import { ProjLedgerStatus } from './ProjLedgerStatus';
import { ProjMatchingPrincip } from './ProjMatchingPrincip';
import { NoYes } from './NoYes';
import { ProjLedgerStatusOnAcc } from './ProjLedgerStatusOnAcc';
import { ProjCompletePrincip } from './ProjCompletePrincip';
import { ProjLinePropertySearch } from './ProjLinePropertySearch';
import { ProjType } from './ProjType';
import { ProjLedgerPosting } from './ProjLedgerPosting';
import { ProjSalesPriceMatchingPrincip } from './ProjSalesPriceMatchingPrincip';

/**
 * This class represents the entity "ProjectGroups" of service "d365_metadata".
 */
export class ProjectGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjectGroupsType<T>
{
  /**
   * Technical entity name for ProjectGroups.
   */
  static override _entityName = 'ProjectGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectGroups entity.
   */
  static _keys = ['dataAreaId', 'ProjectGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Group.
   */
  declare projectGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Post Costs Expense.
   * @nullable
   */
  declare postCostsExpense?: ProjLedgerStatus | null;
  /**
   * Profit Category Id.
   * @nullable
   */
  declare profitCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Matching Principle.
   * @nullable
   */
  declare matchingPrinciple?: ProjMatchingPrincip | null;
  /**
   * Can Verify Cost Against Remaining Forecast.
   * @nullable
   */
  declare canVerifyCostAgainstRemainingForecast?: NoYes | null;
  /**
   * Are Foreseeable Losses.
   * @nullable
   */
  declare areForeseeableLosses?: NoYes | null;
  /**
   * Accrue Revenue Fee.
   * @nullable
   */
  declare accrueRevenueFee?: NoYes | null;
  /**
   * On Account Invoicing.
   * @nullable
   */
  declare onAccountInvoicing?: ProjLedgerStatusOnAcc | null;
  /**
   * Revenue Recognition Accounting Rule.
   * @nullable
   */
  declare revenueRecognitionAccountingRule?: ProjCompletePrincip | null;
  /**
   * Accrue Revenue Expense.
   * @nullable
   */
  declare accrueRevenueExpense?: NoYes | null;
  /**
   * Period Code.
   * @nullable
   */
  declare periodCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Post Costs Hour.
   * @nullable
   */
  declare postCostsHour?: ProjLedgerStatus | null;
  /**
   * Production Category Id.
   * @nullable
   */
  declare productionCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accrue Revenue Item.
   * @nullable
   */
  declare accrueRevenueItem?: NoYes | null;
  /**
   * Line Property Search Priority.
   * @nullable
   */
  declare linePropertySearchPriority?: ProjLinePropertySearch | null;
  /**
   * Sales Value Category Id.
   * @nullable
   */
  declare salesValueCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accrued Loss Category Id.
   * @nullable
   */
  declare accruedLossCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Post Costs Item.
   * @nullable
   */
  declare postCostsItem?: ProjLedgerStatus | null;
  /**
   * Cost Template.
   * @nullable
   */
  declare costTemplate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Type.
   * @nullable
   */
  declare projectType?: ProjType | null;
  /**
   * Ledger Posting Search Priority.
   * @nullable
   */
  declare ledgerPostingSearchPriority?: ProjLedgerPosting | null;
  /**
   * Calculation Method.
   * @nullable
   */
  declare calculationMethod?: ProjSalesPriceMatchingPrincip | null;
  /**
   * Accrue Revenue Hour.
   * @nullable
   */
  declare accrueRevenueHour?: NoYes | null;

  constructor(_entityApi: ProjectGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectGroup: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  postCostsExpense?: ProjLedgerStatus | null;
  profitCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  matchingPrinciple?: ProjMatchingPrincip | null;
  canVerifyCostAgainstRemainingForecast?: NoYes | null;
  areForeseeableLosses?: NoYes | null;
  accrueRevenueFee?: NoYes | null;
  onAccountInvoicing?: ProjLedgerStatusOnAcc | null;
  revenueRecognitionAccountingRule?: ProjCompletePrincip | null;
  accrueRevenueExpense?: NoYes | null;
  periodCode?: DeserializedType<T, 'Edm.String'> | null;
  postCostsHour?: ProjLedgerStatus | null;
  productionCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  accrueRevenueItem?: NoYes | null;
  linePropertySearchPriority?: ProjLinePropertySearch | null;
  salesValueCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  accruedLossCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  postCostsItem?: ProjLedgerStatus | null;
  costTemplate?: DeserializedType<T, 'Edm.String'> | null;
  projectType?: ProjType | null;
  ledgerPostingSearchPriority?: ProjLedgerPosting | null;
  calculationMethod?: ProjSalesPriceMatchingPrincip | null;
  accrueRevenueHour?: NoYes | null;
}
