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
import type { BenefitsPersonalContactsEligibilityOptionsApi } from './BenefitsPersonalContactsEligibilityOptionsApi';
import { BenefitDesigneeEligibilityCode } from './BenefitDesigneeEligibilityCode';
import { DirSystemRelationshipType } from './DirSystemRelationshipType';
import { BenefitStatus } from './BenefitStatus';
import {
  BenefitsCoverageOptionPersonalContactsEligibilityOptions,
  BenefitsCoverageOptionPersonalContactsEligibilityOptionsType
} from './BenefitsCoverageOptionPersonalContactsEligibilityOptions';

/**
 * This class represents the entity "BenefitsPersonalContactsEligibilityOptions" of service "d365_metadata".
 */
export class BenefitsPersonalContactsEligibilityOptions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsPersonalContactsEligibilityOptionsType<T>
{
  /**
   * Technical entity name for BenefitsPersonalContactsEligibilityOptions.
   */
  static override _entityName = 'BenefitsPersonalContactsEligibilityOptions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsPersonalContactsEligibilityOptions entity.
   */
  static _keys = ['EligibilityOptionId'];
  /**
   * Eligibility Option Id.
   */
  declare eligibilityOptionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Contact Eligibility Code.
   * @nullable
   */
  declare contactEligibilityCode?: BenefitDesigneeEligibilityCode | null;
  /**
   * Relationship.
   * @nullable
   */
  declare relationship?: DirSystemRelationshipType | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: BenefitStatus | null;
  /**
   * Age.
   */
  declare age: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link BenefitsCoverageOptionPersonalContactsEligibilityOptions} entity.
   */
  declare benefitsCoverageOptionPersonalContactsEligibilityOption: BenefitsCoverageOptionPersonalContactsEligibilityOptions<T>[];

  constructor(_entityApi: BenefitsPersonalContactsEligibilityOptionsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsPersonalContactsEligibilityOptionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  eligibilityOptionId: DeserializedType<T, 'Edm.String'>;
  contactEligibilityCode?: BenefitDesigneeEligibilityCode | null;
  relationship?: DirSystemRelationshipType | null;
  status?: BenefitStatus | null;
  age: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  benefitsCoverageOptionPersonalContactsEligibilityOption: BenefitsCoverageOptionPersonalContactsEligibilityOptionsType<T>[];
}
