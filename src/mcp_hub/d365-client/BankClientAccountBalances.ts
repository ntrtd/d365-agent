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
import type { BankClientAccountBalancesApi } from './BankClientAccountBalancesApi';
import { BankClientBalanceTypeRu } from './BankClientBalanceTypeRu';

/**
 * This class represents the entity "BankClientAccountBalances" of service "d365_metadata".
 */
export class BankClientAccountBalances<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BankClientAccountBalancesType<T>
{
  /**
   * Technical entity name for BankClientAccountBalances.
   */
  static override _entityName = 'BankClientAccountBalances';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BankClientAccountBalances entity.
   */
  static _keys = [
    'dataAreaId',
    'BankAccount',
    'RecordType',
    'FromDate',
    'ToDate'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Bank Account.
   */
  declare bankAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Record Type.
   * @nullable
   */
  declare recordType?: BankClientBalanceTypeRu | null;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: BankClientAccountBalancesApi<T>) {
    super(_entityApi);
  }
}

export interface BankClientAccountBalancesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  bankAccount: DeserializedType<T, 'Edm.String'>;
  recordType?: BankClientBalanceTypeRu | null;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
}
