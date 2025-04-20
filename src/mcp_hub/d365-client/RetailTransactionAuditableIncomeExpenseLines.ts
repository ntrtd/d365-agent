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
import type { RetailTransactionAuditableIncomeExpenseLinesApi } from './RetailTransactionAuditableIncomeExpenseLinesApi';
import { RetailEntryStatus } from './RetailEntryStatus';
import { RetailIncomeExpense } from './RetailIncomeExpense';

/**
 * This class represents the entity "RetailTransactionAuditableIncomeExpenseLines" of service "d365_metadata".
 */
export class RetailTransactionAuditableIncomeExpenseLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionAuditableIncomeExpenseLinesType<T>
{
  /**
   * Technical entity name for RetailTransactionAuditableIncomeExpenseLines.
   */
  static override _entityName = 'RetailTransactionAuditableIncomeExpenseLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionAuditableIncomeExpenseLines entity.
   */
  static _keys = [
    'dataAreaId',
    'OperatingUnitNumber',
    'StoreNumber',
    'RegisterNumber',
    'TransactionId',
    'LineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Number.
   */
  declare storeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Register Number.
   */
  declare registerNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Status.
   * @nullable
   */
  declare transactionStatus?: RetailEntryStatus | null;
  /**
   * Business Date.
   */
  declare businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Statement Code.
   * @nullable
   */
  declare statementCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Account Number.
   * @nullable
   */
  declare accountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header Store Number.
   * @nullable
   */
  declare headerStoreNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: RetailIncomeExpense | null;
  /**
   * Receipt Number.
   * @nullable
   */
  declare receiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statement Number.
   * @nullable
   */
  declare statementNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Header Statement Number.
   * @nullable
   */
  declare headerStatementNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operator Id.
   * @nullable
   */
  declare operatorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Time.
   */
  declare transactionTime: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: RetailTransactionAuditableIncomeExpenseLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionAuditableIncomeExpenseLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  storeNumber: DeserializedType<T, 'Edm.String'>;
  registerNumber: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  transactionStatus?: RetailEntryStatus | null;
  businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  statementCode?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  accountNumber?: DeserializedType<T, 'Edm.String'> | null;
  headerStoreNumber?: DeserializedType<T, 'Edm.String'> | null;
  accountType?: RetailIncomeExpense | null;
  receiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  statementNumber?: DeserializedType<T, 'Edm.String'> | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  headerStatementNumber?: DeserializedType<T, 'Edm.String'> | null;
  operatorId?: DeserializedType<T, 'Edm.String'> | null;
  transactionTime: DeserializedType<T, 'Edm.Int32'>;
}
