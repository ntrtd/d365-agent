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
import type { BenefitsPlanTypesApi } from './BenefitsPlanTypesApi';
import { BenefitConcurrentEnrollment } from './BenefitConcurrentEnrollment';
import { BenefitDesigneeType } from './BenefitDesigneeType';
import { BenefitPlanTypeCode } from './BenefitPlanTypeCode';
import {
  PayrollWorkerBenefitPlans,
  PayrollWorkerBenefitPlansType
} from './PayrollWorkerBenefitPlans';
import {
  BenefitsLifeEventOptions,
  BenefitsLifeEventOptionsType
} from './BenefitsLifeEventOptions';
import {
  BenefitsPlanTypeCoverageOptions,
  BenefitsPlanTypeCoverageOptionsType
} from './BenefitsPlanTypeCoverageOptions';

/**
 * This class represents the entity "BenefitsPlanTypes" of service "d365_metadata".
 */
export class BenefitsPlanTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BenefitsPlanTypesType<T>
{
  /**
   * Technical entity name for BenefitsPlanTypes.
   */
  static override _entityName = 'BenefitsPlanTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsPlanTypes entity.
   */
  static _keys = ['PlanTypeId'];
  /**
   * Plan Type Id.
   */
  declare planTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Concurrent Enrollment.
   * @nullable
   */
  declare concurrentEnrollment?: BenefitConcurrentEnrollment | null;
  /**
   * Contact Type.
   * @nullable
   */
  declare contactType?: BenefitDesigneeType | null;
  /**
   * Plan Type Code.
   * @nullable
   */
  declare planTypeCode?: BenefitPlanTypeCode | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link PayrollWorkerBenefitPlans} entity.
   */
  declare payrollWorkerBenefitPlan?: PayrollWorkerBenefitPlans<T> | null;
  /**
   * One-to-many navigation property to the {@link BenefitsLifeEventOptions} entity.
   */
  declare benefitsLifeEventOption: BenefitsLifeEventOptions<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitsPlanTypeCoverageOptions} entity.
   */
  declare benefitPlanTypeCoverageOptions: BenefitsPlanTypeCoverageOptions<T>[];

  constructor(_entityApi: BenefitsPlanTypesApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsPlanTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  planTypeId: DeserializedType<T, 'Edm.String'>;
  concurrentEnrollment?: BenefitConcurrentEnrollment | null;
  contactType?: BenefitDesigneeType | null;
  planTypeCode?: BenefitPlanTypeCode | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  payrollWorkerBenefitPlan?: PayrollWorkerBenefitPlansType<T> | null;
  benefitsLifeEventOption: BenefitsLifeEventOptionsType<T>[];
  benefitPlanTypeCoverageOptions: BenefitsPlanTypeCoverageOptionsType<T>[];
}
