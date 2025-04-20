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
import type { BudgetPlanJustificationsApi } from './BudgetPlanJustificationsApi';

/**
 * This class represents the entity "BudgetPlanJustifications" of service "d365_metadata".
 */
export class BudgetPlanJustifications<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetPlanJustificationsType<T>
{
  /**
   * Technical entity name for BudgetPlanJustifications.
   */
  static override _entityName = 'BudgetPlanJustifications';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetPlanJustifications entity.
   */
  static _keys = ['EffectiveDate', 'DocumentNumber', 'ScenarioName'];
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Document Number.
   */
  declare documentNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Scenario Name.
   */
  declare scenarioName: DeserializedType<T, 'Edm.String'>;
  /**
   * Budget Plan Name.
   * @nullable
   */
  declare budgetPlanName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Currency Revenue Amount.
   */
  declare accountingCurrencyRevenueAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Revenue Amount.
   */
  declare transactionCurrencyRevenueAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accounting Currency Expense Amount.
   */
  declare accountingCurrencyExpenseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Comment.
   * @nullable
   */
  declare comment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Responsibility Center.
   * @nullable
   */
  declare responsibilityCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Currency Expense Amount.
   */
  declare transactionCurrencyExpenseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Account Display Value.
   * @nullable
   */
  declare accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Plan Preparer.
   * @nullable
   */
  declare budgetPlanPreparer?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BudgetPlanJustificationsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetPlanJustificationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  documentNumber: DeserializedType<T, 'Edm.String'>;
  scenarioName: DeserializedType<T, 'Edm.String'>;
  budgetPlanName?: DeserializedType<T, 'Edm.String'> | null;
  accountingCurrencyRevenueAmount: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyRevenueAmount: DeserializedType<T, 'Edm.Decimal'>;
  accountingCurrencyExpenseAmount: DeserializedType<T, 'Edm.Decimal'>;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  responsibilityCenter?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrencyExpenseAmount: DeserializedType<T, 'Edm.Decimal'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  budgetPlanPreparer?: DeserializedType<T, 'Edm.String'> | null;
}
