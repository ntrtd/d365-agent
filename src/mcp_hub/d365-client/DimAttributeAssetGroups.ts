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
import type { DimAttributeAssetGroupsApi } from './DimAttributeAssetGroupsApi';

/**
 * This class represents the entity "DimAttributeAssetGroups" of service "d365_metadata".
 */
export class DimAttributeAssetGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimAttributeAssetGroupsType<T>
{
  /**
   * Technical entity name for DimAttributeAssetGroups.
   */
  static override _entityName = 'DimAttributeAssetGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimAttributeAssetGroups entity.
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

  constructor(_entityApi: DimAttributeAssetGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface DimAttributeAssetGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  value: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
