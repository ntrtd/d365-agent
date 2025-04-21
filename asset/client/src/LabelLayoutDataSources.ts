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
import type { LabelLayoutDataSourcesApi } from './LabelLayoutDataSourcesApi';
import { WhsLabelLayoutType } from './WhsLabelLayoutType';

/**
 * This class represents the entity "LabelLayoutDataSources" of service "d365_metadata".
 */
export class LabelLayoutDataSources<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LabelLayoutDataSourcesType<T>
{
  /**
   * Technical entity name for LabelLayoutDataSources.
   */
  static override _entityName = 'LabelLayoutDataSources';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LabelLayoutDataSources entity.
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
   * Data Source Query.
   * @nullable
   */
  declare dataSourceQuery?: DeserializedType<T, 'Edm.Binary'> | null;
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

  constructor(_entityApi: LabelLayoutDataSourcesApi<T>) {
    super(_entityApi);
  }
}

export interface LabelLayoutDataSourcesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  labelLayoutDataSourceId: DeserializedType<T, 'Edm.String'>;
  dataSourceQuery?: DeserializedType<T, 'Edm.Binary'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  layoutType?: WhsLabelLayoutType | null;
  customLabelRootDataSourceTableName?: DeserializedType<T, 'Edm.String'> | null;
}
