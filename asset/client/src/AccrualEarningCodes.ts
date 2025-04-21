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
import type { AccrualEarningCodesApi } from './AccrualEarningCodesApi';
import { AccrualPlans, AccrualPlansType } from './AccrualPlans';

/**
 * This class represents the entity "AccrualEarningCodes" of service "d365_metadata".
 */
export class AccrualEarningCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AccrualEarningCodesType<T>
{
  /**
   * Technical entity name for AccrualEarningCodes.
   */
  static override _entityName = 'AccrualEarningCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AccrualEarningCodes entity.
   */
  static _keys = ['AccrualId', 'EarningCodeId'];
  /**
   * Accrual Id.
   */
  declare accrualId: DeserializedType<T, 'Edm.String'>;
  /**
   * Earning Code Id.
   */
  declare earningCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link AccrualPlans} entity.
   */
  declare accrualPlan?: AccrualPlans<T> | null;

  constructor(_entityApi: AccrualEarningCodesApi<T>) {
    super(_entityApi);
  }
}

export interface AccrualEarningCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  accrualId: DeserializedType<T, 'Edm.String'>;
  earningCodeId: DeserializedType<T, 'Edm.String'>;
  accrualPlan?: AccrualPlansType<T> | null;
}
