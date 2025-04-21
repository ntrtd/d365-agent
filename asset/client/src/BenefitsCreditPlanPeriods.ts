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
import type { BenefitsCreditPlanPeriodsApi } from './BenefitsCreditPlanPeriodsApi';

/**
 * This class represents the entity "BenefitsCreditPlanPeriods" of service "d365_metadata".
 */
export class BenefitsCreditPlanPeriods<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsCreditPlanPeriodsType<T>
{
  /**
   * Technical entity name for BenefitsCreditPlanPeriods.
   */
  static override _entityName = 'BenefitsCreditPlanPeriods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsCreditPlanPeriods entity.
   */
  static _keys = ['dataAreaId', 'PlanId', 'PeriodId', 'CreditId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan Id.
   */
  declare planId: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Id.
   */
  declare periodId: DeserializedType<T, 'Edm.String'>;
  /**
   * Credit Id.
   */
  declare creditId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: BenefitsCreditPlanPeriodsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsCreditPlanPeriodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  planId: DeserializedType<T, 'Edm.String'>;
  periodId: DeserializedType<T, 'Edm.String'>;
  creditId: DeserializedType<T, 'Edm.String'>;
}
