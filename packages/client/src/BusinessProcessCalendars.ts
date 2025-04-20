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
import type { BusinessProcessCalendarsApi } from './BusinessProcessCalendarsApi';
import { BusinessProcessCalendarDayStatus } from './BusinessProcessCalendarDayStatus';
import {
  ProcessTemplateHeaders,
  ProcessTemplateHeadersType
} from './ProcessTemplateHeaders';
import {
  OnboardingChecklistTemplateHeaders,
  OnboardingChecklistTemplateHeadersType
} from './OnboardingChecklistTemplateHeaders';
import {
  BusinessProcessCalendarDays,
  BusinessProcessCalendarDaysType
} from './BusinessProcessCalendarDays';

/**
 * This class represents the entity "BusinessProcessCalendars" of service "d365_metadata".
 */
export class BusinessProcessCalendars<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessProcessCalendarsType<T>
{
  /**
   * Technical entity name for BusinessProcessCalendars.
   */
  static override _entityName = 'BusinessProcessCalendars';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessProcessCalendars entity.
   */
  static _keys = ['CalendarId'];
  /**
   * Calendar Id.
   */
  declare calendarId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Open Saturday.
   * @nullable
   */
  declare isOpenSaturday?: BusinessProcessCalendarDayStatus | null;
  /**
   * Is Open Friday.
   * @nullable
   */
  declare isOpenFriday?: BusinessProcessCalendarDayStatus | null;
  /**
   * Is Open Wednesday.
   * @nullable
   */
  declare isOpenWednesday?: BusinessProcessCalendarDayStatus | null;
  /**
   * Is Open Thursday.
   * @nullable
   */
  declare isOpenThursday?: BusinessProcessCalendarDayStatus | null;
  /**
   * Is Open Tuesday.
   * @nullable
   */
  declare isOpenTuesday?: BusinessProcessCalendarDayStatus | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Open Sunday.
   * @nullable
   */
  declare isOpenSunday?: BusinessProcessCalendarDayStatus | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Open Monday.
   * @nullable
   */
  declare isOpenMonday?: BusinessProcessCalendarDayStatus | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link ProcessTemplateHeaders} entity.
   */
  declare businessProcessTemplates: ProcessTemplateHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link OnboardingChecklistTemplateHeaders} entity.
   */
  declare onboardingChecklistTemplates: OnboardingChecklistTemplateHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessProcessCalendarDays} entity.
   */
  declare calendarDays: BusinessProcessCalendarDays<T>[];

  constructor(_entityApi: BusinessProcessCalendarsApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessProcessCalendarsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  calendarId: DeserializedType<T, 'Edm.String'>;
  isOpenSaturday?: BusinessProcessCalendarDayStatus | null;
  isOpenFriday?: BusinessProcessCalendarDayStatus | null;
  isOpenWednesday?: BusinessProcessCalendarDayStatus | null;
  isOpenThursday?: BusinessProcessCalendarDayStatus | null;
  isOpenTuesday?: BusinessProcessCalendarDayStatus | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  isOpenSunday?: BusinessProcessCalendarDayStatus | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isOpenMonday?: BusinessProcessCalendarDayStatus | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  businessProcessTemplates: ProcessTemplateHeadersType<T>[];
  onboardingChecklistTemplates: OnboardingChecklistTemplateHeadersType<T>[];
  calendarDays: BusinessProcessCalendarDaysType<T>[];
}
