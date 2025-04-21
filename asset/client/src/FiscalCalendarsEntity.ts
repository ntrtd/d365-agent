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
import type { FiscalCalendarsEntityApi } from './FiscalCalendarsEntityApi';
import { FiscalPeriods, FiscalPeriodsType } from './FiscalPeriods';
import {
  FiscalCalendarYearsEntity,
  FiscalCalendarYearsEntityType
} from './FiscalCalendarYearsEntity';

/**
 * This class represents the entity "FiscalCalendarsEntity" of service "d365_metadata".
 */
export class FiscalCalendarsEntity<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalCalendarsEntityType<T>
{
  /**
   * Technical entity name for FiscalCalendarsEntity.
   */
  static override _entityName = 'FiscalCalendarsEntity';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalCalendarsEntity entity.
   */
  static _keys = ['CalendarId'];
  /**
   * Calendar Id.
   */
  declare calendarId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link FiscalPeriods} entity.
   */
  declare fiscalPeriod: FiscalPeriods<T>[];
  /**
   * One-to-many navigation property to the {@link FiscalCalendarYearsEntity} entity.
   */
  declare fiscalCalendarYearEntity: FiscalCalendarYearsEntity<T>[];

  constructor(_entityApi: FiscalCalendarsEntityApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalCalendarsEntityType<
  T extends DeSerializers = DefaultDeSerializers
> {
  calendarId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  fiscalPeriod: FiscalPeriodsType<T>[];
  fiscalCalendarYearEntity: FiscalCalendarYearsEntityType<T>[];
}
