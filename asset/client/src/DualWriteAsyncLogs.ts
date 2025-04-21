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
import type { DualWriteAsyncLogsApi } from './DualWriteAsyncLogsApi';
import { NoYes } from './NoYes';
import { DualWriteEnqueueReasonCode } from './DualWriteEnqueueReasonCode';

/**
 * This class represents the entity "DualWriteAsyncLogs" of service "d365_metadata".
 */
export class DualWriteAsyncLogs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DualWriteAsyncLogsType<T>
{
  /**
   * Technical entity name for DualWriteAsyncLogs.
   */
  static override _entityName = 'DualWriteAsyncLogs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DualWriteAsyncLogs entity.
   */
  static _keys = ['dataAreaId', 'RowId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Row Id.
   */
  declare rowId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sync Execution Id.
   * @nullable
   */
  declare syncExecutionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Concurrency Token.
   * @nullable
   */
  declare concurrencyToken?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Insert.
   * @nullable
   */
  declare isInsert?: NoYes | null;
  /**
   * Enqueue Reason Code.
   * @nullable
   */
  declare enqueueReasonCode?: DualWriteEnqueueReasonCode | null;
  /**
   * Unique Entity Name.
   * @nullable
   */
  declare uniqueEntityName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DualWriteAsyncLogsApi<T>) {
    super(_entityApi);
  }
}

export interface DualWriteAsyncLogsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rowId: DeserializedType<T, 'Edm.Int64'>;
  syncExecutionId?: DeserializedType<T, 'Edm.String'> | null;
  concurrencyToken?: DeserializedType<T, 'Edm.String'> | null;
  isInsert?: NoYes | null;
  enqueueReasonCode?: DualWriteEnqueueReasonCode | null;
  uniqueEntityName?: DeserializedType<T, 'Edm.String'> | null;
}
