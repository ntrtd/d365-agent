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
import type { LeaseExpenseTransactionsApi } from './LeaseExpenseTransactionsApi';
import { LedgerTransType } from './LedgerTransType';

/**
 * This class represents the entity "LeaseExpenseTransactions" of service "d365_metadata".
 */
export class LeaseExpenseTransactions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaseExpenseTransactionsType<T>
{
  /**
   * Technical entity name for LeaseExpenseTransactions.
   */
  static override _entityName = 'LeaseExpenseTransactions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaseExpenseTransactions entity.
   */
  static _keys = [
    'dataAreaId',
    'Voucher',
    'TransactionType',
    'BookId',
    'Account',
    'Amount',
    'ExpenseType'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Voucher.
   */
  declare voucher: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: LedgerTransType | null;
  /**
   * Book Id.
   */
  declare bookId: DeserializedType<T, 'Edm.String'>;
  /**
   * Account.
   */
  declare account: DeserializedType<T, 'Edm.String'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expense Type.
   */
  declare expenseType: DeserializedType<T, 'Edm.String'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: LeaseExpenseTransactionsApi<T>) {
    super(_entityApi);
  }
}

export interface LeaseExpenseTransactionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  voucher: DeserializedType<T, 'Edm.String'>;
  transactionType?: LedgerTransType | null;
  bookId: DeserializedType<T, 'Edm.String'>;
  account: DeserializedType<T, 'Edm.String'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  expenseType: DeserializedType<T, 'Edm.String'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
}
