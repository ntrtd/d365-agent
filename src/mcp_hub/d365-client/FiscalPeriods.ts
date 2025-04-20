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
import type { FiscalPeriodsApi } from './FiscalPeriodsApi';
import { FiscalQuarter } from './FiscalQuarter';
import { CalendarTypeIn } from './CalendarTypeIn';
import { FiscalPeriodMonth } from './FiscalPeriodMonth';
import { FiscalPeriodType } from './FiscalPeriodType';
import {
  FiscalCalendarsEntity,
  FiscalCalendarsEntityType
} from './FiscalCalendarsEntity';
import {
  FiscalCalendarYearsEntity,
  FiscalCalendarYearsEntityType
} from './FiscalCalendarYearsEntity';
import {
  BudgetTrackingWorkspaceParameters,
  BudgetTrackingWorkspaceParametersType
} from './BudgetTrackingWorkspaceParameters';

/**
 * This class represents the entity "FiscalPeriods" of service "d365_metadata".
 */
export class FiscalPeriods<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FiscalPeriodsType<T>
{
  /**
   * Technical entity name for FiscalPeriods.
   */
  static override _entityName = 'FiscalPeriods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalPeriods entity.
   */
  static _keys = [
    'Calendar',
    'FiscalYear',
    'StartDate',
    'EndDate',
    'PeriodName'
  ];
  /**
   * Calendar.
   */
  declare calendar: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Year.
   */
  declare fiscalYear: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Period Name.
   */
  declare periodName: DeserializedType<T, 'Edm.String'>;
  /**
   * Quarter.
   * @nullable
   */
  declare quarter?: FiscalQuarter | null;
  /**
   * Days.
   */
  declare days: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Comments.
   * @nullable
   */
  declare comments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calendar Type.
   * @nullable
   */
  declare calendarType?: CalendarTypeIn | null;
  /**
   * Month.
   * @nullable
   */
  declare month?: FiscalPeriodMonth | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: FiscalPeriodType | null;
  /**
   * Short Name.
   * @nullable
   */
  declare shortName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link FiscalCalendarsEntity} entity.
   */
  declare fiscalCalendarPeriod?: FiscalCalendarsEntity<T> | null;
  /**
   * One-to-one navigation property to the {@link FiscalCalendarYearsEntity} entity.
   */
  declare fiscalCalendarYear?: FiscalCalendarYearsEntity<T> | null;
  /**
   * One-to-many navigation property to the {@link BudgetTrackingWorkspaceParameters} entity.
   */
  declare budgetTrackingWorkspaceParametersFiscalPeriod: BudgetTrackingWorkspaceParameters<T>[];

  constructor(_entityApi: FiscalPeriodsApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalPeriodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  calendar: DeserializedType<T, 'Edm.String'>;
  fiscalYear: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  periodName: DeserializedType<T, 'Edm.String'>;
  quarter?: FiscalQuarter | null;
  days: DeserializedType<T, 'Edm.Int32'>;
  comments?: DeserializedType<T, 'Edm.String'> | null;
  calendarType?: CalendarTypeIn | null;
  month?: FiscalPeriodMonth | null;
  type?: FiscalPeriodType | null;
  shortName?: DeserializedType<T, 'Edm.String'> | null;
  fiscalCalendarPeriod?: FiscalCalendarsEntityType<T> | null;
  fiscalCalendarYear?: FiscalCalendarYearsEntityType<T> | null;
  budgetTrackingWorkspaceParametersFiscalPeriod: BudgetTrackingWorkspaceParametersType<T>[];
}
