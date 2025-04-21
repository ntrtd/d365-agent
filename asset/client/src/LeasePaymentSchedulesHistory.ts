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
import type { LeasePaymentSchedulesHistoryApi } from './LeasePaymentSchedulesHistoryApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LeasePaymentSchedulesHistory" of service "d365_metadata".
 */
export class LeasePaymentSchedulesHistory<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeasePaymentSchedulesHistoryType<T>
{
  /**
   * Technical entity name for LeasePaymentSchedulesHistory.
   */
  static override _entityName = 'LeasePaymentSchedulesHistory';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeasePaymentSchedulesHistory entity.
   */
  static _keys = ['dataAreaId', 'LeaseId', 'LeaseCounter', 'ScheduleLineDate'];
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
   * Schedule Line Date.
   */
  declare scheduleLineDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Straight Line Cost.
   */
  declare straightLineCost: DeserializedType<T, 'Edm.Decimal'>;
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
   * Payment Confirmed.
   * @nullable
   */
  declare paymentConfirmed?: NoYes | null;
  /**
   * Present Value.
   */
  declare presentValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Lease Counter.
   */
  declare lineLeaseCounter: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Variable Payment.
   */
  declare variablePayment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Present Value.
   */
  declare totalPresentValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Months.
   */
  declare months: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Journal Created.
   * @nullable
   */
  declare journalCreated?: NoYes | null;
  /**
   * Journal Num.
   * @nullable
   */
  declare journalNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Counter.
   */
  declare counter: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Payment Amount.
   */
  declare paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Number Of Payment.
   */
  declare numberOfPayment: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: LeasePaymentSchedulesHistoryApi<T>) {
    super(_entityApi);
  }
}

export interface LeasePaymentSchedulesHistoryType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  leaseId: DeserializedType<T, 'Edm.String'>;
  leaseCounter: DeserializedType<T, 'Edm.Int32'>;
  scheduleLineDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  straightLineCost: DeserializedType<T, 'Edm.Decimal'>;
  finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  journalPosted?: NoYes | null;
  paymentConfirmed?: NoYes | null;
  presentValue: DeserializedType<T, 'Edm.Decimal'>;
  lineLeaseCounter: DeserializedType<T, 'Edm.Int32'>;
  variablePayment: DeserializedType<T, 'Edm.Decimal'>;
  totalPresentValue: DeserializedType<T, 'Edm.Decimal'>;
  months: DeserializedType<T, 'Edm.Int32'>;
  journalCreated?: NoYes | null;
  journalNum?: DeserializedType<T, 'Edm.String'> | null;
  counter: DeserializedType<T, 'Edm.Int32'>;
  paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  numberOfPayment: DeserializedType<T, 'Edm.Int32'>;
}
