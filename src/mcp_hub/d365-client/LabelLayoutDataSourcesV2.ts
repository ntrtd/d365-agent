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
import type { LabelLayoutDataSourcesV2Api } from './LabelLayoutDataSourcesV2Api';
import { WhsLabelLayoutDataSourceJoinType } from './WhsLabelLayoutDataSourceJoinType';
import { WhsLabelLayoutType } from './WhsLabelLayoutType';

/**
 * This class represents the entity "LabelLayoutDataSourcesV2" of service "d365_metadata".
 */
export class LabelLayoutDataSourcesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LabelLayoutDataSourcesV2Type<T>
{
  /**
   * Technical entity name for LabelLayoutDataSourcesV2.
   */
  static override _entityName = 'LabelLayoutDataSourcesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LabelLayoutDataSourcesV2 entity.
   */
  static _keys = ['dataAreaId', 'LabelLayoutDataSourceId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Label Layout Data Source Id.
   */
  declare labelLayoutDataSourceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Join Type.
   * @nullable
   */
  declare joinType?: WhsLabelLayoutDataSourceJoinType | null;
  /**
   * Data Source Query.
   * @nullable
   */
  declare dataSourceQuery?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Data Source Query Json.
   * @nullable
   */
  declare dataSourceQueryJson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Layout Type.
   * @nullable
   */
  declare layoutType?: WhsLabelLayoutType | null;
  /**
   * Custom Label Root Data Source Table Name.
   * @nullable
   */
  declare customLabelRootDataSourceTableName?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: LabelLayoutDataSourcesV2Api<T>) {
    super(_entityApi);
  }
}

export interface LabelLayoutDataSourcesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  labelLayoutDataSourceId: DeserializedType<T, 'Edm.String'>;
  joinType?: WhsLabelLayoutDataSourceJoinType | null;
  dataSourceQuery?: DeserializedType<T, 'Edm.Binary'> | null;
  dataSourceQueryJson?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  layoutType?: WhsLabelLayoutType | null;
  customLabelRootDataSourceTableName?: DeserializedType<T, 'Edm.String'> | null;
}
