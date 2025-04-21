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
import type { WorkerEnrolledAccrualsApi } from './WorkerEnrolledAccrualsApi';
import { PayrollAccrualDateBasis } from './PayrollAccrualDateBasis';
import { NoYes } from './NoYes';
import {
  WorkerAccrualAdjustments,
  WorkerAccrualAdjustmentsType
} from './WorkerAccrualAdjustments';
import { AccrualPlans, AccrualPlansType } from './AccrualPlans';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "WorkerEnrolledAccruals" of service "d365_metadata".
 */
export class WorkerEnrolledAccruals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkerEnrolledAccrualsType<T>
{
  /**
   * Technical entity name for WorkerEnrolledAccruals.
   */
  static override _entityName = 'WorkerEnrolledAccruals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerEnrolledAccruals entity.
   */
  static _keys = ['dataAreaId', 'AccrualId', 'PersonnelNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Accrual Id.
   */
  declare accrualId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Accrual Date Basis.
   * @nullable
   */
  declare accrualDateBasis?: PayrollAccrualDateBasis | null;
  /**
   * Is Accrual Stopped.
   * @nullable
   */
  declare isAccrualStopped?: NoYes | null;
  /**
   * Custom Accural Date.
   */
  declare customAccuralDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Usage Stopped.
   * @nullable
   */
  declare isUsageStopped?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link WorkerAccrualAdjustments} entity.
   */
  declare workerAccrualAdjustments: WorkerAccrualAdjustments<T>[];
  /**
   * One-to-one navigation property to the {@link AccrualPlans} entity.
   */
  declare payrollAccrualPlan?: AccrualPlans<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare hcmWorker?: Workers<T> | null;

  constructor(_entityApi: WorkerEnrolledAccrualsApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerEnrolledAccrualsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accrualId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  accrualDateBasis?: PayrollAccrualDateBasis | null;
  isAccrualStopped?: NoYes | null;
  customAccuralDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isUsageStopped?: NoYes | null;
  workerAccrualAdjustments: WorkerAccrualAdjustmentsType<T>[];
  payrollAccrualPlan?: AccrualPlansType<T> | null;
  hcmWorker?: WorkersType<T> | null;
}
