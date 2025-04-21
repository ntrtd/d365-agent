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
import type { BenefitsPayFrequenciesApi } from './BenefitsPayFrequenciesApi';
import { BenefitPayFrequencyPeriod } from './BenefitPayFrequencyPeriod';
import {
  BenefitsParameters,
  BenefitsParametersType
} from './BenefitsParameters';
import { BenefitsRates, BenefitsRatesType } from './BenefitsRates';
import {
  BenefitsParametersV2,
  BenefitsParametersV2Type
} from './BenefitsParametersV2';
import {
  BenefitsPayFrequencyPayPeriods,
  BenefitsPayFrequencyPayPeriodsType
} from './BenefitsPayFrequencyPayPeriods';

/**
 * This class represents the entity "BenefitsPayFrequencies" of service "d365_metadata".
 */
export class BenefitsPayFrequencies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsPayFrequenciesType<T>
{
  /**
   * Technical entity name for BenefitsPayFrequencies.
   */
  static override _entityName = 'BenefitsPayFrequencies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsPayFrequencies entity.
   */
  static _keys = ['PayFrequencyId'];
  /**
   * Pay Frequency Id.
   */
  declare payFrequencyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Weekly Conversion Factor.
   */
  declare weeklyConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Monthly Conversion Factor.
   */
  declare monthlyConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Biweekly Conversion Factor.
   */
  declare biweeklyConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Period.
   * @nullable
   */
  declare period?: BenefitPayFrequencyPeriod | null;
  /**
   * Number Of Pay Periods.
   */
  declare numberOfPayPeriods: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Annual Conversion Factor.
   */
  declare annualConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quarterly Conversion Factor.
   */
  declare quarterlyConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Semi Annual Conversion Factor.
   */
  declare semiAnnualConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Semi Monthly Conversion Factor.
   */
  declare semiMonthlyConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Daily Conversion Factor.
   */
  declare dailyConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link BenefitsParameters} entity.
   */
  declare benefitsParameter?: BenefitsParameters<T> | null;
  /**
   * One-to-many navigation property to the {@link BenefitsRates} entity.
   */
  declare benefitsRate: BenefitsRates<T>[];
  /**
   * One-to-one navigation property to the {@link BenefitsParametersV2} entity.
   */
  declare benefitsParameterV2?: BenefitsParametersV2<T> | null;
  /**
   * One-to-many navigation property to the {@link BenefitsPayFrequencyPayPeriods} entity.
   */
  declare benefitsPayFrequencyPayPeriod: BenefitsPayFrequencyPayPeriods<T>[];

  constructor(_entityApi: BenefitsPayFrequenciesApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsPayFrequenciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  payFrequencyId: DeserializedType<T, 'Edm.String'>;
  weeklyConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  monthlyConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  biweeklyConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  period?: BenefitPayFrequencyPeriod | null;
  numberOfPayPeriods: DeserializedType<T, 'Edm.Int32'>;
  annualConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  quarterlyConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  semiAnnualConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  semiMonthlyConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  dailyConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  benefitsParameter?: BenefitsParametersType<T> | null;
  benefitsRate: BenefitsRatesType<T>[];
  benefitsParameterV2?: BenefitsParametersV2Type<T> | null;
  benefitsPayFrequencyPayPeriod: BenefitsPayFrequencyPayPeriodsType<T>[];
}
