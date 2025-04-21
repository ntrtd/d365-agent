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
import type { BusinessProcessCalendarDaysApi } from './BusinessProcessCalendarDaysApi';
import { BusinessProcessCalendarDayStatus } from './BusinessProcessCalendarDayStatus';
import { WeekDays } from './WeekDays';
import {
  BusinessProcessCalendars,
  BusinessProcessCalendarsType
} from './BusinessProcessCalendars';

/**
 * This class represents the entity "BusinessProcessCalendarDays" of service "d365_metadata".
 */
export class BusinessProcessCalendarDays<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessProcessCalendarDaysType<T>
{
  /**
   * Technical entity name for BusinessProcessCalendarDays.
   */
  static override _entityName = 'BusinessProcessCalendarDays';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessProcessCalendarDays entity.
   */
  static _keys = ['CalendarId', 'CalendarDate'];
  /**
   * Calendar Id.
   */
  declare calendarId: DeserializedType<T, 'Edm.String'>;
  /**
   * Calendar Date.
   */
  declare calendarDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: BusinessProcessCalendarDayStatus | null;
  /**
   * Day Of Week.
   * @nullable
   */
  declare dayOfWeek?: WeekDays | null;
  /**
   * One-to-one navigation property to the {@link BusinessProcessCalendars} entity.
   */
  declare calendarHeader?: BusinessProcessCalendars<T> | null;

  constructor(_entityApi: BusinessProcessCalendarDaysApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessProcessCalendarDaysType<
  T extends DeSerializers = DefaultDeSerializers
> {
  calendarId: DeserializedType<T, 'Edm.String'>;
  calendarDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  status?: BusinessProcessCalendarDayStatus | null;
  dayOfWeek?: WeekDays | null;
  calendarHeader?: BusinessProcessCalendarsType<T> | null;
}
