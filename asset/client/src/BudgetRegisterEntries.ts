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
import type { BudgetRegisterEntriesApi } from './BudgetRegisterEntriesApi';
import { NoYes } from './NoYes';
import { BudgetTransactionType } from './BudgetTransactionType';
import { BudgetTransactionWorkflowStatus } from './BudgetTransactionWorkflowStatus';
import { BudgetTransactionStatus } from './BudgetTransactionStatus';
import { BudgetType } from './BudgetType';
import {
  BudgetRegisterEntryHeaders,
  BudgetRegisterEntryHeadersType
} from './BudgetRegisterEntryHeaders';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { Currencies, CurrenciesType } from './Currencies';
import { BudgetModels, BudgetModelsType } from './BudgetModels';
import { Ledgers, LedgersType } from './Ledgers';
import { BudgetCodes, BudgetCodesType } from './BudgetCodes';

/**
 * This class represents the entity "BudgetRegisterEntries" of service "d365_metadata".
 */
export class BudgetRegisterEntries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetRegisterEntriesType<T>
{
  /**
   * Technical entity name for BudgetRegisterEntries.
   */
  static override _entityName = 'BudgetRegisterEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetRegisterEntries entity.
   */
  static _keys = ['dataAreaId', 'EntryNumber', 'LegalEntityId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Entry Number.
   */
  declare entryNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accounting Currency Amount.
   */
  declare accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One Time Revision.
   * @nullable
   */
  declare oneTimeRevision?: NoYes | null;
  /**
   * Dimension Account Structure.
   * @nullable
   */
  declare dimensionAccountStructure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Comment.
   * @nullable
   */
  declare reasonComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Code.
   * @nullable
   */
  declare reasonCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Budget Type.
   * @nullable
   */
  declare budgetType?: BudgetTransactionType | null;
  /**
   * Line Workflow Status.
   * @nullable
   */
  declare lineWorkflowStatus?: BudgetTransactionWorkflowStatus | null;
  /**
   * Budget Model Id.
   * @nullable
   */
  declare budgetModelId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Budget Code.
   * @nullable
   */
  declare budgetCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: BudgetTransactionStatus | null;
  /**
   * Document Workflow Status.
   * @nullable
   */
  declare documentWorkflowStatus?: BudgetTransactionWorkflowStatus | null;
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
   * One-to-one navigation property to the {@link BudgetRegisterEntryHeaders} entity.
   */
  declare budgetRegisterEntryHeaders?: BudgetRegisterEntryHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link BudgetModels} entity.
   */
  declare budgetModels?: BudgetModels<T> | null;
  /**
   * One-to-one navigation property to the {@link Ledgers} entity.
   */
  declare ledger?: Ledgers<T> | null;
  /**
   * One-to-one navigation property to the {@link BudgetCodes} entity.
   */
  declare budgetCodes?: BudgetCodes<T> | null;

  constructor(_entityApi: BudgetRegisterEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetRegisterEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  entryNumber: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  oneTimeRevision?: NoYes | null;
  dimensionAccountStructure?: DeserializedType<T, 'Edm.String'> | null;
  reasonComment?: DeserializedType<T, 'Edm.String'> | null;
  reasonCode?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  price: DeserializedType<T, 'Edm.Decimal'>;
  budgetType?: BudgetTransactionType | null;
  lineWorkflowStatus?: BudgetTransactionWorkflowStatus | null;
  budgetModelId?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  budgetCode?: DeserializedType<T, 'Edm.String'> | null;
  status?: BudgetTransactionStatus | null;
  documentWorkflowStatus?: BudgetTransactionWorkflowStatus | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  amountType?: BudgetType | null;
  includeInCashFlowForecast?: NoYes | null;
  budgetRegisterEntryHeaders?: BudgetRegisterEntryHeadersType<T> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  currency?: CurrenciesType<T> | null;
  budgetModels?: BudgetModelsType<T> | null;
  ledger?: LedgersType<T> | null;
  budgetCodes?: BudgetCodesType<T> | null;
}
