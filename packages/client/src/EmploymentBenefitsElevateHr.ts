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
import type { EmploymentBenefitsElevateHrApi } from './EmploymentBenefitsElevateHrApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "EmploymentBenefitsElevateHR" of service "d365_metadata".
 */
export class EmploymentBenefitsElevateHr<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EmploymentBenefitsElevateHrType<T>
{
  /**
   * Technical entity name for EmploymentBenefitsElevateHr.
   */
  static override _entityName = 'EmploymentBenefitsElevateHR';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EmploymentBenefitsElevateHr entity.
   */
  static _keys = [
    'PersonnelNumber',
    'LegalEntity',
    'Employment_ValidFrom',
    'Employment_ValidTo',
    'ValidFrom',
    'ValidTo'
  ];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Employment Valid From.
   */
  declare employmentValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Employment Valid To.
   */
  declare employmentValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Evidence Of Insurability Date Time.
   */
  declare evidenceOfInsurabilityDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Evidence Of Insurability.
   * @nullable
   */
  declare evidenceOfInsurability?: NoYes | null;
  /**
   * Physical Exam.
   * @nullable
   */
  declare physicalExam?: NoYes | null;
  /**
   * Physical Exam Date Time.
   */
  declare physicalExamDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Medicare Eligible.
   * @nullable
   */
  declare medicareEligible?: NoYes | null;
  /**
   * Eligibility Date Time.
   */
  declare eligibilityDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Medicare Eligible Date Time.
   */
  declare medicareEligibleDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: EmploymentBenefitsElevateHrApi<T>) {
    super(_entityApi);
  }
}

export interface EmploymentBenefitsElevateHrType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  legalEntity: DeserializedType<T, 'Edm.String'>;
  employmentValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  employmentValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  evidenceOfInsurabilityDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  evidenceOfInsurability?: NoYes | null;
  physicalExam?: NoYes | null;
  physicalExamDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  medicareEligible?: NoYes | null;
  eligibilityDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  medicareEligibleDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
