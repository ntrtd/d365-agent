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
import type { ProjRevenueProfilesApi } from './ProjRevenueProfilesApi';
import { NoYes } from './NoYes';
import { ProjLedgerStatusOnAcc } from './ProjLedgerStatusOnAcc';
import { ProjLedgerStatusCost } from './ProjLedgerStatusCost';
import { ProjLedgerStatusItem } from './ProjLedgerStatusItem';
import { ProjCompletePrincip } from './ProjCompletePrincip';
import { ProjSalesPriceMatchingPrincip } from './ProjSalesPriceMatchingPrincip';
import { ProjMatchingPrincip } from './ProjMatchingPrincip';
import { ProjContractBillingMethod } from './ProjContractBillingMethod';
import { ProjLedgerStatus } from './ProjLedgerStatus';

/**
 * This class represents the entity "ProjRevenueProfiles" of service "d365_metadata".
 */
export class ProjRevenueProfiles<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjRevenueProfilesType<T>
{
  /**
   * Technical entity name for ProjRevenueProfiles.
   */
  static override _entityName = 'ProjRevenueProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjRevenueProfiles entity.
   */
  static _keys = ['dataAreaId', 'ProfileId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Profile Id.
   */
  declare profileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Are Losses Foreseeable.
   * @nullable
   */
  declare areLossesForeseeable?: NoYes | null;
  /**
   * Production Project Category Id.
   * @nullable
   */
  declare productionProjectCategoryId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * On Account Invoicing Method.
   * @nullable
   */
  declare onAccountInvoicingMethod?: ProjLedgerStatusOnAcc | null;
  /**
   * Is Revenue Item Accrued.
   * @nullable
   */
  declare isRevenueItemAccrued?: NoYes | null;
  /**
   * Profit Project Category Id.
   * @nullable
   */
  declare profitProjectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Revenue Expense Accrued.
   * @nullable
   */
  declare isRevenueExpenseAccrued?: NoYes | null;
  /**
   * Is Revenue Fee Accrued.
   * @nullable
   */
  declare isRevenueFeeAccrued?: NoYes | null;
  /**
   * Project Period Id.
   * @nullable
   */
  declare projectPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expense Cost Posting Method.
   * @nullable
   */
  declare expenseCostPostingMethod?: ProjLedgerStatusCost | null;
  /**
   * Cost Template Id.
   * @nullable
   */
  declare costTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Cost Posting Method.
   * @nullable
   */
  declare itemCostPostingMethod?: ProjLedgerStatusItem | null;
  /**
   * Revenue Recognition Accounting Rule.
   * @nullable
   */
  declare revenueRecognitionAccountingRule?: ProjCompletePrincip | null;
  /**
   * Sales Value Project Category Id.
   * @nullable
   */
  declare salesValueProjectCategoryId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Revenue Recognition Calculation Method.
   * @nullable
   */
  declare revenueRecognitionCalculationMethod?: ProjSalesPriceMatchingPrincip | null;
  /**
   * Revenue Recognition Matching Principle.
   * @nullable
   */
  declare revenueRecognitionMatchingPrinciple?: ProjMatchingPrincip | null;
  /**
   * Profile Name.
   * @nullable
   */
  declare profileName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accrued Loss Category Id.
   * @nullable
   */
  declare accruedLossCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Contract Billing Method.
   * @nullable
   */
  declare projectContractBillingMethod?: ProjContractBillingMethod | null;
  /**
   * Is Revenue Hour Accrued.
   * @nullable
   */
  declare isRevenueHourAccrued?: NoYes | null;
  /**
   * Hour Cost Posting Method.
   * @nullable
   */
  declare hourCostPostingMethod?: ProjLedgerStatus | null;

  constructor(_entityApi: ProjRevenueProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjRevenueProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  profileId: DeserializedType<T, 'Edm.String'>;
  areLossesForeseeable?: NoYes | null;
  productionProjectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  onAccountInvoicingMethod?: ProjLedgerStatusOnAcc | null;
  isRevenueItemAccrued?: NoYes | null;
  profitProjectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  isRevenueExpenseAccrued?: NoYes | null;
  isRevenueFeeAccrued?: NoYes | null;
  projectPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  expenseCostPostingMethod?: ProjLedgerStatusCost | null;
  costTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  itemCostPostingMethod?: ProjLedgerStatusItem | null;
  revenueRecognitionAccountingRule?: ProjCompletePrincip | null;
  salesValueProjectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  revenueRecognitionCalculationMethod?: ProjSalesPriceMatchingPrincip | null;
  revenueRecognitionMatchingPrinciple?: ProjMatchingPrincip | null;
  profileName?: DeserializedType<T, 'Edm.String'> | null;
  accruedLossCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  projectContractBillingMethod?: ProjContractBillingMethod | null;
  isRevenueHourAccrued?: NoYes | null;
  hourCostPostingMethod?: ProjLedgerStatus | null;
}
