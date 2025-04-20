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
import type { PositionTimelinesApi } from './PositionTimelinesApi';
import { JobFunctions, JobFunctionsType } from './JobFunctions';

/**
 * This class represents the entity "PositionTimelines" of service "d365_metadata".
 */
export class PositionTimelines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PositionTimelinesType<T>
{
  /**
   * Technical entity name for PositionTimelines.
   */
  static override _entityName = 'PositionTimelines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PositionTimelines entity.
   */
  static _keys = ['PositionId'];
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Paid By Legal Entity Id.
   * @nullable
   */
  declare paidByLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Position Detail Valid From.
   */
  declare positionDetailValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Position Modified Date Time.
   */
  declare positionModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Position Created By.
   * @nullable
   */
  declare positionCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Position Detail Created By.
   * @nullable
   */
  declare positionDetailCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Market Control Pay.
   */
  declare marketControlPay: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Position Created Date Time.
   */
  declare positionCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reason Code Id.
   * @nullable
   */
  declare reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Position Worker Assignment Modified Date Time.
   */
  declare positionWorkerAssignmentModifiedDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Department Number.
   * @nullable
   */
  declare departmentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Detail Created By.
   * @nullable
   */
  declare jobDetailCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Type Id.
   * @nullable
   */
  declare jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Position Worker Assignment Created By.
   * @nullable
   */
  declare positionWorkerAssignmentCreatedBy?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Title Id.
   * @nullable
   */
  declare titleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Function Id.
   * @nullable
   */
  declare jobFunctionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Full Time Equivalency.
   */
  declare fullTimeEquivalency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Position Worker Assignment Created Date Time.
   */
  declare positionWorkerAssignmentCreatedDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Position Worker Assignment Valid From.
   */
  declare positionWorkerAssignmentValidFrom: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Payroll Position Details Valid From.
   */
  declare payrollPositionDetailsValidFrom: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Pay Cycle Id.
   * @nullable
   */
  declare payCycleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Position Detail Modified Date Time.
   */
  declare positionDetailModifiedDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Market Minimum Pay.
   */
  declare marketMinimumPay: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Survey Company Id.
   * @nullable
   */
  declare surveyCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Survey Code.
   * @nullable
   */
  declare externalSurveyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Detail Modified Date Time.
   */
  declare jobDetailModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Market Maximum Pay.
   */
  declare marketMaximumPay: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payroll Position Details Valid To.
   */
  declare payrollPositionDetailsValidTo: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Position Detail Modified By.
   * @nullable
   */
  declare positionDetailModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Market Source.
   * @nullable
   */
  declare marketSource?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Position Modified By.
   * @nullable
   */
  declare positionModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Detail Valid From.
   */
  declare jobDetailValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Position Detail Valid To.
   */
  declare positionDetailValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Job Id.
   * @nullable
   */
  declare jobId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Detail Created Date Time.
   */
  declare jobDetailCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Available For Assignment.
   */
  declare availableForAssignment: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Position Worker Assignment Modified By.
   * @nullable
   */
  declare positionWorkerAssignmentModifiedBy?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Position Detail Created Date Time.
   */
  declare positionDetailCreatedDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Full Time Equivalency.
   */
  declare defaultFullTimeEquivalency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Compensation Level Id.
   * @nullable
   */
  declare compensationLevelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comp Location Id.
   * @nullable
   */
  declare compLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Position Type Id.
   * @nullable
   */
  declare positionTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Position Worker Assignment Valid To.
   */
  declare positionWorkerAssignmentValidTo: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Job Detail Valid To.
   */
  declare jobDetailValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Job Detail Description.
   * @nullable
   */
  declare jobDetailDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Detail Modified By.
   * @nullable
   */
  declare jobDetailModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payroll Normal Hours.
   */
  declare payrollNormalHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link JobFunctions} entity.
   */
  declare jobFunction?: JobFunctions<T> | null;

  constructor(_entityApi: PositionTimelinesApi<T>) {
    super(_entityApi);
  }
}

export interface PositionTimelinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  positionId: DeserializedType<T, 'Edm.String'>;
  paidByLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  positionDetailValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  positionModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  positionCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  positionDetailCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  marketControlPay: DeserializedType<T, 'Edm.Decimal'>;
  positionCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  positionWorkerAssignmentModifiedDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  departmentNumber?: DeserializedType<T, 'Edm.String'> | null;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  jobDetailCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  positionWorkerAssignmentCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  titleId?: DeserializedType<T, 'Edm.String'> | null;
  jobFunctionId?: DeserializedType<T, 'Edm.String'> | null;
  fullTimeEquivalency: DeserializedType<T, 'Edm.Decimal'>;
  positionWorkerAssignmentCreatedDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  positionWorkerAssignmentValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payrollPositionDetailsValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payCycleId?: DeserializedType<T, 'Edm.String'> | null;
  positionDetailModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  marketMinimumPay: DeserializedType<T, 'Edm.Decimal'>;
  surveyCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  externalSurveyCode?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  jobDetailModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  marketMaximumPay: DeserializedType<T, 'Edm.Decimal'>;
  payrollPositionDetailsValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  positionDetailModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  marketSource?: DeserializedType<T, 'Edm.String'> | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  positionModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  jobDetailValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  positionDetailValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  jobId?: DeserializedType<T, 'Edm.String'> | null;
  jobDetailCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  availableForAssignment: DeserializedType<T, 'Edm.DateTimeOffset'>;
  positionWorkerAssignmentModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  positionDetailCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  note?: DeserializedType<T, 'Edm.String'> | null;
  defaultFullTimeEquivalency: DeserializedType<T, 'Edm.Decimal'>;
  compensationLevelId?: DeserializedType<T, 'Edm.String'> | null;
  compLocationId?: DeserializedType<T, 'Edm.String'> | null;
  positionTypeId?: DeserializedType<T, 'Edm.String'> | null;
  positionWorkerAssignmentValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  jobDetailValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  jobDetailDescription?: DeserializedType<T, 'Edm.String'> | null;
  jobDetailModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  payrollNormalHours: DeserializedType<T, 'Edm.Decimal'>;
  jobFunction?: JobFunctionsType<T> | null;
}
