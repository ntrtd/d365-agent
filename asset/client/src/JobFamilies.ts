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
import type { JobFamiliesApi } from './JobFamiliesApi';
import {
  PayIntV1HcmPositionDetails,
  PayIntV1HcmPositionDetailsType
} from './PayIntV1HcmPositionDetails';
import { PositionDetails, PositionDetailsType } from './PositionDetails';
import { Jobs, JobsType } from './Jobs';
import {
  PayIntV1JobDetails,
  PayIntV1JobDetailsType
} from './PayIntV1JobDetails';
import { JobDetails, JobDetailsType } from './JobDetails';

/**
 * This class represents the entity "JobFamilies" of service "d365_metadata".
 */
export class JobFamilies<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JobFamiliesType<T>
{
  /**
   * Technical entity name for JobFamilies.
   */
  static override _entityName = 'JobFamilies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JobFamilies entity.
   */
  static _keys = ['JobFamilyId'];
  /**
   * Job Family Id.
   */
  declare jobFamilyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link PayIntV1HcmPositionDetails} entity.
   */
  declare payIntPositionDetails: PayIntV1HcmPositionDetails<T>[];
  /**
   * One-to-many navigation property to the {@link PositionDetails} entity.
   */
  declare positionDetails: PositionDetails<T>[];
  /**
   * One-to-many navigation property to the {@link Jobs} entity.
   */
  declare jobs: Jobs<T>[];
  /**
   * One-to-many navigation property to the {@link PayIntV1JobDetails} entity.
   */
  declare payIntDetails: PayIntV1JobDetails<T>[];
  /**
   * One-to-many navigation property to the {@link JobDetails} entity.
   */
  declare details: JobDetails<T>[];

  constructor(_entityApi: JobFamiliesApi<T>) {
    super(_entityApi);
  }
}

export interface JobFamiliesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobFamilyId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  payIntPositionDetails: PayIntV1HcmPositionDetailsType<T>[];
  positionDetails: PositionDetailsType<T>[];
  jobs: JobsType<T>[];
  payIntDetails: PayIntV1JobDetailsType<T>[];
  details: JobDetailsType<T>[];
}
