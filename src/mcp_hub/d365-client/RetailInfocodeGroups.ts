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
import type { RetailInfocodeGroupsApi } from './RetailInfocodeGroupsApi';

/**
 * This class represents the entity "RetailInfocodeGroups" of service "d365_metadata".
 */
export class RetailInfocodeGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailInfocodeGroupsType<T>
{
  /**
   * Technical entity name for RetailInfocodeGroups.
   */
  static override _entityName = 'RetailInfocodeGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailInfocodeGroups entity.
   */
  static _keys = ['dataAreaId', 'GroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailInfocodeGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailInfocodeGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
