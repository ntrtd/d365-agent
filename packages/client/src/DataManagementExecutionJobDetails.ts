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
import type { DataManagementExecutionJobDetailsApi } from './DataManagementExecutionJobDetailsApi';
import { DmfBatchJobStatus } from './DmfBatchJobStatus';
import { NoYes } from './NoYes';
import {
  DataManagementExecutionJobs,
  DataManagementExecutionJobsType
} from './DataManagementExecutionJobs';

/**
 * This class represents the entity "DataManagementExecutionJobDetails" of service "d365_metadata".
 */
export class DataManagementExecutionJobDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DataManagementExecutionJobDetailsType<T>
{
  /**
   * Technical entity name for DataManagementExecutionJobDetails.
   */
  static override _entityName = 'DataManagementExecutionJobDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DataManagementExecutionJobDetails entity.
   */
  static _keys = ['DefinitionGroupId', 'JobId', 'EntityName'];
  /**
   * Definition Group Id.
   */
  declare definitionGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Id.
   */
  declare jobId: DeserializedType<T, 'Edm.String'>;
  /**
   * Entity Name.
   */
  declare entityName: DeserializedType<T, 'Edm.String'>;
  /**
   * Level In Execution Unit.
   */
  declare levelInExecutionUnit: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Staging Status.
   * @nullable
   */
  declare stagingStatus?: DmfBatchJobStatus | null;
  /**
   * Run Business Validation.
   * @nullable
   */
  declare runBusinessValidation?: NoYes | null;
  /**
   * Fail Execution Unit On Error.
   * @nullable
   */
  declare failExecutionUnitOnError?: NoYes | null;
  /**
   * File Path.
   * @nullable
   */
  declare filePath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Run Business Logic.
   * @nullable
   */
  declare runBusinessLogic?: NoYes | null;
  /**
   * Target Start Date Time.
   */
  declare targetStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Staging Records To Be Processed Count.
   */
  declare stagingRecordsToBeProcessedCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Staging Start Date Time.
   */
  declare stagingStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Target Records Updated Count.
   */
  declare targetRecordsUpdatedCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Number Of Rows To Skip.
   */
  declare numberOfRowsToSkip: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Target Status.
   * @nullable
   */
  declare targetStatus?: DmfBatchJobStatus | null;
  /**
   * Sequence In Level.
   */
  declare sequenceInLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Target Records Created Count.
   */
  declare targetRecordsCreatedCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Staging End Date Time.
   */
  declare stagingEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Parallel Task Count.
   */
  declare parallelTaskCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Execute Target Step.
   * @nullable
   */
  declare executeTargetStep?: NoYes | null;
  /**
   * Excel Sheet Name.
   * @nullable
   */
  declare excelSheetName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Staging Records Created Count.
   */
  declare stagingRecordsCreatedCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Target End Date Time.
   */
  declare targetEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ignore Error.
   * @nullable
   */
  declare ignoreError?: NoYes | null;
  /**
   * Create Error File.
   * @nullable
   */
  declare createErrorFile?: NoYes | null;
  /**
   * Execution Unit.
   */
  declare executionUnit: DeserializedType<T, 'Edm.Int32'>;
  /**
   * First Row Is Header.
   * @nullable
   */
  declare firstRowIsHeader?: NoYes | null;
  /**
   * Source Format.
   * @nullable
   */
  declare sourceFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sequence Number.
   */
  declare sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Fail Level On Error.
   * @nullable
   */
  declare failLevelOnError?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link DataManagementExecutionJobs} entity.
   */
  declare executionJob?: DataManagementExecutionJobs<T> | null;

  constructor(_entityApi: DataManagementExecutionJobDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface DataManagementExecutionJobDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  definitionGroupId: DeserializedType<T, 'Edm.String'>;
  jobId: DeserializedType<T, 'Edm.String'>;
  entityName: DeserializedType<T, 'Edm.String'>;
  levelInExecutionUnit: DeserializedType<T, 'Edm.Int32'>;
  stagingStatus?: DmfBatchJobStatus | null;
  runBusinessValidation?: NoYes | null;
  failExecutionUnitOnError?: NoYes | null;
  filePath?: DeserializedType<T, 'Edm.String'> | null;
  runBusinessLogic?: NoYes | null;
  targetStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  stagingRecordsToBeProcessedCount: DeserializedType<T, 'Edm.Int32'>;
  stagingStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  targetRecordsUpdatedCount: DeserializedType<T, 'Edm.Int32'>;
  numberOfRowsToSkip: DeserializedType<T, 'Edm.Int32'>;
  targetStatus?: DmfBatchJobStatus | null;
  sequenceInLevel: DeserializedType<T, 'Edm.Int32'>;
  targetRecordsCreatedCount: DeserializedType<T, 'Edm.Int32'>;
  stagingEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  parallelTaskCount: DeserializedType<T, 'Edm.Int32'>;
  executeTargetStep?: NoYes | null;
  excelSheetName?: DeserializedType<T, 'Edm.String'> | null;
  stagingRecordsCreatedCount: DeserializedType<T, 'Edm.Int32'>;
  targetEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  ignoreError?: NoYes | null;
  createErrorFile?: NoYes | null;
  executionUnit: DeserializedType<T, 'Edm.Int32'>;
  firstRowIsHeader?: NoYes | null;
  sourceFormat?: DeserializedType<T, 'Edm.String'> | null;
  sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  failLevelOnError?: NoYes | null;
  executionJob?: DataManagementExecutionJobsType<T> | null;
}
