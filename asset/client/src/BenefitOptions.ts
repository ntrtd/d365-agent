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
import type { BenefitOptionsApi } from './BenefitOptionsApi';
import { NoYes } from './NoYes';
import { Benefits, BenefitsType } from './Benefits';
import {
  BenefitEligibilityOverrides,
  BenefitEligibilityOverridesType
} from './BenefitEligibilityOverrides';

/**
 * This class represents the entity "BenefitOptions" of service "d365_metadata".
 */
export class BenefitOptions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BenefitOptionsType<T>
{
  /**
   * Technical entity name for BenefitOptions.
   */
  static override _entityName = 'BenefitOptions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitOptions entity.
   */
  static _keys = ['BenefitOptionId'];
  /**
   * Benefit Option Id.
   */
  declare benefitOptionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Allow Beneficiary Designations.
   * @nullable
   */
  declare allowBeneficiaryDesignations?: NoYes | null;
  /**
   * Allow Dependent Coverage.
   * @nullable
   */
  declare allowDependentCoverage?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Waive.
   * @nullable
   */
  declare isWaive?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link Benefits} entity.
   */
  declare benefits: Benefits<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitEligibilityOverrides} entity.
   */
  declare benefitEligibilityOverrides: BenefitEligibilityOverrides<T>[];

  constructor(_entityApi: BenefitOptionsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitOptionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  benefitOptionId: DeserializedType<T, 'Edm.String'>;
  allowBeneficiaryDesignations?: NoYes | null;
  allowDependentCoverage?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isWaive?: NoYes | null;
  benefits: BenefitsType<T>[];
  benefitEligibilityOverrides: BenefitEligibilityOverridesType<T>[];
}
