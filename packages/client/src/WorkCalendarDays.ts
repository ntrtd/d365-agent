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
import type { WorkCalendarDaysApi } from './WorkCalendarDaysApi';
import { NoYes } from './NoYes';
import { WorkTimeControl } from './WorkTimeControl';
import {
  WorkCalendarTimeIntervals,
  WorkCalendarTimeIntervalsType
} from './WorkCalendarTimeIntervals';
import { WorkCalendars, WorkCalendarsType } from './WorkCalendars';

/**
 * This class represents the entity "WorkCalendarDays" of service "d365_metadata".
 */
export class WorkCalendarDays<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkCalendarDaysType<T>
{
  /**
   * Technical entity name for WorkCalendarDays.
   */
  static override _entityName = 'WorkCalendarDays';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkCalendarDays entity.
   */
  static _keys = ['dataAreaId', 'WorkCalendarId', 'CalendarDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Calendar Id.
   */
  declare workCalendarId: DeserializedType<T, 'Edm.String'>;
  /**
   * Calendar Date.
   */
  declare calendarDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Picking Up Closed.
   * @nullable
   */
  declare isPickingUpClosed?: NoYes | null;
  /**
   * Working Day Definition.
   * @nullable
   */
  declare workingDayDefinition?: WorkTimeControl | null;
  /**
   * One-to-many navigation property to the {@link WorkCalendarTimeIntervals} entity.
   */
  declare workCalendarTimeIntervals: WorkCalendarTimeIntervals<T>[];
  /**
   * One-to-one navigation property to the {@link WorkCalendars} entity.
   */
  declare workCalendar?: WorkCalendars<T> | null;

  constructor(_entityApi: WorkCalendarDaysApi<T>) {
    super(_entityApi);
  }
}

export interface WorkCalendarDaysType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workCalendarId: DeserializedType<T, 'Edm.String'>;
  calendarDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isPickingUpClosed?: NoYes | null;
  workingDayDefinition?: WorkTimeControl | null;
  workCalendarTimeIntervals: WorkCalendarTimeIntervalsType<T>[];
  workCalendar?: WorkCalendarsType<T> | null;
}
