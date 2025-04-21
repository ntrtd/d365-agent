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
import type { BenefitCalculationRateDetailsDualWriteApi } from './BenefitCalculationRateDetailsDualWriteApi';
import { PayrollContributionMethod } from './PayrollContributionMethod';
import {
  BenefitCalculationRates,
  BenefitCalculationRatesType
} from './BenefitCalculationRates';

/**
 * This class represents the entity "BenefitCalculationRateDetailsDualWrite" of service "d365_metadata".
 */
export class BenefitCalculationRateDetailsDualWrite<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitCalculationRateDetailsDualWriteType<T>
{
  /**
   * Technical entity name for BenefitCalculationRateDetailsDualWrite.
   */
  static override _entityName = 'BenefitCalculationRateDetailsDualWrite';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitCalculationRateDetailsDualWrite entity.
   */
  static _keys = ['Name', 'Effective', 'WorkerDeduction'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Effective.
   */
  declare effective: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Expiration.
   */
  declare expiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Employer Contribution.
   */
  declare employerContribution: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link BenefitCalculationRates} entity.
   */
  declare benefitCalculationRate?: BenefitCalculationRates<T> | null;

  constructor(_entityApi: BenefitCalculationRateDetailsDualWriteApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitCalculationRateDetailsDualWriteType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  effective: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerDeduction: DeserializedType<T, 'Edm.Decimal'>;
  contributionMethod?: PayrollContributionMethod | null;
  expiration: DeserializedType<T, 'Edm.DateTimeOffset'>;
  employerContribution: DeserializedType<T, 'Edm.Decimal'>;
  benefitCalculationRate?: BenefitCalculationRatesType<T> | null;
}
