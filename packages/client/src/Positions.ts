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
import type { PositionsApi } from './PositionsApi';
import { NoYes } from './NoYes';
import {
  LaborUnionAgreements,
  LaborUnionAgreementsType
} from './LaborUnionAgreements';
import { PayCycles, PayCyclesType } from './PayCycles';
import { Titles, TitlesType } from './Titles';
import { Departments, DepartmentsType } from './Departments';
import { Jobs, JobsType } from './Jobs';
import {
  CompensationRegions,
  CompensationRegionsType
} from './CompensationRegions';
import { ReasonCodes, ReasonCodesType } from './ReasonCodes';
import { PositionTypes, PositionTypesType } from './PositionTypes';
import { Workers, WorkersType } from './Workers';
import { Benefits, BenefitsType } from './Benefits';

/**
 * This class represents the entity "Positions" of service "d365_metadata".
 */
export class Positions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PositionsType<T>
{
  /**
   * Technical entity name for Positions.
   */
  static override _entityName = 'Positions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Positions entity.
   */
  static _keys = ['PositionId'];
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Detail Effective.
   */
  declare detailEffective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Position Type Id.
   * @nullable
   */
  declare positionTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Cycle Id.
   * @nullable
   */
  declare payCycleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Union Agreement Effective.
   */
  declare unionAgreementEffective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Labor Union Id.
   * @nullable
   */
  declare laborUnionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payroll Detail Effective.
   */
  declare payrollDetailEffective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Retirement.
   */
  declare retirement: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Department Number.
   * @nullable
   */
  declare departmentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Id.
   * @nullable
   */
  declare jobId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Annual Regular Hours.
   */
  declare annualRegularHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Primary Position.
   * @nullable
   */
  declare isPrimaryPosition?: NoYes | null;
  /**
   * Full Time Equivalent.
   */
  declare fullTimeEquivalent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Worker Assignment End.
   */
  declare workerAssignmentEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Detail Expiration.
   */
  declare detailExpiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Worker Name.
   * @nullable
   */
  declare workerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Union Agreement Legal Entity.
   * @nullable
   */
  declare unionAgreementLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activation.
   */
  declare activation: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Worker Personnel Number.
   * @nullable
   */
  declare workerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Assignment Reason Code Id.
   * @nullable
   */
  declare workerAssignmentReasonCodeId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Title Id.
   * @nullable
   */
  declare titleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Assignment Start.
   */
  declare workerAssignmentStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Available For Assignment.
   */
  declare availableForAssignment: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reports To Expiration.
   */
  declare reportsToExpiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reports To Position Id.
   * @nullable
   */
  declare reportsToPositionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payroll Detail Expiration.
   */
  declare payrollDetailExpiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Paid By Legal Entity.
   * @nullable
   */
  declare paidByLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reports To Effective.
   */
  declare reportsToEffective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Compensation Region Id.
   * @nullable
   */
  declare compensationRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Union Agreement Expiration.
   */
  declare unionAgreementExpiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Union Agreement Name.
   * @nullable
   */
  declare unionAgreementName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Period Overtime Hours.
   */
  declare payPeriodOvertimeHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Salary Generated.
   * @nullable
   */
  declare isSalaryGenerated?: NoYes | null;
  /**
   * Schedule.
   * @nullable
   */
  declare schedule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Benefit Id.
   * @nullable
   */
  declare benefitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Are Earnings Generated From Schedule.
   * @nullable
   */
  declare areEarningsGeneratedFromSchedule?: NoYes | null;
  /**
   * Default Earning Code Id.
   * @nullable
   */
  declare defaultEarningCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link LaborUnionAgreements} entity.
   */
  declare laborUnionAgreement?: LaborUnionAgreements<T> | null;
  /**
   * One-to-one navigation property to the {@link PayCycles} entity.
   */
  declare payrollPayCycle?: PayCycles<T> | null;
  /**
   * One-to-one navigation property to the {@link Titles} entity.
   */
  declare title?: Titles<T> | null;
  /**
   * One-to-one navigation property to the {@link Departments} entity.
   */
  declare department?: Departments<T> | null;
  /**
   * One-to-one navigation property to the {@link Jobs} entity.
   */
  declare job?: Jobs<T> | null;
  /**
   * One-to-one navigation property to the {@link CompensationRegions} entity.
   */
  declare compensationRegion?: CompensationRegions<T> | null;
  /**
   * One-to-one navigation property to the {@link ReasonCodes} entity.
   */
  declare reasonCode?: ReasonCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link PositionTypes} entity.
   */
  declare positionType?: PositionTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link Benefits} entity.
   */
  declare benefit?: Benefits<T> | null;

  constructor(_entityApi: PositionsApi<T>) {
    super(_entityApi);
  }
}

export interface PositionsType<T extends DeSerializers = DefaultDeSerializers> {
  positionId: DeserializedType<T, 'Edm.String'>;
  detailEffective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  positionTypeId?: DeserializedType<T, 'Edm.String'> | null;
  payCycleId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  unionAgreementEffective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  laborUnionId?: DeserializedType<T, 'Edm.String'> | null;
  payrollDetailEffective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  retirement: DeserializedType<T, 'Edm.DateTimeOffset'>;
  departmentNumber?: DeserializedType<T, 'Edm.String'> | null;
  jobId?: DeserializedType<T, 'Edm.String'> | null;
  annualRegularHours: DeserializedType<T, 'Edm.Decimal'>;
  isPrimaryPosition?: NoYes | null;
  fullTimeEquivalent: DeserializedType<T, 'Edm.Decimal'>;
  workerAssignmentEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  detailExpiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerName?: DeserializedType<T, 'Edm.String'> | null;
  unionAgreementLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  activation: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  workerAssignmentReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  titleId?: DeserializedType<T, 'Edm.String'> | null;
  workerAssignmentStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  availableForAssignment: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reportsToExpiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reportsToPositionId?: DeserializedType<T, 'Edm.String'> | null;
  payrollDetailExpiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  paidByLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  reportsToEffective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  compensationRegionId?: DeserializedType<T, 'Edm.String'> | null;
  unionAgreementExpiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  unionAgreementName?: DeserializedType<T, 'Edm.String'> | null;
  payPeriodOvertimeHours: DeserializedType<T, 'Edm.Decimal'>;
  isSalaryGenerated?: NoYes | null;
  schedule?: DeserializedType<T, 'Edm.String'> | null;
  benefitId?: DeserializedType<T, 'Edm.String'> | null;
  areEarningsGeneratedFromSchedule?: NoYes | null;
  defaultEarningCodeId?: DeserializedType<T, 'Edm.String'> | null;
  laborUnionAgreement?: LaborUnionAgreementsType<T> | null;
  payrollPayCycle?: PayCyclesType<T> | null;
  title?: TitlesType<T> | null;
  department?: DepartmentsType<T> | null;
  job?: JobsType<T> | null;
  compensationRegion?: CompensationRegionsType<T> | null;
  reasonCode?: ReasonCodesType<T> | null;
  positionType?: PositionTypesType<T> | null;
  worker?: WorkersType<T> | null;
  benefit?: BenefitsType<T> | null;
}
