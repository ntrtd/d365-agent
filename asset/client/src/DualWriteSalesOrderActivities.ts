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
import type { DualWriteSalesOrderActivitiesApi } from './DualWriteSalesOrderActivitiesApi';
import { SmmSensitivity } from './SmmSensitivity';
import { NoYes } from './NoYes';
import { SmmActivityStatus } from './SmmActivityStatus';
import { SmmActivityTaskTimeType } from './SmmActivityTaskTimeType';
import { SmmShowTimeAs } from './SmmShowTimeAs';
import { SmaDispatched } from './SmaDispatched';
import { SmmActivityParentType } from './SmmActivityParentType';
import { SmmActivityPriority } from './SmmActivityPriority';
import { SmmOutlookRecurrenceState } from './SmmOutlookRecurrenceState';
import { SmmActivityCategory } from './SmmActivityCategory';

/**
 * This class represents the entity "DualWriteSalesOrderActivities" of service "d365_metadata".
 */
export class DualWriteSalesOrderActivities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DualWriteSalesOrderActivitiesType<T>
{
  /**
   * Technical entity name for DualWriteSalesOrderActivities.
   */
  static override _entityName = 'DualWriteSalesOrderActivities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DualWriteSalesOrderActivities entity.
   */
  static _keys = ['dataAreaId', 'ActivityNumber', 'SalesId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Activity Number.
   */
  declare activityNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Id.
   */
  declare salesId: DeserializedType<T, 'Edm.String'>;
  /**
   * Billing Information.
   * @nullable
   */
  declare billingInformation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Agreement Header.
   */
  declare purchAgreementHeader: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sensitivity.
   * @nullable
   */
  declare sensitivity?: SmmSensitivity | null;
  /**
   * User Memo.
   * @nullable
   */
  declare userMemo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Team Task.
   * @nullable
   */
  declare teamTask?: NoYes | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: SmmActivityStatus | null;
  /**
   * Keep Synchronized.
   * @nullable
   */
  declare keepSynchronized?: NoYes | null;
  /**
   * Phase Id.
   * @nullable
   */
  declare phaseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Date Time.
   */
  declare endDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Location.
   * @nullable
   */
  declare location?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Outlook Entry Id.
   * @nullable
   */
  declare outlookEntryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reminder Date Time.
   */
  declare reminderDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reminder Active.
   * @nullable
   */
  declare reminderActive?: NoYes | null;
  /**
   * Primary Link.
   * @nullable
   */
  declare primaryLink?: NoYes | null;
  /**
   * Outlook Categories.
   * @nullable
   */
  declare outlookCategories?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Closed.
   * @nullable
   */
  declare closed?: NoYes | null;
  /**
   * Activity Task Time Type.
   * @nullable
   */
  declare activityTaskTimeType?: SmmActivityTaskTimeType | null;
  /**
   * Total Work.
   */
  declare totalWork: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Outlook Resources.
   * @nullable
   */
  declare outlookResources?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Time Type.
   * @nullable
   */
  declare activityTimeType?: SmmShowTimeAs | null;
  /**
   * Task Role.
   * @nullable
   */
  declare taskRole?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dispatched.
   * @nullable
   */
  declare dispatched?: SmaDispatched | null;
  /**
   * Reminder Minutes.
   */
  declare reminderMinutes: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Purpose.
   * @nullable
   */
  declare purpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Type.
   * @nullable
   */
  declare parentType?: SmmActivityParentType | null;
  /**
   * Is Template.
   * @nullable
   */
  declare isTemplate?: NoYes | null;
  /**
   * Modified.
   * @nullable
   */
  declare modified?: NoYes | null;
  /**
   * Mileage.
   * @nullable
   */
  declare mileage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Done By Worker.
   */
  declare doneByWorker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Last Edit Ax Date Time.
   */
  declare lastEditAxDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Task Priority.
   * @nullable
   */
  declare taskPriority?: SmmActivityPriority | null;
  /**
   * Actual End Date Time.
   */
  declare actualEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Responsibility Id.
   * @nullable
   */
  declare responsibilityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Response Requested.
   * @nullable
   */
  declare responseRequested?: NoYes | null;
  /**
   * Type Id.
   * @nullable
   */
  declare typeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Recurrence State.
   * @nullable
   */
  declare recurrenceState?: SmmOutlookRecurrenceState | null;
  /**
   * Percentage Completed.
   */
  declare percentageCompleted: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * All Day.
   * @nullable
   */
  declare allDay?: NoYes | null;
  /**
   * Outlook Global Object Id.
   * @nullable
   */
  declare outlookGlobalObjectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plan Id.
   * @nullable
   */
  declare planId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Master Appointment.
   * @nullable
   */
  declare isMasterAppointment?: NoYes | null;
  /**
   * Original Appointment Start Date Time.
   */
  declare originalAppointmentStartDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Category.
   * @nullable
   */
  declare category?: SmmActivityCategory | null;
  /**
   * Actual Work.
   */
  declare actualWork: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * External Memo.
   * @nullable
   */
  declare externalMemo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date Time.
   */
  declare startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Source.
   * @nullable
   */
  declare source?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DualWriteSalesOrderActivitiesApi<T>) {
    super(_entityApi);
  }
}

export interface DualWriteSalesOrderActivitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  activityNumber: DeserializedType<T, 'Edm.String'>;
  salesId: DeserializedType<T, 'Edm.String'>;
  billingInformation?: DeserializedType<T, 'Edm.String'> | null;
  purchAgreementHeader: DeserializedType<T, 'Edm.Int64'>;
  sensitivity?: SmmSensitivity | null;
  userMemo?: DeserializedType<T, 'Edm.String'> | null;
  teamTask?: NoYes | null;
  status?: SmmActivityStatus | null;
  keepSynchronized?: NoYes | null;
  phaseId?: DeserializedType<T, 'Edm.String'> | null;
  endDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  location?: DeserializedType<T, 'Edm.String'> | null;
  outlookEntryId?: DeserializedType<T, 'Edm.String'> | null;
  reminderDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reminderActive?: NoYes | null;
  primaryLink?: NoYes | null;
  outlookCategories?: DeserializedType<T, 'Edm.String'> | null;
  closed?: NoYes | null;
  activityTaskTimeType?: SmmActivityTaskTimeType | null;
  totalWork: DeserializedType<T, 'Edm.Decimal'>;
  outlookResources?: DeserializedType<T, 'Edm.String'> | null;
  activityTimeType?: SmmShowTimeAs | null;
  taskRole?: DeserializedType<T, 'Edm.String'> | null;
  dispatched?: SmaDispatched | null;
  reminderMinutes: DeserializedType<T, 'Edm.Int32'>;
  purpose?: DeserializedType<T, 'Edm.String'> | null;
  parentType?: SmmActivityParentType | null;
  isTemplate?: NoYes | null;
  modified?: NoYes | null;
  mileage?: DeserializedType<T, 'Edm.String'> | null;
  doneByWorker: DeserializedType<T, 'Edm.Int64'>;
  lastEditAxDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taskPriority?: SmmActivityPriority | null;
  actualEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  responsibilityId?: DeserializedType<T, 'Edm.String'> | null;
  responseRequested?: NoYes | null;
  typeId?: DeserializedType<T, 'Edm.String'> | null;
  recurrenceState?: SmmOutlookRecurrenceState | null;
  percentageCompleted: DeserializedType<T, 'Edm.Decimal'>;
  allDay?: NoYes | null;
  outlookGlobalObjectId?: DeserializedType<T, 'Edm.String'> | null;
  planId?: DeserializedType<T, 'Edm.String'> | null;
  isMasterAppointment?: NoYes | null;
  originalAppointmentStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  category?: SmmActivityCategory | null;
  actualWork: DeserializedType<T, 'Edm.Decimal'>;
  externalMemo?: DeserializedType<T, 'Edm.String'> | null;
  startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  source?: DeserializedType<T, 'Edm.String'> | null;
}
