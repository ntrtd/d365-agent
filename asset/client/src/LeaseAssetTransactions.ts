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
import type { LeaseAssetTransactionsApi } from './LeaseAssetTransactionsApi';
import { LedgerTransType } from './LedgerTransType';

/**
 * This class represents the entity "LeaseAssetTransactions" of service "d365_metadata".
 */
export class LeaseAssetTransactions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaseAssetTransactionsType<T>
{
  /**
   * Technical entity name for LeaseAssetTransactions.
   */
  static override _entityName = 'LeaseAssetTransactions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaseAssetTransactions entity.
   */
  static _keys = [
    'dataAreaId',
    'BookId',
    'Voucher',
    'TransactionType',
    'Account',
    'Amount'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Book Id.
   */
  declare bookId: DeserializedType<T, 'Edm.String'>;
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
   * Account.
   */
  declare account: DeserializedType<T, 'Edm.String'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
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

  constructor(_entityApi: LeaseAssetTransactionsApi<T>) {
    super(_entityApi);
  }
}

export interface LeaseAssetTransactionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  bookId: DeserializedType<T, 'Edm.String'>;
  voucher: DeserializedType<T, 'Edm.String'>;
  transactionType?: LedgerTransType | null;
  account: DeserializedType<T, 'Edm.String'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
}
