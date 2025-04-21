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
import type { RetailTransactionsMetaApi } from './RetailTransactionsMetaApi';

/**
 * This class represents the entity "RetailTransactionsMeta" of service "d365_metadata".
 */
export class RetailTransactionsMeta<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionsMetaType<T>
{
  /**
   * Technical entity name for RetailTransactionsMeta.
   */
  static override _entityName = 'RetailTransactionsMeta';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionsMeta entity.
   */
  static _keys = [
    'EmployeeId',
    'YearOffset',
    'RetailChannelId',
    'LegalEntityId',
    'MonthGregorianId',
    'TerminalId'
  ];
  /**
   * Employee Id.
   */
  declare employeeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Year Offset.
   */
  declare yearOffset: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Retail Channel Id.
   */
  declare retailChannelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Month Gregorian Id.
   */
  declare monthGregorianId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Terminal Id.
   */
  declare terminalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Num Of Transactions.
   */
  declare numOfTransactions: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Num Of Goods.
   */
  declare numOfGoods: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Transaction Tax Amount.
   */
  declare transactionTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Amount.
   */
  declare transactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Amount Incl Tax.
   */
  declare transactionAmountInclTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Num Of Item Lines.
   */
  declare numOfItemLines: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: RetailTransactionsMetaApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionsMetaType<
  T extends DeSerializers = DefaultDeSerializers
> {
  employeeId: DeserializedType<T, 'Edm.String'>;
  yearOffset: DeserializedType<T, 'Edm.Int64'>;
  retailChannelId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  monthGregorianId: DeserializedType<T, 'Edm.Int64'>;
  terminalId: DeserializedType<T, 'Edm.String'>;
  numOfTransactions: DeserializedType<T, 'Edm.Int64'>;
  numOfGoods: DeserializedType<T, 'Edm.Int64'>;
  transactionTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  transactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  transactionAmountInclTax: DeserializedType<T, 'Edm.Decimal'>;
  numOfItemLines: DeserializedType<T, 'Edm.Int64'>;
}
