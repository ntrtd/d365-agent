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
import type { BenefitsCoverageOptionPersonalContactsEligibilityOptionsApi } from './BenefitsCoverageOptionPersonalContactsEligibilityOptionsApi';
import {
  BenefitsCoverageOptions,
  BenefitsCoverageOptionsType
} from './BenefitsCoverageOptions';
import {
  BenefitsPersonalContactsEligibilityOptions,
  BenefitsPersonalContactsEligibilityOptionsType
} from './BenefitsPersonalContactsEligibilityOptions';

/**
 * This class represents the entity "BenefitsCoverageOptionPersonalContactsEligibilityOptions" of service "d365_metadata".
 */
export class BenefitsCoverageOptionPersonalContactsEligibilityOptions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsCoverageOptionPersonalContactsEligibilityOptionsType<T>
{
  /**
   * Technical entity name for BenefitsCoverageOptionPersonalContactsEligibilityOptions.
   */
  static override _entityName =
    'BenefitsCoverageOptionPersonalContactsEligibilityOptions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsCoverageOptionPersonalContactsEligibilityOptions entity.
   */
  static _keys = ['CoverageOptionId', 'PersonalContactsEligibilityOptionId'];
  /**
   * Coverage Option Id.
   */
  declare coverageOptionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personal Contacts Eligibility Option Id.
   */
  declare personalContactsEligibilityOptionId: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * One-to-one navigation property to the {@link BenefitsCoverageOptions} entity.
   */
  declare benefitsCoverageOption?: BenefitsCoverageOptions<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitsPersonalContactsEligibilityOptions} entity.
   */
  declare benefitsPersonalContactsEligibilityOption?: BenefitsPersonalContactsEligibilityOptions<T> | null;

  constructor(
    _entityApi: BenefitsCoverageOptionPersonalContactsEligibilityOptionsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface BenefitsCoverageOptionPersonalContactsEligibilityOptionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  coverageOptionId: DeserializedType<T, 'Edm.String'>;
  personalContactsEligibilityOptionId: DeserializedType<T, 'Edm.String'>;
  benefitsCoverageOption?: BenefitsCoverageOptionsType<T> | null;
  benefitsPersonalContactsEligibilityOption?: BenefitsPersonalContactsEligibilityOptionsType<T> | null;
}
