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
import type { BenefitTypesApi } from './BenefitTypesApi';
import { HcmBenefitConcurrentEnrollment } from './HcmBenefitConcurrentEnrollment';
import { PayrollCategory } from './PayrollCategory';
import { BenefitPlans, BenefitPlansType } from './BenefitPlans';

/**
 * This class represents the entity "BenefitTypes" of service "d365_metadata".
 */
export class BenefitTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BenefitTypesType<T>
{
  /**
   * Technical entity name for BenefitTypes.
   */
  static override _entityName = 'BenefitTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitTypes entity.
   */
  static _keys = ['BenefitTypeId'];
  /**
   * Benefit Type Id.
   */
  declare benefitTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Concurrent Enrollment.
   * @nullable
   */
  declare concurrentEnrollment?: HcmBenefitConcurrentEnrollment | null;
  /**
   * Payroll Category.
   * @nullable
   */
  declare payrollCategory?: PayrollCategory | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link BenefitPlans} entity.
   */
  declare benefitPlans: BenefitPlans<T>[];

  constructor(_entityApi: BenefitTypesApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  benefitTypeId: DeserializedType<T, 'Edm.String'>;
  concurrentEnrollment?: HcmBenefitConcurrentEnrollment | null;
  payrollCategory?: PayrollCategory | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  benefitPlans: BenefitPlansType<T>[];
}
