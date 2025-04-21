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
import type { LedgerIntervalsApi } from './LedgerIntervalsApi';

/**
 * This class represents the entity "LedgerIntervals" of service "d365_metadata".
 */
export class LedgerIntervals<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LedgerIntervalsType<T>
{
  /**
   * Technical entity name for LedgerIntervals.
   */
  static override _entityName = 'LedgerIntervals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerIntervals entity.
   */
  static _keys = [
    'dataAreaId',
    'IntervalGroup',
    'FromAccount',
    'ToAccount',
    'FromLedgerChartOfAccounts',
    'ToLedgerChartOfAccounts'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Interval Group.
   */
  declare intervalGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * From Account.
   */
  declare fromAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * To Account.
   */
  declare toAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * From Ledger Chart Of Accounts.
   */
  declare fromLedgerChartOfAccounts: DeserializedType<T, 'Edm.String'>;
  /**
   * To Ledger Chart Of Accounts.
   */
  declare toLedgerChartOfAccounts: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: LedgerIntervalsApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerIntervalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  intervalGroup: DeserializedType<T, 'Edm.String'>;
  fromAccount: DeserializedType<T, 'Edm.String'>;
  toAccount: DeserializedType<T, 'Edm.String'>;
  fromLedgerChartOfAccounts: DeserializedType<T, 'Edm.String'>;
  toLedgerChartOfAccounts: DeserializedType<T, 'Edm.String'>;
}
