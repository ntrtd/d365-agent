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
import type { WorkerAccrualAdjustmentsApi } from './WorkerAccrualAdjustmentsApi';
import { PayrollAccrualAdjustmentType } from './PayrollAccrualAdjustmentType';
import {
  WorkerEnrolledAccruals,
  WorkerEnrolledAccrualsType
} from './WorkerEnrolledAccruals';

/**
 * This class represents the entity "WorkerAccrualAdjustments" of service "d365_metadata".
 */
export class WorkerAccrualAdjustments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkerAccrualAdjustmentsType<T>
{
  /**
   * Technical entity name for WorkerAccrualAdjustments.
   */
  static override _entityName = 'WorkerAccrualAdjustments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerAccrualAdjustments entity.
   */
  static _keys = [
    'dataAreaId',
    'AdjustmentType',
    'AccrualId',
    'SequenceNumber',
    'LegalEntityId',
    'EnrolledAccrualLegalEntityId',
    'PersonnelNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Adjustment Type.
   * @nullable
   */
  declare adjustmentType?: PayrollAccrualAdjustmentType | null;
  /**
   * Accrual Id.
   */
  declare accrualId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sequence Number.
   */
  declare sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Enrolled Accrual Legal Entity Id.
   */
  declare enrolledAccrualLegalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Adjusted Hours.
   */
  declare adjustedHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link WorkerEnrolledAccruals} entity.
   */
  declare payrollWorkerEnrolledAccrual?: WorkerEnrolledAccruals<T> | null;

  constructor(_entityApi: WorkerAccrualAdjustmentsApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerAccrualAdjustmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  adjustmentType?: PayrollAccrualAdjustmentType | null;
  accrualId: DeserializedType<T, 'Edm.String'>;
  sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  enrolledAccrualLegalEntityId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  adjustedHours: DeserializedType<T, 'Edm.Decimal'>;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payrollWorkerEnrolledAccrual?: WorkerEnrolledAccrualsType<T> | null;
}
