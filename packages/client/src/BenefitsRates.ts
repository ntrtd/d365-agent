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
import type { BenefitsRatesApi } from './BenefitsRatesApi';
import { BenefitRateRounding } from './BenefitRateRounding';
import { NoYes } from './NoYes';
import { BenefitRateTier } from './BenefitRateTier';
import {
  BenefitsPayFrequencies,
  BenefitsPayFrequenciesType
} from './BenefitsPayFrequencies';
import { BenefitsRateTiers, BenefitsRateTiersType } from './BenefitsRateTiers';

/**
 * This class represents the entity "BenefitsRates" of service "d365_metadata".
 */
export class BenefitsRates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BenefitsRatesType<T>
{
  /**
   * Technical entity name for BenefitsRates.
   */
  static override _entityName = 'BenefitsRates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsRates entity.
   */
  static _keys = ['RateId', 'ValidTo', 'ValidFrom'];
  /**
   * Rate Id.
   */
  declare rateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Smoker Employee Amount.
   */
  declare smokerEmployeeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pay Frequency Rate Rounding.
   * @nullable
   */
  declare payFrequencyRateRounding?: BenefitRateRounding | null;
  /**
   * Flex Credit Rate.
   */
  declare flexCreditRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Non Smoker Employer Amount.
   */
  declare nonSmokerEmployerAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Non Smoker Employee Amount.
   */
  declare nonSmokerEmployeeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rate Change Completed.
   * @nullable
   */
  declare rateChangeCompleted?: NoYes | null;
  /**
   * Use Tiers.
   * @nullable
   */
  declare useTiers?: BenefitRateTier | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Smoker Employer Amount.
   */
  declare smokerEmployerAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Administrative Amount.
   */
  declare administrativeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pay Frequency Id.
   * @nullable
   */
  declare payFrequencyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Change Effective Date.
   */
  declare changeEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link BenefitsPayFrequencies} entity.
   */
  declare benefitsPayFrequency?: BenefitsPayFrequencies<T> | null;
  /**
   * One-to-many navigation property to the {@link BenefitsRateTiers} entity.
   */
  declare benefitRateTiers: BenefitsRateTiers<T>[];

  constructor(_entityApi: BenefitsRatesApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsRatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  rateId: DeserializedType<T, 'Edm.String'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  smokerEmployeeAmount: DeserializedType<T, 'Edm.Decimal'>;
  payFrequencyRateRounding?: BenefitRateRounding | null;
  flexCreditRate: DeserializedType<T, 'Edm.Decimal'>;
  nonSmokerEmployerAmount: DeserializedType<T, 'Edm.Decimal'>;
  nonSmokerEmployeeAmount: DeserializedType<T, 'Edm.Decimal'>;
  rateChangeCompleted?: NoYes | null;
  useTiers?: BenefitRateTier | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  smokerEmployerAmount: DeserializedType<T, 'Edm.Decimal'>;
  administrativeAmount: DeserializedType<T, 'Edm.Decimal'>;
  payFrequencyId?: DeserializedType<T, 'Edm.String'> | null;
  changeEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  benefitsPayFrequency?: BenefitsPayFrequenciesType<T> | null;
  benefitRateTiers: BenefitsRateTiersType<T>[];
}
