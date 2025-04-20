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
import type { TimeAndAttendanceTimeActivityRegistrationCalculationsApi } from './TimeAndAttendanceTimeActivityRegistrationCalculationsApi';
import { NoYes } from './NoYes';
import { JmgDaysTotalWorkflowStatus } from './JmgDaysTotalWorkflowStatus';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "TimeAndAttendanceTimeActivityRegistrationCalculations" of service "d365_metadata".
 */
export class TimeAndAttendanceTimeActivityRegistrationCalculations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TimeAndAttendanceTimeActivityRegistrationCalculationsType<T>
{
  /**
   * Technical entity name for TimeAndAttendanceTimeActivityRegistrationCalculations.
   */
  static override _entityName =
    'TimeAndAttendanceTimeActivityRegistrationCalculations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TimeAndAttendanceTimeActivityRegistrationCalculations entity.
   */
  static _keys = ['dataAreaId', 'WorkerPersonnelNumber', 'TimeProfileDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Worker Personnel Number.
   */
  declare workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Time Profile Date.
   */
  declare timeProfileDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Total Work Seconds.
   */
  declare totalWorkSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Time Profile Norm Flex Time Seconds.
   */
  declare timeProfileNormFlexTimeSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Error Log Text.
   * @nullable
   */
  declare errorLogText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approver Personnel Number.
   * @nullable
   */
  declare approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Time Profile Changed.
   * @nullable
   */
  declare isTimeProfileChanged?: NoYes | null;
  /**
   * Transferrer Peronnel Number.
   * @nullable
   */
  declare transferrerPeronnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Start Date.
   */
  declare workStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Has Errors.
   * @nullable
   */
  declare hasErrors?: NoYes | null;
  /**
   * Time Profile Start Time.
   */
  declare timeProfileStartTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Total Work Seconds Not Allocated.
   */
  declare totalWorkSecondsNotAllocated: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Pay End Time.
   */
  declare payEndTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Total Pay Absence Seconds.
   */
  declare totalPayAbsenceSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Transferred.
   * @nullable
   */
  declare isTransferred?: NoYes | null;
  /**
   * Work End Time.
   */
  declare workEndTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Work End Date.
   */
  declare workEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Time Profile Seconds.
   */
  declare timeProfileSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Calculator Personnel Number.
   * @nullable
   */
  declare calculatorPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time And Attendance Approval Group Id.
   * @nullable
   */
  declare timeAndAttendanceApprovalGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Total Pay Flex Time Correction Seconds.
   */
  declare totalPayFlexTimeCorrectionSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Total Pay Flex Time Sub Seconds.
   */
  declare totalPayFlexTimeSubSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Pay Agreement Id.
   * @nullable
   */
  declare payAgreementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time And Attendance Calculation Group Id.
   * @nullable
   */
  declare timeAndAttendanceCalculationGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Time Profile Norm Seconds.
   */
  declare timeProfileNormSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Time Profile Id.
   * @nullable
   */
  declare timeProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Profile End Time.
   */
  declare timeProfileEndTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Clock In Tolerance Dropped.
   * @nullable
   */
  declare isClockInToleranceDropped?: NoYes | null;
  /**
   * Total Pay Flex Time Add Seconds.
   */
  declare totalPayFlexTimeAddSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Total Paid Break Seconds.
   */
  declare totalPaidBreakSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Time Profile Start Date.
   */
  declare timeProfileStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Total Pay Seconds.
   */
  declare totalPaySeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Total Pay Flex Time Balance Seconds.
   */
  declare totalPayFlexTimeBalanceSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Total Non Paid Break Seconds.
   */
  declare totalNonPaidBreakSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Clock Out Tolerance Dropped.
   * @nullable
   */
  declare isClockOutToleranceDropped?: NoYes | null;
  /**
   * Work Start Time.
   */
  declare workStartTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Total Pay Over Time Seconds.
   */
  declare totalPayOverTimeSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Flex Time Allowed.
   * @nullable
   */
  declare isFlexTimeAllowed?: NoYes | null;
  /**
   * Time Profile End Date.
   */
  declare timeProfileEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pay Start Date.
   */
  declare payStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Total Pay Legal Absence Seconds.
   */
  declare totalPayLegalAbsenceSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Workflow Status.
   * @nullable
   */
  declare workflowStatus?: JmgDaysTotalWorkflowStatus | null;
  /**
   * Pay End Date.
   */
  declare payEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pay Start Time.
   */
  declare payStartTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Calculated.
   * @nullable
   */
  declare isCalculated?: NoYes | null;
  /**
   * Total Pay Illegal Absence Seconds.
   */
  declare totalPayIllegalAbsenceSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Approved.
   * @nullable
   */
  declare isApproved?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(
    _entityApi: TimeAndAttendanceTimeActivityRegistrationCalculationsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface TimeAndAttendanceTimeActivityRegistrationCalculationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  timeProfileDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  totalWorkSeconds: DeserializedType<T, 'Edm.Int32'>;
  timeProfileNormFlexTimeSeconds: DeserializedType<T, 'Edm.Int32'>;
  errorLogText?: DeserializedType<T, 'Edm.String'> | null;
  approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  isTimeProfileChanged?: NoYes | null;
  transferrerPeronnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  workStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  hasErrors?: NoYes | null;
  timeProfileStartTime: DeserializedType<T, 'Edm.Int32'>;
  totalWorkSecondsNotAllocated: DeserializedType<T, 'Edm.Int32'>;
  payEndTime: DeserializedType<T, 'Edm.Int32'>;
  totalPayAbsenceSeconds: DeserializedType<T, 'Edm.Int32'>;
  isTransferred?: NoYes | null;
  workEndTime: DeserializedType<T, 'Edm.Int32'>;
  workEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  timeProfileSeconds: DeserializedType<T, 'Edm.Int32'>;
  calculatorPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  timeAndAttendanceApprovalGroupId?: DeserializedType<T, 'Edm.String'> | null;
  totalPayFlexTimeCorrectionSeconds: DeserializedType<T, 'Edm.Int32'>;
  totalPayFlexTimeSubSeconds: DeserializedType<T, 'Edm.Int32'>;
  payAgreementId?: DeserializedType<T, 'Edm.String'> | null;
  timeAndAttendanceCalculationGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  timeProfileNormSeconds: DeserializedType<T, 'Edm.Int32'>;
  timeProfileId?: DeserializedType<T, 'Edm.String'> | null;
  timeProfileEndTime: DeserializedType<T, 'Edm.Int32'>;
  isClockInToleranceDropped?: NoYes | null;
  totalPayFlexTimeAddSeconds: DeserializedType<T, 'Edm.Int32'>;
  totalPaidBreakSeconds: DeserializedType<T, 'Edm.Int32'>;
  timeProfileStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  totalPaySeconds: DeserializedType<T, 'Edm.Int32'>;
  totalPayFlexTimeBalanceSeconds: DeserializedType<T, 'Edm.Int32'>;
  totalNonPaidBreakSeconds: DeserializedType<T, 'Edm.Int32'>;
  isClockOutToleranceDropped?: NoYes | null;
  workStartTime: DeserializedType<T, 'Edm.Int32'>;
  totalPayOverTimeSeconds: DeserializedType<T, 'Edm.Int32'>;
  isFlexTimeAllowed?: NoYes | null;
  timeProfileEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  totalPayLegalAbsenceSeconds: DeserializedType<T, 'Edm.Int32'>;
  workflowStatus?: JmgDaysTotalWorkflowStatus | null;
  payEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payStartTime: DeserializedType<T, 'Edm.Int32'>;
  isCalculated?: NoYes | null;
  totalPayIllegalAbsenceSeconds: DeserializedType<T, 'Edm.Int32'>;
  isApproved?: NoYes | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
