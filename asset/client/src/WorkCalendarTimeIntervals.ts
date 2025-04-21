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
import type { WorkCalendarTimeIntervalsApi } from './WorkCalendarTimeIntervalsApi';
import { WorkCalendarDays, WorkCalendarDaysType } from './WorkCalendarDays';

/**
 * This class represents the entity "WorkCalendarTimeIntervals" of service "d365_metadata".
 */
export class WorkCalendarTimeIntervals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkCalendarTimeIntervalsType<T>
{
  /**
   * Technical entity name for WorkCalendarTimeIntervals.
   */
  static override _entityName = 'WorkCalendarTimeIntervals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkCalendarTimeIntervals entity.
   */
  static _keys = [
    'dataAreaId',
    'WorkCalendarId',
    'WorkCalendarDate',
    'StartTime'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Calendar Id.
   */
  declare workCalendarId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Calendar Date.
   */
  declare workCalendarDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Start Time.
   */
  declare startTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Working Time Scheduling Property Id.
   * @nullable
   */
  declare workingTimeSchedulingPropertyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Efficiency Percentage.
   */
  declare efficiencyPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payroll Earning Code.
   * @nullable
   */
  declare payrollEarningCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Time.
   */
  declare endTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link WorkCalendarDays} entity.
   */
  declare workCalendarDay?: WorkCalendarDays<T> | null;

  constructor(_entityApi: WorkCalendarTimeIntervalsApi<T>) {
    super(_entityApi);
  }
}

export interface WorkCalendarTimeIntervalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workCalendarId: DeserializedType<T, 'Edm.String'>;
  workCalendarDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  startTime: DeserializedType<T, 'Edm.Int32'>;
  workingTimeSchedulingPropertyId?: DeserializedType<T, 'Edm.String'> | null;
  efficiencyPercentage: DeserializedType<T, 'Edm.Decimal'>;
  payrollEarningCode?: DeserializedType<T, 'Edm.String'> | null;
  endTime: DeserializedType<T, 'Edm.Int32'>;
  workCalendarDay?: WorkCalendarDaysType<T> | null;
}
