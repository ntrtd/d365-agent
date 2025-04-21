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
import type { WorkerEnrolledAccrualInquiriesApi } from './WorkerEnrolledAccrualInquiriesApi';
import { Workers, WorkersType } from './Workers';
import { AccrualPlans, AccrualPlansType } from './AccrualPlans';

/**
 * This class represents the entity "WorkerEnrolledAccrualInquiries" of service "d365_metadata".
 */
export class WorkerEnrolledAccrualInquiries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkerEnrolledAccrualInquiriesType<T>
{
  /**
   * Technical entity name for WorkerEnrolledAccrualInquiries.
   */
  static override _entityName = 'WorkerEnrolledAccrualInquiries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerEnrolledAccrualInquiries entity.
   */
  static _keys = ['dataAreaId', 'WorkerName', 'AccrualId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Worker Name.
   */
  declare workerName: DeserializedType<T, 'Edm.String'>;
  /**
   * Accrual Id.
   */
  declare accrualId: DeserializedType<T, 'Edm.String'>;
  /**
   * Total Used.
   */
  declare totalUsed: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Carry Over.
   */
  declare totalCarryOver: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Pending Usage.
   */
  declare totalPendingUsage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accrual Year Start Date.
   */
  declare accrualYearStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Total Accrued.
   */
  declare totalAccrued: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Available Hours.
   */
  declare totalAvailableHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link AccrualPlans} entity.
   */
  declare accrualPlan?: AccrualPlans<T> | null;

  constructor(_entityApi: WorkerEnrolledAccrualInquiriesApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerEnrolledAccrualInquiriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workerName: DeserializedType<T, 'Edm.String'>;
  accrualId: DeserializedType<T, 'Edm.String'>;
  totalUsed: DeserializedType<T, 'Edm.Decimal'>;
  totalCarryOver: DeserializedType<T, 'Edm.Decimal'>;
  totalPendingUsage: DeserializedType<T, 'Edm.Decimal'>;
  accrualYearStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  totalAccrued: DeserializedType<T, 'Edm.Decimal'>;
  totalAvailableHours: DeserializedType<T, 'Edm.Decimal'>;
  worker?: WorkersType<T> | null;
  accrualPlan?: AccrualPlansType<T> | null;
}
