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
import type { PayrollWorkerBenefitPlansApi } from './PayrollWorkerBenefitPlansApi';
import { BenefitPlanTypeCode } from './BenefitPlanTypeCode';
import { BenefitEmployeePlanStatus } from './BenefitEmployeePlanStatus';
import { BaseWorkers, BaseWorkersType } from './BaseWorkers';
import { BenefitsPlanTypes, BenefitsPlanTypesType } from './BenefitsPlanTypes';
import { BenefitsPlans, BenefitsPlansType } from './BenefitsPlans';
import {
  BenefitsCoverageOptions,
  BenefitsCoverageOptionsType
} from './BenefitsCoverageOptions';
import { BenefitsPeriods, BenefitsPeriodsType } from './BenefitsPeriods';

/**
 * This class represents the entity "PayrollWorkerBenefitPlans" of service "d365_metadata".
 */
export class PayrollWorkerBenefitPlans<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayrollWorkerBenefitPlansType<T>
{
  /**
   * Technical entity name for PayrollWorkerBenefitPlans.
   */
  static override _entityName = 'PayrollWorkerBenefitPlans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayrollWorkerBenefitPlans entity.
   */
  static _keys = ['PersonnelNumber', 'LegalEntityId', 'PeriodId', 'PlanId'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Id.
   */
  declare periodId: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan Id.
   */
  declare planId: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan Type Id.
   * @nullable
   */
  declare planTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deduction Start Date Time.
   */
  declare deductionStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Plan Type Code.
   * @nullable
   */
  declare planTypeCode?: BenefitPlanTypeCode | null;
  /**
   * Deduction End Date Time.
   */
  declare deductionEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Amount Employee.
   */
  declare amountEmployee: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pay Period.
   */
  declare payPeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Coverage Option Id.
   * @nullable
   */
  declare coverageOptionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: BenefitEmployeePlanStatus | null;
  /**
   * Amount Employer.
   */
  declare amountEmployer: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link BaseWorkers} entity.
   */
  declare baseWorker?: BaseWorkers<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitsPlanTypes} entity.
   */
  declare benefitsPlanType?: BenefitsPlanTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitsPlans} entity.
   */
  declare benefitsPlan?: BenefitsPlans<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitsCoverageOptions} entity.
   */
  declare benefitsCoverageOption?: BenefitsCoverageOptions<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitsPeriods} entity.
   */
  declare benefitsPeriod?: BenefitsPeriods<T> | null;

  constructor(_entityApi: PayrollWorkerBenefitPlansApi<T>) {
    super(_entityApi);
  }
}

export interface PayrollWorkerBenefitPlansType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  periodId: DeserializedType<T, 'Edm.String'>;
  planId: DeserializedType<T, 'Edm.String'>;
  planTypeId?: DeserializedType<T, 'Edm.String'> | null;
  deductionStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  planTypeCode?: BenefitPlanTypeCode | null;
  deductionEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amountEmployee: DeserializedType<T, 'Edm.Decimal'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payPeriod: DeserializedType<T, 'Edm.Int32'>;
  coverageOptionId?: DeserializedType<T, 'Edm.String'> | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  status?: BenefitEmployeePlanStatus | null;
  amountEmployer: DeserializedType<T, 'Edm.Decimal'>;
  baseWorker?: BaseWorkersType<T> | null;
  benefitsPlanType?: BenefitsPlanTypesType<T> | null;
  benefitsPlan?: BenefitsPlansType<T> | null;
  benefitsCoverageOption?: BenefitsCoverageOptionsType<T> | null;
  benefitsPeriod?: BenefitsPeriodsType<T> | null;
}
