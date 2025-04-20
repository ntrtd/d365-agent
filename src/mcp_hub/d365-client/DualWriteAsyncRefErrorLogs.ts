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
import type { DualWriteAsyncRefErrorLogsApi } from './DualWriteAsyncRefErrorLogsApi';
import { NoYes } from './NoYes';
import { DualWriteSynchErrorType } from './DualWriteSynchErrorType';

/**
 * This class represents the entity "DualWriteAsyncRefErrorLogs" of service "d365_metadata".
 */
export class DualWriteAsyncRefErrorLogs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DualWriteAsyncRefErrorLogsType<T>
{
  /**
   * Technical entity name for DualWriteAsyncRefErrorLogs.
   */
  static override _entityName = 'DualWriteAsyncRefErrorLogs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DualWriteAsyncRefErrorLogs entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Mark For Retry.
   * @nullable
   */
  declare markForRetry?: NoYes | null;
  /**
   * Sync Execution Id.
   * @nullable
   */
  declare syncExecutionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Synch Error Type.
   * @nullable
   */
  declare synchErrorType?: DualWriteSynchErrorType | null;
  /**
   * Entity Ref Rec Id.
   */
  declare entityRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Concurrency Token.
   * @nullable
   */
  declare concurrencyToken?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dv Error Log Reference.
   */
  declare dvErrorLogReference: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Setup Sync Execution Id.
   * @nullable
   */
  declare setupSyncExecutionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Log Creation Timestamp.
   */
  declare logCreationTimestamp: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Insert.
   * @nullable
   */
  declare isInsert?: NoYes | null;
  /**
   * Unique Entity Name.
   * @nullable
   */
  declare uniqueEntityName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DualWriteAsyncRefErrorLogsApi<T>) {
    super(_entityApi);
  }
}

export interface DualWriteAsyncRefErrorLogsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  markForRetry?: NoYes | null;
  syncExecutionId?: DeserializedType<T, 'Edm.String'> | null;
  synchErrorType?: DualWriteSynchErrorType | null;
  entityRefRecId: DeserializedType<T, 'Edm.Int64'>;
  concurrencyToken?: DeserializedType<T, 'Edm.String'> | null;
  dvErrorLogReference: DeserializedType<T, 'Edm.Guid'>;
  setupSyncExecutionId?: DeserializedType<T, 'Edm.String'> | null;
  logCreationTimestamp: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isInsert?: NoYes | null;
  uniqueEntityName?: DeserializedType<T, 'Edm.String'> | null;
}
