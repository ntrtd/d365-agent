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
import type { AssetPropertyGroupsApi } from './AssetPropertyGroupsApi';

/**
 * This class represents the entity "AssetPropertyGroups" of service "d365_metadata".
 */
export class AssetPropertyGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AssetPropertyGroupsType<T>
{
  /**
   * Technical entity name for AssetPropertyGroups.
   */
  static override _entityName = 'AssetPropertyGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetPropertyGroups entity.
   */
  static _keys = ['dataAreaId', 'AssetPropertyGroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Asset Property Group Id.
   */
  declare assetPropertyGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AssetPropertyGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetPropertyGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  assetPropertyGroupId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
