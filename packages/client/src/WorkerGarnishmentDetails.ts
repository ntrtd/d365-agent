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
import type { WorkerGarnishmentDetailsApi } from './WorkerGarnishmentDetailsApi';
import { PayrollGarnishmentTaxLevyType } from './PayrollGarnishmentTaxLevyType';
import {
  WorkerEnrolledBenefits,
  WorkerEnrolledBenefitsType
} from './WorkerEnrolledBenefits';

/**
 * This class represents the entity "WorkerGarnishmentDetails" of service "d365_metadata".
 */
export class WorkerGarnishmentDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkerGarnishmentDetailsType<T>
{
  /**
   * Technical entity name for WorkerGarnishmentDetails.
   */
  static override _entityName = 'WorkerGarnishmentDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerGarnishmentDetails entity.
   */
  static _keys = [
    'BenefitID',
    'PersonnelNumber',
    'EnrollmentStart',
    'EnrollmentEnd'
  ];
  /**
   * Benefit Id.
   */
  declare benefitId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Enrollment Start.
   */
  declare enrollmentStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Enrollment End.
   */
  declare enrollmentEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Administrative Fee.
   */
  declare administrativeFee: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Garnishment Tax Levy Type.
   * @nullable
   */
  declare garnishmentTaxLevyType?: PayrollGarnishmentTaxLevyType | null;
  /**
   * Case Number.
   * @nullable
   */
  declare caseNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State.
   * @nullable
   */
  declare state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link WorkerEnrolledBenefits} entity.
   */
  declare workerEnrolledBenefit?: WorkerEnrolledBenefits<T> | null;

  constructor(_entityApi: WorkerGarnishmentDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerGarnishmentDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  benefitId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  enrollmentStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  enrollmentEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  administrativeFee: DeserializedType<T, 'Edm.Decimal'>;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  garnishmentTaxLevyType?: PayrollGarnishmentTaxLevyType | null;
  caseNumber?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  workerEnrolledBenefit?: WorkerEnrolledBenefitsType<T> | null;
}
