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
import type { ZakatAssetGroupsApi } from './ZakatAssetGroupsApi';

/**
 * This class represents the entity "ZakatAssetGroups" of service "d365_metadata".
 */
export class ZakatAssetGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ZakatAssetGroupsType<T>
{
  /**
   * Technical entity name for ZakatAssetGroups.
   */
  static override _entityName = 'ZakatAssetGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ZakatAssetGroups entity.
   */
  static _keys = ['dataAreaId', 'GroupName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Name.
   */
  declare groupName: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Type.
   * @nullable
   */
  declare groupType?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ZakatAssetGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ZakatAssetGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupName: DeserializedType<T, 'Edm.String'>;
  groupType?: DeserializedType<T, 'Edm.String'> | null;
}
