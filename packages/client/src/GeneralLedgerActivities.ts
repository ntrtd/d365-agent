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
import type { GeneralLedgerActivitiesApi } from './GeneralLedgerActivitiesApi';
import { CurrentOperationsTax } from './CurrentOperationsTax';

/**
 * This class represents the entity "GeneralLedgerActivities" of service "d365_metadata".
 */
export class GeneralLedgerActivities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements GeneralLedgerActivitiesType<T>
{
  /**
   * Technical entity name for GeneralLedgerActivities.
   */
  static override _entityName = 'GeneralLedgerActivities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GeneralLedgerActivities entity.
   */
  static _keys = [
    'LedgerDimension',
    'MainAccountRecId',
    'Ledger',
    'PostingLayer',
    'LedgerGregorianDateId'
  ];
  /**
   * Ledger Dimension.
   */
  declare ledgerDimension: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Main Account Rec Id.
   */
  declare mainAccountRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ledger.
   */
  declare ledger: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Posting Layer.
   * @nullable
   */
  declare postingLayer?: CurrentOperationsTax | null;
  /**
   * Ledger Gregorian Date Id.
   */
  declare ledgerGregorianDateId: DeserializedType<T, 'Edm.String'>;
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
   * Return On Total Assets Expenses.
   */
  declare returnOnTotalAssetsExpenses: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Income.
   */
  declare income: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reporting Currency Amount.
   */
  declare reportingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Additional Earnings.
   */
  declare additionalEarnings: DeserializedType<T, 'Edm.Decimal'>;
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
   * Analysis Currency Amount.
   */
  declare analysisCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Equity.
   */
  declare equity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accounting Currency Amount.
   */
  declare accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
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
   * Sales Return And Discounts.
   */
  declare salesReturnAndDiscounts: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: GeneralLedgerActivitiesApi<T>) {
    super(_entityApi);
  }
}

export interface GeneralLedgerActivitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  ledgerDimension: DeserializedType<T, 'Edm.Int64'>;
  mainAccountRecId: DeserializedType<T, 'Edm.Int64'>;
  ledger: DeserializedType<T, 'Edm.Int64'>;
  postingLayer?: CurrentOperationsTax | null;
  ledgerGregorianDateId: DeserializedType<T, 'Edm.String'>;
  yearOffset: DeserializedType<T, 'Edm.Int64'>;
  accountsPayable: DeserializedType<T, 'Edm.Decimal'>;
  totalAssets: DeserializedType<T, 'Edm.Decimal'>;
  liabilities: DeserializedType<T, 'Edm.Decimal'>;
  profitMarginTaxes: DeserializedType<T, 'Edm.Decimal'>;
  expenses: DeserializedType<T, 'Edm.Decimal'>;
  returnOnTotalAssetsExpenses: DeserializedType<T, 'Edm.Decimal'>;
  income: DeserializedType<T, 'Edm.Decimal'>;
  reportingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  additionalEarnings: DeserializedType<T, 'Edm.Decimal'>;
  quickRatioAssets: DeserializedType<T, 'Edm.Decimal'>;
  costOfGoodsSold: DeserializedType<T, 'Edm.Decimal'>;
  currentRatioAssets: DeserializedType<T, 'Edm.Decimal'>;
  sales: DeserializedType<T, 'Edm.Decimal'>;
  salesPlusReturnsAndDiscounts: DeserializedType<T, 'Edm.Decimal'>;
  cash: DeserializedType<T, 'Edm.Decimal'>;
  analysisCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  equity: DeserializedType<T, 'Edm.Decimal'>;
  accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  accountsReceivable: DeserializedType<T, 'Edm.Decimal'>;
  totalRevenue: DeserializedType<T, 'Edm.Decimal'>;
  currentLiabilities: DeserializedType<T, 'Edm.Decimal'>;
  operatingExpenses: DeserializedType<T, 'Edm.Decimal'>;
  salesReturnAndDiscounts: DeserializedType<T, 'Edm.Decimal'>;
}
