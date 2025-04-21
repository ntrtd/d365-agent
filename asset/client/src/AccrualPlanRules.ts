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
import type { AccrualPlanRulesApi } from './AccrualPlanRulesApi';
import { AccrualPlans, AccrualPlansType } from './AccrualPlans';

/**
 * This class represents the entity "AccrualPlanRules" of service "d365_metadata".
 */
export class AccrualPlanRules<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AccrualPlanRulesType<T>
{
  /**
   * Technical entity name for AccrualPlanRules.
   */
  static override _entityName = 'AccrualPlanRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AccrualPlanRules entity.
   */
  static _keys = ['AccrualId', 'EmploymentMonths'];
  /**
   * Accrual Id.
   */
  declare accrualId: DeserializedType<T, 'Edm.String'>;
  /**
   * Employment Months.
   */
  declare employmentMonths: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Limit.
   */
  declare maximumLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Hourly Rate.
   */
  declare hourlyRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Minimum Limit.
   */
  declare minimumLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Carry Forward Limit.
   */
  declare carryForwardLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link AccrualPlans} entity.
   */
  declare accrualPlan?: AccrualPlans<T> | null;

  constructor(_entityApi: AccrualPlanRulesApi<T>) {
    super(_entityApi);
  }
}

export interface AccrualPlanRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  accrualId: DeserializedType<T, 'Edm.String'>;
  employmentMonths: DeserializedType<T, 'Edm.Decimal'>;
  maximumLimit: DeserializedType<T, 'Edm.Decimal'>;
  hourlyRate: DeserializedType<T, 'Edm.Decimal'>;
  minimumLimit: DeserializedType<T, 'Edm.Decimal'>;
  carryForwardLimit: DeserializedType<T, 'Edm.Decimal'>;
  accrualPlan?: AccrualPlansType<T> | null;
}
