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
import type { WorkCalendarHolidayLinesApi } from './WorkCalendarHolidayLinesApi';
import {
  WorkCalendarHolidays,
  WorkCalendarHolidaysType
} from './WorkCalendarHolidays';

/**
 * This class represents the entity "WorkCalendarHolidayLines" of service "d365_metadata".
 */
export class WorkCalendarHolidayLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkCalendarHolidayLinesType<T>
{
  /**
   * Technical entity name for WorkCalendarHolidayLines.
   */
  static override _entityName = 'WorkCalendarHolidayLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkCalendarHolidayLines entity.
   */
  static _keys = ['HolidayId', 'HolidayDate'];
  /**
   * Holiday Id.
   */
  declare holidayId: DeserializedType<T, 'Edm.String'>;
  /**
   * Holiday Date.
   */
  declare holidayDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link WorkCalendarHolidays} entity.
   */
  declare workCalendarHolidayParent?: WorkCalendarHolidays<T> | null;

  constructor(_entityApi: WorkCalendarHolidayLinesApi<T>) {
    super(_entityApi);
  }
}

export interface WorkCalendarHolidayLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  holidayId: DeserializedType<T, 'Edm.String'>;
  holidayDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  workCalendarHolidayParent?: WorkCalendarHolidaysType<T> | null;
}
