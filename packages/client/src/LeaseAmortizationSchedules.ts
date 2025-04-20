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
import type { LeaseAmortizationSchedulesApi } from './LeaseAmortizationSchedulesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LeaseAmortizationSchedules" of service "d365_metadata".
 */
export class LeaseAmortizationSchedules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaseAmortizationSchedulesType<T>
{
  /**
   * Technical entity name for LeaseAmortizationSchedules.
   */
  static override _entityName = 'LeaseAmortizationSchedules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaseAmortizationSchedules entity.
   */
  static _keys = ['dataAreaId', 'PeriodStartDate', 'LeaseId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Start Date.
   */
  declare periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Lease Id.
   */
  declare leaseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Interest Expense.
   */
  declare periodInterestExpense: DeserializedType<T, 'Edm.Decimal'>;
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
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accrued Interest.
   */
  declare accruedInterest: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reversed.
   * @nullable
   */
  declare reversed?: NoYes | null;
  /**
   * Latest Journal Num.
   * @nullable
   */
  declare latestJournalNum?: DeserializedType<T, 'Edm.String'> | null;
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
   * Journal Id.
   * @nullable
   */
  declare journalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Short Term Journal Num.
   * @nullable
   */
  declare shortTermJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Month.
   */
  declare month: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Period.
   */
  declare period: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Period End Date.
   */
  declare periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Principal Balance.
   */
  declare principalBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Short Term Liability.
   */
  declare shortTermLiability: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: LeaseAmortizationSchedulesApi<T>) {
    super(_entityApi);
  }
}

export interface LeaseAmortizationSchedulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  leaseId: DeserializedType<T, 'Edm.String'>;
  periodInterestExpense: DeserializedType<T, 'Edm.Decimal'>;
  shortTermJournalPosted?: NoYes | null;
  interest: DeserializedType<T, 'Edm.Decimal'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  accruedInterest: DeserializedType<T, 'Edm.Decimal'>;
  reversed?: NoYes | null;
  latestJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  journalPosted?: NoYes | null;
  finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  totalPayment: DeserializedType<T, 'Edm.Decimal'>;
  longTermLiability: DeserializedType<T, 'Edm.Decimal'>;
  shortTermJournalCreated?: NoYes | null;
  beginningBalance: DeserializedType<T, 'Edm.Decimal'>;
  endingBalance: DeserializedType<T, 'Edm.Decimal'>;
  journalId?: DeserializedType<T, 'Edm.String'> | null;
  shortTermJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  month: DeserializedType<T, 'Edm.Int32'>;
  period: DeserializedType<T, 'Edm.Int32'>;
  periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  principalBalance: DeserializedType<T, 'Edm.Decimal'>;
  shortTermLiability: DeserializedType<T, 'Edm.Decimal'>;
}
