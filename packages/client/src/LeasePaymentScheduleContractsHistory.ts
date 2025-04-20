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
import type { LeasePaymentScheduleContractsHistoryApi } from './LeasePaymentScheduleContractsHistoryApi';
import { AssetLeaseCreatedBy } from './AssetLeaseCreatedBy';
import { AssetLeaseLeaseTermInterval } from './AssetLeaseLeaseTermInterval';
import { NoYesCombo } from './NoYesCombo';
import { AssetLeasePaymentFrequency } from './AssetLeasePaymentFrequency';

/**
 * This class represents the entity "LeasePaymentScheduleContractsHistory" of service "d365_metadata".
 */
export class LeasePaymentScheduleContractsHistory<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeasePaymentScheduleContractsHistoryType<T>
{
  /**
   * Technical entity name for LeasePaymentScheduleContractsHistory.
   */
  static override _entityName = 'LeasePaymentScheduleContractsHistory';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeasePaymentScheduleContractsHistory entity.
   */
  static _keys = [
    'dataAreaId',
    'LeaseId',
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
   * Cost Per Unit.
   */
  declare costPerUnit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Index Rate.
   */
  declare indexRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payment Amount.
   */
  declare paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Term.
   * @nullable
   */
  declare term?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Record Created By.
   * @nullable
   */
  declare recordCreatedBy?: AssetLeaseCreatedBy | null;
  /**
   * Interval.
   * @nullable
   */
  declare interval?: AssetLeaseLeaseTermInterval | null;
  /**
   * Index Type.
   * @nullable
   */
  declare indexType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Periods.
   */
  declare periods: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Excercise.
   * @nullable
   */
  declare excercise?: NoYesCombo | null;
  /**
   * Frequency.
   * @nullable
   */
  declare frequency?: AssetLeasePaymentFrequency | null;
  /**
   * Variable Payment.
   */
  declare variablePayment: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: LeasePaymentScheduleContractsHistoryApi<T>) {
    super(_entityApi);
  }
}

export interface LeasePaymentScheduleContractsHistoryType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  leaseId: DeserializedType<T, 'Edm.String'>;
  leaseCounter: DeserializedType<T, 'Edm.Int32'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  costPerUnit: DeserializedType<T, 'Edm.Decimal'>;
  indexRate: DeserializedType<T, 'Edm.Decimal'>;
  paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  term?: DeserializedType<T, 'Edm.String'> | null;
  recordCreatedBy?: AssetLeaseCreatedBy | null;
  interval?: AssetLeaseLeaseTermInterval | null;
  indexType?: DeserializedType<T, 'Edm.String'> | null;
  periods: DeserializedType<T, 'Edm.Int32'>;
  excercise?: NoYesCombo | null;
  frequency?: AssetLeasePaymentFrequency | null;
  variablePayment: DeserializedType<T, 'Edm.Decimal'>;
}
