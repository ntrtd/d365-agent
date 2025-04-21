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
import type { PayrollFixedCompensationPlansApi } from './PayrollFixedCompensationPlansApi';
import { HrmCompProcessType } from './HrmCompProcessType';
import { HcmCompensationType } from './HcmCompensationType';
import { PositionsV2, PositionsV2Type } from './PositionsV2';
import {
  PayrollVariableCompensationAwards,
  PayrollVariableCompensationAwardsType
} from './PayrollVariableCompensationAwards';
import { PositionJobs, PositionJobsType } from './PositionJobs';
import { BaseWorkers, BaseWorkersType } from './BaseWorkers';
import {
  CompFixedPlanTables,
  CompFixedPlanTablesType
} from './CompFixedPlanTables';
import { PayrollPositions, PayrollPositionsType } from './PayrollPositions';
import { PayrollEmployees, PayrollEmployeesType } from './PayrollEmployees';
import {
  PayIntV1PayrollPositions,
  PayIntV1PayrollPositionsType
} from './PayIntV1PayrollPositions';

/**
 * This class represents the entity "PayrollFixedCompensationPlans" of service "d365_metadata".
 */
export class PayrollFixedCompensationPlans<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayrollFixedCompensationPlansType<T>
{
  /**
   * Technical entity name for PayrollFixedCompensationPlans.
   */
  static override _entityName = 'PayrollFixedCompensationPlans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayrollFixedCompensationPlans entity.
   */
  static _keys = ['dataAreaId', 'PlanId', 'ValidFrom', 'PersonnelNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan Id.
   */
  declare planId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Pay Frequency.
   * @nullable
   */
  declare payFrequency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Position Id.
   * @nullable
   */
  declare positionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Rate.
   */
  declare payRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Process Type.
   * @nullable
   */
  declare processType?: HrmCompProcessType | null;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Action Id.
   * @nullable
   */
  declare actionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: HcmCompensationType | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link PositionsV2} entity.
   */
  declare positionV2?: PositionsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link PayrollVariableCompensationAwards} entity.
   */
  declare payrollVariableCompensationAward?: PayrollVariableCompensationAwards<T> | null;
  /**
   * One-to-one navigation property to the {@link PositionJobs} entity.
   */
  declare positionJob?: PositionJobs<T> | null;
  /**
   * One-to-one navigation property to the {@link BaseWorkers} entity.
   */
  declare baseWorker?: BaseWorkers<T> | null;
  /**
   * One-to-one navigation property to the {@link CompFixedPlanTables} entity.
   */
  declare compFixedPlanTable?: CompFixedPlanTables<T> | null;
  /**
   * One-to-one navigation property to the {@link PayrollPositions} entity.
   */
  declare payrollPosition?: PayrollPositions<T> | null;
  /**
   * One-to-one navigation property to the {@link PayrollEmployees} entity.
   */
  declare payrollEmployee?: PayrollEmployees<T> | null;
  /**
   * One-to-one navigation property to the {@link PayIntV1PayrollPositions} entity.
   */
  declare payIntV1PayrollPosition?: PayIntV1PayrollPositions<T> | null;

  constructor(_entityApi: PayrollFixedCompensationPlansApi<T>) {
    super(_entityApi);
  }
}

export interface PayrollFixedCompensationPlansType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  planId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  payFrequency?: DeserializedType<T, 'Edm.String'> | null;
  positionId?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  payRate: DeserializedType<T, 'Edm.Decimal'>;
  processType?: HrmCompProcessType | null;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  actionId?: DeserializedType<T, 'Edm.String'> | null;
  type?: HcmCompensationType | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  positionV2?: PositionsV2Type<T> | null;
  payrollVariableCompensationAward?: PayrollVariableCompensationAwardsType<T> | null;
  positionJob?: PositionJobsType<T> | null;
  baseWorker?: BaseWorkersType<T> | null;
  compFixedPlanTable?: CompFixedPlanTablesType<T> | null;
  payrollPosition?: PayrollPositionsType<T> | null;
  payrollEmployee?: PayrollEmployeesType<T> | null;
  payIntV1PayrollPosition?: PayIntV1PayrollPositionsType<T> | null;
}
