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
import type { LeaveAbsenceParametersApi } from './LeaveAbsenceParametersApi';
import { NoYes } from './NoYes';
import { HcmWorkerRelationType } from './HcmWorkerRelationType';
import { LeaveBalanceCalculationOption } from './LeaveBalanceCalculationOption';
import { LeaveAmountUnit } from './LeaveAmountUnit';
import { LeaveMonthsOfServiceCalculationOption } from './LeaveMonthsOfServiceCalculationOption';

/**
 * This class represents the entity "LeaveAbsenceParameters" of service "d365_metadata".
 */
export class LeaveAbsenceParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaveAbsenceParametersType<T>
{
  /**
   * Technical entity name for LeaveAbsenceParameters.
   */
  static override _entityName = 'LeaveAbsenceParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaveAbsenceParameters entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Show Birthday In Absence Coordinator Calendar.
   * @nullable
   */
  declare showBirthdayInAbsenceCoordinatorCalendar?: NoYes | null;
  /**
   * Show Leave Of Absence In Absence Calendar.
   * @nullable
   */
  declare showLeaveOfAbsenceInAbsenceCalendar?: NoYes | null;
  /**
   * Calendar Sick Leave Color.
   */
  declare calendarSickLeaveColor: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Calendar Leave Approved Color.
   */
  declare calendarLeaveApprovedColor: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Calendar Show Worker Type Absence Coordinator.
   * @nullable
   */
  declare calendarShowWorkerTypeAbsenceCoordinator?: HcmWorkerRelationType | null;
  /**
   * Leave Balance Calculation Option.
   * @nullable
   */
  declare leaveBalanceCalculationOption?: LeaveBalanceCalculationOption | null;
  /**
   * Leave Balance Expiration Batch Start Time.
   */
  declare leaveBalanceExpirationBatchStartTime: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Show Pending Leave In Manager Calendar.
   * @nullable
   */
  declare showPendingLeaveInManagerCalendar?: NoYes | null;
  /**
   * Show Only Absence In Team Calendar.
   * @nullable
   */
  declare showOnlyAbsenceInTeamCalendar?: NoYes | null;
  /**
   * Show Only Absence In Company Calendar.
   * @nullable
   */
  declare showOnlyAbsenceInCompanyCalendar?: NoYes | null;
  /**
   * Calendar Show Worker Type Absence Manager.
   * @nullable
   */
  declare calendarShowWorkerTypeAbsenceManager?: HcmWorkerRelationType | null;
  /**
   * Leave Amount Unit.
   * @nullable
   */
  declare leaveAmountUnit?: LeaveAmountUnit | null;
  /**
   * Show Leave Of Absence In Team Calendar.
   * @nullable
   */
  declare showLeaveOfAbsenceInTeamCalendar?: NoYes | null;
  /**
   * Calendar Leave Requested Color.
   */
  declare calendarLeaveRequestedColor: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Calendar Current Sick Color.
   */
  declare calendarCurrentSickColor: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Leave Months Of Service Calculation Option.
   * @nullable
   */
  declare leaveMonthsOfServiceCalculationOption?: LeaveMonthsOfServiceCalculationOption | null;
  /**
   * Enable Return To Work Notice.
   * @nullable
   */
  declare enableReturnToWorkNotice?: NoYes | null;
  /**
   * Show Birthday In Company Calendar.
   * @nullable
   */
  declare showBirthdayInCompanyCalendar?: NoYes | null;
  /**
   * Show Pending Leave In Company Calendar.
   * @nullable
   */
  declare showPendingLeaveInCompanyCalendar?: NoYes | null;
  /**
   * Sick Leave Half Day.
   * @nullable
   */
  declare sickLeaveHalfDay?: NoYes | null;
  /**
   * Calendar Show Worker Type Global.
   * @nullable
   */
  declare calendarShowWorkerTypeGlobal?: HcmWorkerRelationType | null;
  /**
   * Enable Buy Leave Policy.
   * @nullable
   */
  declare enableBuyLeavePolicy?: NoYes | null;
  /**
   * Email Template Id.
   * @nullable
   */
  declare emailTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calendar Leave Disable.
   * @nullable
   */
  declare calendarLeaveDisable?: NoYes | null;
  /**
   * Show Birthday In Manager Calendar.
   * @nullable
   */
  declare showBirthdayInManagerCalendar?: NoYes | null;
  /**
   * Calendar Sick Leave Disable.
   * @nullable
   */
  declare calendarSickLeaveDisable?: NoYes | null;
  /**
   * Show Leave Of Absence In Manager Calendar.
   * @nullable
   */
  declare showLeaveOfAbsenceInManagerCalendar?: NoYes | null;
  /**
   * Leave Num Of Days Before Upload.
   */
  declare leaveNumOfDaysBeforeUpload: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Show Pending Leave In Absence Coordinator Calendar.
   * @nullable
   */
  declare showPendingLeaveInAbsenceCoordinatorCalendar?: NoYes | null;
  /**
   * Allow Manager Sick Leave Indirect.
   * @nullable
   */
  declare allowManagerSickLeaveIndirect?: NoYes | null;
  /**
   * Show Sick Leave In Company Calendar.
   * @nullable
   */
  declare showSickLeaveInCompanyCalendar?: NoYes | null;
  /**
   * Enable Half Day Definition.
   * @nullable
   */
  declare enableHalfDayDefinition?: NoYes | null;
  /**
   * Show Only Absence In Manager Calendar.
   * @nullable
   */
  declare showOnlyAbsenceInManagerCalendar?: NoYes | null;
  /**
   * Absence Hierarchy Type.
   */
  declare absenceHierarchyType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Disclosure Guidance.
   * @nullable
   */
  declare disclosureGuidance?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enable Workflow For Sick Leave Notice.
   * @nullable
   */
  declare enableWorkflowForSickLeaveNotice?: NoYes | null;
  /**
   * Enable Sell Leave Policy.
   * @nullable
   */
  declare enableSellLeavePolicy?: NoYes | null;
  /**
   * Mandatory End Date For Sick Leave.
   * @nullable
   */
  declare mandatoryEndDateForSickLeave?: NoYes | null;
  /**
   * End Date Of Sick Leave.
   * @nullable
   */
  declare endDateOfSickLeave?: NoYes | null;
  /**
   * Show Pending Leave In Team Calendar.
   * @nullable
   */
  declare showPendingLeaveInTeamCalendar?: NoYes | null;
  /**
   * Leave Calculation Change.
   * @nullable
   */
  declare leaveCalculationChange?: NoYes | null;
  /**
   * Enable Disclosure Guidance.
   * @nullable
   */
  declare enableDisclosureGuidance?: NoYes | null;
  /**
   * Show Birthday In Team Calendar.
   * @nullable
   */
  declare showBirthdayInTeamCalendar?: NoYes | null;
  /**
   * Show Leave Of Absence In Company Calendar.
   * @nullable
   */
  declare showLeaveOfAbsenceInCompanyCalendar?: NoYes | null;
  /**
   * Calendar Show Worker Type Manager.
   * @nullable
   */
  declare calendarShowWorkerTypeManager?: HcmWorkerRelationType | null;
  /**
   * Show Only Absence In Absence Coordinator Calendar.
   * @nullable
   */
  declare showOnlyAbsenceInAbsenceCoordinatorCalendar?: NoYes | null;
  /**
   * Mss Leave And Absence Request Enabled.
   * @nullable
   */
  declare mssLeaveAndAbsenceRequestEnabled?: NoYes | null;

