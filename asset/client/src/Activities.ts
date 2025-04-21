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
import type { ActivitiesApi } from './ActivitiesApi';
import { SmmActivityPriority } from './SmmActivityPriority';
import { SmmActivityCategory } from './SmmActivityCategory';
import { SmaDispatched } from './SmaDispatched';
import { NoYes } from './NoYes';
import { SmmSensitivity } from './SmmSensitivity';
import { SmmOutlookRecurrenceState } from './SmmOutlookRecurrenceState';
import { SmmShowTimeAs } from './SmmShowTimeAs';
import { SmmActivityTaskTimeType } from './SmmActivityTaskTimeType';
import {
  ServiceOrderHeaders,
  ServiceOrderHeadersType
} from './ServiceOrderHeaders';
import { ServiceOrderLines, ServiceOrderLinesType } from './ServiceOrderLines';

/**
 * This class represents the entity "Activities" of service "d365_metadata".
 */
export class Activities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ActivitiesType<T>
{
  /**
   * Technical entity name for Activities.
   */
  static override _entityName = 'Activities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Activities entity.
   */
  static _keys = ['dataAreaId', 'ActivityNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Activity Number.
   */
  declare activityNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Priority.
   * @nullable
   */
  declare priority?: SmmActivityPriority | null;
  /**
   * Category.
   * @nullable
   */
  declare category?: SmmActivityCategory | null;
  /**
   * Closed By Personnel Number.
   * @nullable
   */
  declare closedByPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Outlook Text.
   * @nullable
   */
  declare outlookText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dispatched.
   * @nullable
   */
  declare dispatched?: SmaDispatched | null;
  /**
   * Modified.
   * @nullable
   */
  declare modified?: NoYes | null;
  /**
   * All Day.
   * @nullable
   */
  declare allDay?: NoYes | null;
  /**
   * Reminder.
   * @nullable
   */
  declare reminder?: NoYes | null;
  /**
   * Master Appointment.
   * @nullable
   */
  declare masterAppointment?: NoYes | null;
  /**
   * Original Start Date.
   */
  declare originalStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Phase Id.
   * @nullable
   */
  declare phaseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sensitivity.
   * @nullable
   */
  declare sensitivity?: SmmSensitivity | null;
  /**
   * Source Application.
   * @nullable
   */
  declare sourceApplication?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Outlook Response Requested.
   * @nullable
   */
  declare outlookResponseRequested?: NoYes | null;
  /**
   * Responsibility Id.
   * @nullable
   */
  declare responsibilityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date And Time Closed.
   */
  declare dateAndTimeClosed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Recurrence State.
   * @nullable
   */
  declare recurrenceState?: SmmOutlookRecurrenceState | null;
  /**
   * Mileage.
   * @nullable
   */
  declare mileage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Actual Work.
   */
  declare actualWork: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reminder Minutes.
   */
  declare reminderMinutes: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Outlook Shared Object Id.
   * @nullable
   */
  declare outlookSharedObjectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Role.
   * @nullable
   */
  declare role?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Team Task.
   * @nullable
   */
  declare teamTask?: NoYes | null;
  /**
   * Outlook Entry Id.
   * @nullable
   */
  declare outlookEntryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Outlook Resources.
   * @nullable
   */
  declare outlookResources?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type Id.
   * @nullable
   */
  declare typeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Outlook Categories.
   * @nullable
   */
  declare outlookCategories?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Keep Synchronized.
   * @nullable
   */
  declare keepSynchronized?: NoYes | null;
  /**
   * Closed.
   * @nullable
   */
  declare closed?: NoYes | null;
  /**
   * Location.
   * @nullable
   */
  declare location?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Responsible Worker Personnel Number.
   * @nullable
   */
  declare responsibleWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Show Time As.
   * @nullable
   */
  declare showTimeAs?: SmmShowTimeAs | null;
  /**
   * Completed Percentage.
   */
  declare completedPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * End Date Time.
   */
  declare endDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Billing Information.
   * @nullable
   */
  declare billingInformation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Status.
   * @nullable
   */
  declare activityStatus?: SmmActivityTaskTimeType | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Date Time Edited.
   */
  declare lastDateTimeEdited: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Total Work.
   */
  declare totalWork: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Plan Id.
   * @nullable
   */
  declare planId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date Time.
   */
  declare startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Template.
   * @nullable
   */
  declare template?: NoYes | null;
  /**
   * Reminder Date.
   */
  declare reminderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Purpose.
   * @nullable
   */
  declare purpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ServiceOrderHeaders} entity.
   */
  declare serviceOrderHeaders: ServiceOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceOrderLines} entity.
   */
  declare serviceOrderLines: ServiceOrderLines<T>[];

  constructor(_entityApi: ActivitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ActivitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  activityNumber: DeserializedType<T, 'Edm.String'>;
  priority?: SmmActivityPriority | null;
  category?: SmmActivityCategory | null;
  closedByPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  outlookText?: DeserializedType<T, 'Edm.String'> | null;
  dispatched?: SmaDispatched | null;
  modified?: NoYes | null;
  allDay?: NoYes | null;
  reminder?: NoYes | null;
  masterAppointment?: NoYes | null;
  originalStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  phaseId?: DeserializedType<T, 'Edm.String'> | null;
  sensitivity?: SmmSensitivity | null;
  sourceApplication?: DeserializedType<T, 'Edm.String'> | null;
  outlookResponseRequested?: NoYes | null;
  responsibilityId?: DeserializedType<T, 'Edm.String'> | null;
  dateAndTimeClosed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  recurrenceState?: SmmOutlookRecurrenceState | null;
  mileage?: DeserializedType<T, 'Edm.String'> | null;
  actualWork: DeserializedType<T, 'Edm.Decimal'>;
  reminderMinutes: DeserializedType<T, 'Edm.Int32'>;
  outlookSharedObjectId?: DeserializedType<T, 'Edm.String'> | null;
  role?: DeserializedType<T, 'Edm.String'> | null;
  teamTask?: NoYes | null;
  outlookEntryId?: DeserializedType<T, 'Edm.String'> | null;
  outlookResources?: DeserializedType<T, 'Edm.String'> | null;
  typeId?: DeserializedType<T, 'Edm.String'> | null;
  outlookCategories?: DeserializedType<T, 'Edm.String'> | null;
  keepSynchronized?: NoYes | null;
  closed?: NoYes | null;
  location?: DeserializedType<T, 'Edm.String'> | null;
  responsibleWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  showTimeAs?: SmmShowTimeAs | null;
  completedPercentage: DeserializedType<T, 'Edm.Decimal'>;
  endDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  billingInformation?: DeserializedType<T, 'Edm.String'> | null;
  activityStatus?: SmmActivityTaskTimeType | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  lastDateTimeEdited: DeserializedType<T, 'Edm.DateTimeOffset'>;
  totalWork: DeserializedType<T, 'Edm.Decimal'>;
  planId?: DeserializedType<T, 'Edm.String'> | null;
  startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  template?: NoYes | null;
  reminderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  purpose?: DeserializedType<T, 'Edm.String'> | null;
  serviceOrderHeaders: ServiceOrderHeadersType<T>[];
  serviceOrderLines: ServiceOrderLinesType<T>[];
}
