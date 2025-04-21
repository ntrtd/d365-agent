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
import type { ModelTablesApi } from './ModelTablesApi';

/**
 * This class represents the entity "ModelTables" of service "d365_metadata".
 */
export class ModelTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ModelTablesType<T>
{
  /**
   * Technical entity name for ModelTables.
   */
  static override _entityName = 'ModelTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ModelTables entity.
   */
  static _keys = ['dataAreaId', 'Model'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Model.
   */
  declare model: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ModelTablesApi<T>) {
    super(_entityApi);
  }
}

export interface ModelTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  model: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
