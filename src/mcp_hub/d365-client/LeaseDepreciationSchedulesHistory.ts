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
import type { LeaseDepreciationSchedulesHistoryApi } from './LeaseDepreciationSchedulesHistoryApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LeaseDepreciationSchedulesHistory" of service "d365_metadata".
 */
export class LeaseDepreciationSchedulesHistory<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaseDepreciationSchedulesHistoryType<T>
{
  /**
   * Technical entity name for LeaseDepreciationSchedulesHistory.
   */
  static override _entityName = 'LeaseDepreciationSchedulesHistory';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaseDepreciationSchedulesHistory entity.
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
   * Amortization Expense Reporting Amount.
   */
  declare amortizationExpenseReportingAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Lease Counter.
   */
  declare leaseCounter: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Exchange Rate Reporting.
   */
  declare exchangeRateReporting: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Period.
   */
  declare period: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Asset Rou Accounting Amount.
   */
  declare assetRouAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accumulated Amortization.
   */
  declare accumulatedAmortization: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Net Book Accounting Amount.
   */
  declare netBookAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Net Book Reporting Amount.
   */
  declare netBookReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Period End Date.
   */
  declare periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Fin Tag Display Value.
   * @nullable
   */
  declare finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accumulated Amortization Accounting Amount.
   */
  declare accumulatedAmortizationAccountingAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Amortization Expense.
   */
  declare amortizationExpense: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Asset Rou Transaction Amount.
   */
  declare assetRouTransactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Asset Rou Reporting Amount.
   */
  declare assetRouReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Latest Journal Num.
   * @nullable
   */
  declare latestJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Beginning Net Book Reporting Amount.
   */
  declare beginningNetBookReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Beginning Net Book Accounting Amount.
   */
  declare beginningNetBookAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amortization Expense Accounting Amount.
   */
  declare amortizationExpenseAccountingAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Accumulated Amortization Reporting Amount.
   */
  declare accumulatedAmortizationReportingAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Months.
   */
  declare months: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Net Book Value.
   */
  declare netBookValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reversed.
   * @nullable
   */
  declare reversed?: NoYes | null;
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
   * Beginning Net Book Value.
   */
  declare beginningNetBookValue: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: LeaseDepreciationSchedulesHistoryApi<T>) {
    super(_entityApi);
  }
}

export interface LeaseDepreciationSchedulesHistoryType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  leaseId: DeserializedType<T, 'Edm.String'>;
  lineLeaseCounter: DeserializedType<T, 'Edm.Int32'>;
  scheduleLineDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amortizationExpenseReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  leaseCounter: DeserializedType<T, 'Edm.Int32'>;
  exchangeRateReporting: DeserializedType<T, 'Edm.Decimal'>;
  period: DeserializedType<T, 'Edm.Int32'>;
  assetRouAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  accumulatedAmortization: DeserializedType<T, 'Edm.Decimal'>;
  netBookAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  netBookReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  accumulatedAmortizationAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  amortizationExpense: DeserializedType<T, 'Edm.Decimal'>;
  assetRouTransactionAmount: DeserializedType<T, 'Edm.Decimal'>;
  assetRouReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  latestJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  beginningNetBookReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  beginningNetBookAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  amortizationExpenseAccountingAmount: DeserializedType<T, 'Edm.Decimal'>;
  accumulatedAmortizationReportingAmount: DeserializedType<T, 'Edm.Decimal'>;
  months: DeserializedType<T, 'Edm.Int32'>;
  netBookValue: DeserializedType<T, 'Edm.Decimal'>;
  reversed?: NoYes | null;
  journalPosted?: NoYes | null;
  journalNum?: DeserializedType<T, 'Edm.String'> | null;
  journalCreated?: NoYes | null;
  beginningNetBookValue: DeserializedType<T, 'Edm.Decimal'>;
}
