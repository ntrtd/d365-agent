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
import type { TimeAndAttendanceTimeRegistrationWorkersApi } from './TimeAndAttendanceTimeRegistrationWorkersApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "TimeAndAttendanceTimeRegistrationWorkers" of service "d365_metadata".
 */
export class TimeAndAttendanceTimeRegistrationWorkers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TimeAndAttendanceTimeRegistrationWorkersType<T>
{
  /**
   * Technical entity name for TimeAndAttendanceTimeRegistrationWorkers.
   */
  static override _entityName = 'TimeAndAttendanceTimeRegistrationWorkers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TimeAndAttendanceTimeRegistrationWorkers entity.
   */
  static _keys = ['dataAreaId', 'ApproverPersonnelNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Approver Personnel Number.
   */
  declare approverPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Seniority Date.
   */
  declare seniorityDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Worker Badge Id.
   * @nullable
   */
  declare workerBadgeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time And Attendance Approval Group Id.
   * @nullable
   */
  declare timeAndAttendanceApprovalGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Worker Activation Date.
   */
  declare workerActivationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Project Period Id.
   * @nullable
   */
  declare projectPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time And Attendance Profile Group Id.
   * @nullable
   */
  declare timeAndAttendanceProfileGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Opening Flex Balance Seconds.
   */
  declare openingFlexBalanceSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Time And Attendance Calculation Group Id.
   * @nullable
   */
  declare timeAndAttendanceCalculationGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Worker Badge Version.
   * @nullable
   */
  declare workerBadgeVersion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Card Terminal Configuration Id.
   * @nullable
   */
  declare jobCardTerminalConfigurationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Time And Attendance Flex Group Id.
   * @nullable
   */
  declare timeAndAttendanceFlexGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Time And Attedance Calculation Group Id.
   * @nullable
   */
  declare defaultTimeAndAttedanceCalculationGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Flex Time Allowed.
   * @nullable
   */
  declare isFlexTimeAllowed?: NoYes | null;
  /**
   * Project Category Id.
   * @nullable
   */
  declare projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Standard Time Profile Id.
   * @nullable
   */
  declare standardTimeProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Agreement Code.
   * @nullable
   */
  declare payAgreementCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;
  /**
   * Can Bundle New Jobs.
   * @nullable
   */
  declare canBundleNewJobs?: NoYes | null;
  /**
   * Can Use Electronic Timecard.
   * @nullable
   */
  declare canUseElectronicTimecard?: NoYes | null;
  /**
   * Has Supervisor Options.
   * @nullable
   */
  declare hasSupervisorOptions?: NoYes | null;

  constructor(_entityApi: TimeAndAttendanceTimeRegistrationWorkersApi<T>) {
    super(_entityApi);
  }
}

export interface TimeAndAttendanceTimeRegistrationWorkersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  approverPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  seniorityDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerBadgeId?: DeserializedType<T, 'Edm.String'> | null;
  timeAndAttendanceApprovalGroupId?: DeserializedType<T, 'Edm.String'> | null;
  workerActivationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projectPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  timeAndAttendanceProfileGroupId?: DeserializedType<T, 'Edm.String'> | null;
  openingFlexBalanceSeconds: DeserializedType<T, 'Edm.Int32'>;
  timeAndAttendanceCalculationGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  workerBadgeVersion?: DeserializedType<T, 'Edm.String'> | null;
  jobCardTerminalConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  timeAndAttendanceFlexGroupId?: DeserializedType<T, 'Edm.String'> | null;
  defaultTimeAndAttedanceCalculationGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  isFlexTimeAllowed?: NoYes | null;
  projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  standardTimeProfileId?: DeserializedType<T, 'Edm.String'> | null;
  payAgreementCode?: DeserializedType<T, 'Edm.String'> | null;
  isActive?: NoYes | null;
  canBundleNewJobs?: NoYes | null;
  canUseElectronicTimecard?: NoYes | null;
  hasSupervisorOptions?: NoYes | null;
}
