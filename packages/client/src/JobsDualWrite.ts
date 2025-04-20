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
import type { JobsDualWriteApi } from './JobsDualWriteApi';
import { NoYes } from './NoYes';
import { JobFunctions, JobFunctionsType } from './JobFunctions';
import { JobTypes, JobTypesType } from './JobTypes';

/**
 * This class represents the entity "JobsDualWrite" of service "d365_metadata".
 */
export class JobsDualWrite<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JobsDualWriteType<T>
{
  /**
   * Technical entity name for JobsDualWrite.
   */
  static override _entityName = 'JobsDualWrite';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JobsDualWrite entity.
   */
  static _keys = ['JobId'];
  /**
   * Job Id.
   */
  declare jobId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maximum Number Of Positions.
   */
  declare maximumNumberOfPositions: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Job Description.
   * @nullable
   */
  declare jobDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Title Id.
   * @nullable
   */
  declare titleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Type Id.
   * @nullable
   */
  declare jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Job Function Id.
   * @nullable
   */
  declare jobFunctionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Unlimited Positions.
   * @nullable
   */
  declare allowUnlimitedPositions?: NoYes | null;
  /**
   * Default Full Time Equivalency.
   */
  declare defaultFullTimeEquivalency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link JobFunctions} entity.
   */
  declare jobFunction?: JobFunctions<T> | null;
  /**
   * One-to-one navigation property to the {@link JobTypes} entity.
   */
  declare jobType?: JobTypes<T> | null;

  constructor(_entityApi: JobsDualWriteApi<T>) {
    super(_entityApi);
  }
}

export interface JobsDualWriteType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobId: DeserializedType<T, 'Edm.String'>;
  maximumNumberOfPositions: DeserializedType<T, 'Edm.Int32'>;
  jobDescription?: DeserializedType<T, 'Edm.String'> | null;
  titleId?: DeserializedType<T, 'Edm.String'> | null;
  jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  jobFunctionId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  allowUnlimitedPositions?: NoYes | null;
  defaultFullTimeEquivalency: DeserializedType<T, 'Edm.Decimal'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  jobFunction?: JobFunctionsType<T> | null;
  jobType?: JobTypesType<T> | null;
}
