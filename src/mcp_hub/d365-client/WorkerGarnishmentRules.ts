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
import type { WorkerGarnishmentRulesApi } from './WorkerGarnishmentRulesApi';
import { PayrollGarnishmentTaxLevyType } from './PayrollGarnishmentTaxLevyType';
import { NoYes } from './NoYes';
import { PayrollLimitMethod } from './PayrollLimitMethod';
import { PayrollMultipleGarnishmentMethod } from './PayrollMultipleGarnishmentMethod';
import { AddressStates, AddressStatesType } from './AddressStates';
import { Workers, WorkersType } from './Workers';
import { DisposableIncomes, DisposableIncomesType } from './DisposableIncomes';

/**
 * This class represents the entity "WorkerGarnishmentRules" of service "d365_metadata".
 */
export class WorkerGarnishmentRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkerGarnishmentRulesType<T>
{
  /**
   * Technical entity name for WorkerGarnishmentRules.
   */
  static override _entityName = 'WorkerGarnishmentRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerGarnishmentRules entity.
   */
  static _keys = ['GarnishmentTaxLevyType', 'PersonnelNumber', 'StateId'];
  /**
   * Garnishment Tax Levy Type.
   * @nullable
   */
  declare garnishmentTaxLevyType?: PayrollGarnishmentTaxLevyType | null;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * State Id.
   */
  declare stateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Disposable Earnings Percent.
   */
  declare disposableEarningsPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Alternate Limit.
   */
  declare alternateLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Disposable Income Name.
   * @nullable
   */
  declare disposableIncomeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Reduction.
   * @nullable
   */
  declare allowReduction?: NoYes | null;
  /**
   * Limit Method.
   * @nullable
   */
  declare limitMethod?: PayrollLimitMethod | null;
  /**
   * Disposable Income Exemption.
   */
  declare disposableIncomeExemption: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Minimum Wage.
   */
  declare minimumWage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Minimum Wage Multiplier.
   */
  declare minimumWageMultiplier: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Multiple Method.
   * @nullable
   */
  declare multipleMethod?: PayrollMultipleGarnishmentMethod | null;
  /**
   * Exempt Earning Amount.
   */
  declare exemptEarningAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link AddressStates} entity.
   */
  declare state?: AddressStates<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link DisposableIncomes} entity.
   */
  declare disposableIncome?: DisposableIncomes<T> | null;

  constructor(_entityApi: WorkerGarnishmentRulesApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerGarnishmentRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  garnishmentTaxLevyType?: PayrollGarnishmentTaxLevyType | null;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  stateId: DeserializedType<T, 'Edm.String'>;
  disposableEarningsPercent: DeserializedType<T, 'Edm.Decimal'>;
  alternateLimit: DeserializedType<T, 'Edm.Decimal'>;
  disposableIncomeName?: DeserializedType<T, 'Edm.String'> | null;
  allowReduction?: NoYes | null;
  limitMethod?: PayrollLimitMethod | null;
  disposableIncomeExemption: DeserializedType<T, 'Edm.Decimal'>;
  minimumWage: DeserializedType<T, 'Edm.Decimal'>;
  minimumWageMultiplier: DeserializedType<T, 'Edm.Decimal'>;
  multipleMethod?: PayrollMultipleGarnishmentMethod | null;
  exemptEarningAmount: DeserializedType<T, 'Edm.Decimal'>;
  state?: AddressStatesType<T> | null;
  worker?: WorkersType<T> | null;
  disposableIncome?: DisposableIncomesType<T> | null;
}
