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
import type { DimAttributeAssetTablesApi } from './DimAttributeAssetTablesApi';

/**
 * This class represents the entity "DimAttributeAssetTables" of service "d365_metadata".
 */
export class DimAttributeAssetTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimAttributeAssetTablesType<T>
{
  /**
   * Technical entity name for DimAttributeAssetTables.
   */
  static override _entityName = 'DimAttributeAssetTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimAttributeAssetTables entity.
   */
  static _keys = ['dataAreaId', 'Value'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DimAttributeAssetTablesApi<T>) {
    super(_entityApi);
  }
}

export interface DimAttributeAssetTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  value: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
