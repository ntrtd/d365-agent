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
import type { LeaseExecutoryCostContractsHistoryApi } from './LeaseExecutoryCostContractsHistoryApi';
import { AssetLeaseLeaseTermInterval } from './AssetLeaseLeaseTermInterval';
import { AssetLeaseAnnuityType } from './AssetLeaseAnnuityType';
import { AssetLeasePaymentFrequency } from './AssetLeasePaymentFrequency';
import { LedgerJournalAcType } from './LedgerJournalAcType';

/**
 * This class represents the entity "LeaseExecutoryCostContractsHistory" of service "d365_metadata".
 */
export class LeaseExecutoryCostContractsHistory<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaseExecutoryCostContractsHistoryType<T>
{
  /**
   * Technical entity name for LeaseExecutoryCostContractsHistory.
   */
  static override _entityName = 'LeaseExecutoryCostContractsHistory';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaseExecutoryCostContractsHistory entity.
   */
  static _keys = [
    'dataAreaId',
    'LeaseId',
    'ExpenseType',
    'LeaseCounter',
    'StartDate',
    'EndDate'
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
   * Expense Type.
   */
  declare expenseType: DeserializedType<T, 'Edm.String'>;
  /**
   * Lease Counter.
   */
  declare leaseCounter: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Payment Amount.
   */
  declare paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Offset Ledger Dimension Display Value.
   * @nullable
   */
  declare offsetLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Interval.
   * @nullable
   */
  declare interval?: AssetLeaseLeaseTermInterval | null;
  /**
   * Annuity Type.
   * @nullable
   */
  declare annuityType?: AssetLeaseAnnuityType | null;
  /**
   * Periods.
   */
  declare periods: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Frequency.
   * @nullable
   */
  declare frequency?: AssetLeasePaymentFrequency | null;
  /**
   * Offset Account Type.
   * @nullable
   */
  declare offsetAccountType?: LedgerJournalAcType | null;

  constructor(_entityApi: LeaseExecutoryCostContractsHistoryApi<T>) {
    super(_entityApi);
  }
}

export interface LeaseExecutoryCostContractsHistoryType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  leaseId: DeserializedType<T, 'Edm.String'>;
  expenseType: DeserializedType<T, 'Edm.String'>;
  leaseCounter: DeserializedType<T, 'Edm.Int32'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  offsetLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  interval?: AssetLeaseLeaseTermInterval | null;
  annuityType?: AssetLeaseAnnuityType | null;
  periods: DeserializedType<T, 'Edm.Int32'>;
  frequency?: AssetLeasePaymentFrequency | null;
  offsetAccountType?: LedgerJournalAcType | null;
}
