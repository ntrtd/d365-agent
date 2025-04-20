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
import type { EssWorkCalendarDaysApi } from './EssWorkCalendarDaysApi';
import { WorkTimeControl } from './WorkTimeControl';

/**
 * This class represents the entity "EssWorkCalendarDays" of service "d365_metadata".
 */
export class EssWorkCalendarDays<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EssWorkCalendarDaysType<T>
{
  /**
   * Technical entity name for EssWorkCalendarDays.
   */
  static override _entityName = 'EssWorkCalendarDays';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EssWorkCalendarDays entity.
   */
  static _keys = ['dataAreaId', 'CalendarId', 'CalendarDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Calendar Id.
   */
  declare calendarId: DeserializedType<T, 'Edm.String'>;
  /**
   * Calendar Date.
   */
  declare calendarDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: WorkTimeControl | null;
  /**
   * Working Hours.
   */
  declare workingHours: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: EssWorkCalendarDaysApi<T>) {
    super(_entityApi);
  }
}

export interface EssWorkCalendarDaysType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  calendarId: DeserializedType<T, 'Edm.String'>;
  calendarDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  status?: WorkTimeControl | null;
  workingHours: DeserializedType<T, 'Edm.Decimal'>;
}
