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
import type { DocumentRoutingJobsApi } from './DocumentRoutingJobsApi';
import { DocumentRoutingJobStatus } from './DocumentRoutingJobStatus';

/**
 * This class represents the entity "DocumentRoutingJobs" of service "d365_metadata".
 */
export class DocumentRoutingJobs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DocumentRoutingJobsType<T>
{
  /**
   * Technical entity name for DocumentRoutingJobs.
   */
  static override _entityName = 'DocumentRoutingJobs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DocumentRoutingJobs entity.
   */
  static _keys = ['JobId'];
  /**
   * Job Id.
   */
  declare jobId: DeserializedType<T, 'Edm.String'>;
  /**
   * End Process Time.
   */
  declare endProcessTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Activity Id.
   */
  declare activityId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Total Number Of Pages.
   */
  declare totalNumberOfPages: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Printer Id.
   */
  declare printerId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Report Name.
   * @nullable
   */
  declare reportName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Message.
   * @nullable
   */
  declare message?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Id.
   * @nullable
   */
  declare companyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Process Time.
   */
  declare startProcessTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Job Status.
   * @nullable
   */
  declare jobStatus?: DocumentRoutingJobStatus | null;
  /**
   * Printer Path.
   * @nullable
   */
  declare printerPath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Printer Name.
   * @nullable
   */
  declare printerName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DocumentRoutingJobsApi<T>) {
    super(_entityApi);
  }
}

export interface DocumentRoutingJobsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobId: DeserializedType<T, 'Edm.String'>;
  endProcessTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  activityId: DeserializedType<T, 'Edm.Guid'>;
  totalNumberOfPages: DeserializedType<T, 'Edm.Int32'>;
  printerId: DeserializedType<T, 'Edm.Guid'>;
  reportName?: DeserializedType<T, 'Edm.String'> | null;
  message?: DeserializedType<T, 'Edm.String'> | null;
  companyId?: DeserializedType<T, 'Edm.String'> | null;
  startProcessTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  jobStatus?: DocumentRoutingJobStatus | null;
  printerPath?: DeserializedType<T, 'Edm.String'> | null;
  printerName?: DeserializedType<T, 'Edm.String'> | null;
}
