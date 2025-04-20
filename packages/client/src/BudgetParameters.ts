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
import type { BudgetParametersApi } from './BudgetParametersApi';
import { NoYes } from './NoYes';
import { BudgetCheckRevenueBalanceInterval } from './BudgetCheckRevenueBalanceInterval';
import { BudgetCheckRevenueBalanceOption } from './BudgetCheckRevenueBalanceOption';
import {
  PeriodAllocationCategories,
  PeriodAllocationCategoriesType
} from './PeriodAllocationCategories';
import { JournalNames, JournalNamesType } from './JournalNames';

/**
 * This class represents the entity "BudgetParameters" of service "d365_metadata".
 */
export class BudgetParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BudgetParametersType<T>
{
  /**
   * Technical entity name for BudgetParameters.
   */
  static override _entityName = 'BudgetParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetParameters entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Use Rules For Budget Transfers.
   * @nullable
   */
  declare useRulesForBudgetTransfers?: NoYes | null;
  /**
   * Do Complete Register Entries On Transfer From Fixed Assets.
   * @nullable
   */
  declare doCompleteRegisterEntriesOnTransferFromFixedAssets?: NoYes | null;
  /**
   * Time Period For Budget Balances.
   * @nullable
   */
  declare timePeriodForBudgetBalances?: BudgetCheckRevenueBalanceInterval | null;
  /**
   * Do Complete Register Entries On Transfer From Project.
   * @nullable
   */
  declare doCompleteRegisterEntriesOnTransferFromProject?: NoYes | null;
  /**
   * Do Complete Register Entries On Transfer From Supply Forecast.
   * @nullable
   */
  declare doCompleteRegisterEntriesOnTransferFromSupplyForecast?: NoYes | null;
  /**
   * Use French Public Sector Accounting Rules.
   * @nullable
   */
  declare useFrenchPublicSectorAccountingRules?: NoYes | null;
  /**
   * Allocation Key.
   * @nullable
   */
  declare allocationKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Do Complete Register Entries On Transfer From Fixed Assets Ru.
   * @nullable
   */
  declare doCompleteRegisterEntriesOnTransferFromFixedAssetsRu?: NoYes | null;
  /**
   * Do Complete Register Entries On Transfer From Demand Forecast.
   * @nullable
   */
  declare doCompleteRegisterEntriesOnTransferFromDemandForecast?: NoYes | null;
  /**
   * Derive Account Structure From Combination.
   * @nullable
   */
  declare deriveAccountStructureFromCombination?: NoYes | null;
  /**
   * Use General Budget Reservation Public Sector Accounting Rules.
   * @nullable
   */
  declare useGeneralBudgetReservationPublicSectorAccountingRules?: NoYes | null;
  /**
   * Check Revenue Budget For Zero Budget Balances.
   * @nullable
   */
  declare checkRevenueBudgetForZeroBudgetBalances?: BudgetCheckRevenueBalanceOption | null;
  /**
   * Budget Journal.
   * @nullable
   */
  declare budgetJournal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link PeriodAllocationCategories} entity.
   */
  declare periodAllocationCategory?: PeriodAllocationCategories<T> | null;
  /**
   * One-to-one navigation property to the {@link JournalNames} entity.
   */
  declare budgetParametersJournalName?: JournalNames<T> | null;

  constructor(_entityApi: BudgetParametersApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  useRulesForBudgetTransfers?: NoYes | null;
  doCompleteRegisterEntriesOnTransferFromFixedAssets?: NoYes | null;
  timePeriodForBudgetBalances?: BudgetCheckRevenueBalanceInterval | null;
  doCompleteRegisterEntriesOnTransferFromProject?: NoYes | null;
  doCompleteRegisterEntriesOnTransferFromSupplyForecast?: NoYes | null;
  useFrenchPublicSectorAccountingRules?: NoYes | null;
  allocationKey?: DeserializedType<T, 'Edm.String'> | null;
  doCompleteRegisterEntriesOnTransferFromFixedAssetsRu?: NoYes | null;
  doCompleteRegisterEntriesOnTransferFromDemandForecast?: NoYes | null;
  deriveAccountStructureFromCombination?: NoYes | null;
  useGeneralBudgetReservationPublicSectorAccountingRules?: NoYes | null;
  checkRevenueBudgetForZeroBudgetBalances?: BudgetCheckRevenueBalanceOption | null;
  budgetJournal?: DeserializedType<T, 'Edm.String'> | null;
  periodAllocationCategory?: PeriodAllocationCategoriesType<T> | null;
  budgetParametersJournalName?: JournalNamesType<T> | null;
}
