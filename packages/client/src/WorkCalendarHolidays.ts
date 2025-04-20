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
import type { WorkCalendarHolidaysApi } from './WorkCalendarHolidaysApi';
import { WorkCalendars, WorkCalendarsType } from './WorkCalendars';
import {
  WorkCalendarHolidayLines,
  WorkCalendarHolidayLinesType
} from './WorkCalendarHolidayLines';

/**
 * This class represents the entity "WorkCalendarHolidays" of service "d365_metadata".
 */
export class WorkCalendarHolidays<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkCalendarHolidaysType<T>
{
  /**
   * Technical entity name for WorkCalendarHolidays.
   */
  static override _entityName = 'WorkCalendarHolidays';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkCalendarHolidays entity.
   */
  static _keys = ['Id'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link WorkCalendars} entity.
   */
  declare workCalendar?: WorkCalendars<T> | null;
  /**
   * One-to-many navigation property to the {@link WorkCalendarHolidayLines} entity.
   */
  declare workCalendarHolidayLine: WorkCalendarHolidayLines<T>[];

  constructor(_entityApi: WorkCalendarHolidaysApi<T>) {
    super(_entityApi);
  }
}

export interface WorkCalendarHolidaysType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  workCalendar?: WorkCalendarsType<T> | null;
  workCalendarHolidayLine: WorkCalendarHolidayLinesType<T>[];
}
