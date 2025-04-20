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
import type { DataManagementExecutionJobsApi } from './DataManagementExecutionJobsApi';
import {
  DataManagementExecutionJobDetails,
  DataManagementExecutionJobDetailsType
} from './DataManagementExecutionJobDetails';

/**
 * This class represents the entity "DataManagementExecutionJobs" of service "d365_metadata".
 */
export class DataManagementExecutionJobs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DataManagementExecutionJobsType<T>
{
  /**
   * Technical entity name for DataManagementExecutionJobs.
   */
  static override _entityName = 'DataManagementExecutionJobs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DataManagementExecutionJobs entity.
   */
  static _keys = ['JobId'];
  /**
   * Job Id.
   */
  declare jobId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link DataManagementExecutionJobDetails} entity.
   */
  declare details: DataManagementExecutionJobDetails<T>[];

  constructor(_entityApi: DataManagementExecutionJobsApi<T>) {
    super(_entityApi);
  }
}

export interface DataManagementExecutionJobsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  details: DataManagementExecutionJobDetailsType<T>[];
}
