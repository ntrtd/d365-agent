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
import type { PlannedTimeAndAttendanceAbsenceRegistrationsApi } from './PlannedTimeAndAttendanceAbsenceRegistrationsApi';
import { NoYes } from './NoYes';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "PlannedTimeAndAttendanceAbsenceRegistrations" of service "d365_metadata".
 */
export class PlannedTimeAndAttendanceAbsenceRegistrations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PlannedTimeAndAttendanceAbsenceRegistrationsType<T>
{
  /**
   * Technical entity name for PlannedTimeAndAttendanceAbsenceRegistrations.
   */
  static override _entityName = 'PlannedTimeAndAttendanceAbsenceRegistrations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PlannedTimeAndAttendanceAbsenceRegistrations entity.
   */
  static _keys = [
    'dataAreaId',
    'WorkerPersonnelNumber',
    'PlannedAbsenceRegistrationEntryNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Worker Personnel Number.
   */
  declare workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Planned Absence Registration Entry Number.
   */
  declare plannedAbsenceRegistrationEntryNumber: DeserializedType<
    T,
    'Edm.Int64'
  >;
  /**
   * Start Date Time.
   */
  declare startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Planned Absence Interrupted.
   * @nullable
   */
  declare isPlannedAbsenceInterrupted?: NoYes | null;
  /**
   * End Date Time.
   */
  declare endDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Time And Attendance Activity Registration.
   * @nullable
   */
  declare isTimeAndAttendanceActivityRegistration?: NoYes | null;
  /**
   * Calculated Time Seconds.
   */
  declare calculatedTimeSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Time And Attendance Job Id.
   * @nullable
   */
  declare timeAndAttendanceJobId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Planned Absence Interruption Allowed.
   * @nullable
   */
  declare isPlannedAbsenceInterruptionAllowed?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;

  constructor(_entityApi: PlannedTimeAndAttendanceAbsenceRegistrationsApi<T>) {
    super(_entityApi);
  }
}

export interface PlannedTimeAndAttendanceAbsenceRegistrationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  plannedAbsenceRegistrationEntryNumber: DeserializedType<T, 'Edm.Int64'>;
  startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isPlannedAbsenceInterrupted?: NoYes | null;
  endDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isTimeAndAttendanceActivityRegistration?: NoYes | null;
  calculatedTimeSeconds: DeserializedType<T, 'Edm.Int32'>;
  timeAndAttendanceJobId?: DeserializedType<T, 'Edm.String'> | null;
  isPlannedAbsenceInterruptionAllowed?: NoYes | null;
  worker?: WorkersType<T> | null;
}
