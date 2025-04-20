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
import type { TimeAndAttendanceActivityRegistrationsApi } from './TimeAndAttendanceActivityRegistrationsApi';
import { NoYes } from './NoYes';
import { JmgStampTypeSpecEnum } from './JmgStampTypeSpecEnum';
import { JmgStampTypeEnum } from './JmgStampTypeEnum';
import { JmgJournalRegWorkflowStatus } from './JmgJournalRegWorkflowStatus';
import { RouteJobType } from './RouteJobType';
import { JmgJobPayTypeEnum } from './JmgJobPayTypeEnum';
import { JmgJobTypeEnum } from './JmgJobTypeEnum';
import { JmgJobRefTypeEnum } from './JmgJobRefTypeEnum';
import { JmgJourRegTypeEnum } from './JmgJourRegTypeEnum';
import { ProdErrorCause } from './ProdErrorCause';
import { Workers, WorkersType } from './Workers';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "TimeAndAttendanceActivityRegistrations" of service "d365_metadata".
 */
export class TimeAndAttendanceActivityRegistrations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TimeAndAttendanceActivityRegistrationsType<T>
{
  /**
   * Technical entity name for TimeAndAttendanceActivityRegistrations.
   */
  static override _entityName = 'TimeAndAttendanceActivityRegistrations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TimeAndAttendanceActivityRegistrations entity.
   */
  static _keys = [
    'dataAreaId',
    'WorkerPersonnelNumber',
    'TimeProfileDate',
    'ActivityRegistrationEntryNumber'
  ];
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
   * Activity Registration Entry Number.
   */
  declare activityRegistrationEntryNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Operations Resource Id.
   * @nullable
   */
  declare operationsResourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Corrected Start Time.
   */
  declare correctedStartTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Job Finished.
   * @nullable
   */
  declare isJobFinished?: NoYes | null;
  /**
   * Registration Sub Type.
   * @nullable
   */
  declare registrationSubType?: JmgStampTypeSpecEnum | null;
  /**
   * Reported Error Quantity.
   */
  declare reportedErrorQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Break Tolerance Seconds.
   */
  declare breakToleranceSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * On Call Time And Attendance Job Id.
   * @nullable
   */
  declare onCallTimeAndAttendanceJobId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Registration Type.
   * @nullable
   */
  declare registrationType?: JmgStampTypeEnum | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Stop Registration Terminal Id.
   * @nullable
   */
  declare stopRegistrationTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculated Time After Allocation Seconds.
   */
  declare calculatedTimeAfterAllocationSeconds: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Error Log Text.
   * @nullable
   */
  declare errorLogText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Absence Code Time And Attendance Job Id.
   * @nullable
   */
  declare absenceCodeTimeAndAttendanceJobId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Reported Good Catch Weight Quantity.
   */
  declare reportedGoodCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Workflow Status.
   * @nullable
   */
  declare workflowStatus?: JmgJournalRegWorkflowStatus | null;
  /**
   * Started Quantity.
   */
  declare startedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Production Order Number.
   * @nullable
   */
  declare productionOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Route Job Type.
   * @nullable
   */
  declare routeJobType?: RouteJobType | null;
  /**
   * Activity Registration Transaction Id.
   * @nullable
   */
  declare activityRegistrationTransactionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Project Category Id.
   * @nullable
   */
  declare projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Pay Rate Method.
   * @nullable
   */
  declare jobPayRateMethod?: JmgJobPayTypeEnum | null;
  /**
   * Reported Error Catch Weight Quantity.
   */
  declare reportedErrorCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Absence Pay Units.
   */
  declare absencePayUnits: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Corrected End Time.
   */
  declare correctedEndTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Start Time.
   */
  declare startTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Start Registration Terminal Id.
   * @nullable
   */
  declare startRegistrationTerminalId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Corrected End Date.
   */
  declare correctedEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pilot Personnel Number.
   * @nullable
   */
  declare pilotPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Break Seconds.
   */
  declare breakSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Time Allocation Type.
   * @nullable
   */
  declare timeAllocationType?: JmgJobTypeEnum | null;
  /**
   * Time And Attendance Job Id.
   * @nullable
   */
  declare timeAndAttendanceJobId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indirect Activity Name.
   * @nullable
   */
  declare indirectActivityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Type.
   * @nullable
   */
  declare activityType?: JmgJobRefTypeEnum | null;
  /**
   * Calculated Time Seconds.
   */
  declare calculatedTimeSeconds: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Error Specification.
   * @nullable
   */
  declare errorSpecification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Stop Time.
   */
  declare endStopTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Work In Progress.
   * @nullable
   */
  declare isWorkInProgress?: NoYes | null;
  /**
   * Indirect Activity Category Id.
   * @nullable
   */
  declare indirectActivityCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Registration Type.
   * @nullable
   */
  declare journalRegistrationType?: JmgJourRegTypeEnum | null;
  /**
   * Corrected Start Date.
   */
  declare correctedStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Error Cause.
   * @nullable
   */
  declare errorCause?: ProdErrorCause | null;
  /**
   * Reported Good Quantity.
   */
  declare reportedGoodQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Calculated Time Before Allocation Seconds.
   */
  declare calculatedTimeBeforeAllocationSeconds: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Operation Number.
   */
  declare operationNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Operations Resource Pilot Id.
   * @nullable
   */
  declare operationsResourcePilotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Started Catch Weight Quantity.
   */
  declare startedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: TimeAndAttendanceActivityRegistrationsApi<T>) {
    super(_entityApi);
  }
}

export interface TimeAndAttendanceActivityRegistrationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  timeProfileDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  activityRegistrationEntryNumber: DeserializedType<T, 'Edm.Int64'>;
  operationsResourceId?: DeserializedType<T, 'Edm.String'> | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  correctedStartTime: DeserializedType<T, 'Edm.Int32'>;
  isJobFinished?: NoYes | null;
  registrationSubType?: JmgStampTypeSpecEnum | null;
  reportedErrorQuantity: DeserializedType<T, 'Edm.Decimal'>;
  breakToleranceSeconds: DeserializedType<T, 'Edm.Int32'>;
  onCallTimeAndAttendanceJobId?: DeserializedType<T, 'Edm.String'> | null;
  registrationType?: JmgStampTypeEnum | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  stopRegistrationTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  calculatedTimeAfterAllocationSeconds: DeserializedType<T, 'Edm.Int32'>;
  errorLogText?: DeserializedType<T, 'Edm.String'> | null;
  absenceCodeTimeAndAttendanceJobId?: DeserializedType<T, 'Edm.String'> | null;
  reportedGoodCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  workflowStatus?: JmgJournalRegWorkflowStatus | null;
  startedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productionOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  routeJobType?: RouteJobType | null;
  activityRegistrationTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  jobPayRateMethod?: JmgJobPayTypeEnum | null;
  reportedErrorCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  absencePayUnits: DeserializedType<T, 'Edm.Decimal'>;
  correctedEndTime: DeserializedType<T, 'Edm.Int32'>;
  startTime: DeserializedType<T, 'Edm.Int32'>;
  startRegistrationTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  correctedEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  pilotPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  breakSeconds: DeserializedType<T, 'Edm.Int32'>;
  timeAllocationType?: JmgJobTypeEnum | null;
  timeAndAttendanceJobId?: DeserializedType<T, 'Edm.String'> | null;
  indirectActivityName?: DeserializedType<T, 'Edm.String'> | null;
  activityType?: JmgJobRefTypeEnum | null;
  calculatedTimeSeconds: DeserializedType<T, 'Edm.Int32'>;
  errorSpecification?: DeserializedType<T, 'Edm.String'> | null;
  endStopTime: DeserializedType<T, 'Edm.Int32'>;
  isWorkInProgress?: NoYes | null;
  indirectActivityCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  journalRegistrationType?: JmgJourRegTypeEnum | null;
  correctedStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  errorCause?: ProdErrorCause | null;
  reportedGoodQuantity: DeserializedType<T, 'Edm.Decimal'>;
  calculatedTimeBeforeAllocationSeconds: DeserializedType<T, 'Edm.Int32'>;
  operationNumber: DeserializedType<T, 'Edm.Int32'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  operationsResourcePilotId?: DeserializedType<T, 'Edm.String'> | null;
  startedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  worker?: WorkersType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
