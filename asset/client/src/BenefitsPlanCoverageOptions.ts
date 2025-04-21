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
import type { BenefitsPlanCoverageOptionsApi } from './BenefitsPlanCoverageOptionsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "BenefitsPlanCoverageOptions" of service "d365_metadata".
 */
export class BenefitsPlanCoverageOptions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsPlanCoverageOptionsType<T>
{
  /**
   * Technical entity name for BenefitsPlanCoverageOptions.
   */
  static override _entityName = 'BenefitsPlanCoverageOptions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsPlanCoverageOptions entity.
   */
  static _keys = ['PlanId', 'CoverageOptionId'];
  /**
   * Plan Id.
   */
  declare planId: DeserializedType<T, 'Edm.String'>;
  /**
   * Coverage Option Id.
   */
  declare coverageOptionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Default Option.
   * @nullable
   */
  declare defaultOption?: NoYes | null;
  /**
   * Deduction Id.
   * @nullable
   */
  declare deductionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rate Id.
   * @nullable
   */
  declare rateId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BenefitsPlanCoverageOptionsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsPlanCoverageOptionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  planId: DeserializedType<T, 'Edm.String'>;
  coverageOptionId: DeserializedType<T, 'Edm.String'>;
  defaultOption?: NoYes | null;
  deductionId?: DeserializedType<T, 'Edm.String'> | null;
  rateId?: DeserializedType<T, 'Edm.String'> | null;
}
