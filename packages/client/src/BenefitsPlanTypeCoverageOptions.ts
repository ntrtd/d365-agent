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
import type { BenefitsPlanTypeCoverageOptionsApi } from './BenefitsPlanTypeCoverageOptionsApi';
import {
  BenefitsCoverageOptions,
  BenefitsCoverageOptionsType
} from './BenefitsCoverageOptions';
import { BenefitsPlanTypes, BenefitsPlanTypesType } from './BenefitsPlanTypes';

/**
 * This class represents the entity "BenefitsPlanTypeCoverageOptions" of service "d365_metadata".
 */
export class BenefitsPlanTypeCoverageOptions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsPlanTypeCoverageOptionsType<T>
{
  /**
   * Technical entity name for BenefitsPlanTypeCoverageOptions.
   */
  static override _entityName = 'BenefitsPlanTypeCoverageOptions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsPlanTypeCoverageOptions entity.
   */
  static _keys = ['PlanTypeId', 'CoverageOptionId'];
  /**
   * Plan Type Id.
   */
  declare planTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Coverage Option Id.
   */
  declare coverageOptionId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link BenefitsCoverageOptions} entity.
   */
  declare benefitsCoverageOption?: BenefitsCoverageOptions<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitsPlanTypes} entity.
   */
  declare benefitsPlanType?: BenefitsPlanTypes<T> | null;

  constructor(_entityApi: BenefitsPlanTypeCoverageOptionsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsPlanTypeCoverageOptionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  planTypeId: DeserializedType<T, 'Edm.String'>;
  coverageOptionId: DeserializedType<T, 'Edm.String'>;
  benefitsCoverageOption?: BenefitsCoverageOptionsType<T> | null;
  benefitsPlanType?: BenefitsPlanTypesType<T> | null;
}
