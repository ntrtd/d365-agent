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
import type { BenefitsEligibilityRulesApi } from './BenefitsEligibilityRulesApi';
import { NoYes } from './NoYes';
import { BenefitCurrentEmploymentStatus } from './BenefitCurrentEmploymentStatus';
import { BenefitEmploymentStatus } from './BenefitEmploymentStatus';
import { HcmEmploymentType } from './HcmEmploymentType';
import {
  BenefitsPlanEligibilityRules,
  BenefitsPlanEligibilityRulesType
} from './BenefitsPlanEligibilityRules';
import {
  BenefitsProgramEligibilityRules,
  BenefitsProgramEligibilityRulesType
} from './BenefitsProgramEligibilityRules';

/**
 * This class represents the entity "BenefitsEligibilityRules" of service "d365_metadata".
 */
export class BenefitsEligibilityRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsEligibilityRulesType<T>
{
  /**
   * Technical entity name for BenefitsEligibilityRules.
   */
  static override _entityName = 'BenefitsEligibilityRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsEligibilityRules entity.
   */
  static _keys = ['EligibilityRuleId'];
  /**
   * Eligibility Rule Id.
   */
  declare eligibilityRuleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Use Former Employment Status.
   * @nullable
   */
  declare useFormerEmploymentStatus?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee Status.
   * @nullable
   */
  declare employeeStatus?: BenefitCurrentEmploymentStatus | null;
  /**
   * New Hire Enrollment Period.
   */
  declare newHireEnrollmentPeriod: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Use Employee Status.
   * @nullable
   */
  declare useEmployeeStatus?: NoYes | null;
  /**
   * Employment Category.
   * @nullable
   */
  declare employmentCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Former Employment Status From Days.
   */
  declare formerEmploymentStatusFromDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Former Employment Status.
   * @nullable
   */
  declare formerEmploymentStatus?: BenefitEmploymentStatus | null;
  /**
   * Use Employee Type.
   * @nullable
   */
  declare useEmployeeType?: NoYes | null;
  /**
   * Use Employee Category.
   * @nullable
   */
  declare useEmployeeCategory?: NoYes | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Use New Hire Rule.
   * @nullable
   */
  declare useNewHireRule?: NoYes | null;
  /**
   * Former Employment Status To Days.
   */
  declare formerEmploymentStatusToDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Worker Type.
   * @nullable
   */
  declare workerType?: HcmEmploymentType | null;
  /**
   * One-to-many navigation property to the {@link BenefitsPlanEligibilityRules} entity.
   */
  declare benefitsPlanEligibilityRule: BenefitsPlanEligibilityRules<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitsProgramEligibilityRules} entity.
   */
  declare benefitsProgramEligibilityRule: BenefitsProgramEligibilityRules<T>[];

  constructor(_entityApi: BenefitsEligibilityRulesApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsEligibilityRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  eligibilityRuleId: DeserializedType<T, 'Edm.String'>;
  useFormerEmploymentStatus?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  employeeStatus?: BenefitCurrentEmploymentStatus | null;
  newHireEnrollmentPeriod: DeserializedType<T, 'Edm.Int32'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  useEmployeeStatus?: NoYes | null;
  employmentCategory?: DeserializedType<T, 'Edm.String'> | null;
  formerEmploymentStatusFromDays: DeserializedType<T, 'Edm.Int32'>;
  formerEmploymentStatus?: BenefitEmploymentStatus | null;
  useEmployeeType?: NoYes | null;
  useEmployeeCategory?: NoYes | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  useNewHireRule?: NoYes | null;
  formerEmploymentStatusToDays: DeserializedType<T, 'Edm.Int32'>;
  workerType?: HcmEmploymentType | null;
  benefitsPlanEligibilityRule: BenefitsPlanEligibilityRulesType<T>[];
  benefitsProgramEligibilityRule: BenefitsProgramEligibilityRulesType<T>[];
}
