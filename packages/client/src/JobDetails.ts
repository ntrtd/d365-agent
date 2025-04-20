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
import type { JobDetailsApi } from './JobDetailsApi';
import { NoYes } from './NoYes';
import { JobFamilies, JobFamiliesType } from './JobFamilies';
import { Jobs, JobsType } from './Jobs';
import { PositionJobs, PositionJobsType } from './PositionJobs';

/**
 * This class represents the entity "JobDetails" of service "d365_metadata".
 */
export class JobDetails<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JobDetailsType<T>
{
  /**
   * Technical entity name for JobDetails.
   */
  static override _entityName = 'JobDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JobDetails entity.
   */
  static _keys = ['JobId', 'ValidFrom', 'ValidTo'];
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
   * Market Price Source.
   * @nullable
   */
  declare marketPriceSource?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Title Id.
   * @nullable
   */
  declare titleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paid Hourly.
   * @nullable
   */
  declare paidHourly?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Compensation Reference Job.
   * @nullable
   */
  declare compensationReferenceJob?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Function Id.
   * @nullable
   */
  declare functionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Full Time Equivalent.
   */
  declare fullTimeEquivalent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Job Family Id.
   * @nullable
   */
  declare jobFamilyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Type Id.
   * @nullable
   */
  declare jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Market Price Control Point.
   */
  declare marketPriceControlPoint: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Market Price Low Threshold.
   */
  declare marketPriceLowThreshold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Compensation Survey Company Id.
   * @nullable
   */
  declare compensationSurveyCompanyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Compensation Level Id.
   * @nullable
   */
  declare compensationLevelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Market Price High Threshold.
   */
  declare marketPriceHighThreshold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Job Description.
   * @nullable
   */
  declare jobDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link JobFamilies} entity.
   */
  declare jobFamily?: JobFamilies<T> | null;
  /**
   * One-to-one navigation property to the {@link Jobs} entity.
   */
  declare job?: Jobs<T> | null;
  /**
   * One-to-many navigation property to the {@link PositionJobs} entity.
   */
  declare positionJob: PositionJobs<T>[];

  constructor(_entityApi: JobDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface JobDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  marketPriceSource?: DeserializedType<T, 'Edm.String'> | null;
  titleId?: DeserializedType<T, 'Edm.String'> | null;
  paidHourly?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  compensationReferenceJob?: DeserializedType<T, 'Edm.String'> | null;
  functionId?: DeserializedType<T, 'Edm.String'> | null;
  fullTimeEquivalent: DeserializedType<T, 'Edm.Decimal'>;
  jobFamilyId?: DeserializedType<T, 'Edm.String'> | null;
  jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  marketPriceControlPoint: DeserializedType<T, 'Edm.Decimal'>;
  marketPriceLowThreshold: DeserializedType<T, 'Edm.Decimal'>;
  compensationSurveyCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  compensationLevelId?: DeserializedType<T, 'Edm.String'> | null;
  marketPriceHighThreshold: DeserializedType<T, 'Edm.Decimal'>;
  jobDescription?: DeserializedType<T, 'Edm.String'> | null;
  jobFamily?: JobFamiliesType<T> | null;
  job?: JobsType<T> | null;
  positionJob: PositionJobsType<T>[];
}
