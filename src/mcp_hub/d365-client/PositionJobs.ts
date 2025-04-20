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
import type { PositionJobsApi } from './PositionJobsApi';
import {
  PayrollFixedCompensationPlans,
  PayrollFixedCompensationPlansType
} from './PayrollFixedCompensationPlans';
import {
  IntV1PayrollFixedCompensationPlans,
  IntV1PayrollFixedCompensationPlansType
} from './IntV1PayrollFixedCompensationPlans';
import { JobDetails, JobDetailsType } from './JobDetails';
import { PayrollPositions, PayrollPositionsType } from './PayrollPositions';
import {
  PayIntV1PayrollPositions,
  PayIntV1PayrollPositionsType
} from './PayIntV1PayrollPositions';

/**
 * This class represents the entity "PositionJobs" of service "d365_metadata".
 */
export class PositionJobs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PositionJobsType<T>
{
  /**
   * Technical entity name for PositionJobs.
   */
  static override _entityName = 'PositionJobs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PositionJobs entity.
   */
  static _keys = ['PositionId', 'JobId', 'ValidFrom'];
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Id.
   */
  declare jobId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link PayrollFixedCompensationPlans} entity.
   */
  declare payrollFixedCompensationPlan: PayrollFixedCompensationPlans<T>[];
  /**
   * One-to-many navigation property to the {@link IntV1PayrollFixedCompensationPlans} entity.
   */
  declare intV1PayrollFixedCompensationPlan: IntV1PayrollFixedCompensationPlans<T>[];
  /**
   * One-to-one navigation property to the {@link JobDetails} entity.
   */
  declare jobDetail?: JobDetails<T> | null;
  /**
   * One-to-one navigation property to the {@link PayrollPositions} entity.
   */
  declare payrollPosition?: PayrollPositions<T> | null;
  /**
   * One-to-many navigation property to the {@link PayIntV1PayrollPositions} entity.
   */
  declare payIntV1PayrollPosition: PayIntV1PayrollPositions<T>[];

  constructor(_entityApi: PositionJobsApi<T>) {
    super(_entityApi);
  }
}

export interface PositionJobsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  positionId: DeserializedType<T, 'Edm.String'>;
  jobId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payrollFixedCompensationPlan: PayrollFixedCompensationPlansType<T>[];
  intV1PayrollFixedCompensationPlan: IntV1PayrollFixedCompensationPlansType<T>[];
  jobDetail?: JobDetailsType<T> | null;
  payrollPosition?: PayrollPositionsType<T> | null;
  payIntV1PayrollPosition: PayIntV1PayrollPositionsType<T>[];
}
