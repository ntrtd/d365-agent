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
import type { FiscalCalendarYearsEntityApi } from './FiscalCalendarYearsEntityApi';
import { FiscalPeriods, FiscalPeriodsType } from './FiscalPeriods';
import {
  FiscalCalendarsEntity,
  FiscalCalendarsEntityType
} from './FiscalCalendarsEntity';

/**
 * This class represents the entity "FiscalCalendarYearsEntity" of service "d365_metadata".
 */
export class FiscalCalendarYearsEntity<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalCalendarYearsEntityType<T>
{
  /**
   * Technical entity name for FiscalCalendarYearsEntity.
   */
  static override _entityName = 'FiscalCalendarYearsEntity';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalCalendarYearsEntity entity.
   */
  static _keys = ['FiscalCalendar_CalendarId', 'Name'];
  /**
   * Fiscal Calendar Calendar Id.
   */
  declare fiscalCalendarCalendarId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link FiscalPeriods} entity.
   */
  declare fiscalPeriod: FiscalPeriods<T>[];
  /**
   * One-to-one navigation property to the {@link FiscalCalendarsEntity} entity.
   */
  declare fiscalCalendarYear?: FiscalCalendarsEntity<T> | null;

  constructor(_entityApi: FiscalCalendarYearsEntityApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalCalendarYearsEntityType<
  T extends DeSerializers = DefaultDeSerializers
> {
  fiscalCalendarCalendarId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fiscalPeriod: FiscalPeriodsType<T>[];
  fiscalCalendarYear?: FiscalCalendarsEntityType<T> | null;
}
