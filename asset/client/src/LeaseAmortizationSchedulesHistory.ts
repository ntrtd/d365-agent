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
import type { LeaseAmortizationSchedulesHistoryApi } from './LeaseAmortizationSchedulesHistoryApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LeaseAmortizationSchedulesHistory" of service "d365_metadata".
 */
export class LeaseAmortizationSchedulesHistory<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaseAmortizationSchedulesHistoryType<T>
{
  /**
   * Technical entity name for LeaseAmortizationSchedulesHistory.
   */
  static override _entityName = 'LeaseAmortizationSchedulesHistory';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaseAmortizationSchedulesHistory entity.
   */
  static _keys = [
    'dataAreaId',
    'LeaseId',
    'LineLeaseCounter',
    'PeriodStartDate'
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
   * Period Start Date.
   */
  declare periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Discounted Payment Amount.
   */
  declare discountedPaymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Short Term Journal Posted.
   * @nullable
   */
  declare shortTermJournalPosted?: NoYes | null;
  /**
   * Interest.
   */
  declare interest: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accrued Interest.
   */
  declare accruedInterest: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Journal Posted.
   * @nullable
   */
  declare journalPosted?: NoYes | null;
  /**
   * Fin Tag Display Value.
   * @nullable
   */
  declare finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Payment.
   */
  declare totalPayment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Long Term Liability.
   */
  declare longTermLiability: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Interest Expense.
   */
  declare interestExpense: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Short Term Journal Created.
   * @nullable
   */
  declare shortTermJournalCreated?: NoYes | null;
  /**
   * Beginning Balance.
   */
  declare beginningBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ending Balance.
   */
  declare endingBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Short Term Journal Num.
   * @nullable
   */
  declare shortTermJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Months.
   */
  declare months: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Period.
   */
  declare period: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Journal Num.
   * @nullable
   */
  declare journalNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period End Date.
   */
  declare periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Lease Counter.
   */
  declare leaseCounter: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Principal Balance.
   */
  declare principalBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Short Term Liability.
   */
  declare shortTermLiability: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: LeaseAmortizationSchedulesHistoryApi<T>) {
    super(_entityApi);
  }
}

export interface LeaseAmortizationSchedulesHistoryType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  leaseId: DeserializedType<T, 'Edm.String'>;
  lineLeaseCounter: DeserializedType<T, 'Edm.Int32'>;
  periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  discountedPaymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  shortTermJournalPosted?: NoYes | null;
  interest: DeserializedType<T, 'Edm.Decimal'>;
  accruedInterest: DeserializedType<T, 'Edm.Decimal'>;
  journalPosted?: NoYes | null;
  finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  totalPayment: DeserializedType<T, 'Edm.Decimal'>;
  longTermLiability: DeserializedType<T, 'Edm.Decimal'>;
  interestExpense: DeserializedType<T, 'Edm.Decimal'>;
  shortTermJournalCreated?: NoYes | null;
  beginningBalance: DeserializedType<T, 'Edm.Decimal'>;
  endingBalance: DeserializedType<T, 'Edm.Decimal'>;
  shortTermJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  months: DeserializedType<T, 'Edm.Int32'>;
  period: DeserializedType<T, 'Edm.Int32'>;
  journalNum?: DeserializedType<T, 'Edm.String'> | null;
  periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  leaseCounter: DeserializedType<T, 'Edm.Int32'>;
  principalBalance: DeserializedType<T, 'Edm.Decimal'>;
  shortTermLiability: DeserializedType<T, 'Edm.Decimal'>;
}
