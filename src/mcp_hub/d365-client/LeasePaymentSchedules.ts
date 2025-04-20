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
import type { LeasePaymentSchedulesApi } from './LeasePaymentSchedulesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LeasePaymentSchedules" of service "d365_metadata".
 */
export class LeasePaymentSchedules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeasePaymentSchedulesType<T>
{
  /**
   * Technical entity name for LeasePaymentSchedules.
   */
  static override _entityName = 'LeasePaymentSchedules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeasePaymentSchedules entity.
   */
  static _keys = ['dataAreaId', 'TransDate', 'LeaseId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Lease Id.
   */
  declare leaseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Batch Number.
   * @nullable
   */
  declare journalBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Variable Payment.
   */
  declare variablePayment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
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
   * Present Value.
   */
  declare presentValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payment Amount.
   */
  declare paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Journal Created.
   * @nullable
   */
  declare journalCreated?: NoYes | null;
  /**
   * Deferred Rent Charge.
   */
  declare deferredRentCharge: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Straight Line Cost.
   */
  declare straightLineCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Deferred Rent Balance.
   */
  declare deferredRentBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Month.
   */
  declare month: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Period.
   */
  declare period: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: LeasePaymentSchedulesApi<T>) {
    super(_entityApi);
  }
}

export interface LeasePaymentSchedulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  leaseId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  variablePayment: DeserializedType<T, 'Edm.Decimal'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  reversed?: NoYes | null;
  latestJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  journalPosted?: NoYes | null;
  finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  presentValue: DeserializedType<T, 'Edm.Decimal'>;
  paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  journalCreated?: NoYes | null;
  deferredRentCharge: DeserializedType<T, 'Edm.Decimal'>;
  straightLineCost: DeserializedType<T, 'Edm.Decimal'>;
  deferredRentBalance: DeserializedType<T, 'Edm.Decimal'>;
  month: DeserializedType<T, 'Edm.Int32'>;
  period: DeserializedType<T, 'Edm.Int32'>;
}
