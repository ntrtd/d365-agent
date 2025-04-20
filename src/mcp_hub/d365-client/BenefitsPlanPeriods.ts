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
import type { BenefitsPlanPeriodsApi } from './BenefitsPlanPeriodsApi';

/**
 * This class represents the entity "BenefitsPlanPeriods" of service "d365_metadata".
 */
export class BenefitsPlanPeriods<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BenefitsPlanPeriodsType<T>
{
  /**
   * Technical entity name for BenefitsPlanPeriods.
   */
  static override _entityName = 'BenefitsPlanPeriods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsPlanPeriods entity.
   */
  static _keys = ['PeriodId', 'PlanId'];
  /**
   * Period Id.
   */
  declare periodId: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan Id.
   */
  declare planId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: BenefitsPlanPeriodsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsPlanPeriodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  periodId: DeserializedType<T, 'Edm.String'>;
  planId: DeserializedType<T, 'Edm.String'>;
}
