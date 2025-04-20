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
import type { LeaseExpenseCostSchedulesHistoryApi } from './LeaseExpenseCostSchedulesHistoryApi';
import { NoYes } from './NoYes';
import { LedgerJournalAcType } from './LedgerJournalAcType';

/**
 * This class represents the entity "LeaseExpenseCostSchedulesHistory" of service "d365_metadata".
 */
export class LeaseExpenseCostSchedulesHistory<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaseExpenseCostSchedulesHistoryType<T>
{
  /**
   * Technical entity name for LeaseExpenseCostSchedulesHistory.
   */
  static override _entityName = 'LeaseExpenseCostSchedulesHistory';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaseExpenseCostSchedulesHistory entity.
   */
  static _keys = [
    'dataAreaId',
    'LeaseId',
    'LineLeaseCounter',
    'ScheduleLineDate'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Lease Id.
   */
  declare leaseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Lease Counter.
   */
  declare lineLeaseCounter: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Schedule Line Date.
   */
  declare scheduleLineDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Lease Counter.
   */
  declare leaseCounter: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Offset Ledger Dimension Display Value.
   * @nullable
   */
  declare offsetLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Expense Type.
   * @nullable
   */
  declare expenseType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fin Tag Display Value.
   * @nullable
   */
  declare finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Posted.
   * @nullable
   */
  declare journalPosted?: NoYes | null;
  /**
   * Journal Num.
   * @nullable
   */
  declare journalNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Created.
   * @nullable
   */
  declare journalCreated?: NoYes | null;
  /**
   * Offset Account Type.
   * @nullable
   */
  declare offsetAccountType?: LedgerJournalAcType | null;

  constructor(_entityApi: LeaseExpenseCostSchedulesHistoryApi<T>) {
    super(_entityApi);
  }
}

export interface LeaseExpenseCostSchedulesHistoryType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  leaseId: DeserializedType<T, 'Edm.String'>;
  lineLeaseCounter: DeserializedType<T, 'Edm.Int32'>;
  scheduleLineDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  leaseCounter: DeserializedType<T, 'Edm.Int32'>;
  offsetLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  expenseType?: DeserializedType<T, 'Edm.String'> | null;
  finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  journalPosted?: NoYes | null;
  journalNum?: DeserializedType<T, 'Edm.String'> | null;
  journalCreated?: NoYes | null;
  offsetAccountType?: LedgerJournalAcType | null;
}