  constructor(_entityApi: LeaveAbsenceParametersApi<T>) {
    super(_entityApi);
  }
}

export interface LeaveAbsenceParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  showBirthdayInAbsenceCoordinatorCalendar?: NoYes | null;
  showLeaveOfAbsenceInAbsenceCalendar?: NoYes | null;
  calendarSickLeaveColor: DeserializedType<T, 'Edm.Int32'>;
  calendarLeaveApprovedColor: DeserializedType<T, 'Edm.Int32'>;
  calendarShowWorkerTypeAbsenceCoordinator?: HcmWorkerRelationType | null;
  leaveBalanceCalculationOption?: LeaveBalanceCalculationOption | null;
  leaveBalanceExpirationBatchStartTime: DeserializedType<T, 'Edm.Int32'>;
  showPendingLeaveInManagerCalendar?: NoYes | null;
  showOnlyAbsenceInTeamCalendar?: NoYes | null;
  showOnlyAbsenceInCompanyCalendar?: NoYes | null;
  calendarShowWorkerTypeAbsenceManager?: HcmWorkerRelationType | null;
  leaveAmountUnit?: LeaveAmountUnit | null;
  showLeaveOfAbsenceInTeamCalendar?: NoYes | null;
  calendarLeaveRequestedColor: DeserializedType<T, 'Edm.Int32'>;
  calendarCurrentSickColor: DeserializedType<T, 'Edm.Int32'>;
  leaveMonthsOfServiceCalculationOption?: LeaveMonthsOfServiceCalculationOption | null;
  enableReturnToWorkNotice?: NoYes | null;
  showBirthdayInCompanyCalendar?: NoYes | null;
  showPendingLeaveInCompanyCalendar?: NoYes | null;
  sickLeaveHalfDay?: NoYes | null;
  calendarShowWorkerTypeGlobal?: HcmWorkerRelationType | null;
  enableBuyLeavePolicy?: NoYes | null;
  emailTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  calendarLeaveDisable?: NoYes | null;
  showBirthdayInManagerCalendar?: NoYes | null;
  calendarSickLeaveDisable?: NoYes | null;
  showLeaveOfAbsenceInManagerCalendar?: NoYes | null;
  leaveNumOfDaysBeforeUpload: DeserializedType<T, 'Edm.Int32'>;
  showPendingLeaveInAbsenceCoordinatorCalendar?: NoYes | null;
  allowManagerSickLeaveIndirect?: NoYes | null;
  showSickLeaveInCompanyCalendar?: NoYes | null;
  enableHalfDayDefinition?: NoYes | null;
  showOnlyAbsenceInManagerCalendar?: NoYes | null;
  absenceHierarchyType: DeserializedType<T, 'Edm.Int64'>;
  disclosureGuidance?: DeserializedType<T, 'Edm.String'> | null;
  enableWorkflowForSickLeaveNotice?: NoYes | null;
  enableSellLeavePolicy?: NoYes | null;
  mandatoryEndDateForSickLeave?: NoYes | null;
  endDateOfSickLeave?: NoYes | null;
  showPendingLeaveInTeamCalendar?: NoYes | null;
  leaveCalculationChange?: NoYes | null;
  enableDisclosureGuidance?: NoYes | null;
  showBirthdayInTeamCalendar?: NoYes | null;
  showLeaveOfAbsenceInCompanyCalendar?: NoYes | null;
  calendarShowWorkerTypeManager?: HcmWorkerRelationType | null;
  showOnlyAbsenceInAbsenceCoordinatorCalendar?: NoYes | null;
  mssLeaveAndAbsenceRequestEnabled?: NoYes | null;
}
