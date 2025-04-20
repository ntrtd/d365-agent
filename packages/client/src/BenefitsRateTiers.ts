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
import type { BenefitsRateTiersApi } from './BenefitsRateTiersApi';
import { BenefitCalculationDirection } from './BenefitCalculationDirection';
import { HcmPersonGender } from './HcmPersonGender';
import { NoYes } from './NoYes';
import { BenefitRateTierType } from './BenefitRateTierType';
import { BenefitCalculationType } from './BenefitCalculationType';
import { JobTypes, JobTypesType } from './JobTypes';
import { BenefitsTierCodes, BenefitsTierCodesType } from './BenefitsTierCodes';
import {
  CompensationLevels,
  CompensationLevelsType
} from './CompensationLevels';
import { BenefitsRates, BenefitsRatesType } from './BenefitsRates';
import {
  CompensationRegions,
  CompensationRegionsType
} from './CompensationRegions';
import {
  BenefitsRateDoubleTiers,
  BenefitsRateDoubleTiersType
} from './BenefitsRateDoubleTiers';

/**
 * This class represents the entity "BenefitsRateTiers" of service "d365_metadata".
 */
export class BenefitsRateTiers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BenefitsRateTiersType<T>
{
  /**
   * Technical entity name for BenefitsRateTiers.
   */
  static override _entityName = 'BenefitsRateTiers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsRateTiers entity.
   */
  static _keys = ['RateId', 'RateValidTo', 'RateValidFrom', 'TierCodeId'];
  /**
   * Rate Id.
   */
  declare rateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rate Valid To.
   */
  declare rateValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Rate Valid From.
   */
  declare rateValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tier Code Id.
   */
  declare tierCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Compensation Level.
   * @nullable
   */
  declare compensationLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculation Direction.
   * @nullable
   */
  declare calculationDirection?: BenefitCalculationDirection | null;
  /**
   * Gender.
   * @nullable
   */
  declare gender?: HcmPersonGender | null;
  /**
   * Flex Credit Rate Non Smoker.
   */
  declare flexCreditRateNonSmoker: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Administrative Amount.
   */
  declare administrativeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Physical Exam.
   * @nullable
   */
  declare physicalExam?: NoYes | null;
  /**
   * Tier Type.
   * @nullable
   */
  declare tierType?: BenefitRateTierType | null;
  /**
   * Flex Credit Rate Smoker.
   */
  declare flexCreditRateSmoker: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Compensation Region.
   * @nullable
   */
  declare compensationRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employer Amount Smoker.
   */
  declare employerAmountSmoker: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Employee Amount Smoker.
   */
  declare employeeAmountSmoker: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Employer Amount Non Smoker.
   */
  declare employerAmountNonSmoker: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Level.
   */
  declare level: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Calculation Amount.
   */
  declare calculationAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Job Type Id.
   * @nullable
   */
  declare jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculation Type.
   * @nullable
   */
  declare calculationType?: BenefitCalculationType | null;
  /**
   * Employee Amount Non Smoker.
   */
  declare employeeAmountNonSmoker: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link JobTypes} entity.
   */
  declare jobType?: JobTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitsTierCodes} entity.
   */
  declare tierCode?: BenefitsTierCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link CompensationLevels} entity.
   */
  declare compLevel?: CompensationLevels<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitsRates} entity.
   */
  declare rate?: BenefitsRates<T> | null;
  /**
   * One-to-one navigation property to the {@link CompensationRegions} entity.
   */
  declare compRegion?: CompensationRegions<T> | null;
  /**
   * One-to-many navigation property to the {@link BenefitsRateDoubleTiers} entity.
   */
  declare benefitRateDoubleTiers: BenefitsRateDoubleTiers<T>[];

  constructor(_entityApi: BenefitsRateTiersApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsRateTiersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  rateId: DeserializedType<T, 'Edm.String'>;
  rateValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  rateValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  tierCodeId: DeserializedType<T, 'Edm.String'>;
  compensationLevel?: DeserializedType<T, 'Edm.String'> | null;
  calculationDirection?: BenefitCalculationDirection | null;
  gender?: HcmPersonGender | null;
  flexCreditRateNonSmoker: DeserializedType<T, 'Edm.Decimal'>;
  administrativeAmount: DeserializedType<T, 'Edm.Decimal'>;
  physicalExam?: NoYes | null;
  tierType?: BenefitRateTierType | null;
  flexCreditRateSmoker: DeserializedType<T, 'Edm.Decimal'>;
  compensationRegion?: DeserializedType<T, 'Edm.String'> | null;
  employerAmountSmoker: DeserializedType<T, 'Edm.Decimal'>;
  employeeAmountSmoker: DeserializedType<T, 'Edm.Decimal'>;
  employerAmountNonSmoker: DeserializedType<T, 'Edm.Decimal'>;
  level: DeserializedType<T, 'Edm.Decimal'>;
  calculationAmount: DeserializedType<T, 'Edm.Decimal'>;
  jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  calculationType?: BenefitCalculationType | null;
  employeeAmountNonSmoker: DeserializedType<T, 'Edm.Decimal'>;
  jobType?: JobTypesType<T> | null;
  tierCode?: BenefitsTierCodesType<T> | null;
  compLevel?: CompensationLevelsType<T> | null;
  rate?: BenefitsRatesType<T> | null;
  compRegion?: CompensationRegionsType<T> | null;
  benefitRateDoubleTiers: BenefitsRateDoubleTiersType<T>[];
}
