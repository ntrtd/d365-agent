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
import type { DatabaseLogsApi } from './DatabaseLogsApi';
import { DatabaseLogType } from './DatabaseLogType';

/**
 * This class represents the entity "DatabaseLogs" of service "d365_metadata".
 */
export class DatabaseLogs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DatabaseLogsType<T>
{
  /**
   * Technical entity name for DatabaseLogs.
   */
  static override _entityName = 'DatabaseLogs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DatabaseLogs entity.
   */
  static _keys = ['dataAreaId', 'TableRecId', 'LogRecId', 'TableIdNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Table Rec Id.
   */
  declare tableRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Log Rec Id.
   */
  declare logRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Table Id Number.
   */
  declare tableIdNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Log Partition.
   */
  declare logPartition: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Log Created By.
   * @nullable
   */
  declare logCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Log Created Transaction Id.
   */
  declare logCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sequence Number.
   */
  declare sequenceNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Log Data Area Id.
   * @nullable
   */
  declare logDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Data.
   * @nullable
   */
  declare formattedData?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Log Created Date Time.
   */
  declare logCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Table Name.
   * @nullable
   */
  declare tableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Table Rec Version.
   */
  declare tableRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Data.
   * @nullable
   */
  declare data?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Log Type.
   * @nullable
   */
  declare logType?: DatabaseLogType | null;
  /**
   * New Data.
   * @nullable
   */
  declare newData?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Username.
   * @nullable
   */
  declare username?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DatabaseLogsApi<T>) {
    super(_entityApi);
  }
}

export interface DatabaseLogsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tableRecId: DeserializedType<T, 'Edm.Int64'>;
  logRecId: DeserializedType<T, 'Edm.Int64'>;
  tableIdNumber: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  logPartition: DeserializedType<T, 'Edm.Int64'>;
  logCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  logCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  sequenceNumber: DeserializedType<T, 'Edm.Int64'>;
  logDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  formattedData?: DeserializedType<T, 'Edm.String'> | null;
  logCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  tableName?: DeserializedType<T, 'Edm.String'> | null;
  tableRecVersion: DeserializedType<T, 'Edm.Int32'>;
  data?: DeserializedType<T, 'Edm.Binary'> | null;
  logType?: DatabaseLogType | null;
  newData?: DeserializedType<T, 'Edm.String'> | null;
  username?: DeserializedType<T, 'Edm.String'> | null;
}
