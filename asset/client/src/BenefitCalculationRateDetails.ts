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
import type { BenefitCalculationRateDetailsApi } from './BenefitCalculationRateDetailsApi';
import { PayrollContributionMethod } from './PayrollContributionMethod';
import {
  BenefitCalculationRates,
  BenefitCalculationRatesType
} from './BenefitCalculationRates';

/**
 * This class represents the entity "BenefitCalculationRateDetails" of service "d365_metadata".
 */
export class BenefitCalculationRateDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitCalculationRateDetailsType<T>
{
  /**
   * Technical entity name for BenefitCalculationRateDetails.
   */
  static override _entityName = 'BenefitCalculationRateDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitCalculationRateDetails entity.
   */
  static _keys = ['Name', 'Effective', 'Expiration', 'WorkerDeduction'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Effective.
   */
  declare effective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Expiration.
   */
  declare expiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Worker Deduction.
   */
  declare workerDeduction: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Contribution Method.
   * @nullable
   */
  declare contributionMethod?: PayrollContributionMethod | null;
  /**
   * Employer Contribution.
   */
  declare employerContribution: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link BenefitCalculationRates} entity.
   */
  declare benefitCalculationRate?: BenefitCalculationRates<T> | null;

  constructor(_entityApi: BenefitCalculationRateDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitCalculationRateDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  effective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  expiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerDeduction: DeserializedType<T, 'Edm.Decimal'>;
  contributionMethod?: PayrollContributionMethod | null;
  employerContribution: DeserializedType<T, 'Edm.Decimal'>;
  benefitCalculationRate?: BenefitCalculationRatesType<T> | null;
}
