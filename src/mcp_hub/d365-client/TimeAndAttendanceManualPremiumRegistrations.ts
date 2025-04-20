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
import type { TimeAndAttendanceManualPremiumRegistrationsApi } from './TimeAndAttendanceManualPremiumRegistrationsApi';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "TimeAndAttendanceManualPremiumRegistrations" of service "d365_metadata".
 */
export class TimeAndAttendanceManualPremiumRegistrations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TimeAndAttendanceManualPremiumRegistrationsType<T>
{
  /**
   * Technical entity name for TimeAndAttendanceManualPremiumRegistrations.
   */
  static override _entityName = 'TimeAndAttendanceManualPremiumRegistrations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TimeAndAttendanceManualPremiumRegistrations entity.
   */
  static _keys = [
    'dataAreaId',
    'TimeProfileDate',
    'ManualPremiumRegistrationEntryNumber',
    'WorkerPersonnelNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Time Profile Date.
   */
  declare timeProfileDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Manual Premium Registration Entry Number.
   */
  declare manualPremiumRegistrationEntryNumber: DeserializedType<
    T,
    'Edm.Int64'
  >;
  /**
   * Worker Personnel Number.
   */
  declare workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Unit Price.
   */
  declare unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Activity Registration Transaction Id.
   * @nullable
   */
  declare activityRegistrationTransactionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Unit Quantity.
   */
  declare unitQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Time And Attendance Manual Premium Id.
   * @nullable
   */
  declare timeAndAttendanceManualPremiumId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;

  constructor(_entityApi: TimeAndAttendanceManualPremiumRegistrationsApi<T>) {
    super(_entityApi);
  }
}

export interface TimeAndAttendanceManualPremiumRegistrationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  timeProfileDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  manualPremiumRegistrationEntryNumber: DeserializedType<T, 'Edm.Int64'>;
  workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  activityRegistrationTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  unitQuantity: DeserializedType<T, 'Edm.Decimal'>;
  timeAndAttendanceManualPremiumId?: DeserializedType<T, 'Edm.String'> | null;
  worker?: WorkersType<T> | null;
}
