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
import type { BenefitsPeriodsApi } from './BenefitsPeriodsApi';
import {
  BenefitPeriodEmployees,
  BenefitPeriodEmployeesType
} from './BenefitPeriodEmployees';
import {
  BenefitPeriodEmplGroupLifeEvents,
  BenefitPeriodEmplGroupLifeEventsType
} from './BenefitPeriodEmplGroupLifeEvents';
import {
  BenefitPeriodEmplLifeEvents,
  BenefitPeriodEmplLifeEventsType
} from './BenefitPeriodEmplLifeEvents';
import {
  PayrollWorkerBenefitPlans,
  PayrollWorkerBenefitPlansType
} from './PayrollWorkerBenefitPlans';
import {
  BenefitsPeriodEmployeeLifeEventTransactions,
  BenefitsPeriodEmployeeLifeEventTransactionsType
} from './BenefitsPeriodEmployeeLifeEventTransactions';

/**
 * This class represents the entity "BenefitsPeriods" of service "d365_metadata".
 */
export class BenefitsPeriods<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BenefitsPeriodsType<T>
{
  /**
   * Technical entity name for BenefitsPeriods.
   */
  static override _entityName = 'BenefitsPeriods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsPeriods entity.
   */
  static _keys = ['PeriodId'];
  /**
   * Period Id.
   */
  declare periodId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Enroll End Date Time.
   */
  declare enrollEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Previous Period Id.
   * @nullable
   */
  declare previousPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enroll Start Date Time.
   */
  declare enrollStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Enroll Start Date.
   */
  declare enrollStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Enroll End Date.
   */
  declare enrollEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link BenefitPeriodEmployees} entity.
   */
  declare benefitPeriodEmployee: BenefitPeriodEmployees<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitPeriodEmplGroupLifeEvents} entity.
   */
  declare benefitPeriodEmplGroupLifeEvent: BenefitPeriodEmplGroupLifeEvents<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitPeriodEmplLifeEvents} entity.
   */
  declare benefitPeriodEmplLifeEvent: BenefitPeriodEmplLifeEvents<T>[];
  /**
   * One-to-one navigation property to the {@link PayrollWorkerBenefitPlans} entity.
   */
  declare payrollWorkerBenefitPlan?: PayrollWorkerBenefitPlans<T> | null;
  /**
   * One-to-many navigation property to the {@link BenefitsPeriodEmployeeLifeEventTransactions} entity.
   */
  declare benefitsPeriodEmployeeLifeEventTransaction: BenefitsPeriodEmployeeLifeEventTransactions<T>[];

  constructor(_entityApi: BenefitsPeriodsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsPeriodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  periodId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  enrollEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  previousPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  enrollStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  enrollStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  enrollEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  benefitPeriodEmployee: BenefitPeriodEmployeesType<T>[];
  benefitPeriodEmplGroupLifeEvent: BenefitPeriodEmplGroupLifeEventsType<T>[];
  benefitPeriodEmplLifeEvent: BenefitPeriodEmplLifeEventsType<T>[];
  payrollWorkerBenefitPlan?: PayrollWorkerBenefitPlansType<T> | null;
  benefitsPeriodEmployeeLifeEventTransaction: BenefitsPeriodEmployeeLifeEventTransactionsType<T>[];
}
