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
import type { ConfiguratorLayoutLinesApi } from './ConfiguratorLayoutLinesApi';
import { ConfLayoutLineTypeBr } from './ConfLayoutLineTypeBr';
import { NoYes } from './NoYes';
import { ConfBatchLayoutLineTypeBr } from './ConfBatchLayoutLineTypeBr';
import {
  ConfiguratorLayoutGroups,
  ConfiguratorLayoutGroupsType
} from './ConfiguratorLayoutGroups';

/**
 * This class represents the entity "ConfiguratorLayoutLines" of service "d365_metadata".
 */
export class ConfiguratorLayoutLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ConfiguratorLayoutLinesType<T>
{
  /**
   * Technical entity name for ConfiguratorLayoutLines.
   */
  static override _entityName = 'ConfiguratorLayoutLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ConfiguratorLayoutLines entity.
   */
  static _keys = ['dataAreaId', 'LayoutGroupId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Layout Group Id.
   */
  declare layoutGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Record Type.
   * @nullable
   */
  declare recordType?: ConfLayoutLineTypeBr | null;
  /**
   * Record Name.
   * @nullable
   */
  declare recordName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Record Size.
   */
  declare recordSize: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Hide.
   * @nullable
   */
  declare hide?: NoYes | null;
  /**
   * Segment.
   * @nullable
   */
  declare segment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Batch Id.
   * @nullable
   */
  declare batchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Batch Record Type.
   * @nullable
   */
  declare batchRecordType?: ConfBatchLayoutLineTypeBr | null;
  /**
   * One-to-one navigation property to the {@link ConfiguratorLayoutGroups} entity.
   */
  declare configuratorLayoutGroup?: ConfiguratorLayoutGroups<T> | null;

  constructor(_entityApi: ConfiguratorLayoutLinesApi<T>) {
    super(_entityApi);
  }
}

export interface ConfiguratorLayoutLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  layoutGroupId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  recordType?: ConfLayoutLineTypeBr | null;
  recordName?: DeserializedType<T, 'Edm.String'> | null;
  recordSize: DeserializedType<T, 'Edm.Int32'>;
  hide?: NoYes | null;
  segment?: DeserializedType<T, 'Edm.String'> | null;
  batchId?: DeserializedType<T, 'Edm.String'> | null;
  batchRecordType?: ConfBatchLayoutLineTypeBr | null;
  configuratorLayoutGroup?: ConfiguratorLayoutGroupsType<T> | null;
}
