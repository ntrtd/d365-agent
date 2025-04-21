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
import type { BudgetRegisterEntryLinesApi } from './BudgetRegisterEntryLinesApi';
import { BudgetTransactionWorkflowStatus } from './BudgetTransactionWorkflowStatus';
import { BudgetCheckResult } from './BudgetCheckResult';
import { BudgetType } from './BudgetType';
import { NoYes } from './NoYes';
import { Currencies, CurrenciesType } from './Currencies';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import {
  BudgetRegisterEntryHeaders,
  BudgetRegisterEntryHeadersType
} from './BudgetRegisterEntryHeaders';
import { Ledgers, LedgersType } from './Ledgers';

/**
 * This class represents the entity "BudgetRegisterEntryLines" of service "d365_metadata".
 */
export class BudgetRegisterEntryLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetRegisterEntryLinesType<T>
{
  /**
   * Technical entity name for BudgetRegisterEntryLines.
   */
  static override _entityName = 'BudgetRegisterEntryLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetRegisterEntryLines entity.
   */
  static _keys = ['dataAreaId', 'LegalEntityId', 'EntryNumber', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Entry Number.
   */
  declare entryNumber: DeserializedType<T, 'Edm.String'>;
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
   * Budget Check Result.
   * @nullable
   */
  declare budgetCheckResult?: BudgetCheckResult | null;
  /**
   * Accounting Currency Amount.
   */
  declare accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dimension Account Structure.
   * @nullable
   */
  declare dimensionAccountStructure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price.
   */
  declare price: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount.
   */
  declare transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comment.
   * @nullable
   */
  declare comment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entry Date.
   */
  declare entryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Type.
   * @nullable
   */
  declare amountType?: BudgetType | null;
  /**
   * Include In Cash Flow Forecast.
   * @nullable
   */
  declare includeInCashFlowForecast?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currencyCodes?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link BudgetRegisterEntryHeaders} entity.
   */
  declare budgetRegisterEntryHeader?: BudgetRegisterEntryHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link Ledgers} entity.
   */
  declare primaryLedger?: Ledgers<T> | null;

  constructor(_entityApi: BudgetRegisterEntryLinesApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetRegisterEntryLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  entryNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  workflowStatus?: BudgetTransactionWorkflowStatus | null;
  budgetCheckResult?: BudgetCheckResult | null;
  accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  dimensionAccountStructure?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  price: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  entryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  amountType?: BudgetType | null;
  includeInCashFlowForecast?: NoYes | null;
  currencyCodes?: CurrenciesType<T> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  budgetRegisterEntryHeader?: BudgetRegisterEntryHeadersType<T> | null;
  primaryLedger?: LedgersType<T> | null;
}
