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
import type { RetailTransactionIncomeExpenseLinesApi } from './RetailTransactionIncomeExpenseLinesApi';
import { RetailIncomeExpense } from './RetailIncomeExpense';
import { RetailEntryStatus } from './RetailEntryStatus';

/**
 * This class represents the entity "RetailTransactionIncomeExpenseLines" of service "d365_metadata".
 */
export class RetailTransactionIncomeExpenseLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionIncomeExpenseLinesType<T>
{
  /**
   * Technical entity name for RetailTransactionIncomeExpenseLines.
   */
  static override _entityName = 'RetailTransactionIncomeExpenseLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionIncomeExpenseLines entity.
   */
  static _keys = [
    'dataAreaId',
    'Terminal',
    'TransactionNumber',
    'LineNumber',
    'OperatingUnitNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Number.
   */
  declare transactionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Account Number.
   * @nullable
   */
  declare accountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Number.
   * @nullable
   */
  declare receiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: RetailIncomeExpense | null;
  /**
   * Transaction Status.
   * @nullable
   */
  declare transactionStatus?: RetailEntryStatus | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Time.
   */
  declare transactionTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Store Number.
   * @nullable
   */
  declare storeNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailTransactionIncomeExpenseLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionIncomeExpenseLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  accountNumber?: DeserializedType<T, 'Edm.String'> | null;
  receiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  accountType?: RetailIncomeExpense | null;
  transactionStatus?: RetailEntryStatus | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  transactionTime: DeserializedType<T, 'Edm.Int32'>;
  storeNumber?: DeserializedType<T, 'Edm.String'> | null;
}
