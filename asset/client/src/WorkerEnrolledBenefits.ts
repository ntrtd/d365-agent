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
import type { WorkerEnrolledBenefitsApi } from './WorkerEnrolledBenefitsApi';
import {
  WorkerEnrolledBenefitLimits,
  WorkerEnrolledBenefitLimitsType
} from './WorkerEnrolledBenefitLimits';
import { Workers, WorkersType } from './Workers';
import { Benefits, BenefitsType } from './Benefits';
import {
  WorkerGarnishmentDetails,
  WorkerGarnishmentDetailsType
} from './WorkerGarnishmentDetails';
import {
  CoveredBeneficiaryRelationships,
  CoveredBeneficiaryRelationshipsType
} from './CoveredBeneficiaryRelationships';
import {
  CoveredDependentRelationships,
  CoveredDependentRelationshipsType
} from './CoveredDependentRelationships';
import {
  WorkerEnrolledBenefitDetails,
  WorkerEnrolledBenefitDetailsType
} from './WorkerEnrolledBenefitDetails';

/**
 * This class represents the entity "WorkerEnrolledBenefits" of service "d365_metadata".
 */
export class WorkerEnrolledBenefits<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkerEnrolledBenefitsType<T>
{
  /**
   * Technical entity name for WorkerEnrolledBenefits.
   */
  static override _entityName = 'WorkerEnrolledBenefits';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerEnrolledBenefits entity.
   */
  static _keys = [
    'BenefitPlanId',
    'BenefitOptionId',
    'WorkerId',
    'EnrollmentStart',
    'EnrollmentEnd'
  ];
  /**
   * Benefit Plan Id.
   */
  declare benefitPlanId: DeserializedType<T, 'Edm.String'>;
  /**
   * Benefit Option Id.
   */
  declare benefitOptionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Worker Id.
   */
  declare workerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Enrollment Start.
   */
  declare enrollmentStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Enrollment End.
   */
  declare enrollmentEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Benefit Id.
   * @nullable
   */
  declare benefitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link WorkerEnrolledBenefitLimits} entity.
   */
  declare workerEnrolledBenefitLimit?: WorkerEnrolledBenefitLimits<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link Benefits} entity.
   */
  declare benefit?: Benefits<T> | null;
  /**
   * One-to-one navigation property to the {@link WorkerGarnishmentDetails} entity.
   */
  declare workerGarnishmentDetail?: WorkerGarnishmentDetails<T> | null;
  /**
   * One-to-one navigation property to the {@link CoveredBeneficiaryRelationships} entity.
   */
  declare coveredBeneficiaryRelationship?: CoveredBeneficiaryRelationships<T> | null;
  /**
   * One-to-one navigation property to the {@link CoveredDependentRelationships} entity.
   */
  declare coveredDependentRelationship?: CoveredDependentRelationships<T> | null;
  /**
   * One-to-many navigation property to the {@link WorkerEnrolledBenefitDetails} entity.
   */
  declare workerEnrolledBenefitDetails: WorkerEnrolledBenefitDetails<T>[];

  constructor(_entityApi: WorkerEnrolledBenefitsApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerEnrolledBenefitsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  benefitPlanId: DeserializedType<T, 'Edm.String'>;
  benefitOptionId: DeserializedType<T, 'Edm.String'>;
  workerId: DeserializedType<T, 'Edm.String'>;
  enrollmentStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  enrollmentEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  benefitId?: DeserializedType<T, 'Edm.String'> | null;
  workerEnrolledBenefitLimit?: WorkerEnrolledBenefitLimitsType<T> | null;
  worker?: WorkersType<T> | null;
  benefit?: BenefitsType<T> | null;
  workerGarnishmentDetail?: WorkerGarnishmentDetailsType<T> | null;
  coveredBeneficiaryRelationship?: CoveredBeneficiaryRelationshipsType<T> | null;
  coveredDependentRelationship?: CoveredDependentRelationshipsType<T> | null;
  workerEnrolledBenefitDetails: WorkerEnrolledBenefitDetailsType<T>[];
}
