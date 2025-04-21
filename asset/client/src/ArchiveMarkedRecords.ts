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
import type { ArchiveMarkedRecordsApi } from './ArchiveMarkedRecordsApi';

/**
 * This class represents the entity "ArchiveMarkedRecords" of service "d365_metadata".
 */
export class ArchiveMarkedRecords<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ArchiveMarkedRecordsType<T>
{
  /**
   * Technical entity name for ArchiveMarkedRecords.
   */
  static override _entityName = 'ArchiveMarkedRecords';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ArchiveMarkedRecords entity.
   */
  static _keys = [
    'ArchiveRunId',
    'ArchiveBundleId',
    'EntityLogicalName',
    'RecordId'
  ];
  /**
   * Archive Run Id.
   */
  declare archiveRunId: DeserializedType<T, 'Edm.String'>;
  /**
   * Archive Bundle Id.
   */
  declare archiveBundleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Entity Logical Name.
   */
  declare entityLogicalName: DeserializedType<T, 'Edm.String'>;
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Should Delete.
   */
  declare shouldDelete: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: ArchiveMarkedRecordsApi<T>) {
    super(_entityApi);
  }
}

export interface ArchiveMarkedRecordsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  archiveRunId: DeserializedType<T, 'Edm.String'>;
  archiveBundleId: DeserializedType<T, 'Edm.String'>;
  entityLogicalName: DeserializedType<T, 'Edm.String'>;
  recordId: DeserializedType<T, 'Edm.Int64'>;
  shouldDelete: DeserializedType<T, 'Edm.Int32'>;
}
