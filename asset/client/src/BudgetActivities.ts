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
import type { BudgetActivitiesApi } from './BudgetActivitiesApi';
import { BudgetTransactionType } from './BudgetTransactionType';

/**
 * This class represents the entity "BudgetActivities" of service "d365_metadata".
 */
export class BudgetActivities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BudgetActivitiesType<T>
{
  /**
   * Technical entity name for BudgetActivities.
   */
  static override _entityName = 'BudgetActivities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetActivities entity.
   */
  static _keys = [
    'BudgetTransactionType',
    'BudgetCodeName',
    'ModelId',
    'LedgerGregorianDateId',
    'MainAccountRecId',
    'LedgerRecId',
    'LedgerDimension'
  ];
  /**
   * Budget Transaction Type.
   * @nullable
   */
  declare budgetTransactionType?: BudgetTransactionType | null;
  /**
   * Budget Code Name.
   */
  declare budgetCodeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Model Id.
   */
  declare modelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ledger Gregorian Date Id.
   */
  declare ledgerGregorianDateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Main Account Rec Id.
   */
  declare mainAccountRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ledger Rec Id.
   */
  declare ledgerRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ledger Dimension.
   */
  declare ledgerDimension: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Year Offset.
   */
  declare yearOffset: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Accounts Payable.
   */
  declare accountsPayable: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Assets.
   */
  declare totalAssets: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Liabilities.
   */
  declare liabilities: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Profit Margin Taxes.
   */
  declare profitMarginTaxes: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expenses.
   */
  declare expenses: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Budget Code Rec Id.
   */
  declare budgetCodeRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Return On Total Assets Expenses.
   */
  declare returnOnTotalAssetsExpenses: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Income.
   */
  declare income: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Additional Earnings.
   */
  declare additionalEarnings: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Budget Accounting Currency Amount.
   */
  declare budgetAccountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quick Ratio Assets.
   */
  declare quickRatioAssets: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cost Of Goods Sold.
   */
  declare costOfGoodsSold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Current Ratio Assets.
   */
  declare currentRatioAssets: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales.
   */
  declare sales: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Plus Returns And Discounts.
   */
  declare salesPlusReturnsAndDiscounts: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cash.
   */
  declare cash: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Equity.
   */
  declare equity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accounts Receivable.
   */
  declare accountsReceivable: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Revenue.
   */
  declare totalRevenue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Current Liabilities.
   */
  declare currentLiabilities: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Operating Expenses.
   */
  declare operatingExpenses: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Budget Analysis Currency Amount.
   */
  declare budgetAnalysisCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Return And Discounts.
   */
  declare salesReturnAndDiscounts: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: BudgetActivitiesApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetActivitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  budgetTransactionType?: BudgetTransactionType | null;
  budgetCodeName: DeserializedType<T, 'Edm.String'>;
  modelId: DeserializedType<T, 'Edm.String'>;
  ledgerGregorianDateId: DeserializedType<T, 'Edm.String'>;
  mainAccountRecId: DeserializedType<T, 'Edm.Int64'>;
  ledgerRecId: DeserializedType<T, 'Edm.Int64'>;
  ledgerDimension: DeserializedType<T, 'Edm.Int64'>;
  yearOffset: DeserializedType<T, 'Edm.Int64'>;
  accountsPayable: DeserializedType<T, 'Edm.Decimal'>;
  totalAssets: DeserializedType<T, 'Edm.Decimal'>;
  liabilities: DeserializedType<T, 'Edm.Decimal'>;
  profitMarginTaxes: DeserializedType<T, 'Edm.Decimal'>;
  expenses: DeserializedType<T, 'Edm.Decimal'>;
  budgetCodeRecId: DeserializedType<T, 'Edm.Int64'>;
  returnOnTotalAssetsExpenses: DeserializedType<T, 'Edm.Decimal'>;
  income: DeserializedType<T, 'Edm.Decimal'>;
  additionalEarnings: DeserializedType<T, 'Edm.Decimal'>;
  budgetAccountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  quickRatioAssets: DeserializedType<T, 'Edm.Decimal'>;
  costOfGoodsSold: DeserializedType<T, 'Edm.Decimal'>;
  currentRatioAssets: DeserializedType<T, 'Edm.Decimal'>;
  sales: DeserializedType<T, 'Edm.Decimal'>;
  salesPlusReturnsAndDiscounts: DeserializedType<T, 'Edm.Decimal'>;
  cash: DeserializedType<T, 'Edm.Decimal'>;
  equity: DeserializedType<T, 'Edm.Decimal'>;
  accountsReceivable: DeserializedType<T, 'Edm.Decimal'>;
  totalRevenue: DeserializedType<T, 'Edm.Decimal'>;
  currentLiabilities: DeserializedType<T, 'Edm.Decimal'>;
  operatingExpenses: DeserializedType<T, 'Edm.Decimal'>;
  budgetAnalysisCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesReturnAndDiscounts: DeserializedType<T, 'Edm.Decimal'>;
}
