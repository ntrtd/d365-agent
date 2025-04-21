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
import type { AccrualPlansApi } from './AccrualPlansApi';
import { NoYes } from './NoYes';
import { PayrollWorkerAccrualDateMethod } from './PayrollWorkerAccrualDateMethod';
import { PayrollAccrualMethod } from './PayrollAccrualMethod';
import {
  WorkerEnrolledAccruals,
  WorkerEnrolledAccrualsType
} from './WorkerEnrolledAccruals';
import {
  AccrualBasisEarningCodes,
  AccrualBasisEarningCodesType
} from './AccrualBasisEarningCodes';
import { AccrualPlanRules, AccrualPlanRulesType } from './AccrualPlanRules';
import {
  AccrualEarningCodes,
  AccrualEarningCodesType
} from './AccrualEarningCodes';
import {
  WorkerEnrolledAccrualInquiries,
  WorkerEnrolledAccrualInquiriesType
} from './WorkerEnrolledAccrualInquiries';

/**
 * This class represents the entity "AccrualPlans" of service "d365_metadata".
 */
export class AccrualPlans<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AccrualPlansType<T>
{
  /**
   * Technical entity name for AccrualPlans.
   */
  static override _entityName = 'AccrualPlans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AccrualPlans entity.
   */
  static _keys = ['AccrualId'];
  /**
   * Accrual Id.
   */
  declare accrualId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Starting Date.
   */
  declare startingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Can Carry Forward.
   * @nullable
   */
  declare canCarryForward?: NoYes | null;
  /**
   * Custom Accrual Date.
   */
  declare customAccrualDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Worker Accrual Date Method.
   * @nullable
   */
  declare workerAccrualDateMethod?: PayrollWorkerAccrualDateMethod | null;
  /**
   * Accrual Method.
   * @nullable
   */
  declare accrualMethod?: PayrollAccrualMethod | null;
  /**
   * Is Included In Accrual.
   * @nullable
   */
  declare isIncludedInAccrual?: NoYes | null;
  /**
   * Calculation Frequency.
   * @nullable
   */
  declare calculationFrequency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link WorkerEnrolledAccruals} entity.
   */
  declare workerEnrolledAccruals: WorkerEnrolledAccruals<T>[];
  /**
   * One-to-many navigation property to the {@link AccrualBasisEarningCodes} entity.
   */
  declare accrualBasisEarningCodes: AccrualBasisEarningCodes<T>[];
  /**
   * One-to-many navigation property to the {@link AccrualPlanRules} entity.
   */
  declare accrualPlanRules: AccrualPlanRules<T>[];
  /**
   * One-to-many navigation property to the {@link AccrualEarningCodes} entity.
   */
  declare accrualEarningCodes: AccrualEarningCodes<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerEnrolledAccrualInquiries} entity.
   */
  declare workerEnrolledAccrualInquiry: WorkerEnrolledAccrualInquiries<T>[];

  constructor(_entityApi: AccrualPlansApi<T>) {
    super(_entityApi);
  }
}

export interface AccrualPlansType<
  T extends DeSerializers = DefaultDeSerializers
> {
  accrualId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  startingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  canCarryForward?: NoYes | null;
  customAccrualDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerAccrualDateMethod?: PayrollWorkerAccrualDateMethod | null;
  accrualMethod?: PayrollAccrualMethod | null;
  isIncludedInAccrual?: NoYes | null;
  calculationFrequency?: DeserializedType<T, 'Edm.String'> | null;
  workerEnrolledAccruals: WorkerEnrolledAccrualsType<T>[];
  accrualBasisEarningCodes: AccrualBasisEarningCodesType<T>[];
  accrualPlanRules: AccrualPlanRulesType<T>[];
  accrualEarningCodes: AccrualEarningCodesType<T>[];
  workerEnrolledAccrualInquiry: WorkerEnrolledAccrualInquiriesType<T>[];
}
