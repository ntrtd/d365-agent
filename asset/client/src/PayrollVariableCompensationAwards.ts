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
import type { PayrollVariableCompensationAwardsApi } from './PayrollVariableCompensationAwardsApi';
import { HrmCompProcessType } from './HrmCompProcessType';
import { HrmCompVarAwardEmplType } from './HrmCompVarAwardEmplType';
import {
  PayrollFixedCompensationPlans,
  PayrollFixedCompensationPlansType
} from './PayrollFixedCompensationPlans';
import {
  IntV1PayrollFixedCompensationPlans,
  IntV1PayrollFixedCompensationPlansType
} from './IntV1PayrollFixedCompensationPlans';
import { BaseWorkers, BaseWorkersType } from './BaseWorkers';
import { PayrollEmployees, PayrollEmployeesType } from './PayrollEmployees';

/**
 * This class represents the entity "PayrollVariableCompensationAwards" of service "d365_metadata".
 */
export class PayrollVariableCompensationAwards<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayrollVariableCompensationAwardsType<T>
{
  /**
   * Technical entity name for PayrollVariableCompensationAwards.
   */
  static override _entityName = 'PayrollVariableCompensationAwards';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayrollVariableCompensationAwards entity.
   */
  static _keys = [
    'dataAreaId',
    'PersonnelNumber',
    'PlanId',
    'TypeId',
    'AwardDate'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan Id.
   */
  declare planId: DeserializedType<T, 'Edm.String'>;
  /**
   * Type Id.
   */
  declare typeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Award Date.
   */
  declare awardDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Unit Value.
   */
  declare unitValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Process Type.
   * @nullable
   */
  declare processType?: HrmCompProcessType | null;
  /**
   * Award Type.
   * @nullable
   */
  declare awardType?: HrmCompVarAwardEmplType | null;
  /**
   * Fixed Plan Id.
   * @nullable
   */
  declare fixedPlanId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Currency Code.
   * @nullable
   */
  declare unitCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Of Units.
   */
  declare numberOfUnits: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link PayrollFixedCompensationPlans} entity.
   */
  declare payrollFixedCompensationPlan: PayrollFixedCompensationPlans<T>[];
  /**
   * One-to-many navigation property to the {@link IntV1PayrollFixedCompensationPlans} entity.
   */
  declare intV1PayrollFixedCompensationPlan: IntV1PayrollFixedCompensationPlans<T>[];
  /**
   * One-to-one navigation property to the {@link BaseWorkers} entity.
   */
  declare baseWorker?: BaseWorkers<T> | null;
  /**
   * One-to-one navigation property to the {@link PayrollEmployees} entity.
   */
  declare payrollEmployee?: PayrollEmployees<T> | null;

  constructor(_entityApi: PayrollVariableCompensationAwardsApi<T>) {
    super(_entityApi);
  }
}

export interface PayrollVariableCompensationAwardsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  planId: DeserializedType<T, 'Edm.String'>;
  typeId: DeserializedType<T, 'Edm.String'>;
  awardDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  unitValue: DeserializedType<T, 'Edm.Decimal'>;
  processType?: HrmCompProcessType | null;
  awardType?: HrmCompVarAwardEmplType | null;
  fixedPlanId?: DeserializedType<T, 'Edm.String'> | null;
  unitCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  numberOfUnits: DeserializedType<T, 'Edm.Decimal'>;
  payrollFixedCompensationPlan: PayrollFixedCompensationPlansType<T>[];
  intV1PayrollFixedCompensationPlan: IntV1PayrollFixedCompensationPlansType<T>[];
  baseWorker?: BaseWorkersType<T> | null;
  payrollEmployee?: PayrollEmployeesType<T> | null;
}
