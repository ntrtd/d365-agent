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
import type { DualWriteSmmActivitiesApi } from './DualWriteSmmActivitiesApi';
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
 * This class represents the entity "DualWriteSmmActivities" of service "d365_metadata".
 */
export class DualWriteSmmActivities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DualWriteSmmActivitiesType<T>
{
  /**
   * Technical entity name for DualWriteSmmActivities.
   */
  static override _entityName = 'DualWriteSmmActivities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DualWriteSmmActivities entity.
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
   * Psa Category Default.
   * @nullable
   */
  declare psaCategoryDefault?: DeserializedType<T, 'Edm.String'> | null;
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
   * Rec Version 1.
   */
  declare recVersion1: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Phase Id.
   * @nullable
   */
  declare phaseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Keep Synchronized.
   * @nullable
   */
  declare keepSynchronized?: NoYes | null;
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
   * Psa Quotation Id.
   * @nullable
   */
  declare psaQuotationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Outlook Categories.
   * @nullable
   */
  declare outlookCategories?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Modified Date Time 1.
   */
  declare modifiedDateTime1: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Created Date Time 1.
   */
  declare createdDateTime1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Task Role.
   * @nullable
   */
  declare taskRole?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rec Id 1.
   */
  declare recId1: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Partition 1.
   */
  declare partition1: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Dispatched.
   * @nullable
   */
  declare dispatched?: SmaDispatched | null;
  /**
   * Psa Description.
   * @nullable
   */
  declare psaDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Responsible Worker.
   */
  declare responsibleWorker: DeserializedType<T, 'Edm.Int64'>;
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
   * Psa Mile Stone.
   * @nullable
   */
  declare psaMileStone?: NoYes | null;
  /**
   * Task Priority.
   * @nullable
   */
  declare taskPriority?: SmmActivityPriority | null;
  /**
   * Data Area Id 1.
   * @nullable
   */
  declare dataAreaId1?: DeserializedType<T, 'Edm.String'> | null;
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
   * Modified By 1.
   * @nullable
   */
  declare modifiedBy1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * All Day.
   * @nullable
   */
  declare allDay?: NoYes | null;
  /**
   * Created By 1.
   * @nullable
   */
  declare createdBy1?: DeserializedType<T, 'Edm.String'> | null;
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
   * Psa Activity.
   * @nullable
   */
  declare psaActivity?: DeserializedType<T, 'Edm.String'> | null;
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
  /**
   * Psa Mandatory.
   * @nullable
   */
  declare psaMandatory?: NoYes | null;

  constructor(_entityApi: DualWriteSmmActivitiesApi<T>) {
    super(_entityApi);
  }
}

export interface DualWriteSmmActivitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  activityNumber: DeserializedType<T, 'Edm.String'>;
  billingInformation?: DeserializedType<T, 'Edm.String'> | null;
  purchAgreementHeader: DeserializedType<T, 'Edm.Int64'>;
  sensitivity?: SmmSensitivity | null;
  psaCategoryDefault?: DeserializedType<T, 'Edm.String'> | null;
  userMemo?: DeserializedType<T, 'Edm.String'> | null;
  teamTask?: NoYes | null;
  status?: SmmActivityStatus | null;
  recVersion1: DeserializedType<T, 'Edm.Int32'>;
  phaseId?: DeserializedType<T, 'Edm.String'> | null;
  keepSynchronized?: NoYes | null;
  endDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  location?: DeserializedType<T, 'Edm.String'> | null;
  outlookEntryId?: DeserializedType<T, 'Edm.String'> | null;
  reminderDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reminderActive?: NoYes | null;
  psaQuotationId?: DeserializedType<T, 'Edm.String'> | null;
  outlookCategories?: DeserializedType<T, 'Edm.String'> | null;
  modifiedDateTime1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  closed?: NoYes | null;
  activityTaskTimeType?: SmmActivityTaskTimeType | null;
  totalWork: DeserializedType<T, 'Edm.Decimal'>;
  outlookResources?: DeserializedType<T, 'Edm.String'> | null;
  activityTimeType?: SmmShowTimeAs | null;
  createdDateTime1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taskRole?: DeserializedType<T, 'Edm.String'> | null;
  recId1: DeserializedType<T, 'Edm.Int64'>;
  partition1: DeserializedType<T, 'Edm.Int64'>;
  dispatched?: SmaDispatched | null;
  psaDescription?: DeserializedType<T, 'Edm.String'> | null;
  responsibleWorker: DeserializedType<T, 'Edm.Int64'>;
  reminderMinutes: DeserializedType<T, 'Edm.Int32'>;
  purpose?: DeserializedType<T, 'Edm.String'> | null;
  parentType?: SmmActivityParentType | null;
  isTemplate?: NoYes | null;
  modified?: NoYes | null;
  mileage?: DeserializedType<T, 'Edm.String'> | null;
  doneByWorker: DeserializedType<T, 'Edm.Int64'>;
  lastEditAxDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  psaMileStone?: NoYes | null;
  taskPriority?: SmmActivityPriority | null;
  dataAreaId1?: DeserializedType<T, 'Edm.String'> | null;
  actualEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  responsibilityId?: DeserializedType<T, 'Edm.String'> | null;
  responseRequested?: NoYes | null;
  typeId?: DeserializedType<T, 'Edm.String'> | null;
  recurrenceState?: SmmOutlookRecurrenceState | null;
  percentageCompleted: DeserializedType<T, 'Edm.Decimal'>;
  modifiedBy1?: DeserializedType<T, 'Edm.String'> | null;
  allDay?: NoYes | null;
  createdBy1?: DeserializedType<T, 'Edm.String'> | null;
  outlookGlobalObjectId?: DeserializedType<T, 'Edm.String'> | null;
  planId?: DeserializedType<T, 'Edm.String'> | null;
  isMasterAppointment?: NoYes | null;
  originalAppointmentStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  category?: SmmActivityCategory | null;
  actualWork: DeserializedType<T, 'Edm.Decimal'>;
  psaActivity?: DeserializedType<T, 'Edm.String'> | null;
  externalMemo?: DeserializedType<T, 'Edm.String'> | null;
  startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  source?: DeserializedType<T, 'Edm.String'> | null;
  psaMandatory?: NoYes | null;
}
