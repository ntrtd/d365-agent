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
import type { BenefitsTierCodesApi } from './BenefitsTierCodesApi';
import { BenefitsRateTiers, BenefitsRateTiersType } from './BenefitsRateTiers';
import {
  BenefitsRateDoubleTiers,
  BenefitsRateDoubleTiersType
} from './BenefitsRateDoubleTiers';

/**
 * This class represents the entity "BenefitsTierCodes" of service "d365_metadata".
 */
export class BenefitsTierCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BenefitsTierCodesType<T>
{
  /**
   * Technical entity name for BenefitsTierCodes.
   */
  static override _entityName = 'BenefitsTierCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsTierCodes entity.
   */
  static _keys = ['TierCode'];
  /**
   * Tier Code.
   */
  declare tierCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link BenefitsRateTiers} entity.
   */
  declare benefitRateTiers: BenefitsRateTiers<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitsRateDoubleTiers} entity.
   */
  declare benefitRateDoubleTiers: BenefitsRateDoubleTiers<T>[];

  constructor(_entityApi: BenefitsTierCodesApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsTierCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  tierCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  benefitRateTiers: BenefitsRateTiersType<T>[];
  benefitRateDoubleTiers: BenefitsRateDoubleTiersType<T>[];
}
