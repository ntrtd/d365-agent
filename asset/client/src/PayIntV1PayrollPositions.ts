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
import type { PayIntV1PayrollPositionsApi } from './PayIntV1PayrollPositionsApi';
import {
  PayrollFixedCompensationPlans,
  PayrollFixedCompensationPlansType
} from './PayrollFixedCompensationPlans';
import { PositionsV2, PositionsV2Type } from './PositionsV2';
import {
  PositionWorkerAssignmentsV2,
  PositionWorkerAssignmentsV2Type
} from './PositionWorkerAssignmentsV2';
import {
  PositionHierarchies,
  PositionHierarchiesType
} from './PositionHierarchies';
import { PositionJobs, PositionJobsType } from './PositionJobs';

/**
 * This class represents the entity "PayIntV1PayrollPositions" of service "d365_metadata".
 */
export class PayIntV1PayrollPositions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1PayrollPositionsType<T>
{
  /**
   * Technical entity name for PayIntV1PayrollPositions.
   */
  static override _entityName = 'PayIntV1PayrollPositions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1PayrollPositions entity.
   */
  static _keys = ['PositionId', 'ValidFrom'];
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Annual Regular Hours.
   */
  declare annualRegularHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pay Cycle Id.
   * @nullable
   */
  declare payCycleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paid By Legal Entity.
   * @nullable
   */
  declare paidByLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link PayrollFixedCompensationPlans} entity.
   */
  declare payrollFixedCompensationPlan?: PayrollFixedCompensationPlans<T> | null;
  /**
   * One-to-one navigation property to the {@link PositionsV2} entity.
   */
  declare positionV2?: PositionsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link PositionWorkerAssignmentsV2} entity.
   */
  declare positionWorkerAssignmentV2?: PositionWorkerAssignmentsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link PositionHierarchies} entity.
   */
  declare positionHierarchy?: PositionHierarchies<T> | null;
  /**
   * One-to-one navigation property to the {@link PositionJobs} entity.
   */
  declare positionJob?: PositionJobs<T> | null;

  constructor(_entityApi: PayIntV1PayrollPositionsApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1PayrollPositionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  positionId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  annualRegularHours: DeserializedType<T, 'Edm.Decimal'>;
  payCycleId?: DeserializedType<T, 'Edm.String'> | null;
  paidByLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payrollFixedCompensationPlan?: PayrollFixedCompensationPlansType<T> | null;
  positionV2?: PositionsV2Type<T> | null;
  positionWorkerAssignmentV2?: PositionWorkerAssignmentsV2Type<T> | null;
  positionHierarchy?: PositionHierarchiesType<T> | null;
  positionJob?: PositionJobsType<T> | null;
}
