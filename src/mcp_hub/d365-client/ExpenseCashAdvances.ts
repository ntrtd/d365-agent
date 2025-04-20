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
import type { ExpenseCashAdvancesApi } from './ExpenseCashAdvancesApi';
import { TrvWorkflowCashAdvanceStatus } from './TrvWorkflowCashAdvanceStatus';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "ExpenseCashAdvances" of service "d365_metadata".
 */
export class ExpenseCashAdvances<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExpenseCashAdvancesType<T>
{
  /**
   * Technical entity name for ExpenseCashAdvances.
   */
  static override _entityName = 'ExpenseCashAdvances';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpenseCashAdvances entity.
   */
  static _keys = ['dataAreaId', 'CashAdvanceNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cash Advance Number.
   */
  declare cashAdvanceNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Sales Tax Group.
   * @nullable
   */
  declare itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paid Amount Mst.
   */
  declare paidAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paying Worker Personnel Number.
   * @nullable
   */
  declare payingWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cash Advance Status.
   * @nullable
   */
  declare cashAdvanceStatus?: TrvWorkflowCashAdvanceStatus | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Date.
   */
  declare requestedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount In Transaction Currency.
   */
  declare amountInTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Request Amount Mst.
   */
  declare requestAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Location.
   * @nullable
   */
  declare location?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Balance.
   */
  declare balance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Paid Date.
   */
  declare paidDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LedgerJournalAcType | null;
  /**
   * Requested Amount.
   */
  declare requestedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Requesting Worker Personnel Number.
   * @nullable
   */
  declare requestingWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Paid Amount.
   */
  declare paidAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Main Account Display Value.
   * @nullable
   */
  declare mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purpose.
   * @nullable
   */
  declare purpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: ExpenseCashAdvancesApi<T>) {
    super(_entityApi);
  }
}

export interface ExpenseCashAdvancesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  cashAdvanceNumber: DeserializedType<T, 'Edm.String'>;
  itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  paidAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  payingWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  cashAdvanceStatus?: TrvWorkflowCashAdvanceStatus | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  requestedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  amountInTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  requestAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  location?: DeserializedType<T, 'Edm.String'> | null;
  note?: DeserializedType<T, 'Edm.String'> | null;
  balance: DeserializedType<T, 'Edm.Decimal'>;
  paidDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  accountType?: LedgerJournalAcType | null;
  requestedAmount: DeserializedType<T, 'Edm.Decimal'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  requestingWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  paidAmount: DeserializedType<T, 'Edm.Decimal'>;
  mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  purpose?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
