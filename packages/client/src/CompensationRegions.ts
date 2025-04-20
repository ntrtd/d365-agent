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
import type { CompensationRegionsApi } from './CompensationRegionsApi';
import {
  PayIntV1HcmPositionDetails,
  PayIntV1HcmPositionDetailsType
} from './PayIntV1HcmPositionDetails';
import {
  CompensationEligibilityRules,
  CompensationEligibilityRulesType
} from './CompensationEligibilityRules';
import { BenefitsRateTiers, BenefitsRateTiersType } from './BenefitsRateTiers';
import { PositionDetails, PositionDetailsType } from './PositionDetails';
import {
  CompensationFixedIncreaseBudgets,
  CompensationFixedIncreaseBudgetsType
} from './CompensationFixedIncreaseBudgets';
import {
  BenefitsRateDoubleTiers,
  BenefitsRateDoubleTiersType
} from './BenefitsRateDoubleTiers';
import { Positions, PositionsType } from './Positions';
import { PositionsV2, PositionsV2Type } from './PositionsV2';

/**
 * This class represents the entity "CompensationRegions" of service "d365_metadata".
 */
export class CompensationRegions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CompensationRegionsType<T>
{
  /**
   * Technical entity name for CompensationRegions.
   */
  static override _entityName = 'CompensationRegions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CompensationRegions entity.
   */
  static _keys = ['Location'];
  /**
   * Location.
   */
  declare location: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link PayIntV1HcmPositionDetails} entity.
   */
  declare payIntPositionDetails: PayIntV1HcmPositionDetails<T>[];
  /**
   * One-to-many navigation property to the {@link CompensationEligibilityRules} entity.
   */
  declare compensationEligibilityRules: CompensationEligibilityRules<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitsRateTiers} entity.
   */
  declare benefitRateTiers: BenefitsRateTiers<T>[];
  /**
   * One-to-many navigation property to the {@link PositionDetails} entity.
   */
  declare positionDetails: PositionDetails<T>[];
  /**
   * One-to-many navigation property to the {@link CompensationFixedIncreaseBudgets} entity.
   */
  declare compensationFixedIncreaseBudgets: CompensationFixedIncreaseBudgets<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitsRateDoubleTiers} entity.
   */
  declare benefitRateDoubleTiers: BenefitsRateDoubleTiers<T>[];
  /**
   * One-to-many navigation property to the {@link Positions} entity.
   */
  declare positions: Positions<T>[];
  /**
   * One-to-many navigation property to the {@link PositionsV2} entity.
   */
  declare positionsV2: PositionsV2<T>[];

  constructor(_entityApi: CompensationRegionsApi<T>) {
    super(_entityApi);
  }
}

export interface CompensationRegionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  location: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  payIntPositionDetails: PayIntV1HcmPositionDetailsType<T>[];
  compensationEligibilityRules: CompensationEligibilityRulesType<T>[];
  benefitRateTiers: BenefitsRateTiersType<T>[];
  positionDetails: PositionDetailsType<T>[];
  compensationFixedIncreaseBudgets: CompensationFixedIncreaseBudgetsType<T>[];
  benefitRateDoubleTiers: BenefitsRateDoubleTiersType<T>[];
  positions: PositionsType<T>[];
  positionsV2: PositionsV2Type<T>[];
}
