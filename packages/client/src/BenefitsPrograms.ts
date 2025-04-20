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
import type { BenefitsProgramsApi } from './BenefitsProgramsApi';
import {
  BenefitsProgramEligibilityRules,
  BenefitsProgramEligibilityRulesType
} from './BenefitsProgramEligibilityRules';
import { BenefitsPlans, BenefitsPlansType } from './BenefitsPlans';

/**
 * This class represents the entity "BenefitsPrograms" of service "d365_metadata".
 */
export class BenefitsPrograms<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BenefitsProgramsType<T>
{
  /**
   * Technical entity name for BenefitsPrograms.
   */
  static override _entityName = 'BenefitsPrograms';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsPrograms entity.
   */
  static _keys = ['ProgramId'];
  /**
   * Program Id.
   */
  declare programId: DeserializedType<T, 'Edm.String'>;
  /**
   * Deduction Waiting Period Id.
   * @nullable
   */
  declare deductionWaitingPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Coverage Waiting Period Id.
   * @nullable
   */
  declare coverageWaitingPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link BenefitsProgramEligibilityRules} entity.
   */
  declare benefitsProgramEligibilityRule: BenefitsProgramEligibilityRules<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitsPlans} entity.
   */
  declare benefitsPlan: BenefitsPlans<T>[];

  constructor(_entityApi: BenefitsProgramsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsProgramsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  programId: DeserializedType<T, 'Edm.String'>;
  deductionWaitingPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  coverageWaitingPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  benefitsProgramEligibilityRule: BenefitsProgramEligibilityRulesType<T>[];
  benefitsPlan: BenefitsPlansType<T>[];
}
