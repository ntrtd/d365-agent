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
import type { CashReceiptTablesApi } from './CashReceiptTablesApi';
import { LvCashReceiptTransactionsType } from './LvCashReceiptTransactionsType';
import { LvCashReceiptStatus } from './LvCashReceiptStatus';

/**
 * This class represents the entity "CashReceiptTables" of service "d365_metadata".
 */
export class CashReceiptTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CashReceiptTablesType<T>
{
  /**
   * Technical entity name for CashReceiptTables.
   */
  static override _entityName = 'CashReceiptTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CashReceiptTables entity.
   */
  static _keys = [
    'dataAreaId',
    'BatchNumber',
    'TransactionType',
    'TransactionFrom',
    'TransactionTo'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Batch Number.
   */
  declare batchNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: LvCashReceiptTransactionsType | null;
  /**
   * Transaction From.
   */
  declare transactionFrom: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Transaction To.
   */
  declare transactionTo: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Transaction Currency.
   * @nullable
   */
  declare transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Name.
   * @nullable
   */
  declare workerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Acquisition Date.
   */
  declare acquisitionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * To.
   */
  declare to: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Worker Personnel Number.
   * @nullable
   */
  declare workerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Format.
   * @nullable
   */
  declare format?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From.
   */
  declare from: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: LvCashReceiptStatus | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transaction Amount.
   */
  declare transactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Closing Date.
   */
  declare closingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: CashReceiptTablesApi<T>) {
    super(_entityApi);
  }
}

export interface CashReceiptTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  batchNumber: DeserializedType<T, 'Edm.String'>;
  transactionType?: LvCashReceiptTransactionsType | null;
  transactionFrom: DeserializedType<T, 'Edm.Int32'>;
  transactionTo: DeserializedType<T, 'Edm.Int32'>;
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  workerName?: DeserializedType<T, 'Edm.String'> | null;
  acquisitionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  to: DeserializedType<T, 'Edm.Int32'>;
  workerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  format?: DeserializedType<T, 'Edm.String'> | null;
  from: DeserializedType<T, 'Edm.Int32'>;
  status?: LvCashReceiptStatus | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  closingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
