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
import type { AccrualBasisEarningCodesApi } from './AccrualBasisEarningCodesApi';
import { PayrollAccrualType } from './PayrollAccrualType';
import { EarningCodeGroups, EarningCodeGroupsType } from './EarningCodeGroups';
import { AccrualPlans, AccrualPlansType } from './AccrualPlans';

/**
 * This class represents the entity "AccrualBasisEarningCodes" of service "d365_metadata".
 */
export class AccrualBasisEarningCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AccrualBasisEarningCodesType<T>
{
  /**
   * Technical entity name for AccrualBasisEarningCodes.
   */
  static override _entityName = 'AccrualBasisEarningCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AccrualBasisEarningCodes entity.
   */
  static _keys = ['AccrualId', 'EarningCodeId', 'EarningCodeGroupId'];
  /**
   * Accrual Id.
   */
  declare accrualId: DeserializedType<T, 'Edm.String'>;
  /**
   * Earning Code Id.
   */
  declare earningCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Earning Code Group Id.
   */
  declare earningCodeGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Accrual Type.
   * @nullable
   */
  declare accrualType?: PayrollAccrualType | null;
  /**
   * Accrual Rate.
   */
  declare accrualRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link EarningCodeGroups} entity.
   */
  declare earningCodeGroup?: EarningCodeGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link AccrualPlans} entity.
   */
  declare accrualPlan?: AccrualPlans<T> | null;

  constructor(_entityApi: AccrualBasisEarningCodesApi<T>) {
    super(_entityApi);
  }
}

export interface AccrualBasisEarningCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  accrualId: DeserializedType<T, 'Edm.String'>;
  earningCodeId: DeserializedType<T, 'Edm.String'>;
  earningCodeGroupId: DeserializedType<T, 'Edm.String'>;
  accrualType?: PayrollAccrualType | null;
  accrualRate: DeserializedType<T, 'Edm.Decimal'>;
  earningCodeGroup?: EarningCodeGroupsType<T> | null;
  accrualPlan?: AccrualPlansType<T> | null;
}
