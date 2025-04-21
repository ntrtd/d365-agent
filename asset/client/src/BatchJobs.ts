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
import type { BatchJobsApi } from './BatchJobsApi';
import { BatchLogLevel } from './BatchLogLevel';
import { BatchStatus } from './BatchStatus';

/**
 * This class represents the entity "BatchJobs" of service "d365_metadata".
 */
export class BatchJobs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BatchJobsType<T>
{
  /**
   * Technical entity name for BatchJobs.
   */
  static override _entityName = 'BatchJobs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BatchJobs entity.
   */
  static _keys = ['BatchJobRecId'];
  /**
   * Batch Job Rec Id.
   */
  declare batchJobRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Runtime Job.
   */
  declare runtimeJob: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Job Description.
   * @nullable
   */
  declare jobDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date Time.
   */
  declare startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Executing By.
   * @nullable
   */
  declare executingBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Accounts.
   * @nullable
   */
  declare companyAccounts?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Save Job To History.
   * @nullable
   */
  declare saveJobToHistory?: BatchLogLevel | null;
  /**
   * End Date Time.
   */
  declare endDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Partition Key.
   * @nullable
   */
  declare partitionKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Time.
   */
  declare startTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Finishing.
   */
  declare finishing: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Orig Start Date Time.
   */
  declare origStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Canceled By.
   * @nullable
   */
  declare canceledBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: BatchStatus | null;
  /**
   * Recurrence.
   * @nullable
   */
  declare recurrence?: DeserializedType<T, 'Edm.Binary'> | null;

  constructor(_entityApi: BatchJobsApi<T>) {
    super(_entityApi);
  }
}

export interface BatchJobsType<T extends DeSerializers = DefaultDeSerializers> {
  batchJobRecId: DeserializedType<T, 'Edm.Int64'>;
  runtimeJob: DeserializedType<T, 'Edm.Boolean'>;
  jobDescription?: DeserializedType<T, 'Edm.String'> | null;
  startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  executingBy?: DeserializedType<T, 'Edm.String'> | null;
  companyAccounts?: DeserializedType<T, 'Edm.String'> | null;
  saveJobToHistory?: BatchLogLevel | null;
  endDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  partitionKey?: DeserializedType<T, 'Edm.String'> | null;
  startTime: DeserializedType<T, 'Edm.Int32'>;
  finishing: DeserializedType<T, 'Edm.Int32'>;
  origStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  canceledBy?: DeserializedType<T, 'Edm.String'> | null;
  status?: BatchStatus | null;
  recurrence?: DeserializedType<T, 'Edm.Binary'> | null;
}
