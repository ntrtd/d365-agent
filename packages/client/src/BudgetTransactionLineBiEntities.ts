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
import type { BudgetTransactionLineBiEntitiesApi } from './BudgetTransactionLineBiEntitiesApi';
import { BudgetTransactionWorkflowStatus } from './BudgetTransactionWorkflowStatus';
import { BudgetType } from './BudgetType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "BudgetTransactionLineBiEntities" of service "d365_metadata".
 */
export class BudgetTransactionLineBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetTransactionLineBiEntitiesType<T>
{
  /**
   * Technical entity name for BudgetTransactionLineBiEntities.
   */
  static override _entityName = 'BudgetTransactionLineBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetTransactionLineBiEntities entity.
   */
  static _keys = ['BudgetTransactionHeader', 'LineNumber'];
  /**
   * Budget Transaction Header.
   */
  declare budgetTransactionHeader: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Workflow Status.
   * @nullable
   */
  declare workflowStatus?: BudgetTransactionWorkflowStatus | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Currency Amount.
   */
  declare accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Currency.
   * @nullable
   */
  declare transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Asset Budget Ru.
   */
  declare assetBudgetRu: DeserializedType<T, 'Edm.Int64'>;
  /**
   * General Journal Entry.
   */
  declare generalJournalEntry: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Price.
   */
  declare price: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Budget Type.
   * @nullable
   */
  declare budgetType?: BudgetType | null;
  /**
   * Transaction Currency Amount.
   */
  declare transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Comment.
   * @nullable
   */
  declare comment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Trans Budget Trans Id.
   * @nullable
   */
  declare projTransBudgetTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Budget.
   */
  declare assetBudget: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Include In Cash Flow Forecast.
   * @nullable
   */
  declare includeInCashFlowForecast?: NoYes | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ledger Dimension Values Json.
   * @nullable
   */
  declare ledgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BudgetTransactionLineBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetTransactionLineBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  budgetTransactionHeader: DeserializedType<T, 'Edm.Int64'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  workflowStatus?: BudgetTransactionWorkflowStatus | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  assetBudgetRu: DeserializedType<T, 'Edm.Int64'>;
  generalJournalEntry: DeserializedType<T, 'Edm.Int64'>;
  price: DeserializedType<T, 'Edm.Decimal'>;
  budgetType?: BudgetType | null;
  transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  projTransBudgetTransId?: DeserializedType<T, 'Edm.String'> | null;
  assetBudget: DeserializedType<T, 'Edm.Int64'>;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  includeInCashFlowForecast?: NoYes | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  ledgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
}
