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
import type { BudgetPlansActivityApi } from './BudgetPlansActivityApi';
import { BudgetClass } from './BudgetClass';
import { BudgetPlanScenarioAttribute } from './BudgetPlanScenarioAttribute';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "BudgetPlansActivity" of service "d365_metadata".
 */
export class BudgetPlansActivity<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BudgetPlansActivityType<T>
{
  /**
   * Technical entity name for BudgetPlansActivity.
   */
  static override _entityName = 'BudgetPlansActivity';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetPlansActivity entity.
   */
  static _keys = [
    'BudgetClass',
    'MainAccountRecId',
    'LedgerDimension',
    'EffectiveDate',
    'Scenario'
  ];
  /**
   * Budget Class.
   * @nullable
   */
  declare budgetClass?: BudgetClass | null;
  /**
   * Main Account Rec Id.
   */
  declare mainAccountRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ledger Dimension.
   */
  declare ledgerDimension: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Scenario.
   */
  declare scenario: DeserializedType<T, 'Edm.String'>;
  /**
   * Accounting Currency Amount.
   */
  declare accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Scenario Attribute.
   * @nullable
   */
  declare scenarioAttribute?: BudgetPlanScenarioAttribute | null;
  /**
   * Position Id.
   * @nullable
   */
  declare positionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Gregorian Date Id.
   * @nullable
   */
  declare ledgerGregorianDateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Number.
   * @nullable
   */
  declare documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proposed Asset.
   * @nullable
   */
  declare proposedAsset?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Analysis Currency Amount.
   */
  declare analysisCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Asset Id.
   * @nullable
   */
  declare assetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is New Request.
   * @nullable
   */
  declare isNewRequest?: NoYes | null;
  /**
   * Accounting Currency Revenue Amount.
   */
  declare accountingCurrencyRevenueAmount: DeserializedType<T, 'Edm.Decimal'>;
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
   * Transaction Currency Revenue Amount.
   */
  declare transactionCurrencyRevenueAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accounting Currency Expense Amount.
   */
  declare accountingCurrencyExpenseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reporting Currency Amount.
   */
  declare reportingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
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
   * Process.
   * @nullable
   */
  declare process?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Currency Expense Amount.
   */
  declare transactionCurrencyExpenseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: BudgetPlansActivityApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetPlansActivityType<
  T extends DeSerializers = DefaultDeSerializers
> {
  budgetClass?: BudgetClass | null;
  mainAccountRecId: DeserializedType<T, 'Edm.Int64'>;
  ledgerDimension: DeserializedType<T, 'Edm.Int64'>;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  scenario: DeserializedType<T, 'Edm.String'>;
  accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  scenarioAttribute?: BudgetPlanScenarioAttribute | null;
  positionId?: DeserializedType<T, 'Edm.String'> | null;
  ledgerGregorianDateId?: DeserializedType<T, 'Edm.String'> | null;
  documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  proposedAsset?: DeserializedType<T, 'Edm.String'> | null;
  analysisCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  assetId?: DeserializedType<T, 'Edm.String'> | null;
  isNewRequest?: NoYes | null;
  accountingCurrencyRevenueAmount: DeserializedType<T, 'Edm.Decimal'>;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  isRecurring?: NoYes | null;
  transactionCurrencyRevenueAmount: DeserializedType<T, 'Edm.Decimal'>;
  accountingCurrencyExpenseAmount: DeserializedType<T, 'Edm.Decimal'>;
  reportingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  proposedProject?: DeserializedType<T, 'Edm.String'> | null;
  process?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrencyExpenseAmount: DeserializedType<T, 'Edm.Decimal'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
}
